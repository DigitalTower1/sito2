"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      tl.fromTo(
        "[data-hero-title]",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1 }
      )
        .fromTo(
          "[data-hero-subtitle]",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          "[data-hero-cta]",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-metric]",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.6 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden px-6 pb-20 pt-24"
      data-illuminate
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,107,61,0.28),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-slate-200">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Nuova release 2024 · Esperienze immersive XR-ready</span>
          </div>

          <div className="space-y-6">
            <h1
              data-hero-title
              className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Trasforma il tuo brand in un&apos;esperienza <span className="text-gradient">immersiva</span>.
            </h1>
            <p
              data-hero-subtitle
              className="max-w-2xl text-lg text-slate-300 md:text-xl"
            >
              Uniamo storytelling, data intelligence e motion design per creare percorsi digitali che conquistano il pubblico.
              Texture in fibra di carbonio, particelle dinamiche e illuminazione GSAP per una presenza memorabile.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row" data-hero-cta>
            <a href="#contatti" className="cta-button">
              Inizia il tuo viaggio
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Esplora i progetti
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center">
          <div className="carbon-panel group w-full max-w-xl" data-panel>
            <div className="absolute inset-0 -z-10 rounded-[inherit] bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,61,0.28),transparent_55%)] opacity-0 transition-opacity duration-700 group-hover:opacity-80" />
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Control Room</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">Live</span>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Forecast</p>
                <p className="text-4xl font-semibold text-gradient">+248% ROI</p>
              </div>
              <div className="panel-divider" />
              <div className="grid grid-cols-2 gap-6 text-sm text-slate-300">
                <div data-hero-metric>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Esperienze Immersive</p>
                  <p className="mt-2 text-2xl font-semibold text-white">XR + AI Labs</p>
                </div>
                <div data-hero-metric>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Conversion Lift</p>
                  <p className="mt-2 text-2xl font-semibold text-white">3.8x</p>
                </div>
                <div data-hero-metric>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tempo Medio</p>
                  <p className="mt-2 text-2xl font-semibold text-white">+62%</p>
                </div>
                <div data-hero-metric>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Clienti Globali</p>
                  <p className="mt-2 text-2xl font-semibold text-white">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
