"use client";

import { useEffect } from "react";
import { useReveal } from "@/components/ui/Reveal/useReveal";

export const SiteEffects = (): null => {
  useReveal();

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) {
      return;
    }

    const tick = (): void => {
      nav.classList.toggle("scrolled", window.scrollY > 10);
      const y = nav.offsetHeight / 2;
      let dark = false;

      document.querySelectorAll<HTMLElement>("section[data-nav]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= y && rect.bottom > y) {
          dark = section.dataset.nav === "dark";
        }
      });

      nav.classList.toggle("on-dark", dark);
    };

    const onScroll = (): void => {
      window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};
