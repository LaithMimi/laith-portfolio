import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Google Search Console verification
app.get('/googled00677178c1e649e.html', (c) => {
  return new Response('google-site-verification: googled00677178c1e649e.html', {
    headers: { 'Content-Type': 'text/html' }
  })
})

// ============================================================================
// BRAND CONCEPT
// ============================================================================
// "Systems that learn with you — building AI that educates while it evolves."
// 
// This concept captures Laith's focus on educational technology, agentic AI,
// and his passion for creating tools that adapt and grow alongside their users.

// ============================================================================
// VISUAL DIRECTION
// ============================================================================
// Color Palette:
// - Primary: #6366F1 (Indigo 500) - Tech-forward, trustworthy
// - Secondary: #8B5CF6 (Violet 500) - Creative, AI-themed
// - Accent: #06B6D4 (Cyan 500) - Fresh, educational
// - Dark: #0F172A (Slate 900) - Professional depth
// - Light: #F8FAFC (Slate 50) - Clean backgrounds
// - Gradient: Indigo → Violet → Cyan (diagonal flow)
//
// Typography:
// - Headlines: Inter (Bold/Black) - Modern, geometric
// - Body: Inter (Regular) - Readable, professional
// - Code/Tech: JetBrains Mono - Developer aesthetic
//
// Motion & Interaction:
// - Subtle parallax on hero
// - Cards with 3D tilt effect on hover
// - Staggered fade-in animations on scroll
// - Gradient blob animations in background
// - Smooth section transitions
// - Interactive skill pills with tooltips

// ============================================================================
// SITE STRUCTURE (Information Architecture)
// ============================================================================
// 1. Hero - Name, tagline, CTA
// 2. About - Professional summary with personality
// 3. Projects - Case studies with modals
// 4. Skills - Interactive skill cloud
// 5. Experience - Timeline format
// 6. Certifications - Card grid
// 7. Volunteering - Compact section
// 8. Contact - Clean form/links

// ============================================================================
// SEO + SOCIAL (ENHANCED)
// ============================================================================
const seo = {
  // Primary SEO
  title: "Laith Mimi | Software Engineer & AI Builder | EdTech Founder",
  description: "Laith Mimi is a Software Engineering student and Founder of Quest Solutions, specializing in Agentic AI, RAG systems, and full-stack development. Building educational technology that transforms how students learn with AI-powered tools like GeeksHub.",
  ogDescription: "Meet Laith Mimi — Software Engineer building AI-powered educational tools that learn with you. Founder of Quest Solutions, creator of GeeksHub, and passionate about making education smarter through technology.",
  keywords: "Laith Mimi, Software Engineer, AI Developer, Full Stack Developer, Educational Technology, EdTech, RAG, LangChain, React, Python, FastAPI, Quest Solutions, GeeksHub, Agentic AI, Machine Learning, Jerusalem, Israel, Azrieli College, SaaS, Startup Founder",
  
  // Additional SEO data
  author: "Laith Mimi",
  siteUrl: "https://laith-mimi-portfolio.pages.dev",
  twitterHandle: "@laithmimi",
  locale: "en_US",
  
  // Structured Data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Laith Mimi",
    "url": "https://laith-mimi-portfolio.pages.dev",
    "image": "https://laith-mimi-portfolio.pages.dev/static/laith-photo-nobg.png",
    "jobTitle": "Software Engineer & AI Builder",
    "description": "Software Engineering student and Founder of Quest Solutions, specializing in Agentic AI and educational technology.",
    "email": "Laithmimi03@gmail.com",
    "telephone": "+972-54-3600249",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jerusalem",
      "addressCountry": "Israel"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Azrieli College of Engineering",
      "url": "https://www.jce.ac.il"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Quest Solutions",
      "description": "SaaS agency focused on educational technology"
    },
    "knowsAbout": ["Artificial Intelligence", "Machine Learning", "RAG Systems", "Full Stack Development", "React", "Python", "Educational Technology", "LangChain", "FastAPI"],
    "sameAs": [
      "https://linkedin.com/in/laithmimi",
      "https://github.com/laithmimi"
    ]
  }
}

// ============================================================================
// COPY - HERO OPTIONS
// ============================================================================
// Headline Options:
// 1. "I build AI that teaches."
// 2. "Engineering systems that learn with you."
//
// Subheadline Options:
// 1. "Founder. Full-stack developer. Obsessed with making education smarter."
// 2. "From RAG pipelines to React interfaces — turning ideas into tools students actually use."
//
// CTA Labels:
// 1. "View My Work"
// 2. "Let's Connect"
// 3. "Download CV"

// ============================================================================
// CASE STUDIES
// ============================================================================
const caseStudies = {
  geekshub: {
    title: "GeeksHub",
    tagline: "Where university chaos becomes organized learning",
    problem: "University students juggle scattered resources — PDFs across WhatsApp groups, lecture notes lost in email threads, exam materials buried in course portals. The cognitive load of just finding materials kills study momentum.",
    solution: "GeeksHub centralizes all academic resources into one intelligent hub. An AI assistant (powered by RAG workflows) answers questions using course-specific context. Gamification elements keep students engaged and motivated through their academic journey.",
    impact: "Reduced material search time from hours to seconds. Students report clearer study sessions and less pre-exam panic. (Metrics TBD as product scales)",
    stack: ["React", "Python", "FastAPI", "RAG Workflows", "Vector DB"],
    screenshots: [
      "Dashboard view showing centralized course materials",
      "AI assistant answering a course-specific question",
      "Gamification leaderboard with achievement badges",
      "Mobile-responsive resource library"
    ]
  },
  arabicTutor: {
    title: "Arabic Chatbot AI Tutor",
    tagline: "Your patient, always-available Arabic teacher",
    problem: "Learning Arabic is notoriously difficult — complex grammar, dialect variations, and limited access to native speakers for practice. Traditional apps feel static and impersonal.",
    solution: "Built a RAG-based conversational tutor that adapts to each learner's level. The chatbot retrieves relevant grammar rules and vocabulary, then explains concepts through natural dialogue. Firebase handles user progress; Pinecone powers semantic search across Arabic learning materials.",
    impact: "Learners practice Arabic conversation without judgment or scheduling constraints. Personalized explanations help concepts stick. (User growth metrics TBD)",
    stack: ["React", "Python", "Firebase", "Pinecone", "RAG"],
    screenshots: [
      "Chat interface with Arabic script rendering",
      "Grammar explanation with inline examples",
      "Progress tracking dashboard",
      "Vocabulary review with spaced repetition"
    ]
  },
  ngoSocial: {
    title: "NGO Social Platform",
    tagline: "Connecting communities through shared purpose",
    problem: "A local NGO needed to engage their community online but lacked technical resources. Their outreach was limited to physical events, missing digital-native volunteers entirely.",
    solution: "Designed and built a social platform with community features — event announcements, member profiles, discussion threads — alongside a compelling landing page that converts visitors into volunteers. Firebase powers real-time interactions.",
    impact: "Improved clarity and accessibility for community engagement. Reduced friction between interest and action for potential volunteers. (Engagement metrics TBD)",
    stack: ["React", "Firebase", "Responsive Design"],
    screenshots: [
      "Landing page hero with clear value proposition",
      "Community feed with event cards",
      "Member profile page",
      "Event registration flow"
    ]
  }
}

// ============================================================================
// MICROCOPY SNIPPETS
// ============================================================================
const microcopy = {
  rag: "Teaching AI to cite its sources — retrieval-augmented generation for accurate, contextual answers.",
  langchain: "Orchestrating LLM workflows that feel like conversations, not command lines.",
  springAi: "Bringing AI capabilities into enterprise Java ecosystems.",
  promptEngineering: "Crafting the instructions that make AI useful, not just impressive.",
  react: "Building interfaces that feel instant, even when the data isn't.",
  python: "From quick scripts to production ML — Python's my Swiss army knife.",
  firebase: "Real-time data without the server management headaches.",
  docker: "Ship it the same way everywhere. Every time.",
  llmIntegration: "Connecting applications to AI brains — GPT, Claude, and custom models."
}

// Main portfolio HTML
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- ============================================
         ENHANCED SEO META TAGS
         ============================================ -->
    
    <!-- Primary Meta Tags -->
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}">
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    <meta name="author" content="${seo.author}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <meta name="bingbot" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${seo.siteUrl}">
    
    <!-- Language & Locale -->
    <meta name="language" content="English">
    <meta http-equiv="content-language" content="en">
    <link rel="alternate" hreflang="en" href="${seo.siteUrl}">
    
    <!-- ============================================
         OPEN GRAPH / FACEBOOK
         ============================================ -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${seo.siteUrl}">
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.ogDescription}">
    <meta property="og:image" content="${seo.siteUrl}/static/laith-photo-nobg.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Laith Mimi - Software Engineer & AI Builder">
    <meta property="og:site_name" content="Laith Mimi Portfolio">
    <meta property="og:locale" content="${seo.locale}">
    
    <!-- ============================================
         TWITTER CARD
         ============================================ -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${seo.siteUrl}">
    <meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.ogDescription}">
    <meta name="twitter:image" content="${seo.siteUrl}/static/laith-photo-nobg.png">
    <meta name="twitter:image:alt" content="Laith Mimi - Software Engineer & AI Builder">
    <meta name="twitter:creator" content="${seo.twitterHandle}">
    <meta name="twitter:site" content="${seo.twitterHandle}">
    
    <!-- ============================================
         LINKEDIN & PROFESSIONAL
         ============================================ -->
    <meta property="profile:first_name" content="Laith">
    <meta property="profile:last_name" content="Mimi">
    <meta property="profile:username" content="laithmimi">
    
    <!-- ============================================
         TECHNICAL SEO
         ============================================ -->
    <meta name="theme-color" content="#6366F1">
    <meta name="msapplication-TileColor" content="#6366F1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Laith Mimi">
    <meta name="application-name" content="Laith Mimi Portfolio">
    <meta name="format-detection" content="telephone=yes">
    
    <!-- ============================================
         FAVICON & ICONS
         ============================================ -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>">
    <link rel="apple-touch-icon" href="/static/laith-photo-nobg.png">
    
    <!-- ============================================
         STRUCTURED DATA (JSON-LD)
         ============================================ -->
    <script type="application/ld+json">
    ${JSON.stringify(seo.structuredData, null, 2)}
    </script>
    
    <!-- Additional Structured Data: WebSite -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Laith Mimi Portfolio",
      "url": "${seo.siteUrl}",
      "description": "${seo.description}",
      "author": {
        "@type": "Person",
        "name": "Laith Mimi"
      }
    }
    </script>
    
    <!-- Additional Structured Data: BreadcrumbList -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${seo.siteUrl}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "${seo.siteUrl}#projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "${seo.siteUrl}#contact"
        }
      ]
    }
    </script>
    
    <!-- ============================================
         PERFORMANCE & PRELOADING
         ============================================ -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
              primary: '#6366F1',
              secondary: '#8B5CF6',
              accent: '#06B6D4',
              dark: '#0F172A',
              light: '#F8FAFC',
            },
            animation: {
              'gradient': 'gradient 8s ease infinite',
              'float': 'float 6s ease-in-out infinite',
              'pulse-slow': 'pulse 4s ease-in-out infinite',
            },
            keyframes: {
              gradient: {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
              }
            }
          }
        }
      }
    </script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <style>
      html { scroll-behavior: smooth; }
      
      /* ============================================
         EXTRAORDINARY CREATIVE TRANSITIONS
         ============================================ */
      
      .gradient-text {
        background: linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .gradient-bg {
        background: linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4);
        background-size: 200% 200%;
        animation: gradient 8s ease infinite;
      }
      
      .glass {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.5;
        animation: float 8s ease-in-out infinite;
      }
      
      /* ============================================
         MAGNETIC BUTTON EFFECT
         ============================================ */
      .magnetic-btn {
        position: relative;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .magnetic-btn::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4);
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
        filter: blur(10px);
      }
      
      .magnetic-btn:hover::before {
        opacity: 0.7;
      }
      
      /* ============================================
         3D CARD TILT EFFECT
         ============================================ */
      .card-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .card-3d:hover {
        transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
        box-shadow: 
          0 25px 50px -12px rgba(99, 102, 241, 0.4),
          0 0 0 1px rgba(139, 92, 246, 0.3),
          inset 0 0 30px rgba(99, 102, 241, 0.1);
      }
      
      .card-3d::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%,
          transparent 100%
        );
        opacity: 0;
        transition: opacity 0.5s ease;
        border-radius: inherit;
        pointer-events: none;
      }
      
      .card-3d:hover::after {
        opacity: 1;
      }
      
      /* ============================================
         GLITCH TEXT EFFECT
         ============================================ */
      .glitch {
        position: relative;
      }
      
      .glitch::before,
      .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0F172A;
      }
      
      .glitch::before {
        left: 2px;
        text-shadow: -2px 0 #06B6D4;
        clip: rect(24px, 550px, 90px, 0);
        animation: glitch-anim 3s infinite linear alternate-reverse;
      }
      
      .glitch::after {
        left: -2px;
        text-shadow: -2px 0 #8B5CF6;
        clip: rect(85px, 550px, 140px, 0);
        animation: glitch-anim2 2s infinite linear alternate-reverse;
      }
      
      @keyframes glitch-anim {
        0% { clip: rect(30px, 9999px, 10px, 0); }
        10% { clip: rect(70px, 9999px, 130px, 0); }
        20% { clip: rect(10px, 9999px, 70px, 0); }
        30% { clip: rect(50px, 9999px, 100px, 0); }
        40% { clip: rect(20px, 9999px, 90px, 0); }
        50% { clip: rect(60px, 9999px, 40px, 0); }
        60% { clip: rect(80px, 9999px, 120px, 0); }
        70% { clip: rect(10px, 9999px, 60px, 0); }
        80% { clip: rect(40px, 9999px, 80px, 0); }
        90% { clip: rect(90px, 9999px, 30px, 0); }
        100% { clip: rect(5px, 9999px, 110px, 0); }
      }
      
      @keyframes glitch-anim2 {
        0% { clip: rect(65px, 9999px, 100px, 0); }
        10% { clip: rect(20px, 9999px, 70px, 0); }
        20% { clip: rect(90px, 9999px, 50px, 0); }
        30% { clip: rect(10px, 9999px, 80px, 0); }
        40% { clip: rect(50px, 9999px, 120px, 0); }
        50% { clip: rect(30px, 9999px, 60px, 0); }
        60% { clip: rect(70px, 9999px, 90px, 0); }
        70% { clip: rect(15px, 9999px, 110px, 0); }
        80% { clip: rect(85px, 9999px, 40px, 0); }
        90% { clip: rect(45px, 9999px, 75px, 0); }
        100% { clip: rect(25px, 9999px, 95px, 0); }
      }
      
      /* ============================================
         TEXT SPLIT REVEAL ANIMATION
         ============================================ */
      .split-text .char {
        display: inline-block;
        opacity: 0;
        transform: translateY(50px) rotateX(-90deg);
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .split-text.active .char {
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }
      
      /* ============================================
         MORPHING BLOB BACKGROUND
         ============================================ */
      .morph-blob {
        animation: morph 8s ease-in-out infinite;
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
      
      @keyframes morph {
        0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        50% { border-radius: 50% 60% 40% 60% / 40% 70% 40% 60%; }
        75% { border-radius: 40% 50% 60% 50% / 60% 40% 60% 50%; }
      }
      
      /* ============================================
         PARALLAX LAYERS
         ============================================ */
      .parallax-container {
        perspective: 1px;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
      }
      
      .parallax-layer {
        transform-style: preserve-3d;
      }
      
      /* ============================================
         REVEAL ANIMATIONS - MULTIPLE TYPES
         ============================================ */
      .reveal {
        opacity: 0;
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .reveal.active {
        opacity: 1;
      }
      
      /* Slide up */
      .reveal-up {
        transform: translateY(80px);
      }
      .reveal-up.active {
        transform: translateY(0);
      }
      
      /* Slide from left */
      .reveal-left {
        transform: translateX(-100px);
      }
      .reveal-left.active {
        transform: translateX(0);
      }
      
      /* Slide from right */
      .reveal-right {
        transform: translateX(100px);
      }
      .reveal-right.active {
        transform: translateX(0);
      }
      
      /* Scale up */
      .reveal-scale {
        transform: scale(0.8);
      }
      .reveal-scale.active {
        transform: scale(1);
      }
      
      /* Rotate in */
      .reveal-rotate {
        transform: rotate(-10deg) translateY(50px);
      }
      .reveal-rotate.active {
        transform: rotate(0) translateY(0);
      }
      
      /* Flip in */
      .reveal-flip {
        transform: perspective(1000px) rotateX(-80deg);
        transform-origin: top center;
      }
      .reveal-flip.active {
        transform: perspective(1000px) rotateX(0);
      }
      
      /* Blur in */
      .reveal-blur {
        filter: blur(20px);
        transform: translateY(30px);
      }
      .reveal-blur.active {
        filter: blur(0);
        transform: translateY(0);
      }
      
      /* ============================================
         STAGGER DELAYS FOR CHILDREN
         ============================================ */
      .stagger-children > *:nth-child(1) { transition-delay: 0.1s; }
      .stagger-children > *:nth-child(2) { transition-delay: 0.2s; }
      .stagger-children > *:nth-child(3) { transition-delay: 0.3s; }
      .stagger-children > *:nth-child(4) { transition-delay: 0.4s; }
      .stagger-children > *:nth-child(5) { transition-delay: 0.5s; }
      .stagger-children > *:nth-child(6) { transition-delay: 0.6s; }
      .stagger-children > *:nth-child(7) { transition-delay: 0.7s; }
      .stagger-children > *:nth-child(8) { transition-delay: 0.8s; }
      
      /* ============================================
         HOVER UNDERLINE EFFECT
         ============================================ */
      .hover-line {
        position: relative;
        display: inline-block;
      }
      
      .hover-line::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4);
        transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .hover-line:hover::after {
        width: 100%;
      }
      
      /* ============================================
         SKILL PILL ENHANCED
         ============================================ */
      .skill-pill {
        position: relative;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        overflow: hidden;
      }
      
      .skill-pill::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        transition: all 0.5s ease;
        border-radius: 50%;
      }
      
      .skill-pill:hover::before {
        width: 300%;
        height: 300%;
      }
      
      .skill-pill:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.5);
      }
      
      .skill-pill .tooltip {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        padding: 8px 12px;
        background: #0F172A;
        color: white;
        border-radius: 8px;
        font-size: 12px;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 50;
        margin-bottom: 8px;
        max-width: 250px;
        white-space: normal;
        text-align: center;
        border: 1px solid rgba(99, 102, 241, 0.3);
      }
      
      .skill-pill:hover .tooltip {
        visibility: visible;
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      
      /* ============================================
         TIMELINE ENHANCED
         ============================================ */
      .timeline-line {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #6366F1, #8B5CF6, #06B6D4);
        transform-origin: top;
        animation: timeline-grow 1.5s ease-out forwards;
      }
      
      @keyframes timeline-grow {
        from { transform: scaleY(0); }
        to { transform: scaleY(1); }
      }
      
      .timeline-dot {
        position: absolute;
        left: -5px;
        width: 12px;
        height: 12px;
        background: #6366F1;
        border-radius: 50%;
        border: 2px solid #0F172A;
        transition: all 0.3s ease;
        animation: pulse-dot 2s infinite;
      }
      
      @keyframes pulse-dot {
        0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
        50% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
      }
      
      .timeline-item:hover .timeline-dot {
        transform: scale(1.5);
        background: #8B5CF6;
      }
      
      /* ============================================
         MODAL ENHANCED
         ============================================ */
      .modal {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 100;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0px);
        transition: all 0.4s ease;
      }
      
      .modal.active {
        display: flex;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
      }
      
      .modal-content {
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        background: #1E293B;
        border-radius: 24px;
        padding: 32px;
        margin: 20px;
        transform: scale(0.9) translateY(50px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(99, 102, 241, 0.2);
        box-shadow: 
          0 25px 80px -20px rgba(99, 102, 241, 0.3),
          0 0 40px -10px rgba(139, 92, 246, 0.2);
      }
      
      .modal.active .modal-content {
        transform: scale(1) translateY(0);
        opacity: 1;
      }
      
      /* ============================================
         PHOTO FLOAT ANIMATION
         ============================================ */
      .photo-float {
        animation: photo-float 6s ease-in-out infinite;
      }
      
      @keyframes photo-float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(1deg); }
        50% { transform: translateY(-5px) rotate(-1deg); }
        75% { transform: translateY(-15px) rotate(0.5deg); }
      }
      
      /* ============================================
         CURSOR TRAIL EFFECT
         ============================================ */
      .cursor-trail {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
      }
      
      /* ============================================
         SECTION DIVIDER WAVE
         ============================================ */
      .wave-divider {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
      }
      
      .wave-divider svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 80px;
      }
      
      .wave-divider .shape-fill {
        fill: rgba(99, 102, 241, 0.05);
      }
      
      /* ============================================
         TYPING CURSOR
         ============================================ */
      .typing-cursor::after {
        content: '|';
        animation: blink 1s step-end infinite;
        color: #6366F1;
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      /* ============================================
         NEON GLOW EFFECT
         ============================================ */
      .neon-glow {
        text-shadow: 
          0 0 5px rgba(99, 102, 241, 0.5),
          0 0 10px rgba(99, 102, 241, 0.4),
          0 0 20px rgba(99, 102, 241, 0.3),
          0 0 40px rgba(99, 102, 241, 0.2);
        animation: neon-pulse 2s ease-in-out infinite alternate;
      }
      
      @keyframes neon-pulse {
        from {
          text-shadow: 
            0 0 5px rgba(99, 102, 241, 0.5),
            0 0 10px rgba(99, 102, 241, 0.4),
            0 0 20px rgba(99, 102, 241, 0.3),
            0 0 40px rgba(99, 102, 241, 0.2);
        }
        to {
          text-shadow: 
            0 0 10px rgba(139, 92, 246, 0.6),
            0 0 20px rgba(139, 92, 246, 0.5),
            0 0 40px rgba(139, 92, 246, 0.4),
            0 0 80px rgba(139, 92, 246, 0.3);
        }
      }
      
      /* ============================================
         CUSTOM SCROLLBAR ENHANCED
         ============================================ */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: #0F172A;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #6366F1, #8B5CF6, #06B6D4);
        border-radius: 5px;
        border: 2px solid #0F172A;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #8B5CF6, #06B6D4, #6366F1);
      }
      
      /* ============================================
         PAGE TRANSITIONS
         ============================================ */
      .page-transition {
        position: fixed;
        inset: 0;
        background: linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4);
        z-index: 9999;
        transform: translateY(100%);
        transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
      }
      
      .page-transition.active {
        transform: translateY(0);
      }
      
      /* ============================================
         MARQUEE TEXT
         ============================================ */
      .marquee {
        overflow: hidden;
        white-space: nowrap;
      }
      
      .marquee-content {
        display: inline-block;
        animation: marquee 20s linear infinite;
      }
      
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      
      /* ============================================
         BUTTON RIPPLE EFFECT
         ============================================ */
      .ripple {
        position: relative;
        overflow: hidden;
      }
      
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      /* ============================================
         FLOATING PARTICLES
         ============================================ */
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #6366F1;
        border-radius: 50%;
        animation: particle-float 10s infinite ease-in-out;
      }
      
      @keyframes particle-float {
        0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(50px) scale(0); opacity: 0; }
      }
    </style>
</head>
<body class="bg-dark text-white font-sans overflow-x-hidden">
    <!-- Floating Particles Background -->
    <div id="particles" class="fixed inset-0 overflow-hidden pointer-events-none z-0"></div>
    
    <!-- Morphing Background blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="blob morph-blob w-96 h-96 bg-primary/30 top-0 -left-48" style="animation-delay: 0s;"></div>
        <div class="blob morph-blob w-80 h-80 bg-secondary/30 top-1/3 right-0" style="animation-delay: 2s;"></div>
        <div class="blob morph-blob w-72 h-72 bg-accent/20 bottom-0 left-1/3" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Custom Cursor -->
    <div id="cursor" class="cursor-trail hidden md:block" style="background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);"></div>
    <div id="cursor-follower" class="cursor-trail hidden md:block" style="width: 40px; height: 40px; background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass">
        <div class="max-w-6xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <a href="#" class="font-bold text-2xl gradient-text neon-glow magnetic-btn">LM</a>
                <div class="hidden md:flex items-center gap-8">
                    <a href="#about" class="text-gray-300 hover:text-white transition-colors hover-line">About</a>
                    <a href="#projects" class="text-gray-300 hover:text-white transition-colors hover-line">Projects</a>
                    <a href="#skills" class="text-gray-300 hover:text-white transition-colors hover-line">Skills</a>
                    <a href="#experience" class="text-gray-300 hover:text-white transition-colors hover-line">Experience</a>
                    <a href="#contact" class="gradient-bg px-4 py-2 rounded-full text-white font-medium magnetic-btn ripple">Let's Connect</a>
                </div>
                <button id="mobileMenuBtn" class="md:hidden text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobileMenu" class="hidden md:hidden glass border-t border-white/10">
            <div class="px-6 py-4 flex flex-col gap-4">
                <a href="#about" class="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Skills</a>
                <a href="#experience" class="text-gray-300 hover:text-white transition-colors">Experience</a>
                <a href="#contact" class="gradient-bg px-4 py-2 rounded-full text-white font-medium text-center">Let's Connect</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left side - Text content -->
                <div class="text-center md:text-left order-2 md:order-1">
                    <div class="reveal reveal-blur inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6" style="transition-delay: 0.1s;">
                        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span class="text-sm text-gray-300">Open to opportunities</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight reveal reveal-up" style="transition-delay: 0.2s;">
                        I build <span class="gradient-text neon-glow" data-text="AI that teaches.">AI that teaches.</span>
                    </h1>
                    
                    <p class="text-xl md:text-2xl text-gray-400 mb-8 reveal reveal-up" style="transition-delay: 0.4s;">
                        Founder. Full-stack developer. Obsessed with making education smarter.<span class="typing-cursor"></span>
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 reveal reveal-up" style="transition-delay: 0.6s;">
                        <a href="#projects" class="gradient-bg px-8 py-4 rounded-full text-white font-semibold magnetic-btn ripple flex items-center gap-2 transform hover:scale-105 transition-transform">
                            <i class="fas fa-rocket"></i>
                            View My Work
                        </a>
                        <a href="#contact" class="glass px-8 py-4 rounded-full text-white font-semibold magnetic-btn ripple flex items-center gap-2 transform hover:scale-105 hover:bg-white/10 transition-all">
                            <i class="fas fa-paper-plane"></i>
                            Let's Connect
                        </a>
                    </div>
                    
                    <a href="/static/cv.pdf" download class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 px-4 py-2 reveal reveal-up hover-line" style="transition-delay: 0.8s;">
                        <i class="fas fa-download"></i>
                        Download CV
                    </a>
                </div>
                
                <!-- Right side - Photo -->
                <div class="flex justify-center md:justify-end order-1 md:order-2 reveal reveal-scale" style="transition-delay: 0.3s;">
                    <div class="relative photo-float">
                        <!-- Gradient glow behind photo -->
                        <div class="absolute inset-0 gradient-bg morph-blob blur-3xl opacity-40 scale-110"></div>
                        
                        <!-- Photo container -->
                        <div class="relative w-72 md:w-80 lg:w-96 transform hover:scale-105 transition-transform duration-500">
                            <img 
                                src="/static/laith-photo-nobg.png" 
                                alt="Laith Mimi - Software Engineer & AI Builder"
                                class="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                        
                        <!-- Floating badges around photo -->
                        <div class="absolute -top-4 -right-4 glass px-3 py-2 rounded-full text-sm font-medium animate-float card-3d">
                            <i class="fas fa-brain text-primary mr-1"></i> AI Builder
                        </div>
                        <div class="absolute -bottom-2 -left-4 glass px-3 py-2 rounded-full text-sm font-medium animate-float card-3d" style="animation-delay: 1s;">
                            <i class="fas fa-code text-secondary mr-1"></i> Full-Stack
                        </div>
                        <div class="absolute top-1/2 -right-8 glass px-3 py-2 rounded-full text-sm font-medium animate-float hidden lg:block card-3d" style="animation-delay: 2s;">
                            <i class="fas fa-rocket text-accent mr-1"></i> Founder
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" class="text-gray-500 hover:text-white transition-colors">
                    <i class="fas fa-chevron-down text-2xl"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-6 relative overflow-hidden">
        <!-- Wave Divider Top -->
        <div class="wave-divider" style="top: 0; transform: rotate(180deg);">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="reveal reveal-left">
                    <h2 class="text-4xl font-bold mb-6">
                        About <span class="gradient-text neon-glow">Me</span>
                    </h2>
                    <p class="text-gray-400 text-lg mb-6 leading-relaxed reveal reveal-up" style="transition-delay: 0.2s;">
                        I'm a fourth-year Software Engineering student at Azrieli College of Engineering, but calling myself "just a student" would be selling it short. I founded Quest Solutions — a SaaS agency focused on educational technology and digital transformation.
                    </p>
                    <p class="text-gray-400 text-lg mb-6 leading-relaxed reveal reveal-up" style="transition-delay: 0.3s;">
                        My obsession? <span class="text-white font-medium">Making AI that actually helps people learn.</span> From RAG-powered tutors to gamified study platforms, I build tools that adapt to users instead of demanding users adapt to them.
                    </p>
                    <p class="text-gray-400 text-lg leading-relaxed reveal reveal-up" style="transition-delay: 0.4s;">
                        When I'm not coding, I'm coordinating hackathons with Datahack, teaching Arabic through AI-enhanced methods at Blend.ar, or figuring out how to make the next project even more impactful.
                    </p>
                </div>
                
                <div class="reveal reveal-right" style="transition-delay: 0.2s;">
                    <div class="glass rounded-2xl p-8 card-3d">
                        <div class="grid grid-cols-2 gap-6 stagger-children">
                            <div class="text-center reveal reveal-scale">
                                <div class="text-4xl font-bold gradient-text mb-2 counter" data-target="3">0</div>
                                <div class="text-gray-400 text-sm">AI Projects Shipped</div>
                            </div>
                            <div class="text-center reveal reveal-scale">
                                <div class="text-4xl font-bold gradient-text mb-2 counter" data-target="2">0</div>
                                <div class="text-gray-400 text-sm">Companies Founded/Led</div>
                            </div>
                            <div class="text-center reveal reveal-scale">
                                <div class="text-4xl font-bold gradient-text mb-2 counter" data-target="3">0</div>
                                <div class="text-gray-400 text-sm">Languages Spoken</div>
                            </div>
                            <div class="text-center reveal reveal-scale">
                                <div class="text-4xl font-bold gradient-text mb-2 counter" data-target="4">0</div>
                                <div class="text-gray-400 text-sm">Years Engineering</div>
                            </div>
                        </div>
                        
                        <div class="mt-8 pt-6 border-t border-white/10 reveal reveal-up" style="transition-delay: 0.5s;">
                            <div class="flex items-center gap-4 text-gray-400">
                                <i class="fas fa-graduation-cap text-primary text-2xl"></i>
                                <div>
                                    <div class="text-white font-medium">B.Sc. Software Engineering</div>
                                    <div class="text-sm">Azrieli College of Engineering • 2021-2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 px-6 relative overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 reveal reveal-flip">
                    Featured <span class="gradient-text neon-glow">Projects</span>
                </h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto reveal reveal-blur" style="transition-delay: 0.2s;">
                    Real problems. Real solutions. Real impact on how people learn and connect.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- GeeksHub -->
                <div class="glass rounded-2xl overflow-hidden card-3d reveal reveal-up cursor-pointer" onclick="openModal('geekshub')" style="transition-delay: 0.1s;">
                    <div class="h-48 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden group">
                        <i class="fas fa-graduation-cap text-6xl text-white/50 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></i>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Capstone</span>
                            <span class="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">AI</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">GeeksHub</h3>
                        <p class="text-gray-400 text-sm mb-4">Where university chaos becomes organized learning</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-gray-500">React</span>
                            <span class="text-xs text-gray-500">•</span>
                            <span class="text-xs text-gray-500">Python</span>
                            <span class="text-xs text-gray-500">•</span>
                            <span class="text-xs text-gray-500">RAG</span>
                        </div>
                    </div>
                </div>
                
                <!-- Arabic Tutor -->
                <div class="glass rounded-2xl overflow-hidden card-3d reveal reveal-up cursor-pointer" style="transition-delay: 0.2s;" onclick="openModal('arabic')">
                    <div class="h-48 bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center relative overflow-hidden group">
                        <i class="fas fa-comments text-6xl text-white/50 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></i>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">EdTech</span>
                            <span class="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">Chatbot</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Arabic AI Tutor</h3>
                        <p class="text-gray-400 text-sm mb-4">Your patient, always-available Arabic teacher</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-gray-500">React</span>
                            <span class="text-xs text-gray-500">•</span>
                            <span class="text-xs text-gray-500">Pinecone</span>
                            <span class="text-xs text-gray-500">•</span>
                            <span class="text-xs text-gray-500">Firebase</span>
                        </div>
                    </div>
                </div>
                
                <!-- NGO Platform -->
                <div class="glass rounded-2xl overflow-hidden card-3d reveal reveal-up cursor-pointer" style="transition-delay: 0.3s;" onclick="openModal('ngo')">
                    <div class="h-48 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center relative overflow-hidden group">
                        <i class="fas fa-users text-6xl text-white/50 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></i>
                        <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">Social Good</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">NGO Social Platform</h3>
                        <p class="text-gray-400 text-sm mb-4">Connecting communities through shared purpose</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-gray-500">React</span>
                            <span class="text-xs text-gray-500">•</span>
                            <span class="text-xs text-gray-500">Firebase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 px-6 relative overflow-hidden">
        <!-- Wave Divider -->
        <div class="wave-divider" style="top: 0; transform: rotate(180deg);">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" class="shape-fill" style="opacity: 0.5;"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" class="shape-fill" style="opacity: 0.3;"></path>
            </svg>
        </div>
        
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 reveal reveal-rotate">
                    Technical <span class="gradient-text neon-glow">Arsenal</span>
                </h2>
                <p class="text-gray-400 text-lg reveal reveal-blur" style="transition-delay: 0.2s;">Hover over any skill to see what it means in practice</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- AI & ML -->
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform">
                        <i class="fas fa-brain text-xl text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-4">AI & ML</h3>
                    <div class="flex flex-wrap gap-2">
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            RAG
                            <div class="tooltip">${microcopy.rag}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            LangChain
                            <div class="tooltip">${microcopy.langchain}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Spring AI
                            <div class="tooltip">${microcopy.springAi}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            LLM Integration
                            <div class="tooltip">${microcopy.llmIntegration}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Prompt Engineering
                            <div class="tooltip">${microcopy.promptEngineering}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Languages -->
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform">
                        <i class="fas fa-code text-xl text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-4">Languages</h3>
                    <div class="flex flex-wrap gap-2">
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-secondary/20 transition-colors">
                            Python
                            <div class="tooltip">${microcopy.python}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-secondary/20 transition-colors">
                            Java
                            <div class="tooltip">Enterprise-grade backend development with Spring ecosystem.</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-secondary/20 transition-colors">
                            TypeScript
                            <div class="tooltip">Type-safe JavaScript for maintainable, scalable applications.</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-secondary/20 transition-colors">
                            SQL
                            <div class="tooltip">Data modeling and query optimization that scales.</div>
                        </div>
                    </div>
                </div>
                
                <!-- Web Dev -->
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.3s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform">
                        <i class="fas fa-globe text-xl text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-4">Web Development</h3>
                    <div class="flex flex-wrap gap-2">
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-accent/20 transition-colors">
                            React
                            <div class="tooltip">${microcopy.react}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-accent/20 transition-colors">
                            Spring Boot
                            <div class="tooltip">Production-ready Java backends with batteries included.</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-accent/20 transition-colors">
                            Firebase
                            <div class="tooltip">${microcopy.firebase}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-accent/20 transition-colors">
                            FastAPI
                            <div class="tooltip">Python APIs that are fast to build and fast to run.</div>
                        </div>
                    </div>
                </div>
                
                <!-- DevOps -->
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.4s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform">
                        <i class="fas fa-server text-xl text-white"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-4">DevOps & Tools</h3>
                    <div class="flex flex-wrap gap-2">
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Docker
                            <div class="tooltip">${microcopy.docker}</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Linux
                            <div class="tooltip">Command line fluency for real deployment environments.</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Git/CI/CD
                            <div class="tooltip">Version control and automated pipelines that catch bugs before users do.</div>
                        </div>
                        <div class="skill-pill px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors">
                            Jira
                            <div class="tooltip">Project management that keeps teams aligned and shipping.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-24 px-6 relative overflow-hidden">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 reveal reveal-flip">
                    Experience <span class="gradient-text neon-glow">Timeline</span>
                </h2>
            </div>
            
            <div class="relative pl-8">
                <div class="timeline-line"></div>
                
                <!-- Quest Solutions -->
                <div class="timeline-item relative pb-12 reveal reveal-left" style="transition-delay: 0.1s;">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4 card-3d">
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <span class="gradient-bg px-3 py-1 rounded-full text-xs font-medium">Founder</span>
                            <span class="text-gray-500 text-sm">Nov 2025 – Present</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Quest Solutions</h3>
                        <p class="text-gray-400 mb-4">
                            Founded and leading a SaaS agency focused on educational technology and digital transformation. Directing the development of flagship products including GeeksHub, while driving marketing and brand strategy through creative storytelling.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-primary">Product Leadership</span>
                            <span class="text-xs text-secondary">SaaS</span>
                            <span class="text-xs text-accent">EdTech</span>
                        </div>
                    </div>
                </div>
                
                <!-- WeGrw Solutions -->
                <div class="timeline-item relative pb-12 reveal reveal-left" style="transition-delay: 0.3s;">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4 card-3d">
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <span class="gradient-bg px-3 py-1 rounded-full text-xs font-medium">Project Manager & Instructor</span>
                            <span class="text-gray-500 text-sm">Aug 2025 – Present</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">WeGrw Solutions</h3>
                        <p class="text-gray-400 mb-4">
                            Managing operational strategies and resource allocation. Leading team workflows to meet deadlines while maintaining quality. Handling stakeholder communication and project coordination.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-primary">Operations</span>
                            <span class="text-xs text-secondary">Team Leadership</span>
                            <span class="text-xs text-accent">Strategy</span>
                        </div>
                    </div>
                </div>
                
                <!-- Blend.ar -->
                <div class="timeline-item relative reveal reveal-left" style="transition-delay: 0.5s;">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4 card-3d">
                        <div class="flex flex-wrap items-center gap-3 mb-3">
                            <span class="gradient-bg px-3 py-1 rounded-full text-xs font-medium">Arabic Teacher</span>
                            <span class="text-gray-500 text-sm">2024 – Present</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Blend.ar</h3>
                        <p class="text-gray-400 mb-4">
                            Providing personalized Arabic lessons with AI-enhanced learning methods. Integrating technology tools to create adaptive, engaging language education experiences.
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="text-xs text-primary">AI-Enhanced Learning</span>
                            <span class="text-xs text-secondary">Education</span>
                            <span class="text-xs text-accent">Language</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certifications Section -->
    <section id="certifications" class="py-24 px-6 relative overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 reveal reveal-rotate">
                    Certifications & <span class="gradient-text neon-glow">Training</span>
                </h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fas fa-robot text-primary text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-2">Agentic AI Bootcamp</h3>
                    <p class="text-gray-400 text-sm mb-2">Brightway</p>
                    <p class="text-gray-500 text-xs">Aug 2025 – Oct 2025</p>
                </div>
                
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fas fa-heartbeat text-secondary text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-2">AI in Healthcare</h3>
                    <p class="text-gray-400 text-sm mb-2">JINNOVATE</p>
                    <p class="text-gray-500 text-xs">Dec 2024 – Jan 2025</p>
                </div>
                
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-up" style="transition-delay: 0.3s;">
                    <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fas fa-bug text-accent text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-2">QA & Automation</h3>
                    <p class="text-gray-400 text-sm mb-2">Ecom Academy (Playwright)</p>
                    <p class="text-gray-500 text-xs">July 2023 – April 2024</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Volunteering Section -->
    <section id="volunteering" class="py-24 px-6 relative overflow-hidden">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 reveal reveal-blur">
                    Giving <span class="gradient-text neon-glow">Back</span>
                </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-left" style="transition-delay: 0.1s;">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform">
                            <i class="fas fa-laptop-code text-white"></i>
                        </div>
                        <div>
                            <h3 class="font-bold mb-1">Datahack</h3>
                            <p class="text-primary text-sm mb-2">Project Coordinator • Jan 2026 – Present</p>
                            <p class="text-gray-400 text-sm">Coordinating student-to-market programs and hackathons, connecting tech talent with real-world challenges.</p>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6 card-3d reveal reveal-right" style="transition-delay: 0.2s;">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform">
                            <i class="fas fa-hands-helping text-white"></i>
                        </div>
                        <div>
                            <h3 class="font-bold mb-1">PERACH Program</h3>
                            <p class="text-secondary text-sm mb-2">School Guide • 2023 – 2024</p>
                            <p class="text-gray-400 text-sm">School enrichment program guide, mentoring students and supporting their educational journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 px-6 relative overflow-hidden">
        <!-- Wave Divider Top -->
        <div class="wave-divider" style="top: 0; transform: rotate(180deg);">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        
        <div class="max-w-4xl mx-auto text-center">
            <div>
                <h2 class="text-4xl font-bold mb-4 reveal reveal-flip">
                    Let's <span class="gradient-text neon-glow">Connect</span>
                </h2>
                <p class="text-gray-400 text-lg mb-12 max-w-2xl mx-auto reveal reveal-blur" style="transition-delay: 0.2s;">
                    Have a project in mind? Want to discuss AI, education tech, or just say hi? I'd love to hear from you.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <a href="mailto:Laithmimi03@gmail.com" class="glass rounded-2xl p-6 card-3d reveal reveal-up magnetic-btn" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">Email</h3>
                    <p class="text-gray-400 text-sm">Laithmimi03@gmail.com</p>
                </a>
                
                <a href="tel:054-3600249" class="glass rounded-2xl p-6 card-3d reveal reveal-up magnetic-btn" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fas fa-phone text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">Phone</h3>
                    <p class="text-gray-400 text-sm">054-3600249</p>
                </a>
                
                <a href="https://linkedin.com/in/laithmimi" target="_blank" class="glass rounded-2xl p-6 card-3d reveal reveal-up magnetic-btn" style="transition-delay: 0.3s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fab fa-linkedin text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">LinkedIn</h3>
                    <p class="text-gray-400 text-sm">Connect with me</p>
                </a>
                
                <a href="https://github.com/laithmimi" target="_blank" class="glass rounded-2xl p-6 card-3d reveal reveal-up magnetic-btn" style="transition-delay: 0.4s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 hover:scale-110 transition-all">
                        <i class="fab fa-github text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">GitHub</h3>
                    <p class="text-gray-400 text-sm">See my code</p>
                </a>
            </div>
            
            <!-- Languages -->
            <div class="glass rounded-2xl p-6 inline-flex items-center gap-6 reveal" style="transition-delay: 0.4s;">
                <span class="text-gray-400 text-sm">I speak:</span>
                <div class="flex items-center gap-4">
                    <span class="flex items-center gap-2">
                        <span class="text-2xl">🇸🇦</span>
                        <span class="text-sm">Arabic <span class="text-gray-500">(Native)</span></span>
                    </span>
                    <span class="flex items-center gap-2">
                        <span class="text-2xl">🇬🇧</span>
                        <span class="text-sm">English <span class="text-gray-500">(Fluent)</span></span>
                    </span>
                    <span class="flex items-center gap-2">
                        <span class="text-2xl">🇮🇱</span>
                        <span class="text-sm">Hebrew <span class="text-gray-500">(Excellent)</span></span>
                    </span>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-white/10">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-gray-500 text-sm">
                © 2025 Laith Mimi. Built with 
                <i class="fas fa-heart text-red-500"></i> 
                and lots of coffee.
            </p>
            <div class="flex items-center gap-6">
                <a href="https://linkedin.com/in/laithmimi" target="_blank" class="text-gray-500 hover:text-white transition-colors">
                    <i class="fab fa-linkedin text-xl"></i>
                </a>
                <a href="https://github.com/laithmimi" target="_blank" class="text-gray-500 hover:text-white transition-colors">
                    <i class="fab fa-github text-xl"></i>
                </a>
                <a href="mailto:Laithmimi03@gmail.com" class="text-gray-500 hover:text-white transition-colors">
                    <i class="fas fa-envelope text-xl"></i>
                </a>
            </div>
        </div>
    </footer>

    <!-- Project Modals -->
    <!-- GeeksHub Modal -->
    <div id="modal-geekshub" class="modal" onclick="if(event.target === this) closeModal()">
        <div class="modal-content">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Capstone Project</span>
                <span class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">AI-Powered</span>
            </div>
            <h2 class="text-3xl font-bold mb-2">GeeksHub</h2>
            <p class="text-gray-400 mb-8">Where university chaos becomes organized learning</p>
            
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold text-primary mb-2">
                        <i class="fas fa-exclamation-circle mr-2"></i>Problem
                    </h3>
                    <p class="text-gray-300">University students juggle scattered resources — PDFs across WhatsApp groups, lecture notes lost in email threads, exam materials buried in course portals. The cognitive load of just finding materials kills study momentum.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-secondary mb-2">
                        <i class="fas fa-lightbulb mr-2"></i>Solution
                    </h3>
                    <p class="text-gray-300">GeeksHub centralizes all academic resources into one intelligent hub. An AI assistant (powered by RAG workflows) answers questions using course-specific context. Gamification elements keep students engaged and motivated through their academic journey.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-accent mb-2">
                        <i class="fas fa-chart-line mr-2"></i>Impact
                    </h3>
                    <p class="text-gray-300">Reduced material search time from hours to seconds. Students report clearer study sessions and less pre-exam panic. (Metrics TBD as product scales)</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-layer-group mr-2"></i>Tech Stack
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">FastAPI</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">RAG Workflows</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Vector DB</span>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-images mr-2"></i>Key Screenshots
                    </h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-th-large text-2xl mb-2"></i>
                            <p>Dashboard with centralized materials</p>
                        </div>
                        <div class="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-robot text-2xl mb-2"></i>
                            <p>AI assistant answering questions</p>
                        </div>
                        <div class="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-trophy text-2xl mb-2"></i>
                            <p>Gamification leaderboard</p>
                        </div>
                        <div class="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-mobile-alt text-2xl mb-2"></i>
                            <p>Mobile-responsive library</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Arabic Tutor Modal -->
    <div id="modal-arabic" class="modal" onclick="if(event.target === this) closeModal()">
        <div class="modal-content">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">EdTech</span>
                <span class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Chatbot</span>
            </div>
            <h2 class="text-3xl font-bold mb-2">Arabic Chatbot AI Tutor</h2>
            <p class="text-gray-400 mb-8">Your patient, always-available Arabic teacher</p>
            
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold text-primary mb-2">
                        <i class="fas fa-exclamation-circle mr-2"></i>Problem
                    </h3>
                    <p class="text-gray-300">Learning Arabic is notoriously difficult — complex grammar, dialect variations, and limited access to native speakers for practice. Traditional apps feel static and impersonal.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-secondary mb-2">
                        <i class="fas fa-lightbulb mr-2"></i>Solution
                    </h3>
                    <p class="text-gray-300">Built a RAG-based conversational tutor that adapts to each learner's level. The chatbot retrieves relevant grammar rules and vocabulary, then explains concepts through natural dialogue. Firebase handles user progress; Pinecone powers semantic search across Arabic learning materials.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-accent mb-2">
                        <i class="fas fa-chart-line mr-2"></i>Impact
                    </h3>
                    <p class="text-gray-300">Learners practice Arabic conversation without judgment or scheduling constraints. Personalized explanations help concepts stick. (User growth metrics TBD)</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-layer-group mr-2"></i>Tech Stack
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Pinecone</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">RAG</span>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-images mr-2"></i>Key Screenshots
                    </h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-comments text-2xl mb-2"></i>
                            <p>Chat interface with Arabic script</p>
                        </div>
                        <div class="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-book text-2xl mb-2"></i>
                            <p>Grammar explanation view</p>
                        </div>
                        <div class="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-chart-pie text-2xl mb-2"></i>
                            <p>Progress tracking dashboard</p>
                        </div>
                        <div class="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-redo text-2xl mb-2"></i>
                            <p>Vocabulary spaced repetition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NGO Modal -->
    <div id="modal-ngo" class="modal" onclick="if(event.target === this) closeModal()">
        <div class="modal-content">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Social Good</span>
            </div>
            <h2 class="text-3xl font-bold mb-2">NGO Social Platform</h2>
            <p class="text-gray-400 mb-8">Connecting communities through shared purpose</p>
            
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold text-primary mb-2">
                        <i class="fas fa-exclamation-circle mr-2"></i>Problem
                    </h3>
                    <p class="text-gray-300">A local NGO needed to engage their community online but lacked technical resources. Their outreach was limited to physical events, missing digital-native volunteers entirely.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-secondary mb-2">
                        <i class="fas fa-lightbulb mr-2"></i>Solution
                    </h3>
                    <p class="text-gray-300">Designed and built a social platform with community features — event announcements, member profiles, discussion threads — alongside a compelling landing page that converts visitors into volunteers. Firebase powers real-time interactions.</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-accent mb-2">
                        <i class="fas fa-chart-line mr-2"></i>Impact
                    </h3>
                    <p class="text-gray-300">Improved clarity and accessibility for community engagement. Reduced friction between interest and action for potential volunteers. (Engagement metrics TBD)</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-layer-group mr-2"></i>Tech Stack
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Responsive Design</span>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-images mr-2"></i>Key Screenshots
                    </h3>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-home text-2xl mb-2"></i>
                            <p>Landing page hero</p>
                        </div>
                        <div class="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-rss text-2xl mb-2"></i>
                            <p>Community feed</p>
                        </div>
                        <div class="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-user text-2xl mb-2"></i>
                            <p>Member profile page</p>
                        </div>
                        <div class="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg p-4 text-center text-sm text-gray-400">
                            <i class="fas fa-calendar-check text-2xl mb-2"></i>
                            <p>Event registration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // ============================================
        // EXTRAORDINARY CREATIVE ANIMATIONS
        // ============================================
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // ============================================
        // CUSTOM CURSOR TRAIL
        // ============================================
        const cursor = document.getElementById('cursor');
        const cursorFollower = document.getElementById('cursor-follower');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            // Smooth cursor follow
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            if (cursor) {
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
            }
            if (cursorFollower) {
                cursorFollower.style.left = followerX + 'px';
                cursorFollower.style.top = followerY + 'px';
            }
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Cursor effects on interactive elements
        document.querySelectorAll('a, button, .card-3d, .magnetic-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                if (cursorFollower) cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                if (cursorFollower) cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // ============================================
        // FLOATING PARTICLES
        // ============================================
        const particlesContainer = document.getElementById('particles');
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            
            const colors = ['#6366F1', '#8B5CF6', '#06B6D4'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            if (particlesContainer) {
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 15000);
            }
        }
        
        // Create particles periodically
        setInterval(createParticle, 500);
        // Create initial particles
        for (let i = 0; i < 20; i++) {
            setTimeout(createParticle, i * 100);
        }
        
        // ============================================
        // SCROLL REVEAL ANIMATION
        // ============================================
        const reveals = document.querySelectorAll('.reveal');
        
        function checkReveals() {
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 150;
                
                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', checkReveals);
        window.addEventListener('load', checkReveals);
        
        // ============================================
        // COUNTER ANIMATION
        // ============================================
        const counters = document.querySelectorAll('.counter');
        
        function animateCounters() {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const windowHeight = window.innerHeight;
                const elementTop = counter.getBoundingClientRect().top;
                
                if (elementTop < windowHeight - 100 && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    let count = 0;
                    const increment = target / 30;
                    
                    const updateCount = () => {
                        count += increment;
                        if (count < target) {
                            counter.innerText = Math.ceil(count) + '+';
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target + '+';
                        }
                    };
                    updateCount();
                }
            });
        }
        
        window.addEventListener('scroll', animateCounters);
        window.addEventListener('load', animateCounters);
        
        // ============================================
        // MAGNETIC BUTTON EFFECT
        // ============================================
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
        
        // ============================================
        // RIPPLE EFFECT ON BUTTONS
        // ============================================
        document.querySelectorAll('.ripple').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple-effect';
                ripple.style.left = (e.clientX - rect.left) + 'px';
                ripple.style.top = (e.clientY - rect.top) + 'px';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // ============================================
        // 3D CARD TILT EFFECT
        // ============================================
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
        
        // ============================================
        // PARALLAX SCROLL EFFECT
        // ============================================
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Parallax blobs
            document.querySelectorAll('.blob').forEach((blob, index) => {
                const speed = 0.1 + (index * 0.05);
                blob.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
            });
        });
        
        // ============================================
        // NAVBAR SCROLL EFFECT
        // ============================================
        const nav = document.querySelector('nav');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.style.background = 'rgba(15, 23, 42, 0.9)';
                nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.05)';
                nav.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
        
        // ============================================
        // MODAL FUNCTIONS
        // ============================================
        function openModal(project) {
            const modal = document.getElementById('modal-' + project);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function closeModal() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
        
        // ============================================
        // SMOOTH SCROLL
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // ============================================
        // INITIAL PAGE LOAD ANIMATION
        // ============================================
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Trigger initial reveals with stagger
            setTimeout(() => {
                checkReveals();
            }, 100);
        });
    </script>
</body>
</html>`)
})

// ============================================================================
// SEO ROUTES
// ============================================================================

// Sitemap XML for search engines
app.get('/sitemap.xml', (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/#about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/#projects</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/#skills</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/#experience</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://laith-mimi-portfolio.pages.dev/#contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  })
})

// Robots.txt for search engines
app.get('/robots.txt', (c) => {
  const robots = `# Robots.txt for Laith Mimi Portfolio
# https://laith-mimi-portfolio.pages.dev

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://laith-mimi-portfolio.pages.dev/sitemap.xml

# Crawl delay (optional, be nice to servers)
Crawl-delay: 1

# Block specific paths if needed
Disallow: /api/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /
`
  
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  })
})

// API routes
app.get('/api/contact', (c) => {
  return c.json({
    email: 'Laithmimi03@gmail.com',
    phone: '054-3600249',
    linkedin: 'https://linkedin.com/in/laithmimi',
    github: 'https://github.com/laithmimi'
  })
})

// Health check for monitoring
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
})

export default app
