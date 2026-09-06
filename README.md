# AA LLC — Agency Website

An award-style single-page marketing site for **AA LLC**, a freelance studio offering
web applications, agentic AI services, cyber security, and Blender / AI 3D video
advertising. Built with **React 18 + Vite**.

Every call to action opens WhatsApp at **+1 (940) 536-3431** with a prefilled
message, so a visitor is one tap away from booking a consultation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Production build into `dist/`        |
| `npm run preview` | Serve the production build locally   |

## Structure

```
src/
  App.jsx              Page composition, smooth scroll, scroll progress
  data/site.js         All copy, services, work, FAQs + the WhatsApp helper
  hooks/
    useReveal.js       IntersectionObserver scroll reveals
    useCountUp.js      Stat counters that animate into view
  components/          Nav, Hero, Services, Work, Process, Stats, Studio,
                       Testimonials, Faq, CTA, Footer, Cursor, Preloader…
  styles/
    global.css         Tokens, typography, buttons, cursor, preloader
    sections.css       Per-section layout
```

## Changing the WhatsApp number

Edit `WHATSAPP_NUMBER` and `WHATSAPP_DISPLAY` in `src/data/site.js`. Everything on
the page — nav button, hero, service rows, FAQ, footer, the floating button and
the closing CTA — reads from there.

## Editing content

All copy lives in `src/data/site.js`: services, case studies, process steps,
stats, testimonials and FAQs. No component edits needed for a copy change.

## Notes

- Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis) and is
  disabled automatically for visitors with `prefers-reduced-motion`.
- The hero background is a lightweight `<canvas>` particle mesh that reacts to the
  pointer; it renders a single static frame under reduced motion.
- Fonts load from Google Fonts (Inter Tight, Instrument Serif, JetBrains Mono).
