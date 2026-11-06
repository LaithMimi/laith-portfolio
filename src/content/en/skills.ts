import type { SkillGroup } from '../types'

// Migrated from the previous "Technical Arsenal" section, tooltips included.
export const skillGroups: SkillGroup[] = [
  {
    name: 'AI & ML',
    skills: [
      { name: 'RAG', tooltip: 'Teaching AI to cite its sources — retrieval-augmented generation for accurate, contextual answers.' },
      { name: 'LangChain', tooltip: 'Orchestrating LLM workflows that feel like conversations, not command lines.' },
      { name: 'Spring AI', tooltip: 'Bringing AI capabilities into enterprise Java ecosystems.' },
      { name: 'LLM Integration', tooltip: 'Connecting applications to AI brains — GPT, Claude, and custom models.' },
      { name: 'Prompt Engineering', tooltip: 'Crafting the instructions that make AI useful, not just impressive.' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'Python', tooltip: "From quick scripts to production ML — Python's my Swiss army knife." },
      { name: 'Java', tooltip: 'Enterprise-grade backend development with Spring ecosystem.' },
      { name: 'TypeScript', tooltip: 'Type-safe JavaScript for maintainable, scalable applications.' },
      { name: 'SQL', tooltip: 'Data modeling and query optimization that scales.' },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React', tooltip: "Building interfaces that feel instant, even when the data isn't." },
      { name: 'Spring Boot', tooltip: 'Production-ready Java backends with batteries included.' },
      { name: 'Firebase', tooltip: 'Real-time data without the server management headaches.' },
      { name: 'FastAPI', tooltip: 'Python APIs that are fast to build and fast to run.' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', tooltip: 'Ship it the same way everywhere. Every time.' },
      { name: 'Linux', tooltip: 'Command line fluency for real deployment environments.' },
      { name: 'Git/CI/CD', tooltip: 'Version control and automated pipelines that catch bugs before users do.' },
      { name: 'Jira', tooltip: 'Project management that keeps teams aligned and shipping.' },
    ],
  },
]
