import type { BaseCookingTool } from "./BaseCookingTool";
import type { CookwareCapacityUnit } from "./CookwareCapacityUnits";
import type { PanType } from "./PanTypes";

export type Pan = BaseCookingTool & {
  category: "pan";
  type: PanType;
  capacity: number;
  capacityUnit: CookwareCapacityUnit;
};
