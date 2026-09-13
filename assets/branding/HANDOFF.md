# KitchenOps Branding Handoff

## Status

KitchenOps graphic-design work is intentionally paused at a stable checkpoint.

The immediate reason this branding effort began was the need for a project-specific favicon for the KitchenOps FastAPI / Swagger UI environment.

Two saucepan logo-mark SVGs are now approved as the current masters:

- `kitchenops-logo-mark-master-color.svg`
- `kitchenops-logo-mark-master-silhouette.svg`

These should be treated as locked source-of-truth artwork until branding work is intentionally resumed.

Do not overwrite the masters while experimenting. Create new working copies for all future revisions.

---

## Approved Logo Direction

Primary symbol:

**Copper saucepan with cast-iron handle and tinned interior**

Important visual characteristics:

- saucepan rather than skillet / frying pan;
- elliptical top opening with visible perspective;
- body / base follows the same perspective family as the top rim;
- copper exterior;
- tinned / silver interior;
- dark cast-iron handle;
- tapered handle;
- narrow negative-space handle slot;
- large cast-iron handle fixture / mounting bracket wrapping the sidewall;
- fixture and handle use the same dark material language;
- no interior “smiley face” / floor-cue object in the approved color illustration;
- overall form remains simple enough to derive smaller and monochrome assets.

---

## Canonical Source Locations

Recommended project locations:

```text
assets/branding/source/
├── kitchenops-logo-mark-master-color.svg
└── kitchenops-logo-mark-master-silhouette.svg
```

Working experiments belong under:

```text
assets/branding/working/logo-concepts/
```

Do not use a working study as the source of truth once a master has been approved.

---

## Current Brand Direction

Working visual direction:

**Copper & Chlorophyll**

Internal descriptive phrase:

**Luxury wellness test kitchen**

Design principle:

**Luxury outside. Precision inside.**

KitchenOps should combine:

- fine-dining sophistication;
- earthy wellness;
- clean-lifestyle aesthetics;
- rigorous measurements;
- future nutrition-data precision;
- dry, self-aware lifestyle satire.

---

## Working Palette

```text
Porcelain        #F4F0E8
Ink              #1D211D
Deep Evergreen   #21372D
Burnished Copper #9B5135
Oxblood          #4C2634
```

Silver / tin should normally be treated as a material family rather than a single mandatory hex value.

---

## Typography Policy

Only open-source, clearly redistributable fonts should be used.

Preferred license:

**SIL Open Font License (OFL)**

Current families:

- Cormorant Garamond — editorial / fine-dining display
- Inter — application UI / body text
- IBM Plex Mono — measurements / nutrition / technical data

Local archived Google Fonts packages are available at:

```text
~/Desktop/record-label-business/04_Brand_and_Creative/Brand_Identity/Typography/Font_Library/
```

Reuse those local assets rather than downloading duplicate font packages when practical.

---

## Existing Branding Documentation

Current branding documentation should include:

```text
docs/branding/brand-strategy.md
docs/branding/asset-pipeline.md
docs/branding/logo-design-notes.md
```

Research reference:

```text
docs/branding/research/kitchenops-visual-identity-research.md
```

---

## Immediate Deferred Task: Favicon

The original practical goal remains unfinished:

**derive a KitchenOps favicon from the locked logo mark.**

When branding work resumes, start here before expanding into broader identity work.

Recommended favicon workflow:

1. Begin from `kitchenops-logo-mark-master-silhouette.svg`.
2. Create a simplified favicon-specific derivative.
3. Preserve strong saucepan recognition at very small sizes.
4. Remove details that disappear or clog at 16×16.
5. Test at:
   - 16×16
   - 32×32
   - 48×48
   - 180×180
   - 192×192
   - 512×512
6. Generate:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon-180x180.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `site.webmanifest`
7. Replace the temporary FastAPI / Swagger favicon with the KitchenOps favicon.
8. Validate Swagger UI completely offline.

The favicon derivative may need to simplify:

- handle slot;
- mounting bracket;
- rim / interior detail.

Do not modify the master SVG merely to make the favicon work.

---

## Future Branding Work

After the favicon is complete, possible future work includes:

### Logo system

- full logo lockup;
- wordmark;
- light-background variant;
- dark-background variant;
- monochrome variants;
- small-icon variant;
- embroidery derivative.

### Wordmark

Explore:

- Cormorant Garamond for `Kitchen`;
- restrained Inter treatment for `Ops`;
- or a single-family treatment if the mixed-family version feels forced.

### Color studies

Evaluate:

- Porcelain background;
- Deep Evergreen background;
- Ink / monochrome;
- Burnished Copper;
- reduced-color embroidery variants.

### Embroidery

Create a dedicated derivative such as:

```text
kitchenops-logo-mark-embroidery.svg
```

Embroidery-oriented SVG should favor:

- closed paths;
- flat colors;
- few nodes;
- no gradients;
- no filters;
- no masks;
- no embedded raster images;
- no text;
- explicit physical dimensions where useful.

The SVG remains artwork; stitch density, underlay, pull compensation, sequencing, and machine format are determined during digitizing.

### Production export work

Create and validate:

- SVG production assets;
- PNG exports;
- WebP where appropriate;
- social avatar;
- documentation graphics;
- video / DaVinci Resolve branding assets.

---

## Do Not Resume By

Avoid restarting the project by:

- redesigning the saucepan from scratch;
- overwriting either locked master;
- adding gears, leaves, chef hats, or generic restaurant symbols;
- adding gradients or metallic effects before testing the flat-vector derivatives;
- using proprietary / commercial fonts;
- creating favicon assets from a small raster PNG;
- treating an embroidery SVG as the main logo master.

---

## Resume Checklist

When returning to branding:

1. Read this handoff.
2. Review:
   - `brand-strategy.md`
   - `asset-pipeline.md`
   - `logo-design-notes.md`
3. Open both locked master SVGs.
4. Confirm they have not been modified.
5. Resume with the **favicon-specific silhouette derivative**.
6. Test favicon recognition at 16×16 and 32×32 before polishing larger sizes.
7. Wire the selected favicon into KitchenOps FastAPI offline Swagger UI.
8. Commit the favicon milestone before continuing into wordmark / larger brand-system work.

---

## Current Development Return Point

After saving this handoff, return to the KitchenOps backend task that was interrupted by the branding side quest:

**Finish the offline FastAPI Swagger UI setup and replace its temporary Swagger/FastAPI favicon later with the KitchenOps favicon derivative.**

The branding work can remain paused without blocking backend development.
