export type ImageKey =
  | "hero"
  | "w1"
  | "w2"
  | "w3"
  | "w4"
  | "c1"
  | "c2"
  | "c3"
  | "k1"
  | "k2"
  | "s1"
  | "b1"
  | "v1";

export type ImageSlot = {
  key: ImageKey;
  src: string;
  slotLabel: string;
};

const BASE = "/images";

/** Only clear, usable photos — soft / 150px thumbnails removed */
export const IMAGES: Record<ImageKey, string> = {
  hero: `${BASE}/honey.jpg`,
  w1: `${BASE}/layers.jpg`,
  w2: `${BASE}/balayage.jpg`,
  w3: `${BASE}/blonde-updo.jpg`,
  w4: `${BASE}/curly-pixie.jpg`,
  c1: `${BASE}/balayage.jpg`,
  c2: `${BASE}/honey.jpg`,
  c3: `${BASE}/layers.jpg`,
  k1: `${BASE}/curly-pixie.jpg`,
  k2: `${BASE}/layers.jpg`,
  s1: `${BASE}/lifestyle.jpg`,
  b1: `${BASE}/blonde-updo.jpg`,
  v1: `${BASE}/honey.jpg`,
};

/** Hero slideshow — rapid premium crossfade */
export const HERO_SLIDES = [
  `${BASE}/honey.jpg`,
  `${BASE}/balayage.jpg`,
  `${BASE}/layers.jpg`,
  `${BASE}/blonde-updo.jpg`,
] as const;

export const HERO_SLIDE_MS = 1800;
