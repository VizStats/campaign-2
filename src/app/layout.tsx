import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Playfair_Display, Poppins } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ALLOW_INDEXING } from "@/content/indexing";
import { candidate, party } from "@/content/facts";
import { site } from "@/content/site";
import "./globals.css";

const display = Bebas_Neue({ variable: "--font-bebas", weight: "400", subsets: ["latin"] });
const sans = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const serif = Playfair_Display({ variable: "--font-playfair", style: ["normal", "italic"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [...site.keywords, candidate.fullName, candidate.district, party.name],
  authors: [{ name: `${candidate.callName} Campaign Organisation` }],
  creator: `${candidate.callName} Campaign Organisation`,
  category: "politics",
  applicationName: `${candidate.callName} — ${candidate.districtShort} 2027`,
  publisher: `${candidate.callName} Campaign Organisation`,
  formatDetection: { telephone: false, email: false, address: false },
  // Paste the code from Google Search Console into NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION on the host.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  // Local signals: Rivers State (ISO 3166-2:NG-RI).
  other: {
    "geo.region": "NG-RI",
    "geo.placename": `${candidate.district}, ${candidate.state}`,
  },
  alternates: { canonical: "/" },
  robots: ALLOW_INDEXING
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: `${candidate.callName} — ${candidate.districtShort} 2027`,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#2a1a05" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${display.variable} ${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-dvh bg-paper font-sans text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
