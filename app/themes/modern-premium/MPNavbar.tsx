"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400","500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const navItems = ["Home", "Shop", "About", "Contact"];

export default function MPNavbar() {
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
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: "72px",
          background: scrolled || menuOpen ? "rgba(15,36,25,0.94)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(245,237,224,0.08)" : "1px solid transparent",
          transition: "all 0.5s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Badge logo */}
          <Link href="/themes/modern-premium" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              border: "1.5px solid rgba(201,169,110,0.5)",
              background: "rgba(26,58,42,0.8)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span className={cormorant.className} style={{ color: "#f5ede0", fontSize: 18, fontWeight: 600, fontStyle: "italic", lineHeight: 1 }}>M</span>
            </div>
            <span style={{ fontFamily: dmMono.style.fontFamily, fontSize: 8, color: "rgba(245,237,224,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Premium</span>
          </Link>

          {/* Center nav */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }} className="hidden-mobile">
            <ul style={{ display: "flex", listStyle: "none", gap: 40, margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", fontWeight: 500, color: "rgba(245,237,224,0.7)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f5ede0")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.7)")}
                  >{item}</Link>
                </li>
              ))}
            </ul>
            <div style={{ width: "100%", height: 1, background: "rgba(201,169,110,0.25)" }} />
          </div>

          {/* Right: Cart + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }} className="hidden-mobile">
              <span style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.875rem", color: "rgba(245,237,224,0.7)" }}>Cart</span>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#c9a96e", color: "#0f2419", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>2</span>
            </div>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, alignItems: "center", justifyContent: "center", width: 40, height: 40 }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              <span style={{ display: "block", height: 1.5, width: 20, background: "#c9a96e", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
              <span style={{ display: "block", height: 1.5, width: 16, background: "#c9a96e", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", height: 1.5, width: 20, background: "#c9a96e", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "#0f2419",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 12,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
      }}>
        <div style={{ position: "absolute", top: 72, left: 0, right: 0, height: 1, background: "rgba(245,237,224,0.06)" }} />
        <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,169,110,0.4)", marginBottom: 24 }}>modern premium</p>
        {navItems.map((item, i) => (
          <Link key={item} href="#" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: cormorant.className, fontSize: "2.5rem", fontWeight: 600, fontStyle: "italic", color: "#f5ede0", textDecoration: "none", transitionDelay: `${i * 60}ms` }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c9a96e")}
            onMouseLeave={e => (e.currentTarget.style.color = "#f5ede0")}
          >{item}</Link>
        ))}
        <Link href="#" onClick={() => setMenuOpen(false)} style={{ marginTop: 24, padding: "12px 32px", background: "#c9a96e", color: "#0f2419", borderRadius: 4, fontFamily: dmSans.style.fontFamily, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
          Book a Call
        </Link>
        <p style={{ position: "absolute", bottom: 32, fontFamily: dmMono.style.fontFamily, fontSize: "0.7rem", color: "rgba(245,237,224,0.25)", textAlign: "center" }}>
          +91 98765 43210 · hello@nexwebit.in
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
