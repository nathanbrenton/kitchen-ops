# KitchenOps Recipe Copyright, Attribution, and Provenance

## Purpose

KitchenOps should treat recipe provenance, attribution, copyright, and licensing as first-class recipe metadata.

The goal is to preserve where a recipe came from, distinguish original KitchenOps expression from underlying culinary ideas, and make that information reusable across:

- Web pages
- Printable PDFs
- YouTube descriptions
- Video credits and burn-ins
- API responses
- Future publication or cookbook workflows

This document is a practical design guide, not legal advice.

---

## 1. Copyright and Recipes: Practical Baseline

Under U.S. copyright principles, a bare recipe consisting of ingredients, quantities, and simple directions is generally not protected by copyright as such.

Copyright protection may apply to original expressive material surrounding a recipe, including:

- Substantial explanatory prose
- Original descriptions
- Photography
- Illustrations
- Video
- Creative commentary
- Original presentation or arrangement
- A sufficiently original compilation or collection

This means KitchenOps should distinguish between:

1. The culinary formula or method
2. The original KitchenOps written expression
3. Original KitchenOps media
4. The recipe's provenance or inspiration sources
5. Any third-party source material and its license

A copyright notice should not imply ownership over a traditional preparation, common culinary method, or basic ingredient combination when the protectable material is really the original writing, photography, presentation, or other expression.

---

## 2. Traditional and Common Recipes

Some recipes are best described as traditional or common preparations rather than original inventions.

Example:

### Oatmeal

A basic combination of oats, water, and salt is a traditional/common preparation.

KitchenOps can still claim copyright in its original:

- Written instructions
- Explanations
- Photos
- Illustrations
- Layout
- Video
- Educational commentary

But the provenance should make clear that KitchenOps is not claiming to have invented oatmeal.

Suggested provenance:

```text
Provenance: traditional
Recipe development: KitchenOps / Nathan Brenton
Original presentation: © 2026 Nathan Brenton
```

---

## 3. Recipe Provenance Categories

KitchenOps should support structured provenance rather than relying only on free-form attribution text.

Recommended provenance relationships:

```text
original
traditional
common-method
inspired-by
recreated-from
adapted-from
```

### `original`

The recipe was independently conceived without a particular source recipe serving as the basis.

### `traditional`

The recipe is an established traditional preparation without one identifiable modern originator.

Examples:

- Basic oatmeal
- Simple boiled rice
- Basic lentils
- Traditional preparation methods

### `common-method`

The entry documents a common culinary technique or formula rather than a uniquely attributable recipe.

Examples:

- Boiling an egg
- Toasting nuts
- Blanching vegetables
- Basic stovetop grain preparation

### `inspired-by`

A source influenced the concept, flavor direction, presentation, or general approach, but the KitchenOps recipe was independently developed.

Example:

```text
Inspired by:
A restaurant salad that suggested a particular ingredient combination.

KitchenOps recipe:
Independently developed with different proportions, preparation steps,
seasoning, and presentation.
```

### `recreated-from`

KitchenOps intentionally attempts to reproduce or approximate a publicly available dish through lawful observation, tasting, experimentation, or other public information.

This is especially useful for restaurant-style recreations.

Example:

```text
Title:
All-Day Salad

Provenance:
recreated-from

Source inspiration:
The Cheesecake Factory — Wellness Salad

Development method:
Independently developed through tasting, observation, and kitchen experimentation.
```

The public KitchenOps title remains distinct while the provenance record preserves the source of inspiration.

### `adapted-from`

The KitchenOps recipe started from an identifiable published recipe or other source recipe and was intentionally modified.

This relationship deserves extra care because the original source's license and copyright status may affect what may be reused.

The provenance record should identify:

- Original creator
- Source title
- Publication
- URL
- Source license
- Modifications made
- Required attribution

---

## 4. Recreating a Restaurant Dish

A useful distinction exists between independently recreating a publicly sold dish and copying protected or confidential material.

A typical lawful recreation workflow might look like:

```text
Purchase and eat publicly sold dish
        ↓
Observe ingredients and preparation
        ↓
Take personal notes
        ↓
Experiment independently
        ↓
Develop KitchenOps version
        ↓
Write original instructions
        ↓
Take original photos/video
```

This is fundamentally different from:

```text
Obtain confidential internal recipe
through theft, deception, breach of confidence,
unauthorized access, or employee disclosure
        ↓
Publish confidential material
```

### Practical KitchenOps rule

A recipe recreated through lawful tasting, observation, experimentation, and independent development should be recorded as:

```text
recreated-from
```

Do not represent the KitchenOps recreation as official, licensed, endorsed, or authorized by the original restaurant unless that is actually true.

---

## 5. Trademark and Branding

Even when the culinary formula itself is not protected by copyright, trademarks can create separate concerns.

Avoid naming or presenting a KitchenOps recipe in a way that suggests:

- Sponsorship
- Affiliation
- Endorsement
- Official status
- Authorization by another restaurant or company

For example, a distinct public title such as:

```text
All-Day Salad
```

is preferable to branding the recipe as:

```text
Official Cheesecake Factory Wellness Salad
```

when no such authorization exists.

A factual provenance statement such as:

```text
Inspired by the Wellness Salad served at The Cheesecake Factory.
```

serves a different purpose: it identifies the inspiration source rather than using the third party's brand as the KitchenOps recipe's own identity.

Public-facing attribution should be written so that it does not imply sponsorship or endorsement.

---

## 6. Trade Secrets and Reverse Engineering

Restaurant recipes can sometimes be treated as confidential business information.

KitchenOps should distinguish lawful independent development from improper acquisition.

Generally acceptable provenance methods include:

- Independent development
- Tasting
- Observation
- Experimentation
- Reverse engineering of a lawfully obtained publicly available product
- Publicly available information

Methods that should never be used include:

- Theft
- Hacking
- Bribery
- Misrepresentation
- Unauthorized access
- Breach of confidentiality
- Soliciting confidential material from employees who are not authorized to disclose it

KitchenOps should never store or publish confidential recipe material obtained through improper means.

---

## 7. Patent Considerations

Although uncommon for ordinary home and restaurant recipes, food compositions or manufacturing processes can sometimes be patented.

Patent rights differ from copyright because independent development does not necessarily avoid infringement if the resulting product or process falls within valid patent claims.

For ordinary KitchenOps recipes this is unlikely to be a frequent issue, but it should remain part of the project's legal-awareness model.

---

## 8. Separate Software Licensing From Content Licensing

KitchenOps software code and KitchenOps content should not automatically share the same license.

Recommended separation:

```text
KitchenOps software code
→ MIT License

Recipe/editorial content
→ recipe-specific or project-level content license

Photos / illustrations / video
→ media-specific rights or license

Third-party sources
→ source-specific attribution and license
```

The repository's MIT license should not be interpreted as automatically licensing all recipe prose, photographs, videos, or other content under MIT.

A future `CONTENT_LICENSE.md` or equivalent document may be appropriate.

---

## 9. Possible Content Licenses

KitchenOps may eventually support values such as:

```text
all-rights-reserved
cc-by-4.0
cc-by-sa-4.0
cc-by-nc-4.0
cc-by-nc-sa-4.0
cc-by-nd-4.0
cc-by-nc-nd-4.0
custom
```

The project should not choose a Creative Commons license merely for convenience.

Before selecting a default content license, decide how others should be allowed to:

- Repost recipe text
- Modify recipes
- Use recipe photos
- Use material commercially
- Translate content
- Incorporate content into videos
- Republish PDFs
- Create derivative works

---

## 10. Recommended KitchenOps Rights Model

Rather than storing one copyright string, KitchenOps should use structured rights metadata.

Conceptual model:

```ts
type RecipeRights = {
  copyrightHolder?: string;
  copyrightYear?: number;
  license: ContentLicense;
  attributionText?: string;
  sourceAttributions: RecipeSourceAttribution[];
};
```

A source-attribution record could conceptually contain:

```ts
type RecipeSourceAttribution = {
  relationship:
    | "original"
    | "traditional"
    | "common-method"
    | "inspired-by"
    | "recreated-from"
    | "adapted-from";

  creator?: string;
  title?: string;
  publication?: string;
  url?: string;
  license?: ContentLicense;
  notes?: string;
};
```

The exact TypeScript implementation should be added gradually and may evolve as the project gains real examples.

---

## 11. Multiple Inspiration Sources

Recipes should support more than one source.

Example:

```text
Recipe:
All-Day Salad

Provenance:
recreated-from

Primary inspiration:
Restaurant dish A

Additional inspiration:
Dressing technique from source B
Preparation method from source C

KitchenOps development:
Independent testing and adaptation
```

This is preferable to pretending a recipe has a single origin when its development history is more complex.

---

## 12. Downstream Attribution Strategy

Structured provenance allows KitchenOps to generate appropriate attribution for different destinations.

### Website

Can show:

- Recipe origin
- Inspiration sources
- Creator
- Source links
- License
- Copyright
- Modification notes

### Printable PDF

Can include:

- Compact copyright footer
- Recipe provenance
- Sources and Attribution section
- License notice

### YouTube Description

Can include:

- Recipe title
- Inspiration/source credits
- Source URLs
- License information
- Modification/recreation statement
- Copyright notice

### Video Burn-In / Watermark

Keep this compact.

Example:

```text
© 2026 Nathan Brenton / KitchenOps
```

Full attribution is usually better placed in:

- End credits
- Video description
- Linked recipe page

A permanent on-screen watermark is not a good substitute for complete attribution where source names, links, licenses, or modification notices are required.

### API

Expose machine-readable provenance and rights metadata so downstream clients do not need to parse human prose.

---

## 13. Example: Traditional Oatmeal

Suggested conceptual entry:

```text
Title:
Oatmeal

Provenance:
traditional

Recipe developer:
Nathan Brenton

Notes:
Basic oatmeal is a traditional/common preparation.
KitchenOps does not claim ownership of the underlying culinary concept.

Original KitchenOps text, photography, media, and presentation:
© 2026 Nathan Brenton

License:
To be determined
```

---

## 14. Example: All-Day Salad

Hypothetical example based on independently recreating a restaurant dish.

```text
Title:
All-Day Salad

Provenance:
recreated-from

Source:
The Cheesecake Factory — Wellness Salad
(formerly known as Super Anti-Oxidant Salad)

Development method:
Independently recreated through lawful tasting, observation,
experimentation, and KitchenOps recipe development.

Public presentation:
Uses the distinct KitchenOps title "All-Day Salad."

Affiliation:
No sponsorship, endorsement, or official affiliation should be implied.

Original KitchenOps instructions, photography, video,
and presentation:
© 2026 Nathan Brenton

License:
To be determined
```

This provenance approach gives credit to the source of inspiration while preserving the distinction between the original restaurant dish and the independently developed KitchenOps version.

---

## 15. KitchenOps Attribution Principle

KitchenOps should generally prefer **more provenance transparency, not less**.

Even when attribution is not strictly required by copyright law, recording inspiration can:

- Preserve development history
- Give credit
- Improve editorial integrity
- Reduce ambiguity
- Make future publication easier
- Help distinguish independent development from copying
- Support accurate downstream credits

The database should therefore retain richer provenance than any single downstream output necessarily displays.

---

## 16. References

Useful primary references for future legal review:

- U.S. Copyright Office — Works Not Protected by Copyright, Circular 33
  - https://www.copyright.gov/circs/circ33.pdf

- U.S. Patent and Trademark Office — Trademark Infringement
  - https://www.uspto.gov/page/about-trademark-infringement

- U.S. Code, 18 U.S.C. § 1839 — Trade-secret definitions, including improper means and reverse engineering
  - https://www.law.cornell.edu/uscode/text/18/1839

- U.S. Patent and Trademark Office — Patent Basics
  - https://www.uspto.gov/patents/basics

- Creative Commons — About CC Licenses
  - https://creativecommons.org/share-your-work/cclicenses/

---

## 17. Future Implementation Tasks

Possible future KitchenOps work:

- Create `RecipeProvenanceRelationship` TypeScript union
- Create `RecipeSourceAttribution` domain type
- Create `ContentLicense` type
- Create `RecipeRights` domain type
- Add rights/provenance to `Recipe`
- Add multiple-source support
- Add generated web attribution
- Add PDF attribution formatting
- Add YouTube-description attribution formatting
- Add compact video copyright/credit rendering
- Add project-level `CONTENT_LICENSE.md`
- Explicitly document that the MIT license applies to software code, not automatically to recipe/media content
