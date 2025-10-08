import Image from "next/image";

const cases = [
  {
    name: "Apex Motorsport",
    result: "+212% lead qualificati",
    description:
      "Experience hub con telemetria in tempo reale e scenografie 3D. Navigazione reattiva e campagne integrate.",
    image: "/styles/apex-motorsport.svg"
  },
  {
    name: "LuceViva Design",
    result: "+168% tempo sulla pagina",
    description:
      "Showroom immersivo con illuminazione dinamica, configuratore arredi e storytelling multisensoriale.",
    image: "/styles/luceviva-showroom.svg"
  },
  {
    name: "Helios Tech",
    result: "ROI x3 in 4 mesi",
    description:
      "Piattaforma B2B con onboarding guidato da AI, micro-interazioni e knowledge base modulare.",
    image: "/styles/helios-platform.svg"
  }
];

export function CaseStudies() {
  return (
    <section id="case-study" className="relative px-6 py-24" data-illuminate>
      <div className="mx-auto max-w-6xl">
        <div className="carbon-panel space-y-12" data-panel>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-aurora">Case study</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Performance dimostrata su brand premium e tech leader.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Ogni progetto integra misurazioni in tempo reale, animazioni GSAP sincronizzate con lo scroll e ottimizzazione SEO
              tecnica per scalare sui motori di ricerca.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-abyss/40 to-transparent" />
                </div>
                <div className="space-y-4 p-8">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">{item.result}</p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
