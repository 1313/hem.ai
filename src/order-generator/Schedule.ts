import { WeekOrder } from './WeekOrderModel';
import { IngredientsStore } from './IngredientsStore';
import { RecipeModel } from './RecipeModel';

interface ScheduleOptions {
    numberOfMeals: number;
    budget: number;
}
export function generateWeekOrder(options: ScheduleOptions): WeekOrder {
    const recipes = Array.from(
        { length: options.numberOfMeals },
        () => new RecipeModel(IngredientsStore),
    );
    return new WeekOrder(recipes);
}
