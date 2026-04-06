"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const navItems = ["Services", "Work", "About", "Contact"];

export default function VLNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-500 border-b ${
          scrolled || menuOpen
            ? "bg-[rgba(8,8,8,0.95)] backdrop-blur-xl border-white/[0.08]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-6">

          {/* Wordmark — Ve white, la gold, exactly like image */}
          <Link
            href="/themes/vintage-luxury"
            className={`${playfair.className} font-black text-[1.55rem] tracking-[-0.02em] text-[#f0ece4] shrink-0`}
          >
            Ve<span className="text-[#C9A84C]">la</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex list-none gap-1 ml-auto">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className={`${dmSans.className} px-[18px] py-[7px] rounded-full text-[0.875rem] font-medium text-[rgba(240,236,228,0.6)] border border-transparent hover:text-[#f0ece4] hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-200`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="#"
            className={`${dmSans.className} hidden md:inline-block px-[22px] py-[9px] bg-[#C9A84C] text-black rounded-full text-[0.875rem] font-bold tracking-[0.02em] hover:bg-[#e2c074] hover:-translate-y-px hover:shadow-[0_4px_24px_rgba(201,168,76,0.35)] transition-all duration-200 shrink-0`}
          >
            Book a Call
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0 ml-auto"
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
            <span className={`block h-[1.5px] bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "opacity-0 w-5" : "w-4"}`} />
            <span className={`block h-[1.5px] bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
          </button>

        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center items-center gap-3 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-[68px] left-0 right-0 h-px bg-white/[0.06]" />

        <p
          className="text-[0.65rem] tracking-[0.2em] uppercase text-[rgba(201,168,76,0.4)] mb-6"
          style={{ fontFamily: dmMono.style.fontFamily }}
        >
          vela agency
        </p>

        {navItems.map((item, i) => (
          <Link
            key={item}
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`${playfair.className} text-[2.4rem] font-black text-[#f0ece4] hover:text-[#C9A84C] transition-colors duration-200`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {item}
          </Link>
        ))}

        <Link
          href="#"
          onClick={() => setMenuOpen(false)}
          className={`${dmSans.className} mt-8 px-8 py-3.5 bg-[#C9A84C] text-black rounded-full text-[1rem] font-bold hover:bg-[#e2c074] transition-all duration-200`}
        >
          Book a Call
        </Link>

        <p
          className="absolute bottom-8 text-[0.72rem] text-[rgba(240,236,228,0.25)] text-center px-6"
          style={{ fontFamily: dmMono.style.fontFamily }}
        >
          +91 98765 43210 · hello@nexwebit.in
        </p>
      </div>
    </>
  );
}
