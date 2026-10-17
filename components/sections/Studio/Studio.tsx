import { NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import type { Dictionary } from "@/lib/i18n/types";

type StudioProps = {
  dictionary: Dictionary;
};

export const Studio = ({ dictionary }: StudioProps): React.JSX.Element => {
  const t = dictionary.studio;

  return (
    <section className="studio nude" id={NAV_IDS.studio} data-nav="light">
      <div className="wrap stg">
        <blockquote className="serif rv">
          {t.quoteBefore}
          <em>{t.quoteEm}</em>
          {t.quoteAfter}
          <div className="ann">
            <span className="lbl">{t.approachLabel}</span>
            <span>{t.approach}</span>
            <span className="lbl">{t.placeLabel}</span>
            <span>{t.place}</span>
          </div>
        </blockquote>
        <PhotoSlot imageKey="s1" alt={t.imageAlt} slot={t.imageSlot} />
      </div>
    </section>
  );
};
