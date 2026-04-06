import Link from "next/link";

const trustItems = [
  "We come to your shop",
  "Delivery in 5 working days",
  "Starting at just ₹4,999",
  "Free changes till you're happy",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-navy pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[min(50vw,420px)] w-[min(50vw,420px)] rounded-full bg-accent/15 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-[min(55vw,480px)] w-[min(55vw,480px)] rounded-full bg-gold/12 blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <p className="inline-flex items-center rounded-full border border-gold/80 px-4 py-2 text-sm text-gold font-medium mb-8">
          Trusted by 120+ local businesses across Rajasthan
        </p>

        <h1 className="text-white max-w-4xl">
          <span className="block text-[clamp(28px,5vw,42px)] font-semibold leading-[1.25]">
            Apke Business Ka
          </span>
          <span className="block text-[clamp(28px,5vw,42px)] font-semibold leading-[1.25] text-gold">
            Professional Website
          </span>
          <span className="block text-[clamp(22px,4vw,42px)] font-semibold leading-[1.25] mt-1">
            — Hum Aate Hain Aapke Paas
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-white/[0.72]">
          NextWebIt aapke dukaan ya clinic tak khud aata hai, samajhta hai aapka kaam, aur 5 din mein
          ek saaf, mobile-friendly website tayar karta hai — bina tension ke, seedhe Hindi / English
          mein support ke sath.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg hover:bg-[#e64a19] transition-colors duration-300"
          >
            Book a Free Visit Today
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors duration-300"
          >
            View Our Work →
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((text) => (
            <li key={text} className="flex items-start gap-2.5 text-[14px] text-white/95">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                ✓
              </span>
              <span className="leading-snug">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
