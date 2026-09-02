# KitchenOps — General Information and Project Standards

This document records project-wide culinary, ingredient, equipment, and data-modeling principles that should not be unnecessarily duplicated in individual ingredient, tool, or recipe records.

## Culinary and Data-Modeling Principles

KitchenOps aims to model culinary information with high attention to detail while keeping distinct concepts separated.

Prefer faceted modeling over one large rigid hierarchy.

Examples of distinct ingredient facets include:

* Food group
* Variety
* Physical form
* Processing or treatment
* Culinary function
* Nutrition
* Allergens
* Storage conditions
* Shelf life
* Inventory policy

Recipe-specific information should remain separate from ingredient-wide recommendations.

Kitchen tools should likewise distinguish culinary function from construction material. For example, "Liquid Measuring Cup" describes the culinary purpose of the tool, while glass versus plastic is an equipment preference.

## Ingredient Sourcing Preferences

Unless a specific exception is documented:

* Prefer organic ingredients where applicable.
* Prefer non-GMO ingredients where applicable.
* Water should be distilled and charcoal-filtered.
* The presence of an ingredient in the KitchenOps ingredient catalog generally indicates that it is approved for KitchenOps recipes and inventory.

These are project-wide sourcing standards and generally should not be repeated as attributes on every ingredient record.

## Ingredients Excluded from KitchenOps

KitchenOps uses an allowlist-oriented ingredient catalog. Ingredients intentionally excluded from the catalog should not be recommended in recipes or maintained as normal kitchen inventory.

Known exclusions currently include:

* Molasses
* Brown sugar
* White cane sugar

Additional exclusions will be documented as the approved kitchen-food inventory is developed.

TODO: Expand this section into a more complete ingredient policy / FAQ once the approved ingredient inventory is supplied.

## Kitchen Tool Material Preferences

Tool records should primarily describe culinary function. Material preferences belong here unless material materially changes the tool's function.

Current preferences include:

* Liquid measuring cups: prefer glass over plastic.
* Dry measuring cups: prefer metal over plastic.

TODO: Add additional cookware, utensil, storage-container, and food-contact material preferences as they are established.

## Culinary Terminology

KitchenOps should use established culinary terminology wherever practical.

Examples:

* "Paring knife," not "pairing knife."
* Distinguish liquid measuring cups from dry measuring cups by function.
* Distinguish a salad fork from a salad-serving fork.
* Distinguish tool identity from tool variants such as capacity or size.
* Avoid inventing culinary terms when an established professional term exists.

Terminology should be corrected as the project grows and authoritative references are consulted.

## Food Modeling and Standards References

KitchenOps is influenced by several complementary systems rather than treating any single source as a universal culinary taxonomy.

### FoodOn

Primary influence for food ontology and structured domain modeling.

FoodOn provides a controlled ontology for describing foods, food-derived products, biological sources, characteristics, and processes. KitchenOps should use FoodOn-style separation of entities, characteristics, transformations, and relationships as a modeling influence.

Target use:

* Ingredient ontology
* Ingredient relationships
* Derived/prepared ingredients
* Food transformations and processes
* Interoperable terminology

### LanguaL

Primary influence for faceted food description.

LanguaL describes foods through multiple independent facets rather than forcing every property into one category hierarchy. Relevant concepts include food/product type, biological source, physical form, processing/treatment, preservation, packaging, and dietary characteristics.

Target use:

* Ingredient food groups
* Forms and varieties
* Processing/treatment
* Storage/preservation
* Future expansion of ingredient facets

### USDA FoodData Central

Primary U.S. reference for food composition and nutrient data.

Target use:

* Nutritional profiles
* Nutrient terminology
* Food composition research
* Possible future nutrition-data integration

KitchenOps should distinguish USDA nutrient/composition classifications from its culinary ontology rather than treating them as interchangeable.

### U.S. Food and Drug Administration (FDA)

Primary U.S. regulatory reference for food safety and allergen-related requirements.

Target use:

* Allergen terminology
* Allergen warnings
* Food-safety guidance
* Future labeling/compliance features

KitchenOps should derive recipe allergen warnings from the ingredients contained in a recipe rather than manually duplicating warning text.

Current U.S. major-food-allergen categories should be represented separately from culinary food groups.

### Codex Alimentarius — FAO/WHO

International food standards reference.

Codex Alimentarius provides internationally adopted food standards, guidelines, and codes of practice concerning food safety, quality, labeling, hygiene, contaminants, additives, and related topics.

Target use:

* International terminology
* Food standards research
* Future standards/compliance cross-references
* Validation of food definitions where appropriate

Codex guidance supplements rather than replaces applicable national law or regulation.

## Compliance Philosophy

KitchenOps may eventually document alignment with recognized standards and reference systems, but the project should not claim formal regulatory compliance unless that compliance has actually been evaluated and demonstrated.

Preferred language during development:

* "Modeled with reference to..."
* "Aligned with terminology from..."
* "Uses data/reference guidance from..."

Avoid unsupported claims such as:

* "FDA compliant"
* "USDA certified"
* "Codex compliant"

until the relevant requirements have been formally evaluated.

## Future Documentation

Potential future documents include:

* Approved and excluded ingredient policy
* Ingredient sourcing standards
* Kitchen equipment/material standards
* Allergen-modeling policy
* Nutrition-data methodology
* Storage and shelf-life methodology
* Inventory and grocery-replenishment rules
* Culinary terminology reference
* FoodOn/LanguaL mapping notes
* USDA/FDA/Codex standards mapping

