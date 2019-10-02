import { branchAndBound, BranchAndBoundOutput, Item } from '../KnapsackSolver';
import IndependentGroupsFixture from '../__fixtures__/KnapsackSolver.IndependentGroups.fixture.json';
import IntersectingGroupsFixture from '../__fixtures__/KnapsackSolver.IntersectingGroups.fixture.json';

function sumValues(items: Item[]): number {
  return items.reduce((sum, { value }) => sum + value, 0);
}

function values(result: BranchAndBoundOutput): number[] {
  return result.items.map(({ value }) => value);
}

test('should get the optimal intersected items', () => {
  IntersectingGroupsFixture.forEach(({ optimalValue, items, capacity }) => {
    const result = branchAndBound({
      items,
      capacity,
    });

    expect(result.maxValue).toBe(optimalValue);
  });
});

test('should get the optimal independent items', () => {
  IndependentGroupsFixture.forEach(
    ({ expectedValues, optimalValue, items, capacity }) => {
      const result = branchAndBound({
        items,
        capacity,
      });

      expect(values(result)).toStrictEqual(expectedValues);
      expect(sumValues(result.items)).toBe(optimalValue);
      expect(result.maxValue).toBe(optimalValue);
    },
  );
});
