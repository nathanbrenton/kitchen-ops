import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { ForkVariant } from "./ForkVariant";

export type Fork = BaseKitchenTool & {
  category: "fork";
  type: ForkVariant[];
};
