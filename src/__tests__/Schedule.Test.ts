import { generateWeekOrder } from '../Schedule';

it('should expose a generate function', () => {
    expect(generateWeekOrder).toBeDefined();
    expect(generateWeekOrder).toBeInstanceOf(Function);
});

it(`should give me a WeekOrder object with recipes matching
    elements matching input days argumets`, () => {
    const weekOrder = generateWeekOrder({ numberOfMeals: 5, budget: 0 });
    expect(weekOrder.recipes.length).toBe(5);
});

it('should give me a list of ingredients', () => {
    const weekOrder = generateWeekOrder({ numberOfMeals: 5, budget: 0 });
    expect(weekOrder.ingredients.length).toBeGreaterThan(0);
});

it('should not exceed my budget', () => {
    const budget = 100;
    const weekOrder = generateWeekOrder({ numberOfMeals: 5, budget });
    expect(weekOrder.cost).toBeLessThanOrEqual(budget);
});

describe.each([[1, 5, 10]])('Ingredient Cost', numberOfMeals => {
    test('each ingredient should should have a cost', () => {
        const weekOrder = generateWeekOrder({ numberOfMeals, budget: 0 });
        weekOrder.ingredients.forEach(({ cost }) => expect(cost).toBeGreaterThan(0));
    });
    // test('cost of ingredients should be reflected in all weekOrder cost', () => {
    // const weekOrder = generateWeekOrder({ numberOfMeals, budget: 100 });
    // });
});
