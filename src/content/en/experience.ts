import type { ExperienceEntry } from '../types'

// From Laith's CV (supplied 2026-11-06). Wording kept as written; tags are short labels drawn from it.
export const experience: ExperienceEntry[] = [
  {
    role: 'Co-founder & CEO',
    organization: 'Quest',
    period: 'Nov 2025 – Present',
    points: [
      'Lead a core team (two co-founders and interns) through the full product cycle: planning, implementation, launch (Oct 2026) and first institutional pilot (Oppotrain, from Nov 2026).',
      'Own day-to-day operations and coordination across technical, product and business work; set roles, track progress and keep delivery aligned with plan.',
      "Manage partnerships and external stakeholders; present and report to program managers and partners in Arabic and English; secured a $6,000 grant from Station J's incubation program.",
    ],
    tags: ['Team Leadership', 'Product Launch', 'Partnerships'],
  },
  {
    role: 'Freelance Technology Consultant',
    organization: 'Quest',
    period: 'Aug 2025 – Jun 2026',
    points: [
      'Deliver CRM/ERP/BI systems for 20+ small businesses: needs assessment, scoping, implementation, staff training and follow-up support.',
      "Debug and resolve technical issues in client systems end to end, keeping solutions aligned with each business's budget and capacity.",
    ],
    tags: ['CRM', 'ERP', 'BI'],
  },
  {
    role: 'Project Manager & Tech Instructor',
    organization: 'WeGrw',
    period: 'Apr 2025 – Present',
    points: [
      'Plan and deliver hands-on AI capacity-building programs; taught 200+ users as a Certified Gemini Educator.',
      'Coordinate content, scheduling and participant follow-up across workshops for students, educators and corporate teams.',
    ],
    tags: ['AI Training', 'Program Delivery', 'Capacity Building'],
  },
  {
    role: 'Teacher (Intern)',
    organization: 'Computing & Mathematics, Jerusalem',
    period: '2026 – Present',
    points: [
      'Teach computing, mathematics and 9th-grade financial education across grades 6–10; build activity-based lesson material.',
    ],
    tags: ['Computing', 'Mathematics', 'Financial Education'],
  },
]
