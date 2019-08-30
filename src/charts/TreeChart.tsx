import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import { branchAndBound, Item } from '../order-generator/KnapsackSolver';
import { number } from 'prop-types';
import { style } from 'd3';
interface Point {
    x: number;
    y: number;
}
interface Line {
    source: Point;
    target: Point;
}
interface Node {
    accumulatedWeight: number;
    accumulatedValue: number;
    children?: Array<Node>;
    item?: Item;
    level: number;
    take: boolean;
    skip: boolean;
}
const data: Node = {
    accumulatedWeight: 0,
    accumulatedValue: 0,
    level: -1,
    skip: false,
    take: true,
};

const items = [
    {
        group: '1',
        weight: 1,
        value: 3,
    },
    {
        group: '2',
        weight: 1,
        value: 3,
    },
    {
        group: '3',
        weight: 1,
        value: 3,
    },

    {
        group: '4',
        weight: 2,
        value: 2,
    },

    {
        group: '5',
        weight: 3,
        value: 1,
    },
];

const queue = [data];
const capacity = 3;
const { items: pathItems } = branchAndBound({
    items,
    capacity,
});

const path = items.map(item => (pathItems.includes(item) ? true : false));

while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.level === items.length - 1) {
        continue;
    }

    const nextLevel = currentNode.level + 1;
    const currentItem = items[nextLevel];
    const takeNode = {
        item: currentItem,
        accumulatedValue: currentNode.accumulatedValue + currentItem.value,
        accumulatedWeight: currentNode.accumulatedWeight + currentItem.weight,
        level: nextLevel,
        skip: false,
        take: currentNode.accumulatedWeight + currentItem.weight <= capacity,
    };
    const skipNode = {
        ...currentNode,
        item: currentItem,
        level: nextLevel,
        skip: true,
    };

    queue.push(takeNode);
    queue.push(skipNode);
    currentNode.children = [takeNode, skipNode];
}

branchAndBound({
    items,
    capacity: 10,
});

function TreeChart(): JSX.Element {
    const wrapper = ReactFauxDOM.createElement('svg');
    const margin = { top: 20, right: 0, bottom: 100, left: 0 },
        width = window.innerWidth - margin.right - margin.left,
        height = window.innerHeight - margin.top - margin.bottom;
    const clusterLayout = d3.cluster().size([width, height]);
    const root = d3.hierarchy(data);
    clusterLayout(root);
    const nodes = root.descendants();
    const svg = d3
        .select(wrapper)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom);
    svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .selectAll('line.link')
        .data(root.links())
        .enter()
        .append('line')
        .classed('link', true)
        .style('stroke', d =>
            d.source
                .ancestors()
                .every(node => path[node.data.level] !== node.data.skip) &&
            path[d.target.data.level] !== d.target.data.skip
                ? 'red'
                : 'black',
        )

        .attr('x1', d => ((d as unknown) as Line).source.x)
        .attr('y1', d => ((d as unknown) as Line).source.y)
        .attr('x2', d => ((d as unknown) as Line).target.x)
        .attr('y2', d => ((d as unknown) as Line).target.y);
    const circle = svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .selectAll('circle.node')
        .data(nodes)
        .enter();
    circle
        .append('circle')
        .classed('node', true)
        .style('font-size', d =>
            d
                .ancestors()
                .every(node => path[node.data.level] !== node.data.skip)
                ? 'bold'
                : 'normal',
        )
        .style('stroke', d =>
            d
                .ancestors()
                .every(node => path[node.data.level] !== node.data.skip)
                ? 'red'
                : 'black',
        )
        .style('stroke-width', '3px')
        .style('fill', 'white')
        .attr('cx', d => ((d as unknown) as Point).x)
        .attr('cy', d => ((d as unknown) as Point).y)
        .attr('r', 15);

    circle
        .append('text')
        .classed('text', true)

        .style('fill', 'black')
        .style('font-family', 'sans-serif')
        .style('font-size', '60%')
        .style('text-decoration', d => (d.data.take ? 'none' : 'line-through'))
        .attr('text-anchor', 'middle')
        .attr('x', d => ((d as unknown) as Point).x)
        .attr('y', d => ((d as unknown) as Point).y + 4)
        .text(
            d =>
                `${d.data.accumulatedValue || '0'} / ${d.data
                    .accumulatedWeight || '0'}`,
        );

    return wrapper.toReact();
}

export default TreeChart;
