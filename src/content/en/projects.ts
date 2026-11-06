import type { Project } from '../types'

// Migrated from the previous site's project cards and case-study modals.
// No screenshots by design (Laith, 2026-11-06): cards show the designed name panel instead.
export const projects: Project[] = [
  {
    slug: 'geekshub',
    title: 'GeeksHub',
    summary: 'Where university chaos becomes organized learning',
    badges: ['Capstone', 'AI-Powered'],
    tags: ['React', 'Python', 'RAG'],
    category: 'EducationalApplication',
    caseStudy: {
      tagline: 'Where university chaos becomes organized learning',
      problem:
        'University students juggle scattered resources — PDFs across WhatsApp groups, lecture notes lost in email threads, exam materials buried in course portals. The cognitive load of just finding materials kills study momentum.',
      solution:
        'GeeksHub centralizes all academic resources into one intelligent hub. An AI assistant (powered by RAG workflows) answers questions using course-specific context. Gamification elements keep students engaged and motivated through their academic journey.',
      impact: [
        'Reduced material search time from hours to seconds. Students report clearer study sessions and less pre-exam panic.',
      ],
      stack: ['React', 'Python', 'FastAPI', 'RAG Workflows', 'Vector DB'],
      features: [
        'Dashboard showing centralized course materials',
        'AI assistant answering course-specific questions',
        'Gamification leaderboard with achievement badges',
        'Mobile-responsive resource library',
      ],
      role: [],
    },
  },
  {
    slug: 'arabic-tutor',
    title: 'Arabic AI Tutor',
    summary: 'Your patient, always-available Arabic teacher',
    badges: ['EdTech', 'Chatbot'],
    tags: ['React', 'Pinecone', 'Firebase'],
    category: 'EducationalApplication',
    caseStudy: {
      tagline: 'Your patient, always-available Arabic teacher',
      problem:
        'Learning Arabic is notoriously difficult — complex grammar, dialect variations, and limited access to native speakers for practice. Traditional apps feel static and impersonal.',
      solution:
        "Built a RAG-based conversational tutor that adapts to each learner's level. The chatbot retrieves relevant grammar rules and vocabulary, then explains concepts through natural dialogue. Firebase handles user progress; Pinecone powers semantic search across Arabic learning materials.",
      impact: [
        'Learners practice Arabic conversation without judgment or scheduling constraints. Personalized explanations help concepts stick.',
      ],
      stack: ['React', 'Python', 'Firebase', 'Pinecone', 'RAG'],
      features: [
        'Chat interface with Arabic script rendering',
        'Grammar explanations with inline examples',
        'Progress tracking dashboard',
        'Vocabulary review with spaced repetition',
      ],
      role: [],
    },
  },
  {
    slug: 'ngo-social',
    title: 'NGO Social Platform',
    summary: 'Connecting communities through shared purpose',
    badges: ['Social Good'],
    tags: ['React', 'Firebase'],
    category: 'SocialNetworkingApplication',
    caseStudy: {
      tagline: 'Connecting communities through shared purpose',
      problem:
        'A local NGO needed to engage their community online but lacked technical resources. Their outreach was limited to physical events, missing digital-native volunteers entirely.',
      solution:
        'Designed and built a social platform with community features — event announcements, member profiles, discussion threads — alongside a compelling landing page that converts visitors into volunteers. Firebase powers real-time interactions.',
      impact: [
        'Improved clarity and accessibility for community engagement. Reduced friction between interest and action for potential volunteers.',
      ],
      stack: ['React', 'Firebase', 'Responsive Design'],
      features: [
        'Landing page hero with a clear value proposition',
        'Community feed with event cards',
        'Member profile pages',
        'Event registration flow',
      ],
      role: [],
    },
  },
  {
    slug: 'pep-club',
    title: 'Pep Club',
    summary: 'A bilingual Arabic/English e-commerce store for research peptides',
    badges: ['E-commerce', 'Bilingual'],
    tags: ['Next.js', 'Vercel', 'i18n'],
    category: 'BusinessApplication',
    links: { live: 'https://pep-club.vercel.app/ar' },
    caseStudy: {
      tagline: 'Peptides from trusted brands, in one place',
      problem:
        'Customers needed one place to browse research peptides by brand and category in Arabic or English, and to order without paying online.',
      solution:
        'A bilingual storefront in Arabic and English where customers browse the catalog by brand and category, filter by price, add products to a cart and order online with cash on delivery.',
      impact: [],
      stack: ['Next.js', 'Vercel', 'Arabic (RTL) + English i18n'],
      features: [
        'Arabic and English versions of every page',
        'Shop filters by brand, category and price',
        'Product pages with cart and cash-on-delivery ordering',
        'Step-by-step vial preparation guide',
        'Legal pages, cookie settings and a personal-data request page',
      ],
      role: [],
    },
  },
]
