import Image from "next/image";
import { SITE, NAV_IDS } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/types";

type FooterProps = {
  dictionary: Dictionary;
};

export const Footer = ({ dictionary }: FooterProps): React.JSX.Element => {
  const copyright = dictionary.footer.copyright.replace(
    "{year}",
    String(SITE.year),
  );

  return (
    <footer className="light">
      <div className="wrap">
        <div className="fg">
          <a className="logo" href={`#${NAV_IDS.top}`} aria-label={dictionary.a11y.backToTop}>
            {SITE.logoSrc ? (
              <Image
                src={SITE.logoSrc}
                alt={SITE.name}
                width={140}
                height={34}
              />
            ) : (
              <>
                <b>{SITE.brandLine}</b>
                <small>{SITE.brandSub}</small>
              </>
            )}
          </a>
          <div>
            <div className="lbl footer-loc">{SITE.locationFull}</div>
            <nav className="fl" aria-label={dictionary.a11y.home}>
              <a href={`#${NAV_IDS.work}`}>{dictionary.nav.work}</a>
              <a href={`#${NAV_IDS.colour}`}>{dictionary.nav.colour}</a>
              <a href={`#${NAV_IDS.cut}`}>{dictionary.nav.cut}</a>
              <a href={`#${NAV_IDS.bridal}`}>{dictionary.nav.bridal}</a>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dictionary.nav.instagram}
              </a>
            </nav>
          </div>
        </div>
        <div className="fc">
          <span>{copyright}</span>
          <span>{dictionary.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
