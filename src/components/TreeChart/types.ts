import { Node } from '../../order-generator/KnapsackSolver';

export interface TreeNode extends Node {
  children?: Array<TreeNode>;
  optimal?: boolean;
}
