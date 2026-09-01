import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { CookwareCapacityUnit } from "./CookwareCapacityUnits";
import type { PotType } from "./PotTypes";

export type Pot = BaseKitchenTool & {
  category: "pot";
  type: PotType;
  capacity: number;
  capacityUnit: CookwareCapacityUnit;
};
