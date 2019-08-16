import { Ingredient } from './Ingredient';
import { Recipe } from './Recipe';

export class WeekOrder {
    constructor(public readonly recipes: Array<Recipe>) {}

    get ingredients(): Array<Ingredient> {
        return this.recipes.flatMap(({ ingredients }) => ingredients);
    }

    get cost(): number {
        return this.ingredients.reduce((cost, ingredient) => cost + ingredient.cost, 0);
    }
}
