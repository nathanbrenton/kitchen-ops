import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { CookwareCapacityUnit } from "./CookwareCapacityUnits";
import type { PanType } from "./PanTypes";

export type Pan = BaseKitchenTool & {
  category: "pan";
  type: PanType;
  capacity: number;
  capacityUnit: CookwareCapacityUnit;
};
