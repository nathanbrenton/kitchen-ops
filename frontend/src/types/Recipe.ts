import type { RecipeIngredient } from "./RecipeIngredient";

export type Recipe = {
  id: number;
  title: string;
  description: string;
  servings: number;
  ingredients: RecipeIngredient[];
};
