"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { SITE, NAV_IDS } from "@/data/site";
import { useDictionary } from "@/context/DictionaryContext";
import { useMenu } from "@/context/MenuContext";

export const Nav = (): React.JSX.Element => {
  const dict = useDictionary();
  const { isOpen, toggle, close } = useMenu();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: `#${NAV_IDS.work}`, label: dict.nav.work },
    { href: `#${NAV_IDS.colour}`, label: dict.nav.colour },
    { href: `#${NAV_IDS.cut}`, label: dict.nav.cut },
    { href: `#${NAV_IDS.studio}`, label: dict.nav.studio },
    { href: `#${NAV_IDS.testimonials}`, label: dict.nav.testimonials },
    { href: `#${NAV_IDS.visit}`, label: dict.nav.visit },
  ];

  const renderLinks = (): ReactNode => (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={close}>
          {link.label}
        </a>
      ))}
      <a
        className="cta"
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
      >
        {dict.nav.book}
      </a>
    </>
  );

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <nav className="mobile-menu__links" aria-label={dict.a11y.menuOpen}>
          {renderLinks()}
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <nav id="nav">
        <a className="logo" href={`#${NAV_IDS.top}`} aria-label={dict.a11y.home}>
          {SITE.logoSrc ? (
            <Image
              src={SITE.logoSrc}
              alt={SITE.name}
              width={140}
              height={34}
              priority
            />
          ) : (
            <>
              <b>{SITE.brandLine}</b>
              <small>{SITE.brandSub}</small>
            </>
          )}
        </a>

        <a
          className="mbook"
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.nav.bookShort}
        </a>

        <button
          className="mbtn"
          type="button"
          id="mbtn"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          {isOpen ? dict.a11y.menuClose : dict.a11y.menuOpen}
        </button>

        <div className="links" id="links">
          {renderLinks()}
        </div>
      </nav>
      {mobileMenu}
    </>
  );
};
