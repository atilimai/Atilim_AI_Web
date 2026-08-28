# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: a student deciding whether to join.** They arrive knowing little or nothing
about the society, usually from a link shared in a campus channel or from a search. Their
job is to work out two things quickly: is this a serious place, and is turning up on a
Thursday evening worth it. They are not looking to be sold to; they are looking for
evidence.

**Secondary: existing members.** They come for the weekly report, upcoming events, and
project status. Their needs are real but never override the primary user when the two
compete for the same space.

The society draws members from across faculties — law and psychology students are members
alongside engineering — so nothing may assume a technical background as a precondition for
understanding the site.

## Product Purpose

The site is the society's public face and the permanent home of its weekly AI news digest.
It exists so that a student who has never heard of the society can understand what it is
and how to join, and so that the digest the society publishes every week has somewhere to
live that is not a chat channel.

Success is a student showing up on a Thursday who found the society through this site.

## Positioning

What the society actually does, rather than what it says about itself, is the position: it
meets every week and it publishes every week. Fourteen issues exist. The weekly digest is
produced through a real pipeline — an admin panel commits to this repository, GitHub Pages
publishes the site, and a GitHub Actions job posts the same issue to Discord exactly once.
That machinery is a fact about the society, not a marketing claim, and it is the reason the
site can be trusted to be current.

## Operating Context

- The society meets **every Thursday evening**, currently in Mühendislik B-204. The
  standing meeting is the society's core ritual and the thing the site is ultimately
  inviting people to.
- Sessions vary: reading a paper together, someone sharing a screen and showing where they
  are stuck, workshops, guest talks, project matchmaking, a campus hackathon.
- Discord is the society's live channel; the weekly digest is pushed there automatically.
- Content is **not authored in this repository**. A separate private admin panel
  (`atilimai/Atilim_AI_Panel`) validates and commits `content/haberler.json`. Editing that
  file by hand is a last resort.
- The society was founded in autumn 2023 by seven people who did not know each other.

## Capabilities and Constraints

**Locked technical decisions** (recorded in `EKIP.md`, owned by the team lead — treat as
binding):

- **No dependencies and no build step.** No framework, no package manager, no bundler. The
  site is plain HTML/CSS/JS served directly from GitHub Pages. The single pre-existing
  exception is a three.js CDN script that drives the background particle field.
- **Text from the panel is printed with `textContent`, never `innerHTML`.** Panel copy is
  user input; a tag in a news item must render as text, not run as code.
- **Four places share one data contract.** `content/haberler.json` field names are read by
  `index.html`, `haberler.html`, `haber.html`, and `scripts/discord-gonder.js`, and mirrored
  in the panel's `src/lib/site/news.ts`. Renaming a field means changing five files.
- **The `haber.html?sayi=N&sira=I` URL scheme is permanent.** The Discord bot generates the
  same scheme, so past Discord messages depend on it. Article identity is positional, which
  means reordering an issue's items breaks old links — a known weakness with no id field
  today.
- **`haberler.html` must fetch through `window.fetch` at a URL containing the substring
  `haberler.json`.** The panel's preview takes the page as-is and wraps `window.fetch` to
  serve draft data. Switching to `XMLHttpRequest`, or capturing `fetch` into a local before
  the wrapper installs, silently breaks the panel preview.
- **No `localStorage` on `haberler.html`.** The panel renders it in a `sandbox="allow-scripts"`
  iframe with an opaque origin, where storage access throws.

**Content limits** enforced by the panel (`LIMITS` in `news.ts`): 25 items per issue, title
200 characters, summary 800, full text 20,000. Layouts must survive the upper bounds — no
fixed heights on cards.

**Publishing:** every push to `main` is published by GitHub Pages. There is no staging
environment. The Discord job runs only when `content/haberler.json` changes and sends each
issue once; a correction to an already-sent issue reaches the site but never Discord.

## Brand Commitments

- Name: **Atılım AI**, the AI society of Atılım University, Ankara.
- Discord is the join path and the society's live channel.
- Open-source work lives under the `atilimai` GitHub organisation.
- Content is written in Turkish. The site's interface language is Turkish; internal
  documentation (this file, `DESIGN.md`) is English.
- The society's own framing of itself is deliberately unglamorous — "haftada bir akşam,
  aynı masada", no department requirement, no prerequisite. Copy should not inflate it.

## Evidence on Hand

**Real and usable:**
- `content/haberler.json` — the published issue archive, the society's strongest evidence
  that it does what it says. Currently 14 issues.
- The `atilimai` GitHub organisation and its public repositories.
- The publishing pipeline itself (`scripts/discord-gonder.js`,
  `.github/workflows/haftalik-rapor.yml`).
- The scheduled events listed on the site.

**Not established — must not be fabricated.** Member count, active project count, and
completed event count are unknown. The site currently shows **visibly marked placeholders**
in their place, by the team's decision, so that a reader can tell a number is pending rather
than reading a fabricated or broken-looking figure. Replace them with real figures when the
team supplies them; never invent one, and never quietly fill a placeholder with a guess.

**Known content problem:** issues 13 and 14 in `content/haberler.json` are test data
(placeholder titles, a Google redirect URL in the `gorsel` field), and issue 12's `icerik`
is filler text. This is live on the published site. It is a content fix for the team through
the admin panel, not a code change.

## Product Principles

1. **Evidence over persuasion.** The visitor is deciding whether this is a serious place.
   Show the archive, the schedule, and the working machinery; do not argue.
2. **The Thursday meeting is the product.** Everything else — the digest, the projects, the
   site — exists around a standing weekly invitation. If a change makes the next meeting
   harder to find, it is the wrong change.
3. **No prerequisites, on the page as in the room.** The society admits any faculty and
   assumes no background; the site must not gate understanding behind jargon.
4. **Never fabricate a fact to fill a layout.** An empty statistic, an invented member
   count, or a plausible-sounding claim costs more trust than a missing field does.
5. **The pipeline is a promise.** The site is current because publishing is automatic.
   Changes that require someone to remember a manual step break that promise.

## Accessibility & Inclusion

**Target: WCAG 2.1 AA.** Not an external mandate; a standard the team has adopted. The
current implementation meets it — every text/background pair in `DESIGN.md` is measured, the
type floor is 12px, touch targets are 44px, every interactive element is a real control with
a visible focus ring, and `prefers-reduced-motion` freezes the particle field.

Two known gaps carried forward:

- **News images are published with an empty `alt`**, which presents content images as
  decorative. The root cause is the data contract: `news.ts` has no alt-text field. Fixing
  it requires a change on the panel side.
- **Article permalinks are positional** (`?sira=0`), so a screen-reader user returning to a
  bookmarked article after an issue is reordered lands on a different article with no
  warning.

Turkish is the interface language; `lang="tr"` is set on every page and must stay set for
screen-reader pronunciation.
