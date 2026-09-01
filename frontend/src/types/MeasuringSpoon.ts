import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { MeasuringSpoonSize } from "./MeasuringSpoonSizes";
import type { MeasuringSpoonUnit } from "./MeasuringSpoonUnits";

export type MeasuringSpoon = BaseKitchenTool & {
  category: "measuring-spoon";
  capacity: MeasuringSpoonSize;
  unit: MeasuringSpoonUnit;
};
