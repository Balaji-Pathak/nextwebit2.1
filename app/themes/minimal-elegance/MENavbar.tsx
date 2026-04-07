"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"] });

const navItems = ["Home", "Gallery", "Schedule", "Contact"];

export default function MENavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: 68,
        background: scrolled || menuOpen ? "rgba(245,240,232,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(44,62,45,0.08)" : "1px solid transparent",
        transition: "all 0.45s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Brand — stacked like image */}
          <Link href="/themes/minimal-elegance" style={{ textDecoration: "none" }}>
            <div className={cormorant.className} style={{ fontSize: "1rem", fontWeight: 600, color: "#2C3E2D", letterSpacing: "0.02em", lineHeight: 1.2 }}>True Romance</div>
            <div style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.65rem", color: "#8A9E8B", letterSpacing: "0.12em", textTransform: "uppercase" }}>Wedding Planners</div>
          </Link>

          {/* Desktop nav — clean text only, no pills */}
          <ul className="me-nav-links" style={{ display: "flex", listStyle: "none", gap: 36, margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item}>
                <Link href="#" style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.875rem", fontWeight: 400, color: "#2C3E2D", textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C4735A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#2C3E2D")}
                >{item}</Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href="#" className="me-nav-cta" style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.8rem", fontWeight: 500, color: "#C4735A", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(196,115,90,0.4)", paddingBottom: 2, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4735A"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(196,115,90,0.4)"; }}
          >Book a Call</Link>

          {/* Hamburger */}
          <button className="me-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, alignItems: "center", width: 36, height: 36, justifyContent: "center" }}
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: 20, height: 1, background: "#2C3E2D", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
            <span style={{ display: "block", width: 14, height: 1, background: "#2C3E2D", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 20, height: 1, background: "#2C3E2D", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "#F5F0E8",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
      }}>
        <div style={{ position: "absolute", top: 68, left: 0, right: 0, height: 1, background: "rgba(44,62,45,0.06)" }} />
        <p style={{ fontFamily: dmSans.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8A9E8B", marginBottom: 28 }}>True Romance</p>
        {navItems.map((item, i) => (
          <Link key={item} href="#" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: cormorant.className, fontSize: "2.8rem", fontWeight: 500, fontStyle: "italic", color: "#2C3E2D", textDecoration: "none", transitionDelay: `${i * 50}ms`, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C4735A")}
            onMouseLeave={e => (e.currentTarget.style.color = "#2C3E2D")}
          >{item}</Link>
        ))}
        <Link href="#" onClick={() => setMenuOpen(false)} style={{ marginTop: 28, padding: "12px 32px", background: "#C4735A", color: "#fff", borderRadius: 999, fontFamily: dmSans.style.fontFamily, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
          Book a Call
        </Link>
      </div>

      <style>{`
        @media(max-width:768px){
          .me-nav-links,.me-nav-cta{display:none!important;}
          .me-hamburger{display:flex!important;}
        }
      `}</style>
    </>
  );
}
