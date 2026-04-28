"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const navItems = [
  { label: "Home", href: "/themes/new-asthetic", active: true },
  { label: "Plans", href: "#plans" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
];

export default function NANavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 border-b border-[#6B4226]/10 bg-white transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center gap-8 px-6 md:px-10">
          <Link
            href="/themes/new-asthetic"
            className="flex cursor-pointer items-center shrink-0"
          >
            <span
              className={`${playfair.className} text-[1.3rem] font-semibold italic text-[#6B4226]`}
            >
              Wedding &amp; Co.
            </span>
            <span className="mx-2 h-5 w-px bg-[#6B4226]/25" />
          </Link>

          <nav className={`${dmSans.className} hidden flex-1 items-center justify-center md:flex`}>
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`cursor-pointer text-[0.8rem] uppercase tracking-[0.1em] transition-colors ${
                    item.active
                      ? "font-medium text-[#6B4226]"
                      : "font-normal text-[#6B4226]/60 hover:font-medium hover:text-[#6B4226]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            {["f", "t", "ig"].map((icon) => (
              <Link
                key={icon}
                href="#"
                aria-label={`${icon} social link`}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#6B4226] text-[10px] font-bold text-white transition-colors hover:bg-[#4A2E1A]"
              >
                {icon}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="ml-auto flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-[#6B4226] transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#6B4226] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#6B4226] transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${playfair.className} cursor-pointer text-[2rem] font-medium italic text-[#6B4226] transition-opacity hover:opacity-70`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
