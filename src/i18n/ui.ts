// Interface strings per locale. Content lives in src/content/<locale>/.
// Arabic strings: translation approved by Laith (2026-11-06).
import type { Locale } from '../content'

const pad = (n: number) => String(n).padStart(2, '0')

export const ui = {
  en: {
    lang: 'en',
    dir: 'ltr',
    ogLocale: 'en_US',
    skip: 'Skip to content',
    newTab: '(opens in a new tab)',
    email: 'Email',
    phone: 'Telephone',
    nav: {
      sections: 'Sections',
      menu: 'Menu',
      backToTop: 'back to top',
      startProject: 'Start Project',
      skills: 'Skills',
      projects: 'Work',
      services: 'Services',
      experience: 'Experience',
      testimonials: 'Testimonials',
      contact: 'Contact',
      switchTo: 'عربي',
      switchToLabel: 'عربي — النسخة العربية (Arabic)',
    },
    hero: { scroll: 'Scroll', scrollTo: 'to skills', cv: 'Download CV' },
    skills: { label: 'Skills', title: 'Technical Arsenal', groups: 'Skill groups', resume: 'My Resume' },
    projects: {
      label: 'Explore Work',
      title: 'Featured Projects',
      lede: 'Real problems. Real solutions. Real impact on how people learn and connect.',
      more: 'Read case study',
    },
    caseStudy: {
      close: 'Close case study',
      problem: 'The problem',
      solution: 'The solution',
      impact: 'Impact',
      role: 'My role',
      features: 'Key features',
      stack: 'Tech stack',
      live: 'Live preview',
      repo: 'Source code',
    },
    services: { label: (n: number) => `${pad(n)} offerings`, title: 'Services', hire: 'Hire Me' },
    process: { label: (n: number) => `${pad(n)} steps`, title: 'How I Work' },
    experience: { label: (since: number) => `${since} — now`, title: 'Experience Timeline' },
    certifications: {
      label: (n: number) => `${pad(n)} credentials`,
      title: 'Certifications & Training',
      view: 'View credential',
      undated: 'Undated',
    },
    volunteering: { label: 'Volunteering', title: 'Giving Back' },
    testimonials: { label: 'Testimonials', title: 'What People Say' },
    contact: {
      title: 'Let’s Connect',
      cta: 'Start Project',
      lede: 'Have a project in mind? Want to discuss AI, education tech, or just say hi? I’d love to hear from you.',
    },
    footer: { links: 'Quick links', social: 'Social', speak: 'I speak', top: 'Back to top', language: 'Language' },
    notFound: { title: 'Page not found', body: 'This page doesn’t exist.', home: 'Back to the homepage' },
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    ogLocale: 'ar_AR',
    skip: 'انتقل إلى المحتوى',
    newTab: '(يفتح في تبويب جديد)',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    nav: {
      sections: 'الأقسام',
      menu: 'القائمة',
      backToTop: 'العودة إلى الأعلى',
      startProject: 'ابدأ مشروعك',
      skills: 'المهارات',
      projects: 'الأعمال',
      services: 'الخدمات',
      experience: 'الخبرة',
      testimonials: 'آراء العملاء',
      contact: 'تواصل',
      switchTo: 'EN',
      switchToLabel: 'EN — English version',
    },
    hero: { scroll: 'مرّر', scrollTo: 'إلى المهارات', cv: 'تحميل السيرة الذاتية' },
    skills: { label: 'المهارات', title: 'الترسانة التقنية', groups: 'مجموعات المهارات', resume: 'سيرتي الذاتية' },
    projects: {
      label: 'استكشف الأعمال',
      title: 'مشاريع مختارة',
      lede: 'مشكلات حقيقية. حلول حقيقية. أثر حقيقي في طريقة تعلّم الناس وتواصلهم.',
      more: 'اقرأ دراسة الحالة',
    },
    caseStudy: {
      close: 'إغلاق دراسة الحالة',
      problem: 'المشكلة',
      solution: 'الحل',
      impact: 'الأثر',
      role: 'دوري',
      features: 'أبرز الميزات',
      stack: 'التقنيات المستخدمة',
      live: 'معاينة مباشرة',
      repo: 'الكود المصدري',
    },
    services: { label: (n: number) => `${pad(n)} خدمات`, title: 'الخدمات', hire: 'اعمل معي' },
    process: { label: (n: number) => `${pad(n)} خطوات`, title: 'كيف أعمل' },
    experience: { label: (since: number) => `${since} — الآن`, title: 'المسيرة المهنية' },
    certifications: {
      label: (n: number) => `${pad(n)} شهادات`,
      title: 'الشهادات والتدريب',
      view: 'عرض الشهادة',
      undated: 'بدون تاريخ',
    },
    volunteering: { label: 'التطوّع', title: 'العطاء للمجتمع' },
    testimonials: { label: 'آراء العملاء', title: 'ماذا يقولون' },
    contact: {
      title: 'لنتواصل',
      cta: 'ابدأ مشروعك',
      lede: 'لديك مشروع في ذهنك؟ تريد الحديث عن الذكاء الاصطناعي أو تكنولوجيا التعليم، أو مجرّد إلقاء التحية؟ يسعدني أن أسمع منك.',
    },
    footer: { links: 'روابط سريعة', social: 'التواصل الاجتماعي', speak: 'أتحدّث', top: 'العودة إلى الأعلى', language: 'اللغة' },
    notFound: { title: 'الصفحة غير موجودة', body: 'هذه الصفحة غير موجودة.', home: 'العودة إلى الصفحة الرئيسية' },
  },
} satisfies Record<Locale, unknown>

export type Ui = (typeof ui)['en']
export const getUi = (locale: Locale): Ui => ui[locale] as Ui

/** Path of the page in a given locale. */
export const localePath = (locale: Locale) => (locale === 'ar' ? '/ar' : '/')
