import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { SpoonVariant } from "./SpoonVariant";

export type Spoon = BaseKitchenTool & {
  category: "spoon";
  variants: SpoonVariant[];
};
