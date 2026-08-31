import type { BaseCookingTool } from "./BaseCookingTool";
import type { CookwareCapacityUnit } from "./CookwareCapacityUnits";
import type { PotType } from "./PotTypes";

export type Pot = BaseCookingTool & {
  category: "pot";
  type: PotType;
  capacity: number;
  capacityUnit: CookwareCapacityUnit;
};
