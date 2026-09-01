import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { DryMeasuringCupSize } from "./DryMeasuringCupSizes";

export type DryMeasuringCup = BaseKitchenTool & {
  category: "measuring-cup";
  measurementStyle: "dry";
  material: "metal";
  capacity: DryMeasuringCupSize;
  unit: "cup";
};
