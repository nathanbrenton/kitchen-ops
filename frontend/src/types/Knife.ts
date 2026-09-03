import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { KnifeVariant } from "./KnifeVariant";

export type Knife = BaseKitchenTool & {
  category: "knife";
  type: KnifeVariant[];
};
