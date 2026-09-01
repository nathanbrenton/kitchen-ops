import type { Ingredient } from "./Ingredient";
import type { IngredientForm } from "./IngredientForm";

export type RecipeIngredient = {
  ingredient: Ingredient;
  form?: IngredientForm;
  quantity: number;
  unit: string;
};
