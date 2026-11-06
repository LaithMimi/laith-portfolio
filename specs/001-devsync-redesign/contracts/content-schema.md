# Contract: Content Schema (`src/content/types.ts`)

This is the editing contract for Laith. To update the site's content, edit the files in `src/content/`. Layout code never needs to change. `npx tsc --noEmit` reports any file that breaks these types. Validation rules beyond the types (lengths, counts, cross-checks) are in [data-model.md](../data-model.md).

```ts
// src/content/tbd.ts
export type Tbd = { readonly __tbd: true; readonly note: string }
export const TBD = (note: string): Tbd => ({ __tbd: true, note })
export type Text = string | Tbd            // renders <span data-tbd>TBD: note</span> when Tbd

// src/content/types.ts
export type IconName =
  | 'github' | 'linkedin' | 'x' | 'mail' | 'phone'
  | 'arrow' | 'external' | 'download' | 'close' | 'menu'

export interface Image {
  src: string          // root-relative, e.g. '/static/img/laith-640.webp'
  width: number        // intrinsic px
  height: number
  alt: string          // '' only when decorative
  srcset?: string
}

export interface SocialLink { label: string; url: string; icon: IconName }

export interface Profile {
  name: 'Laith Mimi'
  greeting: Text
  role: Text
  intro: Text
  email: string
  phone: string            // E.164, used in tel:
  phoneDisplay: string     // as shown on the page
  location: string
  photo: Image
  cvUrl?: string           // omit to hide the resume button
  socials: SocialLink[]
  languages: { name: string; level: string }[]   // e.g. { name: 'Arabic', level: 'Native' }
  about: Text[]            // paragraphs shown beside the skills (reference "about" column)
  education?: { degree: string; school: string; period: string }
}

export interface Stat { value: number; suffix?: string; label: Text }

export interface Skill { name: string; tooltip?: string }
export interface SkillGroup { name: Text; skills: Skill[] }

// Shaped after the existing case studies (problem → solution → impact); each list may be empty.
export interface CaseStudy {
  tagline: Text
  problem: Text
  solution: Text
  impact: Text[]           // sentences; a TBD() part marks missing metrics
  stack: string[]
  features: Text[]         // "key screens / features"
  role: Text[]             // optional; empty hides "My role"
}

export interface Project {
  slug: string
  title: Text
  summary: Text
  badges: string[]         // e.g. 'Capstone', 'AI', 'EdTech'
  tags: string[]
  thumbnail?: Image
  links?: { live?: string; repo?: string }
  caseStudy: CaseStudy
}

export interface Service { title: Text; description: Text }
export interface ProcessStep { title: Text; description: Text }

export interface ExperienceEntry {
  role: Text
  organization: Text
  period: string
  points: Text[]
  tags: string[]
}

export interface Certification { name: Text; issuer: Text; date: string; url?: string }

export interface VolunteeringEntry {
  role: Text
  organization: Text
  period: string
  summary: Text
}

export interface Testimonial { quote: string; author: string; authorRole: string } // never TBD
```

## Module exports

| File | Export | Type |
|---|---|---|
| `profile.ts` | `profile` | `Profile` |
| `stats.ts` | `stats` | `Stat[]` (0–3) |
| `skills.ts` | `skillGroups` | `SkillGroup[]` |
| `projects.ts` | `projects` | `Project[]` (≥ 1) |
| `services.ts` | `services` | `[Service, Service, Service, Service]` |
| `process.ts` | `processSteps` | `[ProcessStep, ProcessStep, ProcessStep]` |
| `experience.ts` | `experience` | `ExperienceEntry[]` |
| `certifications.ts` | `certifications` | `Certification[]` |
| `volunteering.ts` | `volunteering` | `VolunteeringEntry[]` |
| `testimonials.ts` | `testimonials` | `Testimonial[]` (may be `[]`) |

Fixed-length tuples for services and process steps make a missing or extra item a type error, not a layout surprise.
