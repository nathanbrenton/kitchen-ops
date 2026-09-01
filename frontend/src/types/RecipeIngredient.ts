import type { Ingredient } from "./Ingredient";
import type { IngredientForm } from "./IngredientForm";
import type { IngredientVariety } from "./IngredientVariety";
import type { IngredientProcessingMethod } from "./IngredientProcessingMethod";

export type RecipeIngredient = {
  ingredient: Ingredient;
  form?: IngredientForm;
  variety?: IngredientVariety;
  processingMethod?: IngredientProcessingMethod;
  quantity: number;
  unit: string;
};
