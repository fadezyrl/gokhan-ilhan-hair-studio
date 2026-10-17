import type { Locale } from "@/data/site";
import { en } from "@/data/dictionaries/en";
import { tr } from "@/data/dictionaries/tr";
import { ur } from "@/data/dictionaries/ur";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
  ur,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries.tr;
};
