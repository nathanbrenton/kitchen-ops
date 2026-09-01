import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { ForkType } from "./ForkTypes";

export type Fork = BaseKitchenTool & {
  category: "fork";
  type: ForkType;
};
