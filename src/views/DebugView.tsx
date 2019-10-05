import React, { useState } from 'react';

import { TreeChart } from '../components/TreeChart';
import { createExecutionTree } from '../components/TreeChart/logic';

import { List } from '../components/List';
import { TextInput } from '../components/TextInput';
import { Card } from '../components/Card';
import { styled } from '../theme';
import { Item } from '../order-generator/KnapsackSolver';
import { Grid } from '../components/Grid';
import { Paper } from '../components/Paper';

const ItemCard = styled(Card)`
  padding: var(--s-3);
  flex: 0;
`;

interface ItemListProps {
  items: Item[];
  onRemove?: (item: Item) => void;
}

const ItemList = ({ items, onRemove }: ItemListProps): JSX.Element => (
  <List>
    {items.map(item => (
      <ItemCard
        // eslint-disable-next-line react/no-array-index-key
        key={JSON.stringify(item)}
      >
        <p>Weight: {item.weight}</p>
        {!!item.extraWeight && (
          <p>Extra weight: {Math.round(item.extraWeight, 2)}</p>
        )}
        <p>Value: {item.value}</p>
        <p>Group: {item.group}</p>
        {onRemove && (
          <button type="button" onClick={() => onRemove(item)}>
            Remove
          </button>
        )}
      </ItemCard>
    ))}
  </List>
);

// eslint-disable-next-line import/no-default-export
export default function DebugView(): JSX.Element {
  const [capacity, setCapacity] = useState('10');
  const [inputWeight, setWeight] = useState('1');
  const [inputValue, setValue] = useState('5');
  const [inputGroup, setGroup] = useState('GROUP 1');
  const [items, setItems] = useState<Item[]>([]);

  const { executionTree, result } = createExecutionTree(items, +capacity);
  const createNewItem = (): void => {
    const newItem = {
      weight: +inputWeight,
      value: +inputValue,
      group: inputGroup,
    };
    if (
      !items.find(
        ({ weight, value, group }) =>
          JSON.stringify({ weight, value, group }) === JSON.stringify(newItem),
      )
    ) {
      setItems([newItem, ...items]);
    }
  };

  return (
    <>
      <h2>Knapsack solver</h2>
      <Grid>
        <Paper>
          <TextInput
            label="Budget:"
            id="budget"
            type="number"
            value={capacity}
            onChange={({ target }): void => setCapacity(target.value)}
          />

          <ItemCard>
            <TextInput
              value={inputWeight}
              label="Weight:"
              id="weight"
              type="number"
              onChange={e => setWeight(e.target.value)}
            />
            <TextInput
              value={inputValue}
              label="Value:"
              id="value"
              type="number"
              onChange={e => setValue(e.target.value)}
            />
            <TextInput
              value={inputGroup}
              label="Group:"
              id="group"
              onChange={e => setGroup(e.target.value)}
            />
            <button type="button" onClick={createNewItem}>
              Add Item
            </button>
            <button type="button" onClick={() => setItems([])}>
              Clear
            </button>
          </ItemCard>
          <ItemList
            items={items.map(({ weight, value, group }) => ({
              weight,
              value,
              group,
            }))}
            onRemove={item => {
              const newItems = [...items];
              newItems.splice(items.indexOf(item), 1);
              setItems(newItems);
            }}
          />
        </Paper>
        <Paper>
          <p>
            Maximum value: {result.maxValue} | Execution ratio:{' '}
            {result.complexity.iterations}/{result.complexity.max}=
            {result.complexity.ratio}
          </p>
          <p>Optimal Items:</p>
          <ItemList items={result.items} />
        </Paper>
        <Paper>
          <TreeChart executionTree={executionTree} />
        </Paper>
      </Grid>
    </>
  );
}
