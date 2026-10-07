export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  conceptType: string;
  category: 'Website' | 'AI Automation' | 'Marketing' | 'Video';
  categories: ('Website' | 'AI Automation' | 'Marketing' | 'Video')[];
  businessType: string;
  services: string[];
  overview: string;
  problemSolves: string;
  approach: string;
  solution: string;
  technologies: string[];
  qualitativeResults: string[];
  nextProjectSlug: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    slug: 'estateflow-concept',
    title: 'EstateFlow',
    subtitle: 'Real Estate CRM & AI Triage Platform',
    conceptType: 'Concept: Real estate agency platform, designed by XenForge',
    category: 'AI Automation',
    categories: ['AI Automation', 'Website'],
    businessType: 'Real Estate Brokerage & Property Consulting',
    services: ['Website Development', 'AI Automation', 'WhatsApp Integration'],
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
    id: '02',
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
    id: '03',
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
    id: '04',
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
    nextProjectSlug: 'estateflow-concept',
  },
];
