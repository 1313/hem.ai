import { branchAndBound } from '../KnapsackSolver';
import FixtureData from './KnapsackFixture.json';

describe.each(FixtureData)('double(%d)', input => {
    console.log(input);
});

describe('branchAndBound', () => {
    it('should get the optimal items', () => {
        const groupables = [
            { group: '1', weight: 1.98, value: 100 },
            { group: '1', weight: 3.14, value: 50 },
            { group: '1', weight: 2, value: 40 },
            { group: '1', weight: 5, value: 95 },
            { group: '1', weight: 3, value: 30 },
        ];

        const { items, maxValue } = branchAndBound({
            items: groupables,
            capacity: 10,
        });

        expect(items.map(({ value }) => value)).toStrictEqual([100, 40, 95]);
        expect(maxValue).toBe(235);
        expect(items.reduce((sum, { value }) => sum + value, 0)).toBe(maxValue);
    });
});
