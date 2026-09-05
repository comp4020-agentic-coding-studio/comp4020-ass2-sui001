# Process overview

Coexistence 101 is a fictional Slop University course about sharing a home,
a workplace, a studio or a public space with other people on purpose. It
treats coexistence as a field discipline — Goffman's civil inattention,
Hall's proxemics, Oldenburg's third place — rather than an etiquette
checklist, and marks the semester on a diagnosis, a tested protocol and a
critique-and-redesign, not on a self-report survey.

## What I built

A full twelve-week course on the fixed Slop University template: a course
record and site config, a Field Note and a lecture for every week, three
weighted assessments summing to 100%, two staff profiles, a real
astromotion slide deck for week 1, hand-authored two-ink SVG artwork for
the hero and social-card images (no stock or AI photography), an authored
homepage and policies page, a `CLAUDE.md` harness recording the rules this
build holds itself to, and a new `spec/course-structure.test.ts` alongside
the supplied `spec/data-integrity.test.ts`.

## How I got here

The course topic itself was the first real decision, worked through in
conversation before any file changed: an early "geocaching" idea gave way
to a shared-space topic once I pushed on what it would actually teach and
how it would be marked without turning into a soft-skills survey. That
conversation fixed the throughline (civil inattention, proxemics, third
place), the twelve-week arc, the "Field Notes" session label, and the
25/35/40 assessment split — diagnosis, tested protocol, then a
critique-and-redesign capstone — before I wrote a line of course content.

With the design locked, I planned the build (course record → site config →
content collections → hand-authored pages → `CLAUDE.md` → spec test) and
worked through it in that order:

- the course record, code and site labels landed first —
  [`175a965`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-sui001/commit/175a965)
- the full content build — twelve Field Notes and lectures, three
  assessments, both people profiles, the week-1 deck, the hero and card
  artwork, the homepage and policies copy, `CLAUDE.md`, and the new spec
  test — landed together as
  [`70834f7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-sui001/commit/70834f7)

I ran `pnpm check` after that commit and hit one real bug: a lecture
description used a colon followed by a space inside an unquoted multi-line
YAML scalar (`coexistence skill: getting the task done`), which YAML reads
as an implicit mapping key rather than plain text. Rewriting it as a comma
fixed the parse, and `pnpm check` went green — build, accessibility, link
checking, and all five spec tests (the supplied date-integrity test plus
the four new structural assertions: one session and lecture per week with
no gaps or duplicates, the allocated course code, at least one lecture
carrying a real deck, and assessment weights summing to exactly 100).

I then started `pnpm dev` and checked the homepage, a Field Note, the
week-1 lecture and its deck, an assessment, and the policies page each
resolved with the right title and content at the site's base path before
stopping the server.

That first pass satisfied every mechanical check but was thin as actual
course content — short session bodies, no glossary or citations, and only
one slide deck. Told directly that it read as weak, I went back over it in
two further passes: a `/readings/` glossary page citing Goffman, Hall and
Oldenburg properly plus three more slide decks (weeks 4, 7 and 12), in
[`bdd9ba8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-sui001/commit/bdd9ba8),
then a full re-edit of all twelve weeks' Field Notes and lectures to link
each framework to its glossary entry and tell the workplace, phone-while-
walking, studio-contention and household-enforcement anecdotes in full
rather than by reference, in
[`72da982`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-sui001/commit/72da982).
`pnpm check` stayed green throughout both.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
