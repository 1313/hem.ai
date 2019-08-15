import { WeekOrder } from './models/WeekOrder';

interface ScheduleOptions {
    numberOfMeals: number;
}

export function generateWeekOrder(options: ScheduleOptions): WeekOrder {
    return { ingredients: [], recipes: new Array(options.numberOfMeals) };
}
