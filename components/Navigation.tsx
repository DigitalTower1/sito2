"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Metodo", href: "#metodo" },
  { label: "Case Study", href: "#case-study" },
  { label: "Contatti", href: "#contatti" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="#" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ember to-aurora text-slate-900 shadow-neon">
            T
          </span>
          <span className="text-sm uppercase text-slate-200">Torre Marketing Lab</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-slate-300 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-ember via-amber-400 to-aurora transition-transform duration-300 ease-out hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a className="cta-button" href="#contatti">
            Prenota una demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Apri menù"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          "origin-top transform rounded-3xl border border-white/10 bg-gradient-to-b from-abyss/95 via-abyss/90 to-abyss/85 backdrop-blur-xl transition-all duration-300",
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}
      >
        <div className="mx-6 flex flex-col gap-4 px-4 pb-6 pt-2 text-sm text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/5 px-4 py-3 text-center transition hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="cta-button w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Prenota una demo
          </a>
        </div>
      </div>
    </header>
  );
}
