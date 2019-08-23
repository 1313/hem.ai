import { IngredientModel } from './IngredientModel';

export class RecipeModel {
    public readonly ingredients: IngredientModel[];
    constructor(ingredients: IngredientModel[]) {
        this.ingredients = ingredients;
    }
}
