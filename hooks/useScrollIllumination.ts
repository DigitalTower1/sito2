"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  selector?: string;
};

export function useScrollIllumination({ selector = "[data-illuminate]" }: Options = {}) {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(selector);
    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const panel = section.querySelector<HTMLElement>("[data-panel]");
        if (!panel) return;

        gsap.set(panel, { "--illumination": 0.12 });
        gsap.set(section, { opacity: 0.75 });

        if (ScrollTrigger.isInViewport(section)) {
          gsap.set(panel, { "--illumination": 0.48 });
          gsap.set(section, { opacity: 1 });
        }

        gsap.to(panel, {
          "--illumination": 0.48,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            scrub: true
          }
        });

        gsap.to(section, {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, [selector]);
}
