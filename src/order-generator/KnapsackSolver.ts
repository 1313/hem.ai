import { Groupable, createGroups, Groups } from './Groupable';
import TinyQueue from 'tinyqueue';

export interface Item extends Groupable {
    weight: number;
    extraWeight?: number;
    value: number;
}

interface BranchAndBoundInput {
    items: Item[];
    capacity: number;
}

export interface Node {
    items: Item[];
    value: number;
    level: number;
    weight: number;
    upperBound: number;
}

export function calculateUpperBound(
    node: Node,
    input: BranchAndBoundInput,
): number {
    if (node.weight >= input.capacity) {
        return 0;
    }
    // Start with the current value
    let upperBoundValue = node.value;

    // Calculate bound on levels below current
    let boundLevel = node.level + 1;
    // Start totalWeight with node.weight
    let totalWeight = node.weight;

    // Hypothetically pick all items below in greedy manner
    while (
        boundLevel < input.items.length &&
        totalWeight + input.items[boundLevel].weight <= input.capacity
    ) {
        totalWeight += input.items[boundLevel].weight;
        upperBoundValue += input.items[boundLevel].value;
        boundLevel++;
    }

    //If there are items left to pick
    if (boundLevel < input.items.length) {
        // Take a fraction of the next item to fill the knapsack
        upperBoundValue += Math.ceil(
            ((input.capacity - totalWeight) * input.items[boundLevel].value) /
                input.items[boundLevel].weight,
        );
    }

    return upperBoundValue;
}

export interface BranchAndBoundOutput {
    maxValue: number;
    items: Item[];
    complexity: {
        max: number;
        iterations: number;
        ratio: number;
    };
}
export function createPickItemNode(
    current: Node,
    nextLevel: number,
    input: BranchAndBoundInput,
    groups: Groups<Item>,
): Node {
    // Take the next item, increase weight and value item
    const item = input.items[nextLevel];

    const groupItems = groups[item.group];
    if (groupItems.length > 1) {
        for (const groupItem of groupItems) {
            if (current.items.includes(groupItem)) {
                item.extraWeight =
                    (item.weight / item.value + 1) *
                    (item.weight / item.value + 1) *
                    current.items.length *
                    current.items.length;
            }
        }
    }

    const node = {
        ...current,
        level: nextLevel,
        weight: current.weight + item.weight + (item.extraWeight || 0),
        value: current.value + item.value,
        items: [...current.items, item],
    };

    // Calculate upper bound for if we pick the current item
    node.upperBound = calculateUpperBound(node, input);
    return node;
}
export function createSkipItemNode(
    current: Node,
    nextLevel: number,
    input: BranchAndBoundInput,
): Node {
    // Don't take the item (keep same weight and value and go to next level)
    const node = {
        ...current,
        level: nextLevel,
    };
    // Calculate upperBound for if we skip the current item
    node.upperBound = calculateUpperBound(node, input);
    return node;
}
export function newStartNode(): Node {
    return {
        items: [],
        level: -1,
        value: 0,
        weight: 0,
        upperBound: 0,
    };
}

export function branchAndBound(
    input: BranchAndBoundInput,
): BranchAndBoundOutput {
    const groups = createGroups(input.items);
    let current: Node = newStartNode();

    const queue: TinyQueue<Node> = new TinyQueue(
        [current],
        (a, b): number => b.upperBound - a.upperBound,
    );

    // Result variables
    let lowerBoundValue = 0;
    let pickedItems: Item[] = [];
    let iterations = 0;
    while (queue.length > 0) {
        current = queue.pop();

        // We have examined all items
        if (current.level === input.items.length - 1) {
            continue;
        }
        iterations++;
        const nextLevel = current.level + 1;

        // Pick item Node represent that we take an item
        // at current level
        const pickItemNode = createPickItemNode(
            current,
            nextLevel,
            input,
            groups,
        );

        // Update the current best solution
        // I.E lower bound and items selected
        // to represent the new lower bound
        if (
            pickItemNode.weight <= input.capacity &&
            pickItemNode.value > lowerBoundValue
        ) {
            lowerBoundValue = pickItemNode.value;
            pickedItems = pickItemNode.items;
        }
        // If we found a higher upper bound, search further

        if (pickItemNode.upperBound > lowerBoundValue) {
            queue.push(pickItemNode);
        }

        // The skip item node represent that we don't take the item (keep same weight and value and go to next level)
        const skipItemNode = createSkipItemNode(current, nextLevel, input);

        // If we have found a higher upper bound, continue searching
        if (skipItemNode.upperBound > lowerBoundValue) {
            queue.push(skipItemNode);
        }
    }

    return {
        complexity: {
            iterations,
            max: 2 ** input.items.length,
            ratio: iterations / 2 ** input.items.length,
        },
        maxValue: lowerBoundValue,
        items: pickedItems,
    };
}
