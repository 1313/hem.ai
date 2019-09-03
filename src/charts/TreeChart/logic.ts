import {
    Item,
    branchAndBound,
    newStartNode,
    createSkipItemNode,
    createPickItemNode,
    BranchAndBoundOutput,
} from '../../order-generator/KnapsackSolver';
import { TreeNode } from './types';

import { createGroups } from '../../order-generator/Groupable';

export function createExecutionTree(
    items: Item[],
    capacity: number,
): { executionTree: TreeNode; result: BranchAndBoundOutput } {
    const rootNode: TreeNode = newStartNode();
    const groups = createGroups(items);

    rootNode.optimal = true;

    const result = branchAndBound({
        capacity,
        items,
    });

    const optimalPath = items.map(item =>
        result.items.includes(item) ? true : false,
    );

    const queue = [rootNode];
    let nextLevel = rootNode.level;
    while (queue.length) {
        const currentNode = queue.pop();

        if (currentNode.level === items.length - 1) {
            continue;
        }
        nextLevel = currentNode.level + 1;

        const input = { items, capacity };

        const pickNode: TreeNode = createPickItemNode(
            currentNode,
            nextLevel,
            input,
            groups,
        );
        const skipNode: TreeNode = createSkipItemNode(
            currentNode,
            nextLevel,
            input,
        );

        skipNode.optimal =
            currentNode.optimal && optimalPath[nextLevel] === false;
        pickNode.optimal =
            currentNode.optimal && optimalPath[nextLevel] === true;

        if (currentNode.optimal) {
            queue.push(pickNode);
            queue.push(skipNode);
            currentNode.children = [pickNode, skipNode];
        }
    }

    return { executionTree: rootNode, result };
}
