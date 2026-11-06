// Editing contract for the site's content: specs/001-devsync-redesign/contracts/content-schema.md
import type { Text } from './tbd'

export type IconName =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'mail'
  | 'phone'
  | 'arrow'
  | 'arrow-down'
  | 'external'
  | 'download'
  | 'close'
  | 'menu'
  | 'chevron'
  | 'code'

export interface Image {
  src: string // root-relative, e.g. '/static/img/laith-576.webp'
  width: number // intrinsic px
  height: number
  alt: string // '' only when decorative
  srcset?: string
}

export interface SocialLink {
  label: string
  url: string
  icon: IconName
}

export interface Profile {
  name: 'Laith Mimi'
  greeting: Text
  role: Text
  intro: Text
  email: string
  phone: string // E.164, used in tel:
  phoneDisplay: string // as shown on the page
  location: string
  photo: Image
  cvUrl?: string // omit to hide the resume button
  socials: SocialLink[]
  languages: { name: string; level: string }[]
  about: Text[]
  education?: { degree: string; school: string; period: string; detail?: string }
}

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: Text
}

export interface Skill {
  name: string
  tooltip?: string
}

export interface SkillGroup {
  name: Text
  skills: Skill[]
}

export interface CaseStudy {
  tagline: Text
  problem: Text
  solution: Text
  impact: Text[]
  stack: string[]
  features: Text[]
  role: Text[]
}

export interface Project {
  slug: string
  title: Text
  summary: Text
  badges: string[]
  tags: string[]
  thumbnail?: Image
  links?: { live?: string; repo?: string }
  /** schema.org applicationCategory for the generated ItemList */
  category: string
  caseStudy: CaseStudy
}

export interface Service {
  title: Text
  description: Text
}

export interface ProcessStep {
  title: Text
  description: Text
}

export interface ExperienceEntry {
  role: Text
  organization: Text
  period: string
  points: Text[]
  tags: string[]
}

export interface Certification {
  name: Text
  issuer: Text
  date?: string
  note?: string
  url?: string
}

export interface VolunteeringEntry {
  role: Text
  organization: Text
  period: string
  summary: Text
}

/** Must be real and approved by Laith. Never TBD: a testimonial is either present or absent. */
export interface Testimonial {
  quote: string
  author: string
  authorRole: string
}
