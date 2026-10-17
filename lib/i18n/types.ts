import type { ImageKey } from "@/data/images";

export type WorkItem = {
  key: ImageKey;
  alt: string;
  slot: string;
  cap: string;
  tone: string;
  size: string;
};

export type ToneItem = {
  key: ImageKey;
  alt: string;
  slot: string;
  tone: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  a11y: {
    home: string;
    backToTop: string;
    menuOpen: string;
    menuClose: string;
    workGallery: string;
    prev: string;
    next: string;
  };
  nav: {
    work: string;
    colour: string;
    cut: string;
    studio: string;
    testimonials: string;
    visit: string;
    book: string;
    bookShort: string;
    instagram: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3Before: string;
    line3Em: string;
    line3After: string;
    support: string;
    ctaBook: string;
    ctaExplore: string;
    scroll: string;
    imageAlt: string;
    imageSlot: string;
    slideshowLabel: string;
    slideAlts: string[];
  };
  work: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    items: WorkItem[];
  };
  colour: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    body: string;
    dimensions: { name: string; num: string }[];
    mainAlt: string;
    mainSlot: string;
    tones: ToneItem[];
  };
  cut: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    note: string;
    bigAlt: string;
    bigSlot: string;
    smallAlt: string;
    smallSlot: string;
  };
  studio: {
    quoteBefore: string;
    quoteEm: string;
    quoteAfter: string;
    approachLabel: string;
    approach: string;
    placeLabel: string;
    place: string;
    imageAlt: string;
    imageSlot: string;
  };
  testimonials: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    items: {
      id: string;
      quote: string;
      name: string;
      role: string;
    }[];
  };
  visit: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    locationLabel: string;
    locationValue: string;
    addressLabel: string;
    addressValue: string;
    instagramLabel: string;
    directions: string;
    imageAlt: string;
    imageSlot: string;
  };
  book: {
    label: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    body: string;
    cta: string;
  };
  footer: {
    rights: string;
    copyright: string;
  };
};
