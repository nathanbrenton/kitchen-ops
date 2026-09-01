import type { IngredientStorageLocation } from "../types/IngredientStorageLocation";

export const pantry: IngredientStorageLocation = {
  id: 1,
  title: "Pantry",
  description: "A cool, dry storage area for shelf-stable ingredients.",
};

export const refrigerator: IngredientStorageLocation = {
  id: 2,
  title: "Refrigerator",
  description: "Cold storage used to preserve perishable ingredients.",
};

export const freezer: IngredientStorageLocation = {
  id: 3,
  title: "Freezer",
  description: "Frozen storage used for long-term preservation.",
};

export const countertop: IngredientStorageLocation = {
  id: 4,
  title: "Countertop",
  description: "Room-temperature kitchen storage for appropriate ingredients.",
};
