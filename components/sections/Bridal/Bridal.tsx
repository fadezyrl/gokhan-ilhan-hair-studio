import { SITE, NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import type { Dictionary } from "@/lib/i18n/types";

type BridalProps = {
  dictionary: Dictionary;
};

export const Bridal = ({ dictionary }: BridalProps): React.JSX.Element => {
  const t = dictionary.bridal;

  return (
    <section className="bridal light" id={NAV_IDS.bridal} data-nav="light">
      <div className="wrap">
        <PhotoSlot
          imageKey="b1"
          alt={t.imageAlt}
          slot={t.imageSlot}
          className="wide t4"
        />
        <div className="brow">
          <span className="lbl">{t.label}</span>
          <h2 className="serif rv">
            {t.titleBefore}
            <em>{t.titleEm}</em>
            {t.titleAfter}
          </h2>
          <div className="act">
            <p>{t.body}</p>
            <a
              className="btn line"
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
