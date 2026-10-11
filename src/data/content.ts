export type Project = {
  name: string;
  mark: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  screenshot?: {
    src: string;
    alt: string;
  };
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    name: "Focus Bear",
    mark: "FB",
    tagline: "App de productividad · Australia",
    description:
      "Aplicación de productividad en producción. Contribuí funcionalidades móviles: sistema de rachas, overlays flotantes nativos, y migración de datos guest-to-account.",
    stack: ["React Native", "TypeScript", "Redux", "Java"],
    role: "Mobile Developer",
    links: {},
  },
  {
    name: "ServiTaller",
    mark: "ST",
    tagline: "Sistema de gestión · Automotriz",
    description:
      "Sistema para organizar la operación de un taller: clientes, vehículos, órdenes de trabajo, usuarios, servicios y proveedores. Incluye autenticación y una API para los módulos de gestión.",
    stack: ["React", "TypeScript", "Express", "Supabase"],
    role: "Full-stack Developer",
    links: {},
  },
  {
    name: "Comercial La Bendición",
    mark: "LB",
    tagline: "Sitio comercial · En desarrollo",
    description:
      "Proyecto web para una comercial: presentación de la marca, sucursales y contacto. La API gestiona categorías, productos y registro de órdenes; el catálogo visual sigue en desarrollo.",
    stack: ["React", "TypeScript", "Express", "Supabase"],
    role: "Desarrollo web en equipo",
    links: {},
  },
];

export const contact = {
  email: "o.martinezurbaez@gmail.com",
  github: "https://github.com/alxurb1",
  linkedin: "https://www.linkedin.com/in/oscarurbaez",
};
