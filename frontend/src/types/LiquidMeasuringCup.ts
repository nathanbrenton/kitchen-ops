import type { BaseCookingTool } from "./BaseCookingTool";
import type { LiquidMeasuringCupSize } from "./LiquidMeasuringCupSizes";

export type LiquidMeasuringCup = BaseCookingTool & {
  category: "measuring-cup";
  measurementStyle: "liquid";
  material: "glass";
  capacity: LiquidMeasuringCupSize;
  unit: "cup";
};
