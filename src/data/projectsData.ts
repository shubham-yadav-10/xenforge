export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  conceptType: string;
  category: 'Website' | 'Video' | 'App Development' | 'AI Automation' | 'Marketing';
  categories: ('Website' | 'Video' | 'App Development' | 'AI Automation' | 'Marketing')[];
  businessType: string;
  services: string[];
  overview: string;
  problemSolves: string;
  approach: string;
  solution: string;
  technologies: string[];
  qualitativeResults: string[];
  nextProjectSlug: string;
  liveUrl?: string;
  imageUrl?: string;
  secondaryImageUrl?: string;
  isClientProject?: boolean;
  externalLinkText?: string;
  stats?: {
    views?: string;
    likes?: string;
    totalVideos?: string;
    totalViews?: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    slug: 'sanvo-bath-fixtures',
    title: 'Sanvo (sanvo.co)',
    subtitle: 'Quiet luxury, precisely made — Premium Architectural Bath Fixtures & Digital Experience',
    conceptType: 'Live Client Website · sanvo.co',
    category: 'Website',
    categories: ['Website'],
    businessType: 'Luxury Bath Fixtures & Sanitaryware',
    services: [
      'Custom Website Design',
      'Digital Product Showcase',
      'Editorial UI/UX',
      'Catalog Architecture',
      'Responsive Engineering',
    ],
    overview:
      'Sanvo is a premier bath fixtures and sanitaryware brand delivering "Quiet luxury, precisely made". XenForge engineered a modern, high-speed digital experience and luxury product showcase for sanvo.co, enabling homeowners, architects, and interior designers to explore collections like Cubix Prime with effortless elegance.',
    problemSolves:
      'High-end architectural bath brands need digital experiences that reflect the same craftsmanship, precision, and tactile luxury as their physical products, while maintaining lightning-fast mobile speeds and effortless catalog discovery.',
    approach:
      'We crafted an editorial, minimalist aesthetic featuring full-bleed luxury imagery, smooth collection galleries, and intuitive product specifications that establish immediate credibility with dealers and clients.',
    solution:
      'A sub-second, mobile-first brand website with interactive product collections, seamless responsive typography, and frictionless dealer inquiry workflows.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare'],
    qualitativeResults: [
      'Live in production at sanvo.co showcasing luxury collections.',
      'Editorial luxury presentation with sub-second page loads across devices.',
      'Elevates brand perception for premium architects and interior specifiers.',
      'Direct customer enquiry pipeline for high-value sanitaryware lines.',
    ],
    liveUrl: 'https://sanvo.co',
    externalLinkText: 'Visit Live Site (sanvo.co)',
    imageUrl: '/assets/images/sanvo_bath_fixtures_preview.png',
    isClientProject: true,
    nextProjectSlug: 'gta5-car-business-editing',
  },
  {
    id: '02',
    slug: 'gta5-car-business-editing',
    title: 'I Started My Own Car Business | GTA 5 #169',
    subtitle: '26.85M+ Views · High-Retention YouTube Video Editing for Techno Gamerz',
    conceptType: 'Live YouTube Production · 26.85M Views · 826K Likes',
    category: 'Video',
    categories: ['Video'],
    businessType: 'High-Retention YouTube Content & Commercial Video',
    services: [
      'High-Retention Video Editing',
      'Sound Design & FX Mixing',
      'Dynamic Pacing & Zoom Cuts',
      'Narrative Storytelling',
      'Visual Hooks & Motion Graphics',
    ],
    overview:
      "Edited by XenForge's lead video editor, this flagship YouTube episode generated over 26.85 million views and 826,000+ likes on India's premier creator channel (Techno Gamerz, 40M+ subscribers). Crafted with rapid micro-hooks, comedic timing, custom audio mixing, and narrative tension curves that maximize audience retention.",
    problemSolves:
      'Standard long-form video cuts suffer sharp drop-offs within the first 60 seconds. High-retention editing ensures viewer engagement remains consistently elevated throughout the full duration through micro-hooks, rhythm changes, and immersive audio cues.',
    approach:
      'Applied dynamic pacing, punchy zoom cuts, custom motion graphics, sound design, and color grading calibrated for maximum viewer retention and viral watch-time algorithms.',
    solution:
      'A record-setting video surpassing 26.85 million views, forming part of our lead editor\'s verified 150M+ total views and 6M+ likes portfolio on YTJobs.',
    technologies: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound FX Mixing', 'Kinetic Typography'],
    qualitativeResults: [
      '26.85M+ Views and 826,000+ Likes on YouTube.',
      'Part of our editor\'s verified 87+ video and 150M+ view vitrine on YTJobs.',
      'Exceptional audience retention with sustained average view duration.',
      'Verified portfolio piece on official YTJobs vitrine.',
    ],
    liveUrl: 'https://ytjobs.co/talent/vitrine/238018',
    externalLinkText: 'View on YTJobs Vitrine',
    imageUrl: '/assets/images/gta5_car_business_thumbnail.png',
    isClientProject: true,
    nextProjectSlug: 'estateflow-real-estate-crm-app',
    stats: {
      views: '26.85M',
      likes: '826.11K',
      totalVideos: '87+',
      totalViews: '+150M',
    },
  },
  {
    id: '03',
    slug: 'estateflow-real-estate-crm-app',
    title: 'EstateFlow — Real Estate Builder CRM & Property Inventory App',
    subtitle: 'Native iOS & Android Lead Conversion Funnel, Multi-City Inventory & Role-Based Auth',
    conceptType: 'Production Mobile Application · iOS & Android',
    category: 'App Development',
    categories: ['App Development'],
    businessType: 'Real Estate Builders, Developers & Premium Commercial Brokerages',
    services: [
      'Custom Mobile Engineering (iOS & Android)',
      'Lead Conversion Pipeline & 7-Stage Funnel',
      'Multi-City Property Inventory Engine',
      'Offline-First Local SQLite Caching',
      'Role-Based Authorization (Builder & Broker)',
      'Integrated AI Lead Triage Assistant',
    ],
    overview:
      'EstateFlow is an enterprise mobile application engineered by XenForge specifically for real estate developers, property builders, and on-ground broker teams. It brings together live revenue monitoring, an interactive 7-stage deal conversion funnel (New, Contacted, Interested, Site Visit, Negotiation, Won, Lost), and multi-city property inventory management (covering commercial offices, luxury 2BHK apartments, and villas across Mumbai, Bengaluru, and Hyderabad) directly into a fast, native mobile experience.',
    problemSolves:
      'Real estate developers lose high-ticket buyer leads due to disjointed spreadsheets, delayed site visit follow-ups, and lack of instant mobile access to live inventory specifications when on-site with prospects.',
    approach:
      'We designed a mobile-first native architecture prioritizing rapid lead capture (+ New Lead in one tap), transparent deal funnel visibility, and an image-rich property catalog that operates seamlessly even in low-connectivity construction zones through local caching.',
    solution:
      'A cross-platform iOS & Android mobile application with role-based builder authorization, 7-stage conversion funnel analytics, instant multi-city property specs, and an AI assistant for automated follow-ups.',
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'SQLite / MMKV', 'Framer Motion'],
    qualitativeResults: [
      'Interactive 7-stage lead conversion funnel tracking prospects from New to Closed Won.',
      'Comprehensive multi-city inventory catalog managing commercial spaces, luxury villas, and apartments.',
      'Role-based builder and broker authentication with real-time revenue visibility.',
      'Sub-second on-device performance with offline caching for on-ground site visits.',
      'Integrated AI module for automated inquiry qualification.',
    ],
    imageUrl: '/assets/images/realestate_crm_mobile_dashboard.png',
    secondaryImageUrl: '/assets/images/realestate_crm_mobile_properties.png',
    isClientProject: true,
    nextProjectSlug: 'shopify-crm-ai-marketing-automation',
  },
  {
    id: '04',
    slug: 'shopify-crm-ai-marketing-automation',
    title: 'Shopify CRM + Marketing Automation + Order Tracking',
    subtitle: 'Production 9-Workflow n8n / Make Automation Engine with WhatsApp Cloud API & OpenAI Triage',
    conceptType: 'Production Automation System · 9 Live Workflows',
    category: 'AI Automation',
    categories: ['AI Automation'],
    businessType: 'E-Commerce Brands, Direct-to-Consumer & Shopify Merchants',
    services: [
      'Shopify Webhook Architecture',
      'Official WhatsApp Cloud API Messaging',
      'Two-Way COD Verification & Auto-Tagging',
      'Automated Order Tracking Bot (Sheets CRM)',
      'Multi-Stage Cart Recovery (1h & 23h)',
      'OpenAI / Gemini Support & Slack Escalation',
    ],
    overview:
      'A production automation engine architected by XenForge connecting Shopify, WhatsApp Cloud API, Google Sheets master CRM, OpenAI/Gemini, and Slack. It runs 9 mission-critical workflows with zero manual effort: new order processing, automated COD verification, live order tracking responses, 2-stage abandoned cart recovery, 7-day post-delivery reviews, VIP customer tier upgrades, and AI-powered customer support triage with Slack escalation.',
    problemSolves:
      'Growing e-commerce brands waste over 30 hours per week manually confirming Cash-on-Delivery orders, answering repetitive tracking questions, and manually copying order details into sheets, while leaking revenue from unrecovered abandoned carts.',
    approach:
      'We engineered an event-driven webhook architecture connecting Shopify store events directly to WhatsApp Cloud API and Google Sheets, backed by OpenAI prompt grounding for complex inquiries and automatic human handoff via Slack.',
    solution:
      'A resilient 9-workflow system running 24/7 in production that recovers carts, verifies COD orders within 60 seconds, resolves order tracking queries instantly, and slashes support tickets by over 70%.',
    technologies: ['Shopify Webhooks', 'WhatsApp Cloud API', 'OpenAI & Gemini', 'Google Sheets CRM', 'n8n & Make', 'Slack Webhooks'],
    qualitativeResults: [
      '9 production workflows running seamlessly in live production.',
      'Under 400ms automatic responses to customer WhatsApp tracking queries.',
      'Two-way interactive COD confirmation preventing costly RTO returns.',
      'Automated 1-hour and 23-hour WhatsApp abandoned cart recovery sequence.',
      'OpenAI support triage with automated Slack alerts for human escalation.',
    ],
    imageUrl: '/assets/images/shopify_marketing_ai_automation_workflows.png',
    secondaryImageUrl: '/assets/images/shopify_automation_header_badge.png',
    isClientProject: true,
    nextProjectSlug: 'makrand-honey-brand-marketing',
  },
  {
    id: '05',
    slug: 'makrand-honey-brand-marketing',
    title: 'Makrand (मकरंद) — D2C Organic Brand & Instagram Architecture',
    subtitle: 'Brand Positioning, Bio Conversion Engine & 5-Pillar Story Highlights for Everyday Wellness',
    conceptType: 'Live Brand Strategy · @makrandhoney',
    category: 'Marketing',
    categories: ['Marketing'],
    businessType: 'Organic Wellness & Direct-to-Consumer Honey Brand',
    services: [
      'D2C Brand Positioning & Identity',
      'Instagram Profile & Bio Architecture',
      'Story Highlights Taxonomy & Design',
      'Educational Apiculture Micro-Content',
      'Link-in-Bio E-Commerce Funnel',
    ],
    overview:
      'Makrand (मकरंद) delivers "The Untouched Honey" for everyday wellness. XenForge developed their comprehensive D2C brand strategy, conversion-tuned Instagram architecture (@makrandhoney), and a 5-pillar story highlights system (Buzz & Bake, Brand Story, Bee-Fact, Skin & Nectar, Buzz Academy) establishing authentic beekeeper authority and direct online purchasing.',
    problemSolves:
      'In a market flooded with generic honey and adulterated syrup brands, authentic apiculture producers struggle to communicate purity, build immediate consumer trust, and convert casual Instagram followers into regular buyers.',
    approach:
      'We constructed a 4-line trust-anchored bio formula ("Real Beekeepers 🐝 · Batch Tested, No BS 🔬 · Built for Your Daily Ritual 🗓️ · Your Honey Era Starts Here 👇") paired with custom branded circular highlights educating consumers on crystallization, culinary rituals, and laboratory testing.',
    solution:
      'A polished D2C social presence with cohesive gold seal visual identity, structured content pillars, and a direct click-through funnel to www.makrandhoney.in.',
    technologies: ['Instagram Organic', 'Brand Positioning', 'Visual Taxonomy', 'Canva / Adobe', 'D2C Conversion Strategy'],
    qualitativeResults: [
      'Authentic brand presence established at @makrandhoney.',
      '5 distinct story highlights categorizing recipes, purity testing, and brand philosophy.',
      'Trust-driven bio architecture connecting followers to www.makrandhoney.in.',
      'Clear brand distinction emphasizing real beekeeping and batch-tested purity.',
    ],
    liveUrl: 'https://www.instagram.com/makrandhoney/',
    externalLinkText: 'View @makrandhoney on Instagram',
    imageUrl: '/assets/images/makrand_honey_instagram_marketing.png',
    isClientProject: true,
    nextProjectSlug: 'sanvo-bath-fixtures',
  },
];
