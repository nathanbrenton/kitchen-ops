import type { IngredientAttribute } from "./IngredientAttribute";
import type { IngredientFoodGroup } from "./IngredientFoodGroup";
import type { IngredientForm } from "./IngredientForm";
import type { IngredientVariety } from "./IngredientVariety";
import type { IngredientProcessingMethod } from "./IngredientProcessingMethod";

export type Ingredient = {
  id: number;
  title: string;
  description: string;
  foodGroups: IngredientFoodGroup[];
  forms: IngredientForm[];
  attributes: IngredientAttribute[];
  varieties: IngredientVariety[];
  recommendedProcessingMethods: IngredientProcessingMethod[];
};
