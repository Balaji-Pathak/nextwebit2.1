"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

const navItems = ["About", "Download", "Pricing", "Features", "News", "Contact"];

export default function GANavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const nb: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    height: 68,
    background: scrolled || menuOpen
      ? "rgba(13,11,30,0.92)"
      : "transparent",
    backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(123,47,255,0.2)" : "1px solid transparent",
    transition: "all 0.4s ease",
    fontFamily: inter.style.fontFamily,
  };

  return (
    <>
      <nav style={nb}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/themes/geo-abstract" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #FF4500", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ width: 14, height: 2, background: "linear-gradient(90deg,#FF4500,#E91E8C)", borderRadius: 2, transform: "rotate(-40deg)" }} />
            </div>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              geo<span style={{ color: "#FF4500" }}>abstract</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="ga-links" style={{ display: "flex", listStyle: "none", gap: 32, margin: 0, padding: 0 }}>
            {navItems.map((item, i) => (
              <li key={item}>
                <Link href="#" style={{
                  fontSize: "0.8rem", fontWeight: i === 1 ? 700 : 400,
                  color: i === 1 ? "#fff" : "rgba(255,255,255,0.55)",
                  textDecoration: "none", letterSpacing: "0.08em",
                  textTransform: "uppercase", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FF4500")}
                  onMouseLeave={e => (e.currentTarget.style.color = i === 1 ? "#fff" : "rgba(255,255,255,0.55)")}
                >{item}</Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button className="ga-burger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8 }}
            aria-label="Menu"
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: "#FF4500", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span style={{ display: "block", width: 16, height: 1.5, background: "#FF4500", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span style={{ display: "block", width: 22, height: 1.5, background: "#FF4500", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "#0D0B1E",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8,
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.4s ease",
        fontFamily: inter.style.fontFamily,
      }}>
        <div style={{ position: "absolute", top: 68, left: 0, right: 0, height: 1, background: "rgba(123,47,255,0.2)" }} />
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,69,0,0.5)", marginBottom: 28 }}>geoabstract</p>
        {navItems.map((item, i) => (
          <Link key={item} href="#" onClick={() => setMenuOpen(false)}
            style={{ fontSize: "2.2rem", fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.02em", transition: "color 0.2s", transitionDelay: `${i * 50}ms` }}
            onMouseEnter={e => (e.currentTarget.style.color = "#FF4500")}
            onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
          >{item}</Link>
        ))}
        <Link href="#" onClick={() => setMenuOpen(false)} style={{ marginTop: 28, padding: "12px 32px", background: "linear-gradient(135deg,#FF4500,#E91E8C)", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
          Join Us
        </Link>
      </div>

      <style>{`
        @media(max-width:768px){
          .ga-links{display:none!important;}
          .ga-burger{display:flex!important;}
        }
      `}</style>
    </>
  );
}
