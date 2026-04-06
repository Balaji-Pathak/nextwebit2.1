import Link from "next/link";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["900"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const navLinks = ["Home", "Services", "Work", "About", "Contact"];

const serviceLinks = [
  "Design & Build",
  "E-Commerce",
  "Content & Copy",
  "Google Presence",
  "Photography",
  "Maintenance",
];

const socialLinks = ["f", "in", "yt", "wa", "tw"];

const contactItems = [
  "Jaipur, Rajasthan",
  "+91 98765 43210",
  "hello@nexwebit.in",
];

export default function VLFooter() {
  return (
    <footer
      className="bg-[#080808] border-t border-white/[0.07] pt-14 md:pt-16"
      style={{ fontFamily: dmSans.style.fontFamily }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 pb-12">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.9fr_1.1fr_1.5fr] gap-10 lg:gap-8 xl:gap-12 mb-12">

          {/* ── Brand col ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Vela wordmark — Ve white, la gold */}
            <Link
              href="/themes/vintage-luxury"
              className={`${playfair.className} font-black text-[1.9rem] tracking-[-0.02em] text-[#f0ece4] block mb-5`}
            >
              Ve<span className="text-[#C9A84C]">la</span>
            </Link>
            <p className="text-[0.875rem] text-[rgba(240,236,228,0.5)] leading-[1.8] mb-6 max-w-sm lg:max-w-[300px]">
              We build websites that make decades-old local businesses impossible
              to ignore online. We visit your shop, understand your legacy, and
              craft a digital presence worthy of it.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {socialLinks.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[rgba(240,236,228,0.45)] text-[13px] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.08)] transition-all duration-200"
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
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#C9A84C] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-[0.875rem] text-[rgba(240,236,228,0.5)] hover:text-[#C9A84C] transition-colors duration-200 whitespace-nowrap"
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
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#C9A84C] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-[0.875rem] text-[rgba(240,236,228,0.5)] hover:text-[#C9A84C] transition-colors duration-200 whitespace-nowrap"
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
              className="text-[0.68rem] tracking-[0.18em] uppercase text-[#C9A84C] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              Stay in Touch
            </p>
            <p className="text-[0.875rem] text-[rgba(240,236,228,0.5)] leading-[1.7] mb-4">
              Business tips for local shop owners in Hindi &amp; English. No spam, ever.
            </p>

            {/* Email input + button */}
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-white/[0.05] border border-white/10 rounded-lg px-3.5 py-2.5 text-[0.875rem] text-[#f0ece4] placeholder:text-[rgba(240,236,228,0.25)] outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors duration-200"
              />
              <button className="bg-[#C9A84C] text-black rounded-lg px-5 py-2.5 text-[0.875rem] font-bold hover:bg-[#e2c074] hover:-translate-y-px transition-all duration-200 whitespace-nowrap">
                Join
              </button>
            </div>

            <p
              className="text-[0.65rem] tracking-[0.06em] text-[rgba(240,236,228,0.25)] mb-5"
              style={{ fontFamily: dmMono.style.fontFamily }}
            >
              No spam · Unsubscribe anytime
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {contactItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[0.8rem] text-[rgba(240,236,228,0.4)]"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#C9A84C] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.06] mb-5" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
          <p className="text-[0.78rem] text-[rgba(240,236,228,0.3)]">
            © 2025{" "}
            <span className={`${playfair.className} text-[#f0ece4]`}>
              Ve<span className="text-[#C9A84C]">la</span>
            </span>
            {" "}· All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[0.78rem] text-[rgba(240,236,228,0.3)] hover:text-[#C9A84C] transition-colors duration-200"
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
