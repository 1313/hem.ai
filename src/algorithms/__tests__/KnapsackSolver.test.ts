import { branchAndBound, BranchAndBoundOutput, Item } from '../KnapsackSolver';
import FixtureData from './KnapsackFixture.json';

function sumValues(items: Item[]): number {
    return items.reduce((sum, { value }) => sum + value, 0);
}

function values(result: BranchAndBoundOutput): number[] {
    return result.items.map(({ value }) => value);
}

describe.each(FixtureData)(
    'branchAndBound',
    ({ optimalValue, items, capacity, expectedValues }) => {
        test('should get the optimal items', () => {
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
