"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type MenuContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

type MenuProviderProps = {
  children: ReactNode;
};

export const MenuProvider = ({ children }: MenuProviderProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  const toggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("menu", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.classList.remove("menu");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextValue => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within MenuProvider");
  }
  return context;
};
