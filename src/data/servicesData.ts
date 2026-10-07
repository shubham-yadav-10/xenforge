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
    ctaText: 'Get a Free Website Sample',
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
    slug: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Let AI handle the repetitive work.',
    shortDesc: 'Save hours every week with chatbots, auto-replies and smart workflows.',
    heading: 'LET AI HANDLE THE REPETITIVE WORK.',
    copy: 'Stop answering the same questions and copying data by hand. We set up smart automations that save you hours every week.',
    problemStatement:
      'Hours wasted daily manually replying to basic Instagram DMs, answering repetitive inquiries, and typing lead details into spreadsheets.',
    solutionStatement:
      'We configure reliable AI assistants and automated pipelines that answer FAQs instantly, qualify prospects, and organize data in your CRM or Google Sheets automatically.',
    includes: [
      'AI chatbots for your website, Instagram or WhatsApp',
      'Automatic replies to common customer questions',
      'Lead capture that sends data straight to your sheet or CRM',
      'Booking, reminders and follow-up automation',
      'Email and invoice workflows',
      'Custom AI tools for your business',
    ],
    perfectFor: 'Any business drowning in DMs, calls, bookings or paperwork.',
    technologies: ['OpenAI', 'Gemini', 'WhatsApp Cloud API', 'Make / Zapier', 'Python', 'Google Sheets'],
    ctaText: 'Automate Your Workflows',
    capabilities: [
      '24/7 Intelligent Customer Chatbots',
      'Instant Lead Capture to Google Sheets / CRM',
      'Automated WhatsApp Booking Reminders',
      'Smart Inquiry Sorting & Triage',
      'Invoice & Document Auto-Workflows',
      'Seamless Human Handoff Triggers',
    ],
  },
  {
    id: '03',
    number: '03',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Get found. Get remembered. Get customers.',
    shortDesc: 'Content, social media and ads that bring the right customers.',
    heading: 'GET FOUND. GET REMEMBERED. GET CUSTOMERS.',
    copy: 'Great products need great visibility. We help you show up where your customers are and say the right thing when they see you.',
    problemStatement:
      'Running ad spend or posting on social media without a structured strategy leads to wasted budget, zero inbound inquiries, and empty calendars.',
    solutionStatement:
      'We orchestrate high-intent Google Search presence, local Google Business Profile visibility, and targeted Meta advertising paired with dedicated conversion pages.',
    includes: [
      'Social media management and content planning',
      'Instagram and Facebook growth strategy',
      'Ad campaigns (Meta, Google)',
      'SEO and Google Business Profile optimisation',
      'Brand messaging and positioning',
      'Monthly performance reports',
    ],
    perfectFor:
      'Local businesses, service providers, clinics, boutiques, and ambitious brands looking for reliable inbound customer inquiries.',
    technologies: ['Google Ads', 'Meta Ads', 'Google Business Profile', 'Search Console', 'GA4 Analytics'],
    ctaText: 'Claim Your Marketing Audit',
    capabilities: [
      'Targeted Local Google Search Setup',
      'High-Converting Meta Ad Creative Campaigns',
      'Google Map Pack & Review Optimization',
      'Instagram & Facebook Content Calendars',
      'Clear Return-on-Ad-Spend Dashboards',
      'Direct WhatsApp & Lead Form Tracking',
    ],
  },
  {
    id: '04',
    number: '04',
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
    ctaText: 'Send Footage for a Sample Reel',
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
