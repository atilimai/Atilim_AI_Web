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
meets every week, and it has built the machinery to publish every week. An admin panel
commits to this repository, GitHub Pages publishes the site, and a GitHub Actions job posts
the same issue to Discord exactly once. That machinery is a fact about the society, not a
marketing claim.

**No issue has been published yet.** `content/haberler.json` was cleared on 2026-09-09 by
team decision; it now holds an empty `sayilar` array and both reading surfaces state
*"Henüz yayımlanmış bir sayı yok."* The entries it used to hold were placeholders, and the
issue numbers in them (12, 13, 14) were placeholders too — they were never a count of
anything. An earlier version of this file read the highest number as a
total and claimed "fourteen issues exist"; that was wrong, and the mistake is recorded here
so it is not repeated. Until the first real issue ships, the pipeline is a capability, not
yet evidence, and no copy anywhere may imply a publishing history.

## Operating Context

- The society meets **every Thursday**, currently in Mühendislik B-204. The standing
  meeting is the society's core ritual and the thing the site is ultimately inviting
  people to. The room is expected to change at some point (team, 2026-09-10); it is a
  current fact, not a permanent one.
- **The standing meeting's start time is recorded on the site as 17.30, and it is NOT
  confirmed.** The team wrote it on 2026-09-10 as a placeholder pending board approval.
  This is the one unverified figure on the site that does *not* announce itself as
  pending: a visitor reads "17.30" as a fact and a student who trusts it may arrive at
  the wrong hour. It appears in three places in `index.html` — the hero `.bulusma` line,
  the `#s2` lead paragraph, and the footer `.kapanis-sart` line — and all three must
  change together. Replace it with the confirmed time as soon as the board decides.
- **Two different kinds of gathering, and the site must keep them apart.** The weekly
  Thursday meeting needs no date tracking and no registration. The dated items in the
  events list are *separate special events* — workshops, guest talks, project matchmaking,
  a campus hackathon — and they fall on weekends. Confirmed 2026-09-10, after the site was
  found asserting "every Thursday" above four Saturday dates with nothing explaining the
  difference. Any future events list must state which of the two it is showing.
- Sessions vary: reading a paper together, someone sharing a screen and showing where they
  are stuck, workshops, guest talks, project matchmaking, a campus hackathon.
- Discord is the society's live channel; the weekly digest is pushed there automatically.
  It is currently the **only** join path. The team intends to add a second one and will
  decide its shape before it ships (2026-09-10), so nothing should be built that assumes
  Discord is the sole route forever.
- Content is **not authored in this repository**. A separate private admin panel
  (`atilimai/Atilim_AI_Panel`) validates and commits `content/haberler.json`. Editing that
  file by hand is a last resort.
- The society was founded in autumn 2023 by seven people who did not know each other.

## Capabilities and Constraints

**Locked technical decisions** (recorded in `EKIP.md`, owned by the team lead — treat as
binding):

- **No dependencies and no build step, without exception.** No framework, no package
  manager, no bundler, no CDN script. The site is plain HTML/CSS/JS served directly from
  GitHub Pages. The three.js CDN script that once drove the background particle field was
  removed; the scroll-driven field on the landing page is now raw WebGL written inline in
  `index.html` (see DESIGN.md → Components → The field).
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
- Discord is the join path and the society's live channel — currently the only one, with a
  second planned (see Operating Context).
- Open-source work lives under the `atilimai` GitHub organisation.
- Content is written in Turkish. The site's interface language is Turkish; internal
  documentation (this file, `DESIGN.md`) is English.
- The society's own framing of itself is deliberately unglamorous — "haftada bir akşam,
  aynı masada", no department requirement, no prerequisite. Copy should not inflate it.

## Evidence on Hand

**Real and usable:**
- The `atilimai` GitHub organisation and its public repositories.
- The publishing pipeline itself (`scripts/discord-gonder.js`,
  `.github/workflows/haftalik-rapor.yml`).
- The scheduled events listed on the site.

**Built but not yet evidence:** `content/haberler.json` and the publishing chain around it.
The archive is the society's strongest *potential* evidence, and it becomes evidence the day
the first real issue lands in it. Today it is empty on purpose. The team's next step is a
single test issue published from the panel, to exercise the chain end to end before real
content goes in.

**Not established — must not be fabricated.** Member count, active project count, and
completed event count are unknown. The site currently shows **visibly marked placeholders**
(`[ADET]`, styled by `.olcum b.bekliyor`) in their place, by the team's decision, so that a
reader can tell a number is pending rather than reading a fabricated or broken-looking
figure. Reconfirmed 2026-09-10: they stay as they are until the board supplies real
figures. Replace them then; never invent one, and never quietly fill a placeholder with a
guess.

A design review on 2026-09-10 argued the placeholders read as an unfinished website at
exactly the moment a visitor is judging whether the society is serious, and proposed
dropping the statistic shape altogether. The team declined for now, on the grounds that the
numbers are coming from the board. The argument is recorded, not acted on — but note the
open question it raises: whether a *count* is the evidence a student actually wants, or
whether three sentences about what happened last Thursday would answer "is this serious?"
without any figure at all.

`.olcum b` was changed from a fixed `width:56px` to `min-width:56px` on 2026-09-10 so a real
four-digit figure will not overflow when the placeholders are replaced.

**Resolved 2026-09-09 — no invented news remains in the repository.** The archive had been
carrying three placeholder issues live, presenting invented news as the society's weekly
digest, which is what Principle 4 forbids. Both halves of that are now gone:

- `content/haberler.json` holds an empty `sayilar` array. Both reading surfaces already
  handled this and show *"Henüz yayımlanmış bir sayı yok."* with no layout break, and the
  Discord job exits with `haberler.json içinde sayı yok.` A failed fetch is still treated
  differently and leaves the page as-is, because an unreachable file is not evidence that
  nothing was published.
- `index.html`'s three static example rows in `#feedList` were replaced by the same empty-
  state sentence the script renders, so the no-JS and failed-fetch paths tell the truth too.
  The section keeps its design fallback; it just no longer invents news to fill it.

**Discord will fire on the next publish.** `content/.son-gonderilen` holds `14`, so the job
sends only an issue numbered above it. A test issue numbered 14 or lower reaches the site
and stays silent on Discord; 15 or higher posts to the channel.

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

**Target: WCAG 2.1 AA.** Not an external mandate; a standard the team has adopted. Measured
on the shipped pages, not asserted: **zero contrast failures** across all three pages at
desktop and phone widths, **zero horizontal overflow** from 320px to 1970px, **zero
interactive targets under 44px**, no heading-level skips, a skip link and full landmark set
on every page, and a modal with focus trap, Escape, and focus return. The type floor is
12px. `prefers-reduced-motion` cancels the spatial transitions by name and leaves colour and
opacity feedback intact; the scroll-driven field draws one static frame and its bands
collapse.

One WCAG failure remains, and it cannot be closed in this repository:

- **News images are published with an empty `alt`** (WCAG 1.1.1, level A), which presents
  content images as decorative. The root cause is the data contract: `news.ts` has no
  alt-text field. The team has committed to adding one to the panel because AA requires it
  (confirmed 2026-09-09). **Whether it has shipped is currently unknown** — as of
  2026-09-10 the team has no active access to the panel repository and will check when
  that is restored. Until it is confirmed shipped *and* read by the reading pages, the
  site cannot claim AA. When the field lands it joins the shared contract, so
  `haberler.html`, `haber.html` and the panel change together.

One further weakness, not a WCAG failure:

- **Article permalinks are positional** (`?sira=0`), so a screen-reader user returning to a
  bookmarked article after an issue is reordered lands on a different article with no
  warning.

Three defects found and closed on 2026-09-09, recorded so they are not reintroduced: the
events accordion carried `aria-expanded` on its non-interactive `<li>` instead of the
button, so state was never announced; the mobile menu had no Escape key and no focus return
while the modal had both; and the active-section nav mark was visual only, with no
`aria-current`.

Six more closed on 2026-09-10, in the same spirit:

- The four event rows and the two `.olcum` rows were real buttons whose only cue was a
  hover opacity change — no resting-state indicator, nothing on touch at all. Every event
  description, including the repeated "önkoşul yok, laptop yeterli", sat behind a trigger
  nobody could see.
- With scripts disabled, `.tl .detay` was collapsed by an ungated rule, so four
  `aria-expanded="false"` buttons could never expand and their descriptions were
  permanently unreachable. The collapse now sits behind the `.js` gate.
- The `.olcum` button that opens the repository dialog had no `aria-haspopup="dialog"`.
- The modal did not lock background scroll. It now does, compensating for the scrollbar
  width so nothing shifts.
- The mobile disclosure panel did not close on an outside tap — the most natural dismissal
  gesture on a phone either did nothing or hit a link behind the panel.
- `prefers-reduced-motion` stopped cancelling the disclosure transition when the collapse
  rule moved behind `.js`: the cancel selector `.tl .detay` (0,2,0) lost the specificity
  contest to `.js .tl .detay` (0,3,0). Both the transition and the indicator's rotation are
  cancelled again.

Turkish is the interface language; `lang="tr"` is set on every page and must stay set for
screen-reader pronunciation.
