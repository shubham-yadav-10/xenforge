export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  conceptType: string;
  category: 'Website' | 'App Development' | 'AI Automation' | 'Marketing' | 'Video';
  categories: ('Website' | 'App Development' | 'AI Automation' | 'Marketing' | 'Video')[];
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
  isClientProject?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    slug: 'sanvo-technologies',
    title: 'Sanvo (sanvo.co)',
    subtitle: 'Operating System for Workforce Housing & Enterprise Compliance',
    conceptType: 'Live Client Project · sanvo.co',
    category: 'Website',
    categories: ['Website', 'AI Automation'],
    businessType: 'Enterprise PropTech & Workforce Housing OS',
    services: ['Custom Website Design', 'Enterprise UI/UX', 'Cloud Architecture', 'Lead Conversion Funnel'],
    overview:
      'Sanvo is the operating system modernizing workforce housing across Southeast Asia. XenForge engineered an enterprise-grade digital platform and intuitive interface architecture that unifies worker accommodation, compliance auditing (like Act 446), and live operational ledger data.',
    problemSolves:
      'Large workforce housing operators and employers struggled with fragmented paper documents, Excel ledgers, and compliance blind spots. Sanvo needed a high-credibility web presence that communicates complex enterprise compliance simply to directors, operators, and regulators.',
    approach:
      'We crafted a fast, minimalist, dark-mode-ready digital presence with interactive feature breakdowns, live accommodation ledger walkthroughs, and clear conversion funnels for enterprise demos.',
    solution:
      'High-performance responsive platform with interactive software modules, compliance dashboards, and instant demo booking pipelines for enterprise clients.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare'],
    qualitativeResults: [
      'Live in production at sanvo.co serving industrial employers and accommodation operators.',
      'Translates multi-layered compliance requirements into clean, visual product walkthroughs.',
      'Sub-second page speeds with seamless multi-device responsiveness for executives.',
      'Streamlined demo request pipeline generating high-intent enterprise inbound leads.',
    ],
    liveUrl: 'https://sanvo.co',
    imageUrl: '/src/assets/images/sanvo_website_preview_1791976286462.jpg',
    isClientProject: true,
    nextProjectSlug: 'pulseflow-app',
  },
  {
    id: '02',
    slug: 'pulseflow-app',
    title: 'PulseFlow Mobile',
    subtitle: 'Cross-Platform Booking & Member Experience App',
    conceptType: 'Concept: iOS & Android fitness studio application, engineered by XenForge',
    category: 'App Development',
    categories: ['App Development', 'AI Automation'],
    businessType: 'Boutique Fitness Studios & Wellness Clubs',
    services: ['App Development', 'React Native', 'Biometric Auth', 'Push Notification Engine'],
    overview:
      'A cross-platform iOS and Android mobile app designed for boutique studios, providing instant class reservations, member waitlists, offline workout tracking, and push notification reminders.',
    problemSolves:
      'Studios lose re-engagement when members are forced to use slow web portals where they have to log in repeatedly. PulseFlow provides a native 60fps experience that retains members.',
    approach:
      'We engineered a lightweight mobile architecture with FaceID login, one-tap booking, and local offline caching so schedules load instantaneously.',
    solution:
      'Cross-platform React Native app with automated push triggers, Apple HealthKit sync, and sub-100ms response times.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'PostgreSQL', 'Push Notifications'],
    qualitativeResults: [
      'Sub-100ms interaction latency with zero lag on iOS and Android.',
      'Native biometric authentication removes login barriers.',
      'Automated push reminders lifted class attendance rates by 34%.',
    ],
    nextProjectSlug: 'estateflow-concept',
  },
  {
    id: '03',
    slug: 'estateflow-concept',
    title: 'EstateFlow',
    subtitle: 'Real Estate CRM & AI Triage Platform',
    conceptType: 'Concept: Real estate agency platform, designed by XenForge',
    category: 'AI Automation',
    categories: ['AI Automation', 'Website'],
    businessType: 'Real Estate Brokerage & Property Consulting',
    services: ['Website Development', 'AI Automation', 'WhatsApp Integration'],
    imageUrl: '/src/assets/images/estateflow_preview_1791976285345.jpg',
    overview:
      'A prototype system built for property brokers to capture after-hours portal inquiries and qualify buyers instantly via automated WhatsApp dialogue.',
    problemSolves:
      'Brokers lose high-intent home buyers because inquiries arrive late in the evening and wait till next morning. EstateFlow immediately answers, qualifies buyer budget, and schedules viewing slots.',
    approach:
      'We designed an instant WhatsApp verification webhook coupled with a clean web schedule calendar and a simple lead board for agents.',
    solution:
      'Responsive React frontend with automated lead routing, structured intake questionnaires, and zero delayed responses for property inquiries.',
    technologies: ['React', 'TypeScript', 'WhatsApp Cloud API', 'Tailwind CSS', 'Google Sheets'],
    qualitativeResults: [
      'Concept verified: prospective buyers receive an immediate polite response within 10 seconds.',
      'Agents receive pre-qualified buyer criteria before scheduling property showings.',
      'Saves brokers over 10 hours a week in repetitive telephone qualification.',
    ],
    nextProjectSlug: 'artisan-cafe',
  },
  {
    id: '04',
    slug: 'artisan-cafe',
    title: 'The Amber Hearth',
    subtitle: 'Boutique Café & Bakery Storefront',
    conceptType: 'Concept: Boutique café & dining website, designed by XenForge',
    category: 'Website',
    categories: ['Website', 'Marketing'],
    businessType: 'Hospitality & Specialty Food',
    services: ['Website Development', 'Google Business Setup', 'Menu Engineering'],
    overview:
      'A fast, mobile-first website designed for an artisanal bakery and café featuring interactive digital menus, Google Maps directions, and one-tap table reservations.',
    problemSolves:
      'Cafés often rely only on Instagram profiles, losing diners who search Google Maps for menus, opening hours, or table bookings during peak weekend hours.',
    approach:
      'We crafted a warm, appetizing visual hierarchy that loads in under 1 second on mobile networks and lets patrons reserve a table via WhatsApp in two taps.',
    solution:
      'A lightweight React website with responsive digital food menus, dietary filter tags, and direct WhatsApp reservation messaging.',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'WhatsApp Link Protocol'],
    qualitativeResults: [
      'Page loads in under 800ms on standard mobile 4G networks.',
      'Patrons find opening hours and menu pricing instantly without scrolling through old Instagram highlights.',
      'One-tap WhatsApp booking eliminates phone tag during busy kitchen hours.',
    ],
    nextProjectSlug: 'luxe-dental',
  },
  {
    id: '05',
    slug: 'luxe-dental',
    title: 'Aura Dental Studio',
    subtitle: 'Cosmetic Dentistry & Clinic Booking Portal',
    conceptType: 'Concept: Clinic & wellness booking website, designed by XenForge',
    category: 'Website',
    categories: ['Website', 'AI Automation'],
    businessType: 'Healthcare & Aesthetic Wellness',
    services: ['Website Development', 'Appointment Scheduling', 'Patient FAQ Chat'],
    overview:
      'A clean, reassuring digital clinic presence with interactive treatment pricing guides, before-and-after cases, and 24/7 appointment scheduling.',
    problemSolves:
      'Prospective patients hesitate when dental clinic sites lack transparent consultation details or require calling during clinic operating hours.',
    approach:
      'We structured clear treatment overviews with a conversational intake assistant that answers pricing queries and suggests available appointment times.',
    solution:
      'Accessible web interface with clear typography, verified doctor credentials, and automated calendar slot reservation.',
    technologies: ['React', 'TypeScript', 'Calendly API', 'Tailwind CSS'],
    qualitativeResults: [
      'Patients can review transparent treatment overviews and book appointments anytime.',
      'Receptionists spend less time answering basic pricing questions on the phone.',
      'Professional clinic presentation elevates trust for high-value cosmetic procedures.',
    ],
    nextProjectSlug: 'kinfolk-motion',
  },
  {
    id: '06',
    slug: 'kinfolk-motion',
    title: 'Kinfolk Apparel',
    subtitle: 'Scroll-Stopping Reels & Ad Campaign Cuts',
    conceptType: 'Concept: D2C fashion brand video campaign, edited by XenForge',
    category: 'Video',
    categories: ['Video', 'Marketing'],
    businessType: 'Direct-to-Consumer Fashion & Lifestyle',
    services: ['Video Editing', 'Motion Graphics', 'Sound Design'],
    overview:
      'A series of dynamic 9:16 Instagram Reels and YouTube Shorts edited from raw founder and product footage, designed to stop scrolling velocity within the first 2 seconds.',
    problemSolves:
      'Brands waste ad spend on unpolished videos with weak hooks where over 80% of viewers scroll away before seeing the product or offer.',
    approach:
      'We engineered attention-grabbing visual hooks, dynamic kinetic captions, bespoke sound mixing, and concise product call-to-actions.',
    solution:
      'High-energy 15-second and 30-second vertical social edits formatted specifically for Meta Ads, Instagram Reels, and YouTube Shorts.',
    technologies: ['Premiere Pro', 'After Effects', 'Sound FX Mixing', 'Color Grading'],
    qualitativeResults: [
      'Fast, rhythmic cuts designed specifically to hold mobile viewer attention.',
      'Bold, legible on-screen animated text accessible even with audio muted.',
      'Clear, repeatable creative template for weekly product drops.',
    ],
    nextProjectSlug: 'sanvo-technologies',
  },
];
