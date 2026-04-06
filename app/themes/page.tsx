import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaStrip } from "@/components/CtaStrip";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ThemesHero } from "@/components/themes/ThemesHero";
import { ThemesFilter } from "@/components/themes/ThemesFilter";
import { ThemesGrid } from "@/components/themes/ThemesGrid";

export const metadata: Metadata = {
  title: "Website Themes — NextWebIt | nexwebit.in",
  description:
    "Eight design styles we show during your free visit. Dark, light, bold, minimal — pick what fits your Rajasthan business.",
};

export default function ThemesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F4F6FB]">
        <ThemesHero />
        <ThemesFilter />
        <ThemesGrid />
        <CtaStrip />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
