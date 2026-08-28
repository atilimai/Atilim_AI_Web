---
name: Atılım AI
description: "Institutional site for the AI society at Atılım University. A deep navy-black canvas (#070A14) with a single warm accent (#F5913C), stepped surface and hairline ramps, and depth carried without shadows. A live particle field morphs behind the page as you scroll; the system stays quiet around it. Display type is Space Grotesk 500 with tight negative tracking, body is Instrument Sans, and technical labels sit in JetBrains Mono and never drop below 12px."

colors:
  accent: "#F5913C"
  accent-hover: "#FFA65C"
  on-accent: "#1A0E03"
  ink: "#E9EDF8"
  ink-muted: "#B9C2DE"
  ink-subtle: "#8792AE"
  ink-tertiary: "#7B85A2"
  canvas: "#070A14"
  surface-1: "#0C1020"
  surface-2: "#10152A"
  surface-3: "#151B33"
  hairline: "#1C2440"
  hairline-strong: "#2A3455"
  hairline-tertiary: "#3A4668"
  field-cool: "#3D6BFF"
  field-cool-soft: "#8DA4FF"
  semantic-live: "#3BA55D"

typography:
  display-xl:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  body-sm:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  button:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
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
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-raised:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  news-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: "20px 0"
  tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
---

# Design System: Atılım AI

## Overview

**Creative North Star: "Institutional discipline, live laboratory"**

This is a student society's institutional site, not a product landing page. Most visitors are students deciding whether to show up. The page's job is not to convert them — it is to show the society is a serious place, and to keep the door open.

The system's tension comes from that: the discipline of an institution against the aliveness of a lab. Discipline lives in the measurements — one type ramp, one spacing scale, one radius scale, one chromatic accent. Aliveness lives in the particle field behind the page, which morphs as you scroll and is a real, running thing. The system stays **quiet around it**. Because the field already moves, the interface does not need to.

What is rejected is specific: the generic AI-startup page. The tracked-caps eyebrow chip above an oversized headline, the purple-blue gradient, glass panels on every surface, decorative stat counters. These were never structural problems — they were craft problems.

**Key Characteristics:**
- Depth without shadows: a stepped surface ramp plus three hairline levels
- A single warm accent against the cool particle field — never used decoratively
- Functional text never drops below 12px
- Motion belongs to the background; text and controls hold still

## Colors

The canvas is deep and navy-leaning; the particle field's cool blue already comes from there. The single chromatic accent is deliberately warm so it stays distinguishable against that field.

### Primary
- **Warm Accent** (#F5913C): Brand mark, focus ring, active section indicator, and **one** primary action per screen. 8.47:1 on canvas. Never decorative — if you see orange, there is something to do there.

### Neutral
- **Canvas** (#070A14): Page ground. The particle field lives on top of it.
- **Surface 1–3** (#0C1020 / #10152A / #151B33): Cards, expanded panels, overlapping layers. Depth is told with this ramp, not with shadows.
- **Ink** (#E9EDF8, 16.88:1): Headings and primary text.
- **Ink Muted** (#B9C2DE, 11.14:1): Body copy and long-form reading.
- **Ink Subtle** (#8792AE, 6.36:1): Secondary information, meta rows.
- **Ink Tertiary** (#7B85A2, 4.90:1): Dates, counts, the least important text. The AA floor sits here — there is no dimmer grey.
- **Hairline 1–3** (#1C2440 / #2A3455 / #3A4668): Dividers, card borders, field outlines.

### Named Rules
**The One Voice Rule.** The warm accent covers less than 5% of any screen and only ever signals an action or a state. Painting a card border, a heading, or an icon orange "to liven it up" breaks this rule.

**The No-Shadow Rule.** This system has no `box-shadow`. When an element needs to come forward it moves up one surface level and one hairline level. The only exception is `:focus-visible`.

## Typography

**Display:** Space Grotesk (with a system-ui fallback) — load-bearing, because the 3D wordmark samples this font's pixels off a canvas. Changing it means changing the logo.
**Body:** Instrument Sans (with a system-ui fallback)
**Mono:** JetBrains Mono — technical labels, dates, and numeric meta only

**Character:** Geometric headings with tight negative tracking, over an unassuming and highly legible body face. Mono appears only where the content is genuinely data — never to decorate something with a technical mood.

### Hierarchy
- **display-xl** (500, clamp 44–72px, lh 1.02, ls -0.035em): One per page. The homepage H1.
- **display-lg** (500, clamp 32–48px, lh 1.08, ls -0.03em): Section headings.
- **headline** (500, 28px, lh 1.2): Sub-sections and modal titles.
- **title** (500, 20px, lh 1.3): Card and news headlines.
- **body-lg** (400, 18px, lh 1.6): Lead paragraphs. Measure 60–70ch.
- **body** (400, 16px, lh 1.65): Default text.
- **body-sm** (400, 14px, lh 1.55): In-card description, secondary text.
- **button** (500, 15px): All buttons and action links.
- **meta** (mono 400, 13px, ls 0.02em): Dates, sources, issue numbers.
- **label** (mono 500, 12px, ls 0.08em, uppercase): Tags and status indicators. **The floor of the scale.**

### Named Rules
**The Twelve Pixel Floor.** No functional text drops below 12px. Labels, dates, meta, footer — all included. Going smaller is not refinement; it is lost legibility, and it is the first thing to disappear on a high-DPI screen.

**The Inverse Tracking Rule.** Letter-spacing runs inversely to size: negative on large headings (-0.035em), zero in body copy, positive only on the 12px mono label and even there measured (0.08em). Putting 0.26em on 11px text breaks legibility twice over.

## Layout

A single centred container: **max 1180px**, with `clamp(1.25rem, 5vw, 3.5rem)` of side padding. Vertical rhythm between sections comes from `spacing.section` (96px); rhythm inside a section is picked from the 4px scale (4/8/12/16/24/32/48). No in-between values are invented.

There are three breakpoints: **640px** (collapse to one column), **900px** (two-column blocks collapse), **1180px** (container locks). The five scattered breakpoints in the current implementation reduce to these three.

Touch targets are at least **44×44px** everywhere. `overflow-x: hidden` is not a fix but a patch that hides overflow; overflow is solved at its source.

## Elevation & Depth

This system does not use shadows. Depth is told with two ramps: surfaces lighten as they come forward (canvas → surface-1 → surface-2 → surface-3), and hairlines strengthen as boundaries become more definite. A card on hover gains a surface level, not a shadow.

The particle field behind everything is a third depth layer and never competes with content: the camera pushes the mass away from whichever column holds the text, and motion drops to its minimum in the most-read section.

### Named Rules
**The One Level Rule.** A surface may move up one surface level and one hairline level at once; moving two levels means it is a modal or an opened panel. Ordinary hover moves one level.

## Shapes

The radius scale has six steps: **4 / 6 / 8 / 12 / 16 / pill**. Buttons and inputs use `md` (8px), cards `lg` (12px), large panels and modals `xl` (16px), tags `sm` (6px), and `pill` only for indicators that genuinely need a pill shape.

The eleven arbitrary values currently in use (1, 2, 4, 5, 6, 8, 12, 14, 16px, 50%, 999px) reduce to these six. `border-radius: 50%` is for actual circles only — status dots, avatars.

## Components

### Buttons
- **Shape:** Soft corner (8px), 12px 20px padding, minimum height 44px.
- **Primary:** Warm accent ground, dark text. **One per screen.**
- **Secondary:** surface-1 ground, hairline-strong border, ink text.
- **Hover:** The surface moves up one level, or the accent shifts to `accent-hover`. No `translateY`.
- **Focus:** 2px accent ring at 3px offset. Required on every interactive element.

### Cards
- **Shape:** 12px radius, surface-1 ground, hairline border, 24px padding.
- **Hover:** Moves to surface-2 and hairline-strong.
- **No fixed heights.** Content flows to the real data limits: titles run to 200 characters, summaries to 800.

### Navigation
- Horizontal links on desktop, body-sm; the active section is marked with a 2px warm-accent underline.
- **The menu is not hidden on mobile.** Below 900px it becomes a disclosure panel — it does not disappear as it does today.
- The active section is read from real section position (`IntersectionObserver`), not from scroll ratio.

### News row
A row, not a card: date, tag, headline, and summary align on one grid separated by a single hairline. In the archive, expanded full text grows beneath the same row.

## Do's and Don'ts

### Do:
- **Do** pick every spacing value from the 4px scale (4/8/12/16/24/32/48/96).
- **Do** tell depth with the surface and hairline ramps; move a level instead of adding a `box-shadow`.
- **Do** reserve the warm accent for action, focus, and brand.
- **Do** give every interactive element a visible `:focus-visible` ring, and test it with a keyboard.
- **Do** freeze the particle field under `prefers-reduced-motion` — this behaviour is already correctly built and must be preserved.

### Don't:
- **Don't** take functional text below 12px.
- **Don't** put wide letter-spacing on 11px text.
- **Don't** add `box-shadow`.
- **Don't** invent radius or spacing values outside the scale.
- **Don't** put a second primary button on a screen.
- **Don't** hide overflow with `overflow-x: hidden`.
- **Don't** show decorative counters, decorative pulse animations, or statistics that aren't populated — a counter reading zero looks broken; remove the field instead.
