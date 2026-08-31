import type { CookingTool } from "../types/CookingTool";
import type { LiquidMeasuringCup } from "../types/LiquidMeasuringCup";
import type { Pan } from "../types/Pan";

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
};

export const cookingTools: CookingTool[] = [
  twoCupGlassMeasuringCup,
  saucepan,
];
