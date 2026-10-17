"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/lib/i18n/types";

const DictionaryContext = createContext<Dictionary | null>(null);

type DictionaryProviderProps = {
  dictionary: Dictionary;
  children: ReactNode;
};

export const DictionaryProvider = ({
  dictionary,
  children,
}: DictionaryProviderProps): React.JSX.Element => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = (): Dictionary => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return context;
};
