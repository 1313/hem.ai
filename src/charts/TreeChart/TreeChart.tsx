import { TreeNode } from './types';
import { createExecutionTree } from './logic';
import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import { Item } from '../../order-generator/KnapsackSolver';
import { useWindowResize } from './windowResizeHook';
import React, { useRef, useEffect, useState } from 'react';

interface Layout {
    width: number;
    height: number;
    margin: { top: number; bottom: number; left: number; right: number };
}
function createSVG(
    { width, height, margin }: Layout,
    wrapper: Element,
): d3.Selection<SVGGElement, unknown, null, undefined> {
    return d3
        .select(wrapper)
        .attr('width', width + (margin.left + margin.right))
        .attr('height', height + (margin.top + margin.bottom))
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
}
function createTreeLayout(
    { width, height }: Layout,
    executionTree: TreeNode,
): d3.HierarchyPointNode<TreeNode> {
    const treeLayout = d3.tree().size([width, height]);
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
    svg.selectAll('line.link')
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
        .attr('r', '1em');
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
function TreeChart({
    items,
    capacity,
}: {
    items: Item[];
    capacity: number;
}): JSX.Element {
    const { height: innerHeight } = useWindowResize();
    const wrapperRef = useRef(null);
    const margin = { top: 50, right: 0, bottom: 100, left: 0 };
    const [innerWidth, setWidth] = useState(100);
    useEffect(() => {
        const { width } = (wrapperRef.current &&
            wrapperRef.current.getBoundingClientRect()) || { width: 100 };
        setWidth(width);
    }, [wrapperRef]);
    const layout = {
        margin,
        width: innerWidth - margin.right - margin.left,
        height: innerHeight - margin.top - margin.bottom - 5,
    };
    const wrapper = ReactFauxDOM.createElement('svg');
    const svg = createSVG(layout, wrapper);

    const { executionTree, result } = createExecutionTree(items, capacity);

    const treeLayout = createTreeLayout(layout, executionTree);

    drawLines(svg, treeLayout);
    drawNodeCircles(svg, treeLayout);

    return (
        <div style={{ width: '100%' }} ref={wrapperRef}>
            <h3>Maximum value: {result.maxValue}</h3>
            <h3>
                Execution: {result.complexity.iterations} /{' '}
                {result.complexity.max} = {result.complexity.ratio}
            </h3>
            <h3>Optimal Items:</h3>
            <pre>{JSON.stringify(result.items, null, '\t')}</pre>
            {wrapper.toReact()}
        </div>
    );
}

export default TreeChart;
