import { Mail, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contatti" className="relative px-6 pb-32" data-illuminate>
      <div className="mx-auto max-w-6xl">
        <div className="carbon-panel grid gap-12 lg:grid-cols-[1.1fr_0.9fr]" data-panel>
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-aurora">Next step</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Progettiamo insieme la prossima esperienza immersiva del tuo brand.
            </h2>
            <p className="text-lg text-slate-300">
              Raccontaci obiettivi, tempistiche e target. Il nostro team risponderà entro 24h con una proposta personalizzata.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Mail className="h-6 w-6 text-aurora" />
                <p className="mt-4 text-sm text-slate-400">Scrivici</p>
                <a href="mailto:hello@torremarketinglab.com" className="text-lg font-semibold text-white">
                  hello@torremarketinglab.com
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Phone className="h-6 w-6 text-amber-300" />
                <p className="mt-4 text-sm text-slate-400">Parla con noi</p>
                <a href="tel:+390299887766" className="text-lg font-semibold text-white">
                  +39 02 998 877 66
                </a>
              </div>
            </div>
          </div>

          <form className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Nome e cognome
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-abyss/60 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora/60 focus:bg-abyss/70"
                placeholder="Chi sei?"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/10 bg-abyss/60 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora/60 focus:bg-abyss/70"
                placeholder="hello@azienda.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-2xl border border-white/10 bg-abyss/60 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora/60 focus:bg-abyss/70"
                placeholder="Obiettivi, tempistiche, richieste particolari..."
              />
            </div>
            <button type="submit" className="cta-button justify-center">
              Invia briefing
              <Send className="h-5 w-5" />
            </button>
            <p className="text-xs text-slate-400">
              Compilando il form accetti la nostra <a href="#" className="underline">privacy policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
