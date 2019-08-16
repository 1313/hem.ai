import { WeekOrder } from './models/WeekOrder';
import { Ingredients } from './Ingredients';
import { Recipe } from './models/Recipe';

interface ScheduleOptions {
    numberOfMeals: number;
    budget: number;
}
export function generateWeekOrder(options: ScheduleOptions): WeekOrder {
    const recipes = Array.from({ length: options.numberOfMeals }, () => new Recipe(Ingredients));
    return new WeekOrder(recipes);
}
