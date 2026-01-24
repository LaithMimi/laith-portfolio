import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

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
// SEO + SOCIAL
// ============================================================================
const seo = {
  title: "Laith Mimi | Software Engineer & AI Builder",
  description: "Software Engineering student specializing in Agentic AI and full-stack development. Founder of Quest Solutions. Building educational technology that transforms how students learn.",
  ogDescription: "Meet Laith Mimi — building AI-powered educational tools that learn with you. Founder, developer, and relentless problem solver.",
  keywords: "Laith Mimi, Software Engineer, AI Developer, Full Stack, Educational Technology, RAG, LangChain, React, Python"
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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    <meta name="author" content="Laith Mimi">
    
    <!-- Open Graph / Social -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.ogDescription}">
    <meta property="og:image" content="/static/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.ogDescription}">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
      
      .card-hover {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .card-hover:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.25);
      }
      
      .skill-pill {
        position: relative;
        cursor: pointer;
      }
      
      .skill-pill .tooltip {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 12px;
        background: #0F172A;
        color: white;
        border-radius: 8px;
        font-size: 12px;
        white-space: nowrap;
        transition: all 0.2s;
        z-index: 50;
        margin-bottom: 8px;
        max-width: 250px;
        white-space: normal;
        text-align: center;
      }
      
      .skill-pill:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
      
      .timeline-line {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #6366F1, #8B5CF6, #06B6D4);
      }
      
      .timeline-dot {
        position: absolute;
        left: -5px;
        width: 12px;
        height: 12px;
        background: #6366F1;
        border-radius: 50%;
        border: 2px solid #0F172A;
      }
      
      /* Modal styles */
      .modal {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 100;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
      }
      
      .modal.active {
        display: flex;
      }
      
      .modal-content {
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        background: #1E293B;
        border-radius: 16px;
        padding: 32px;
        margin: 20px;
        animation: modalIn 0.3s ease;
      }
      
      @keyframes modalIn {
        from {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      /* Scroll reveal */
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #0F172A;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(#6366F1, #8B5CF6);
        border-radius: 4px;
      }
    </style>
</head>
<body class="bg-dark text-white font-sans">
    <!-- Background blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="blob w-96 h-96 bg-primary/30 top-0 -left-48" style="animation-delay: 0s;"></div>
        <div class="blob w-80 h-80 bg-secondary/30 top-1/3 right-0" style="animation-delay: 2s;"></div>
        <div class="blob w-72 h-72 bg-accent/20 bottom-0 left-1/3" style="animation-delay: 4s;"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass">
        <div class="max-w-6xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <a href="#" class="font-bold text-xl gradient-text">LM</a>
                <div class="hidden md:flex items-center gap-8">
                    <a href="#about" class="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Skills</a>
                    <a href="#experience" class="text-gray-300 hover:text-white transition-colors">Experience</a>
                    <a href="#contact" class="gradient-bg px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">Let's Connect</a>
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
    <section id="hero" class="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div class="max-w-6xl mx-auto reveal">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left side - Text content -->
                <div class="text-center md:text-left order-2 md:order-1">
                    <div class="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span class="text-sm text-gray-300">Open to opportunities</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        I build <span class="gradient-text">AI that teaches.</span>
                    </h1>
                    
                    <p class="text-xl md:text-2xl text-gray-400 mb-8">
                        Founder. Full-stack developer. Obsessed with making education smarter.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                        <a href="#projects" class="gradient-bg px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                            <i class="fas fa-rocket"></i>
                            View My Work
                        </a>
                        <a href="#contact" class="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                            <i class="fas fa-paper-plane"></i>
                            Let's Connect
                        </a>
                    </div>
                    
                    <a href="/static/cv.pdf" download class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 px-4 py-2">
                        <i class="fas fa-download"></i>
                        Download CV
                    </a>
                </div>
                
                <!-- Right side - Photo -->
                <div class="flex justify-center md:justify-end order-1 md:order-2">
                    <div class="relative">
                        <!-- Gradient ring behind photo -->
                        <div class="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-50 scale-110"></div>
                        
                        <!-- Photo container -->
                        <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                            <img 
                                src="/static/laith-photo-nobg.png" 
                                alt="Laith Mimi - Software Engineer & AI Builder"
                                class="w-full h-full object-cover object-top"
                            />
                        </div>
                        
                        <!-- Floating badges around photo -->
                        <div class="absolute -top-4 -right-4 glass px-3 py-2 rounded-full text-sm font-medium animate-float">
                            <i class="fas fa-brain text-primary mr-1"></i> AI Builder
                        </div>
                        <div class="absolute -bottom-2 -left-4 glass px-3 py-2 rounded-full text-sm font-medium animate-float" style="animation-delay: 1s;">
                            <i class="fas fa-code text-secondary mr-1"></i> Full-Stack
                        </div>
                        <div class="absolute top-1/2 -right-8 glass px-3 py-2 rounded-full text-sm font-medium animate-float hidden lg:block" style="animation-delay: 2s;">
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
    <section id="about" class="py-24 px-6 relative">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="reveal">
                    <h2 class="text-4xl font-bold mb-6">
                        About <span class="gradient-text">Me</span>
                    </h2>
                    <p class="text-gray-400 text-lg mb-6 leading-relaxed">
                        I'm a fourth-year Software Engineering student at Azrieli College of Engineering, but calling myself "just a student" would be selling it short. I founded Quest Solutions — a SaaS agency focused on educational technology and digital transformation.
                    </p>
                    <p class="text-gray-400 text-lg mb-6 leading-relaxed">
                        My obsession? <span class="text-white font-medium">Making AI that actually helps people learn.</span> From RAG-powered tutors to gamified study platforms, I build tools that adapt to users instead of demanding users adapt to them.
                    </p>
                    <p class="text-gray-400 text-lg leading-relaxed">
                        When I'm not coding, I'm coordinating hackathons with Datahack, teaching Arabic through AI-enhanced methods at Blend.ar, or figuring out how to make the next project even more impactful.
                    </p>
                </div>
                
                <div class="reveal" style="transition-delay: 0.2s;">
                    <div class="glass rounded-2xl p-8">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="text-center">
                                <div class="text-4xl font-bold gradient-text mb-2">3+</div>
                                <div class="text-gray-400 text-sm">AI Projects Shipped</div>
                            </div>
                            <div class="text-center">
                                <div class="text-4xl font-bold gradient-text mb-2">2+</div>
                                <div class="text-gray-400 text-sm">Companies Founded/Led</div>
                            </div>
                            <div class="text-center">
                                <div class="text-4xl font-bold gradient-text mb-2">3</div>
                                <div class="text-gray-400 text-sm">Languages Spoken</div>
                            </div>
                            <div class="text-center">
                                <div class="text-4xl font-bold gradient-text mb-2">4+</div>
                                <div class="text-gray-400 text-sm">Years Engineering</div>
                            </div>
                        </div>
                        
                        <div class="mt-8 pt-6 border-t border-white/10">
                            <div class="flex items-center gap-4 text-gray-400">
                                <i class="fas fa-graduation-cap text-primary"></i>
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
    <section id="projects" class="py-24 px-6 relative">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Featured <span class="gradient-text">Projects</span>
                </h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                    Real problems. Real solutions. Real impact on how people learn and connect.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- GeeksHub -->
                <div class="glass rounded-2xl overflow-hidden card-hover reveal" onclick="openModal('geekshub')">
                    <div class="h-48 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                        <i class="fas fa-graduation-cap text-6xl text-white/50"></i>
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
                <div class="glass rounded-2xl overflow-hidden card-hover reveal" style="transition-delay: 0.1s;" onclick="openModal('arabic')">
                    <div class="h-48 bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center">
                        <i class="fas fa-comments text-6xl text-white/50"></i>
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
                <div class="glass rounded-2xl overflow-hidden card-hover reveal" style="transition-delay: 0.2s;" onclick="openModal('ngo')">
                    <div class="h-48 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                        <i class="fas fa-users text-6xl text-white/50"></i>
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
    <section id="skills" class="py-24 px-6 relative">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Technical <span class="gradient-text">Arsenal</span>
                </h2>
                <p class="text-gray-400 text-lg">Hover over any skill to see what it means in practice</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- AI & ML -->
                <div class="glass rounded-2xl p-6 reveal">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
                <div class="glass rounded-2xl p-6 reveal" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
                <div class="glass rounded-2xl p-6 reveal" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
                <div class="glass rounded-2xl p-6 reveal" style="transition-delay: 0.3s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
    <section id="experience" class="py-24 px-6 relative">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Experience <span class="gradient-text">Timeline</span>
                </h2>
            </div>
            
            <div class="relative pl-8">
                <div class="timeline-line"></div>
                
                <!-- Quest Solutions -->
                <div class="relative pb-12 reveal">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4">
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
                <div class="relative pb-12 reveal" style="transition-delay: 0.1s;">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4">
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
                <div class="relative reveal" style="transition-delay: 0.2s;">
                    <div class="timeline-dot top-1"></div>
                    <div class="glass rounded-2xl p-6 ml-4">
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
    <section id="certifications" class="py-24 px-6 relative">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Certifications & <span class="gradient-text">Training</span>
                </h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="glass rounded-2xl p-6 card-hover reveal">
                    <div class="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                        <i class="fas fa-robot text-primary text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-2">Agentic AI Bootcamp</h3>
                    <p class="text-gray-400 text-sm mb-2">Brightway</p>
                    <p class="text-gray-500 text-xs">Aug 2025 – Oct 2025</p>
                </div>
                
                <div class="glass rounded-2xl p-6 card-hover reveal" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <i class="fas fa-heartbeat text-secondary text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-2">AI in Healthcare</h3>
                    <p class="text-gray-400 text-sm mb-2">JINNOVATE</p>
                    <p class="text-gray-500 text-xs">Dec 2024 – Jan 2025</p>
                </div>
                
                <div class="glass rounded-2xl p-6 card-hover reveal" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
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
    <section id="volunteering" class="py-24 px-6 relative">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Giving <span class="gradient-text">Back</span>
                </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="glass rounded-2xl p-6 reveal">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-laptop-code text-white"></i>
                        </div>
                        <div>
                            <h3 class="font-bold mb-1">Datahack</h3>
                            <p class="text-primary text-sm mb-2">Project Coordinator • Jan 2026 – Present</p>
                            <p class="text-gray-400 text-sm">Coordinating student-to-market programs and hackathons, connecting tech talent with real-world challenges.</p>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6 reveal" style="transition-delay: 0.1s;">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
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
    <section id="contact" class="py-24 px-6 relative">
        <div class="max-w-4xl mx-auto text-center">
            <div class="reveal">
                <h2 class="text-4xl font-bold mb-4">
                    Let's <span class="gradient-text">Connect</span>
                </h2>
                <p class="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Want to discuss AI, education tech, or just say hi? I'd love to hear from you.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <a href="mailto:Laithmimi03@gmail.com" class="glass rounded-2xl p-6 card-hover reveal">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">Email</h3>
                    <p class="text-gray-400 text-sm">Laithmimi03@gmail.com</p>
                </a>
                
                <a href="tel:054-3600249" class="glass rounded-2xl p-6 card-hover reveal" style="transition-delay: 0.1s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-phone text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">Phone</h3>
                    <p class="text-gray-400 text-sm">054-3600249</p>
                </a>
                
                <a href="https://linkedin.com/in/laithmimi" target="_blank" class="glass rounded-2xl p-6 card-hover reveal" style="transition-delay: 0.2s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                        <i class="fab fa-linkedin text-white text-xl"></i>
                    </div>
                    <h3 class="font-bold mb-1">LinkedIn</h3>
                    <p class="text-gray-400 text-sm">Connect with me</p>
                </a>
                
                <a href="https://github.com/laithmimi" target="_blank" class="glass rounded-2xl p-6 card-hover reveal" style="transition-delay: 0.3s;">
                    <div class="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
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
        
        // Scroll reveal animation
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
        
        // Modal functions
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
        
        // Smooth scroll for anchor links
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
    </script>
</body>
</html>`)
})

// API routes for potential future features
app.get('/api/contact', (c) => {
  return c.json({
    email: 'Laithmimi03@gmail.com',
    phone: '054-3600249',
    linkedin: 'https://linkedin.com/in/laithmimi',
    github: 'https://github.com/laithmimi'
  })
})

export default app
