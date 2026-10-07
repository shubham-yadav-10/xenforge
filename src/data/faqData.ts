export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: '01',
    question: 'How does a project start?',
    answer:
      'We start with a free business audit. We research your market, your competitors, and the digital gaps costing you customers. Before we ask for a single rupee, we build a free sample of your solution (like a homepage mockup or automation demo) so you see exactly what you are getting before you decide.',
  },
  {
    id: '02',
    question: 'How long does a website or automation project take?',
    answer:
      'A focused, mobile-friendly marketing or business website typically takes 2 to 3 weeks from kickoff to launch. AI chatbots and lead automation pipelines typically take 5 to 10 days. We provide realistic schedules and deliver against defined milestones.',
  },
  {
    id: '03',
    question: 'Can you work with an existing website or social page?',
    answer:
      'Yes. Many clients already have an Instagram page or an older website. We can rebuild or upgrade your existing site, connect automated WhatsApp replies to your current inquiries, or optimize your Google Business profile without disrupting current operations.',
  },
  {
    id: '04',
    question: 'Do you build custom AI automation for small businesses?',
    answer:
      'Yes. We build practical AI automations that save real hours every week: customer service chatbots for WhatsApp/Instagram, automatic replies to common questions, lead capture into Google Sheets or CRMs, and booking reminders. No complex jargon or impractical experiments.',
  },
  {
    id: '05',
    question: 'What is your revision and ownership policy?',
    answer:
      'Every project includes two rounds of free revisions to ensure you love the final product. Once the project is paid for, you own 100% of your website, design files, accounts, and data. We never lock you into proprietary hosting traps.',
  },
  {
    id: '06',
    question: 'How does the free audit and free sample work?',
    answer:
      'Simply share your business name and Instagram or website link through our Free Audit form. Within 48 hours, we send you a clear breakdown of what is working, what is costing you customers, and a sample preview of the solution we would build for you. There is zero pressure and zero obligation.',
  },
  {
    id: '07',
    question: 'What do you need from me before we start?',
    answer:
      'Just your business details, any existing photos/logos, and an idea of what problems are currently costing you time or customers. If you do not have photos or copy ready, we help guide you through it step by step.',
  },
];
