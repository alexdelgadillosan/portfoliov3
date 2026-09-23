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
        'RAG, agents with tools, and human approval before actions — built for production, not demos.',
      highlights: [],
    },
    {
      id: 'apis',
      title: 'APIs & distributed backends',
      description:
        'Custom APIs and event-driven services with clear contracts, retries, and failure handling.',
      highlights: [],
    },
    {
      id: 'cloud',
      title: 'Cloud & platform',
      description:
        'Docker, Kubernetes, CI/CD, and golden paths so your team can ship without reinventing deploy.',
      highlights: [],
    },
    {
      id: 'web',
      title: 'Web & product UI',
      description:
        'Product UIs in Angular, React, or Next.js — fast, responsive, wired to real backends.',
      highlights: [],
    },
    {
      id: 'mobile',
      title: 'Mobile apps',
      description:
        'Cross-platform apps with React Native or Flutter when you need a native feel and a shared API.',
      highlights: [],
    },
    {
      id: 'custom',
      title: 'Custom end-to-end builds',
      description:
        'From idea to ship: scoped discovery, build, and handover — tailored systems, not templates.',
      highlights: [],
    },
  ],
  es: [
    {
      id: 'ai',
      title: 'Sistemas de IA y agentes',
      description:
        'RAG, agentes con tools y aprobación humana antes de actuar — pensados para producción.',
      highlights: [],
    },
    {
      id: 'apis',
      title: 'APIs y backends distribuidos',
      description:
        'APIs y servicios event-driven a medida, con contratos claros, reintentos y manejo de fallos.',
      highlights: [],
    },
    {
      id: 'cloud',
      title: 'Cloud y plataforma',
      description:
        'Docker, Kubernetes, CI/CD y golden paths para publicar sin reinventar el deploy.',
      highlights: [],
    },
    {
      id: 'web',
      title: 'Web y UI de producto',
      description:
        'Interfaces en Angular, React o Next.js — rápidas, responsive y conectadas a backends reales.',
      highlights: [],
    },
    {
      id: 'mobile',
      title: 'Apps móviles',
      description:
        'Apps multiplataforma con React Native o Flutter cuando necesitas sensación nativa y una API compartida.',
      highlights: [],
    },
    {
      id: 'custom',
      title: 'Desarrollos a medida end-to-end',
      description:
        'De la idea al ship: discovery, build y traspaso — sistemas a medida, no plantillas.',
      highlights: [],
    },
  ],
};

const PROJECT_MEDIA: Omit<
  ProjectItem,
  'description' | 'highlights' | 'tech'
>[] = [
  {
    id: 'spotilist',
    title: 'Spotilist',
    image: 'assets/systems/spotilist.svg',
    imageBg: '#121212',
    demoUrl: 'https://alexdelgadillosan.github.io/spotilist/',
    githubUrl: 'https://github.com/alexdelgadillosan/spotilist',
  },
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
    spotilist: {
      title: 'Spotilist',
      description:
        'Bulk-edit Spotify playlists: multi-select copy/move/delete, merge with dedupe, filters, and JSON/CSV import-export.',
      highlights: [],
      tech: 'Vite · TypeScript · Spotify Web API PKCE (live)',
    },
    ledgerflow: {
      title: 'LedgerFlow',
      description:
        'Payment-flow demo: transfers with idempotency and outbox recovery — no double charge after failures.',
      highlights: [],
      tech: 'Event-driven · Outbox · OpenTelemetry (interactive demo)',
    },
    'sentinel-ai': {
      title: 'Sentinel AI',
      description:
        'Incident investigation agent with RAG, tools, and human approval before any action.',
      highlights: [],
      tech: 'LangGraph · RAG · HITL (interactive demo)',
    },
    chaoslab: {
      title: 'ChaosLab',
      description:
        'Inject latency and failures, then watch metrics and traces react in real time.',
      highlights: [],
      tech: 'Fault injection · OTel (interactive demo)',
    },
    launchpad: {
      title: 'Launchpad',
      description:
        'Create-a-service golden path: repo → CI → Helm → Kubernetes deploy.',
      highlights: [],
      tech: 'CI · Helm · ArgoCD · K8s (interactive demo)',
    },
    'mi-alcancia': {
      title: 'Mi Alcancia App',
      description:
        'Mobile savings app: balances and transaction history on your account.',
      highlights: [],
      tech: 'React Native · REST · MongoDB · AWS',
    },
    nexus: {
      title: 'Nexus Consulting Lab',
      description:
        'Marketing site for a consulting lab — positioning, services, and contact.',
      highlights: [],
      tech: 'React · Bootstrap',
    },
    watchface: {
      title: 'Garmin Venu 3s Watchface (To be released)',
      description:
        'Watchface that evolves as you hit daily exercise goals on Garmin Venu 3s.',
      highlights: [],
      tech: 'Monkey C · Connect IQ',
    },
  },
  es: {
    spotilist: {
      title: 'Spotilist',
      description:
        'Edición masiva de playlists de Spotify: copiar/mover/borrar, merge con dedupe, filtros e import/export JSON/CSV.',
      highlights: [],
      tech: 'Vite · TypeScript · Spotify Web API PKCE (en vivo)',
    },
    ledgerflow: {
      title: 'LedgerFlow',
      description:
        'Demo de pagos: transferencias con idempotencia y outbox — sin doble cobro tras fallos.',
      highlights: [],
      tech: 'Event-driven · Outbox · OpenTelemetry (demo interactiva)',
    },
    'sentinel-ai': {
      title: 'Sentinel AI',
      description:
        'Agente de incidentes con RAG, tools y aprobación humana antes de actuar.',
      highlights: [],
      tech: 'LangGraph · RAG · HITL (demo interactiva)',
    },
    chaoslab: {
      title: 'ChaosLab',
      description:
        'Inyecta latencia y fallos y mira cómo reaccionan métricas y traces.',
      highlights: [],
      tech: 'Fault injection · OTel (demo interactiva)',
    },
    launchpad: {
      title: 'Launchpad',
      description:
        'Golden path create-service: repo → CI → Helm → deploy en Kubernetes.',
      highlights: [],
      tech: 'CI · Helm · ArgoCD · K8s (demo interactiva)',
    },
    'mi-alcancia': {
      title: 'Mi Alcancia App',
      description:
        'App de ahorro: balances e historial de transacciones de tu cuenta.',
      highlights: [],
      tech: 'React Native · REST · MongoDB · AWS',
    },
    nexus: {
      title: 'Nexus Consulting Lab',
      description:
        'Sitio de marketing para un lab de consultoría — posicionamiento, servicios y contacto.',
      highlights: [],
      tech: 'React · Bootstrap',
    },
    watchface: {
      title: 'Garmin Venu 3s Watchface (por lanzar)',
      description:
        'Watchface que evoluciona al cumplir metas diarias de ejercicio en Garmin Venu 3s.',
      highlights: [],
      tech: 'Monkey C · Connect IQ',
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
