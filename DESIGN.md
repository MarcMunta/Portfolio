---
name: Portfolio Proof Lab
description: A measured product archive where real work is inspected at full scale.
---

<!-- impeccable:design-schema 1 -->

# Design System: Portfolio Proof Lab

## Overview

**Creative North Star: "The Product Proof Lab"**

The portfolio behaves like a working inspection bench, not a gallery of interchangeable cards. Real interfaces are mounted as specimens; concise annotations explain what was built, which constraint mattered, and where the result can be verified. Measurement marks, registration corners, status stamps, and large project identifiers make the system recognizable even with all copy removed.

The visitor is evaluating work on a bright laptop in an office or studio. A deep graphite field lets screenshots and the portrait hold focus, while pale technical sheets and rare signal colors create decisive changes in pace. The interface stays precise rather than nostalgic: no fake terminals, no decorative source code, and no dashboard density.

**Key Characteristics:**

- Full-scale project specimens instead of repeated cards.
- Authored gaps between projects create chapters and comparison pairs.
- Labels and rules behave like test annotations, always tied to useful evidence.
- Motion reveals inspection states: register, scan, resolve, and release.
- Portrait, project covers, and CV remain the visual evidence.

## Colors

Committed dark strategy: graphite owns most of the page; mineral white carries readable content; inspection lime identifies verified actions; cobalt supports navigation and system depth; signal orange is reserved for live or new status.

**The Signal Ration Rule.** Lime and orange never become ambient decoration. Every use must indicate action, proof, or state.

## Typography

**Display Font:** Barlow Condensed with a condensed sans-serif fallback.

**Body Font:** Manrope with a humanist sans-serif fallback.

**Character:** Narrow industrial headlines create scale without excessive height; open body forms keep the multilingual copy clear. Technical character comes from hierarchy and annotation, never from using monospace as costume.

**The One-Line Thesis Rule.** Major section titles name one idea in as few lines as the language allows; evidence carries the detail.

## Layout

A twelve-column desktop grid supports specimen frames, annotation rails, oversized names, and asymmetric supporting facts. Projects do not share one template: each case uses the same grammar but a different balance of image, explanation, and proof. Tight project pairs are followed by generous chapter gaps.

On narrow screens, the system becomes one measured vertical track. Annotation rails move above their specimen, controls remain in document flow, and no essential information depends on overlap, hover, or horizontal scrolling.

## Elevation & Depth

Depth comes from tonal planes, crop, scale, and moving registration layers. Shadows belong only under physical-feeling specimens such as the portrait, CV sheet, and project media. Navigation may float, but glass blur never becomes the page's material.

**The Bench Rule.** Content surfaces sit on the graphite field like objects under inspection; empty containers do not receive elevation.

## Shapes

Rectangles are engineered and mostly square, with small functional radii. Project media uses clipped or bracketed corners, one-pixel rules, and visible registration points. Pills are limited to small status controls. Large rounded generic cards are outside the world.

## Do's and Don'ts

### Do:

- **Do** let every project earn its own composition while sharing annotation and proof rules.
- **Do** use authentic project imagery at decisive scale.
- **Do** keep links, statuses, and Marc's contribution visible without opening another view.
- **Do** preserve reduced-motion, keyboard, theme, and multilingual behavior.

### Don't:

- **Don't** repeat one card layout four times.
- **Don't** invent metrics, clients, outcomes, or process imagery.
- **Don't** turn the lab metaphor into a fake terminal, dense dashboard, or decorative grid.
- **Don't** hide primary proof behind carousels, modals, or hover-only interactions.

## Implemented Tokens

- Graphite background: `#070806`
- Raised graphite: `#10110e`
- Mineral ink: `#f1efe8`
- Inspection lime: `#d8ff3e`
- Cobalt: `#6b8cff`
- Signal orange: `#ff6a3d`
- Light-theme accessible lime text: `#496100`
- Content shell: `min(94vw, 1500px)`; compact responsive shells below 960 px.
- Display scale: Barlow Condensed, capped at `6rem`; body copy: Manrope.
- Corners: square by default; circles only for status, orbit, and cursor particles.

## Implemented Components

### Identity Board

A mineral sheet mounted on the atmospheric field. It combines the real portrait, working thesis, availability, two direct actions, and three proof areas. On mobile it becomes a single measured track: a panoramic identity portrait appears in the first viewport, followed by the thesis, actions, and proof.

### Evidence Index

A sticky desktop index linking directly to the three specimens. A live progress rail and current-project state turn it into a reading instrument, not just navigation. It becomes a compact jump index on narrow screens, where the rail disappears and the active state remains legible.

### Project Specimens

Klime opens as a full-width fashion plate so all three models remain visible, followed by a two-column evidence sheet. ATLAS reverses the evidence/media order and mounts its dark mark on a pale cobalt field. Fichestu pairs its system cover with separate client/backend proof. All use the same specimen bar, evidence numbering, verified actions, scanning sweep, and real assets.

Each media plate now carries the real project name as an oversized, non-semantic title layer. It makes every chapter identifiable while the authentic screenshot remains the evidence. The sticky archive rail adopts only the active project's signal color, so reading position is visible without adding another navigation system.

### Supporting Records

Capabilities form three staggered horizontal scanner rows: each keeps one measured sigil, a decisive discipline title, concise proof, and four numbered skills. Experience becomes six alternating records with oversized chapter numerals, using the lime Erasmus chapter as the strongest scroll beat while keeping every CV role scan-friendly. Education is mounted as a full-width mineral academic dossier: its title and explanation share one horizontal intro, four records form a balanced two-by-two ledger, the cobalt lead record marks the current stage, and the factual `SMX → DAW → DAM → IA` path closes the sequence. The CV is a dual reading instrument: the visual edition preserves the supplied one-page Canva documents exactly; the ATS edition presents the updated profile in one machine-readable column. A keyboard-operable selector updates the real preview, direct language files, download action, and matching trilingual pack without altering document colors. Contact remains the single full-signal lime surface, opens with a factual availability bar, and exposes the email address as its primary object.

## Motion and Input

Motion behaves like calibration, not decoration: register, scan, resolve, release. GSAP stages the identity board once with masked title lines and one registration sweep, reveals project media through short directional shutters, resolves each evidence list only once, and synchronizes the active project index. Scan beams and reticles stay local to the project specimen currently being inspected; a compact page percentage, moving marker, and trajectory rail make scroll position legible without becoming a dashboard.

The atmosphere keeps the inherited slow orbital depth and restrained pointer-following inspection light without replacing the original bubble trail. Text never loops, supporting reveals remain short, and persistent `will-change` is avoided. Static content is complete before enhancement. Fine pointers retain the morphing bubble cursor; CV and language controls opt into a normal blend mode. Touch users retain native input, while reduced-motion removes authored sweeps, scan beams, and progress rails entirely.

The hero ends in one lime capability rail built from the same three verified proof points already shown in the identity board. Its horizontal travel is tied to page scroll; reduced-motion leaves a complete static rail.
