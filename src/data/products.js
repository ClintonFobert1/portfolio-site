export const products = [
  {
    slug: 'site-conversion-engine',
    plate: 'I',
    title: 'Site Conversion Engine',
    category: 'AI Automation',
    year: '2026',
    status: 'In Development',
    featured: true,
    summary:
      'An AI-driven pipeline that tears down legacy WordPress sites and rebuilds them as modern, custom-built sites — automatically.',
    description: [
      'Hundreds of aging WordPress sites. One team. The math never works — unless the rebuild itself becomes software. The Site Conversion Engine ingests a legacy WordPress site, maps its content and structure, and reconstructs it on our modern custom platform with minimal human touch.',
      'The system pairs AI content extraction and layout mapping with deterministic build steps, so every converted site lands consistent, fast, and on-brand. What used to be weeks of manual rebuild work becomes a supervised, repeatable run.',
    ],
    highlights: [
      'Automated content & structure extraction from legacy WordPress',
      'AI-assisted layout mapping to a modern component system',
      'Deterministic, repeatable build pipeline with human review gates',
      'Designed to convert an entire portfolio of sites, not one-offs',
    ],
    stack: ['AI Agents', 'Node.js', 'React', 'Content Pipelines', 'WordPress Internals'],
    role: 'Architect & Builder',
  },
  {
    slug: 'conversion-tracker',
    plate: 'II',
    title: 'Conversion Tracker',
    category: 'Internal Dashboard',
    year: '2025',
    status: 'In Production',
    featured: true,
    summary:
      'A dark-themed operations dashboard that tracks every site moving through the conversion pipeline — across every host.',
    description: [
      'When you are migrating sites at scale, the hardest question becomes "where is everything?" The Conversion Tracker answers it: every site to convert, every site mid-move, every site done — organized by host and status, visible to the whole team.',
      'Built with React and a JWT-authenticated API over PostgreSQL, it replaced scattered spreadsheets with a single source of truth for the migration effort.',
    ],
    highlights: [
      'Pipeline views: to convert, moving servers, converted',
      'Per-host drill-downs across the fleet',
      'Role-based auth and a clean REST API',
      'Replaced spreadsheet chaos with one source of truth',
    ],
    stack: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'JWT Auth', 'Tailwind'],
    role: 'Design & Full-Stack Build',
  },
  {
    slug: 'client-performance',
    plate: 'III',
    title: 'Client Performance',
    category: 'Analytics Platform',
    year: '2026',
    status: 'In Production',
    featured: true,
    summary:
      'A GA-style analytics platform unifying GA4, Search Console, Ads, and PageSpeed data into one dashboard for client performance.',
    description: [
      'Clients ask one question: "how is my site doing?" The real answer lives in four different Google products. Client Performance collects GA4, Search Console, Google Ads, and PageSpeed Insights data into its own schema and renders it as one coherent story.',
      'The app owns a complete MariaDB schema with scheduled collection jobs, rate-limit-aware API accounts, and audit logging — a small data platform, not just a dashboard.',
    ],
    highlights: [
      'Unified GA4 + GSC + Ads + PageSpeed reporting',
      'Owned schema with scheduled collection runs and job tracking',
      'Per-client coverage — Ads renders only where it is enabled',
      'Deterministic seed and local Docker dev environment',
    ],
    stack: ['React 19', 'Express', 'MariaDB', 'Recharts', 'Google APIs', 'Docker'],
    role: 'Architect & Full-Stack Build',
  },
  {
    slug: 'sales-crm',
    plate: 'IV',
    title: 'Sales CRM',
    category: 'Business Platform',
    year: '2026',
    status: 'In Development',
    featured: false,
    summary:
      'A specification-driven CRM for the sales team — strict TypeScript, raw SQL migrations, and behavior specs as the source of truth.',
    description: [
      'Off-the-shelf CRMs bend your process to theirs. This one is built the other way around: authoritative behavior specs describe how the sales workflow actually operates, and the implementation follows them slice by slice.',
      'Under the hood it is a strict-TypeScript Express application over MariaDB with ordered SQL migrations and separate web and worker processes — boring technology, deliberately chosen, arranged for correctness.',
    ],
    highlights: [
      'Behavior specifications as the authoritative source of truth',
      'Strict TypeScript API boundaries',
      'Raw, ordered SQL migrations — no magic',
      'Separate web and long-running worker processes',
    ],
    stack: ['TypeScript', 'Express', 'MariaDB', 'React', 'Vite'],
    role: 'Architecture & Implementation',
  },
  {
    slug: 'prompt-operations',
    plate: 'V',
    title: 'Prompt Operations',
    category: 'AI Practice',
    year: 'Ongoing',
    status: 'Always On',
    featured: false,
    summary:
      'The ongoing discipline behind everything else: researching, testing, and operationalizing the newest AI tools and methods.',
    description: [
      'Part of my role is explicit: stay current with AI so the company does not have to. That means structured research into new models, agents, and tooling — then turning what works into prompts, workflows, and internal guidance others can use.',
      'It is less a project than a practice: evaluation notes, reusable prompt libraries, agent workflow patterns, and a steady pipeline of "this could save us a week" experiments, a few of which become real tools.',
    ],
    highlights: [
      'Continuous evaluation of new models, agents, and tools',
      'Reusable prompt libraries and workflow patterns',
      'Internal guidance that turns research into practice',
      'Experiments graduate into production tooling',
    ],
    stack: ['LLMs', 'Agent Frameworks', 'Evaluation', 'Documentation'],
    role: 'Researcher & Practitioner',
  },
  {
    slug: 'fobert-websites',
    plate: 'VI',
    title: 'Fobert Websites',
    category: 'Origin Story',
    year: '2015—2024',
    status: 'Archived',
    featured: false,
    summary:
      'The independent studio where it started — designing and shipping websites for real businesses, end to end, for nearly a decade.',
    description: [
      'Before the AI tooling and the internal platforms, there was fobertwebsites.com: a one-person studio building sites for real clients. Every part of the job — design, build, hosting, the awkward invoice email — was mine.',
      'That decade taught the things frameworks cannot: how to listen to what a business actually needs, how to ship without a team behind you, and how to keep something running for years. It is the foundation everything since is built on.',
    ],
    highlights: [
      'End-to-end client work: design, build, launch, maintain',
      'Nearly a decade of shipped, real-world sites',
      'The habits: listen first, ship, keep it running',
      'Retired as the work moved to software & AI engineering',
    ],
    stack: ['Design', 'WordPress', 'HTML/CSS/JS', 'Client Work'],
    role: 'Founder / Everything',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const featuredProducts = products.filter((p) => p.featured)
