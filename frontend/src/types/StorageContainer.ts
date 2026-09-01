import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { StorageCapacityUnit } from "./StorageCapacityUnits";
import type { StorageContainerType } from "./StorageContainerTypes";


export type StorageContainer = BaseKitchenTool & {
  category: "storage-container";
  type: StorageContainerType;
  airtight: boolean;
  capacity: number;
  capacityUnit: StorageCapacityUnit;
};
