"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MPNavbar from "./MPNavbar";
import MPFooter from "./MPFooter";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const GOLD = "#c9a96e";
const CREAM = "#f5ede0";
const BG = "#0f2419";
const BG2 = "#162d20";
const BG3 = "#1a3a2a";
const MUTED = "rgba(245,237,224,0.55)";
const BORDER = "rgba(245,237,224,0.08)";

const looks = [
  { label: "The Minimalist", price: "₹12,500", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80", tag: "New Arrival" },
  { label: "The Statement", price: "₹18,000", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", tag: "Bestseller" },
  { label: "The Heritage", price: "₹22,000", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", tag: "Limited" },
  { label: "The Evening", price: "₹28,000", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", tag: "Exclusive" },
];

const editorial = [
  { season: "SS 2025", headline: "Where Heritage Meets Haute", sub: "Handwoven silks reimagined for the modern Indian woman.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" },
  { season: "AW 2025", headline: "The Art of Restraint", sub: "Clean lines, raw edges, and the power of negative space.", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80" },
];

const materials = [
  { name: "Handwoven Silk", origin: "Varanasi", icon: "✦" },
  { name: "Pure Linen", origin: "Kolkata", icon: "✦" },
  { name: "Block Print Cotton", origin: "Jaipur", icon: "✦" },
  { name: "Zari Brocade", origin: "Surat", icon: "✦" },
  { name: "Raw Silk", origin: "Bangalore", icon: "✦" },
  { name: "Chanderi Fabric", origin: "Madhya Pradesh", icon: "✦" },
];

const lookbookImages = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80",
];

const press = [
  { outlet: "Vogue India", quote: "Redefining luxury for the conscious Indian buyer." },
  { outlet: "Harper's Bazaar", quote: "The boutique that every fashion-forward woman is talking about." },
  { outlet: "Elle India", quote: "A master class in understated elegance." },
];

export default function ModernPremiumPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = document.createElement("div");
    const dot = document.createElement("div");
    ring.style.cssText = `width:32px;height:32px;border:1.5px solid ${GOLD};border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s,border-color .2s;mix-blend-mode:normal;`;
    dot.style.cssText = `width:5px;height:5px;background:${GOLD};border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:left .04s,top .04s;`;
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    const move = (e: MouseEvent) => {
      ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px";
    };
    const grow = () => { ring.style.width = "52px"; ring.style.height = "52px"; ring.style.background = "rgba(201,169,110,0.1)"; };
    const shrink = () => { ring.style.width = "32px"; ring.style.height = "32px"; ring.style.background = "transparent"; };
    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach(el => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => { document.removeEventListener("mousemove", move); if (document.body.contains(ring)) document.body.removeChild(ring); if (document.body.contains(dot)) document.body.removeChild(dot); };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".mp-reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(36px)";
      (el as HTMLElement).style.transition = "opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const noise: React.CSSProperties = {
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998, opacity: 0.45,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
  };

  const tex = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5ede0' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div ref={pageRef} style={{ background: BG, cursor: "none", overflowX: "hidden" }}>
      <div style={noise} />
      <MPNavbar />

      {/* ══════════════════════════════
          HERO — Split layout with giant serif headline
      ══════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", background: BG, backgroundImage: tex, display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 72 }}>
        <div style={{ position: "absolute", left: 28, top: "50%", transform: "translateY(-50%)", opacity: 0.15, pointerEvents: "none" }}>
          <svg width="36" height="110" viewBox="0 0 36 110" fill="none"><path d="M28 6 Q6 6 6 28 L6 82 Q6 104 28 104" stroke={CREAM} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
        </div>
        <div style={{ position: "absolute", right: 28, top: "50%", transform: "translateY(-50%)", opacity: 0.15, pointerEvents: "none" }}>
          <svg width="36" height="110" viewBox="0 0 36 110" fill="none"><path d="M8 6 Q30 6 30 28 L30 82 Q30 104 8 104" stroke={CREAM} strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 64px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="mp-hero-grid">
          <div>
            <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 22 }}>Premium Collection · 2025</p>
            <h1 className={cormorant.className} style={{ fontSize: "clamp(3.8rem,8vw,8rem)", fontWeight: 600, lineHeight: 0.9, letterSpacing: "-0.02em", margin: "0 0 32px" }}>
              <span style={{ display: "block", color: CREAM, fontStyle: "italic" }}>Unique</span>
              <span style={{ display: "block", color: CREAM }}>fashion</span>
              <span style={{ display: "block", color: GOLD, fontStyle: "italic" }}>design</span>
            </h1>
            <p className={dmSans.className} style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, maxWidth: 360, marginBottom: 40 }}>
              Handcrafted garments that honour Indian heritage while embracing contemporary silhouettes. Each piece tells a story of craft, culture and timeless elegance.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <Link href="#" style={{ padding: "13px 36px", background: GOLD, color: "#0f2419", borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", letterSpacing: "0.03em", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#dbbf7e"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = "translateY(0)"; }}
              >Shop now!</Link>
              <Link href="#" style={{ padding: "13px 36px", background: "transparent", border: `1px solid rgba(245,237,224,0.2)`, color: CREAM, borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(201,169,110,0.5)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,237,224,0.2)"; }}
              >View Lookbook →</Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex" }}>
                {["PS","MA","KR"].map((init, i) => (
                  <div key={init} style={{ width: 32, height: 32, borderRadius: "50%", background: BG3, border: `2px solid ${BG}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: GOLD, fontFamily: dmMono.style.fontFamily, marginLeft: i === 0 ? 0 : -10 }}>{init}</div>
                ))}
              </div>
              <p className={dmSans.className} style={{ fontSize: "0.8rem", color: MUTED }}>
                <span style={{ color: GOLD, fontWeight: 500 }}>2,400+</span> happy clients across Rajasthan
              </p>
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", top: 20, left: 20, right: -20, bottom: -20, background: BG2, borderRadius: "20px 20px 70px 20px", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 390, aspectRatio: "3/4", borderRadius: "20px 20px 70px 20px", overflow: "hidden", border: `1px solid rgba(201,169,110,0.2)` }}>
              <Image src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" alt="Premium fashion" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, background: "rgba(15,36,25,0.75)", backdropFilter: "blur(12px)", border: `1px solid rgba(201,169,110,0.2)`, borderRadius: 10, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p className={cormorant.className} style={{ fontSize: "1.1rem", color: CREAM, margin: 0, fontStyle: "italic" }}>The Heritage Silk</p>
                  <p className={dmMono.className} style={{ fontSize: "0.65rem", color: GOLD, margin: 0, marginTop: 2 }}>New Arrival · SS 2025</p>
                </div>
                <div className={cormorant.className} style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 600 }}>₹22,000</div>
              </div>
            </div>
            <div style={{ position: "absolute", right: -16, top: "40%", zIndex: 2, writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              <p className={dmMono.className} style={{ fontSize: "0.58rem", letterSpacing: "0.14em", color: MUTED, textTransform: "uppercase", whiteSpace: "nowrap" }}>Our best designers working for the best designs</p>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <p className={dmMono.className} style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED }}>Scroll</p>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${GOLD})`, animation: "scrollPulse 2s ease infinite" }} />
        </div>
      </section>

      {/* ══════════════════════════════
          MARQUEE — fabric names scrolling
      ══════════════════════════════ */}
      <section style={{ background: GOLD, overflow: "hidden", padding: "18px 0", borderTop: `1px solid rgba(201,169,110,0.3)` }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 20s linear infinite", width: "max-content" }}>
          {[...materials, ...materials].map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap" }}>
              <span className={cormorant.className} style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#0f2419", fontWeight: 600 }}>{m.name}</span>
              <span className={dmMono.className} style={{ fontSize: "0.65rem", color: "rgba(15,36,25,0.6)", letterSpacing: "0.1em" }}>{m.origin}</span>
              <span style={{ color: "rgba(15,36,25,0.4)", fontSize: 10 }}>✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          NEW ARRIVALS — Product grid with hover overlay
      ══════════════════════════════ */}
      <section style={{ background: BG, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
            <div>
              <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>Fresh from the atelier</p>
              <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 600, color: CREAM, margin: 0, lineHeight: 1.05 }}>
                New <span style={{ fontStyle: "italic" }}>Arrivals</span>
              </h2>
            </div>
            <Link href="#" className={dmSans.className} style={{ fontSize: "0.85rem", color: MUTED, textDecoration: "none", borderBottom: `1px solid rgba(245,237,224,0.25)`, paddingBottom: 2, transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = "rgba(245,237,224,0.25)"; }}
            >View all pieces →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 18 }} className="mp-4col">
            {looks.map((item, i) => (
              <div key={item.label} className="mp-reveal" style={{ position: "relative", cursor: "pointer", transitionDelay: `${i * 70}ms` }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector(".mp-img") as HTMLElement; if (img) img.style.transform = "scale(1.05)"; const ov = e.currentTarget.querySelector(".mp-ov") as HTMLElement; if (ov) ov.style.opacity = "1"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector(".mp-img") as HTMLElement; if (img) img.style.transform = "scale(1)"; const ov = e.currentTarget.querySelector(".mp-ov") as HTMLElement; if (ov) ov.style.opacity = "0"; }}
              >
                <div style={{ aspectRatio: "3/4", overflow: "hidden", borderRadius: 12, background: BG3, position: "relative" }}>
                  <div className="mp-img" style={{ position: "absolute", inset: 0, transition: "transform 0.5s ease" }}>
                    <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="mp-ov" style={{ position: "absolute", inset: 0, background: "rgba(15,36,25,0.55)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s", zIndex: 2 }}>
                    <span className={dmSans.className} style={{ padding: "10px 24px", background: GOLD, color: "#0f2419", borderRadius: 3, fontWeight: 700, fontSize: "0.85rem" }}>Quick View</span>
                  </div>
                  <div style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: BG3, border: `1px solid rgba(201,169,110,0.3)`, borderRadius: 3, padding: "3px 10px" }}>
                    <span className={dmMono.className} style={{ fontSize: "0.6rem", color: GOLD, letterSpacing: "0.08em" }}>{item.tag}</span>
                  </div>
                </div>
                <div style={{ paddingTop: 16 }}>
                  <h3 className={cormorant.className} style={{ fontSize: "1.2rem", fontStyle: "italic", color: CREAM, margin: 0, marginBottom: 4 }}>{item.label}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className={cormorant.className} style={{ fontSize: "1.1rem", color: GOLD, fontWeight: 600 }}>{item.price}</span>
                    <Link href="#" className={dmMono.className} style={{ fontSize: "0.65rem", color: MUTED, textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                      onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                    >ADD TO CART</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          EDITORIAL — Two full-bleed story cards
      ══════════════════════════════ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>The journal</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 600, color: CREAM, margin: 0 }}>
              Editorial <span style={{ fontStyle: "italic", color: GOLD }}>Stories</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="mp-2col">
            {editorial.map((ed, i) => (
              <div key={ed.season} className="mp-reveal" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", cursor: "pointer", transitionDelay: `${i * 120}ms` }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector(".ed-img") as HTMLElement; if (img) img.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector(".ed-img") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <div className="ed-img" style={{ position: "absolute", inset: 0, transition: "transform 0.6s ease" }}>
                  <Image src={ed.img} alt={ed.headline} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,20,14,0.92) 0%, rgba(10,20,14,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 32, left: 32, right: 32, zIndex: 2 }}>
                  <p className={dmMono.className} style={{ fontSize: "0.65rem", color: GOLD, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{ed.season}</p>
                  <h3 className={cormorant.className} style={{ fontSize: "1.9rem", fontStyle: "italic", color: CREAM, margin: 0, marginBottom: 8, lineHeight: 1.1 }}>{ed.headline}</h3>
                  <p className={dmSans.className} style={{ fontSize: "0.85rem", color: MUTED, margin: 0, marginBottom: 16 }}>{ed.sub}</p>
                  <Link href="#" className={dmMono.className} style={{ fontSize: "0.68rem", color: GOLD, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: `1px solid rgba(201,169,110,0.4)`, paddingBottom: 2 }}>Read the story →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LOOKBOOK STRIP — horizontal masonry of photos
      ══════════════════════════════ */}
      <section style={{ background: BG, padding: "80px 0 0" }}>
        <div className="mp-reveal" style={{ textAlign: "center", padding: "0 24px 48px" }}>
          <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>Season 2025</p>
          <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 600, color: CREAM, margin: 0 }}>
            The <span style={{ fontStyle: "italic", color: GOLD }}>Lookbook</span>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 4, overflow: "hidden", height: 420 }}>
          {lookbookImages.map((img, i) => (
            <div key={i} style={{ flex: i === 2 ? 1.6 : 1, minWidth: 0, position: "relative", overflow: "hidden", transition: "flex 0.4s ease" }}
              onMouseEnter={e => (e.currentTarget.style.flex = "2")}
              onMouseLeave={e => (e.currentTarget.style.flex = i === 2 ? "1.6" : "1")}
            >
              <Image src={img} alt={`Lookbook ${i + 1}`} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,14,0.25)", transition: "background 0.3s" }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", padding: "32px 24px" }}>
          <Link href="#" style={{ display: "inline-block", padding: "12px 36px", background: "transparent", border: `1px solid rgba(201,169,110,0.35)`, color: CREAM, borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = "rgba(201,169,110,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.35)"; e.currentTarget.style.background = "transparent"; }}
          >Download Full Lookbook</Link>
        </div>
      </section>

      {/* ══════════════════════════════
          CRAFT — Materials & heritage
      ══════════════════════════════ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="mp-2col">
          <div className="mp-reveal">
            <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>The craft</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4vw,3.8rem)", fontWeight: 600, color: CREAM, margin: 0, marginBottom: 20, lineHeight: 1.1 }}>
              Sourced from the<br /><span style={{ fontStyle: "italic", color: GOLD }}>heart of India</span>
            </h2>
            <p className={dmSans.className} style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.85, marginBottom: 32 }}>
              Every fabric we use is sourced directly from master weavers across India. We work with artisan communities in Varanasi, Jaipur, and Kolkata who have practised their craft for generations. When you wear our garments, you carry centuries of heritage.
            </p>
            <Link href="#" style={{ display: "inline-block", padding: "12px 30px", background: "transparent", border: `1px solid rgba(201,169,110,0.35)`, color: CREAM, borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontSize: "0.875rem", textDecoration: "none" }}>
              Our Sustainability Pledge →
            </Link>
          </div>
          <div className="mp-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {materials.map((m) => (
              <div key={m.name} style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 6, transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ color: GOLD, fontSize: 12 }}>{m.icon}</span>
                <p className={cormorant.className} style={{ fontSize: "1.05rem", color: CREAM, margin: 0, fontStyle: "italic" }}>{m.name}</p>
                <p className={dmMono.className} style={{ fontSize: "0.62rem", color: MUTED, margin: 0, letterSpacing: "0.08em" }}>{m.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRESS — As seen in
      ══════════════════════════════ */}
      <section style={{ background: BG3, padding: "72px 24px", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p className="mp-reveal" style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, textAlign: "center", marginBottom: 40 }}>As featured in</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }} className="mp-3col">
            {press.map((p, i) => (
              <div key={p.outlet} className="mp-reveal" style={{ textAlign: "center", padding: "28px 24px", transitionDelay: `${i * 80}ms` }}>
                <p className={cormorant.className} style={{ fontSize: "1.6rem", fontWeight: 700, color: GOLD, fontStyle: "italic", margin: 0, marginBottom: 12 }}>{p.outlet}</p>
                <p className={dmSans.className} style={{ fontSize: "0.85rem", color: MUTED, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{p.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BESPOKE SERVICE — Full width dark CTA
      ══════════════════════════════ */}
      <section style={{ background: BG, padding: "120px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "rgba(201,169,110,0.05)", filter: "blur(100px)", top: -200, right: -200, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(201,169,110,0.04)", filter: "blur(80px)", bottom: -100, left: -100, pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }} className="mp-reveal">
          <p className={dmMono.className} style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: 18 }}>Exclusive offering</p>
          <h2 className={cormorant.className} style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 700, lineHeight: 0.92, margin: 0, marginBottom: 24 }}>
            <span style={{ display: "block", color: CREAM }}>Bespoke</span>
            <span style={{ display: "block", color: GOLD, fontStyle: "italic" }}>tailoring</span>
            <span style={{ display: "block", color: CREAM }}>for you</span>
          </h2>
          <p className={dmSans.className} style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.8, marginBottom: 44, fontWeight: 300 }}>
            Book a private consultation with our master tailor. We measure, we design, we craft — a garment made exclusively for your body, your occasion, your story.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#" style={{ padding: "15px 44px", background: GOLD, color: "#0f2419", borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontWeight: 700, fontSize: "1rem", textDecoration: "none", letterSpacing: "0.02em", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#dbbf7e"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,169,110,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >Book a Consultation</Link>
            <Link href="#" style={{ padding: "15px 44px", background: "transparent", border: `1px solid rgba(245,237,224,0.18)`, color: CREAM, borderRadius: 3, fontFamily: dmSans.style.fontFamily, fontSize: "1rem", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(245,237,224,0.18)")}
            >Learn More</Link>
          </div>
          <p className={dmMono.className} style={{ fontSize: "0.65rem", color: MUTED, marginTop: 24, letterSpacing: "0.1em" }}>By appointment only · Jaipur studio</p>
        </div>
      </section>

      <MPFooter />

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:.6;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(.5)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(201,169,110,0.28);border-radius:3px}
        @media(max-width:900px){
          .mp-hero-grid{grid-template-columns:1fr!important;padding:40px 24px!important;gap:40px!important;}
          .mp-4col{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
          .mp-3col{grid-template-columns:1fr!important;}
          .mp-2col{grid-template-columns:1fr!important;gap:40px!important;}
        }
        @media(max-width:520px){
          .mp-4col{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
