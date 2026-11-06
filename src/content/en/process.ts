import type { ProcessStep } from '../types'

// From Laith (supplied 2026-11-06), wording as written.
// Rule: exactly 3 items; description ≤ 200 characters.
export const processSteps: [ProcessStep, ProcessStep, ProcessStep] = [
  {
    title: 'Discovery call',
    description:
      'We start with a free 30-minute call. You walk me through your workflow or training goal, and I tell you honestly where AI will save you time, and where it won’t.',
  },
  {
    title: 'Fixed-scope proposal',
    description:
      'Within 48 hours you get a one-page plan: what I’ll build or teach, the timeline, and a fixed price. No hourly billing, no vague deliverables.',
  },
  {
    title: 'Build, train, hand over',
    description:
      'I deliver in short milestones you can test, then train your team in Arabic, Hebrew or English so they can run it without me. Ongoing support is optional.',
  },
]
