import { Ingredient } from './Ingredient';
import { Recipe } from './Recipe';

export class WeekOrder {
    public readonly recipes: Recipe[];
    constructor(recipes: Recipe[]) {
        this.recipes = recipes;
    }

    public get ingredients(): Ingredient[] {
        return this.recipes.flatMap(({ ingredients }) => ingredients);
    }

    public get cost(): number {
        return this.ingredients.reduce(
            (cost, ingredient) => cost + ingredient.cost,
            0,
        );
    }
}
