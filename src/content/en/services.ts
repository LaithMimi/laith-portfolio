import type { Service } from '../types'

// From Laith's service list (supplied 2026-11-06): offers #1–#4, in his recommended order.
// Left out on purpose: landing page + AI video packages (crowded, low price) and CS tutoring (filler).
// Rule: exactly 4 items; description ≤ 300 characters.
export const services: [Service, Service, Service, Service] = [
  {
    title: 'AI Workshops for Educators & Teams',
    description:
      'Hands-on AI upskilling for colleges, schools, NGOs and company teams, from a Google-certified Gemini Educator who has trained 200+ learners. Delivered in Arabic, Hebrew or English.',
  },
  {
    title: 'AI Automation for Arabic-Speaking Businesses',
    description:
      "WhatsApp bots, lead capture, invoice and CRM workflows, and customer-service assistants for small businesses, built and explained in your customers' own language.",
  },
  {
    title: 'Custom AI Assistants on Your Documents',
    description:
      'An assistant that searches your own PDFs and documents and answers from them, using the same approach behind GeeksHub. Built for clinics, law offices, schools and training centers.',
  },
  {
    title: 'MVP Builds for Non-Technical Founders',
    description:
      'A fixed-scope MVP in 2–4 weeks for founders without a technical team: scoping, build and launch, accelerated with AI coding agents.',
  },
]
