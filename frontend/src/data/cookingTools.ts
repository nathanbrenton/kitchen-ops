import type { CookingTool } from "../types/CookingTool";
import type { LiquidMeasuringCup } from "../types/LiquidMeasuringCup";
import type { Pan } from "../types/Pan";
import type { Pot } from "../types/Pot";

export const twoCupGlassMeasuringCup: LiquidMeasuringCup = {
  id: 1,
  title: "2-Cup Glass Measuring Cup",
  description: "A glass measuring cup for measuring liquid ingredients.",
  photoUrl: null,
  category: "measuring-cup",
  measurementStyle: "liquid",
  material: "glass",
  capacity: 2,
  unit: "cup",
};

export const saucepan: Pan = {
  id: 2,
  title: "Saucepan",
  description: "A pan with high sides used for simmering, boiling, and stovetop cooking.",
  photoUrl: null,
  category: "pan",
  type: "sauce",
  capacity: 2,
  capacityUnit: "quart",
};

export const stockPot: Pot = {
  id: 3,
  title: "Stock Pot",
  description: "A deep pot used for boiling, simmering, and preparing larger quantities.",
  photoUrl: null,
  category: "pot",
  type: "stock",
  capacity: 8,
  capacityUnit: "quart",
};

export const cookingTools: CookingTool[] = [
  twoCupGlassMeasuringCup,
  saucepan,
  stockPot,
];
