import type { BaseKitchenTool } from "./BaseKitchenTool";

export type StorageContainer = BaseKitchenTool & {
  category: "storage-container";
};
