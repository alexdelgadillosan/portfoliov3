export type ServicesLang = 'en' | 'es';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string;
  image: string;
  imageBg?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ServicesPageCopy {
  servicesTitle: string;
  servicesLead: string;
  projectsTitle: string;
  projectsLead: string;
  ctaText: string;
  ctaLink: string;
  liveDemo: string;
  github: string;
}

export const PAGE_COPY: Record<ServicesLang, ServicesPageCopy> = {
  en: {
    servicesTitle: 'Services',
    servicesLead:
      'I take on selected custom work — from AI systems and APIs to full product builds. Clear scope, solid engineering, and delivery you can run in production.',
    projectsTitle: 'Projects',
    projectsLead:
      'A sample of systems and products that show how those services look in practice.',
    ctaText: 'Want something custom? Contact me.',
    ctaLink: 'Go to contact',
    liveDemo: 'Live Demo',
    github: 'GitHub',
  },
  es: {
    servicesTitle: 'Servicios',
    servicesLead:
      'Acepto trabajos a medida seleccionados — desde sistemas de IA y APIs hasta productos completos. Alcance claro, ingeniería sólida y entregables listos para producción.',
    projectsTitle: 'Proyectos',
    projectsLead:
      'Una muestra de sistemas y productos que muestran cómo se ven esos servicios en la práctica.',
    ctaText: '¿Necesitas algo a medida? Contáctame.',
    ctaLink: 'Ir a contacto',
    liveDemo: 'Demo en vivo',
    github: 'GitHub',
  },
};

export const SERVICES: Record<ServicesLang, ServiceItem[]> = {
  en: [
    {
      id: 'ai',
      title: 'AI systems & agents',
      description:
        'Design and ship LLM-powered workflows: RAG over your docs, tool-using agents, human-in-the-loop approvals, and evaluation/observability so the system is trustworthy in production.',
      highlights: [
        'LangGraph / RAG / HITL patterns',
        'Tracing, evals, and safe action gates',
        'Fit for support, ops, and internal copilots',
      ],
    },
    {
      id: 'apis',
      title: 'APIs & distributed backends',
      description:
        'Custom services with clear contracts, idempotency, and failure handling — from REST APIs to event-driven flows for payments, ledgers, and enterprise integrations.',
      highlights: [
        '.NET and Python (FastAPI) stacks',
        'Outbox, retries, and consistency patterns',
        'Observability built in from day one',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & platform',
      description:
        'Containers, CI/CD, Kubernetes, and golden paths so teams can ship services without reinventing deploy wiring every time.',
      highlights: [
        'Docker, K8s, GitOps-style delivery',
        'AWS / Azure / GCP experience',
        'Developer platform and automation',
      ],
    },
    {
      id: 'web',
      title: 'Web & product UI',
      description:
        'Product-facing interfaces in Angular, React, or Next.js — fast, responsive, and aligned with the backend you already run.',
      highlights: [
        'SPA and marketing sites when needed',
        'Clean UX without overbuilt dashboards',
        'Tied to real APIs and auth',
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile apps',
      description:
        'Cross-platform mobile with React Native or Flutter when the product needs a native feel and a shared API backend.',
      highlights: [
        'Account, savings, and consumer flows',
        'API-first architecture',
        'Store-ready structure',
      ],
    },
    {
      id: 'custom',
      title: 'Custom end-to-end builds',
      description:
        'From idea to architecture to ship: scoped discovery, implementation, and handover — tailored systems, not one-size templates.',
      highlights: [
        'Discovery → build → deploy',
        'Documentation and ownership transfer',
        'Selective freelance / contract work',
      ],
    },
  ],
  es: [
    {
      id: 'ai',
      title: 'Sistemas de IA y agentes',
      description:
        'Diseño e implementación de flujos con LLMs: RAG sobre tus documentos, agentes con tools, aprobación humana (HITL) y evaluación/observabilidad para que sea confiable en producción.',
      highlights: [
        'Patrones LangGraph / RAG / HITL',
        'Tracing, evals y puertas de acción seguras',
        'Útil para soporte, ops y copilots internos',
      ],
    },
    {
      id: 'apis',
      title: 'APIs y backends distribuidos',
      description:
        'Servicios a medida con contratos claros, idempotencia y manejo de fallos — desde APIs REST hasta flujos event-driven para pagos, ledgers e integraciones enterprise.',
      highlights: [
        'Stacks .NET y Python (FastAPI)',
        'Outbox, reintentos y consistencia',
        'Observabilidad desde el día uno',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud y plataforma',
      description:
        'Contenedores, CI/CD, Kubernetes y golden paths para que los equipos publiquen servicios sin reinventar el deploy cada vez.',
      highlights: [
        'Docker, K8s y entrega tipo GitOps',
        'Experiencia en AWS / Azure / GCP',
        'Automatización y developer platforms',
      ],
    },
    {
      id: 'web',
      title: 'Web y UI de producto',
      description:
        'Interfaces de producto en Angular, React o Next.js — rápidas, responsive y alineadas con el backend que ya operas.',
      highlights: [
        'SPA y sitios de marketing cuando haga falta',
        'UX limpia, sin dashboards de más',
        'Integradas con APIs y auth reales',
      ],
    },
    {
      id: 'mobile',
      title: 'Apps móviles',
      description:
        'Móvil multiplataforma con React Native o Flutter cuando el producto necesita sensación nativa y un backend API compartido.',
      highlights: [
        'Flujos de cuenta, ahorro y consumo',
        'Arquitectura API-first',
        'Estructura lista para stores',
      ],
    },
    {
      id: 'custom',
      title: 'Desarrollos a medida end-to-end',
      description:
        'De la idea a la arquitectura y al ship: discovery acotado, implementación y traspaso — sistemas a medida, no plantillas genéricas.',
      highlights: [
        'Discovery → build → deploy',
        'Documentación y traspaso de ownership',
        'Freelance / contrato selectivo',
      ],
    },
  ],
};

const PROJECT_MEDIA: Omit<
  ProjectItem,
  'description' | 'highlights' | 'tech'
>[] = [
  {
    id: 'ledgerflow',
    title: 'LedgerFlow',
    image: 'assets/systems/ledgerflow.svg',
    imageBg: '#0a1628',
    demoUrl: 'https://alexdelgadillosan.github.io/ledgerflow/',
    githubUrl: 'https://github.com/alexdelgadillosan/ledgerflow',
  },
  {
    id: 'sentinel-ai',
    title: 'Sentinel AI',
    image: 'assets/systems/sentinel.svg',
    imageBg: '#07151a',
    demoUrl: 'https://alexdelgadillosan.github.io/sentinel-ai/',
    githubUrl: 'https://github.com/alexdelgadillosan/sentinel-ai',
  },
  {
    id: 'chaoslab',
    title: 'ChaosLab',
    image: 'assets/systems/chaoslab.svg',
    imageBg: '#0c0f0a',
    demoUrl: 'https://alexdelgadillosan.github.io/chaoslab/',
    githubUrl: 'https://github.com/alexdelgadillosan/chaoslab',
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    image: 'assets/systems/launchpad.svg',
    imageBg: '#0b1220',
    demoUrl: 'https://alexdelgadillosan.github.io/launchpad/',
    githubUrl: 'https://github.com/alexdelgadillosan/launchpad',
  },
  {
    id: 'mi-alcancia',
    title: 'Mi Alcancia App',
    image: 'assets/app.png',
  },
  {
    id: 'nexus',
    title: 'Nexus Consulting Lab',
    image: 'assets/nexuss.png',
    demoUrl: 'https://nxus.tech/',
  },
  {
    id: 'watchface',
    title: 'Garmin Venu 3s Watchface (To be released)',
    image: 'assets/watchface.png',
  },
];

const PROJECT_TEXT: Record<
  ServicesLang,
  Record<string, Pick<ProjectItem, 'description' | 'highlights' | 'tech' | 'title'>>
> = {
  en: {
    ledgerflow: {
      title: 'LedgerFlow',
      description:
        'Interactive demo of a distributed payment flow. Send a transfer, replay the same idempotency key, or kill the ledger mid-flight and watch the outbox recover so balances stay consistent — no double charge.',
      highlights: [
        'Idempotent transfer API with client keys',
        'Transactional outbox + retry after partial failure',
        'Event log that makes the pipeline visible',
      ],
      tech: 'FastAPI patterns · Event-driven · Outbox · OpenTelemetry (interactive demo)',
    },
    'sentinel-ai': {
      title: 'Sentinel AI',
      description:
        'Agent-style incident investigation console. Paste an incident, watch retrieval and tool steps stream in, then Approve or Reject before any side effect. Includes a Langfuse-style trace and a mock LLM-as-judge eval panel.',
      highlights: [
        'Multi-step agent timeline with citations',
        'Human-in-the-loop gate before actions',
        'Trace + eval panel for walkthroughs',
      ],
      tech: 'LangGraph · RAG · HITL · Langfuse-style traces (interactive demo)',
    },
    chaoslab: {
      title: 'ChaosLab',
      description:
        'Reliability playground with a live topology, chaos injectors (latency, kill DB, 50% 500s, stop worker, duplicate messages), and metrics/traces that react in real time.',
      highlights: [
        'Inject failures and watch health dots flip',
        'Sparklines, error rate, queue depth',
        'Trace waterfall + recovery narratives',
      ],
      tech: 'Fault injection · OTel · Retries · Circuit breaker (interactive demo)',
    },
    launchpad: {
      title: 'Launchpad',
      description:
        'Self-service developer platform simulation. Pick a template, run create-service, and watch repo → CI → Helm → ArgoCD → Running, plus rollback and a fake SLO panel.',
      highlights: [
        'Golden-path wizard for new services',
        'Animated CI/CD → GitOps deploy stages',
        'Observability / rollback touchpoints',
      ],
      tech: 'Templates · CI · Helm · ArgoCD · K8s (interactive demo)',
    },
    'mi-alcancia': {
      title: 'Mi Alcancia App',
      description:
        'React Native savings app backed by a REST API, MongoDB, and AWS — personal account balances and transaction history.',
      highlights: [
        'Mobile-first account views',
        'REST API + MongoDB',
        'Hosted on AWS',
      ],
      tech: 'React Native · REST API · MongoDB · AWS',
    },
    nexus: {
      title: 'Nexus Consulting Lab',
      description:
        'Marketing site for a consulting lab: positioning, services overview, and a clear path to get in touch.',
      highlights: [
        'Responsive marketing layout',
        'Clear CTA / contact path',
      ],
      tech: 'React · Bootstrap',
    },
    watchface: {
      title: 'Garmin Venu 3s Watchface (To be released)',
      description:
        'Connect IQ watchface for Garmin Venu 3s. Visual state changes as you hit daily exercise goals — Pokemon-inspired progression.',
      highlights: [
        'Goal-driven visual states',
        'Built with Monkey C / Connect IQ',
      ],
      tech: 'Monkey C · Garmin Connect IQ',
    },
  },
  es: {
    ledgerflow: {
      title: 'LedgerFlow',
      description:
        'Demo interactiva de un flujo de pagos distribuido. Envía una transferencia, repite la misma clave de idempotencia o mata el ledger a mitad de camino y mira cómo el outbox recupera para que los balances queden consistentes — sin doble cobro.',
      highlights: [
        'API de transferencias idempotente',
        'Outbox transaccional + reintento tras fallo parcial',
        'Log de eventos que hace visible el pipeline',
      ],
      tech: 'Patrones FastAPI · Event-driven · Outbox · OpenTelemetry (demo interactiva)',
    },
    'sentinel-ai': {
      title: 'Sentinel AI',
      description:
        'Consola de investigación de incidentes estilo agente. Pega un incidente, mira retrieval y tools en timeline, y Aprueba o Rechaza antes de cualquier side effect. Incluye trace tipo Langfuse y panel de eval mock.',
      highlights: [
        'Timeline multi-paso con citas',
        'Puerta HITL antes de actuar',
        'Panel de trace + eval para demos',
      ],
      tech: 'LangGraph · RAG · HITL · Traces estilo Langfuse (demo interactiva)',
    },
    chaoslab: {
      title: 'ChaosLab',
      description:
        'Playground de confiabilidad con topología en vivo, inyección de fallos (latencia, matar DB, 50% 500s, parar worker, mensajes duplicados) y métricas/traces que reaccionan en tiempo real.',
      highlights: [
        'Inyecta fallos y ves los health dots',
        'Sparklines, error rate, profundidad de cola',
        'Waterfall de traces + narrativas de recovery',
      ],
      tech: 'Fault injection · OTel · Retries · Circuit breaker (demo interactiva)',
    },
    launchpad: {
      title: 'Launchpad',
      description:
        'Simulación de developer platform self-service. Elige template, crea el servicio y mira repo → CI → Helm → ArgoCD → Running, más rollback y un panel SLO de demo.',
      highlights: [
        'Wizard de golden path',
        'Etapas animadas CI/CD → GitOps',
        'Observabilidad / rollback',
      ],
      tech: 'Templates · CI · Helm · ArgoCD · K8s (demo interactiva)',
    },
    'mi-alcancia': {
      title: 'Mi Alcancia App',
      description:
        'App de ahorro en React Native con API REST, MongoDB y AWS — balances y historial de transacciones de tu cuenta.',
      highlights: [
        'Vistas mobile-first',
        'API REST + MongoDB',
        'Hosteada en AWS',
      ],
      tech: 'React Native · REST API · MongoDB · AWS',
    },
    nexus: {
      title: 'Nexus Consulting Lab',
      description:
        'Sitio de marketing para un lab de consultoría: posicionamiento, servicios y un camino claro para contactar.',
      highlights: [
        'Layout marketing responsive',
        'CTA / contacto claros',
      ],
      tech: 'React · Bootstrap',
    },
    watchface: {
      title: 'Garmin Venu 3s Watchface (por lanzar)',
      description:
        'Watchface Connect IQ para Garmin Venu 3s. El estado visual cambia al cumplir metas diarias de ejercicio — progresión inspirada en Pokemon.',
      highlights: [
        'Estados visuales por metas',
        'Monkey C / Connect IQ',
      ],
      tech: 'Monkey C · Garmin Connect IQ',
    },
  },
};

export function getProjects(lang: ServicesLang): ProjectItem[] {
  return PROJECT_MEDIA.map((media) => {
    const text = PROJECT_TEXT[lang][media.id];
    return {
      ...media,
      title: text.title,
      description: text.description,
      highlights: text.highlights,
      tech: text.tech,
    };
  });
}

export function isServicesLang(value: string): value is ServicesLang {
  return value === 'en' || value === 'es';
}
