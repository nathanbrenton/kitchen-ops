import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { PotType } from "./PotTypes";
import type { PotVariant } from "./PotVariant";

export type Pot = BaseKitchenTool & {
  category: "pot";
  type: PotType;
  variants: PotVariant[];
};
