import { IngredientModel } from './IngredientModel';
import { RecipeModel } from './RecipeModel';

export class WeekOrder {
  public readonly recipes: RecipeModel[];

  constructor(recipes: RecipeModel[]) {
    this.recipes = recipes;
  }

  public get ingredients(): IngredientModel[] {
    return this.recipes.flatMap(({ ingredients }) => ingredients);
  }

  public get cost(): number {
    return this.ingredients.reduce(
      (cost, ingredient) => cost + ingredient.cost,
      0,
    );
  }
}
