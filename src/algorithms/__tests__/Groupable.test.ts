import { createGroups, Groupable } from '../Groupable';

describe('createGroups', () => {
    enum Ingredient {
        POTATO,
        RICE,
        PASTA,
    }
    const recipes: Groupable[] = [
        { group: Ingredient.PASTA },
        { group: Ingredient.PASTA },
        { group: Ingredient.POTATO },
        { group: Ingredient.POTATO },
        { group: Ingredient.POTATO },
        { group: Ingredient.RICE },
        { group: Ingredient.RICE },
        { group: Ingredient.RICE },
        { group: Ingredient.RICE },
    ];
    it('should return empty groups with empty input', () => {
        expect(createGroups([])).toStrictEqual({});
    });
    it('should divide array of groupables into groups', () => {
        const groups = createGroups(recipes);
        expect(Object.keys(groups)).toHaveLength(3);
        expect(groups[Ingredient.PASTA]).toHaveLength(2);
        expect(groups[Ingredient.POTATO]).toHaveLength(3);
        expect(groups[Ingredient.RICE]).toHaveLength(4);
    });
});
