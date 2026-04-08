"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const navLinks = ["Home", "About us", "Services", "Pricing", "Contact"];

export default function PONavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={inter.className}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          height: 64,
          borderBottom: "1px solid rgba(59,61,184,0.08)",
          background: scrolled ? "rgba(255,255,255,0.96)" : "#FFFFFF",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(59,61,184,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/themes/pro-office"
            className="flex items-center gap-3 no-underline"
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: "linear-gradient(135deg, #3B3DB8, #6366F1)",
                flexShrink: 0,
              }}
            />
            <div className="leading-none">
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1A1A2E",
                  margin: 0,
                }}
              >
                ProOffice
              </p>
              <p
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#8888AA",
                  margin: 0,
                  marginTop: 2,
                  textTransform: "uppercase",
                }}
              >
                Business Solutions
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "#4A4A6A",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3B3DB8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4A4A6A";
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#"
              style={{
                background: "#3B3DB8",
                color: "#FFFFFF",
                borderRadius: 999,
                padding: "9px 22px",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2B2D8A";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,61,184,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#3B3DB8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{ background: "transparent", border: "none" }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: "#3B3DB8",
                  transform: menuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: "#3B3DB8",
                  opacity: menuOpen ? 0 : 1,
                  transition: "all 0.25s ease",
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: "#3B3DB8",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={inter.className}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 70,
          background: "#FFFFFF",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "72px 24px 32px",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={closeMenu}
              style={{
                fontSize: "2.1rem",
                lineHeight: 1,
                fontWeight: 700,
                color: "#3B3DB8",
                textDecoration: "none",
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "auto" }}>
          <Link
            href="#"
            onClick={closeMenu}
            style={{
              background: "#3B3DB8",
              color: "#FFFFFF",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
