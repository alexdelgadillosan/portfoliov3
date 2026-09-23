export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string;
  image: string;
  imageBg?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ledgerflow',
    title: 'LedgerFlow',
    summary:
      'Transfers that survive retries and partial failures without double-charging — idempotency + transactional outbox.',
    description:
      'Interactive demo of a distributed payment flow. You can send a transfer, replay the same idempotency key, or kill the ledger mid-flight and watch the outbox recover so balances stay consistent — no double charge.',
    highlights: [
      'Idempotent transfer API with client keys',
      'Transactional outbox + retry after partial failure',
      'Event log that makes the pipeline visible',
    ],
    tech: 'FastAPI patterns · Event-driven · Outbox · OpenTelemetry (interactive demo)',
    image: 'assets/systems/ledgerflow.svg',
    imageBg: '#0a1628',
    demoUrl: 'https://alexdelgadillosan.github.io/ledgerflow/',
    githubUrl: 'https://github.com/alexdelgadillosan/ledgerflow',
    featured: true,
  },
  {
    id: 'sentinel-ai',
    title: 'Sentinel AI',
    summary:
      'Investigates production incidents with docs/logs, cites sources, and waits for human approval before acting.',
    description:
      'Agent-style incident investigation console. Paste an incident, watch retrieval and tool steps stream in, then Approve or Reject before any side effect. Includes a Langfuse-style trace and a mock LLM-as-judge eval panel.',
    highlights: [
      'Multi-step agent timeline with citations',
      'Human-in-the-loop gate before actions',
      'Trace + eval panel for interview walkthroughs',
    ],
    tech: 'LangGraph · RAG · HITL · Langfuse-style traces (interactive demo)',
    image: 'assets/systems/sentinel.svg',
    imageBg: '#07151a',
    demoUrl: 'https://alexdelgadillosan.github.io/sentinel-ai/',
    githubUrl: 'https://github.com/alexdelgadillosan/sentinel-ai',
    featured: true,
  },
  {
    id: 'chaoslab',
    title: 'ChaosLab',
    summary:
      'One-click fault injection so you can see latency, errors, and recovery patterns in traces and metrics.',
    description:
      'Reliability playground with a live topology, chaos injectors (latency, kill DB, 50% 500s, stop worker, duplicate messages), and metrics/traces that react in real time — including circuit-breaker style status text.',
    highlights: [
      'Inject failures and watch health dots flip',
      'Sparklines, error rate, queue depth',
      'Trace waterfall + recovery narratives',
    ],
    tech: 'Fault injection · OTel · Retries · Circuit breaker (interactive demo)',
    image: 'assets/systems/chaoslab.svg',
    imageBg: '#0c0f0a',
    demoUrl: 'https://alexdelgadillosan.github.io/chaoslab/',
    githubUrl: 'https://github.com/alexdelgadillosan/chaoslab',
    featured: true,
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    summary:
      'Golden path to spin up a new service: repo, CI, container, Helm, and deploy to Kubernetes.',
    description:
      'Self-service developer platform simulation. Pick a template (FastAPI / Node / .NET), run the create-service wizard, and watch the pipeline light up: repo → Dockerfile → CI → Helm → ArgoCD → Running, plus rollback and a fake SLO panel.',
    highlights: [
      'Golden-path wizard for new services',
      'Animated CI/CD → GitOps deploy stages',
      'Observability / rollback touchpoints',
    ],
    tech: 'Templates · CI · Helm · ArgoCD · K8s (interactive demo)',
    image: 'assets/systems/launchpad.svg',
    imageBg: '#0b1220',
    demoUrl: 'https://alexdelgadillosan.github.io/launchpad/',
    githubUrl: 'https://github.com/alexdelgadillosan/launchpad',
    featured: true,
  },
  {
    id: 'mi-alcancia',
    title: 'Mi Alcancia App',
    summary:
      'Mobile savings tracker — view balances and transaction history for your own account in real time.',
    description:
      'React Native savings app backed by a REST API, MongoDB, and AWS — focused on personal account balances and transaction history.',
    highlights: [
      'Mobile-first account views',
      'REST API + MongoDB',
      'Hosted on AWS',
    ],
    tech: 'React Native · REST API · MongoDB · AWS',
    image: 'assets/app.png',
    featured: false,
  },
  {
    id: 'nexus',
    title: 'Nexus Consulting Lab',
    summary:
      'Marketing site for a consulting lab — clear positioning, services overview, and a path to get in touch.',
    description:
      'Landing page for Nexus Consulting Lab: positioning, services, and contact path for prospective clients.',
    highlights: [
      'Responsive marketing layout',
      'Clear CTA / contact path',
    ],
    tech: 'React · Bootstrap',
    image: 'assets/nexuss.png',
    demoUrl: 'https://nxus.tech/',
    featured: false,
  },
  {
    id: 'watchface',
    title: 'Garmin Venu 3s Watchface (To be released)',
    summary:
      'Pokemon-inspired watchface that evolves as you hit daily exercise goals on the Garmin Venu 3s.',
    description:
      'Connect IQ watchface for Garmin Venu 3s. Visual state changes as you complete daily exercise goals — Pokemon-inspired progression.',
    highlights: [
      'Goal-driven visual states',
      'Built with Monkey C / Connect IQ',
    ],
    tech: 'Monkey C · Garmin Connect IQ',
    image: 'assets/watchface.png',
    featured: false,
  },
];
