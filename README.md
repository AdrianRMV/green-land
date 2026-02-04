# Green Land Solutions — Sitio web premium

Sitio web moderno para **Green Land Solutions**, compañía de diseño de paisajes y jardinería profesional. Incluye parallax, animaciones al scroll, tarjetas 3D, glassmorphism y diseño responsive con la paleta de marca.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (configuración con colores de marca)
- **Framer Motion** (animaciones y scroll-triggered)
- **React Scroll Parallax** (capas parallax en hero y secciones)

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
# Clonar o navegar al proyecto
cd "Green land"

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando      | Descripción              |
|-------------|--------------------------|
| `npm run dev`   | Servidor de desarrollo   |
| `npm run build` | Build de producción     |
| `npm run start` | Servidor de producción  |
| `npm run lint`  | Ejecutar ESLint         |

## Estructura de carpetas

```
src/
├── app/
│   ├── globals.css      # Estilos globales y variables de marca
│   ├── layout.tsx       # Layout raíz (fuentes, Nav, Footer)
│   └── page.tsx         # Página principal (todas las secciones)
├── components/
│   ├── layout/          # Nav (sticky + glass al scroll), Footer
│   ├── providers/       # ParallaxProvider
│   ├── sections/        # Hero, About, Services, Gallery, Process, Testimonials, Contact
│   └── ui/              # Button, ScrollReveal
```

## Configuración de marca

- **Colores**: definidos en `tailwind.config.ts` y `src/app/globals.css`:
  - Verdes: `brand-green-dark` (#2D5016), `brand-green-mid`, `brand-green`, `brand-green-light`
  - Tierra: `earth-dark`, `earth`
  - Acento: `sun` (#FFD54F)
- **Tipografía**: Montserrat (headings), Inter (body), configuradas en `layout.tsx`.
- **Logo**: colocar el archivo del logo en `public/logo.png`. (Ya incluido si se copió desde `assets`.)

## Contenido a personalizar

1. **Imágenes**: sustituir placeholders en About (galería), Gallery (proyectos) y hero si se desea video/slideshow.
2. **Contacto**: actualizar dirección, teléfono y email en la sección Contact y en el Footer.
3. **Mapa**: reemplazar el placeholder del mapa por un iframe de Google Maps o componente de mapas.
4. **Redes sociales**: actualizar enlaces en el Footer.

## Efectos implementados

- Parallax en hero (capas de fondo) y en imágenes de About y Gallery.
- Navegación sticky con fondo glass al hacer scroll.
- Scroll-triggered animations (revelación al entrar en viewport).
- Tarjetas de servicios con hover (elevación y barra inferior).
- Modal de detalle en servicios y lightbox en galería.
- Estadísticas animadas (contador) en About.
- Testimonios en carrusel con tarjetas glassmorphism y estrellas animadas.
- Formulario de contacto con validación básica.
- Botones con micro-interacciones (escala en hover/tap).

## Performance

- Uso de `next/image` para el logo (optimización y lazy loading).
- Animaciones con `will-change` y `transform` para GPU.
- Componentes pesados (parallax, motion) solo donde se usan.

## Licencia

Proyecto privado — Green Land Solutions.
# green-land
