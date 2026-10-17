import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { DEFAULT_LOCALE } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const dictionary = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  openGraph: {
    title: dictionary.meta.ogTitle,
    description: dictionary.meta.ogDescription,
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html
      lang={DEFAULT_LOCALE}
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
