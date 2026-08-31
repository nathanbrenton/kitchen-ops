import type { BaseCookingTool } from "./BaseCookingTool";
import type { MeasuringSpoonSize } from "./MeasuringSpoonSizes";
import type { MeasuringSpoonUnit } from "./MeasuringSpoonUnits";

export type MeasuringSpoon = BaseCookingTool & {
  category: "measuring-spoon";
  capacity: MeasuringSpoonSize;
  unit: MeasuringSpoonUnit;
};
