import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { LiquidMeasuringCupSize } from "./LiquidMeasuringCupSizes";

export type LiquidMeasuringCup = BaseKitchenTool & {
  category: "measuring-cup";
  measurementStyle: "liquid";
  material: "glass";
  capacity: LiquidMeasuringCupSize;
  unit: "cup";
};
