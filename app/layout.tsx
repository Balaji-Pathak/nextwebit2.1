import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextWebIT - Website Development Company in Rajasthan",
    template: "%s | NextWebIT",
  },

  description:
    "NextWebIT builds professional business websites for shops, clinics, and local businesses across Rajasthan.",

  metadataBase: new URL("https://nextwebit.in"),

  applicationName: "NextWebIT",

  keywords: [
    "NextWebIT",
    "Website Development Rajasthan",
    "Web Design Jaipur",
    "Business Website Services",
    "Local Business Websites",
  ],

  authors: [{ name: "NextWebIT" }],

  creator: "NextWebIT",

  publisher: "NextWebIT",

  alternates: {
    canonical: "https://nextwebit.in",
  },

  openGraph: {
    title: "NextWebIT",
    description: "Professional website development for Rajasthan businesses.",
    url: "https://nextwebit.in",
    siteName: "NextWebIT",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NextWebIT",
    description: "Professional website development for Rajasthan businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "NextWebIT",
              url: "https://nextwebit.in",
              telephone: "+91-7357367085",
              areaServed: "Rajasthan",
              description:
                "Professional website development company for Rajasthan businesses.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
