export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDesc: string;
  heading: string;
  copy: string;
  includes: string[];
  technologies: string[];
  ctaText: string;
  capabilities?: string[];
  workflow?: { step: string; desc: string }[];
  problemStatement?: string;
  solutionStatement?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    slug: 'web-development',
    title: 'Website Development',
    shortDesc: 'Websites built around the business, not a template.',
    heading: 'WEBSITES BUILT FOR THE WAY YOUR BUSINESS WORKS.',
    copy: 'We design and build fast, responsive websites that make it easier for people to understand your business and take the next step.',
    problemStatement:
      'Most corporate websites look indistinguishable from competitors, load slowly on mobile networks, and fail to guide prospective customers to take concrete action.',
    solutionStatement:
      'We build tailored digital storefronts and marketing platforms engineered from scratch around your specific customer journey, with clean typography, fast load speeds, and intuitive navigation.',
    includes: [
      'Strategy',
      'UX/UI',
      'Development',
      'CMS',
      'Integrations',
      'Performance',
      'SEO',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js'],
    ctaText: 'START A WEBSITE PROJECT',
    capabilities: [
      'Custom Design Systems',
      'Edge-Rendered Speed Optimization',
      'Headless CMS Architecture',
      'Mobile-First Responsiveness',
      'Conversion Architecture',
      'Accessibility Standards',
    ],
  },
  {
    id: '02',
    number: '02',
    slug: 'app-development',
    title: 'App Development',
    shortDesc: 'Web and mobile products designed around real users and real workflows.',
    heading: 'FROM IDEA TO WORKING PRODUCT.',
    copy: 'We build web and mobile applications around real workflows, real users and the problems the product needs to solve.',
    problemStatement:
      'Digital products often fail when teams prioritize feature volume over daily usability, resulting in high churn and complex onboarding hurdles.',
    solutionStatement:
      'We engineer disciplined applications that strip away friction, focusing on high-frequency workflows, rock-solid data integrity, and fast response times.',
    includes: [
      'Product planning',
      'UI/UX',
      'Web applications',
      'Mobile applications',
      'APIs',
      'Authentication',
      'Payments',
      'Dashboards',
      'Deployment',
    ],
    technologies: [
      'React',
      'Next.js',
      'Flutter',
      'React Native',
      'Node.js',
      'FastAPI',
      'PostgreSQL',
    ],
    ctaText: 'START AN APP PROJECT',
    capabilities: [
      'Cross-Platform Architecture',
      'Role-Based Access Control',
      'Real-Time State Synchronization',
      'Offline-First Data Storage',
      'Payment Gateway Integration',
      'Automated CI/CD Pipelines',
    ],
  },
  {
    id: '03',
    number: '03',
    slug: 'ai-automation',
    title: 'AI Automation',
    shortDesc: 'Automate repetitive work, connect your tools and give your team useful AI systems.',
    heading: 'PUT THE REPETITIVE WORK ON AUTOPILOT.',
    copy: 'We connect AI to the parts of a business that consume time: lead handling, customer support, internal workflows, documents and repetitive communication.',
    problemStatement:
      'Teams waste hundreds of hours each month manually copy-pasting customer information, answering identical questions, and sorting inbound files.',
    solutionStatement:
      'We build reliable AI pipelines that process inbound text, structure messy records, and interact with your existing databases without human intervention.',
    includes: [
      'AI assistants',
      'Lead qualification',
      'WhatsApp automation',
      'Customer support',
      'Document processing',
      'Internal knowledge systems',
      'Workflow automation',
      'AI content workflows',
    ],
    technologies: [
      'OpenAI',
      'Gemini',
      'Claude',
      'LangChain',
      'Python',
      'FastAPI',
      'PostgreSQL',
    ],
    ctaText: 'AUTOMATE YOUR WORKFLOWS',
    capabilities: [
      'Conversational Inbound Triage',
      'Multi-Format Document Extraction',
      'Context-Aware Knowledge Retrieval',
      'CRM Synchronization',
      'Automated Human-in-the-Loop Escalation',
      'Enterprise Privacy Compliance',
    ],
  },
  {
    id: '04',
    number: '04',
    slug: 'seo',
    title: 'SEO',
    shortDesc: 'Technical SEO, content and site improvements that help the right people find you.',
    heading: 'GET FOUND BY THE RIGHT PEOPLE.',
    copy: 'We improve the technical foundation, content and structure of your website so search engines can understand it and customers can find it.',
    problemStatement:
      'High search rankings are wasted if organic traffic bounces because page speeds are sluggish, site architecture is confusing, or content misses buyer intent.',
    solutionStatement:
      'We align technical page speed, schema markup, and intentional content hierarchy so qualified decision-makers discover your brand exactly when they are searching.',
    includes: [
      'Technical SEO',
      'On-page SEO',
      'Keyword research',
      'Content structure',
      'Internal linking',
      'Performance',
      'Analytics',
      'Search Console',
    ],
    technologies: [
      'Google Search Console',
      'Next.js Metadata',
      'Schema.org JSON-LD',
      'Lighthouse',
      'Ahrefs',
    ],
    ctaText: 'IMPROVE SEARCH RANKINGS',
    capabilities: [
      'Core Web Vitals Remediation',
      'Structured Data & Rich Snippets',
      'Information Architecture Audits',
      'High-Intent Content Mapping',
      'Crawl Budget Optimization',
      'Competitive Gap Analysis',
    ],
  },
  {
    id: '05',
    number: '05',
    slug: 'video-editing',
    title: 'Video Editing',
    shortDesc: 'Short-form content, product videos, brand films and motion work built for attention.',
    heading: 'MAKE THE FIRST FEW SECONDS COUNT.',
    copy: 'We edit videos for brands that need people to stop scrolling, understand the idea and remember what they saw.',
    problemStatement:
      'Audiences tune out generic stock footage and sluggish pacing within 1.5 seconds. Videos must establish narrative tension immediately.',
    solutionStatement:
      'We combine dynamic pacing, custom sound design, and clean typographic framing to hold attention and communicate product value without fluff.',
    includes: [
      'Short-form videos',
      'Reels',
      'Product videos',
      'Brand films',
      'Motion graphics',
      'Social ads',
      'YouTube content',
    ],
    technologies: [
      'Premiere Pro',
      'After Effects',
      'DaVinci Resolve',
      'Cinema 4D',
      'Motion Canvas',
    ],
    ctaText: 'START A VIDEO PROJECT',
    capabilities: [
      'Scroll-Stopping Hook Engineering',
      'Multi-Format Social Aspect Ratios',
      'Bespoke Motion Typography',
      'Sound Design & Foley Mixing',
      'Rapid Iteration Creative Testing',
      'Color Grading & Atmospheric Tone',
    ],
  },
  {
    id: '06',
    number: '06',
    slug: 'paid-advertising',
    title: 'Paid Advertising',
    shortDesc: 'Campaigns, creative testing and landing pages built around measurable results.',
    heading: 'TURN ATTENTION INTO ACTION.',
    copy: 'We build campaigns around the full path from the first impression to the final conversion.',
    problemStatement:
      'Ad spend is routinely drained when teams run traffic to unoptimized homepages without tight tracking or iterative creative testing.',
    solutionStatement:
      'We treat paid acquisition as an interconnected system: testing targeted creatives, pairing them with tailored landing pages, and tracking actual closed revenue.',
    includes: [
      'Google Ads',
      'Meta Ads',
      'LinkedIn Ads',
      'Creative testing',
      'Landing pages',
      'Retargeting',
      'Conversion tracking',
      'Performance reporting',
    ],
    technologies: [
      'Google Ads API',
      'Meta Pixel / CAPI',
      'GA4',
      'Looker Studio',
      'PostHog',
    ],
    ctaText: 'LAUNCH A CAMPAIGN',
    capabilities: [
      'Multi-Variant Creative Validation',
      'Dedicated Funnel Landing Pages',
      'Server-Side Conversion Tracking',
      'High-Intent Search Intent Harvesting',
      'Transparent CAC & ROAS Dashboards',
      'Continuous Bid & Audience Tuning',
    ],
  },
];
