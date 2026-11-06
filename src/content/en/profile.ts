import type { Profile } from '../types'

// Migrated from the previous site (hero, about, contact, structured data).
// Hero wording follows the approved comp (.impeccable/mocks/comp-a.png), built from Laith's own
// facts; Laith owns the final copy (Proda: "Write the hero and intro copy").
export const profile: Profile = {
  name: 'Laith Mimi',
  greeting: 'Hey,',
  role: "I'm a Software Engineer & AI Developer",
  intro:
    'Software engineer and Co-founder & CEO of Quest. I build RAG-powered tutors and study platforms that adapt to the learner.',
  email: 'Laithmimi03@gmail.com',
  phone: '+972543600249',
  phoneDisplay: '054-3600249',
  location: 'Jerusalem, Israel',
  photo: {
    src: '/static/img/laith-portrait.webp',
    srcset: '/static/img/laith-portrait-640.webp 640w, /static/img/laith-portrait.webp 1100w',
    width: 1100,
    height: 1716,
    alt: 'Laith Mimi smiling, wearing a sage green polo shirt',
  },
  // cvUrl: '/static/cv.pdf', // add once public/static/cv.pdf exists (Proda: "Add the CV PDF")
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/laith-mimi-0307g', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/laithmimi', icon: 'github' },
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Hebrew', level: 'Fluent' },
  ],
  about: [
    "I'm a software engineer and Co-founder & CEO of Quest — a SaaS agency focused on educational technology and digital transformation.",
    'My obsession? Making AI that actually helps people learn. From RAG-powered tutors to gamified study platforms, I build tools that adapt to users instead of demanding users adapt to them.',
    "When I'm not coding, I'm coordinating hackathons with Datahack, teaching Arabic through AI-enhanced methods at Blend.ar, or figuring out how to make the next project even more impactful.",
  ],
  education: {
    degree: 'B.Sc. Software Engineering',
    school: 'Azrieli College of Engineering, Jerusalem',
    period: '2021 – 2026',
    detail: 'Coursework: Data Structures & Algorithms, Systems Analysis & Design, OOP',
  },
}
