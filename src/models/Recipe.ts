import { Ingredient } from './Ingredient';

export class Recipe {
    public readonly ingredients: Ingredient[];
    constructor(ingredients: Ingredient[]) {
        this.ingredients = ingredients;
    }
}
