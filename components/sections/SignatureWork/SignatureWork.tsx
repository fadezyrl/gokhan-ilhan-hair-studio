"use client";

import { useRef, type KeyboardEvent } from "react";
import { NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useDictionary } from "@/context/DictionaryContext";

export const SignatureWork = (): React.JSX.Element => {
  const dict = useDictionary();
  const t = dict.work;
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (dir: number): void => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: dir * rail.clientWidth * 0.6,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }
    if (event.key === "ArrowRight") {
      rail.scrollBy({ left: 300, behavior: "smooth" });
    }
    if (event.key === "ArrowLeft") {
      rail.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="work nude" id={NAV_IDS.work} data-nav="light">
      <div className="wrap sh">
        <div>
          <span className="lbl">{t.label}</span>
          <h2 className="serif rv work-title">
            {t.titleBefore}
            <em>{t.titleEm}</em>
            {t.titleAfter}
          </h2>
        </div>
        <div className="arrows">
          <button
            type="button"
            aria-label={dict.a11y.prev}
            onClick={() => scrollRail(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label={dict.a11y.next}
            onClick={() => scrollRail(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        className="rail"
        id="rail"
        ref={railRef}
        tabIndex={0}
        aria-label={dict.a11y.workGallery}
        onKeyDown={onKeyDown}
      >
        {t.items.map((item) => (
          <PhotoSlot
            key={item.key}
            imageKey={item.key}
            alt={item.alt}
            slot={item.slot}
            caption={item.cap}
            className={[item.size, item.tone].filter(Boolean).join(" ")}
          />
        ))}
      </div>
    </section>
  );
};
