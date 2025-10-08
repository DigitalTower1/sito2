import { Cpu, Layers, Radar } from "lucide-react";

const steps = [
  {
    title: "Insight Radar",
    description:
      "Analisi semantica, clustering audience e sentiment AI per identificare gli stimoli emotivi più efficaci.",
    icon: Radar,
    time: "Settimana 1"
  },
  {
    title: "Experience Matrix",
    description:
      "Wireflow immersivo, prototipazione animata e stress test cross-device guidati da GSAP.",
    icon: Layers,
    time: "Settimane 2-3"
  },
  {
    title: "Adaptive Growth",
    description:
      "Ottimizzazione iterativa con intelligenza predittiva, automazioni marketing e storytelling modulare.",
    icon: Cpu,
    time: "Settimane 4-6"
  }
];

export function Methodology() {
  return (
    <section
      id="metodo"
      className="relative px-6 py-24"
      data-illuminate
    >
      <div className="mx-auto max-w-6xl">
        <div className="carbon-panel space-y-12" data-panel>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-aurora">Metodo</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Un framework adattivo alimentato da AI e motion design avanzato.
            </h2>
            <p className="text-lg text-slate-300">
              Ogni fase combina insight data-driven e visual storytelling. L&apos;illuminazione dinamica guida l&apos;attenzione sui
              momenti decisivi del percorso cliente.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/2 p-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
                  <span>{step.time}</span>
                  <span>Fase {index + 1}</span>
                </div>
                <step.icon className="h-10 w-10 text-amber-300" />
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-ember via-amber-300 to-aurora" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
