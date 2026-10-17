"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useDictionary } from "@/context/DictionaryContext";

export const SignatureWork = (): React.JSX.Element => {
  const dict = useDictionary();
  const t = dict.work;
  const railRef = useRef<HTMLDivElement>(null);

  // Mobile: vertical page scroll stays free; horizontal gets drag + momentum.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const mobile = window.matchMedia("(max-width: 640px)");
    let startX = 0;
    let startY = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;
    let axis: "x" | "y" | null = null;
    let raf = 0;

    const stopMomentum = (): void => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const clampScroll = (value: number): number => {
      const max = rail.scrollWidth - rail.clientWidth;
      return Math.min(Math.max(value, 0), Math.max(max, 0));
    };

    const runMomentum = (pxPerMs: number): void => {
      stopMomentum();
      let v = pxPerMs;
      let prev = performance.now();

      const tick = (now: number): void => {
        const dt = Math.min(now - prev, 32);
        prev = now;
        if (Math.abs(v) < 0.02) {
          raf = 0;
          rail.classList.remove("is-dragging");
          return;
        }
        rail.scrollLeft = clampScroll(rail.scrollLeft + v * dt);
        // Exponential decay — native-like ease out
        v *= Math.pow(0.0025, dt / 1000);
        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    };

    const onTouchStart = (event: TouchEvent): void => {
      if (!mobile.matches || event.touches.length !== 1) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      stopMomentum();
      startX = touch.clientX;
      startY = touch.clientY;
      lastX = touch.clientX;
      lastT = performance.now();
      startScroll = rail.scrollLeft;
      velocity = 0;
      axis = null;
    };

    const onTouchMove = (event: TouchEvent): void => {
      if (!mobile.matches || event.touches.length !== 1) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      if (!axis) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
          return;
        }
        axis = Math.abs(dx) > Math.abs(dy) * 1.1 ? "x" : "y";
        if (axis === "x") {
          rail.classList.add("is-dragging");
        }
      }

      if (axis !== "x") {
        return;
      }

      event.preventDefault();
      const now = performance.now();
      const dt = Math.max(now - lastT, 1);
      velocity = (touch.clientX - lastX) / dt;
      lastX = touch.clientX;
      lastT = now;
      rail.scrollLeft = clampScroll(startScroll - dx);
    };

    const onTouchEnd = (): void => {
      if (axis === "x") {
        // Invert: finger right → content scrolls left
        runMomentum(-velocity);
      } else {
        rail.classList.remove("is-dragging");
      }
      axis = null;
    };

    rail.addEventListener("touchstart", onTouchStart, { passive: true });
    rail.addEventListener("touchmove", onTouchMove, { passive: false });
    rail.addEventListener("touchend", onTouchEnd, { passive: true });
    rail.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      stopMomentum();
      rail.classList.remove("is-dragging");
      rail.removeEventListener("touchstart", onTouchStart);
      rail.removeEventListener("touchmove", onTouchMove);
      rail.removeEventListener("touchend", onTouchEnd);
      rail.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

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
