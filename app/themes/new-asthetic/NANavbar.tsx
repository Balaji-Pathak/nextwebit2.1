"use client";

import Link from "next/link";
import { Space_Grotesk, Sora } from "next/font/google";
import { useEffect, useState } from "react";

const heading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "Plans", href: "#plans" },
  { label: "Showcase", href: "#showcase" },
];

export default function NANavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={body.className}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 70,
          borderBottom: "1px solid rgba(125,249,255,0.2)",
          background: scrolled ? "rgba(15,23,42,0.92)" : "#0F172A",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <div className="mx-auto flex h-[70px] w-full max-w-[1200px] items-center justify-between px-5 lg:px-8">
          <Link href="/themes/new-asthetic" className="no-underline">
            <div className="flex items-center gap-2">
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: "#7DF9FF",
                  boxShadow: "0 0 14px rgba(125,249,255,0.65)",
                }}
              />
              <p
                className={heading.className}
                style={{
                  margin: 0,
                  color: "#EAF2FF",
                  letterSpacing: "0.08em",
                  fontSize: "1rem",
                }}
              >
                New Asthetic
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  style={{
                    color: "#A8B8D8",
                    fontSize: "0.76rem",
                    textDecoration: "none",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#plans"
            className="hidden md:inline-block"
            style={{
              background: "#7DF9FF",
              color: "#0F172A",
              textDecoration: "none",
              borderRadius: 8,
              padding: "8px 18px",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              border: "1px solid rgba(125,249,255,0.4)",
            }}
          >
            Pricing
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              border: "none",
              background: "transparent",
              color: "#7DF9FF",
              fontSize: "1.2rem",
            }}
          >
            {menuOpen ? "x" : "+"}
          </button>
        </div>
      </nav>

      <div
        className={body.className}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 65,
          background: "#0A1222",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#D3E7FF",
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "0.86rem",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
