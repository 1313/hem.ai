import React, { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';
import { FaWeightHanging, FaMedal } from 'react-icons/fa';
import { MdGroupWork } from 'react-icons/md';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { TreeChart } from '../components/TreeChart';
import { createExecutionTree } from '../components/TreeChart/logic';
import { List } from '../components/List';
import { TextInput } from '../components/TextInput';
import { Card } from '../components/Card';
import { styled } from '../theme';
import { Item } from '../order-generator/KnapsackSolver';
import { Grid } from '../components/Grid';
import { View } from '../components/View';

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
const Item = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  background-color: #fff;
  justify-content: space-between;
  border: 1px ${p => p.theme.color.border} solid;
  border-radius: ${p => p.theme.borderRadius};
`;

const CloseButton = styled.button`
  font-size: 1.6rem;
  line-height: 1;
  height: 100%;

  display: flex;
  padding: 0;
  align-items: center;
  width: 2.5rem;
  justify-content: center;
  box-shadow: none;
  border: none;
`;
const Stat = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin: 0.5rem;
`;
const DebugCard = styled(Card)`
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
      <Item key={itemKey(item)}>
        <Stat>
          <FaWeightHanging /> {item.weight}
        </Stat>
        <Stat>
          <FaMedal />
          {item.value}
        </Stat>
        {!!item.extraWeight && (
          <Stat>
            <GiWeightLiftingUp />
            {Math.round(item.extraWeight)}
          </Stat>
        )}
        <Stat>
          <MdGroupWork />
          {item.group}
        </Stat>
        {onRemove && (
          <CloseButton type="button" onClick={() => onRemove(index)}>
            <TiDeleteOutline />
          </CloseButton>
        )}
      </Item>
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
    <View>
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
    </View>
  );
}
