export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Web' | 'Apps' | 'AI' | 'Growth' | 'Video';
  categories: ('Web' | 'Apps' | 'AI' | 'Growth' | 'Video')[];
  industry: string;
  services: string[];
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  qualitativeResults: string[];
  nextProjectSlug: string;
  accentColor?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    slug: 'estateflow',
    title: 'EstateFlow',
    subtitle: 'Real Estate CRM + AI',
    category: 'Apps',
    categories: ['Apps', 'AI'],
    industry: 'PropTech & Real Estate',
    services: ['App Development', 'AI Automation', 'UI/UX Design'],
    overview:
      'A streamlined CRM and qualification interface that connects inbound property inquiries with automated instant responses, calendar booking, and structured agent triage.',
    challenge:
      'Real estate brokerages routinely missed after-hours inquiries from major property portals. Lead details sat in unread email inboxes until the following business day, by which time prospective buyers had already contacted competitor agencies.',
    approach:
      'We designed an automated conversational pipeline that immediately engages incoming inquiries via WhatsApp and SMS, validates buyer purchasing criteria, and synchronizes qualified showings directly into agent calendars.',
    solution:
      'A unified web and mobile application built on Next.js and FastAPI, integrated with real estate listing feeds, automated chat triage with human handoff, and an interactive agent pipeline dashboard.',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    qualitativeResults: [
      'Eliminated after-hours response delays through automated conversational intake.',
      'Agents receive structured buyer profiles and pre-scheduled viewings before picking up the phone.',
      'Zero manual data re-entry required across disparate listing syndication feeds.',
    ],
    nextProjectSlug: 'ai-doctor',
  },
  {
    id: '02',
    slug: 'ai-doctor',
    title: 'AI Doctor',
    subtitle: 'AI-Powered Assistant',
    category: 'AI',
    categories: ['AI', 'Apps'],
    industry: 'Healthcare Technology',
    services: ['AI Automation', 'Web Application', 'UX Research'],
    overview:
      'A secure clinical workflow assistant designed to summarize patient consultations, structure subjective-objective findings, and reduce administrative typing during visits.',
    challenge:
      'Clinicians were spending over a third of patient consultation time staring into electronic health record screens, leading to practitioner fatigue and diminished patient rapport.',
    approach:
      'We architected an unobtrusive, ambient interface that captures authorized consultation dialogue, extracts clinical symptoms into structured note drafts, and presents them for physician verification in a single click.',
    solution:
      'A privacy-conscious web client featuring real-time encrypted audio streaming, local voice transcription, and strict role-based document storage compliant with clinical data confidentiality.',
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    qualitativeResults: [
      'Clinicians maintain direct eye contact with patients throughout consultations without constant typing.',
      'Note documentation drafts are compiled and formatted immediately upon session conclusion.',
      'Physicians retain complete oversight with simple one-click verification and edit controls.',
    ],
    nextProjectSlug: 'cloudscale',
  },
  {
    id: '03',
    slug: 'cloudscale',
    title: 'CloudScale',
    subtitle: 'Cloud Infrastructure Platform',
    category: 'Web',
    categories: ['Web', 'Apps'],
    industry: 'DevOps & Cloud Computing',
    services: ['Website Development', 'Dashboard Architecture', 'UI/UX'],
    overview:
      'A high-performance observability interface that surfaces Kubernetes cluster telemetry, network bottlenecks, and compute expenditure across multi-cloud deployments.',
    challenge:
      'Engineering teams struggled to parse disconnected telemetry dashboards across AWS, GCP, and Cloudflare, causing unbudgeted cost spikes and delayed incident triage.',
    approach:
      'We mapped the core metrics infrastructure engineers need in emergency scenarios and designed a dense, low-latency monitoring canvas with instant keyboard filtering.',
    solution:
      'A lightweight web client utilizing WebSockets for streaming metric feeds, sub-second search across distributed cluster nodes, and automated alert grouping.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'ClickHouse', 'Cloudflare'],
    qualitativeResults: [
      'Engineering squads gained a unified single-pane operational view across heterogeneous clouds.',
      'Sub-second telemetry queries replaced legacy multi-minute dashboard loading screens.',
      'Identified and trimmed underutilized reserved compute instances across staging environments.',
    ],
    nextProjectSlug: 'forge-commerce',
  },
  {
    id: '04',
    slug: 'forge-commerce',
    title: 'Forge Commerce',
    subtitle: 'E-commerce Experience',
    category: 'Web',
    categories: ['Web', 'Growth'],
    industry: 'Direct-to-Consumer Goods',
    services: ['Website Development', 'Paid Advertising', 'Conversion Optimization'],
    overview:
      'A bespoke headless storefront engineered for a boutique luxury goods manufacturer, pairing tactile editorial product storytelling with instant page transitions.',
    challenge:
      'The client’s legacy e-commerce template suffered from sluggish mobile render times, cluttered navigation, and a disconnected checkout flow that depressed mobile conversion.',
    approach:
      'We completely separated the frontend presentation layer from the commerce backplane, using static edge generation and lean asset delivery to produce immediate responsiveness.',
    solution:
      'A modern headless Next.js storefront with dynamic product filtering, smooth drawer navigation, localized currency display, and a streamlined single-page checkout flow.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API'],
    qualitativeResults: [
      'Lighthouse mobile performance scores elevated from below 45 to consistent 95+ ratings.',
      'Instantaneous page transitions eliminated mobile navigation hesitation.',
      'Clean editorial typography elevated perceived product craftsmanship among buyers.',
    ],
    nextProjectSlug: 'brand-motion',
  },
  {
    id: '05',
    slug: 'brand-motion',
    title: 'Brand Motion',
    subtitle: 'Video Campaign',
    category: 'Video',
    categories: ['Video', 'Growth'],
    industry: 'Industrial Design & Architecture',
    services: ['Video Editing', 'Motion Graphics', 'Paid Advertising'],
    overview:
      'A cohesive motion identity and social campaign developed to showcase precision architectural hardware to high-end design firms and general contractors.',
    challenge:
      'B2B hardware specifications were traditionally buried in dense static PDF catalogs, resulting in low digital awareness and minimal social brand retention.',
    approach:
      'We captured close-up mechanical movements and tactile assembly sequences, blending macro cinematography with clean typographic callouts and subtle sound design.',
    solution:
      'A series of modular video assets formatted across 9:16 and 16:9 aspect ratios, tailored for LinkedIn technical audiences and Instagram design showcases.',
    technologies: ['Premiere Pro', 'After Effects', 'Cinema 4D', 'Meta Ads', 'Google Ads'],
    qualitativeResults: [
      'Transformed static product catalog specs into engaging, scroll-stopping social creative.',
      'Significantly higher watch-through completion rates across technical architect demographics.',
      'Delivered a reusable modular motion library for upcoming seasonal product launches.',
    ],
    nextProjectSlug: 'estateflow',
  },
];
