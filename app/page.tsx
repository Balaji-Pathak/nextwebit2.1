import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <ClientLogos />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <CtaStrip />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
