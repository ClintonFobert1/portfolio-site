export const journal = [
  {
    slug: 'building-with-machines',
    number: '001',
    title: 'Building With Machines',
    date: 'July 2026',
    readTime: '4 min',
    tags: ['AI', 'Workflow'],
    excerpt:
      'What "AI prompt engineer" actually means day to day — and why the job is mostly engineering, not prompting.',
    body: [
      'The title says prompt engineer. The work is closer to being a foreman on a very strange job site. The AI lays bricks unbelievably fast, but it will happily build a staircase to nowhere if the drawings are vague.',
      'So most of my day is drawings: specifications, constraints, examples, and review. The better I describe the system — the schema, the invariants, the edge cases — the better the machine builds. Vague in, vague out. Precise in, leverage out.',
      'The surprising part is how much classic engineering discipline matters more with AI, not less. Specs, migrations, tests, boring naming conventions — these were nice-to-haves when humans wrote every line. They are load-bearing when machines do.',
      'The developers who thrive in this era will not be the ones who type the fastest. They will be the ones who can describe a system so clearly that anything — human or machine — could build it.',
    ],
  },
  {
    slug: 'tearing-down-wordpress',
    number: '002',
    title: 'Tearing Down WordPress',
    date: 'June 2026',
    readTime: '5 min',
    tags: ['Automation', 'Migration'],
    excerpt:
      'Notes from building a pipeline that converts legacy WordPress sites into modern custom builds — automatically.',
    body: [
      'Every legacy WordPress site is a small archaeology dig. Plugins stacked on plugins, themes forked years ago, content living in shortcodes nobody remembers installing. Converting one site by hand is a craft. Converting hundreds is a software problem.',
      'The pipeline treats a site as data, not pages: extract the content, classify the sections, map them onto a modern component system, and rebuild. AI is good at the fuzzy middle — "this mess of divs is actually a testimonial carousel" — while deterministic code handles everything that must be exact.',
      'The hard-won lesson: put human review gates where taste matters and nowhere else. Automate the extraction, automate the mapping, automate the build — then let a person glance at the result and approve it. Full automation is the goal; supervised automation is the path.',
      'There is something satisfying about pointing software at a decade of technical debt and watching it come back clean.',
    ],
  },
  {
    slug: 'the-unglamorous-middle',
    number: '003',
    title: 'The Unglamorous Middle',
    date: 'May 2026',
    readTime: '3 min',
    tags: ['Backend', 'Databases'],
    excerpt:
      'AI writes the code, but somebody still has to connect the backends, fix the data, and make the tool real.',
    body: [
      'Demos are easy now. Anyone can generate a beautiful dashboard in an afternoon. What separates a demo from a tool is the unglamorous middle: the auth that actually works, the database schema that survives contact with real data, the API connection that handles the weird failure mode.',
      'A surprising amount of my job lives there. Inside databases, tracing why a number is wrong. Inside backend connections, negotiating between systems that were never meant to talk. Inside meetings, translating "can we see this in one place?" into schemas and endpoints.',
      'AI has made the first 80% of building astonishingly fast, which means the value has moved to the last 20%. That last stretch is still handmade. I suspect it will be for a while.',
      'If you want to be useful in an AI-accelerated team: get good at the part the machine cannot see — the context, the data, the people.',
    ],
  },
  {
    slug: 'keeping-up-is-the-job',
    number: '004',
    title: 'Keeping Up Is the Job',
    date: 'April 2026',
    readTime: '4 min',
    tags: ['Research', 'AI'],
    excerpt:
      'Staying current with AI is not a hobby anymore — it is a formal responsibility. Here is how I structure it.',
    body: [
      'Part of my role is a standing task: research and stay up to date with the newest AI tools and methods, so the company gets the most out of them. It sounds vague. Done well, it is anything but.',
      'My structure: capture everything interesting in a running log, but only evaluate on a schedule. A new model or tool gets a real test against a real problem we have — not a toy demo. Most things fail this test. The ones that pass get written up: what it is, what it is good for, what it would change.',
      'The discipline matters because the field is loud. Every week ships a "game changer." The job is not to chase them — it is to run a filter the rest of the team can trust, so when I say "this one matters," it does.',
      'Research without operationalization is entertainment. The write-up, the prompt library, the workflow change — that is the deliverable.',
    ],
  },
]

export const getPost = (slug) => journal.find((p) => p.slug === slug)
