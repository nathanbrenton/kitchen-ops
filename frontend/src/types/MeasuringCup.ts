import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { MeasuringCupStyle } from "./MeasuringCupStyles";
import type { MeasuringCupVariant } from "./MeasuringCupVariant";

export type MeasuringCup = BaseKitchenTool & {
  category: "measuring-cup";
  measurementStyle: MeasuringCupStyle;
  variants: MeasuringCupVariant[];
};
