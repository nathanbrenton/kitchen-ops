import type { IngredientAttribute } from "./IngredientAttribute";
import type { IngredientFoodGroup } from "./IngredientFoodGroup";
import type { IngredientForm } from "./IngredientForm";
import type { IngredientVariety } from "./IngredientVariety";
import type { IngredientProcessingMethod } from "./IngredientProcessingMethod";
import type { IngredientStorageProfile } from "./IngredientStorageProfile";
import type {IngredientInventoryPolicy } from "./IngredientInventoryPolicy";

export type Ingredient = {
  id: number;
  title: string;
  description: string;
  foodGroups: IngredientFoodGroup[];
  forms: IngredientForm[];
  attributes: IngredientAttribute[];
  varieties: IngredientVariety[];
  recommendedProcessingMethods: IngredientProcessingMethod[];
  storageProfiles: IngredientStorageProfile[];
  inventoryPolicy?: IngredientInventoryPolicy;
};
