import { SITE } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/types";

type BookingProps = {
  dictionary: Dictionary;
};

export const Booking = ({ dictionary }: BookingProps): React.JSX.Element => {
  const t = dictionary.book;

  return (
    <section className="book dark" data-nav="dark">
      <div className="wrap">
        <span className="lbl book-label">{t.label}</span>
        <h2 className="serif rv book-title">
          {t.titleBefore}
          <em>{t.titleEm}</em>
          {t.titleAfter}
        </h2>
        <div className="row rv">
          <p>{t.body}</p>
          <a
            className="btn fill"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
