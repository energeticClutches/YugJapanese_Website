import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YugJapanese | Offline-first Japanese learning",
    template: "%s | YugJapanese",
  },
  description: siteConfig.description,
  openGraph: {
    title: "YugJapanese",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "YugJapanese",
    images: [
      {
        url: "/yugjapanese-hero.png",
        width: 1680,
        height: 945,
        alt: "YugJapanese app interface mockup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YugJapanese",
    description: siteConfig.description,
    images: ["/yugjapanese-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
