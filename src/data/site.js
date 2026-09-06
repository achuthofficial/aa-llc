export const WHATSAPP_NUMBER = '19405363431'
export const WHATSAPP_DISPLAY = '+1 (940) 536-3431'

export const whatsappLink = (
  message = "Hi AA Digital Studio — I'd like to book a consultation about a project."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'FAQ', href: '#faq' },
]

export const SERVICES = [
  {
    id: 'web',
    index: '01',
    title: 'Web Applications',
    tag: 'Product Engineering',
    line: 'Fast, scalable products people actually want to use.',
    body:
      'From zero-to-one MVPs to platform rebuilds — React, Next.js, Node and edge-native infrastructure, shipped with design systems, analytics and CI/CD baked in.',
    bullets: [
      'SaaS platforms & dashboards',
      'Design systems & component libraries',
      'API / backend architecture',
      'Performance & Core Web Vitals',
    ],
  },
  {
    id: 'ai',
    index: '02',
    title: 'Agentic AI Services',
    tag: 'Autonomous Systems',
    line: 'Agents that do the work, not just answer questions.',
    body:
      'We design, build and operate LLM agents with real tools, memory and guardrails — RAG pipelines, multi-agent orchestration and human-in-the-loop workflows that hold up in production.',
    bullets: [
      'Custom AI agents & copilots',
      'RAG & knowledge pipelines',
      'Workflow & process automation',
      'Evals, guardrails & observability',
    ],
  },
  {
    id: 'security',
    index: '03',
    title: 'Cyber Security',
    tag: 'Offensive & Defensive',
    line: 'Find it before someone else does.',
    body:
      'Authorised penetration testing, cloud and application security reviews, hardening and incident readiness — delivered with reports your engineers can actually action.',
    bullets: [
      'Web & API penetration testing',
      'Cloud / infrastructure hardening',
      'Secure code & architecture review',
      'Compliance readiness & training',
    ],
  },
  {
    id: '3d',
    index: '04',
    title: '3D & AI Video',
    tag: 'Blender · Motion · Ads',
    line: 'Scroll-stopping visuals, modelled and rendered in-house.',
    body:
      'Blender-crafted product models, cinematic renders and AI-assisted video advertising — built for launch films, paid social and everything in between.',
    bullets: [
      '3D product modelling & lookdev',
      'Cinematic renders & animation',
      'AI-generated video ads',
      'Brand motion & campaign assets',
    ],
  },
]

export const CAPABILITIES = [
  'React', 'Next.js', 'TypeScript', 'Node', 'Python', 'LangGraph', 'RAG',
  'MCP', 'AWS', 'Cloudflare', 'Postgres', 'Pentesting', 'OWASP', 'Zero Trust',
  'Blender', 'Cycles', 'Houdini', 'After Effects', 'AI Video', 'Motion Design',
]

export const WORK = [
  {
    title: 'Helio Ops',
    category: 'Web Application',
    year: '2025',
    blurb: 'Operations platform for a logistics network — real-time fleet telemetry, 40+ dashboards.',
    metric: '−62% ops handling time',
  },
  {
    title: 'Atlas Agent',
    category: 'Agentic AI',
    year: '2025',
    blurb: 'A multi-agent support desk that resolves tickets end to end with tool access and audit trails.',
    metric: '78% autonomous resolution',
  },
  {
    title: 'Redline',
    category: 'Cyber Security',
    year: '2024',
    blurb: 'Full-scope application and cloud penetration test for a fintech pre-Series B.',
    metric: '31 findings, 0 recurrences',
  },
  {
    title: 'Nova Bottle',
    category: '3D & AI Video',
    year: '2025',
    blurb: 'Photoreal Blender product film and a 14-cut AI ad suite for a DTC beverage launch.',
    metric: '4.1× ad click-through',
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery Call',
    body: 'A focused 30 minutes on WhatsApp. We map the problem, the constraints and what success actually looks like — no slide deck theatre.',
  },
  {
    step: '02',
    title: 'Blueprint',
    body: 'You get a written scope: architecture, milestones, risks and a fixed price. Everything is agreed before a single line is written.',
  },
  {
    step: '03',
    title: 'Build Sprints',
    body: 'Weekly demos on a live staging environment. You watch the thing get built instead of waiting for a big reveal.',
  },
  {
    step: '04',
    title: 'Launch & Beyond',
    body: 'Deployment, monitoring, handover docs and a support window — plus an option to keep us on retainer.',
  },
]

export const STATS = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 9, suffix: 'yrs', label: 'Combined experience' },
  { value: 40, suffix: '+', label: 'Clients worldwide' },
  { value: 24, suffix: 'h', label: 'Average reply time' },
]

export const TESTIMONIALS = [
  {
    quote:
      'They shipped in six weeks what our previous vendor could not scope in six months. The agent handles most of our support queue now.',
    name: 'Priya N.',
    role: 'COO, SaaS platform',
  },
  {
    quote:
      'The pentest report was the clearest we have ever received — every finding had a reproduction and a fix. Our auditors were delighted.',
    name: 'Marcus D.',
    role: 'CTO, Fintech',
  },
  {
    quote:
      'The 3D launch film outperformed our studio-shot footage by 4x on paid social. Genuinely stunning work.',
    name: 'Elena R.',
    role: 'Head of Brand, DTC',
  },
  {
    quote:
      'Responsive, straight-talking and technically excellent. It feels like having a senior team on call.',
    name: 'Tobi A.',
    role: 'Founder, Marketplace',
  },
]

export const FAQS = [
  {
    q: 'How do we get started?',
    a: 'Tap any “Book a consultation” button — it opens WhatsApp with a message ready to send. We reply within a working day and set up a 30-minute call.',
  },
  {
    q: 'What does a project cost?',
    a: 'Most engagements are fixed-price against a written scope. Smaller builds and audits start in the low four figures; platform work and retainers are quoted after the discovery call.',
  },
  {
    q: 'How fast can you start?',
    a: 'Usually within one to two weeks. Urgent security work and short creative sprints can often be slotted in sooner — ask us.',
  },
  {
    q: 'Do you work with teams outside the US?',
    a: 'Yes. We work remotely with clients across the US, Europe, the Middle East and Asia, and overlap with your working hours.',
  },
  {
    q: 'Is the security testing authorised and legal?',
    a: 'Always. Every engagement begins with a signed scope and written authorisation, and we follow OWASP and PTES methodology throughout.',
  },
  {
    q: 'Who owns the work?',
    a: 'You do. On final payment, all source code, models, renders and documentation transfer to you in full.',
  },
]
