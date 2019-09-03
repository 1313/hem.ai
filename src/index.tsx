import React, { useState } from 'react';
import { render } from 'react-dom';
import TreeChart from './charts/TreeChart';

const root = document.getElementById('root');

const defaultItems = [
    [1, 1],
    [1, 1],
    [1, 1],
    [10, 10],
    [5, 60],
    [4, 4],
    [4, 4],
    [4, 4],
    [4, 4],
];

function UI(): JSX.Element {
    const [capacity, setCapacity] = useState('10');
    const [itemString, setItems] = useState(JSON.stringify(defaultItems));
    let items: [number, number][] = [];
    try {
        items = JSON.parse(itemString);
    } catch {}
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ flex: 0.3 }}>
                <div>
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        id="capacity"
                        type="number"
                        value={capacity}
                        onChange={({ target }): void =>
                            setCapacity(target.value)
                        }
                    />
                </div>
                <div>
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
            </div>
            <div style={{ flex: 1 }}>
                <TreeChart
                    items={items.map(([weight, value], group) => ({
                        weight,
                        value,
                        group,
                    }))}
                    capacity={+capacity}
                />
            </div>
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
