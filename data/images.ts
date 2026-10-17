export type ImageKey =
  | "hero"
  | "w1"
  | "w2"
  | "w3"
  | "w4"
  | "w5"
  | "w6"
  | "w7"
  | "w8"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
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

const BASE = "/images/gokhanilhan";

export const IMAGES: Record<ImageKey, string> = {
  hero: `${BASE}/hero.jpg`,
  w1: `${BASE}/work-blonde.jpg`,
  w2: `${BASE}/work-toffee.jpg`,
  w3: `${BASE}/work-layers.jpg`,
  w4: `${BASE}/work-waves.jpg`,
  w5: `${BASE}/work-bridal.jpg`,
  w6: `${BASE}/work-curly.jpg`,
  w7: `${BASE}/work-kstyle.jpg`,
  w8: `${BASE}/work-butterfly.jpg`,
  c1: `${BASE}/work-soft-blonde.jpg`,
  c2: `${BASE}/work-vanilla.jpg`,
  c3: `${BASE}/work-chocolate.jpg`,
  c4: `${BASE}/work-colour.jpg`,
  k1: `${BASE}/work-bob.jpg`,
  k2: `${BASE}/work-pixie.jpg`,
  s1: `${BASE}/owner-portrait.jpg`,
  b1: `${BASE}/work-bride.jpg`,
  v1: `${BASE}/posters/salon.jpg`,
};
