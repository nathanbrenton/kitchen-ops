import type { Ingredient } from "./Ingredient";
import type { IngredientStorageLocation } from "./IngredientStorageLocation";
import type { InventoryQuantityUnit } from "./InventoryQuantityUnits";

export type InventoryItem = {
  id: number;
  ingredient: Ingredient;
  quantity: number;
  unit: InventoryQuantityUnit;
  storageLocation: IngredientStorageLocation;
};
