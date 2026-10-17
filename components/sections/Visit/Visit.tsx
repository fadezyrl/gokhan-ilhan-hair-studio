import { SITE, NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import type { Dictionary } from "@/lib/i18n/types";

type VisitProps = {
  dictionary: Dictionary;
};

export const Visit = ({ dictionary }: VisitProps): React.JSX.Element => {
  const t = dictionary.visit;

  return (
    <section className="visit nude" id={NAV_IDS.visit} data-nav="light">
      <div className="wrap vg">
        <PhotoSlot imageKey="v1" alt={t.imageAlt} slot={t.imageSlot} />
        <div className="info">
          <span className="lbl">{t.label}</span>
          <h2 className="serif rv">
            {t.titleBefore}
            <em>{t.titleEm}</em>
            {t.titleAfter}
          </h2>
          <dl className="dl">
            <div>
              <dt>{t.locationLabel}</dt>
              <dd>{t.locationValue}</dd>
            </div>
            <div>
              <dt>{t.addressLabel}</dt>
              <dd>{t.addressValue}</dd>
            </div>
            <div>
              <dt>{t.instagramLabel}</dt>
              <dd>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
          <a
            className="btn line"
            id="dir"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.directions}
          </a>
        </div>
      </div>
    </section>
  );
};
