---
name: Atılım AI
description: "Institutional site for the AI society at Atılım University, built as two worlds under one system. The landing page is a warm near-black workbench (#100D0A) lit by two sources: a lamp (#E8A33D, where people are) and a screen (#8FB4D6, the colour of the particle field that morphs behind the page as you scroll). Reading surfaces — the news archive and article pages — switch to warm paper (#F2EDE3) because full text runs to 20,000 characters and long reading does not belong on a dark ground. Display type is Newsreader with italic emphasis, body is Public Sans, technical labels sit in IBM Plex Mono and never drop below 12px. Depth is carried by stepped surfaces and hairlines; there are no shadows."

colors:
  lamp: "#E8A33D"
  lamp-hover: "#F5B65C"
  on-lamp: "#241703"
  screen: "#8FB4D6"
  night: "#100D0A"
  bench-1: "#191512"
  bench-2: "#211B16"
  paper-ink: "#F0EADD"
  paper-ink-muted: "#C4BBAA"
  paper-ink-subtle: "#A69C8C"
  paper-ink-tertiary: "#8A8175"
  day-canvas: "#F2EDE3"
  day-card: "#FBF8F1"
  ink: "#1A1713"
  ink-muted: "#4A443B"
  ink-subtle: "#6B6357"
  lamp-deep: "#8A5510"
  screen-deep: "#3D6389"
  live: "#7FB069"

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
    lineHeight: 1.25
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.34
  reading:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
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
  button:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
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
  pill: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"

components:
  button-primary:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.on-lamp}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lamp-hover}"
    textColor: "{colors.on-lamp}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.bench-1}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "48px"
  card:
    backgroundColor: "{colors.bench-1}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.bench-2}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tag:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper-ink-tertiary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 9px"
  news-row:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "22px 0"
  article-card:
    backgroundColor: "{colors.day-card}"
    textColor: "{colors.ink}"
    typography: "{typography.reading}"
    rounded: "{rounded.lg}"
    padding: "30px"
---

# Design System: Atılım AI

## Overview

**Creative North Star: "The dark room and the lit notebook"**

This is a student society's institutional site, not a product landing page. Most visitors are students deciding whether to show up on a Thursday evening. The page's job is not to convert them — it is to show the society is a serious place, and to keep the door open.

The system is built as **two worlds**. The landing page is a workbench at night: warm near-black, lit by two sources that became the two accent colours. The **lamp** (#E8A33D) is where people are — actions, focus, the brand mark. The **screen** (#8FB4D6) is the colour of the particle field that morphs behind the page as you scroll. Giving the field a role in the metaphor is what keeps it from reading as decoration.

Reading surfaces are the other world. The archive and article pages switch to warm paper, because a `icerik` field runs to 20,000 characters and long-form reading does not belong on a dark ground. Leaving the dark room and opening the notebook is a deliberate transition, not an inconsistency — the top bar stays dark across it to carry the identity through.

What is rejected is specific: the generic AI-startup page. A tracked-caps eyebrow chip above an oversized headline, purple-blue gradients, glass panels on every surface, decorative stat counters. These were never structural problems — the structure is fine. They were craft problems.

**Key Characteristics:**
- Two worlds, one system: night for the landing page, paper for reading
- Two named light sources instead of an abstract accent palette
- Depth without shadows: stepped surfaces plus three hairline levels
- Functional text never drops below 12px
- Motion belongs to the background; text and controls hold still

## Colors

### Primary
- **Lamp** (#E8A33D, 8.98:1 on night): The warm source. Brand mark, focus ring, active section marker, and **one** primary action per screen. Never decorative — if you see amber, there is something to do there.
- **Lamp Deep** (#8A5510, 5.31:1 on paper): The same source on the light world, darkened to stay legible.

### Secondary
- **Screen** (#8FB4D6, 8.92:1 on night): The cool source, and the colour of the particle field. Used for category labels and non-actionable emphasis, so it never competes with the lamp.
- **Screen Deep** (#3D6389, 5.38:1 on paper): The light-world counterpart.

### Neutral — night world
- **Night** (#100D0A): Ground of the landing page. Warm, not blue-black.
- **Bench 1–2** (#191512 / #211B16): Cards at rest and on hover.
- **Paper Ink** (#F0EADD, 16.16:1): Headings and primary text.
- **Paper Ink Muted** (#C4BBAA, 10.18:1): Body copy.
- **Paper Ink Subtle** (#A69C8C, 7.15:1): Secondary information.
- **Paper Ink Tertiary** (#8A8175, 5.05:1): Dates, counts. The AA floor sits here.

### Neutral — day world
- **Day Canvas / Day Card** (#F2EDE3 / #FBF8F1): Ground and raised card on reading pages.
- **Ink** (#1A1713, 15.31:1), **Ink Muted** (#4A443B, 8.25:1), **Ink Subtle** (#6B6357, 5.07:1).

### Named Rules
**The Two Sources Rule.** There are exactly two accent hues and each has a job: the lamp signals action, the screen signals category. A third accent, or the lamp used for a category label, breaks the metaphor and the hierarchy at the same time.

**The No-Shadow Rule.** This system has no `box-shadow`. When an element comes forward it moves up one surface level and one hairline level. The only exception is `:focus-visible`.

## Typography

**Display:** Newsreader (Georgia fallback) — a warm serif that carries the society rather than the technology. Italic is the emphasis mechanism.
**Body:** Public Sans (system-ui fallback)
**Mono:** IBM Plex Mono — technical labels, dates, and figures only

**Character:** A warm serif over a plain, highly legible sans. Mono appears only where content is genuinely data — never to decorate something with a technical mood.

The 3D wordmark samples a font's pixels off a canvas to build its particle target. Newsreader's thin serif strokes sample poorly, so **the wordmark uses IBM Plex Mono at 600**. This is the one place where a type choice is a code dependency.

### Hierarchy
- **display-xl** (300, clamp 44–74px, lh 1.06, ls -0.02em): One per page. The homepage H1.
- **display-lg** (300, clamp 32–48px, lh 1.1): Section headings.
- **headline** (400, 28px): Sub-sections, article titles.
- **title** (400, 21px): Card and news headlines.
- **reading** (400, 18px, lh 1.8): Long-form article body on the day world. Measure 62–68ch.
- **body-lg** (400, 18px, lh 1.62): Lead paragraphs.
- **body** (400, 16px), **body-sm** (400, 15px): Default and secondary text.
- **button** (500, 15px): All buttons and action links.
- **meta** (mono 400, 13px): Dates, sources, issue numbers.
- **label** (mono 500, 12px, ls 0.08em, uppercase): Tags and status. **The floor of the scale.**

### Named Rules
**The Twelve Pixel Floor.** No functional text drops below 12px. Labels, dates, meta, footer — all included. Going smaller is not refinement; it is lost legibility, and it is the first thing to disappear on a high-DPI screen.

**The Inverse Tracking Rule.** Letter-spacing runs inversely to size: negative on large headings (-0.02em), zero in body copy, positive only on the 12px mono label and even there measured (0.08em). Putting 0.26em on 11px text breaks legibility twice over.

## Layout

A single centred container: **max 1180px**, with `clamp(20px, 5vw, 56px)` of side padding. Vertical rhythm between sections comes from `spacing.section` (96px); rhythm inside a section is picked from the 4px scale. No in-between values are invented.

There are three breakpoints: **760px** (single column, notebook rail hidden), **900px** (nav collapses to a disclosure panel, two-column blocks stack), **1180px** (container locks).

Touch targets are at least **44×44px** everywhere. `overflow-x: hidden` is not a fix but a patch; overflow is solved at its source.

## Elevation & Depth

No shadows. Depth is told with two ramps: surfaces lighten as they come forward (night → bench-1 → bench-2), and hairlines strengthen as boundaries become definite (.13 → .22 → .34 alpha). A card on hover gains a surface level, not a shadow.

The particle field is a third depth layer and never competes with content: the camera pushes the mass away from whichever column holds the text, and motion drops to its minimum in the most-read section.

### Named Rules
**The One Level Rule.** Ordinary hover moves one surface level. Moving two means a modal or an opened panel.

## Shapes

Six steps: **4 / 6 / 8 / 12 / 16 / pill**. Buttons and inputs use `md` (8px), cards `lg` (12px), large panels and modals `xl` (16px), tags `sm` (6px). `border-radius: 50%` is for actual circles only — status dots, the brand mark's inner square is a square on purpose.

## Components

### Buttons
- **Shape:** 8px radius, 0 22px padding, minimum height 48px.
- **Primary:** Lamp ground, dark text. **One per screen.**
- **Secondary:** bench-1 ground, hairline border, paper-ink text.
- **Hover:** Surface moves up one level, or the lamp shifts to lamp-hover. No `translateY`.
- **Focus:** 2px lamp ring at 3px offset. Required on every interactive element.

### Cards
- 12px radius, bench-1 ground, hairline border, 24px padding. Hover moves to bench-2 and hairline-strong.
- **No fixed heights.** Content flows to the real data limits: titles run to 200 characters, summaries to 800.

### Navigation
- Horizontal links on desktop; the active section carries a 2px lamp underline.
- **The menu is not hidden on mobile.** Below 900px it becomes a disclosure panel controlled by a labelled button with `aria-expanded`.
- The active section is read from real section position (`IntersectionObserver`), never from scroll ratio.

### Events list
Each row is a real `<button>`, so keyboard operation comes for free. Expansion animates `grid-template-rows` from `0fr` to `1fr` rather than `max-height`, so no magic pixel ceiling can clip long copy.

### News row
A row, not a card: date, category label, headline and summary align on one grid separated by a single hairline. In the archive, expanded full text grows beneath the same row.

## Do's and Don'ts

### Do:
- **Do** pick every spacing value from the 4px scale.
- **Do** tell depth with the surface and hairline ramps; move a level instead of adding a `box-shadow`.
- **Do** keep the lamp for action and the screen for category.
- **Do** give every interactive element a visible `:focus-visible` ring, and test it with a keyboard.
- **Do** switch to the day world for anything that is read at length.
- **Do** freeze the particle field under `prefers-reduced-motion`.

### Don't:
- **Don't** take functional text below 12px.
- **Don't** put wide letter-spacing on small text.
- **Don't** add `box-shadow`.
- **Don't** invent radius or spacing values outside the scale.
- **Don't** put a second primary button on a screen.
- **Don't** hide overflow with `overflow-x: hidden`.
- **Don't** show statistics that aren't populated — a counter reading zero looks broken; remove the field instead.
- **Don't** change the display font without updating `sampleWord()`; the wordmark is sampled from a real typeface.
