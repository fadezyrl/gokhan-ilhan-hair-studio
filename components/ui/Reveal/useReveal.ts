"use client";

import { useEffect } from "react";

export const useReveal = (): void => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".rv"));

    if (reduce) {
      nodes.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 70}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
