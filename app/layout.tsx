import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextWebIt — Local Websites for Rajasthan Businesses | nexwebit.in",
  description:
    "We visit your shop and build professional websites. Fast delivery, honest pricing from ₹4,999. Serving local businesses across Rajasthan.",
  metadataBase: new URL("https://nexwebit.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
