import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { KnifeType } from "./KnifeTypes";

export type Knife = BaseKitchenTool & {
  category: "knife";
  type: KnifeType;
};
