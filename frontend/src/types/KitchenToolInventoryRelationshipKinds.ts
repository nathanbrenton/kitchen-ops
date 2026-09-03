// TypeScript: this is a string-literal union type definition.
// The "|" operator means a relationship must use ONE of these
// exact string values.
//
// KitchenOps domain model: this describes how two specifically owned
// kitchen items are related.
//
// "included-with":
// the items were sold/cataloged together as a package.
//
// "confirmed-fit":
// the items have been physically verified to fit together,
// regardless of whether they were originally sold together.
export type KitchenToolInventoryRelationshipKind =
  | "included-with"
  | "confirmed-fit";
