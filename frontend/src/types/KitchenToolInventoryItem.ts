// TypeScript: this file contains a type alias declaration.
// A type alias declaration gives a reusable name to another type.
//
// KitchenOps domain model: this object type represents one
// specifically owned piece of kitchen equipment.
//
// Public-output rule:
// manufacturer, identifiers, construction details, identification
// confidence, and private notes should normally stay out of
// public recipe pages, PDFs, videos, and other public-facing outputs.


// TypeScript: these are type-only imports.
// They are used for static type checking and do not create
// runtime JavaScript dependencies.

import type { KitchenTool } from "./KitchenTool";
import type { KitchenToolConstruction } from "./KitchenToolConstruction";
import type { KitchenToolIdentificationConfidence } from "./KitchenToolIdentificationConfidence";
import type { KitchenToolIdentifier } from "./KitchenToolIdentifier";
import type { KitchenToolVariant } from "./KitchenToolVariant";


// TypeScript: this type alias declaration defines an object type
// for one private kitchen-tool inventory item.
//
// KitchenOps domain model:
// - KitchenTool describes the generic kitchen-tool family.
// - KitchenToolVariant describes the physical size/version.
// - KitchenToolInventoryItem describes one actual privately owned item.
export type KitchenToolInventoryItem = {
  id: number;

  // TypeScript: these required properties reference already-defined
  // typed objects instead of duplicating generic tool data.
  tool: KitchenTool;
  variant: KitchenToolVariant;

  // TypeScript: "?" marks manufacturer as an optional property.
  manufacturer?: string;

  // TypeScript: KitchenToolIdentifier[] is an array type.
  //
  // KitchenOps domain model: one owned object may have several
  // identifiers, such as a model number, SKU, body-only SKU,
  // item number, or catalog reference.
  identifiers: KitchenToolIdentifier[];

  // TypeScript: this property uses the
  // KitchenToolIdentificationConfidence string-literal union type.
  //
  // KitchenOps domain model: this preserves uncertainty when an
  // exact product identification has not been fully confirmed.
  identificationConfidence: KitchenToolIdentificationConfidence;

  // TypeScript: optional string property.
  series?: string;

  // TypeScript: optional property whose value must conform to the
  // KitchenToolConstruction object type.
  //
  // KitchenOps domain model: this stores structured private facts
  // such as cookware material layers, wall thickness, and handle material.
  construction?: KitchenToolConstruction;

  // TypeScript: optional free-form string property.
  //
  // KitchenOps domain model: notes remain useful for private facts
  // that do not yet justify a dedicated structured property,
  // such as rivet observations, lid history, or identification remarks.
  notes?: string;
};
