import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    ],
    shortcut: "/icon.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-white text-[#647069] antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
