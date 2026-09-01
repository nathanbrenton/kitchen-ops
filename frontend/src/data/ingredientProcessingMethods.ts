import type { IngredientProcessingMethod } from "../types/IngredientProcessingMethod";

export const distilled: IngredientProcessingMethod = {
  id: 1,
  title: "Distilled",
  description: "Purified by distillation.",
};

export const charcoalFiltered: IngredientProcessingMethod = {
  id: 2,
  title: "Charcoal-Filtered",
  description: "Filtered through activated charcoal to reduce impurities and odors.",
};
