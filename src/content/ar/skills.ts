// Arabic translation of src/content/en/skills.ts, approved by Laith (2026-11-06).
// Skill names stay in English (they are the terms people search for); tooltips are translated.
import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    name: 'الذكاء الاصطناعي وتعلّم الآلة',
    skills: [
      { name: 'RAG', tooltip: 'أعلّم الذكاء الاصطناعي أن يستند إلى مصادره — توليد معزّز بالاسترجاع لإجابات دقيقة ومرتبطة بالسياق.' },
      { name: 'LangChain', tooltip: 'تنسيق تدفّقات عمل النماذج اللغوية لتبدو كمحادثة لا كسطر أوامر.' },
      { name: 'Spring AI', tooltip: 'إدخال قدرات الذكاء الاصطناعي إلى منظومات Java المؤسسية.' },
      { name: 'LLM Integration', tooltip: 'ربط التطبيقات بالنماذج اللغوية — GPT وClaude ونماذج مخصّصة.' },
      { name: 'Prompt Engineering', tooltip: 'صياغة التعليمات التي تجعل الذكاء الاصطناعي مفيداً، لا مبهراً فحسب.' },
    ],
  },
  {
    name: 'لغات البرمجة',
    skills: [
      { name: 'Python', tooltip: 'من السكربتات السريعة إلى تعلّم الآلة في الإنتاج — Python أداتي متعدّدة الاستخدامات.' },
      { name: 'Java', tooltip: 'تطوير خلفيات مؤسسية بمنظومة Spring.' },
      { name: 'TypeScript', tooltip: 'JavaScript آمنة الأنواع لتطبيقات قابلة للصيانة والتوسّع.' },
      { name: 'SQL', tooltip: 'نمذجة البيانات وتحسين الاستعلامات بما يتوسّع مع النمو.' },
    ],
  },
  {
    name: 'تطوير الويب',
    skills: [
      { name: 'React', tooltip: 'واجهات تبدو فورية، حتى حين لا تكون البيانات كذلك.' },
      { name: 'Spring Boot', tooltip: 'خلفيات Java جاهزة للإنتاج ومتكاملة الأدوات.' },
      { name: 'Firebase', tooltip: 'بيانات لحظية دون عناء إدارة الخوادم.' },
      { name: 'FastAPI', tooltip: 'واجهات Python سريعة البناء وسريعة الأداء.' },
    ],
  },
  {
    name: 'DevOps والأدوات',
    skills: [
      { name: 'Docker', tooltip: 'انشر بالطريقة نفسها في كل مكان، في كل مرة.' },
      { name: 'Linux', tooltip: 'إتقان سطر الأوامر في بيئات النشر الحقيقية.' },
      { name: 'Git/CI/CD', tooltip: 'إدارة الإصدارات وخطوط آلية تلتقط الأخطاء قبل أن يراها المستخدمون.' },
      { name: 'Jira', tooltip: 'إدارة مشاريع تبقي الفرق متّسقة ومنجِزة.' },
    ],
  },
]
