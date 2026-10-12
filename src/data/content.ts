export type Language = "es" | "en";
export type ProjectId = "focusBear" | "serviTaller" | "laBendicion";

export type Project = {
  id: ProjectId;
  slug: string;
  mark: string;
  stack: string[];
  links: { github?: string; live?: string };
};

type FeatureText = {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageAlts?: string[];
};

type ProjectText = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  features: FeatureText[];
};

export type LocaleContent = {
  metadata: { title: string; description: string; socialDescription: string };
  skipLink: string;
  brandLabel: string;
  navigationLabel: string;
  nav: { projects: string; contact: string; coordinate: string };
  theme: { light: string; dark: string; lightLabel: string; darkLabel: string };
  languageLabel: string;
  hero: {
    eyebrow: string;
    intro: string;
    titleLine1: string;
    titleLine2: string;
    titleEmphasis: string;
    titleLine3: string;
    description: string;
    projectsAction: string;
    contactAction: string;
    artForm: string;
    artFloating: string;
    artFooter: string;
    screenLabel: string;
    screenBottom: string;
    skills: [string, string, string];
    location: string;
  };
  work: { kicker: string; title: string; emphasis: string; intro: string };
  projectLabels: {
    technologies: string;
    live: string;
    code: string;
    openReport: string;
  };
  report: {
    back: string;
    overview: string;
    contribution: string;
    features: string;
    stack: string;
    imageLabel: string;
  };
  projects: Record<ProjectId, ProjectText>;
  footer: {
    kicker: string;
    prompt: string;
    title: string;
    emphasis: string;
    emailLabel: string;
    intention: string;
  };
};

export const projects: Project[] = [
  {
    id: "focusBear",
    slug: "focus-bear",
    mark: "FB",
    stack: ["React Native", "TypeScript", "Redux", "Java"],
    links: {},
  },
  {
    id: "serviTaller",
    slug: "servitaller",
    mark: "ST",
    stack: ["React", "TypeScript", "Express", "Supabase"],
    links: {},
  },
  {
    id: "laBendicion",
    slug: "la-bendicion",
    mark: "LB",
    stack: ["React", "TypeScript", "Express", "Supabase"],
    links: {},
  },
];

const projectAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}projects/${fileName}`;

export const projectMedia: Partial<
  Record<ProjectId, Record<string, string[]>>
> = {
  focusBear: {
    streaks: [
      projectAsset("focus-bear/img1.jpg"),
      projectAsset("focus-bear/img2.jpg"),
    ],
    taskFilters: [projectAsset("focus-bear/img3.jpg")],
    audhdTest: [projectAsset("focus-bear/img4.jpg")],
    overlays: [
      projectAsset("focus-bear/img5.jpg"),
      projectAsset("focus-bear/img6.jpg"),
    ],
  },
  serviTaller: {
    signIn: [projectAsset("servitaller/img1.png")],
    dashboard: [projectAsset("servitaller/img2.png")],
    vehicles: [projectAsset("servitaller/img3.png")],
  },
};

export const content: Record<Language, LocaleContent> = {
  es: {
    metadata: {
      title: "Oscar Urbáez — Desarrollador móvil",
      description:
        "Oscar Urbáez, desarrollador móvil en El Salvador. Proyectos con React Native, TypeScript y React.",
      socialDescription:
        "Portafolio de Oscar Urbáez: desarrollo móvil y productos digitales.",
    },
    skipLink: "Saltar al contenido",
    brandLabel: "Oscar Urbáez, volver al inicio",
    navigationLabel: "Navegación principal",
    nav: {
      projects: "PROYECTOS",
      contact: "CONTACTO",
      coordinate: "DESARROLLO / DESDE SV",
    },
    theme: {
      light: "CLARO",
      dark: "OSCURO",
      lightLabel: "Activar tema claro",
      darkLabel: "Activar tema oscuro",
    },
    languageLabel: "Switch to English",
    hero: {
      eyebrow: "PORTAFOLIO / DESARROLLO MÓVIL",
      intro: "Hola, soy Oscar Urbáez.",
      titleLine1: "Hago que",
      titleLine2: "las ideas",
      titleEmphasis: "vivan",
      titleLine3: "en pantalla",
      description:
        "Desarrollo productos móviles con React Native y TypeScript. En Focus Bear trabajo en funcionalidades y mejoras para una app que ya está en manos de usuarios.",
      projectsAction: "VER PROYECTOS",
      contactAction: "HABLEMOS",
      artForm: "FORMA / FUNCIÓN",
      artFloating: "HECHO PARA LA VIDA REAL ↗",
      artFooter: "DISEÑADO PARA EL MUNDO REAL",
      screenLabel: "OSCAR / DESARROLLADOR",
      screenBottom: "IDEA → INTERFAZ",
      skills: ["REACT NATIVE", "TYPESCRIPT", "CRITERIO DE PRODUCTO"],
      location: "EL SALVADOR ↗ REMOTO",
    },
    work: {
      kicker: "01 / TRABAJO SELECCIONADO",
      title: "Del concepto",
      emphasis: "al producto.",
      intro:
        "Proyectos donde el código tuvo un propósito: resolver problemas, mejorar flujos y llevar ideas a producción.",
    },
    projectLabels: {
      technologies: "Tecnologías utilizadas",
      live: "VER PROYECTO",
      code: "VER CÓDIGO",
      openReport: "Ver detalles de",
    },
    report: {
      back: "VOLVER A PROYECTOS",
      overview: "EL PROYECTO",
      contribution: "MI PARTICIPACIÓN",
      features: "FUNCIONALIDADES",
      stack: "TECNOLOGÍAS",
      imageLabel: "Captura de la funcionalidad",
    },
    projects: {
      focusBear: {
        name: "Focus Bear",
        tagline: "App de productividad · Australia",
        description:
          "Aplicación de productividad en producción. Contribuí al sistema de rachas, al bloqueo amable de distracciones y a otras funcionalidades móviles.",
        role: "Desarrollador móvil",
        features: [
          {
            id: "streaks",
            title: "Sistema de rachas",
            description:
              "Trabajo en la funcionalidad de rachas para dar seguimiento a la constancia del usuario dentro de la app.",
            imageAlt: "Captura del sistema de rachas de Focus Bear",
            imageAlts: [
              "Inicio de Focus Bear con el indicador de racha junto al perfil",
              "Resumen de rachas de hábitos y sesiones de enfoque en Focus Bear",
            ],
          },
          {
            id: "taskFilters",
            title: "Filtros de tareas",
            description:
              "Opciones para encontrar tareas por esfuerzo, proyecto o fecha de vencimiento desde la lista de pendientes.",
            imageAlt: "Pantalla de filtros de tareas de Focus Bear",
          },
          {
            id: "audhdTest",
            title: "Test AuDHD",
            description:
              "Pantalla de acceso al test AuDHD dentro de la app, con selección de idioma e información sobre privacidad.",
            imageAlt: "Pantalla inicial del test AuDHD en Focus Bear",
          },
          {
            id: "overlays",
            title: "Overlays flotantes nativos",
            description:
              "Interfaz flotante sobre otras apps de Android que muestra el estado del temporizador y permite pausar el bloqueo.",
            imageAlt: "Captura de un overlay flotante de Focus Bear",
            imageAlts: [
              "Overlay de Focus Bear sobre Android con el temporizador pausado y la opción de pausar el bloqueo",
              "Overlay flotante de Focus Bear sobre la pantalla de inicio de Android",
            ],
          },
          {
            id: "gentle-blocking-pause",
            title: "Pausas conscientes del bloqueo",
            description:
              "Flujo para pausar temporalmente el bloqueo de una app: elegir 5, 10, 15 o 20 minutos y escribir el motivo antes de continuar.",
            imageAlt:
              "Selector de pausa temporal del bloqueo amable en Focus Bear",
          },
        ],
      },
      serviTaller: {
        name: "ServiTaller",
        tagline: "Sistema de gestión · Automotriz",
        description:
          "Sistema para organizar la operación de un taller: clientes, vehículos, órdenes de trabajo, usuarios, servicios y proveedores. Incluye autenticación y una API para los módulos de gestión.",
        role: "Desarrollador full stack",
        features: [
          {
            id: "signIn",
            title: "Acceso al taller",
            description:
              "Pantalla de inicio de sesión para entrar al sistema de gestión del taller.",
            imageAlt: "Pantalla de inicio de sesión de ServiTaller",
          },
          {
            id: "dashboard",
            title: "Panel de operaciones",
            description:
              "Vista general con indicadores del taller, órdenes recientes y accesos rápidos a las tareas principales.",
            imageAlt:
              "Panel de ServiTaller con indicadores y órdenes recientes",
          },
          {
            id: "vehicles",
            title: "Gestión de vehículos",
            description:
              "Listado de vehículos del taller con búsqueda y acceso al historial de cada uno.",
            imageAlt: "Listado de vehículos de prueba en ServiTaller",
          },
        ],
      },
      laBendicion: {
        name: "Comercial La Bendición",
        tagline: "Sitio comercial · En desarrollo",
        description:
          "Proyecto web para una comercial: presentación de la marca, sucursales y contacto. La API gestiona categorías, productos y registro de órdenes; el catálogo visual sigue en desarrollo.",
        role: "Desarrollo web en equipo",
        features: [
          {
            id: "brand",
            title: "Presencia digital",
            description:
              "Presentación de la marca, sus sucursales y las formas de contacto en el sitio web.",
            imageAlt: "Captura del sitio de Comercial La Bendición",
          },
          {
            id: "api",
            title: "API comercial",
            description:
              "Gestión de categorías, productos y registro de órdenes desde el backend.",
            imageAlt: "Captura de la gestión comercial de La Bendición",
          },
        ],
      },
    },
    footer: {
      kicker: "02 / SIGUIENTE PASO",
      prompt: "¿TIENES UN PROYECTO EN MENTE?",
      title: "Hagámoslo",
      emphasis: "real.",
      emailLabel: "Enviar correo a",
      intention: "HECHO CON INTENCIÓN · SV",
    },
  },
  en: {
    metadata: {
      title: "Oscar Urbáez — Mobile Engineer",
      description:
        "Oscar Urbáez, mobile engineer based in El Salvador. Projects built with React Native, TypeScript, and React.",
      socialDescription:
        "Oscar Urbáez's portfolio: mobile engineering and digital products.",
    },
    skipLink: "Skip to content",
    brandLabel: "Oscar Urbáez, back to top",
    navigationLabel: "Main navigation",
    nav: {
      projects: "PROJECTS",
      contact: "CONTACT",
      coordinate: "ENGINEERING / FROM SV",
    },
    theme: {
      light: "LIGHT",
      dark: "DARK",
      lightLabel: "Switch to light theme",
      darkLabel: "Switch to dark theme",
    },
    languageLabel: "Cambiar a español",
    hero: {
      eyebrow: "PORTFOLIO / MOBILE ENGINEER",
      intro: "Hi, I'm Oscar Urbáez.",
      titleLine1: "I bring",
      titleLine2: "ideas",
      titleEmphasis: "to life",
      titleLine3: "on screen",
      description:
        "I build mobile products with React Native and TypeScript. At Focus Bear, I work on features and improvements for an app already used by real people.",
      projectsAction: "VIEW PROJECTS",
      contactAction: "LET'S TALK",
      artForm: "FORM / FUNCTION",
      artFloating: "BUILDING FOR REAL LIFE ↗",
      artFooter: "BUILT FOR THE REAL WORLD",
      screenLabel: "OSCAR / ENGINEER",
      screenBottom: "IDEA → INTERFACE",
      skills: ["REACT NATIVE", "TYPESCRIPT", "PRODUCT THINKING"],
      location: "EL SALVADOR ↗ REMOTE",
    },
    work: {
      kicker: "01 / SELECTED WORK",
      title: "From concept",
      emphasis: "to product.",
      intro:
        "Projects where code serves a purpose: solving problems, improving workflows, and bringing ideas into use.",
    },
    projectLabels: {
      technologies: "Technologies used",
      live: "VIEW PROJECT",
      code: "VIEW CODE",
      openReport: "View details for",
    },
    report: {
      back: "BACK TO PROJECTS",
      overview: "THE PROJECT",
      contribution: "MY CONTRIBUTION",
      features: "FEATURES",
      stack: "TECHNOLOGIES",
      imageLabel: "Feature screenshot",
    },
    projects: {
      focusBear: {
        name: "Focus Bear",
        tagline: "Productivity app · Australia",
        description:
          "A productivity app in production. I contributed to the streak system, gentle distraction blocking, and other mobile features.",
        role: "Mobile Developer",
        features: [
          {
            id: "streaks",
            title: "Streak system",
            description:
              "Work on the streak feature to help users track consistency within the app.",
            imageAlt: "Screenshot of the Focus Bear streak system",
            imageAlts: [
              "Focus Bear home screen with a streak indicator beside the profile",
              "Focus Bear summary of habit and focus-session streaks",
            ],
          },
          {
            id: "taskFilters",
            title: "Task filters",
            description:
              "Options for finding tasks by effort, project, or due date from the task list.",
            imageAlt: "Focus Bear task filter screen",
          },
          {
            id: "audhdTest",
            title: "AuDHD test",
            description:
              "An in-app entry screen for the AuDHD test, with language selection and privacy information.",
            imageAlt: "AuDHD test opening screen in Focus Bear",
          },
          {
            id: "overlays",
            title: "Native floating overlays",
            description:
              "A floating interface over other Android apps that shows the timer status and lets users pause blocking.",
            imageAlt: "Screenshot of a Focus Bear floating overlay",
            imageAlts: [
              "Focus Bear overlay on Android showing a paused timer and an option to pause blocking",
              "Focus Bear floating overlay on the Android home screen",
            ],
          },
          {
            id: "gentle-blocking-pause",
            title: "Intentional blocking breaks",
            description:
              "A flow for temporarily pausing an app block: choose 5, 10, 15, or 20 minutes and write a reason before continuing.",
            imageAlt: "Focus Bear gentle-blocking pause selector",
          },
        ],
      },
      serviTaller: {
        name: "ServiTaller",
        tagline: "Management system · Automotive",
        description:
          "A system for running a workshop: customers, vehicles, work orders, users, services, and suppliers. It includes authentication and an API for the management modules.",
        role: "Full-stack Developer",
        features: [
          {
            id: "signIn",
            title: "Workshop sign-in",
            description:
              "The sign-in screen for accessing the workshop management system.",
            imageAlt: "ServiTaller sign-in screen",
          },
          {
            id: "dashboard",
            title: "Operations dashboard",
            description:
              "An overview of workshop metrics, recent work orders, and shortcuts to common tasks.",
            imageAlt:
              "ServiTaller dashboard with metrics and recent work orders",
          },
          {
            id: "vehicles",
            title: "Vehicle management",
            description:
              "A searchable vehicle list with access to each vehicle's history.",
            imageAlt: "List of test vehicles in ServiTaller",
          },
        ],
      },
      laBendicion: {
        name: "Comercial La Bendición",
        tagline: "Business website · In progress",
        description:
          "A business website with brand information, store locations, and contact details. Its API handles categories, products, and order registration; the visual catalog is still in development.",
        role: "Team web development",
        features: [
          {
            id: "brand",
            title: "Digital presence",
            description:
              "A website presenting the business, its locations, and contact information.",
            imageAlt: "Screenshot of the Comercial La Bendición website",
          },
          {
            id: "api",
            title: "Business API",
            description:
              "Backend management of categories, products, and order registration.",
            imageAlt: "Screenshot of La Bendición business management",
          },
        ],
      },
    },
    footer: {
      kicker: "02 / NEXT STEP",
      prompt: "HAVE A PROJECT IN MIND?",
      title: "Let's make it",
      emphasis: "real.",
      emailLabel: "Email",
      intention: "MADE WITH INTENTION · SV",
    },
  },
};

export const contact = {
  email: "o.martinezurbaez@gmail.com",
  github: "https://github.com/alxurb1",
  linkedin: "https://www.linkedin.com/in/oscarurbaez",
};
