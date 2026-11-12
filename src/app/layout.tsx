import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/server";
import { localeMeta } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Arabic glyphs (Inter / JetBrains Mono have none); used as a fallback in the font stacks
const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoklien.com"),
  title: "Biomedical Liquid Waste Treatment system - Hospital wastewater treatment system",
  description:
    "Biomedical Liquid Waste Treatment system-Using advanced hybrid electrochemical technology for hospital effluent treatment and biomedical liquid waste treatment",
  alternates: {
    canonical: "https://ecoklien.com/",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: ["/icon.png", "/favicon.ico"],
    apple: "/icon.png",
  },
  openGraph: {
    title: "Biomedical Liquid Waste Treatment system - Hospital wastewater treatment system",
    description:
      "Biomedical Liquid Waste Treatment system-Using advanced hybrid electrochemical technology for hospital effluent treatment and biomedical liquid waste treatment",
    url: "https://ecoklien.com/",
    siteName: "EcoKlien",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "EcoKlien",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Liquid Waste Treatment system - Hospital wastewater treatment system",
    description:
      "Biomedical Liquid Waste Treatment system-Using advanced hybrid electrochemical technology for hospital effluent treatment and biomedical liquid waste treatment",
    images: ["/icon.png"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const { htmlLang, dir } = localeMeta[locale];

  return (
    <html
      lang={htmlLang}
      dir={dir}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-white text-[#647069] antialiased"
      >
        <LocaleProvider locale={locale}>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
