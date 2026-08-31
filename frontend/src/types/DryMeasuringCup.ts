import type { BaseCookingTool } from "./BaseCookingTool";
import type { DryMeasuringCupSize } from "./DryMeasuringCupSizes";

export type DryMeasuringCup = BaseCookingTool & {
  category: "measuring-cup";
  measurementStyle: "dry";
  material: "metal";
  capacity: DryMeasuringCupSize;
  unit: "cup";
};
