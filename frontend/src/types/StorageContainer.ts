// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents one storage
// container used for ingredient storage, such as an airtight jar.


// TypeScript: these are type-only imports used for static type checking.
import type { BaseKitchenTool } from "./BaseKitchenTool";
import type { StorageContainerType } from "./StorageContainerTypes";
import type { VolumeMeasurement } from "./VolumeMeasurement";


// TypeScript: this type alias declaration defines an object type
// for one ingredient-storage container.
//
// KitchenOps domain model:
// - category identifies this as a storage container.
// - type identifies the container style, such as a jar.
// - airtight records an important food-storage characteristic.
// - capacity uses the shared KitchenOps volume-measurement system.
export type StorageContainer = BaseKitchenTool & {
  category: "storage-container";

  type: StorageContainerType;

  airtight: boolean;

  // TypeScript: capacity is a nested object whose value must conform
  // to the VolumeMeasurement type alias.
  //
  // KitchenOps domain model: capacity uses the shared
  // VolumeMeasurement type instead of a container-specific unit system.
  capacity: VolumeMeasurement;
};
