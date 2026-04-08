"use client";

import { useState, useEffect } from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ESNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Shows", "Artists", "Tickets", "Merch", "About"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          transition: "all 0.35s ease",
          background: scrolled
            ? "rgba(8,8,8,0.95)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(220,38,38,0.2)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #DC2626, #7F1D1D)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(220,38,38,0.5)",
            }}
          >
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 900, fontFamily: bebas.style.fontFamily }}>ES</span>
          </div>
          <div>
            <div
              style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: "1.5rem",
                letterSpacing: "0.15em",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              EXTREME<span style={{ color: "#DC2626" }}>SHOW</span>
            </div>
            <div
              style={{
                fontFamily: inter.style.fontFamily,
                fontSize: "0.55rem",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Live Event Experience
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="es-desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
        >
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: inter.style.fontFamily,
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#DC2626")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="#tickets"
            style={{
              fontFamily: bebas.style.fontFamily,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              color: "#fff",
              background: "linear-gradient(135deg, #DC2626, #B91C1C)",
              padding: "10px 28px",
              borderRadius: "3px",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
              border: "1px solid rgba(220,38,38,0.6)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(220,38,38,0.7)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(220,38,38,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            GET TICKETS
          </Link>

          {/* Hamburger */}
          <button
            className="es-hamburger"
            onClick={() => setMobileOpen(true)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: i === 1 ? "#DC2626" : "#fff",
                  borderRadius: "2px",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Full-screen Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#080808",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: "3rem",
                letterSpacing: "0.12em",
                color: "#fff",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#DC2626")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
            >
              {link.toUpperCase()}
            </Link>
          ))}
          <Link
            href="#tickets"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: bebas.style.fontFamily,
              fontSize: "1.2rem",
              letterSpacing: "0.15em",
              color: "#fff",
              background: "#DC2626",
              padding: "14px 40px",
              borderRadius: "3px",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            GET TICKETS NOW
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .es-desktop-nav { display: none !important; }
          .es-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
