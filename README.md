# Torre Marketing Lab · Next.js Experience

Progetto Next.js ottimizzato per la landing page immersiva di Torre Marketing Lab. L&apos;interfaccia sfrutta Tailwind CSS, GSAP e
icone Lucide per animazioni fluide, illuminazione dinamica e texture fibra di carbonio.

## Requisiti

- Node.js 18+
- pnpm / npm / yarn

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

Il progetto utilizza l&apos;App Router di Next.js e animazioni GSAP con ScrollTrigger per illuminare dinamicamente le sezioni. Il
canvas particellare è implementato in `ParticleField`.

## Build

```bash
npm run build
```

## Struttura principale

- `app/` – layout, pagina principale e stile globale
- `components/` – componenti modulare (Hero, Services, Methodology, CaseStudies, Testimonials, ContactSection)
- `hooks/useScrollIllumination.ts` – hook per la gestione dell&apos;illuminazione dinamica
- `public/styles/` – texture e visual gradient utilizzati nei case study
