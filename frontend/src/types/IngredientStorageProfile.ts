import type { IngredientStorageLocation } from "./IngredientStorageLocation";
import type { StorageContainer } from "./StorageContainer";

export type IngredientStorageProfile = {
  location: IngredientStorageLocation;
  storageContainer?: StorageContainer;
  shelfLifeDays: number;
};
