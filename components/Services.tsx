import { BrainCircuit, PanelsTopLeft, Rocket } from "lucide-react";

const services = [
  {
    title: "Strategie Immersive",
    description:
      "Roadmap omnicanale con journey dinamici, sincronizzazione CRM e automazioni guidate dai dati.",
    icon: BrainCircuit,
    highlights: ["Analisi predittiva", "Personalizzazione in tempo reale", "Neurodesign"],
    badge: "CX Augmentata"
  },
  {
    title: "Esperienze Interattive",
    description:
      "Micro-interazioni, motion design avanzato e ambienti WebGL che trasformano l'engagement in performance.",
    icon: PanelsTopLeft,
    highlights: ["Motion System GSAP", "Effetti particellari", "Interfacce modulabili"],
    badge: "Spatial Storytelling"
  },
  {
    title: "Growth Acceleration",
    description:
      "Framework sperimentali, test multivariati e funnel ottimizzati per conversioni elevate su ogni device.",
    icon: Rocket,
    highlights: ["Performance SEO", "A/B testing continuo", "Insight in dashboard"],
    badge: "3.8x Conversion"
  }
];

export function Services() {
  return (
    <section id="servizi" className="relative px-6 py-24" data-illuminate>
      <div className="mx-auto max-w-6xl">
        <div className="carbon-panel space-y-14" data-panel>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-aurora">Servizi</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Un ecosistema modulare costruito per accelerare il ciclo di vita del tuo brand.
            </h2>
            <p className="text-lg text-slate-300">
              Ogni modulo combina texture tattile, luce dinamica e segnali dati per guidare l&apos;attenzione sul contenuto più
              rilevante. Scalabile, sicuro e mobile-first.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/25">
                <service.icon className="h-10 w-10 text-aurora" />
                <div className="mt-6 flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="rounded-full border border-aurora/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-aurora/90">
                    {service.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-ember to-aurora" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 translate-y-1/2 bg-[radial-gradient(circle_at_bottom,_rgba(74,198,255,0.4),_transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
