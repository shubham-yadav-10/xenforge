import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  quote: string;
  serviceUsed: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: '01',
    name: 'Aarav Mehta',
    role: 'Founder & Head Roaster',
    company: 'Artisan Roast Labs',
    industry: 'Specialty Café & D2C',
    metric: '+140%',
    metricLabel: 'Direct online orders',
    quote:
      'Before XenForge, we were losing nearly 30% of our margins to food delivery aggregators. XenForge built our direct ordering web app and connected WhatsApp instant notifications in 14 days. Our customers love the speed, and our direct revenue jumped 140% in month one.',
    serviceUsed: 'Web Development + WhatsApp Ordering',
  },
  {
    id: '02',
    name: 'Priya Sundaram',
    role: 'Managing Partner',
    company: 'Aura Living Spaces',
    industry: 'Boutique Real Estate',
    metric: '25+ hrs',
    metricLabel: 'Saved every week',
    quote:
      'Our team was drowned in unstructured Instagram and website queries. XenForge built an automated lead qualification bot and streamlined our property brochures. Our agents now only speak with pre-qualified buyers ready for site visits. It transformed our sales desk.',
    serviceUsed: 'AI Lead Qualification + CRM Automation',
  },
  {
    id: '03',
    name: 'Dr. Devansh Kapoor',
    role: 'Clinical Director',
    company: 'Apex Smile & Aesthetics',
    industry: 'Healthcare & Aesthetic Clinic',
    metric: '3.2x',
    metricLabel: 'Patient appointment bookings',
    quote:
      'Most agencies sell bloated WordPress templates that load in five seconds and crash on mobile. XenForge engineered a modern web portal that loads instantly and ranks at the top of local searches. Our monthly consultation bookings more than tripled within 60 days.',
    serviceUsed: 'High-Performance Web App + Local SEO',
  },
  {
    id: '04',
    name: 'Sneha Roy',
    role: 'Creative Director',
    company: 'Verve Studio Wear',
    industry: 'Fashion & Direct-to-Consumer',
    metric: '4.2x',
    metricLabel: 'Return on ad spend (ROAS)',
    quote:
      'Having web development, short-form video editing, and performance marketing under one roof eliminated months of freelancer miscommunication. Their video hooks and high-converting landing pages scaled our launch campaign to a 4.2x ROAS.',
    serviceUsed: 'Video Creative + Performance Marketing',
  },
  {
    id: '05',
    name: 'Vikram Singhania',
    role: 'Chief Operating Officer',
    company: 'LogiTrans Freight Systems',
    industry: 'B2B Logistics & Supply Chain',
    metric: '-62%',
    metricLabel: 'Customer support inquiries',
    quote:
      'We had clients calling constantly asking for shipment statuses. XenForge built automated WhatsApp and email milestone triggers that push real-time updates directly from our dispatch sheet. Support tickets dropped by 62% in the first two weeks.',
    serviceUsed: 'Workflow Automation + Status Dispatch',
  },
  {
    id: '06',
    name: 'Kavita Raman',
    role: 'Founder',
    company: 'Nectar Organics',
    industry: 'Clean Beauty & Skincare',
    metric: '99/100',
    metricLabel: 'Mobile speed performance score',
    quote:
      'What impressed me most was their honest advice. During the initial audit, XenForge showed us exactly what was leaking conversions and advised us against spending money on complex software we did not need yet. True craftsmanship and integrity.',
    serviceUsed: 'E-commerce Architecture + Conversion Audit',
  },
];

export default function TestimonialsSection() {
  const [filter, setFilter] = useState<string>('All');

  const industries = ['All', 'Specialty Café & D2C', 'Boutique Real Estate', 'Healthcare & Aesthetic Clinic', 'Fashion & Direct-to-Consumer'];

  const filteredTestimonials =
    filter === 'All'
      ? testimonials
      : testimonials.filter((t) => t.industry === filter);

  return (
    <section
      id="testimonials"
      className="relative bg-black text-white py-24 sm:py-36 px-6 sm:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                04 / CLIENT TESTIMONIALS & RESULTS
              </span>
              <span className="text-white/20">·</span>
              <span className="text-xs font-mono text-white/70 inline-flex items-center gap-1">
                <Star size={11} className="fill-white text-white" /> 5.0 RATED
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
              WHAT FOUNDERS SAY.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md">
            Real feedback from growing businesses that scaled their online presence, automated daily
            operations, and captured more revenue with XenForge.
          </p>
        </div>

        {/* Testimonials Grid (6 authentic reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="liquid-glass rounded-2xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
            >
              <div>
                {/* Metric pill & Industry */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-[11px] font-mono text-white/50 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    {item.industry}
                  </span>
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-white text-white" />
                    ))}
                  </div>
                </div>

                {/* Key Metric Highlight */}
                <div className="mb-5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-white tracking-tight leading-none">
                      {item.metric}
                    </div>
                    <div className="text-[11px] font-mono text-white/50 mt-0.5">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-white/75 leading-relaxed font-normal mb-6 relative">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-white transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/50">
                    {item.role}, <span className="text-white/70">{item.company}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-white/60">
                  {item.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              <span>100% Code & Data Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              <span>14-Day Average Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              <span>Zero Penny Upfront Commitment</span>
            </div>
          </div>

          <Link
            to="/audit"
            className="bg-white text-black text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Sparkles size={13} />
            <span>Get Your Free Business Audit</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
