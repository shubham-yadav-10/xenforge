export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  heading: string;
  copy: string;
  includes: string[];
  perfectFor: string;
  technologies: string[];
  ctaText: string;
  capabilities?: string[];
  problemStatement?: string;
  solutionStatement?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    slug: 'web-development',
    title: 'Website Development',
    tagline: 'A website that works as hard as you do.',
    shortDesc: 'Fast, modern sites that turn visitors into enquiries.',
    heading: 'A WEBSITE THAT WORKS AS HARD AS YOU DO.',
    copy: 'Your website is your 24/7 salesperson. We design and build fast, mobile-friendly websites that look great and are built to turn visitors into customers.',
    problemStatement:
      'Most great small businesses are losing customers online because of no website, a sluggish outdated template, or broken forms that lose leads.',
    solutionStatement:
      'We craft custom, lightning-fast sites built to convert, equipped with WhatsApp chat, direct booking, and clear mobile user journeys.',
    includes: [
      'Custom design matched to your brand',
      'Mobile-first, responsive layouts',
      'Fast loading and SEO-ready structure',
      'Contact forms, WhatsApp and booking integration',
      'Online store / ordering (if needed)',
      'Easy-to-update content',
      'Hosting and domain setup help',
    ],
    perfectFor:
      'Restaurants, salons, boutiques, coaches, clinics, real-estate agents, creators, and any business with no website or an outdated one.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress / Headless'],
    ctaText: 'Explore Web Solutions',
    capabilities: [
      'Custom Brand-Matched Design',
      'Sub-Second Mobile Load Times',
      'Instant WhatsApp Chat Integration',
      'Automated Calendly / Booking Sync',
      'Catalog & E-commerce Checkout',
      'Search Engine Structural Readiness',
    ],
  },
  {
    id: '02',
    number: '02',
    slug: 'app-development',
    title: 'App Development',
    tagline: 'High-performance mobile and cross-platform apps.',
    shortDesc: 'Native iOS & Android enterprise mobile apps, CRMs and inventory management platforms.',
    heading: 'MOBILE & CROSS-PLATFORM APPS ENGINEERED FOR SPEED & RETENTION.',
    copy: 'From custom enterprise CRMs and property inventory platforms to consumer-facing mobile experiences, we engineer fast, intuitive iOS and Android applications that streamline business operations and engage users daily.',
    problemStatement:
      'Off-the-shelf app templates and rigid SaaS platforms fail to fit your exact business workflows—producing sluggish performance, lost leads on the field, and clunky mobile UIs that sales teams abandon.',
    solutionStatement:
      'We engineer lightweight, native iOS & Android applications with custom lead funnels, real-time inventory catalogs, role-based access, and offline SQLite caching that work flawlessly on site and in the office.',
    includes: [
      'Custom iOS & Android mobile applications',
      'Real Estate Builder / Broker CRMs & lead pipelines',
      'Interactive deal conversion funnels & revenue analytics',
      'Multi-city property inventory & catalog engines',
      'Integrated AI assistants for lead qualification & triage',
      'Offline-first data sync & local SQLite caching',
      'Biometric authentication & role-based permissions',
      'App Store & Google Play submission and support',
    ],
    perfectFor:
      'Real estate builders & developers, brokerages, booking platforms, marketplaces, and service businesses needing a dedicated mobile application.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Node.js', 'PostgreSQL', 'SQLite / MMKV', 'Tailwind CSS'],
    ctaText: 'Build Your Mobile App',
    capabilities: [
      'Role-Based Access Control (Builder, Broker, Agent)',
      '7-Stage Lead Funnel: New → Site Visit → Closed Won',
      'High-Ticket Multi-City Property Catalogs',
      'Integrated AI Assistant for Inquiry Triage',
      'Zero-Loss Offline Caching for On-Site Visits',
      'Sub-Second 60 FPS Native Touch Interactions',
    ],
  },
  {
    id: '03',
    number: '03',
    slug: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Let AI & smart workflows handle your repetitive operations.',
    shortDesc: 'Shopify CRM sync, WhatsApp bots, automated tracking and AI support triage.',
    heading: 'END-TO-END AUTOMATION PIPELINES ENGINEERED FOR ZERO MANUAL EFFORT.',
    copy: 'Stop answering repetitive tracking inquiries, copying order details into spreadsheets, and manually chasing abandoned carts. We build robust, multi-workflow automation engines that run your operations 24/7.',
    problemStatement:
      'E-commerce brands and busy businesses lose countless hours manually checking order statuses, confirming COD orders, typing customer info into sheets, and losing high-intent shoppers who abandon their carts.',
    solutionStatement:
      'We architect interconnected automation engines—like our verified 9-workflow Shopify + WhatsApp + CRM pipeline—that automate COD verification, live order tracking, abandoned cart recovery, and AI customer support with seamless human escalation.',
    includes: [
      'Shopify & e-commerce CRM webhook synchronization',
      'Official WhatsApp Cloud API automated customer messaging',
      'Two-way interactive COD confirmation & cancellation tagging',
      'Automated live order tracking responder with Google Sheets search',
      'Multi-stage abandoned cart recovery (1h & 23h WhatsApp triggers)',
      'OpenAI & Gemini AI support bot with intelligent query classification',
      'Automated Slack alerts for urgent human support escalation',
      '7-day post-delivery review requests & VIP customer tier detection',
    ],
    perfectFor:
      'D2C brands, Shopify stores, appointment businesses, agencies, and any company handling high-volume repetitive customer messages and order updates.',
    technologies: ['Shopify Webhooks', 'WhatsApp Cloud API', 'OpenAI & Gemini', 'Google Sheets CRM', 'n8n & Make', 'Slack Webhooks'],
    ctaText: 'Deploy Automation Engine',
    capabilities: [
      'Multi-Stage Abandoned Cart Recovery Pipelines',
      'Automated Two-Way COD WhatsApp Verification',
      'Instant Live Order Tracking Query Resolvers',
      'OpenAI / Gemini Prompt Grounding & Support',
      'Real-Time Master Customer Sheet CRM Sync',
      'Intelligent Slack Alerts for Human Handoff',
    ],
  },
  {
    id: '04',
    number: '04',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Get found. Build trust. Convert customers.',
    shortDesc: 'D2C brand positioning, Instagram social architecture, and high-intent acquisition.',
    heading: 'BRAND POSITIONING & SOCIAL ARCHITECTURES THAT DRIVE REVENUE.',
    copy: 'Great products need distinctive branding and a clear digital narrative. We shape compelling brand positioning, optimized Instagram conversion profiles, and high-intent customer acquisition funnels.',
    problemStatement:
      'Posting generic content or running uncalibrated ads without a cohesive brand story burns budget while leaving social profiles unpolished, failing to convert cold visitors into loyal buyers.',
    solutionStatement:
      'We construct complete brand positioning strategies—exemplified by our work for Makrand Honey—combining trust-anchored bios, structured story highlights taxonomy, authentic storytelling, and targeted customer acquisition.',
    includes: [
      'D2C brand positioning & core narrative development',
      'Instagram profile optimization & bio conversion structure',
      'Custom story highlights architecture (Story, Education, Purity, Recipes)',
      'Organic social content strategy & customer engagement rituals',
      'High-converting Meta & Google Search ad campaigns',
      'Google Business Profile & local search optimization',
      'Direct link-in-bio & WhatsApp enquiry funnels',
    ],
    perfectFor:
      'D2C brands, organic food & wellness businesses, boutiques, local service providers, and growing companies looking to build authentic brand equity.',
    technologies: ['Instagram Organic', 'Meta Ads Manager', 'Brand Identity', 'Google Search & SEO', 'Canva / Adobe', 'GA4 Analytics'],
    ctaText: 'Claim Your Marketing Audit',
    capabilities: [
      'D2C Brand Narrative & Bio Conversion Copy',
      'Story Highlights Taxonomy & Visual Branding',
      'Organic Social Trust & Authority Building',
      'Targeted Meta & Google Ad Creative Campaigns',
      'Direct WhatsApp & E-Commerce Link Routing',
      'Comprehensive Return-on-Ad-Spend Tracking',
    ],
  },
  {
    id: '05',
    number: '05',
    slug: 'video-editing',
    title: 'Video Editing',
    tagline: 'Videos that people actually watch.',
    shortDesc: 'Reels, ads and brand videos that stop the scroll.',
    heading: 'VIDEOS THAT PEOPLE ACTUALLY WATCH.',
    copy: 'Short-form video drives attention. We turn your raw footage into polished, scroll-stopping content.',
    problemStatement:
      'Raw smartphone footage looks unrefined, loses viewers within the first 2 seconds, and fails to direct viewers to contact or buy.',
    solutionStatement:
      'We apply dynamic pacing, animated subtitles, sound design, and sharp brand overlays that capture attention and turn social scrollers into customers.',
    includes: [
      'Instagram Reels and YouTube Shorts',
      'Promotional and product videos',
      'Ad creatives',
      'YouTube videos',
      'Brand intro videos and testimonials',
      'Captions, motion graphics and colour grading',
    ],
    perfectFor:
      'Founders, creators, restaurants, fitness studios, and e-commerce brands wanting to command attention on modern social platforms.',
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Cinema 4D'],
    ctaText: 'Start Video Project',
    capabilities: [
      'Scroll-Stopping First 3-Second Hooks',
      'Dynamic Animated Captions & Subtitles',
      'Sound Design, Sound FX & Music Mixing',
      'Bespoke Brand Color Grading',
      'Optimized 9:16 Social Aspect Ratios',
      'Fast Turnaround for Daily/Weekly Posting',
    ],
  },
];
