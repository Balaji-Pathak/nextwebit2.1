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

const collections = [
  { title: "Evening Wear", count: "24 pieces", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
  { title: "Contemporary", count: "18 pieces", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80" },
  { title: "Luxury Casuals", count: "31 pieces", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" },
];

const services = [
  { icon: "🏺", title: "Design & Build", desc: "Bespoke sites crafted around your brand, voice and goals — not a template.", tag: "From ₹4,999" },
  { icon: "🛒", title: "E-Commerce", desc: "Full online store with UPI, card and COD. Inventory, checkout, delivery.", tag: "From ₹9,999" },
  { icon: "📍", title: "Google Presence", desc: "Google My Business setup, Maps listing and local SEO.", tag: "From ₹1,499" },
  { icon: "🔧", title: "Maintenance", desc: "Monthly updates, WhatsApp support and hosting management.", tag: "₹499/mo" },
];

const steps = [
  { num: "01", title: "Discovery Visit", desc: "We come to your shop. We meet you, understand your business, your customers, and what makes you special." },
  { num: "02", title: "Design & Build", desc: "We present concepts in 48 hours. You approve, we build — live in 5–7 working days." },
  { num: "03", title: "Launch & Grow", desc: "Go live with full SEO setup and Google listing. We stay on as your growth partner on WhatsApp." },
];

const testimonials = [
  { name: "Priya Sharma", biz: "Priya Boutique, Jaipur", text: "Hamare boutique ka website ekdum professional bana. Customers ab online order karne lagte hain. Bahut accha kaam!", initials: "PS" },
  { name: "Meera Agarwal", biz: "Meera Collections, Jodhpur", text: "Maine socha tha website banana mushkil hoga. Par inki team ne sab sambhala. Design bhi beautiful hai.", initials: "MA" },
  { name: "Sunita Joshi", biz: "Sunita Sarees, Kota", text: "Photography aur website dono ek saath kar diya. Ab Instagram se bhi customers aate hain. Full paisa vasool!", initials: "SJ" },
  { name: "Kavita Mehta", biz: "Kavita Jewels, Udaipur", text: "Google pe hamare jewellery shop ka naam pehle aata hai ab. Calls bhi badh gayi hain. Shukriya NextWebIt!", initials: "KM" },
];

export default function ModernPremiumPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Custom cursor
  useEffect(() => {
    const ring = document.createElement("div");
    const dot = document.createElement("div");
    ring.style.cssText = `width:34px;height:34px;border:1.5px solid ${GOLD};border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width 0.2s,height 0.2s,background 0.2s;`;
    dot.style.cssText = `width:5px;height:5px;background:${GOLD};border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);`;
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    const move = (e: MouseEvent) => {
      ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px";
    };
    const grow = () => { ring.style.width = "54px"; ring.style.height = "54px"; ring.style.background = "rgba(201,169,110,0.1)"; };
    const shrink = () => { ring.style.width = "34px"; ring.style.height = "34px"; ring.style.background = "transparent"; };
    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach(el => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => { document.removeEventListener("mousemove", move); document.body.removeChild(ring); document.body.removeChild(dot); };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".mp-reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; } });
    }, { threshold: 0.1 });
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(40px)";
      (el as HTMLElement).style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const noiseStyle: React.CSSProperties = {
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998, opacity: 0.5,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
  };

  const textureBg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5ede0' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div ref={pageRef} style={{ background: BG, cursor: "none", overflowX: "hidden" }}>
      <div style={noiseStyle} />
      <MPNavbar />

      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", width: "100%", minHeight: "100vh", background: BG, backgroundImage: textureBg, display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 72 }}>
        {/* Decorative bracket left */}
        <div style={{ position: "absolute", left: 32, top: "50%", transform: "translateY(-50%)", opacity: 0.18, pointerEvents: "none" }}>
          <svg width="40" height="120" viewBox="0 0 40 120" fill="none"><path d="M32 8 Q8 8 8 32 L8 88 Q8 112 32 112" stroke={CREAM} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </div>
        {/* Decorative bracket right */}
        <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", opacity: 0.18, pointerEvents: "none" }}>
          <svg width="40" height="120" viewBox="0 0 40 120" fill="none"><path d="M8 8 Q32 8 32 32 L32 88 Q32 112 8 112" stroke={CREAM} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 64px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="mp-hero-grid">

          {/* Left */}
          <div>
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>Premium Collection 2025</p>
            <h1 className={cormorant.className} style={{ fontSize: "clamp(3.5rem,8vw,7.5rem)", fontWeight: 600, lineHeight: 0.92, letterSpacing: "-0.02em", margin: 0, marginBottom: 28 }}>
              <span style={{ display: "block", color: CREAM, fontStyle: "italic" }}>Unique</span>
              <span style={{ display: "block", color: CREAM }}>fashion</span>
              <span style={{ display: "block", color: GOLD, fontStyle: "italic" }}>design</span>
            </h1>
            <p className={dmSans.className} style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, maxWidth: 360, marginBottom: 36 }}>
              We craft bespoke digital experiences for premium fashion brands and boutiques that demand the extraordinary.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
              <Link href="#" style={{ padding: "12px 32px", background: BG3, border: `1px solid rgba(201,169,110,0.4)`, color: CREAM, borderRadius: 4, fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.15)"; e.currentTarget.style.borderColor = GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.background = BG3; e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)"; }}
              >Shop now!</Link>
              <Link href="#" style={{ padding: "12px 32px", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 4, fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(201,169,110,0.3)`; e.currentTarget.style.color = CREAM; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED; }}
              >Our Work →</Link>
            </div>
            {/* Sparkles */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill={GOLD}><path d="M8 0l1.5 6.5L16 8l-6.5 1.5L8 16l-1.5-6.5L0 8l6.5-1.5z"/></svg>
              <svg width="10" height="10" viewBox="0 0 16 16" fill={GOLD} style={{ opacity: 0.6 }}><path d="M8 0l1.5 6.5L16 8l-6.5 1.5L8 16l-1.5-6.5L0 8l6.5-1.5z"/></svg>
              <span className={dmMono.className} style={{ fontSize: "0.7rem", color: "rgba(201,169,110,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Curated for the extraordinary</span>
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Shadow block behind */}
            <div style={{ position: "absolute", top: 16, left: 16, right: -16, bottom: -16, background: BG2, borderRadius: "16px 16px 60px 16px", zIndex: 0 }} />
            {/* Image */}
            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 380, aspectRatio: "3/4", borderRadius: "16px 16px 60px 16px", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                alt="Premium fashion"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
            {/* Curved text label */}
            <div style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%) rotate(90deg)", zIndex: 2 }}>
              <p className={dmMono.className} style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Our best designers working for the best designs
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <p className={dmMono.className} style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED }}>Scroll</p>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${GOLD})`, animation: "scrollPulse 2s ease infinite" }} />
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{ background: GOLD, padding: "20px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, textAlign: "center" }} className="mp-stats-grid">
          {[["120+","Websites Delivered"],["5 Days","Avg. Delivery"],["4.9 ★","Google Rating"],["₹4,999","Starting Price"]].map(([num, label]) => (
            <div key={label}>
              <div className={cormorant.className} style={{ fontSize: 26, fontWeight: 700, color: "#0f2419" }}>{num}</div>
              <div className={dmMono.className} style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(15,36,25,0.7)", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COLLECTIONS ═══ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ marginBottom: 56 }}>
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>Curated for you</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 600, fontStyle: "italic", color: CREAM, margin: 0, lineHeight: 1.1 }}>Our Collections</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }} className="mp-3col">
            {collections.map((c, i) => (
              <div key={c.title} className="mp-reveal mp-card" style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden", transition: "all 0.3s", transitionDelay: `${i * 80}ms` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
                  <Image src={c.img} alt={c.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 className={cormorant.className} style={{ fontSize: "1.3rem", fontStyle: "italic", color: CREAM, margin: 0, marginBottom: 4 }}>{c.title}</h3>
                    <p className={dmMono.className} style={{ fontSize: "0.7rem", color: GOLD, letterSpacing: "0.08em" }}>{c.count}</p>
                  </div>
                  <Link href="#" style={{ fontSize: "0.875rem", color: MUTED, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                    onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                  >Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section style={{ background: BG, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>What we build</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 600, color: CREAM, margin: 0, lineHeight: 1.1 }}>
              Full-stack presence,<br />
              <span style={{ fontStyle: "italic", color: GOLD }}>zero complexity</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 16 }} className="mp-4col">
            {services.map((s, i) => (
              <div key={s.title} className="mp-reveal mp-card" style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "32px 28px", transition: "all 0.3s", transitionDelay: `${i * 80}ms` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: 24, display: "block", marginBottom: 16 }}>{s.icon}</span>
                <h3 className={cormorant.className} style={{ fontSize: "1.4rem", color: CREAM, margin: 0, marginBottom: 10, fontWeight: 600 }}>{s.title}</h3>
                <p className={dmSans.className} style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <span className={dmMono.className} style={{ display: "inline-block", padding: "4px 14px", border: `1px solid rgba(201,169,110,0.3)`, borderRadius: 999, fontSize: "0.7rem", color: GOLD, letterSpacing: "0.08em" }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT STRIP ═══ */}
      <section style={{ background: BG3, padding: "80px 24px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="mp-2col">
          <div className="mp-reveal">
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>Who we are</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 600, color: CREAM, margin: 0, marginBottom: 20, lineHeight: 1.15 }}>
              We visit your shop.<br />
              <span style={{ fontStyle: "italic", color: GOLD }}>We build your dream.</span>
            </h2>
            <p className={dmSans.className} style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              NextWebIt is a Jaipur-based web agency that specialises in premium websites for local businesses. We don&apos;t send emails — we come to your shop, understand your brand, and build something extraordinary.
            </p>
            <Link href="#" style={{ display: "inline-block", padding: "12px 32px", background: "transparent", border: `1px solid rgba(201,169,110,0.4)`, color: CREAM, borderRadius: 4, fontFamily: dmSans.style.fontFamily, fontSize: "0.9rem", textDecoration: "none" }}>
              Learn More →
            </Link>
          </div>
          <div className="mp-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[["120+","Websites Built"],["5★","Average Rating"],["5 Days","Delivery Time"],["3 Years","In Business"]].map(([num, label]) => (
              <div key={label} style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                <div className={cormorant.className} style={{ fontSize: "2.2rem", fontWeight: 700, color: GOLD, fontStyle: "italic" }}>{num}</div>
                <div className={dmMono.className} style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>How it works</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 600, color: CREAM, margin: 0 }}>
              Three steps to <span style={{ fontStyle: "italic", color: GOLD }}>live</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div key={step.num} className="mp-reveal" style={{ display: "grid", gridTemplateColumns: "80px 1px 1fr", gap: "0 32px", padding: "40px 0", transitionDelay: `${i * 150}ms` }}>
                <div className={cormorant.className} style={{ fontSize: "3.5rem", fontWeight: 700, textAlign: "right", lineHeight: 1, background: `linear-gradient(135deg, ${GOLD}, transparent)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{step.num}</div>
                <div style={{ width: 1, background: `linear-gradient(to bottom, ${GOLD}, transparent)`, margin: "0 auto", height: "100%" }} />
                <div style={{ paddingLeft: 20 }}>
                  <h3 className={cormorant.className} style={{ fontSize: "1.8rem", fontWeight: 700, color: CREAM, margin: 0, marginBottom: 10 }}>{step.title}</h3>
                  <p className={dmSans.className} style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ background: BG, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mp-reveal" style={{ textAlign: "center", marginBottom: 56 }}>
            <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD, marginBottom: 12 }}>Client reviews</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)", fontWeight: 600, color: CREAM, margin: 0, fontStyle: "italic" }}>What our clients say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 16 }} className="mp-2col">
            {testimonials.map((t, i) => (
              <div key={t.name} className="mp-reveal" style={{ background: BG2, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, borderLeft: `3px solid ${GOLD}`, transitionDelay: `${i * 80}ms` }}>
                <div style={{ color: GOLD, fontSize: 13, marginBottom: 10 }}>★★★★★</div>
                <p className={dmSans.className} style={{ fontSize: "0.875rem", color: MUTED, lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: `rgba(201,169,110,0.15)`, border: `1px solid rgba(201,169,110,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 13, fontFamily: dmMono.style.fontFamily }}>{t.initials}</div>
                  <div>
                    <p className={cormorant.className} style={{ fontSize: "1rem", fontWeight: 600, color: CREAM, margin: 0 }}>{t.name}</p>
                    <p className={dmMono.className} style={{ fontSize: "0.7rem", color: MUTED, margin: 0, marginTop: 2 }}>{t.biz}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section style={{ background: BG2, padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(201,169,110,0.06)", filter: "blur(80px)", top: -100, left: -200, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(201,169,110,0.04)", filter: "blur(80px)", bottom: -80, right: -100, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }} className="mp-reveal">
          <p className={dmMono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: 20 }}>Ready to begin?</p>
          <h2 className={cormorant.className} style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 700, lineHeight: 0.95, margin: 0, marginBottom: 20 }}>
            <span style={{ display: "block", color: CREAM }}>Ready to stand out</span>
            <span style={{ display: "block", color: GOLD, fontStyle: "italic" }}>in your city?</span>
          </h2>
          <p className={dmSans.className} style={{ fontSize: "1.05rem", color: MUTED, marginBottom: 44, fontWeight: 300 }}>No templates. No agency bloat. Just you, your story, and the web.</p>
          <Link href="#" style={{ display: "inline-block", padding: "16px 48px", background: GOLD, color: "#0f2419", borderRadius: 4, fontFamily: dmSans.style.fontFamily, fontWeight: 700, fontSize: "1.05rem", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e2c07a"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,169,110,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Book Your Free Discovery Call</Link>
        </div>
      </section>

      <MPFooter />

      <style>{`
        @keyframes scrollPulse { 0%,100%{transform:scaleY(1);opacity:.7} 50%{transform:scaleY(.5);opacity:1} }
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(201,169,110,0.3);border-radius:3px}
        @media(max-width:768px){
          .mp-hero-grid{grid-template-columns:1fr!important;padding:40px 24px!important;}
          .mp-3col{grid-template-columns:1fr!important;}
          .mp-4col{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
          .mp-2col{grid-template-columns:1fr!important;}
          .mp-stats-grid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:480px){
          .mp-4col{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
