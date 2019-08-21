import { generateWeekOrder } from '../Schedule';
import * as Ingredients from '../Ingredients';

const WeekOrderFixture = [
    {
        numberOfMeals: 0,
        budget: 0,
        ingredients: [],
    },
    {
        numberOfMeals: 1,
        budget: 100,
        ingredients: [
            { cost: 50 },
            { cost: 20 },
            { cost: 5 },
            { cost: 5 },
            { cost: 10 },
        ],
    },
    {
        numberOfMeals: 10,
        budget: 20000,
        ingredients: [
            { cost: 1000 },
            { cost: 500 },
            { cost: 60 },
            { cost: 20 },
            { cost: 5 },
            { cost: 5 },
            { cost: 10 },
        ],
    },
    {
        numberOfMeals: 2,
        budget: 400,
        cost: 200,
        ingredients: [
            { cost: 100 },
            { cost: 50 },
            { cost: 20 },
            { cost: 5 },
            { cost: 5 },
            { cost: 10 },
        ],
    },
];

describe.each(WeekOrderFixture)(
    'Schedule.generateWeekOrder',
    ({ budget, numberOfMeals, ingredients }) => {
        (Ingredients.Ingredients as { cost: number }[]) = ingredients;
        const weekOrder = generateWeekOrder({ numberOfMeals, budget });

        test(`should give me a WeekOrder object with recipe
          elements matching input days argumets`, () => {
            expect(weekOrder.recipes).toHaveLength(numberOfMeals);
        });

        test('should give me a list of ingredients matching numberOfMeals', () => {
            expect(weekOrder.ingredients.length).toBeGreaterThanOrEqual(
                numberOfMeals,
            );
        });

        test('should not exceed my budget', () => {
            expect(weekOrder.cost).toBeLessThanOrEqual(budget);
        });

        test('cost of ingredients should be reflected in all weekOrder cost', () => {
            const ingredientCost = weekOrder.ingredients.reduce(
                (cost, ingredient) => cost + ingredient.cost,
                0,
            );
            expect(ingredientCost).toBe(weekOrder.cost);
        });
    },
);
