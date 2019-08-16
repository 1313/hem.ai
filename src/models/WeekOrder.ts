import { Ingredient } from './Ingredient';

export interface WeekOrder {
    ingredients: Array<Ingredient>;
    recipes: Array<unknown>;
    cost: number;
}
