# Working on Coexistence 101

This is the content and copy for a fictional SLOP University course. The
platform (Astro, the four content collections, the generated API, the
branding) is fixed; see `README.md` for what that means. Everything below is
about the course itself.

## The throughline

Coexistence 101 treats sharing space with other humans as a design and
observation discipline, not an etiquette checklist. Every week should read
like a field method, not a rule. If a sentence could be rephrased as "be
nice," rewrite it until it says what to actually look for or do instead.

Anchoring ideas to stay consistent with: Goffman's civil inattention and
interaction order, Hall's proxemics, Oldenburg's third place. Week 1 sets up
a "know yourself first" spine (presence, emotional discipline before you can
read a room) that Week 12 calls back to directly; keep that thread visible
if either week is edited.

## Hard rules

- **No `STARTER_CONTENT` markers left anywhere.** Grep for the string before
  considering a section done.
- **Every Tute (`src/content/sessions/*.md`) needs a real `spec:`**
  written as a checkable contract for that week's field task, not a summary
  of the lecture.
- **Assessment weights must sum to exactly 100.** If a weight changes, check
  the other two and update `spec/course-structure.test.ts`'s expectation
  alongside it.
- **Every assessment's `marking` needs `bands`** that say what actually
  separates an HD from a C: a concrete difference in the work, not a
  restatement of the criteria with different adjectives. Enforced by
  `spec/course-structure.test.ts`.
- **No stock or AI-generated photography.** People profiles are text-only by
  design (no `photo`/`photoAlt`); that's a deliberate choice, not a gap to
  fill later. Any imagery added to the site should be original, hand-authored
  vector art in the existing two-ink brand palette, not a photo.
- **Voice stays wry and practical, not corporate wellness-speak.** No "synergy,"
  no "bring your authentic self." If a line could appear in a HR onboarding
  deck, cut it.
- **Weeks 1–12 must each have exactly one `sessions` entry and one
  `lectures` entry.** No gaps, no duplicate week numbers.
- **No em dashes, anywhere.** Use a comma, period, colon, semicolon, or
  parentheses in this file and in all course content instead.

## Before shipping

Run `pnpm check` after any content change. It builds the site, checks
accessibility, checks internal links, and runs everything in `spec/`.
