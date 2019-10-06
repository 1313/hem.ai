import React, { useState } from 'react';

import { TreeChart } from '../components/TreeChart';
import { createExecutionTree } from '../components/TreeChart/logic';

import { List } from '../components/List';
import { TextInput } from '../components/TextInput';
import { Card } from '../components/Card';
import { styled } from '../theme';
import { Item } from '../order-generator/KnapsackSolver';
import { Grid } from '../components/Grid';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    flex: 1;
  }
  > * + * {
    margin: 0;
    margin-left: var(--s-3);
  }
`;
const ItemCard = styled(Card)`
  padding: var(--s-3);
  position: relative;
  white-space: nowrap;
  button {
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    border: none;
  }
`;
const DebugCard = styled(Card)`
  padding: var(--s-3);
  display: flex;
  flex-direction: column;
`;
function itemKey(item: Item): string {
  return `${item.group}-${item.weight}-${item.value}`;
}
interface ItemListProps {
  items: Item[];
  onRemove?: (itemIndex: number) => void;
}

const ItemList = ({ items, onRemove }: ItemListProps): JSX.Element => (
  <List>
    {items.map((item, index) => (
      <ItemCard key={itemKey(item)}>
        {item.weight} / {!!item.extraWeight && Math.round(item.extraWeight)}
        {item.value} / {item.group}
        {onRemove && (
          <button type="button" onClick={() => onRemove(index)}>
            X
          </button>
        )}
      </ItemCard>
    ))}
  </List>
);

// eslint-disable-next-line import/no-default-export
export default function DebugView(): JSX.Element {
  const [capacity, setCapacity] = useState('10');
  const [weight, setWeight] = useState('1');
  const [value, setValue] = useState('5');
  const [group, setGroup] = useState('1');
  const [items, setItems] = useState<Item[]>([]);
  const newItem = {
    weight: +weight,
    value: +value,
    group,
  };
  const { executionTree, result } = createExecutionTree(items, +capacity);

  return (
    <>
      <h2>Knapsack solver</h2>
      <Grid>
        <DebugCard>
          <Row>
            <TextInput
              label="Budget:"
              id="budget"
              type="number"
              value={capacity}
              onChange={({ target }): void => setCapacity(target.value)}
            />
            <TextInput
              value={weight}
              label="Weight:"
              id="weight"
              type="number"
              onChange={e => setWeight(e.target.value)}
            />
            <TextInput
              value={value}
              label="Value:"
              id="value"
              type="number"
              onChange={e => setValue(e.target.value)}
            />
            <TextInput
              value={group}
              label="Group:"
              id="group"
              onChange={e => setGroup(e.target.value)}
            />
          </Row>
          <Row>
            <button
              disabled={
                !!items.find(item => itemKey(item) === itemKey(newItem))
              }
              type="button"
              onClick={() => setItems([newItem, ...items])}
            >
              Add Item
            </button>
            <button type="button" onClick={() => setItems([])}>
              Clear
            </button>
          </Row>
          <ItemList
            items={items.map(({ extraWeight, ...item }) => item)}
            onRemove={itemIndex => {
              const newItems = [...items];
              newItems.splice(itemIndex, 1);
              setItems(newItems);
            }}
          />
        </DebugCard>

        <DebugCard>
          <p>
            Maximum value: {result.maxValue} | Execution ratio:{' '}
            {result.complexity.iterations}/{result.complexity.max}=
            {result.complexity.ratio}
          </p>
          <p>Optimal Items:</p>
          <ItemList items={result.items} />
        </DebugCard>
        <DebugCard>
          <TreeChart executionTree={executionTree} />
        </DebugCard>
      </Grid>
    </>
  );
}
