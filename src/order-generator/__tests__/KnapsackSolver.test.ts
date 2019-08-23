import { branchAndBound, BranchAndBoundOutput, Item } from '../KnapsackSolver';
import IndependentGroupsFixture from '../__fixtures__/KnapsackSolver.IndependentGroups.fixture';
import IntersectingGroupsFixture from '../__fixtures__/KnapsackSolver.IntersectingGroups.fixture';

function sumValues(items: Item[]): number {
    return items.reduce((sum, { value }) => sum + value, 0);
}

function values(result: BranchAndBoundOutput): number[] {
    return result.items.map(({ value }) => value);
}

describe.each(IntersectingGroupsFixture)(
    'branchAndBound intersection groups (%O)',
    ({ optimalValue, items, capacity }) => {
        test('should get the optimal intersected items', () => {
            const result = branchAndBound({
                items,
                capacity,
            });

            expect(result.maxValue).toBe(optimalValue);
        });
    },
);

describe.each(IndependentGroupsFixture)(
    'branchAndBound independent groups (%O)',
    ({ optimalValue, items, capacity, expectedValues }) => {
        test('should get the optimal independent items', () => {
            const result = branchAndBound({
                items,
                capacity,
            });

            expect(values(result)).toStrictEqual(expectedValues);
            expect(sumValues(result.items)).toBe(optimalValue);
            expect(result.maxValue).toBe(optimalValue);
        });
    },
);
