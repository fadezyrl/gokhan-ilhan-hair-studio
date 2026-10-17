import { SITE, NAV_IDS } from "@/data/site";
import { HeroMedia } from "@/components/sections/Hero/HeroMedia";
import type { Dictionary } from "@/lib/i18n/types";

type HeroProps = {
  dictionary: Dictionary;
};

export const Hero = ({ dictionary }: HeroProps): React.JSX.Element => {
  const t = dictionary.hero;

  return (
    <section className="hero light" data-nav="light">
      <HeroMedia alts={t.slideAlts} label={t.slideshowLabel} />
      <div className="txt">
        <span className="lbl rv">{t.eyebrow}</span>
        <h1 className="serif">
          <span className="rv">{t.line1}</span>
          <span className="rv">{t.line2}</span>
          <span className="rv">
            {t.line3Before}
            <em>{t.line3Em}</em>
            {t.line3After}
          </span>
        </h1>
        <p className="rv">{t.support}</p>
        <div className="row rv">
          <a
            className="btn fill"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ctaBook}
          </a>
          <a className="btn line" href={`#${NAV_IDS.work}`}>
            {t.ctaExplore}
          </a>
        </div>
      </div>
      <span className="scroll lbl" aria-hidden="true">
        {t.scroll} <i />
      </span>
    </section>
  );
};
