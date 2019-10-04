import React, { useState } from 'react';

import { TreeChart } from '../components/TreeChart';
import { createExecutionTree } from '../components/TreeChart/logic';
import { Paper } from '../components/Paper';
import { List } from '../components/List';

const defaultItems: [number, number, number?][] = [
  [1, 1],
  [10, 10],
  [5, 60],
  [4, 4],
  [4, 4],
];

// eslint-disable-next-line import/no-default-export
export default function DebugView(): JSX.Element {
  const [capacity, setCapacity] = useState('10');
  const [itemString, setItems] = useState(JSON.stringify(defaultItems));
  let items: [number, number, number?][] = [];
  try {
    items = JSON.parse(itemString);
  } catch {
    // eslint-disable-next-line no-console
    console.error('parse error');
  }

  const mappedItems = items.map(([weight, value, group], index) => ({
    weight,
    value,
    group: group !== undefined ? group : index,
  }));
  const { executionTree, result } = createExecutionTree(mappedItems, +capacity);
  return (
    <List>
      <Paper>
        <label htmlFor="capacity">
          Capacity:
          <input
            id="capacity"
            type="number"
            value={capacity}
            onChange={({ target }): void => setCapacity(target.value)}
          />
        </label>

        <label htmlFor="items">
          Items:
          <textarea
            style={{ width: '100%' }}
            cols={30}
            rows={15}
            id="items"
            value={itemString}
            onChange={({ target }): void => setItems(target.value)}
          />
        </label>
        <button
          type="button"
          onClick={(): void => setItems(JSON.stringify(items, null, 2))}
        >
          Format
        </button>
      </Paper>
      <Paper>
        <p>
          Maximum value:
          {result.maxValue}
        </p>
        <p>
          Execution:
          {result.complexity.iterations}/{result.complexity.max}=
          {result.complexity.ratio}
        </p>
        <p>Optimal Items:</p>
        <pre>{JSON.stringify(result.items, null, 2)}</pre>
      </Paper>
      <Paper>
        <TreeChart executionTree={executionTree} />
      </Paper>
    </List>
  );
}
