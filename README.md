# Portafolio de Oscar Urbáez

Mi portafolio de desarrollo móvil y web. Presenta los proyectos en los que he trabajado, mi contribución en cada uno y capturas de funcionalidades concretas.

## Proyectos

| Proyecto                   | Estado en el portafolio | Contenido                                                                                               |
| -------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| **Focus Bear**             | Con capturas            | Rachas, filtros de tareas, acceso al test AuDHD y overlays de Android.                                  |
| **ServiTaller**            | Con capturas            | Inicio de sesión, panel de operaciones y listado de vehículos.                                          |
| **Comercial La Bendición** | En desarrollo           | Descripción del proyecto y sus módulos; las capturas se añadirán cuando haya pantallas representativas. |

Cada tarjeta abre una ficha con el contexto del proyecto, las funcionalidades y las imágenes disponibles. Las ilustraciones de las tarjetas se mantienen como identidad visual de cada proyecto.

## Tecnologías y diseño

- React, TypeScript, Vite y Tailwind CSS.
- Interfaz adaptable con modos claro y oscuro. En la primera visita usa la preferencia del sistema; después guarda la elección en el navegador.
- Contenido en español e inglés. El idioma inicial es español y el selector guarda la preferencia.
- Elementos visuales y profundidad creados con CSS.

## Ejecutar en local

Requiere Node.js 22.13 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para generar la versión de producción y revisarla localmente:

```bash
pnpm build
pnpm preview
```

Comprobaciones disponibles:

```bash
pnpm lint
pnpm format:check
```

Para aplicar Prettier a los archivos del proyecto: `pnpm format`.

## Actualizar proyectos y capturas

El contenido está centralizado en [`src/data/content.ts`](src/data/content.ts): proyectos, tecnologías, enlaces, contacto y textos de ambos idiomas. Al cambiar el texto de una funcionalidad, actualizá sus versiones `es` y `en`.

Las capturas publicables van en `public/projects/`, dentro de la carpeta de cada proyecto. Las rutas se asocian al `id` de la funcionalidad mediante `projectMedia`:

```ts
export const projectMedia = {
  serviTaller: {
    dashboard: [projectAsset("servitaller/img2.png")],
  },
};
```

`projectAsset` antepone la base del sitio a cada ruta. La ficha muestra las imágenes en el orden del arreglo. `imageAlt` describe una captura; `imageAlts` permite dar un texto diferente a cada imagen cuando hay varias. Si una funcionalidad no tiene imágenes asociadas, se muestra su descripción sin galería. Antes de añadir capturas, comprobá que correspondan al texto y que los datos visibles se puedan publicar.

Los estilos generales están en [`src/index.css`](src/index.css), los componentes en [`src/components/`](src/components/) y los metadatos iniciales en [`index.html`](index.html).
