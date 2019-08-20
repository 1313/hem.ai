import { Groupable } from './Groupable';

export interface Item extends Groupable {
    baseWeight: number;
    value: number;
}
export interface BranchAndBoundInput {
    items: Array<Item>;
    capacity: number;
}

function sortByValueWeightRatio(a: Item, b: Item): number {
    return b.value / b.baseWeight - a.value / a.baseWeight;
}
interface Node {
    profit: number;
    level: number;
    weight: number;
    bound: number;
}

function bound(u: Node, input: BranchAndBoundInput): number {
    // if weight overcomes the knapsack capacity, return
    // 0 as expected bound
    if (u.weight >= input.capacity) {
        return 0;
    }
    // initialize bound on profit by u profit
    let profitBound = Math.floor(u.profit);

    // start including items from index 1 more to u
    // item index
    let j = u.level + 1;
    let totweight = Math.floor(u.weight);

    // checking index condition and knapsack capacity
    // condition
    while (
        j < input.items.length &&
        Math.floor(totweight) + input.items[j].baseWeight <= input.capacity
    ) {
        totweight += Math.floor(input.items[j].baseWeight);

        profitBound += Math.floor(input.items[j].value);
        j++;
    }

    // If k is not n, include last item partially for
    // upper bound on profit

    if (j < input.items.length) {
        profitBound += Math.floor(
            ((input.capacity - totweight) * input.items[j].value) /
                input.items[j].baseWeight,
        );
    }

    return profitBound;
}

export function branchAndBound(input: BranchAndBoundInput): Array<Item> {
    input.items.sort(sortByValueWeightRatio);

    const queue: Array<Node> = [];

    let current: Node = { level: -1, profit: 0, weight: 0, bound: 0 };
    const resultNode: Node = { level: 0, weight: 0, profit: 0, bound: 0 };

    let maxProfit = 0;
    queue.push(current);
    const result = [];
    while (queue.length > 0) {
        current = queue.shift() as Node;

        if (current.level == -1) {
            resultNode.level = 0;
        }

        if (current.level == input.items.length - 1) {
            continue;
        }

        resultNode.level = current.level + 1;

        const item = input.items[resultNode.level];
        resultNode.weight = current.weight + item.baseWeight;
        resultNode.profit = Math.floor(current.profit + item.value);
        if (
            resultNode.weight <= input.capacity &&
            resultNode.profit > maxProfit
        ) {
            maxProfit = resultNode.profit;
            result.push(item);
        }
        resultNode.bound = bound(resultNode, input);

        if (resultNode.bound > maxProfit) {
            queue.push(Object.assign({}, resultNode));
        }

        resultNode.weight = current.weight;
        resultNode.profit = Math.floor(current.profit);
        resultNode.bound = bound(resultNode, input);
        if (resultNode.bound > maxProfit) {
            queue.push(Object.assign({}, resultNode));
        }
    }

    return result;
}
