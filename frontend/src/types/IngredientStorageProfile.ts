import type { IngredientStorageLocation } from "./IngredientStorageLocation";

export type IngredientStorageProfile = {
  location: IngredientStorageLocation;
  shelfLifeDays: number;
};
