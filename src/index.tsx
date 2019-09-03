import React, { useState } from 'react';
import { render } from 'react-dom';
import TreeChart from './charts/TreeChart';
import { createExecutionTree } from './charts/TreeChart/logic';

const root = document.getElementById('root');

const defaultItems: [number, number, number?][] = [
    [1, 1],
    [10, 10],
    [5, 60],
    [4, 4],
    [4, 4],
];

function UI(): JSX.Element {
    const [capacity, setCapacity] = useState('10');
    const [itemString, setItems] = useState(JSON.stringify(defaultItems));
    let items: [number, number, number?][] = [];
    try {
        items = JSON.parse(itemString);
    } catch {}

    const mappedItems = items.map(([weight, value, group], index) => ({
        weight,
        value,
        group: group !== undefined ? group : index,
    }));
    const { executionTree, result } = createExecutionTree(
        mappedItems,
        +capacity,
    );
    return (
        <div style={{ width: '100%' }}>
            <div>
                <label htmlFor="capacity">Capacity:</label>
                <input
                    id="capacity"
                    type="number"
                    value={capacity}
                    onChange={({ target }): void => setCapacity(target.value)}
                />

                <label htmlFor="items">Items:</label>
                <textarea
                    style={{ width: '100%', height: '100%' }}
                    cols={30}
                    rows={15}
                    id="items"
                    value={itemString}
                    onChange={({ target }): void => setItems(target.value)}
                ></textarea>
                <button
                    onClick={(): void =>
                        setItems(JSON.stringify(items, null, '\t'))
                    }
                >
                    Format
                </button>
            </div>
            <h3>Maximum value: {result.maxValue}</h3>
            <h3>
                Execution: {result.complexity.iterations} /{' '}
                {result.complexity.max} = {result.complexity.ratio}
            </h3>
            <h3>Optimal Items:</h3>
            <pre>{JSON.stringify(result.items, null, '\t')}</pre>
            <TreeChart executionTree={executionTree} />
        </div>
    );
}

function renderApp(): void {
    render(<UI />, root);
}

renderApp();

if (module.hot) {
    module.hot.accept();
}
