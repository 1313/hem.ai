import { branchAndBound, Item } from '../KnapsackSolver';

describe('branchAndBound', () => {
    it('should select an that fits the capacity', () => {
        const groupables: Array<Item> = [
            { group: 'lol', baseWeight: 100, value: 100 },
        ];
        expect(
            branchAndBound({ items: groupables, capacity: 100 }),
        ).toStrictEqual(groupables);
    });
    it('should return an empty array with inputs too large for capacity', () => {
        const groupables: Array<Item> = [
            { group: 'lol', baseWeight: 1000, value: 100 },
        ];
        expect(
            branchAndBound({ items: groupables, capacity: 100 }),
        ).toStrictEqual([]);
    });
    it('should select items in a greedy manner maximizing value', () => {
        const groupables: Array<Item> = [
            { group: '1', baseWeight: 5, value: 5 },
            { group: '2', baseWeight: 4, value: 5 },
            { group: '3', baseWeight: 3, value: 5 },
            { group: '4', baseWeight: 2, value: 5 },
        ];
        const result = branchAndBound({ items: groupables, capacity: 10 });

        expect(result).toStrictEqual([
            groupables[0],
            groupables[1],
            groupables[2],
        ]);
    });
    it('items with the same group should have an increased weight', () => {
        const groupables: Array<Item> = [
            { group: '1', baseWeight: 1.98, value: 100 },
            { group: '1', baseWeight: 3.14, value: 50 },
            { group: '1', baseWeight: 2, value: 40 },
            { group: '1', baseWeight: 5, value: 95 },
            { group: '1', baseWeight: 3, value: 30 },
        ];

        expect(
            branchAndBound({ items: groupables, capacity: 10 }),
        ).toStrictEqual([groupables[0], groupables[1], groupables[2]]);
    });
});
