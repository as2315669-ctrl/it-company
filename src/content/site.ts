/** Central copy and structure — swap for CMS or i18n later. */
export const site = {
  name: 'Nexora Systems',
  legalName: 'Nexora Systems Ltd.',
  tagline: 'Managed IT, cloud, and software delivery for teams that cannot afford downtime.',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'How we work', href: '#process' },
    { label: 'Why Nexora', href: '#trust' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    eyebrow: 'Service-based IT partner',
    headline: 'Ship faster with infrastructure and engineering you can trust.',
    sub:
      'From cloud migrations to dedicated squads, we embed with your business outcomes—not billable hours alone.',
    primaryCta: 'Book a discovery call',
    secondaryCta: 'View capabilities',
  },

  services: [
    {
      title: 'Managed infrastructure',
      description:
        'Monitoring, patching, backups, and incident response with clear SLAs and runbooks your auditors will recognize.',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'AWS, Azure, or GCP landing zones, CI/CD, IaC, and cost guardrails so releases stay boring—in a good way.',
    },
    {
      title: 'Custom software',
      description:
        'Product-minded engineers for web APIs, internal tools, and integrations. Same team from prototype to production.',
    },
    {
      title: 'Security & compliance',
      description:
        'Hardening, access reviews, and evidence packs aligned to SOC 2 / ISO-style programs—without slowing delivery.',
    },
  ],

  process: {
    title: 'How we work with you',
    subtitle:
      'Borrowed from how leading consultancies onboard clients: discovery first, then a fixed proposal, then iterative delivery.',
    steps: [
      {
        n: '01',
        title: 'Discovery',
        text: 'We map systems, risks, and stakeholders. You get a written assessment before any long-term commitment.',
      },
      {
        n: '02',
        title: 'Proposal & kickoff',
        text: 'Clear scope, milestones, and communication rhythm. Dedicated lead engineer and account contact.',
      },
      {
        n: '03',
        title: 'Deliver & measure',
        text: 'Weekly visibility, automated reporting where it helps, and quarterly roadmap reviews.',
      },
    ],
  },

  trust: {
    title: 'Built for operators and execs',
    subtitle:
      'Patterns you will recognize from serious IT services sites: transparency, documentation, and measurable uptime.',
    stats: [
      { value: '99.9%', label: 'Uptime target (managed stack)' },
      { value: '<15m', label: 'Critical response (business hours)' },
      { value: '24/7', label: 'Optional on-call coverage' },
    ],
    badges: ['NDA-first engagement', 'EU & US-friendly contracting', 'Source control in your org'],
  },

  testimonial: {
    quote:
      'They replaced three vendors with one accountable team. Our release cadence doubled and finance finally got predictable cloud spend.',
    author: 'Placeholder Client',
    role: 'CTO, mid-market SaaS',
  },

  cta: {
    title: 'Tell us what “stable” should look like',
    text: 'We reply within one business day with next steps—usually a 30-minute call, no pitch deck required.',
    button: 'Start a conversation',
  },

  footer: {
    email: 'hello@nexorasystems.example',
    phone: '+1 (555) 010-2048',
    address: 'Remote-first · London · New York',
    note: 'Replace contact details with your own before launch.',
  },
} as const
