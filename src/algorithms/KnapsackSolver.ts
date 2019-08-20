import { Groupable } from './Groupable';
import TinyQueue from 'tinyqueue';

interface Item extends Groupable {
    weight: number;
    value: number;
}

interface BranchAndBoundInput {
    items: Array<Item>;
    capacity: number;
}

function sortByValueWeightRatio(a: Item, b: Item): number {
    return b.value / b.weight - a.value / a.weight;
}

interface Node {
    value: number;
    level: number;
    weight: number;
    upperBound: number;
}

function calculateUpperBound(node: Node, input: BranchAndBoundInput): number {
    if (node.weight >= input.capacity) {
        return 0;
    }
    // Start with the current value
    let upperBoundValue = node.value;

    // Calculate bound on levels below current
    let boundLevel = node.level + 1;
    // Start totalWeight with node.weight
    let totalWeight = node.weight;

    // Hypotetically pick all items below in greedy manner
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
        upperBoundValue +
            ((input.capacity - totalWeight) * input.items[boundLevel].value) /
                input.items[boundLevel].weight;
    }

    return upperBoundValue;
}

interface BranchAndBoundOutput {
    maxValue: number;
    items: Array<Item>;
}

export function branchAndBound(
    input: BranchAndBoundInput,
): BranchAndBoundOutput {
    input.items.sort(sortByValueWeightRatio);

    let current: Node = { level: -1, value: 0, weight: 0, upperBound: 0 };

    const queue: TinyQueue<Node> = new TinyQueue(
        [current],
        (a, b): number => b.upperBound - a.upperBound,
    );

    let lowerBoundValue = 0;
    queue.push(current);
    const pickedItems = [];
    while (queue.length > 0) {
        current = queue.pop() as Node;

        // Knapsack is full
        if (current.level === input.items.length - 1) {
            continue;
        }

        const nextLevel = current.level + 1;

        // Take the next item, increase weight and value item
        const item = input.items[nextLevel];
        const leftNode = {
            ...current,
            level: nextLevel,
            weight: current.weight + item.weight,
            value: current.value + item.value,
        };
        // if we have found a higher lowerBound update it with
        // a new value and store the item that marked the new
        // value
        if (
            leftNode.weight <= input.capacity &&
            leftNode.value > lowerBoundValue
        ) {
            lowerBoundValue = leftNode.value;
            pickedItems.push(item);
        }

        leftNode.upperBound = calculateUpperBound(leftNode, input);

        // If we found a higher upper bound, search further
        if (leftNode.upperBound > lowerBoundValue) {
            queue.push(leftNode);
        }

        // Dont take the item (keep same weight and value and go to next level)
        const rightNode = {
            ...current,
            level: nextLevel,
        };
        rightNode.upperBound = calculateUpperBound(rightNode, input);
        if (rightNode.upperBound > lowerBoundValue) {
            queue.push(rightNode);
        }
    }

    return { maxValue: lowerBoundValue, items: pickedItems };
}
