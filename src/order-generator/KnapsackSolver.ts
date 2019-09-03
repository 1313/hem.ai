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
    items: Item[],
    capacity: number,
): number {
    if (node.weight >= capacity) {
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
        boundLevel < items.length &&
        totalWeight + items[boundLevel].weight <= capacity
    ) {
        totalWeight += items[boundLevel].weight;
        upperBoundValue += items[boundLevel].value;
        boundLevel++;
    }

    //If there are items left to pick
    if (boundLevel < items.length) {
        // Take a fraction of the next item to fill the knapsack
        upperBoundValue += Math.ceil(
            ((capacity - totalWeight) * items[boundLevel].value) /
                items[boundLevel].weight,
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
function calculateExtraWeight(
    groups: Groups<Item>,
    item: Item,
    current: Node,
): number | undefined {
    let extraWeight = 0;
    const groupItems = groups[item.group];
    if (groupItems.length > 1) {
        for (const groupItem of groupItems) {
            if (current.items.includes(groupItem)) {
                extraWeight =
                    (item.weight / item.value + 1) *
                    (item.weight / item.value + 1) *
                    current.items.length *
                    current.items.length;
            }
        }
    }
    return extraWeight;
}
export function createPickItemNode(
    current: Node,
    nextLevel: number,
    items: Item[],
    capacity: number,
    groups: Groups<Item>,
): Node {
    // Take the next item, increase weight and value item
    const item = items[nextLevel];

    const node = {
        ...current,
        level: nextLevel,
        weight:
            current.weight +
            item.weight +
            calculateExtraWeight(groups, item, current),
        value: current.value + item.value,
        items: [...current.items, item],
    };

    // Calculate upper bound for if we pick the current item
    node.upperBound = calculateUpperBound(node, items, capacity);
    return node;
}

export function createSkipItemNode(
    current: Node,
    nextLevel: number,
    items: Item[],
    capacity: number,
): Node {
    // Don't take the item (keep same weight and value and go to next level)
    const node = {
        ...current,
        level: nextLevel,
    };
    // Calculate upperBound for if we skip the current item
    node.upperBound = calculateUpperBound(node, items, capacity);
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
    // Sort items in greedy manner, most value per weight
    const items = [...input.items].sort(
        (a, b) => b.value / b.weight - a.value / a.weight,
    );
    const groups = createGroups(items);

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
        if (current.level === items.length - 1) {
            continue;
        }
        iterations++;
        const nextLevel = current.level + 1;

        // Pick item Node represent that we take an item
        // at current level
        const pickItemNode = createPickItemNode(
            current,
            nextLevel,
            items,
            input.capacity,
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
        const skipItemNode = createSkipItemNode(
            current,
            nextLevel,
            items,
            input.capacity,
        );

        // If we have found a higher upper bound, continue searching
        if (skipItemNode.upperBound > lowerBoundValue) {
            queue.push(skipItemNode);
        }
    }

    return {
        complexity: {
            iterations,
            max: 2 ** items.length,
            ratio: iterations / 2 ** items.length,
        },
        maxValue: lowerBoundValue,
        items: pickedItems,
    };
}
