import { Recipes } from '../Recipes';

test('should have a list of recipes', () => {
    expect(Recipes).toBeDefined();
    expect(Recipes).toHaveLength(5);
});
