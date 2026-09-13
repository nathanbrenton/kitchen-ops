# KitchenOps Branding Asset Pipeline

## Purpose

This document defines how KitchenOps branding assets are created, stored, exported, validated, archived, and prepared for web or media delivery.

The goal is to preserve a clear separation between:

1. original source artwork;
2. editable working files;
3. generated exports;
4. production-ready web assets;
5. social and video deliverables;
6. historical archives.

The workflow should be reproducible so the same approach can be reused for future projects.

---

## Directory Structure

```text
assets/
└── branding/
    ├── source/
    ├── working/
    ├── exports/
    ├── web/
    ├── social/
    └── archive/
```

### `source/`

Contains authoritative master assets.

Examples:

* master SVG logo artwork;
* original illustrations;
* selected font source files and licenses;
* original vector symbols;
* approved source photography.

Source files should not be routinely overwritten by generated exports.

### `working/`

Contains editable drafts and experiments.

Examples:

* GIMP `.xcf` files;
* temporary SVG drafts;
* color studies;
* layout experiments;
* logo concept iterations;
* compositing work.

Working files are not assumed to be production-ready.

### `exports/`

Contains generated deliverables intended for review or downstream processing.

Examples:

* large PNG logo exports;
* JPG presentation previews;
* alternate logo variations;
* transparent raster exports.

### `web/`

Contains production-ready assets intended to be served by the KitchenOps application.

Examples:

* optimized SVG logos;
* favicon assets;
* app icons;
* webfont files;
* optimized PNG/WebP assets.

### `social/`

Contains platform-oriented media assets.

Examples:

* profile images;
* social post graphics;
* YouTube thumbnails;
* channel banners;
* promotional graphics.

### `archive/`

Contains retired or milestone versions.

Recommended naming:

```text
archive/
└── 2026-09-12-branding-v1/
```

Archived assets should remain unchanged after archival.

---

## Source-of-Truth Policy

The highest-quality editable asset should remain the source of truth.

For logos and symbols, the preferred master format is:

```text
SVG
```

Raster files such as PNG should normally be generated from the vector master.

Do not use a small PNG as the authoritative master logo.

For raster artwork, preserve the highest-resolution original or layered working file.

---

## Preferred File Formats

### SVG

Preferred for:

* logos;
* symbols;
* icons;
* simple illustrations.

Advantages:

* resolution independent;
* compact;
* editable;
* excellent browser support;
* suitable for responsive layouts.

### PNG

Preferred for:

* transparency;
* raster logo exports;
* app icons;
* favicon source images;
* screenshots requiring lossless quality.

### WebP

Preferred for:

* optimized photographic web imagery;
* large raster graphics where reduced file size is useful.

### JPEG

Use primarily for:

* photographic assets;
* compatibility-oriented exports.

Avoid JPEG for:

* logos;
* flat-color graphics;
* transparency.

### ICO

Use specifically for browser favicon compatibility where required.

### XCF

Use for:

* layered GIMP working files.

XCF files belong in `working/` or `source/`, not in production web directories.

---

## Logo Master Files

The intended logo system should eventually include:

```text
kitchenops-logo-full.svg
kitchenops-logo-mark.svg
kitchenops-wordmark.svg
```

Possible variants:

```text
kitchenops-logo-full-dark.svg
kitchenops-logo-full-light.svg
kitchenops-logo-mark-dark.svg
kitchenops-logo-mark-light.svg
```

Avoid encoding arbitrary pixel dimensions into master filenames.

SVG files are scalable and should remain the authoritative versions.

---

## Raster Logo Exports

Recommended general-purpose exports:

```text
kitchenops-logo-full-2048.png
kitchenops-logo-full-1024.png

kitchenops-logo-mark-1024.png
kitchenops-logo-mark-512.png
kitchenops-logo-mark-256.png
```

These files are generated assets, not master artwork.

---

## Favicon Deliverables

The favicon should be derived from the simplified KitchenOps logo mark.

Recommended deliverables:

```text
favicon.ico
favicon-16x16.png
favicon-32x32.png
apple-touch-icon-180x180.png
android-chrome-192x192.png
android-chrome-512x512.png
site.webmanifest
```

A larger square master should be preserved before generating smaller favicon sizes.

Recommended source:

```text
kitchenops-logo-mark.svg
```

or a high-resolution square raster derived from it.

---

## Small-Icon Design Rule

Small icons require more simplification than full-size branding.

At favicon scale:

* remove fine lines;
* remove unnecessary internal detail;
* favor strong silhouette;
* preserve clear negative space;
* test at 16×16 and 32×32 pixels.

The KitchenOps saucepan mark should therefore become progressively simpler as output size decreases.

---

## Color Handling

Master branding assets should preserve exact documented brand colors.

Current working palette:

```text
Porcelain       #F4F0E8
Ink             #1D211D
Deep Evergreen  #21372D
Burnished Copper #9B5135
Oxblood         #4C2634
```

Web assets should normally use the **sRGB** color space.

Do not rely on an embedded wide-gamut profile for critical brand-color interpretation unless the target workflow explicitly supports it.

---

## Transparency

Transparent backgrounds are preferred for reusable logo exports.

Typical transparent deliverables:

```text
PNG
SVG
```

For production testing, also inspect logos against:

* light background;
* dark background;
* photographic background.

---

## Typography Assets

KitchenOps should use only open-source, clearly redistributable typefaces.

Preferred license:

```text
SIL Open Font License (OFL)
```

Current working families:

* Cormorant Garamond;
* Inter;
* IBM Plex Mono.

Authoritative archived font packages already exist outside the KitchenOps project.

KitchenOps should copy only the font files actually required by the application.

When font files are copied into the project, also preserve the corresponding license files.

Recommended project location:

```text
assets/branding/source/fonts/
```

Production webfont files may later be placed under:

```text
frontend/public/fonts/
```

or another deliberate frontend asset directory.

---

## File Naming

Use lowercase kebab-case.

Preferred:

```text
kitchenops-logo-mark.svg
kitchenops-logo-full-1024.png
kitchenops-favicon-32.png
```

Avoid:

```text
FinalLogo.PNG
logo-new-final-v2-REAL.png
Kitchen Ops Logo copy 3.svg
```

Descriptive filenames should identify:

1. project;
2. asset role;
3. variant;
4. size when relevant.

---

## Versioning

During design exploration, use explicit concept identifiers:

```text
kitchenops-logo-concept-a.svg
kitchenops-logo-concept-b.svg
kitchenops-logo-concept-c.svg
```

When a design reaches an approved milestone:

```text
kitchenops-logo-v1.svg
```

Do not continually append ambiguous labels such as:

```text
final
final2
new-final
latest
```

Use Git history and archival snapshots for historical tracking.

---

## ImageMagick Role

ImageMagick should be the preferred automation tool for routine raster conversion and inspection.

Typical uses:

* resizing PNG files;
* generating favicon sizes;
* converting image formats;
* inspecting image dimensions;
* checking color-space metadata;
* batch-processing deliverables.

Example inspection:

```bash
magick identify kitchenops-logo-mark-512.png
```

Example resize:

```bash
magick \
  kitchenops-logo-mark-1024.png \
  -resize 512x512 \
  kitchenops-logo-mark-512.png
```

Avoid repeatedly resizing already reduced raster files.

Generate smaller files from the highest-quality available source.

---

## GIMP Role

GIMP should be used for tasks that benefit from interactive raster editing.

Examples:

* pixel-level favicon cleanup;
* compositing;
* transparency correction;
* raster mockups;
* photography adjustments;
* layered `.xcf` working files.

GIMP should not normally become the authoritative source for a logo that can be preserved as vector artwork.

---

## FFmpeg / FFprobe Role

FFmpeg and FFprobe are primarily intended for motion and audiovisual brand assets.

Possible future uses:

* logo animation exports;
* title cards;
* promotional video assets;
* still extraction;
* format conversion;
* codec validation.

Example inspection:

```bash
ffprobe -hide_banner branding-animation.mov
```

---

## MediaInfo Role

MediaInfo may be used to verify audiovisual deliverables.

Useful metadata includes:

* codec;
* resolution;
* frame rate;
* color information;
* audio format;
* duration;
* bitrate.

It is complementary to FFprobe.

---

## DaVinci Resolve Role

DaVinci Resolve should be used for higher-level motion-branding work.

Potential uses:

* logo animations;
* branded intros;
* recipe-video title sequences;
* social-video deliverables;
* YouTube bumpers;
* end cards.

Master still branding assets should remain separate from Resolve project files.

---

## Export Validation

Every production asset should be inspected after export.

For raster images, verify:

* dimensions;
* alpha/transparency;
* color space;
* file type;
* file size;
* visual quality.

Example:

```bash
magick identify -verbose image.png
```

For SVG assets, verify:

* dimensions/viewBox;
* no unintended embedded raster content;
* correct brand colors;
* clean rendering in a browser.

For video assets, verify with:

```bash
ffprobe
```

and optionally:

```bash
mediainfo
```

---

## Web Optimization

Production web assets should be optimized without destroying the master files.

Do not optimize files in `source/` destructively.

Instead:

```text
source/
    ↓
working/
    ↓
exports/
    ↓
web/
```

The `web/` directory may contain optimized derivatives while `source/` retains original quality.

---

## Responsive Image Policy

Large raster imagery intended for the application should eventually support multiple output sizes.

For example:

```text
kitchenops-hero-640.webp
kitchenops-hero-1280.webp
kitchenops-hero-1920.webp
```

The frontend can then select an appropriate resource for the display size.

Do not send a 4000-pixel image to every mobile device unless there is a specific reason.

---

## Archival Policy

When a major branding milestone is approved, create a dated archival snapshot.

Example:

```text
assets/branding/archive/
└── 2026-09-12-branding-v1/
```

An archive may include:

* approved SVG masters;
* key raster exports;
* color specification;
* typography notes;
* licenses;
* README describing the milestone.

Archives should be treated as immutable historical records.

---

## Third-Party Asset Licensing

Third-party assets should not be copied into KitchenOps without verifying their redistribution rights.

Examples include:

* fonts;
* stock photography;
* icons;
* illustrations;
* textures.

Preserve applicable license and attribution files near archived source assets where practical.

Do not assume that an asset being freely downloadable makes it redistributable.

---

## Git Policy

Suitable files for Git include:

* SVG master logos;
* documentation;
* modestly sized web assets;
* font licenses;
* production icons;
* favicon assets.

Large experimental or temporary media should be evaluated before committing.

Avoid filling the repository with:

* redundant exports;
* temporary renders;
* huge raw video files;
* unnecessary duplicate source assets.

---

## Recommended Production Flow

The default branding workflow should be:

```text
Concept
    ↓
Source Master
    ↓
Working File
    ↓
Export
    ↓
Validation
    ↓
Web / Social / Video Deliverable
    ↓
Approved Archive
```

Each stage has a distinct purpose.

The source master should remain recoverable even if downstream exports are regenerated.

---

## Guiding Principle

Brand assets should be treated like production software assets:

* maintain a source of truth;
* preserve dependencies and licenses;
* use reproducible transformations;
* validate deliverables;
* archive milestones;
* avoid destructive workflows.

The objective is not merely to make KitchenOps look polished.

The objective is to create a branding workflow that can be confidently repeated for future projects.

