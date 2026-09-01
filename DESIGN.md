---
name: Atılım AI
description: "Design system extracted from the shipped implementation. Two worlds under one identity: the landing page is a warm near-black workbench (#100D0A) lit by two named sources — a lamp (#E8A33D) for action and a screen (#8FB4D6) for category. Reading surfaces switch to warm paper (#F2EDE3) on a narrower 840px measure, because full text runs to 20,000 characters. Newsreader carries display and long-form reading, Public Sans the interface, IBM Plex Mono the labels, which never drop below 12px. Depth comes from stepped surfaces and three hairline levels; the codebase contains zero box-shadows. A dependency-free WebGL field carries five scroll-driven models, confined by a scissor rectangle that cannot reach text."

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
  nav-join:
    backgroundColor: "{colors.tezgah}"
    textColor: "{colors.lamba}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "14px"
    height: "44px"
  meeting-line:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-s}"
    typography: "{typography.meta}"
    padding: "16px 0 0"
  feed-more:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-t}"
    typography: "{typography.meta}"
    padding: "22px 0"
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
  status-card:
    backgroundColor: "{colors.kart}"
    textColor: "{colors.murekkep-s}"
    typography: "{typography.meta}"
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
lit by two named sources. The **lamp** is where people are — actions and focus.
The **screen** is the cool light of a monitor left on: the colour of anything the page
files rather than asks for. On the bench sits one instrument: a particle field that draws
five models of how a model works, and changes shape as you scroll. It never shares space
with text — see **The Field** under Components.

Reading surfaces are the other world. The archive and article pages switch to warm paper on
a narrower measure, because an article's full text runs to 20,000 characters and long-form
reading does not belong on a dark ground. The dark top bar stays across the transition, so
leaving the room and opening the notebook reads as one motion rather than two sites.

The rejected reference is specific and was named before any code was written: the generic
AI-startup page — tracked-caps eyebrow chips over oversized headlines, purple-blue
gradients, glass panels on every surface, decorative stat counters. The five sections and
their content were never the problem and are unchanged; the craft was. The one structural
addition since is the field's: a lens region beside the reading column and four
text-free bands between the sections, both of which exist so the instrument has somewhere
to be that is not on top of a sentence.

**Key Characteristics:**
- Two worlds, one identity; the transition is deliberate and carried by the dark top bar
- Two named light sources instead of an abstract accent palette
- One instrument on the bench: a scroll-driven WebGL field that is confined by geometry,
  never by opacity
- Depth without shadows — the codebase contains zero `box-shadow` declarations
- One easing curve, `cubic-bezier(.16, 1, .3, 1)`, used everywhere
- Functional text never drops below 12px
- The standing meeting is stated in plain type at every breakpoint, not left to a rail

## Colors

### Primary
- **Lamba / Lamp** (#E8A33D, 8.98:1 on gece): The warm source. Focus ring, active nav
  underline, primary button, the mobile panel's join link. Never decorative — amber means
  there is something to do. It is not the brand mark: the wordmark carries the society's
  own logo (see Components).
- **Lamba-d / Lamp Deep** (#8A5510, 5.31:1 on gunduz): The same source on paper, darkened
  to stay legible. This is also the focus-ring colour in the day world.

### Secondary
- **Ekran / Screen** (#8FB4D6, 8.92:1 on gece): The cool source. Carries category labels
  only, so it never competes with the lamp.
- **Ekran-d / Screen Deep** (#3D6389, 5.38:1 on gunduz): The paper-world counterpart.

### Neutral — night world (`index.html`)
- **Gece** (#100D0A): Ground. Warm, not blue-black.
- **Tezgah / Tezgah-2** (#191512 / #211B16): Card at rest, card on hover.
- **Kagit** (#F0EADD, 16.16:1): Headings and primary text.
- **Kagit-m** (#C4BBAA, 10.18:1): Body copy.
- **Kagit-s** (#A69C8C, 7.15:1): Secondary information, nav links at rest, the standing
  meeting line.
- **Kagit-t** (#918879): Dates, tags, unverified figures, the least important text.
  **4.87:1 against tezgah-2**, the lightest surface it can land on — this token was raised
  from #8A8175 precisely because the old value passed against the page ground but failed on
  a hovered card.
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
`:focus-visible` ring. (A CSSOM reader will report one `box-shadow: unset` on
`.olcum button`; that is the expansion of `all: unset`, not a shadow.)

**The Hardest Surface Rule.** Contrast is measured against the lightest surface the text can
land on, not the page ground. `kagit-t` on `gece` is 5.54:1; on `tezgah-2` it is 4.87:1, and
that second number is the one that governs.

**The Unverified Figure Rule.** A number the society has not confirmed does not get the
lamp. `.olcum b.bekliyor` drops to `kagit-t` at 15px with 0.06em tracking, so a placeholder
reads as pending rather than as a headline figure.

## Typography

**Display and long-form:** Newsreader (Georgia fallback), weight 300 for display, 400 for
reading. Italic is the emphasis mechanism — the hero's second clause is italic and amber.
**Interface:** Public Sans (system-ui fallback).
**Labels and figures:** IBM Plex Mono.

### Hierarchy (as shipped)
- **display-xl** — `clamp(2.75rem, 6.4vw, 4.6rem)`, 300, lh 1.06, ls -0.02em. The `h1` on all
  three pages, one per page — including every `haber.html` error state, which renders a real
  heading rather than a bare paragraph.
- **display-lg** — `clamp(2rem, 4vw, 3rem)`, 300, lh 1.1. Section headings; `index.html` only.
- **headline** — 28px, 400. Issue headings and archive article titles.
- **title** — 21px, 400. Project cards, homepage news rows, event rows. Capped at 40ch.
- **reading** — 19px, 400, lh 1.8–1.85. Article body on the day world; measure capped at 66ch.
- **body-lg** — 18px. Lead paragraphs.
- **body** — 16px. Document default.
- **body-sm** — 15px. Buttons, card copy, nav links, footer.
- **meta** — mono 13px. Dates, sources, issue numbers, the standing meeting line, the
  "kalan N haber" line, and every day-world status message.
- **label** — mono 12px, 500, ls 0.08em, uppercase. Tags and status. **The floor.**

The rendered range runs 12px → 73.6px, a ratio of about 6:1. Automated hierarchy checks that
cannot resolve `clamp()` will report roughly 1.8:1 and flag it as flat; that reading is an
artefact of the tooling, not of the ramp.

**Every rendered size is now on the ramp.** `.ozet` on the archive was 16.5px — a single
use with no role behind it — and now takes `body` (16px / 1.65). The archive summary is
secondary to the 19px `reading` full text below it, so `body` rather than `body-lg` is the
correct step.

### Named Rules
**The Twelve Pixel Floor.** No functional text drops below 12px — labels, dates, meta and
footer included. The previous implementation went to 9.5px in 22 places, which is where this
rule comes from.

**The Inverse Tracking Rule.** Letter-spacing runs inversely to size: negative on display
(-0.02em), zero through body copy, positive only on the 12px mono label and even there
measured (0.08em).

**The Two Measures Rule.** A headline is set narrower than the summary underneath it, never
wider. On the homepage news row the title is capped at 40ch and the summary at 66ch. Both
carry `overflow-wrap: anywhere`, because panel copy can contain an unbroken 200-character
string and the page must not widen for it.

## Layout

**Two container widths, on purpose.** The landing page is `max-width: 1180px` with
`clamp(20px, 5vw, 56px)` of side padding. The reading pages are `max-width: 840px` with
`clamp(20px, 5vw, 40px)`. The narrower measure exists so long-form text lands near 66
characters per line; do not unify them.

**The lens region is added to the landing measure, never subtracted from it.** Above
1152px the landing `.wrap` grows to `min(1180px + var(--ray) + var(--ray-ara), 100%)` and
`main .wrap` takes `padding-right: clamp(20px,5vw,56px) + var(--ray) + var(--ray-ara) +
var(--daralt)`. The box widening moves the reading column left; `--daralt` narrows it
further, and the space that opens on its right is the lens region. Three measures govern
it:

| Token | Value | Job |
|---|---|---|
| `--ray` | `clamp(220px, 24vw, 420px)` | the base instrument rail |
| `--ray-ara` | `clamp(28px, 3.4vw, 56px)` | the gap between column and region |
| `--daralt` | `clamp(60px, 12vw, 220px)` | extra narrowing of the reading column |

The region is `--ray + --daralt`. When the viewport cannot fit the whole box, the reading
column gives way and the region holds its size — the instrument does not shrink to save
the text, because the text has its own floor in the side padding.

Vertical rhythm between sections is `--sp-sec` (96px); rhythm inside a section is picked from
the 8px-based scale (8/12/16/24/32/48). No in-between values appear in the shipped code.

**Three breakpoints:** 760px (single column; news rows and event rows stack), 900px (nav
collapses to a disclosure panel, two-column blocks stack) and 1152px (the lens region is
created; below it the field appears only between sections). Nothing that a visitor needs
may live only above a breakpoint — see The Standing Fact Rule. The field is not such a
thing: it carries no information a visitor needs, which is why it may vanish below 1152px.

Touch targets are at least 44px, and buttons 48px. There is no `overflow-x: hidden` anywhere;
overflow is solved at its source.

### Named Rules
**The Shorthand Rule.** Never set the `padding` shorthand on an element that also carries
`.wrap`, and never rely on a type selector to add padding to a `.wrap` element. Both
mistakes shipped: `.kapak{padding: … 0 …}` silently zeroed the reading pages' side gutters,
and `main{padding-bottom: …}` lost the specificity contest to `.wrap{padding: 0 …}` so the
bottom padding never applied at all. Use `padding-block`, or raise specificity to
`main.wrap`.

**The Standing Fact Rule.** A fact a visitor needs in order to turn up — the day, the room,
the "no prerequisite" — is stated in the flow of the page at every breakpoint, in type, not
in a decorative rail. The hero once carried these in a `.defter` margin rail that was
`display: none` below 760px; the rail is gone and the standing meeting line replaced it.

## Elevation & Depth

No shadows. Depth is told by two ramps: surfaces lighten as they come forward
(gece → tezgah → tezgah-2) and hairlines strengthen as boundaries become definite
(.13 → .22 → .34). A card on hover gains a surface level and a hairline level, not a shadow.

**The background layer is bounded, not dimmed.** The three.js field that used to sit behind
the whole landing page was removed along with its 120 KB dependency; it had two of its five
per-section camera offsets set to `0`, which put the particle mass directly across the
weekly digest and the project cards and dropped the event row's room label to 4.24:1 on a
phone. Its replacement solves the same problem the other way round: the field is drawn
inside a `gl.scissor` rectangle, and that rectangle is either the empty lens region beside
the reading column or the empty band between two sections. The driver cannot paint a pixel
outside it, so no contrast anywhere on the page depends on how bright the field is.

The field is one full-viewport `canvas` at `z-index: 0`. It is opaque and clears to `gece`,
so the additive blend (`ONE, ONE`) composites without a premultiply step.

**The Own-Layer Rule.** A positioned element with `z-index: 0` paints *above* normal-flow
text, so the flow has to be raised over the canvas — but only the parts of it that do not
already own a layer. The rule is `main, footer { position: relative; z-index: 1 }` and
nothing else. A blanket `nav, main, footer, .modal, .atla { position: relative; z-index: 1 }`
shipped once and silently overwrote three elements' own declarations: `nav` lost
`position: sticky` and dropped from `z-index: 40` to `1`, so the mobile disclosure panel
painted *under* the hero heading; `.modal` fell from `fixed / 60` to `relative / 1`; and
`.atla` fell from `absolute / 100`. None of it was visible on desktop. Never group an
element that carries its own `position` into a stacking fix.

**The field is outside the depth ramps.** It takes neither a surface level nor a hairline
and draws no border of its own — it is light, not a plane. That is why nothing in the depth
system needs a new step for it, and why the two ramps still describe every surface on the
page.

Motion in the shipped page is one entrance, two disclosures and one instrument: the scroll
reveal (0.8s), the events accordion and the archive card (0.45s `grid-template-rows`), and
the field's own morph and drift. `backdrop-filter` appears exactly once, on the stuck
navigation bar.

**Reduced motion removes movement, not feedback.** The `prefers-reduced-motion` block names
the spatial transitions it cancels — the scroll reveal, `.tl .detay`, `.tam` — and leaves
colour and opacity transitions alone, because those are how a control acknowledges being
used. The blanket `*{transition-duration:.01ms!important}` that used to sit there cancelled
both kinds without distinguishing them.

### Named Rules
**The One Level Rule.** Ordinary hover moves one surface level. Moving two means a modal or an
opened panel.

**The Reading Light Rule.** A background layer is separated from text by geometry, not by
opacity. Turning a layer down is a setting somebody can raise; a scissor rectangle is a
boundary the driver enforces. The shipped field never overlaps a text run at any width, so
every contrast pair on the page still measures its documented value.

*Audit test:* measure the distance between the right edge of the reading column and the
left edge of the lens, and confirm `document.documentElement.scrollWidth` equals
`innerWidth`. Shipped values:

| Viewport | Text ends | Lens starts | Gap | Overflow |
|---|---:|---:|---:|---:|
| 1152 px | 642 | 681 | 39 px | 0 |
| 1440 px | 817 | 866 | 49 px | 0 |
| 1680 px | 943 | 1021 | 78 px | 0 |
| 1970 px | 1061 | 1157 | 96 px | 0 |

Below 1152px there is no lens and the question does not arise. In the plate state the
rectangle sits inside a section-transition band that holds nothing at all, so there is no
text on screen to measure against.

*Second audit test, for the rectangle's own edge:* render each model in each state, read
the canvas back, and count lit pixels in the outermost 3px ring of the scissor rectangle.
Any count above zero means the fit is wrong and the model is being cut off. Shipped result:
**0 lit edge pixels across 220 checks** — five models × both states × nine cursor positions
each, at 1440, 1575, 1970 and 390px.

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
  No `translateY` on hover anywhere in the system; the only `translateY` in the codebase is
  the 20px scroll-reveal entrance.
- **Focus** — `2px` solid, 3px offset, `xs` radius, on every interactive element. The colour
  follows the world: `lamba` on the night ground, `lamba-d` on paper.

**The Reset Rule.** `all: unset` also resets `outline`, and it out-specifies the global
`:focus-visible` rule — `.olcum button` (0,1,1) beats `:focus-visible` (0,1,0). Any element
that resets itself must restate its own focus ring; `.olcum button:focus-visible` does. The
two placeholder stat buttons shipped without a visible ring until this was found by tabbing
to them, so verify with a keyboard, not by reading the global rule.

### Cards (night world)
tezgah ground, hair border, `lg` radius, 24px padding. Hover moves to tezgah-2 and hair-s.
**No fixed heights** — content flows to the real data ceilings (title 200 chars, summary 800).

### Navigation
Horizontal links at 15px with a 44px hit area; the active section carries a 2px lamba
underline. Below 900px it becomes a disclosure panel behind a labelled button with
`aria-expanded`. The active section is read from real section geometry via
`IntersectionObserver`, never from a scroll ratio — and the observer is bound to
`.baglar a[data-b]`, so a link that is not a section anchor can live in the panel without
joining the rotation.

**The join link (`.kat`)** is that exception: it sits at the foot of the disclosure panel
behind a hairline, in lamba, and is `display: none` above 900px. The desktop hero and the
footer already carry the route; a fifth link in the desktop bar would only compete with the
primary button.

### Brand mark
The society's own logo, monogram only: the A-and-i figure lifted out of the full lockup,
in `kagit` white on a transparent ground, 20px, sitting `--sp-sm` to the left of the
`ATILIM AI` wordmark on all three pages (`images/ai_mark.png`). The full lockup — circle,
monogram and the words "ATILIM YAPAY ZEKA" — is unreadable below roughly 40px and repeats
what the wordmark already says, so the interface takes the monogram alone. The tab icon
(`favicon.png`) is the same monogram in white on a `gece` disc at 72% of the disc's width,
because a transparent mark disappears against light browser chrome.

Both files are derived, and the source they are derived from is in the repository:
`images/ai_s.png`, the society's original full lockup at 1796x1796. Keep it — regenerating
the monogram or the tab icon without it means redrawing them.

### Standing meeting line
Mono 13px `kagit-s`, hairline above, capped at 52ch, sitting directly under the hero's
button row at every breakpoint. The day leads in `kagit`; the room and the "no prerequisite"
follow in `kagit-s`, separated by `·`. The footer repeats it in prose so the page closes on
the invitation rather than on a card.

### Events list
Each row is a real `<button>` inside its `<li>`, so keyboard operation needs no extra code.
Expansion animates `grid-template-rows` from `0fr` to `1fr` over 0.45s — not `max-height` —
so no pixel ceiling can clip long copy.

### News row
A grid, not a card. Homepage: `88px 108px 1fr` (date, category, body). Archive: `64px 1fr`
with the date stacked. Both separated by a single hairline; the archive's expanded full text
grows inside the same row.

**The feed has an empty state, and it is not the static markup.** `#feedList` ships three
example rows for design purposes; when the fetch succeeds and returns no issue, the script
replaces them with *"Henüz yayımlanmış bir sayı yok."* in `.feed-kalan` and clears the issue
label. A network failure is treated differently and leaves the page as-is, because an
unreachable file is not evidence that nothing was published. Without this branch the page
would present example rows as the society's weekly digest.

**The homepage feed shows three items.** `GOSTER = 3` caps what the newest issue may put on
the landing page; the remainder is stated, not silently dropped, by a `.feed-kalan` line in
mono 13px `kagit-t` that takes the same 22px row rhythm and hairline. At the panel's legal
ceiling of 25 items this is the difference between a 6,929px and a 9,955px page on a phone.

### The field

The landing page's one instrument. **Raw WebGL, inside the page: no dependency, no build
step, no CDN script.** The context is `webgl2` falling back to `webgl`; the shaders are
GLSL ES 1.00, which both accept. 18,000 points on desktop, 7,500 below 760px, one
`drawArrays`, device pixel ratio capped at 1.75.

**Five models, five vertex attributes.** Each point carries its position in all five
targets (`a0`–`a4`) plus a size and a seed — seven attributes, inside WebGL1's guaranteed
eight. The vertex shader mixes the targets by five weights, so a morph costs nothing but
five uniforms. The sequence traces one machine: **monogram → sinir ağı → dikkat matrisi →
belirteç akışı → gradyan inişi**. Five different geometric families on purpose; two models
from the same family would read as a repeat.

Every model is centred on its own bounding box at build time and scaled to the current
rectangle, so it is filled the same way whatever that rectangle's aspect. **The extent that
scaling reads is measured in projected space, not model space, and swept across the yaw
range.** The perspective divide is `2.05 / (z + 3.30)`, which is not a constant: the
gradient-descent surface is a tilted plane with a z spread of ±1.19, so its nearest points
project at 0.97 where the nominal factor is 0.62 — 1.57× larger. A fit computed in model
space cannot see that, and those points overflow the scissor and are cut off at a hard
edge. Yaw compounds it, because rotating about Y trades x for z and changes the projected
width of a deep model. The build therefore projects every point at five yaw angles between
±0.30 rad and keeps the largest result. Colour is `ekran` for
everything and `lamba` only where a left-to-right sweep passes — the Two Sources Rule
holds: the screen names the category, the lamp marks what is live.

**Two states.**

| | Mercek (reading) | Levha (between sections) |
|---|---|---|
| Where | centred in the lens region | centred in the viewport |
| Size | region width, capped 560px; height ×1.18, capped 74vh | capped 800 × 500 px |
| Gain | 0.58 | 1.00 |
| Edge | none drawn | none drawn |

**The rectangle is never outlined.** The field carries no border in either state: it is
light on a dark bench, and a lamp does not come in a frame. Its boundary is read from the
margin of empty ground around it, which is why both states keep hard size caps — the plate
at 800 × 500 px is 56% × 53% of a 1440 × 900 viewport, with ground left on every side. A
field that takes the whole viewport is the failure mode this system was built to avoid, and
with no outline to contain it the size cap is the only thing holding that line. Do not
raise it.

**The section-transition band** (`.gecis`) is `min(70vh, 580px)`, `min(72vh, 540px)` below
760px — the phone value is not a shrunk desktop value; it is the scroll distance the morph
needs, and 470px was too short for it, and is completely empty — no caption, no content of any kind. Naming the model in
type explained a picture that does not need explaining and put a text run inside the one
region built to have none. The morph completes
in the **first 46%** of the band, so by the time the rectangle has finished opening the model is
pure — the largest state never shows a half-way blend of two shapes.

**Point size** is `aBoy · (2.05/z) · uSig · uNokta`, where
`uNokta = h · 0.0026 · √(1100 / h)` and `h` is the rectangle's height in device pixels.
The square root matters: a linear scale thins the points in the small state until the lines
disappear — measured at 1.25 CSS pixels in the lens — while this one lands every frame near
2.9 device pixels.

**Scroll values are smoothed in time, not read raw.** Both the morph position and the
opening amount approach their scroll-derived target with a time constant (0.17s and 0.13s),
frame-rate independent via `1 - exp(-dt/τ)`. Reading scroll directly is fine on a desktop
trackpad and wrong on a phone: touch scrolling arrives in coarse, inertial steps, and the
band is shorter there, so the morph snapped instead of moving. Under reduced motion the
smoothing is bypassed and values snap, because there is one static frame to draw.

**Interaction.** With a fine pointer inside the rectangle *and* moved within the last 1.5s,
particles part around the cursor (0.115 in NDC, Gaussian falloff) and gain rises 32%. The
model shrinks by exactly the push amount, so nothing is displaced past the scissor edge and
clipped. The parting *is* the affordance — with no outline to light up, the field's answer
has to be the field itself. Outside the rectangle nothing happens, and a parked cursor stops
mattering after 1.5s: the field answers intent, not position. Coarse pointers get none of
it.

**Fallbacks.** No WebGL context: `body.no-alan` hides the canvas, collapses the bands to
`--sp-sec`, and the page is exactly what it was before the field existed.
`prefers-reduced-motion`: one static frame, no loop, bands collapsed to `--sp-sec`.
Hidden tab: the loop returns early.

### Day-world controls and status
Buttons drop to 44px and 16px padding on paper, and use `cizgi-s` borders on a transparent
ground so they sit quietly inside a reading column.

### Images from the panel

`aspect-ratio: 16/9` with `object-fit: cover` on both reading pages. The ratio is declared,
not inherited from the file, because `max-height` alone leaves the box at zero height until
the image loads and then pushes every paragraph below it down. The border is applied only
after `load` (`.yuklendi`), so a slow or hanging address shows reserved space rather than an
empty framed box, and `onerror` removes the element outright rather than leaving a broken
icon. Measured layout shift on both pages is **0**.

Alt text is still empty — the data contract has no field for it. That is the one known
accessibility gap the code cannot close (see PRODUCT.md).

**Status and error messages** use `.durum` — mono 13px `murekkep-s` in a `kart` card with a
`cizgi` border and `lg` radius. Every state on `haber.html` (address missing, address
malformed, article not found, no full text, load failed) renders this card *under a real
`display-xl` heading* and sets `document.title` to match. An error page here is a page, not
a stranded sentence.

**Name collision, on purpose in neither world:** `.durum` means the project status pill on
`index.html` (mono 12px with a 7px dot, `canli` when live) and the status card on the
reading pages. They never meet in one document, but do not assume one rule serves both.

## Do's and Don'ts

### Documented exceptions

Three values sit outside the palette deliberately. All are recorded so a reviewer does not
"fix" them:

- **GitHub language colours** (`#DA5B0B` and the rest of the `RENK` map in `index.html`) are
  external semantic data, not design tokens. They identify a language the way a flag
  identifies a country; recolouring them would make them wrong.
- **The day world's cream ground** (#F2EDE3) is flagged by generic anti-pattern detectors as
  a saturated trope. It is a reasoned choice: article text runs to 20,000 characters. Keep it.
- **`box-shadow: unset` on `.olcum button`** is not a shadow; it is what `all: unset`
  expands to in the CSSOM. The No-Shadow Rule is intact.

### Do:
- **Do** take every spacing value from the 8px scale and every radius from the five steps.
- **Do** tell depth by moving a surface level, never by adding a shadow.
- **Do** keep the lamp for action and the screen for category.
- **Do** measure contrast against the lightest surface the text can land on — and count any
  background layer you add as one of those surfaces.
- **Do** give every interactive element a visible focus ring and test it with a keyboard.
- **Do** switch to the day world for anything read at length.
- **Do** confine any background layer with a scissor rectangle placed where text is not,
  and prove it with the gap measurement in The Reading Light Rule.
- **Do** let the field vanish below 1152px, on a coarse pointer, and under reduced motion —
  it carries nothing a visitor needs.
- **Do** cap any list fed by the panel, and say how many items are not shown.
- **Do** give every error state a real `<h1>` and a matching `document.title`.

### Don't:
- **Don't** take functional text below 12px.
- **Don't** add `box-shadow`.
- **Don't** unify the two container widths.
- **Don't** invent a radius, spacing step, or accent outside this document.
- **Don't** put a second primary button on a screen.
- **Don't** use `max-height` for disclosure animation; use `grid-template-rows`.
- **Don't** use the `padding` shorthand on a `.wrap` element, or add padding to one from a
  type selector.
- **Don't** leave a fact a visitor needs anywhere a breakpoint can remove.
- **Don't** render a data-driven list without a cap and without `overflow-wrap`.
- **Don't** raise the field's size caps or give it a border. Both states are unoutlined, so
  the cap is the only thing keeping the plate from reading as a full-screen takeover.
- **Don't** let the field take space from the reading column — the lens region is added to
  the landing measure, never subtracted from it.
- **Don't** make the field react to a pointer that is outside its rectangle or has stopped
  moving; that is the behaviour the removed three.js field was rejected for.
- **Don't** scale point size linearly with the rectangle — the small state loses its lines.
- **Don't** compute the field's fit from model-space extents. Project first, sweep the yaw
  range, and re-run the edge-ring audit; a deep model will be cut off otherwise.
- **Don't** put a caption, a label, or any other text inside a `.gecis` band.
- **Don't** add a sixth model from a family already in the sequence.
- **Don't** fill an unverified statistic — the counters are visibly marked placeholders by
  team decision, and `PRODUCT.md` records that they must not be invented.
