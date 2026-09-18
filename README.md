# AA Studioz — Jack, 3D Creator

A single-page 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS,
Framer Motion and Lucide React.

## Stack

- **React 18** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS 3** for styling, with Kanit (Google Fonts) as the type family
- **Framer Motion** for scroll-driven and reveal animations
- **React Router** for client-side routing
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
npm run typecheck  # typecheck only
```

## Structure

```
src/
  components/   FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton
  sections/     HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection
  pages/        Home, NotFound
  App.tsx       routes
  index.css     Tailwind layers + global reset + .hero-heading gradient
```

### Sections

1. **Hero** — full-viewport nav, gradient display heading and a mouse-magnetic portrait.
2. **Marquee** — two rows of preview GIFs that scroll horizontally in opposite directions,
   driven by page scroll position.
3. **About** — decorative 3D corner art plus a character-by-character scroll-reveal paragraph.
4. **Services** — six numbered service entries on a white, rounded-top panel.
5. **Projects** — three sticky cards that stack and scale down as you scroll past them.

## Deployment

`vercel.json` sets the Vite build, `dist` as the output directory and an SPA rewrite so
client-side routes resolve on direct load and refresh. Deploying the repo to Vercel needs
no further configuration.
