import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Abbiamo triplicato il tasso di conversione con un percorso utente dinamico e storytelling immersivo. Il team ha orchestrato design, dati e automazioni con precisione.",
    name: "Giulia Rinaldi",
    role: "CMO · Helios Tech"
  },
  {
    quote:
      "Gli effetti particellari e l&apos;illuminazione dinamica hanno rivoluzionato la percezione del nostro brand. Performance SEO migliorata del 180% in tre mesi.",
    name: "Lorenzo Marchetti",
    role: "Founder · LuceViva"
  }
];

export function Testimonials() {
  return (
    <section className="relative px-6 py-24" data-illuminate>
      <div className="mx-auto max-w-5xl">
        <div className="carbon-panel space-y-12" data-panel>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-aurora">
            <Quote className="h-5 w-5" />
            Trust Signals
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 text-slate-200"
              >
                <p className="text-lg leading-relaxed text-white">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm text-slate-300">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </footer>
                <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-particle-glow opacity-50" />
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
