"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDE_MS, HERO_SLIDES } from "@/data/images";

type HeroMediaProps = {
  alts: string[];
  label: string;
};

export const HeroMedia = ({ alts, label }: HeroMediaProps): React.JSX.Element => {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (): void => {
      setReduceMotion(media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || HERO_SLIDES.length < 2) {
      return;
    }

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <figure className="ph hero-media" aria-label={label}>
      {HERO_SLIDES.map((src, index) => {
        const isActive = index === active;
        return (
          <div
            key={src}
            className={`hero-slide${isActive ? " is-active" : ""}`}
            aria-hidden={!isActive}
          >
            <Image
              src={src}
              alt={alts[index] ?? alts[0] ?? ""}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
              quality={90}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
      <div className="hero-dots" aria-hidden="true">
        {HERO_SLIDES.map((src, index) => (
          <span
            key={src}
            className={`hero-dot${index === active ? " is-active" : ""}`}
          />
        ))}
      </div>
    </figure>
  );
};
