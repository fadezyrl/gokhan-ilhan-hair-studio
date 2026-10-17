import { Bridal } from "@/components/sections/Bridal/Bridal";
import { Booking } from "@/components/sections/Booking/Booking";
import { ColourAtelier } from "@/components/sections/ColourAtelier/ColourAtelier";
import { Cut } from "@/components/sections/Cut/Cut";
import { Hero } from "@/components/sections/Hero/Hero";
import { SignatureWork } from "@/components/sections/SignatureWork/SignatureWork";
import { Studio } from "@/components/sections/Studio/Studio";
import { Visit } from "@/components/sections/Visit/Visit";
import { Footer } from "@/components/layout/Footer/Footer";
import { Nav } from "@/components/layout/Nav/Nav";
import { SiteEffects } from "@/components/ui/SiteEffects/SiteEffects";
import { DictionaryProvider } from "@/context/DictionaryContext";
import { MenuProvider } from "@/context/MenuContext";
import { DEFAULT_LOCALE, NAV_IDS } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default function Home(): React.JSX.Element {
  const dictionary = getDictionary(DEFAULT_LOCALE);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <MenuProvider>
        <SiteEffects />
        <Nav />
        <main id={NAV_IDS.top}>
          <Hero dictionary={dictionary} />
          <SignatureWork />
          <ColourAtelier dictionary={dictionary} />
          <Cut dictionary={dictionary} />
          <Studio dictionary={dictionary} />
          <Bridal dictionary={dictionary} />
          <Visit dictionary={dictionary} />
          <Booking dictionary={dictionary} />
        </main>
        <Footer dictionary={dictionary} />
      </MenuProvider>
    </DictionaryProvider>
  );
}
