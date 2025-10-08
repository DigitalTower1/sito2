"use client";

import { useScrollIllumination } from "@/hooks/useScrollIllumination";
import { Navigation } from "./Navigation";
import { ParticleField } from "./ParticleField";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Methodology } from "./Methodology";
import { CaseStudies } from "./CaseStudies";
import { Testimonials } from "./Testimonials";
import { ContactSection } from "./ContactSection";

export function PageExperience() {
  useScrollIllumination();

  return (
    <>
      <ParticleField />
      <Navigation />
      <Hero />
      <Services />
      <Methodology />
      <CaseStudies />
      <Testimonials />
      <ContactSection />
      <footer className="border-t border-white/5 bg-black/40 py-10 text-center text-sm text-slate-500 backdrop-blur">
        © {new Date().getFullYear()} Torre Marketing Lab · Crafted with GSAP, Tailwind CSS e Next.js
      </footer>
    </>
  );
}
