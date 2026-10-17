import { NAV_IDS } from "@/data/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import type { Dictionary } from "@/lib/i18n/types";

type ColourAtelierProps = {
  dictionary: Dictionary;
};

export const ColourAtelier = ({
  dictionary,
}: ColourAtelierProps): React.JSX.Element => {
  const t = dictionary.colour;

  return (
    <section className="colour dark" id={NAV_IDS.colour} data-nav="dark">
      <div className="wrap cgrid">
        <PhotoSlot
          imageKey="c1"
          alt={t.mainAlt}
          slot={t.mainSlot}
          className="main t3"
        />
        <div className="copy">
          <span className="lbl colour-label">{t.label}</span>
          <h2 className="serif rv">
            {t.titleBefore}
            <em>{t.titleEm}</em>
            {t.titleAfter}
          </h2>
          <p className="rv">{t.body}</p>
          <div className="dim rv">
            {t.dimensions.map((item) => (
              <div key={item.num}>
                {item.name} <span>{item.num}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tones">
          {t.tones.map((item) => (
            <PhotoSlot
              key={item.key}
              imageKey={item.key}
              alt={item.alt}
              slot={item.slot}
              className={item.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
