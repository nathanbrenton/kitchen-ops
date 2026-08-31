import type { CookingTool } from "../types/CookingTool";
import type { LiquidMeasuringCup } from "../types/LiquidMeasuringCup";

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

export const cookintTools: CookingTool[] = [
  twoCupGlassMeasuringCup,
];
