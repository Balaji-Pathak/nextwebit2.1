import { WHATSAPP_DISPLAY, WHATSAPP_E164 } from "@/lib/site";

export function CtaStrip() {
  const href = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
    "Namaste NextWebIt, mujhe free visit book karni hai."
  )}`;

  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-[26px] md:text-[28px] font-semibold text-white leading-tight">
          Aaj hi baat karein — free visit book karein
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-[15px] leading-[1.7] text-white/90">
          WhatsApp par message bhejein, hum aapke area mein visit ka time fix kar lenge. Koi obligation
          nahi — pehle mil kar decide karenge.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-[16px] font-bold text-accent shadow-lg hover:bg-white/95 transition-colors"
        >
          <span aria-hidden>📲</span>
          WhatsApp us: {WHATSAPP_DISPLAY}
        </a>
      </div>
    </section>
  );
}
