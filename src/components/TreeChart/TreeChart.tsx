import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import React, { useRef } from 'react';

import { TreeNode } from './types';

function createSVG(
  wrapper: Element,
): d3.Selection<SVGGElement, unknown, null, undefined> {
  return (
    d3

      .select(wrapper)

      // Class to make it responsive.
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 800 500')
      .classed('svg-content-responsive', true)
      .append('g')
      .attr('transform', `translate(25,25)`)
  );
}
function createTreeLayout(
  executionTree: TreeNode,
): d3.HierarchyPointNode<TreeNode> {
  const treeLayout = d3.tree().size([800, 450]);
  const hierarchyRoot = d3.hierarchy(executionTree);
  treeLayout(hierarchyRoot);
  return hierarchyRoot as d3.HierarchyPointNode<TreeNode>;
}
function textInCircle(
  nodeSelection: d3.Selection<
    d3.EnterElement,
    d3.HierarchyPointNode<TreeNode>,
    SVGGElement,
    unknown
  >,
  color: string,
): d3.Selection<
  SVGTextElement,
  d3.HierarchyPointNode<TreeNode>,
  SVGGElement,
  unknown
> {
  return nodeSelection
    .append('text')
    .classed('text', true)
    .style('font-family', 'monospace')
    .style('font-size', '0.6em')
    .attr('text-anchor', 'middle')
    .style('fill', ({ data }) => (data.optimal ? color : '#ccc'))
    .attr('x', d => d.x)
    .attr('y', d => d.y);
}
function drawLines(
  svg: d3.Selection<SVGGElement, unknown, null, undefined>,
  treeLayout: d3.HierarchyPointNode<TreeNode>,
): void {
  svg
    .selectAll('line.link')
    .data(treeLayout.links())
    .enter()
    .append('line')
    .style('stroke', d =>
      d.source.data.optimal && d.target.data.optimal ? 'red' : '#ccc',
    )
    .classed('link', true)
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
}

function selectNodes(
  svg: d3.Selection<SVGGElement, unknown, null, undefined>,
  treeLayout: d3.HierarchyPointNode<TreeNode>,
): d3.Selection<
  d3.EnterElement,
  d3.HierarchyPointNode<TreeNode>,
  SVGGElement,
  unknown
> {
  const nodes = treeLayout.descendants();
  return svg
    .selectAll('circle.node')
    .data(nodes)
    .enter();
}

function drawNodeCircles(
  svg: d3.Selection<SVGGElement, unknown, null, undefined>,
  treeLayout: d3.HierarchyPointNode<TreeNode>,
): void {
  const nodeSelection = selectNodes(svg, treeLayout);

  nodeSelection
    .append('circle')
    .classed('node', true)
    .style('stroke', ({ data }) => (data.optimal ? 'red' : '#ccc'))
    .style('stroke-width', '1px')
    .style('fill', 'white')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', '0.9em');
  textInCircle(nodeSelection, 'blue')
    .attr('dy', '-0.6em')
    .text(d => d.data.upperBound || '0');
  textInCircle(nodeSelection, 'green')
    .attr('dy', '.4em')
    .text(d => d.data.value || '0');
  textInCircle(nodeSelection, 'red')
    .attr('dy', '1.4em')
    .text(d => Math.round(d.data.weight * 100) / 100 || '0');
}

export function TreeChart({
  executionTree,
}: {
  executionTree: TreeNode;
}): JSX.Element {
  const wrapperRef = useRef(null);

  const wrapper = ReactFauxDOM.createElement('svg');
  const svg = createSVG(wrapper);

  const treeLayout = createTreeLayout(executionTree);

  drawLines(svg, treeLayout);
  drawNodeCircles(svg, treeLayout);

  return <div ref={wrapperRef}>{wrapper.toReact()}</div>;
}
