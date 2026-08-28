---
name: Atılım AI
description: "Design system extracted from the shipped implementation. Two worlds under one identity: the landing page is a warm near-black workbench (#100D0A) lit by two named sources — a lamp (#E8A33D) for action and a screen (#8FB4D6) for category, the latter also the colour of the particle field that morphs behind the page on scroll. Reading surfaces switch to warm paper (#F2EDE3) on a narrower 840px measure, because full text runs to 20,000 characters. Newsreader carries display and long-form reading, Public Sans the interface, IBM Plex Mono the labels, which never drop below 12px. Depth comes from stepped surfaces and three hairline levels; the codebase contains zero box-shadows."

colors:
  gece: "#100D0A"
  tezgah: "#191512"
  tezgah-2: "#211B16"
  kagit: "#F0EADD"
  kagit-m: "#C4BBAA"
  kagit-s: "#A69C8C"
  kagit-t: "#918879"
  lamba: "#E8A33D"
  lamba-h: "#F5B65C"
  on-lamba: "#241703"
  ekran: "#8FB4D6"
  canli: "#7FB069"
  gunduz: "#F2EDE3"
  kart: "#FBF8F1"
  murekkep: "#1A1713"
  murekkep-m: "#4A443B"
  murekkep-s: "#6B6357"
  lamba-d: "#8A5510"
  ekran-d: "#3D6389"

typography:
  display-xl:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.75rem, 6.4vw, 4.6rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.28
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.34
  reading:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.85
  body-lg:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"

rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"

spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"

components:
  button-primary:
    backgroundColor: "{colors.lamba}"
    textColor: "{colors.on-lamba}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lamba-h}"
    textColor: "{colors.on-lamba}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.tezgah}"
    textColor: "{colors.kagit}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "48px"
  card:
    backgroundColor: "{colors.tezgah}"
    textColor: "{colors.kagit}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.tezgah-2}"
    textColor: "{colors.kagit}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tag:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-t}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 9px"
  nav-link:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-s}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
    height: "44px"
  modal-panel:
    backgroundColor: "{colors.tezgah-2}"
    textColor: "{colors.kagit}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    width: "560px"
  day-button:
    backgroundColor: "{colors.gunduz}"
    textColor: "{colors.murekkep}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  day-card:
    backgroundColor: "{colors.kart}"
    textColor: "{colors.murekkep}"
    typography: "{typography.reading}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Atılım AI

<!-- Extracted from the shipped implementation (index.html, haberler.html, haber.html).
     Every value below was read out of the code, not proposed for it. -->

## Overview

**Creative North Star: "The dark room and the lit notebook"**

The society's site is built as two worlds under one identity, and the split is functional
rather than decorative. The landing page is a workbench at night: a warm near-black ground
lit by two named sources. The **lamp** is where people are — actions, focus, the brand mark.
The **screen** is the cool light of a monitor left on, and it is literally the colour of the
particle field that morphs behind the page as you scroll. Giving the field a role in the
metaphor is what stops it reading as decoration.

Reading surfaces are the other world. The archive and article pages switch to warm paper on
a narrower measure, because an article's full text runs to 20,000 characters and long-form
reading does not belong on a dark ground. The dark top bar stays across the transition, so
leaving the room and opening the notebook reads as one motion rather than two sites.

The rejected reference is specific and was named before any code was written: the generic
AI-startup page — tracked-caps eyebrow chips over oversized headlines, purple-blue
gradients, glass panels on every surface, decorative stat counters. The site's *structure*
was never the problem, and it is unchanged. The craft was.

**Key Characteristics:**
- Two worlds, one identity; the transition is deliberate and carried by the dark top bar
- Two named light sources instead of an abstract accent palette
- Depth without shadows — the codebase contains zero `box-shadow` declarations
- One easing curve, `cubic-bezier(.16, 1, .3, 1)`, used everywhere
- Functional text never drops below 12px

## Colors

### Primary
- **Lamba / Lamp** (#E8A33D, 8.98:1 on gece): The warm source. Brand mark, focus ring,
  active nav underline, primary button, and the amber flecks in the particle field. Never
  decorative — amber means there is something to do.
- **Lamba-d / Lamp Deep** (#8A5510, 5.31:1 on gunduz): The same source on paper, darkened
  to stay legible.

### Secondary
- **Ekran / Screen** (#8FB4D6, 8.92:1 on gece): The cool source, and the base colour of the
  particle field. Carries category labels only, so it never competes with the lamp.
- **Ekran-d / Screen Deep** (#3D6389, 5.38:1 on gunduz): The paper-world counterpart.

### Neutral — night world (`index.html`)
- **Gece** (#100D0A): Ground. Warm, not blue-black.
- **Tezgah / Tezgah-2** (#191512 / #211B16): Card at rest, card on hover.
- **Kagit** (#F0EADD, 16.16:1): Headings and primary text.
- **Kagit-m** (#C4BBAA, 10.18:1): Body copy.
- **Kagit-s** (#A69C8C, 7.15:1): Secondary information, nav links at rest.
- **Kagit-t** (#918879): Dates, tags, the least important text. **4.87:1 against tezgah-2**,
  the lightest surface it can land on — this token was raised from #8A8175 precisely because
  the old value passed against the page ground but failed on a hovered card.
- **Hairlines** (`--hair` .13 / `--hair-s` .22 / `--hair-t` .34, all `rgba(240,234,221,α)`).

### Neutral — day world (`haberler.html`, `haber.html`)
- **Gunduz / Kart** (#F2EDE3 / #FBF8F1): Ground and raised card.
- **Murekkep** (#1A1713, 15.31:1), **Murekkep-m** (#4A443B, 8.25:1),
  **Murekkep-s** (#6B6357, 5.07:1).
- **Hairlines** (`--cizgi` .14 / `--cizgi-s` .24, `rgba(26,23,19,α)`).

### Semantic
- **Canli** (#7FB069, 7.67:1): Project status only. A state colour, not an accent.

### Named Rules
**The Two Sources Rule.** There are exactly two accent hues and each has one job: the lamp
signals action, the screen signals category. A third accent, or the lamp used for a category
label, breaks the metaphor and the hierarchy in the same stroke.

**The No-Shadow Rule.** There is no `box-shadow` in this codebase. When an element comes
forward it moves up one surface level and one hairline level. The only exception is the
`:focus-visible` ring.

**The Hardest Surface Rule.** Contrast is measured against the lightest surface the text can
land on, not the page ground. `kagit-t` on `gece` is 5.54:1; on `tezgah-2` it is 4.87:1, and
that second number is the one that governs.

## Typography

**Display and long-form:** Newsreader (Georgia fallback), weight 300 for display, 400 for
reading. Italic is the emphasis mechanism — the hero's second clause is italic and amber.
**Interface:** Public Sans (system-ui fallback).
**Labels and figures:** IBM Plex Mono.

The 3D wordmark builds its particle target by drawing a font to a canvas and sampling the
pixels. Newsreader's thin serif strokes sample poorly, so **`sampleWord()` uses IBM Plex Mono
at weight 600**. This is the one place a type choice is a code dependency; changing the
display face without changing that call degrades the logo animation.

### Hierarchy (as shipped)
- **display-xl** — `clamp(2.75rem, 6.4vw, 4.6rem)`, 300, lh 1.06, ls -0.02em. The `h1` on all
  three pages, one per page.
- **display-lg** — `clamp(2rem, 4vw, 3rem)`, 300, lh 1.1. Section headings; `index.html` only.
- **headline** — 28px, 400. Issue headings and archive article titles.
- **title** — 21px, 400. Project cards, homepage news rows, event rows.
- **reading** — 19px, 400, lh 1.8–1.85. Article body on the day world; measure capped at 66ch.
- **body-lg** — 18px. Lead paragraphs.
- **body** — 16px. Document default.
- **body-sm** — 15px. Buttons, card copy, nav links, footer.
- **meta** — mono 13px. Dates, sources, issue numbers.
- **label** — mono 12px, 500, ls 0.08em, uppercase. Tags and status. **The floor.**

The rendered range runs 12px → 73.6px, a ratio of about 6:1. Automated hierarchy checks that
cannot resolve `clamp()` will report roughly 1.8:1 and flag it as flat; that reading is an
artefact of the tooling, not of the ramp.

### Named Rules
**The Twelve Pixel Floor.** No functional text drops below 12px — labels, dates, meta and
footer included. The previous implementation went to 9.5px in 22 places, which is where this
rule comes from.

**The Inverse Tracking Rule.** Letter-spacing runs inversely to size: negative on display
(-0.02em), zero through body copy, positive only on the 12px mono label and even there
measured (0.08em).

## Layout

**Two container widths, on purpose.** The landing page is `max-width: 1180px` with
`clamp(20px, 5vw, 56px)` of side padding. The reading pages are `max-width: 840px` with
`clamp(20px, 5vw, 40px)`. The narrower measure exists so long-form text lands near 66
characters per line; do not unify them.

Vertical rhythm between sections is `--sp-sec` (96px); rhythm inside a section is picked from
the 8px-based scale (8/12/16/24/32/48). No in-between values appear in the shipped code.

**Two breakpoints:** 760px (single column; the hero's notebook rail is hidden, news rows and
event rows stack) and 900px (nav collapses to a disclosure panel, two-column blocks stack).

Touch targets are at least 44px, and buttons 48px. There is no `overflow-x: hidden` anywhere;
overflow is solved at its source.

## Elevation & Depth

No shadows. Depth is told by two ramps: surfaces lighten as they come forward
(gece → tezgah → tezgah-2) and hairlines strengthen as boundaries become definite
(.13 → .22 → .34). A card on hover gains a surface level and a hairline level, not a shadow.

The particle field is a third depth layer and never competes with content. Per-section camera
offsets push the particle mass away from whichever column holds the text (`CAM_X[0] = -34`
moves the hero mass right and clear of the headline), and drift drops in the most-read
section. Under `prefers-reduced-motion` the field freezes entirely.

`backdrop-filter` appears exactly once, on the stuck navigation bar.

### Named Rules
**The One Level Rule.** Ordinary hover moves one surface level. Moving two means a modal or an
opened panel.

## Shapes

Five steps, all used: **4 / 6 / 8 / 12 / 16px**. Buttons and inputs `md` (8), cards and images
`lg` (12), the modal panel `xl` (16), tags and nav links `sm` (6), focus rings `xs` (4).
`border-radius: 50%` appears only on true circles — the project status dot and the language
dot in the repository list.

There is no pill radius in this system. If a pill shape seems necessary, the element is
probably a tag and should take `sm`.

## Components

### Buttons
15px Public Sans 500, `0 22px` padding, **48px min-height**, `md` radius.
- **Primary** — lamba ground, on-lamba text. One per screen.
- **Secondary** — tezgah ground, hair-s border, kagit text.
- **Hover** — surface moves one level (`tezgah` → `tezgah-2`) or lamba shifts to lamba-h.
  No `translateY` anywhere in the system.
- **Focus** — `2px solid lamba`, 3px offset, on every interactive element.

### Cards (night world)
tezgah ground, hair border, `lg` radius, 24px padding. Hover moves to tezgah-2 and hair-s.
**No fixed heights** — content flows to the real data ceilings (title 200 chars, summary 800).

### Navigation
Horizontal links at 15px with a 44px hit area; the active section carries a 2px lamba
underline. Below 900px it becomes a disclosure panel behind a labelled button with
`aria-expanded`. The active section is read from real section geometry via
`IntersectionObserver`, never from a scroll ratio.

### Events list
Each row is a real `<button>` inside its `<li>`, so keyboard operation needs no extra code.
Expansion animates `grid-template-rows` from `0fr` to `1fr` — not `max-height` — so no pixel
ceiling can clip long copy.

### News row
A grid, not a card. Homepage: `88px 108px 1fr` (date, category, body). Archive: `64px 1fr`
with the date stacked. Both separated by a single hairline; the archive's expanded full text
grows inside the same row.

### Day-world controls
Buttons drop to 44px and 16px padding on paper, and use `cizgi-s` borders on a transparent
ground so they sit quietly inside a reading column.

## Do's and Don'ts

### Documented exceptions

Two values sit outside the palette deliberately. Both are recorded so a reviewer does not
"fix" them:

- **GitHub language colours** (`#DA5B0B` and the rest of the `RENK` map in `index.html`) are
  external semantic data, not design tokens. They identify a language the way a flag
  identifies a country; recolouring them would make them wrong.
- **The day world's cream ground** (#F2EDE3) is flagged by generic anti-pattern detectors as
  a saturated trope. It is a reasoned choice: article text runs to 20,000 characters. Keep it.

### Do:
- **Do** take every spacing value from the 8px scale and every radius from the five steps.
- **Do** tell depth by moving a surface level, never by adding a shadow.
- **Do** keep the lamp for action and the screen for category.
- **Do** measure contrast against the lightest surface the text can land on.
- **Do** give every interactive element a visible focus ring and test it with a keyboard.
- **Do** switch to the day world for anything read at length.

### Don't:
- **Don't** take functional text below 12px.
- **Don't** add `box-shadow`.
- **Don't** unify the two container widths.
- **Don't** invent a radius, spacing step, or accent outside this document.
- **Don't** put a second primary button on a screen.
- **Don't** use `max-height` for disclosure animation; use `grid-template-rows`.
- **Don't** change the display font without updating `sampleWord()`.
- **Don't** fill an unverified statistic — the counters are visibly marked placeholders by
  team decision, and `PRODUCT.md` records that they must not be invented.
