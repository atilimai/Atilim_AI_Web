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
    backgroundColor: "{colors.gece}"
    textColor: "{colors.lamba}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "10px 14px 10px 18px"
    height: "44px"
  nav-join-panel:
    backgroundColor: "{colors.tezgah}"
    textColor: "{colors.lamba}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "14px"
    height: "44px"
  feed-error:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-m}"
    typography: "{typography.meta}"
    padding: "22px 0"
  feed-error-retry:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.lamba}"
    typography: "{typography.meta}"
    height: "44px"
  feed-more:
    backgroundColor: "{colors.gece}"
    textColor: "{colors.kagit-t}"
    typography: "{typography.meta}"
    padding: "22px 0"
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
leaving the room and opening the notebook reads as one motion rather than two sites. Until
2026-10-11 it did not actually stay: on the reading pages it sat inside the 840px reading
measure at 60px tall, so at 1440px the wordmark jumped from x=56 to x=338 and the bar lost 4px
the moment you followed a link. It now takes the landing page's chrome measure on every page
(see Navigation); the reading measure belongs to the content, not to the chrome.

`404.html` is the fourth page and belongs to the night world: same ground, same tokens, the
same `display-xl` `h1` with an italic amber clause, and the two doors as `btn.p` / `btn.s`. It
is the newest file and the one that drifted furthest — it shipped without `--ease` and
`--r-xs`, and it reintroduced the blanket `*{transition:none!important}` that this document
had already named and removed. All three are closed. It also carried an amber, tracked
"404" label above its `h1` — the eyebrow this document bans — and a mono footer that went
amber on hover; both were removed on 2026-10-11 (the code now sits in the address line, and
the footer is the landing page's). **A new page joins the system by taking its tokens, not by
re-deriving them.**

The rejected reference is specific and was named before any code was written: the generic
AI-startup page — tracked-caps eyebrow chips over oversized headlines, purple-blue
gradients, glass panels on every surface, decorative stat counters. The five sections and
their content were never the problem and are unchanged; the craft was.

**One item on that rejected list had quietly survived, and no longer does.** Four
`.kicker` labels — mono 12px, 500, `.08em`, uppercase, in `--lamba` — sat above four `h2`s
until 2026-09-10. That is the tracked-caps eyebrow chip by its own definition, and putting
a category label in the action colour broke the Two Sources Rule in the same stroke. They
are deleted; the headings carry their own weight and the section names already live in the
navigation. **Do not reintroduce a section eyebrow in any colour.** The one structural
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
- **Kagit-s** (#A69C8C, 7.15:1): Secondary information, nav links at rest, footer text.
- **Kagit-t** (#918879): Dates, tags, unverified figures, the least important text.
  **4.87:1 against tezgah-2**, the lightest surface it can land on — this token was raised
  from #8A8175 precisely because the old value passed against the page ground but failed on
  a hovered card.
- **Hairlines** (`--hair` .13 / `--hair-s` .22 / `--hair-t` .34, all `rgba(240,234,221,α)`).
- **Lamp underline** (`--lamba-alt`, `rgba(232,163,61,.4)`): the lamp at 40%, and the only
  place the lamp is a line rather than a fill. Three consumers, all amber text links that are
  not buttons: "Devamını oku", "Bütün sayılar", and the feed's retry. It was three
  hand-expanded `rgba()` literals until 2026-09-10; nothing about the palette changed when it
  became a token, and nothing should change now that it is one.

### Neutral — day world (`haberler.html`, `haber.html`)
- **Gunduz / Kart** (#F2EDE3 / #FBF8F1): Ground and raised card.
- **Murekkep** (#1A1713, 15.31:1), **Murekkep-m** (#4A443B, 8.25:1),
  **Murekkep-s** (#6B6357, 5.07:1).
- **Hairlines** (`--cizgi` .14 / `--cizgi-s` .24, `rgba(26,23,19,α)`).
- **Lamp underline** (`--lamba-alt`, `rgba(138,85,16,.4)`): the same token *name* as the night
  world, carrying the day lamp's value. This is the one token in the system whose name is
  shared across the two worlds while its value is world-local — the rule that consumes it is
  identical in both, so splitting the name would say a difference that isn't there. Its one
  consumer is the archive's permalink line. Solid colours live in the frontmatter; alpha lines
  like this and the hairlines are named here.

### Semantic
- **Canli** (#7FB069, 7.67:1): Project status only. A state colour, not an accent. **No
  consumer on the page since 2026-10-05**: its one user was the "Bülten" card's *Yayında*
  status, and that card was replaced by a completed project. `.durum.canli` stays in the
  stylesheet for the next live project; do not repaint something else green to use it.

### Named Rules
**The Two Sources Rule.** There are exactly two accent hues and each has one job: the lamp
signals action, the screen signals category. A third accent, or the lamp used for a category
label, breaks the metaphor and the hierarchy in the same stroke. This rule was being broken
by the four section kickers until 2026-09-10 — see Overview.

**A standing note on `ekran`.** Its only consumer on `index.html` is `.etiket`, the news
row's category label. While the digest was empty the screen colour rendered nowhere on the
landing page outside the particle field; since issue 1 published on 2026-09-23 it labels
each news row again. If the archive is ever empty, do not "fix" the missing blue by finding
something else to paint: the rule is one job per source, and the screen's job is the
category label.

**The No-Shadow Rule.** There is no `box-shadow` in this codebase. When an element comes
forward it moves up one surface level and one hairline level. The only exception is the
`:focus-visible` ring. (A CSSOM reader will report one `box-shadow: unset` on
`.feed-hata button`, which exists only while the feed is in its failed state; that is the
expansion of `all: unset`, not a shadow.)

**The Hardest Surface Rule.** Contrast is measured against the lightest surface the text can
land on, not the page ground. `kagit-t` on `gece` is 5.54:1; on `tezgah-2` it is 4.87:1, and
that second number is the one that governs.

**The Unverified Figure Rule.** A number the society has not confirmed does not get the
lamp. From 2026-09-10 to 2026-09-28 the three `.olcum` figures were `[ADET]` placeholders in
`kagit-t` at 15px with 0.06em tracking, so they read as pending rather than as headline
figures. The team supplied real values on 2026-09-28 and the placeholder styling was removed
with them. An unconfirmed figure that returns comes back in that form, never as a guess.
Confirmed figures are mono 16px, weight 500, in lamp, at the row's own text scale. The first
version shipped them at 28px, which turned three rows under two paragraphs into a
big-number strip heavier than the section heading; at 16px the rows keep the 58px rhythm
they had with placeholders.

## Typography

**Display and long-form:** Newsreader (Georgia fallback), weight 300 for display, 400 for
reading. Italic is the emphasis mechanism — the hero's second clause is italic and amber.
**Interface:** Public Sans (system-ui fallback).
**Labels and figures:** IBM Plex Mono.

**The faces are served from `fonts/`, not from Google Fonts** (since 2026-10-11; provenance in
`fonts/README.md`). Google split every face into a `latin` and a `latin-ext` file, and Turkish
needs both — `ı ş ğ İ` live in Latin Extended-A — so every page paid for two files per face
behind a three-step render-blocking chain (HTML → googleapis CSS → gstatic), and every visit
sent the visitor's IP to Google. The repository now carries one file per face with Latin,
Latin-1, Latin Extended-A and typographic punctuation, its variable axes narrowed to the range
the pages use (Newsreader `wght` 300–400 with full `opsz`; the italic `opsz` 36–72 at 300;
Public Sans `wght` 400–500). Measured: **~430 KB → 215 KB on the landing page**, ~160 KB on
the reading pages, where the italic is never drawn and never downloaded. The landing page
preloads both Newsreader files because its `h1` (the LCP element) needs them; the reading
pages preload the roman. `haberler.html` gives every `src` a second, absolute Pages address:
the panel's preview renders that page in a sandboxed iframe on its own origin, where the
relative path resolves to the panel and fails; Pages answers with
`access-control-allow-origin: *`, so the fallback loads from an opaque origin. A glyph outside
the set falls back for that glyph only. **The arrows were never in the set** — `→ ↗ ←` are
not in Public Sans or Newsreader at all, which is why they are icons now (see Components →
Icons).

### Hierarchy (as shipped)
- **display-xl** — `clamp(2.75rem, 6.4vw, 4.6rem)`, 300, lh 1.06, ls -0.02em. The `h1` on all
  four pages, one per page — including every `haber.html` error state and `404.html`, both of
  which render a real heading rather than a bare paragraph.
- **display-lg** — `clamp(2rem, 4vw, 3rem)`, 300, lh 1.1. Section headings on `index.html`, and
  the step a long article title drops to on `haber.html` (`h1.uzun`) — see The Panel Ceiling
  Rule below. It is no longer landing-page-only.
- **headline** — 28px, 400. Issue headings and archive article titles.
- **title** — 21px, 400. Project cards, homepage news rows, event rows. Capped at 40ch.
- **reading** — 19px, 400, lh 1.8–1.85. Article body on the day world; measure capped at 66ch.
- **body-lg** — 18px. Lead paragraphs.
- **body** — 16px. Document default.
- **body-sm** — 15px. Buttons, card copy, nav links, footer.
- **meta** — mono 13px. Dates, sources, issue numbers, the "kalan N haber" line, the
  empty-events footnote, and every day-world status message.
- **label** — mono 12px, 500, ls 0.08em, uppercase. Status and authored tags. **The floor.**
  Panel-fed category labels (`.etiket`) take the same size and weight **without** the
  uppercase transform and at `.02em`, the tracking the event row's mixed-case mono already
  used. Under `lang="tr"`, `text-transform: uppercase` maps `i` to `İ`: right for "Politika",
  wrong for "Vision" (rendered "VİSİON"), and the page cannot know which language a category
  is in. Authored Turkish labels ("Tamamlandı") keep the transform; text from the panel is
  printed as written.

The rendered range runs 12px → 73.6px, a ratio of about 6:1. Automated hierarchy checks
that cannot resolve `clamp()` see only the literal `px` declarations, and for a long time
that made them report roughly 1.8:1 and flag the ramp as flat. For a while the literal set
on `index.html` reached 28px — the footer's closing invitation — and the warning stopped
firing there. That block was removed on 2026-10-01, so `detect.mjs` once again reported
`flat-type-hierarchy` on `index.html` (12 → 21px literals, 1.8:1), as it did on the other
three pages. The 4.5.2 detector no longer raises it on any page (checked 2026-10-11). If a
later version does again: **the reading is an artefact of the tooling, not of the ramp.** Do not add a
28px literal to silence it.

**Every rendered size is now on the ramp.** `.ozet` on the archive was 16.5px — a single
use with no role behind it — and now takes `body` (16px / 1.65). The archive summary is
secondary to the 19px `reading` full text below it, so `body` rather than `body-lg` is the
correct step.

### Named Rules
**The Twelve Pixel Floor.** No functional text drops below 12px — labels, dates, meta and
footer included. The previous implementation went to 9.5px in 22 places, which is where this
rule comes from.

**The Panel Ceiling Rule.** A heading fed by the panel does not get the display step sized for
a hero line. `display-xl` at the contract's 200-character title ceiling measured **773px — ten
lines — on `haber.html` at 1440×900**, putting the article's first paragraph 1.6 viewports down
(2.0 on a phone). Titles over 70 characters take `h1.uzun` and drop one step to `display-lg`:
the same ceiling then measures **370px**, and the article starts at 1.1 viewports. The threshold
was chosen by measurement, not by feel — at 70 characters `display-xl` still fits four lines
(309px, 34% of the viewport), and the step down keeps the whole range under 35%. The count is
characters, not rendered height, so the decision is deterministic and needs no resize listener.

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
`main .wrap, footer .wrap` take `padding-right: clamp(20px,5vw,56px) + var(--ray) +
var(--ray-ara) + var(--daralt)`. The box widening moves the reading column left, and the
space that opens on its right is the lens region. Three measures govern it:

| Token | Value | Job |
|---|---|---|
| `--ray` | `clamp(220px, 24vw, 420px)` | the base instrument rail |
| `--ray-ara` | `clamp(28px, 3.4vw, 56px)` | the gap between column and region |
| `--daralt` | `clamp(0px, (100vw - 1400px) × .42, 160px)` | extra region width, only where there is room |

The region is `--ray + --daralt`, and `#ray` — an invisible fixed placeholder that carries
nothing but that measure — is what the field reads each frame.

**`--daralt` is zero up to 1400px, and that is the correction of a real defect.** It used
to be `clamp(60px, 12vw, 220px)`, which took a share of the column at *every* width above
1152px. Measured consequence on the About section's body column, which the `.iki` grid
splits again:

| Viewport | Old column | Old measure | Now | Now |
|---|---:|---:|---:|---:|
| 1152 px | 277 px | ~30 chars | **370 px** | **~40 chars** |
| 1280 px | 314 px | ~34 chars | **419 px** | **~45 chars** |
| 1366 px | 340 px | ~37 chars | **452 px** | **~49 chars** |
| 1440 px | 364 px | ~39 chars | **473 px** | **~51 chars** |
| 1920 px | 411 px | ~44 chars | **468 px** | **~50 chars** |

1280 and 1366 are the two most common laptop widths, and the old value put the page's most
trust-building copy at 34–37 characters per line. `.iki` also moved from `1fr 1.15fr` to
`1fr 1.3fr` in the same pass. The instrument pays for it — the lens is 362px at 1440px
where it used to be 518px — and that is the correct trade: the reader has a floor, the
instrument has a cap.

**The gap between text and lens is `--ray-ara` and nothing else.** It does not depend on
`--daralt`: the region's left edge is `wrap.right − temel − rayWidth` and the text's right
edge is `wrap.right − paddingRight`, so the difference cancels every term except
`--ray-ara`. Measured, before and after the `--daralt` change, identical at every width:

| Viewport | 1152 | 1280 | 1366 | 1440 | 1680 | 1920 |
|---|---:|---:|---:|---:|---:|---:|
| Gap | 39 px | 44 px | 46 px | 49 px | 56 px | 56 px |

An earlier revision of this file claimed 78px at 1680 and 96px at 1920. Those numbers were
wrong — `--ray-ara` caps at 56px, so no width can produce them, and re-measuring the *old*
CSS returns 56px too. Do not restore them.

Vertical rhythm between sections is `--sp-sec` (96px); rhythm inside a section is picked from
the 8px-based scale (8/12/16/24/32/48). This file used to say no in-between values appeared
in the shipped code; the 2026-10-11 audit counted 21 uses of `20px` and a dozen of `14px`,
`10px`, `6px` and `11px` between elements, plus three inline `style=` margins. All of them
were moved onto the scale that day. What remains off the scale is **component metrics**,
recorded in the frontmatter: the button's `0 22px`, the nav link's `10px 14px`, the join
link's `18px`, the tag's `4px 9px`, the 22px feed and event row padding, and 3–4px underline
offsets. Those size a component; they are not rhythm between components.

**Three breakpoints:** 760px (single column; news rows stack, the event row keeps its
indicator in a second column), 900px (nav collapses to a disclosure panel, two-column
blocks stack) and 1152px (the lens region is created — and below it **the field is gone
entirely**, canvas hidden and `.gecis` bands collapsed to `--sp-sec`). Nothing that a
visitor needs may live only above a breakpoint — see The Standing Fact Rule. The field is
not such a thing: it carries no information a visitor needs.

Anchor targets carry `scroll-margin-top: 64px` on `section`, the height of the sticky nav.
Without it an in-page jump parked the section heading underneath the bar.

Touch targets are at least 44px, and buttons 48px — **including the ones that only exist once
the panel has published.** With an empty archive nothing in the feed renders, so three of them
went unmeasured until the layouts were run against real data: `.devam` was a 109×25 box, and
the news title links were 359×21 — the second below even WCAG 2.5.8's 24px floor. Text links
inside a heading take `padding-block` rather than a height: **inline vertical padding grows the
hit box without touching layout.** Verified by toggling it off at runtime — `h3` 141px, row
509px, page 6,898px, identical both ways, hit box 24px larger with it.

*Audit test:* measure targets with the feed populated, never against the empty state.

There is no `overflow-x: hidden` anywhere;
overflow is solved at its source. Measured zero horizontal overflow at 320, 390, 768, 900,
1151, 1152, 1440, 1920 and 1970px.

### Named Rules
**The Shorthand Rule.** Never set the `padding` shorthand on an element that also carries
`.wrap`, and never rely on a type selector to add padding to a `.wrap` element. Both
mistakes shipped: `.kapak{padding: … 0 …}` silently zeroed the reading pages' side gutters,
and `main{padding-bottom: …}` lost the specificity contest to `.wrap{padding: 0 …}` so the
bottom padding never applied at all. Use `padding-block`, or raise specificity to
`main.wrap`.

**The Standing Fact Rule.** A fact a visitor needs in order to join — the way in, the "any
department" — is stated in the flow of the page at every breakpoint, in type, not in a
decorative rail. The hero once carried such facts in a `.defter` margin rail that was
`display: none` below 760px; the rail is gone, and the hero's lead paragraph ("Hangi bölümde
okursan oku, katılabilirsin.") and its primary button carry them now. The verb was
"gelebilirsin" until 2026-10-05; with no standing meeting and no scheduled event there was
nowhere to come to, and the button beside it says *katıl*.

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
the field's own morph and drift. **The entrance starts below the first screen.** Until
2026-10-11 the hero's `h1`, lead and primary button were `.reveal` too: every visit started
the LCP element and the society's only way in at `opacity: 0` and waited for an observer
callback plus 0.8s. The first screen now renders at rest. `backdrop-filter` appears exactly once, on the stuck
navigation bar.

**Reduced motion removes movement, not feedback.** The `prefers-reduced-motion` block names
the spatial transitions it cancels — the scroll reveal, `.js .tl .detay`, the disclosure
indicator's rotation, `.tam` — and leaves colour and opacity transitions alone, because
those are how a control acknowledges being used. The blanket
`*{transition-duration:.01ms!important}` that used to sit there cancelled both kinds
without distinguishing them.

**The cancel selector must match the selector that set the transition.** When the
disclosure's collapsed state moved behind the `.js` gate, the setter became
`.js .tl .detay` (0,3,0) and the cancel was still `.tl .detay` (0,2,0) — so reduced motion
silently stopped working while looking correct in the source. Both now carry `.js`. Any
future rule that gains a gating class has to gain it in the reduced-motion block too.

**The Closed Region Rule.** A collapsed disclosure is not closed until it has left the tab order
and the accessibility tree. `grid-template-rows: 0fr` plus `overflow: hidden` only clips it:
the content keeps its box, stays focusable, and is still read as page text. Measured on the
archive at the 25-item ceiling, that was **15 focusable links a keyboard user had to tab
through with no visible focus anywhere** (WCAG 2.4.7) — and worse, focusing one scrolled the
clipped wrapper 7,654px internally, so opening that card afterwards started the article at its
end. On the landing page the same shape meant a screen reader heard four event descriptions
while all four buttons reported themselves collapsed.

The fix is one property on the wrapper, gated the same way the collapse is:

```css
.tam > div            { visibility: hidden;  transition: visibility 0s .45s }
.haber.acik .tam > div{ visibility: visible; transition: visibility 0s 0s }
```

The delay is the collapse duration, so the text stays visible while the row closes and only
then leaves. Measured after: **78 focusable candidates, 63 reachable, 0 phantom stops**, and an
opened card's wrapper is no longer scrollable at all (`scrollHeight === clientHeight`).

*Audit test:* focus every `a[href]`/`button` in turn and count the ones that accept focus while
`visibility` is `hidden` or their box is under 2px tall. Any count above zero is a phantom stop.

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
| 1152 px | 780 | 820 | 39 px | 0 |
| 1440 px | 973 | 1022 | 49 px | 0 |
| 1680 px | 1027 | 1083 | 56 px | 0 |
| 1970 px | 1121 | 1177 | 56 px | 0 |

Re-measured on the shipped code 2026-09-10. The previous version of this table
carried 78 px and 96 px in the last two rows, which contradicted the Layout
section's own correction on the same page: `--ray-ara` caps at 56 px, so no
width can produce them. The first two columns were stale too — they predate the
`--daralt` fix, which moved the reading column's right edge outward at every
width above 1152 px. The gap column was always right.

Below 1152px there is no lens and the question does not arise. In the plate state the
rectangle sits inside a section-transition band that holds nothing at all, so there is no
text on screen to measure against.

*Second audit test, for the rectangle's own edge:* render each model in each state, read
the canvas back, and count lit pixels in the outermost 3px ring of the scissor rectangle.
Any count above zero means the fit is wrong and the model is being cut off. Shipped result:
**0 lit edge pixels across 220 checks** — five models × both states × nine cursor positions
each, at 1440, 1575, 1970 and 390px.

## Shapes

Four steps, all used: **4 / 6 / 8 / 12px**. Buttons and inputs `md` (8), cards and images
`lg` (12), tags and nav links `sm` (6), focus rings `xs` (4). `border-radius: 50%` appears
only on true circles — the project status dot. A fifth step, `xl` (16), had one consumer,
the repository dialog's panel, and left with it on 2026-10-06.

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
`:focus-visible` rule — `.feed-hata button` (0,1,1) beats `:focus-visible` (0,1,0). Any
element that resets itself must restate its own focus ring; `.feed-hata button:focus-visible`
does. The `.olcum` stat buttons shipped without a visible ring until this was found by
tabbing to them, so verify with a keyboard, not by reading the global rule. The one
interactive `.olcum` row has been a plain `<a>` since 2026-10-06: no reset, so the global
ring applies unchanged.

### Cards (night world)
tezgah ground, hair border, `lg` radius, 24px padding. Hover moves to tezgah-2 and hair-s.
Each project card links to its repository: the `h3` link's `::after` covers the whole card,
and the focus ring moves to that `::after` so it outlines the card, not the title. The cards
had a hover state before they had anything to click. Four cards sit in a fixed two-column
grid, one column at 760px and below; `auto-fit` put three on the first row at 1440px and left
the fourth alone.
**No fixed heights** — content flows to the real data ceilings (title 200 chars, summary 800).

### Navigation
Horizontal links at 15px with a 44px hit area; the active section carries a 2px lamba
underline. Below 900px it becomes a disclosure panel behind a labelled button with
`aria-expanded`. The active section is read from real section geometry via
`IntersectionObserver`, never from a scroll ratio — and the observer is bound to
`.baglar a[data-b]`, so a link that is not a section anchor can live in the panel without
joining the rotation.

**The join link (`.kat`)** is that exception, and it is now present at every width. Above
900px it sits at the end of the bar in `lamba`, separated from the four section anchors by
a 1px `hair` left border and 18px of padding — a link, not a filled button, so it does not
compete with the hero's primary. Below 900px it moves to the foot of the disclosure panel
behind a `hair` top border (and must reset `border-left`, `margin-left` and `padding-left`
there, or the desktop divider follows it into the panel).

It used to be `display: none` above 900px, on the reasoning that the hero and the footer
already carried the route. **That reasoning was wrong about the footer**: the footer's only
join affordance was the word "Discord" among three grey text links. The decision to join
is made *after* reading the page, and at that point a desktop visitor had nothing
clickable within 6,000px of scroll while a phone visitor had a link that followed them.
Since 2026-10-01 this link is the only join affordance below the hero: the footer's closing
invitation and its second primary button were removed (see Footer below).

**The reading pages' top bar (`.ust`) takes this bar's measure**, not the reading measure:
64px tall, `max-width: 1180px` growing to `1180px + --ray + --ray-ara` above 1152px, and the
landing gutter `clamp(20px, 5vw, 56px)` — so the wordmark sits at the same x on every page
(56px at 1440px). The two pages copy `--ray` and `--ray-ara` for exactly this. Its focus
ring is the night lamp (`.ust :focus-visible { outline-color: var(--lamba) }`): the paper's
`--lamba-d` measured 3.1:1 against `gece`.

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

### Footer

One line: "Atılım AI · Ankara", the contact address, and three links (Haberler, Discord,
GitHub) in `body-sm`, `kagit-s` and `kagit-t`, above a `hair` top border. `404.html` carries
the same footer and the same rules; until 2026-10-11 it had its own in mono 13px, with links
that went `lamba` on hover — the lamp on something that is not an action.

**The closing invitation (`.kapanis`) was removed on 2026-10-01.** It invited visitors to a
weekly gathering the society no longer holds, and its primary button pointed at Discord
while the join route is expected to change (PRODUCT.md, Operating Context). The page now has
one primary button, the hero's. Do not bring the block back as a Discord-only ask.

**The footer shares the reading measure.** `footer .wrap` takes the same `padding-right` as
`main .wrap` above 1152px. Two reasons, both found by measurement: without it the footer ran
the full box width and its right-aligned links sat ~600px right of where every other line of
the page ended; and footer content can reach the lens rectangle — the removed closing button
landed *inside* it at 1920px (button 1605–1709px, lens 1162–1722px), which is the one thing
the Reading Light Rule forbids. `nav` is deliberately excluded — it is chrome, not content,
and it sits above the lens vertically.

### Disclosure indicator (`.isaret`)

A 12×12 authored SVG chevron, `stroke-width: 1.5`, `stroke-linecap: round`, ending each
event row. It tells three states and nothing else does:

| State | Transform | Stroke |
|---|---|---|
| closed | none | `kagit-t` |
| hover / focus | none | `lamba` |
| open (`li.acik`) | `rotate(180deg)` | `lamba` |

Rotation runs 0.45s on the shared easing, matched to the row's own `grid-template-rows`
transition. **It is `display: none` without `.js`**, because with scripts off the row cannot
open and an indicator would advertise an interaction that does not exist.

Before it, the row's only cue was `opacity: .78` on hover — invisible at rest, and on a
touch device invisible entirely. Every event description, including the repeated "önkoşul
yok, laptop yeterli", sat behind a trigger nobody could see. The same problem and the same
kind of fix applies to `.olcum`: its one interactive row — "4 tamamlanan proje", a link to
`#s4` — ends in an arrow icon in `kagit-t` that goes `lamba` and shifts 3px on hover (reduced motion
keeps the colour and drops the shift's transition), while the two plain `<div>` rows have
none. Identical-looking rows where only some were interactive was a standards break, not a
subtlety.

The archive card's **Devamını oku / Kapat** button ends in the same chevron, rotating 180° on
`.haber.acik` over the same 0.45s; reduced motion cancels the rotation. It replaced the text
glyphs `▾ ▴`, which fell back to a system font and were read aloud.

### Icons

Four authored 12×12 SVG symbols, the chevron's stroke language (1.5, round caps and joins),
defined once per page in a hidden `<svg class="tanimlar">` and called with `<use>`:
`i-ileri` (→, "go on"), `i-dis` (↗, opens elsewhere), `i-geri` (←, back) and `i-asagi` (the
chevron). `.ok` sizes them at `.75em` in `currentColor`, `.4em` after the text; `.ok.bas`
puts a leading icon `.4em` before it. Scripts build the same `<use>` with
`createElementNS`. Every icon is `aria-hidden`.

They replaced Unicode arrows (`→ ↗ ← ▾ ▴`) in link text. Neither Public Sans nor Newsreader
contains those glyphs, so every arrow on the site was drawn in a fallback system font, and
screen readers announced them ("north east arrow"). **A link that opens a new tab says so in
words** — a `.gizli` "(yeni sekmede açılır)" after the icon — since the icon itself is hidden
from assistive technology. That includes the project cards, which never had a visible icon.

### Events list
**Empty since 2026-09-28.** No special events are scheduled, so the list is out of the page
and a `.tl-bos` footnote stands in its place: the feed's empty-row voice (mono 13px,
`kagit-t`) plus the list's own top hairline and `xl` margin, so the section starts in the same
place when the list returns. The row markup is kept as a comment inside `#s2`; the styles and
the accordion script below stay in place.

Each row is a real `<button>` inside its `<li>`, so keyboard operation needs no extra code.
`aria-expanded` lives on that button — the `<li>` is not operable, and state parked there is
never announced. Appearance is driven by a separate `.acik` class on the `<li>`, the same
split the archive card uses, so no `:has()` support is required.
Expansion animates `grid-template-rows` from `0fr` to `1fr` over 0.45s — not `max-height` —
so no pixel ceiling can clip long copy.

### News row
**`<time>` only where a machine-readable value exists.** The issue date is ISO in the contract,
so the archive's issue bar carries `datetime="2026-09-07"`. An item's own date is free text from
the panel ("3 Ağustos 2026") with no ISO counterpart, so it renders as a `<span>` — a `<time>`
without `datetime` whose content is not a valid date string is invalid, and the issue's date is
a different date and cannot stand in for it. `haber.html`'s cover date moved from `<time>` to
`.tarih` for exactly this reason.

A grid, not a card. Homepage: `88px 108px 1fr` (date, category, body). Archive: `64px 1fr`
with the date stacked. Both separated by a single hairline; the archive's expanded full text
grows inside the same row.

**The feed has three states, and they say three different things — on all three reading
surfaces.** The landing feed had them first; `haberler.html` and `haber.html` read the same
file and were still on two, so a dropped connection there produced a developer instruction
("run a local http:// server") and, on the archive, **no action on the page at all**. Both now
carry the pattern below. One file, one contract, one set of states.

| State | Class | Copy |
|---|---|---|
| loading | `.feed-kalan` | *Haftalık rapor yükleniyor…* |
| data read, no issue | `.feed-kalan` | *Henüz yayımlanmış bir sayı yok.* |
| request failed (reject, `!r.ok`, or no first byte within 10s) | `.feed-hata` | *Haftalık rapor şu an yüklenemedi.* + **Yeniden dene** |

**A stalled request is a failed request.** Until 2026-10-01 a connection that hung without
dropping — campus Wi-Fi, a phone on one bar — left *"yükleniyor…"* on screen forever, with
nothing to press; on `haber.html`, which had no loading line at all, it left a blank page
between the bar and the footer. All three reading surfaces now give the response 10s
(`ZAMAN_ASIMI`) to start arriving and then draw the failure state. The fetch is not aborted
— no `AbortSignal`, because the panel preview wraps `window.fetch` and this repository cannot
see how it treats a second argument — so a response that arrives late still renders. A
request counter (`sonIstek`) silences only a request a newer retry has superseded.

**A malformed record is not a network failure.** One `null` item used to throw mid-render,
fall into `.catch()`, and replace the whole feed — and the whole archive — with *"şu an
yüklenemedi, bağlantın kesilmiş olabilir"*, behind a retry that could never succeed. Every
item now passes through `temizHaber()` first: non-objects are skipped, text fields are
coerced to strings, and `link` / `gorsel` survive only as `http(s)` (a `javascript:` link
rendered live before). A skipped record keeps its position — `?sira=` is the index in the
original array, because Discord links depend on it.

**Retry keeps focus.** The button used to be `disabled` and then destroyed, so focus fell to
`<body>` and a keyboard or screen-reader user never learned the outcome. It now takes
`aria-disabled` and reads *"Deneniyor…"* while the request runs; afterwards focus moves to
the new retry button on failure, or to the content on success (the first news link, the
archive counter, the article `h1`). Non-interactive targets take `tabindex="-1"` and
`[tabindex="-1"]:focus{outline:none}`: a ring there would read as a control. A failure on
first load never moves focus.

The failure state is the important one. The `.catch()` used to leave the page untouched,
and because the static markup *is* the empty state, a network failure printed *"Henüz
yayımlanmış bir sayı yok."* That was true only for as long as the archive stayed empty:
**the day the first issue publishes, every visitor with a dropped connection would have
been told the society has never published.** That is exactly what Principle 4 in PRODUCT.md
forbids, and it was a latent defect with a known trigger date.

`.feed-hata` is a flex row at 11px block padding, not the `.feed-kalan` 22px. The 44px retry
button used to grow the line box to 90px against the loading row's 66px, so the page jumped
**26px** the moment a request failed; the two rows now measure 68 and 66. A state change that
moves the page is a second event the reader has to absorb.

The retry button re-enters the same `getir()` and an in-flight guard keeps a double tap
from stacking rows. `#feedIssue` carries `:empty{display:none}` so a missing issue number
does not leave 32px of dead space above the state line. The loading and empty lines share
one row height, so switching between them shifts nothing.

**On the reading pages, nothing the content will push is on screen while it loads.** At
1440×900 the archive's footer sat in the middle of the first screen under an empty list, and
the arriving issues shoved it off: CLS **0.134** on `haberler.html`, over the 0.1 "good"
line. `haber.html` was worse. Its loading line lived inside `<main>`, and the cover
(`#kapak`: title, summary, meta) unhides *above* `<main>`, so the body dropped 448px in one
frame and took the footer with it: CLS **0.548**, past the 0.25 "poor" line. Phones never
showed either, because there the footer starts below the fold. Now the first fetch puts
`bekliyor` on `<body>`; `.bekliyor footer` — and on the article `.bekliyor #govde` — is
`display:none`, and the article's loading line sits outside `<main>` with `.wrap`, in the
cover's place. Every exit (content, empty, failed, timed out) removes the class. An element
out of layout cannot shift, and it comes back as a new element. Measured after: **0.026**
and **0.012**. The remainder is a 29px one-line reflow that appears and reverts within about
40ms, consistent with the two Google Fonts subsets landing at different times; not chased.
(The faces have been self-hosted, one file each, since 2026-10-11; the remainder was not
re-measured.)
With no script the class never arrives, so the footer is always there; a retry does not set
it, because the error card is already on screen and stays until the result.

Under no-JS the static markup stands alone and states the empty case, which is the only
true sentence available without a fetch.

**The feed's empty state is the static markup too.** `#feedList` used to ship three
example news rows for design purposes; they were invented copy, and they were live. It now
ships the same *"Henüz yayımlanmış bir sayı yok."* sentence in `.feed-kalan` that the script
renders when the fetch succeeds and returns no issue, so the no-JS and failed-fetch paths
state the truth rather than a fabricated digest. A network failure is still treated
differently from an empty file and leaves the page as-is, because an unreachable file is not
evidence that nothing was published. Design the row against real data from the panel, not
against sample copy left in the file.

**The homepage feed shows three items.** `GOSTER = 3` caps what the newest issue may put on
the landing page; the remainder is stated, not silently dropped, by a `.feed-kalan` line in
mono 13px `kagit-t` that takes the same 22px row rhythm and hairline. At the panel's legal
ceiling of 25 items this is the difference between a 6,929px and a 9,955px page on a phone.

### The field

The landing page's one instrument. **Raw WebGL, inside the page: no dependency, no build
step, no CDN script.** The context is `webgl2` falling back to `webgl`; the shaders are
GLSL ES 1.00, which both accept. 18,000 points, one `drawArrays`, device pixel ratio capped
at 1.75. There is no smaller phone count any more: the field is only ever set up at 1152px
and wider (see *Below 1152px* at the end of this section).

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

**The section-transition band** (`.gecis`) is `min(70vh, 580px)` — collapsed to `--sp-sec`
below 1152px, under reduced motion and without WebGL — and is completely empty: no caption,
no content of any kind. Naming the model in
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

**Sleep.** The loop stops when nothing is happening. Until 2026-10-11 it ran at 60fps for
as long as the tab was visible at 1152px and up — 18,000 points and a full-viewport clear
every frame, under a navigation bar whose `backdrop-filter` re-blurred each time — while a
visitor sat reading. A self-starting animation that runs past five seconds beside content
also fails WCAG 2.2.2. Now scroll, resize, a layout change in `main` (`ResizeObserver`: a
late feed or a font swap moves the bands) and a pointer moving *inside the drawn rectangle*
count as activity; a pointer in the text column does not. `UYKU` (4.6s) after the last
activity, with the morph settled and the pointer's interest decayed to zero, the loop draws
its last frame and stops requesting frames. The lamp sweep is faded out over the final
`SONUS` (0.6s) first, because a highlight frozen mid-pass reads as a hang. On waking, the
clock resumes where it stopped (`t0` is shifted by the sleep), so drift and sweep do not
jump. Verified with a frame counter: ~4.7s of frames after load, none after; a text-column
pointer wakes nothing; a lens pointer or a scroll wakes it and it sleeps again ~4.7s later.

**Fallbacks.** No WebGL context: `body.no-alan` hides the canvas, collapses the bands to
`--sp-sec`, and the page is exactly what it was before the field existed. The context is
only requested at 1152px and wider, so `no-alan` only ever appears there; below, the media
query already does the same job. `prefers-reduced-motion`: one static frame, no loop, bands
collapsed to `--sp-sec`. Hidden tab: the loop returns early.

**Below 1152px the field does not exist at all — not drawn, and not built.**
`@media(max-width:1151px)` hides the canvas and collapses every `.gecis` to `--sp-sec`, and
the script asks nothing of the device either: no WebGL context, no particle generation, no
buffers, no frame loop. Setup runs the first time `matchMedia("(min-width:1152px)")`
matches, at load or when the window is widened. Its `change` event stops the loop on
narrowing and restarts it on widening, so the field still comes back without a reload. The
pending frame's id is kept and cancelled on stop, so a fast narrow-and-widen cannot leave
two loops running.

This replaced two real costs, both measured. First the bands: they stayed at
`min(72vh, 540px)` on a phone and four of them added about **1,780px of empty scroll** to a
390×844 page. The device class most likely to arrive from a campus Discord link was paying
battery, heat and four screens of black for a layer that carries no information. Page height
at 390px went from roughly 7,100px to **5,339px**.

Then the setup (2026-10-01). Collapsing the bands left the script behind: the loop only
skipped *drawing* (`if (EN < 1152) return;`) and kept requesting frames so a widened window
would recover. A phone still opened a WebGL context, generated 7,500 points for all five
models, uploaded the buffers, and then woke 60 times a second forever to draw nothing.
Traced at 390px with the CPU slowed 4×: **37.8ms** of field evaluation plus **14.6ms** when
the logo image loaded, against about 3ms for the rest of the page's setup script, and
**4.4ms of main-thread work per idle second**. After: 2.4ms, 0ms, no context, **0 frames**,
0.07ms per idle second. Desktop was verified unchanged by reading pixels back from the old
and new code at the same moments: identical scissor rectangles, the same lit region to
within particle jitter. It also closed a latent bug: a page loaded narrow and then widened
kept the 7,500-point phone count on a desktop screen — 16,883 lit pixels in the lens
against about 25,700.

The lens region does not exist below 1152px either (`mercekKutusu()` returns `null`), so the
only state that was left down there was the plate — and the plate in a collapsed band is
the one place the field has nothing to say.

### Repository dialog — removed 2026-10-06

The "4 tamamlanan proje" row used to open a dialog that listed the four repositories again,
with language, star, fork and last-pushed figures from the GitHub API. The `#s4` cards already
link to the same four repositories, so the dialog was a second presentation of one list —
and the most complex thing on the page: a focus trap, a scroll lock with scrollbar
compensation, an unauthenticated API call capped at 60 per hour per campus IP, a 10s timeout
and a failure note. Markup, styles and the script section went together; the row is now an
`<a href="#s4">`, and the `xl` radius step left with the panel.

If an API-fed figure ever returns, the dialog's two lessons still bind: the value ships
`hidden` and is unhidden only when the response arrives, never baked into markup as a
placeholder; and a failed request says so in one line in the page's own voice instead of
leaving stale numbers dressed as live data.

### Day-world controls and status
Buttons drop to 44px and 16px padding on paper, and use `cizgi-s` borders on a transparent
ground so they sit quietly inside a reading column.

**Every `.durum` card is followed by a `.durum-eylem` row** — flex, `--sp-sm` gap, wrapping,
`--sp-lg` above — carrying at least one way out and, on a network failure, a **Yeniden dene**
button ahead of it. Both are `.oku`; the row introduces no new button vocabulary. It exists
because a status card with nothing clickable is a dead end: the archive's failure state used to
be exactly that, a developer instruction with zero actions on the page.

**Retry has to be able to succeed.** `haber.html`'s `durum()` used to `remove()` the cover
scaffolding (`#kapakUst`, `#ozet`, `#kapakMeta`); a successful retry then wrote to elements that
no longer existed, threw, and landed back on the same error card. It hides them instead, and
`ciz()` unhides them. Verified end to end: file removed → error card → file restored → retry →
90 paragraphs, category, date and meta line all back.

**A source that is a URL shows its host.** The contract's `kaynak` is a source *name*, but the
panel accepts a URL and issue 1 carries two. The address is already behind **Kaynağa git**, so
`.kaynak` and the article's meta line print `anthropic.com`, not the full path. Panel-fed
metadata — `.kaynak`, `.etiket`, the item date, figure captions, `#kapakMeta` — carries
`overflow-wrap: anywhere`, and the archive's grid children take `min-width: 0`: with one
unbroken 200-character source the archive and the article both measured **1,767px wide at
320px**. Re-measured after: 320px at 320, 1440px at 1440, on all three pages.

### Visually hidden label (`.gizli`) — removed 2026-09-28, back 2026-10-11

It came back on 2026-10-11 to carry "(yeni sekmede açılır)" on every new-tab link (see
Icons), with the recipe below unchanged. The original record follows.


Removed together with the `[ADET]` placeholders it existed for; nothing else used it. The
record below is kept because the same trap applies to any screen-reader-only utility that
comes back: `position:absolute`, 1×1, `clip-path:inset(50%)`, `white-space:nowrap`, and
`letter-spacing:normal`.

`[ADET]` told a sighted reader "pending" through the Unverified Figure Rule's styling; to a
screen reader it was a bracket token and nothing else. Each figure paired an `aria-hidden`
token with a hidden sentence, so the rows read as *"Sayı henüz belirlenmedi, yürüyen proje"*.

The `letter-spacing:normal` was not hygiene theatre: the hidden span inherited `.bekliyor`'s
0.06em, and without the reset the detector read three spans of tracked body text and
`index.html` went from **0 findings to 3**. A hidden string carries no display tracking.

### The no-script body (`.betiksiz`)

Both reading pages render from the panel's JSON, so both need a true sentence when the script
does not run — and neither had one. `haber.html` was a nav bar and a footer with nothing between
them: no heading, no message, no `<h1>` at all, which is also what link previews and crawlers
saw. `haberler.html` said *"Arşiv yükleniyor…"* forever, a loading state for a request that
would never be made.

Both now ship a `<noscript>` block in the day world's own vocabulary — real `display-xl`
heading where the page has one, a `.durum` card, a `.durum-eylem` row — and the archive's
counter line ships **empty**, with `.sayac:empty{display:none}` (the same trick `#feedIssue`
uses) so no dead space is left. The script's first action is to fill it.

`.betiksiz` carries only the cover's top rhythm (`padding-block: clamp(48px,8vw,80px) 0`), and
because `<noscript>` is never constructed when scripting is on, the rule never applies there.

### Print (`haber.html` only)

The one page anyone would put on paper — an article runs to 20,000 characters. The block hides
the chrome (`.ust`, `footer`, `.durum-eylem`, `.oku`), keeps `.kaynak` so the source is named,
drops the image border and releases the measure. Two rules govern it:

**It carries no colour.** Browsers do not print background colours without
`print-color-adjust: exact`, so the cream ground never reaches paper on its own, and `--murekkep`
(#1A1713) is already ink. A `body{background:#fff;color:#000}` in there is not just redundant —
the detector does not read media context, so it counted them as screen values, added two
`design-system-color` findings and **masked the documented `cream-palette` exception**.

**It has to be last in the stylesheet.** A media query adds no specificity; source order decides.
Placed mid-file the block lost every contest against equal-specificity screen rules (`.oku`
(0,1,0), `.yazi p` (0,1,1)) and silently did nothing at all.

*Audit test:* rewrite `@media print` to `@media screen` in a copy and load it. Chrome, footer and
`.oku` should be gone, `.kaynak` present, image border 0, `main.wrap` max-width `none`, and every
colour unchanged.

### Images from the panel

`aspect-ratio: 16/9` with `object-fit: cover` on both reading pages. The ratio is declared,
not inherited from the file, because `max-height` alone leaves the box at zero height until
the image loads and then pushes every paragraph below it down. The border is applied only
after `load` (`.yuklendi`), so a slow or hanging address shows reserved space rather than an
empty framed box, and `onerror` removes the element outright rather than leaving a broken
icon. The image boxes themselves shift nothing. This file used to say measured layout shift
on both pages was **0**; that held for the images and not for the pages — on a 1440px
desktop the loading state cost 0.134 and 0.548 until 2026-10-01 (see News row).

`haberler.html` sets `loading = "lazy"`; `haber.html` does not. The archive's images sit
far down a long list, while the article's lead image is that page's LCP candidate. The
asymmetry is the point — do not harmonize the two.

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

Two values sit outside the palette deliberately. Both are recorded so a reviewer does not
"fix" them. (A third, the GitHub language-colour map, left with the repository dialog on
2026-10-06.)

- **The day world's cream ground** (#F2EDE3) is flagged by generic anti-pattern detectors as
  a saturated trope. It is a reasoned choice: article text runs to 20,000 characters. Keep it.
- **`box-shadow: unset` on `.feed-hata button`** is not a shadow; it is what `all: unset`
  expands to in the CSSOM. The No-Shadow Rule is intact.
- **`italic-serif-display` on `index.html` and `404.html`** is the detector reading the
  `h1`'s italic amber clause. Italic is this system's emphasis mechanism (Typography) and the
  clause is the whole `h1`'s point; the heading itself is roman. It is the only finding the
  4.5.2 detector reports on the four pages (2026-10-11). Keep it.

### Do:
- **Do** give a control a resting-state affordance, not only a hover one. A `:hover`
  opacity change is invisible until the cursor arrives and invisible forever on a touch
  device; if a row opens something, its shape has to say so while nothing is happening.
- **Do** give every asynchronous surface three states, not two: loading, empty, and
  failed — and make the failed one name the problem and offer the way out. An empty state
  standing in for a network error is a lie with a delivery date.
- **Do** keep a loading state out of the path of the content that replaces it. Anything
  visible while loading that the content will push — a footer, a body under a header that
  unhides — stays out of layout until the first result, and the check is measured at
  desktop size, where the footer is on the first screen.
- **Do** ship API- and panel-supplied figures `hidden` and unhide them on arrival, so a
  failed request shows nothing rather than a stale value dressed as live data.
- **Do** hide an indicator that `.js` is required to operate.
- **Do** match a reduced-motion cancel selector to the specificity of the rule that set the
  transition.
- **Do** take every spacing value between elements from the 8px scale and every radius from
  the four steps. Component metrics (button and tag padding, row padding, underline offsets)
  are recorded in the frontmatter, not improvised.
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
- **Do** give every error state a real `<h1>` and a matching `document.title` — and give the
  card under it a `.durum-eylem` row, so no status is a dead end.
- **Do** take a collapsed region out of the tab order and the accessibility tree, not just out
  of view. `visibility: hidden` on the clipped wrapper, delayed by the collapse duration.
- **Do** give a page that renders from the panel a `<noscript>` body that states the truth — a
  real heading, a plain sentence, a way out.
- **Do** step a panel-fed heading down when the copy is long. The contract's ceiling is a real
  size, not a hypothetical one.
- **Do** grow a text link's hit box with inline `padding-block`, which costs no layout.
- **Do** measure touch targets against populated data. An empty state hides the controls that
  fail.
- **Do** keep a screen-reader-only string free of display tracking (`letter-spacing: normal`).

- **Do** keep an opened reading region out of a toggle's hit area. A click inside the
  archive's open full text, or one that ends a text selection, does nothing; the button and
  the card's closed face toggle.
- **Do** draw icons from the page's `<symbol>`s and hide them from assistive technology; a
  link that opens a new tab says so in a `.gizli` sentence.
- **Do** let anything that animates on its own stop within five seconds of the last
  activity (WCAG 2.2.2), and fade a moving highlight out before it stops.
- **Do** render the first screen at rest. The scroll reveal is for what the visitor scrolls to.

### Don't:
- **Don't** put an eyebrow, kicker, or tracked-caps section label above a heading. It is
  the named anti-reference of this project and it shipped here once already.
- **Don't** let `footer .wrap` or any other content container run wider than
  `main .wrap` above 1152px — the lens rectangle is there, and content will land inside it.
- **Don't** restore a positive `--daralt` below 1400px. The reading column is the floor.
- **Don't** leave the field or its `.gecis` bands alive below 1152px — and don't build it
  there: no context, no particles, no frame loop waiting for the window to widen.
- **Don't** bake an API value into markup as a placeholder.
- **Don't** put two rows that look identical next to each other when only some of them are
  interactive.
- **Don't** take functional text below 12px.
- **Don't** add `box-shadow`.
- **Don't** unify the two container widths.
- **Don't** lazy-load the article's lead image, or drop lazy loading from the archive.
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
- **Don't** put colour rules in `@media print`, and don't put the print block anywhere but the
  end of the stylesheet. Browsers already drop backgrounds; a media query adds no specificity.
- **Don't** use `<time>` without a real `datetime`, and don't substitute a nearby date for a
  missing one.
- **Don't** let a status card destroy the scaffolding a retry needs. Hide it, don't remove it.
- **Don't** hand-expand an accent to `rgba()` at a call site — `--lamba-alt` is the lamp as a
  line, in both worlds.
- **Don't** let a new page re-derive the system. It takes `--ease`, the radius steps and the
  reduced-motion vocabulary from the existing pages or it is not in the system.
- **Don't** fill an unverified statistic with a guess. The current figures came from the team
  on 2026-09-28; a figure nobody has confirmed goes back to a visible placeholder, and
  `PRODUCT.md` records that it must not be invented.
- **Don't** put a Unicode arrow or triangle in link or button text; none of the three faces
  carries them, so they fall back to a system font and are read aloud.
- **Don't** apply `text-transform: uppercase` to text from the panel. Its language is
  unknown, and under `lang="tr"` the transform dots English `i`.
- **Don't** load a face from a third party. Extend `fonts/` the way `fonts/README.md`
  describes.
- **Don't** put the reading pages' top bar on the reading measure. The bar is chrome and
  keeps the landing page's measure on every page.
