"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/themes", label: "Themes" },
  { href: "/#process", label: "Process" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-[rgba(10,31,92,0.97)] backdrop-blur-[8px] border-b border-white/10 shadow-sm"
    : "bg-transparent border-b border-transparent";

  const linkClass = (href: string) => {
    const isThemes = href === "/themes";
    const isActive = isThemes && pathname === "/themes";
    if (isActive) {
      return "text-[13px] font-medium text-yellow-400 border-b-2 border-yellow-400 pb-0.5 transition-colors duration-300";
    }
    return "text-[13px] font-medium text-white/95 hover:text-white transition-colors duration-300";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${navClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white font-bold text-lg leading-none transition-transform group-hover:scale-105"
            aria-hidden
          >
            N
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-gold text-base tracking-tight">
              NextWebIt
            </span>
            <span className="block text-[11px] text-gold/65">nexwebit.in</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass(l.href)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-white shadow-md hover:bg-[#e64a19] transition-colors duration-300"
          >
            Get Free Visit
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-white border border-white/20"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[rgba(10,31,92,0.98)] backdrop-blur-md px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((l) => {
              const themesActive = pathname === "/themes" && l.href === "/themes";
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      themesActive
                        ? "block py-2 text-[13px] font-medium text-yellow-400"
                        : "block py-2 text-[13px] font-medium text-white/95 hover:text-white"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/#contact"
                className="inline-flex mt-2 rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get Free Visit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
