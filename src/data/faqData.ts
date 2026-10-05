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
      'Every project starts with an initial discovery conversation. We learn how your business operates, what problems are slowing you down, and what the project needs to achieve. If there is mutual alignment, we define a clear scope, timeline, milestones, and a fixed proposal before any contract is signed.',
  },
  {
    id: '02',
    question: 'How long does a website take?',
    answer:
      'A focused editorial or marketing website typically takes 3 to 5 weeks from kickoff to launch. More complex web applications with custom database architecture, authenticated client portals, or deep third-party API integrations generally take between 6 to 10 weeks. We provide realistic schedules and deliver against defined milestones.',
  },
  {
    id: '03',
    question: 'Can you work with an existing website?',
    answer:
      'Yes. We regularly take over existing codebases to fix performance bottlenecks, eliminate technical debt, redesign critical user journeys, or implement modern features. We begin by auditing your current architecture and give you an honest recommendation on whether refactoring or rebuilding is the smarter commercial path.',
  },
  {
    id: '04',
    question: 'Do you build custom AI automation?',
    answer:
      'Yes. We build practical AI automations tied directly to tangible business tasks—such as inbound lead triage, customer inquiry routing, automated document processing, and internal team knowledge retrieval. We do not build novelty AI demos; every system we deploy must have a specific, measurable job.',
  },
  {
    id: '05',
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. We offer continuous engineering, design, and growth retainers to keep your systems fast, secure, and evolving alongside your business. You can also engage us on a project-by-project basis if your needs are seasonal.',
  },
  {
    id: '06',
    question: 'Can you work with an existing development team?',
    answer:
      'Frequently. We often embed as a specialized unit focusing on design systems, frontend architecture, motion engineering, or AI pipelines alongside existing in-house developers. We work with standard Git pull requests, clear documentation, and transparent sprint cycles.',
  },
  {
    id: '07',
    question: 'What information do you need before starting?',
    answer:
      'A summary of what you are aiming to build or solve, any existing brand guidelines or design files, access to relevant codebases or analytics accounts if applicable, and your intended target launch window and budget range. If you do not have all of this documented yet, our initial discovery call will help define it.',
  },
];
