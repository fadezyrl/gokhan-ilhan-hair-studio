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

    let lastY = window.scrollY;
    let ticking = false;
    const hideAfter = 80;
    const deltaMin = 6;

    const tick = (): void => {
      ticking = false;
      const y = window.scrollY;
      const menuOpen = document.body.classList.contains("menu");

      nav.classList.toggle("scrolled", y > 10);

      const mid = nav.offsetHeight / 2;
      let dark = false;
      document.querySelectorAll<HTMLElement>("section[data-nav]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom > mid) {
          dark = section.dataset.nav === "dark";
        }
      });
      nav.classList.toggle("on-dark", dark);

      if (menuOpen || y <= hideAfter) {
        nav.classList.remove("nav-hidden");
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (Math.abs(delta) < deltaMin) {
        return;
      }

      if (delta > 0) {
        nav.classList.add("nav-hidden");
      } else {
        nav.classList.remove("nav-hidden");
      }

      lastY = y;
    };

    const onScroll = (): void => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};
