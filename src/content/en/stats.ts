import type { Stat } from '../types'

// From Laith's CV (supplied 2026-11-06). Replaces the previous site's unconfirmed counters.
// Rule: 0–3 items; label ≤ 32 characters. An empty array hides the stats row.
export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Small businesses given CRM/ERP/BI' },
  { value: 200, suffix: '+', label: 'People trained in AI tools' },
  { value: 6, prefix: '$', suffix: 'K', label: 'Station J incubation grant' },
]
