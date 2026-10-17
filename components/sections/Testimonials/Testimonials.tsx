"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_IDS } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/types";

type TestimonialsProps = {
  dictionary: Dictionary;
};

export const Testimonials = ({
  dictionary,
}: TestimonialsProps): React.JSX.Element => {
  const t = dictionary.testimonials;
  const total = t.items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const axis = useRef<"x" | "y" | null>(null);

  const goTo = (next: number): void => {
    setIndex((next + total) % total);
  };

  const prev = (): void => goTo(index - 1);
  const next = (): void => goTo(index + 1);

  useEffect(() => {
    if (paused || total < 2) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, total, index]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    axis.current = null;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    if (!touch || axis.current) {
      return;
    }
    const dx = Math.abs(touch.clientX - touchStartX.current);
    const dy = Math.abs(touch.clientY - touchStartY.current);
    if (dx < 10 && dy < 10) {
      return;
    }
    axis.current = dx > dy ? "x" : "y";
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    if (axis.current !== "x") {
      axis.current = null;
      return;
    }
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    const dx = touch.clientX - touchStartX.current;
    if (Math.abs(dx) > 48) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
    axis.current = null;
  };

  return (
    <section
      className="testimonials dark"
      id={NAV_IDS.testimonials}
      data-nav="dark"
    >
      <div className="wrap testimonials__head">
        <span className="lbl testimonials__label">{t.label}</span>
        <h2 className="serif rv testimonials__title">
          {t.titleBefore}
          <em>{t.titleEm}</em>
          {t.titleAfter}
        </h2>
      </div>

      <div
        className="testimonials__stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setPaused(false);
          }
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="testimonials__viewport" aria-live="polite">
          <div
            className="testimonials__track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {t.items.map((item, i) => (
              <figure
                key={item.id}
                className={`testimonials__slide${i === index ? " is-active" : ""}`}
                aria-hidden={i !== index}
              >
                <span className="testimonials__mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="serif">{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div
          className={`testimonials__progress${paused ? " is-paused" : ""}`}
          aria-hidden="true"
        >
          <span key={index} />
        </div>

        <div className="testimonials__controls">
          <div className="testimonials__arrows">
            <button
              type="button"
              aria-label={dictionary.a11y.prev}
              onClick={prev}
            >
              ←
            </button>
            <button
              type="button"
              aria-label={dictionary.a11y.next}
              onClick={next}
            >
              →
            </button>
          </div>
          <div
            className="testimonials__dots"
            role="tablist"
            aria-label={t.label}
          >
            {t.items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1} / ${total}`}
                className={i === index ? "is-active" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <span className="testimonials__count lbl" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
            <i>/</i>
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};
