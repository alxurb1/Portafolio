# Portafolio de Oscar Urbáez

Portafolio personal de desarrollo móvil y web, construido con React, TypeScript, Vite y Tailwind CSS.

## Desarrollo local

Requiere Node.js 22.13 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para verificar el proyecto:

```bash
pnpm lint
pnpm build
pnpm format:check
```

Para aplicar el formato del proyecto: `pnpm format`.

## Editar contenido

- `src/data/content.ts`: proyectos, tecnologías, enlaces, capturas y datos de contacto. Los enlaces de proyectos son opcionales; solo aparecen cuando tienen una URL real.
- `src/components/`: secciones del sitio.
- `src/index.css`: composición, escena 3D construida con CSS y colores de ambos temas.
- `index.html`: título y metadatos para buscadores y redes sociales.

El tema sigue la preferencia del sistema en la primera visita y guarda la selección manual en el navegador.

## Capturas de proyectos

Guarda imágenes reales y autorizadas en `public/projects/` y añade a cada proyecto su ruta y texto alternativo en `src/data/content.ts`:

```ts
screenshot: {
  src: "/projects/servitaller.webp",
  alt: "Pantalla de gestión de órdenes de ServiTaller",
},
```

Mientras no exista una captura, la tarjeta muestra una ilustración con las iniciales del proyecto. No publiques datos de clientes, credenciales ni información de prueba sensible en las capturas.
