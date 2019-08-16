import { WeekOrder } from './models/WeekOrder';

interface ScheduleOptions {
    numberOfMeals: number;
    budget: number;
}

export function generateWeekOrder(options: ScheduleOptions): WeekOrder {
    return {
        cost: options.budget,
        ingredients: [{ name: 'Tomato', cost: 1000 }],
        recipes: new Array(options.numberOfMeals),
    };
}
