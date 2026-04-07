"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export default function MENavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = ["Home", "Portfolio", "Services", "Journal", "Contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          transition: "background 0.4s ease, border-bottom 0.4s ease",
          background: scrolled ? "rgba(247,243,238,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(58,44,36,0.08)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <span
            className={playfair.className}
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#2c1f14",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Bloom Studio
          </span>
          <span
            className={cormorant.className}
            style={{
              fontSize: "0.65rem",
              fontStyle: "italic",
              color: "rgba(44,31,20,0.45)",
              letterSpacing: "0.12em",
              lineHeight: 1,
            }}
          >
            Crafting moments, beautifully
          </span>
        </div>

        {/* Center Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="me-nav-center"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={dmSans.className}
              style={{
                fontSize: "0.82rem",
                fontWeight: 400,
                color: "rgba(44,31,20,0.6)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#c16b4a";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(44,31,20,0.6)";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#contact"
            className={dmSans.className}
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#f7f3ee",
              background: "#c16b4a",
              padding: "9px 22px",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#a85a3c";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#c16b4a";
            }}
          >
            Book a Call
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            className="me-hamburger"
            aria-label="Open menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? "18px" : "24px",
                  height: "1px",
                  background: "#2c1f14",
                  transition: "width 0.2s ease",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "#f7f3ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "28px",
            right: "48px",
            background: "none",
            border: "none",
            cursor: "none",
            fontSize: "1.5rem",
            color: "#2c1f14",
            lineHeight: 1,
          }}
          aria-label="Close menu"
        >
          ×
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={playfair.className}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#2c1f14",
                textDecoration: "none",
                lineHeight: 1,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#c16b4a";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#2c1f14";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <div
          className={dmSans.className}
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "0.75rem",
            color: "rgba(44,31,20,0.4)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          nexwebit.in
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .me-nav-center { display: none !important; }
          .me-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .me-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
