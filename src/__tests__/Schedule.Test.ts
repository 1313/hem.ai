import { generateWeekOrder } from '../Schedule';

it('should expose a generate function', () => {
    expect(generateWeekOrder).toBeDefined();
    expect(generateWeekOrder).toBeInstanceOf(Function);
});

it(`should give me a WeekOrder object with recipes matching
    elements matching input days argumets`, () => {
    const weekOrder = generateWeekOrder({ numberOfMeals: 5 });
    expect(weekOrder.recipes.length).toBe(5);
});
