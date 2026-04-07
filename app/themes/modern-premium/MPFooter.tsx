import Link from "next/link";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weights: [400, 500, 600, 700] });
const dmSans = DM_Sans({ subsets: ["latin"], weights: [300, 400] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: 400 });

const navLinks = ["Home", "Shop", "About", "Contact"];

const serviceLinks = [
  "Design & Build",
  "E-Commerce",
  "Google Presence",
  "Maintenance",
];

const socialLinks = ["f", "in", "yt", "wa", "tw"];

const contactItems = [
  "Jaipur, Rajasthan",
  "+91 98765 43210",
  "hello@nexwebit.in",
];

export default function MPFooter() {
  return (
    <footer
      className="bg-[#0a1e10] border-t border-[rgba(245,237,224,0.07)] pt-14 md:pt-16"
      style={{ fontFamily: dmSans.style.fontFamily }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 pb-12">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.9fr_1.1fr_1.5fr] gap-10 lg:gap-8 xl:gap-12 mb-12">

          {/* ── Brand col ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Feuilles wordmark — Feuil cream, les gold */}
            <Link
              href="/themes/modern-premium"
              className={`${cormorant.className} font-black text-[1.9rem] tracking-[-0.02em] text-[#f5ede0] block mb-5`}
            >
              Feuil<span className="text-[#c9a96e]">les</span>
            </Link>
            <p className="text-[0.875rem] text-[rgba(245,237,224,0.55)] leading-[1.8] mb-6 max-w-sm lg:max-w-[300px]">
              We craft bespoke digital experiences for premium fashion brands and boutiques that demand the extraordinary.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socialLinks.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[rgba(245,237,224,0.1)] flex items-center justify-center text-[rgba(245,237,224,0.45)] text-[13px] hover:border-[#c9a96e] hover:text-[#c9a96e] hover:bg-[rgba(201,169,110,0.08)] transition-all duration-200"
                  style={{ fontFamily: dmMono.style.fontFamily }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Navigate col ── */}
          <div>
            <p
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#c9a96e] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-[0.875rem] text-[rgba(245,237,224,0.55)] hover:text-[#c9a96e] transition-colors duration-200 whitespace-nowrap"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services col ── */}
          <div>
            <p
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#c9a96e] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-[0.875rem] text-[rgba(245,237,224,0.55)] hover:text-[#c9a96e] transition-colors duration-200 whitespace-nowrap"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Stay in Touch col ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#c9a96e] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Stay in Touch
            </p>
            <p className="text-[0.875rem] text-[rgba(245,237,224,0.55)] leading-[1.7] mb-4">
              Business tips for premium retailers in Hindi &amp; English. No spam, ever.
            </p>

            {/* Email input + button */}
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-[rgba(245,237,224,0.04)] border border-[rgba(245,237,224,0.1)] rounded-lg px-3.5 py-2.5 text-[0.875rem] text-[#f5ede0] placeholder:text-[rgba(245,237,224,0.25)] outline-none focus:border-[rgba(201,169,110,0.5)] transition-colors duration-200"
              />
              <button className="bg-[#c9a96e] text-[#0f2419] rounded-lg px-5 py-2.5 text-[0.875rem] font-bold hover:bg-[#e2c074] hover:-translate-y-px transition-all duration-200 whitespace-nowrap">
                Join
              </button>
            </div>

            <p
              className="text-[0.65rem] tracking-[0.06em] text-[rgba(245,237,224,0.25)] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              No spam · Unsubscribe anytime
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {contactItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[0.8rem] text-[rgba(245,237,224,0.4)]"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#c9a96e] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-[rgba(245,237,224,0.06)] mb-5" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
          <p className="text-[0.78rem] text-[rgba(245,237,224,0.3)]">
            © 2025{" "}
            <span className={`${cormorant.className} text-[#f5ede0]`}>
              NextWeb<span className="text-[#c9a96e]">It</span>
            </span>
            {" "}· nexwebit.in
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[0.78rem] text-[rgba(245,237,224,0.3)] hover:text-[#c9a96e] transition-colors duration-200"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
