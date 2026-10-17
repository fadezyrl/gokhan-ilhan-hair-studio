export type Locale = "tr" | "en" | "ur";

export const DEFAULT_LOCALE: Locale = "tr";

export const SITE = {
  name: "Gökhan İlhan Hair Studio",
  brandLine: "Gökhan İlhan",
  brandSub: "HAIR STUDIO",
  locationShort: "Lefkoşa · Kuzey Kıbrıs",
  locationFull: "Lefkoşa Merkez, Kuzey Kıbrıs",
  instagramHandle: "@gokhanilhanhairstudio",
  bookingUrl: "https://www.instagram.com/gokhanilhanhairstudio/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=G%C3%B6khan+%C4%B0lhan+Hair+Studio+Lefko%C5%9Fa",
  logoSrc: "",
  year: 2026,
} as const;

export const NAV_IDS = {
  top: "top",
  work: "calismalar",
  colour: "renk",
  cut: "kesim",
  studio: "studyo",
  testimonials: "yorumlar",
  visit: "ziyaret",
} as const;
