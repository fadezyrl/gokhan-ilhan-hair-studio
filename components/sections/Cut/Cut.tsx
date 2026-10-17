import { NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import type { Dictionary } from "@/lib/i18n/types";

type CutProps = {
  dictionary: Dictionary;
};

export const Cut = ({ dictionary }: CutProps): React.JSX.Element => {
  const t = dictionary.cut;

  return (
    <section className="cut light" id={NAV_IDS.cut} data-nav="light">
      <div className="wrap cutg">
        <PhotoSlot
          imageKey="k1"
          alt={t.bigAlt}
          slot={t.bigSlot}
          className="big t3"
        />
        <div className="side">
          <span className="lbl">{t.label}</span>
          <PhotoSlot
            imageKey="k2"
            alt={t.smallAlt}
            slot={t.smallSlot}
            className="small t2"
          />
        </div>
        <h2 className="serif rv">
          {t.titleBefore}
          <em>{t.titleEm}</em>
          {t.titleAfter}
        </h2>
        <p className="note rv">{t.note}</p>
      </div>
    </section>
  );
};
