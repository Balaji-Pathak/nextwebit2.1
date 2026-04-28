"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import GANavbar from "./GANavbar";
import GAFooter from "./GAFooter";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

const BG = "#0D0B1E";
const BG2 = "#100E24";
const BG3 = "#13112A";
const ACC = "#FF4500";
const PINK = "#E91E8C";
const PUR = "#7B2FFF";
const W = "#ffffff";
const MUT = "rgba(255,255,255,0.55)";

const services = [
  { icon: "◈", title: "Abstract Branding", desc: "Visual identities that are impossible to ignore - logos, colours, motion.", tag: "Identity" },
  { icon: "⬡", title: "Web Experiences", desc: "Websites that move and react. Interactive digital experiences that convert.", tag: "Digital" },
  { icon: "◭", title: "Motion Design", desc: "From hero animations to full brand motion systems - we make content alive.", tag: "Motion" },
  { icon: "⬟", title: "UI/UX Strategy", desc: "User-first design thinking - journeys, wireframes and interfaces people love.", tag: "Design" },
  { icon: "◉", title: "Creative Direction", desc: "We direct visual storytelling across digital and print for big campaigns.", tag: "Direction" },
  { icon: "⬢", title: "3D & Generative", desc: "Procedural art and 3D renders that make your brand feel from the future.", tag: "Emerging" },
];

const works = [
  { title: "Flux Studio", cat: "Brand Identity", grad: `linear-gradient(135deg,${ACC},${PINK})` },
  { title: "Neon Pulse", cat: "Web Experience", grad: `linear-gradient(135deg,${PUR},${PINK})` },
  { title: "Orbit Systems", cat: "Motion Design", grad: `linear-gradient(135deg,${ACC},${PUR})` },
  { title: "Vortex Labs", cat: "UI/UX Strategy", grad: `linear-gradient(135deg,${PINK},${ACC})` },
  { title: "Prism Co", cat: "3D & Generative", grad: `linear-gradient(135deg,${PUR},${ACC})` },
  { title: "Echo Collective", cat: "Creative Direction", grad: `linear-gradient(135deg,${PINK},${PUR})` },
];

const stats = [["240+", "Projects"], ["18", "Awards"], ["98%", "Satisfaction"], ["6", "Years"]];
const process = [
  { n: "01", t: "Brief & Discovery", d: "We deep-dive into your brand, audience and goals. No templates - every project starts from scratch." },
  { n: "02", t: "Concept Development", d: "We generate 3 radically different directions. You pick the energy you want - we push it further." },
  { n: "03", t: "Build & Animate", d: "Design, code, motion - all in-house. You get weekly previews and real-time feedback loops." },
  { n: "04", t: "Launch & Evolve", d: "We don't disappear after launch. We monitor, iterate and keep your brand ahead of the curve." },
];
const testi = [
  { name: "Aryan Kapoor", role: "Founder, Flux Studio", text: "They took our boring SaaS and turned it into something people screenshot. The motion work tripled our demo requests.", i: "AK" },
  { name: "Zara Mehta", role: "CMO, Neon Pulse", text: "Working with geoabstract felt like working with the future. Every deliverable was beyond what we imagined.", i: "ZM" },
  { name: "Rahul Dev", role: "CTO, Orbit Systems", text: "The website they built converted 4× better than our old one in the first week. The animations are unreal.", i: "RD" },
];
const faqs = [
  { q: "What makes Geo Abstract different?", a: "We don't do generic. Every project is a bespoke creative exploration combining generative art, motion and strategy." },
  { q: "How long does a typical project take?", a: "Brand identities: 2–3 weeks. Full web experiences: 4–6 weeks. Motion systems are custom scoped." },
  { q: "Do you work with early-stage startups?", a: "Absolutely. Some of our best work has been with startups who trusted us to define their visual language from day one." },
  { q: "Can I see your process before committing?", a: "Yes - book a free 30-min discovery call. We walk you through methodology and case studies before any commitment." },
  { q: "What is your pricing like?", a: "Projects start at ₹15,000 for brand marks. We offer milestone-based billing so you are always in control." },
];

const partners = ["Flux Studio", "Neon Pulse", "Orbit Systems", "Vortex Labs", "Prism Co", "Echo Collective"];

/* ─── HeroWave Component (inside page.tsx) ───────────────── */
function HeroWave() {
  const lines: React.ReactNode[] = [];
  const count = 22;
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const yMid = 180 + t * 120;
    const yStart = 60 + t * 260;
    const yEnd = 80 + t * 220;
    const cp1x = 280; const cp1y = yMid - 60 + t * 20;
    const cp2x = 420; const cp2y = yMid + 40 - t * 20;
    const r = Math.round(255 * (1 - t * 0.3));
    const g = Math.round(0 + t * 30);
    const b = Math.round(80 + t * 170);
    const opacity = 0.55 + (1 - Math.abs(t - 0.5) * 2) * 0.35;
    lines.push(
      <path key={i}
        d={`M0,${yStart} C${cp1x},${cp1y} ${cp2x},${cp2y} 700,${yEnd}`}
        stroke={`rgb(${r},${g},${b})`}
        strokeWidth={0.9}
        fill="none"
        opacity={opacity}
      />
    );
  }
  return (
    <svg viewBox="0 0 700 420" preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      {lines}
    </svg>
  );
}

export default function GeoAbstractPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hovWork, setHovWork] = useState<number | null>(null);

  /* Neon laser-trail cursor */
  useEffect(() => {
    const mk = (sz: number, col: string, del: number) => {
      const d = document.createElement("div");
      d.style.cssText = `width:${sz}px;height:${sz}px;border-radius:50%;background:${col};position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:left ${del}s linear,top ${del}s linear,transform .2s;`;
      document.body.appendChild(d); return d;
    };
    const dot = mk(8, ACC, 0.04);
    const t1 = mk(14, "rgba(233,30,140,0.55)", 0.12);
    const t2 = mk(22, "rgba(123,47,255,0.28)", 0.22);
    dot.style.boxShadow = `0 0 10px ${ACC},0 0 20px ${ACC}`;
    t1.style.boxShadow = `0 0 8px ${PINK}`;
    t2.style.boxShadow = `0 0 12px ${PUR}`;

    const move = (e: MouseEvent) => {
      [dot, t1, t2].forEach(el => { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; });
    };
    const grow = () => { dot.style.transform = "translate(-50%,-50%) scale(2.5)"; };
    const shrink = () => { dot.style.transform = "translate(-50%,-50%) scale(1)"; };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      [dot, t1, t2].forEach(el => { if (document.body.contains(el)) document.body.removeChild(el); });
    };
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".ga-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0) scale(1)";
        }
      });
    }, { threshold: 0.07 });

    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(40px) scale(0.98)";
      (el as HTMLElement).style.transition = "opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const noise: React.CSSProperties = {
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998, opacity: 0.35,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
  };

  const gradTxt = (g: string): React.CSSProperties => ({
    background: g, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
  });

  return (
    <div style={{ background: BG, cursor: "none", overflowX: "hidden", fontFamily: inter.style.fontFamily }}>
      <div style={noise} />
      <GANavbar />

      {/* HERO SECTION */}
      <section style={{
        position: "relative", minHeight: "100vh",
        background: `radial-gradient(ellipse 70% 60% at 65% 55%,rgba(123,47,255,0.28) 0%,transparent 65%),
                    radial-gradient(ellipse 45% 55% at 15% 75%,rgba(255,69,0,0.14) 0%,transparent 60%),
                    ${BG}`,
        display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 68,
      }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "62%", pointerEvents: "none" }}>
          <HeroWave />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "96px 64px", width: "100%" }} className="ga-hero-pad">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,69,0,0.35)`, borderRadius: 999, padding: "5px 16px 5px 10px", marginBottom: 36 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACC, display: "inline-block", boxShadow: `0 0 8px ${ACC}` }} />
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.06em" }}>Creative Studio · Jaipur, India</span>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: "clamp(5rem,12vw,11rem)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", color: W, display: "block" }}>
              Abstract
            </div>
            <div style={{ fontSize: "clamp(5rem,12vw,11rem)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", display: "block", ...gradTxt(`linear-gradient(90deg,${ACC} 0%,${PINK} 60%)`) }}>
              landing page
            </div>
          </div>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: MUT, marginBottom: 20 }}>BACKGROUND</p>
          <p style={{ fontSize: "1.05rem", color: MUT, lineHeight: 1.8, maxWidth: 440, marginBottom: 44 }}>
            We build digital experiences that push creative boundaries. Abstract design, motion engineering and visual identities that put your brand in a league of its own.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 52 }}>
            <Link href="#" style={{ padding: "14px 36px", border: "1px solid rgba(255,255,255,0.35)", color: W, borderRadius: 999, fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = W; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
            >Join Us</Link>
            <Link href="#" style={{ padding: "14px 36px", background: `linear-gradient(135deg,${ACC},${PINK})`, color: W, borderRadius: 999, fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 30px rgba(255,69,0,0.4)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >View Work →</Link>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {[true, false, false, false, false].map((a, i) => (
              <div key={i} style={{ width: a ? 28 : 8, height: 8, borderRadius: 999, background: a ? ACC : "rgba(255,255,255,0.18)", transition: "all .3s" }} />
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 3 }}>
          <div style={{ width: 1, height: 52, background: `linear-gradient(to bottom,transparent,${ACC})`, animation: "scrollPulse 2s ease infinite" }} />
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: MUT }}>Scroll</p>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section style={{ background: BG2, borderTop: `1px solid rgba(255,69,0,0.12)`, borderBottom: `1px solid rgba(255,69,0,0.12)`, padding: "15px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 52, animation: "marquee 24s linear infinite", width: "max-content" }}>
          {Array.from({ length: 2 }).flatMap((_, pass) =>
            ["Abstract Design", "Motion Graphics", "Brand Identity", "Web Experiences", "Creative Tech", "Generative Art", "UI/UX Strategy", "Digital Presence"]
              .map((t, i) => (
                <div key={`marquee-${pass}-${i}-${t}`} style={{ display: "flex", alignItems: "center", gap: 20, whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", ...gradTxt(`linear-gradient(90deg,${ACC},${PINK})`) }}>{t}</span>
                  <span style={{ color: PUR, fontSize: 10, opacity: 0.8 }}>◆</span>
                </div>
              ))
          )}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ background: BG, padding: "120px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="ga-rv" style={{ textAlign: "center", marginBottom: 68 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 12, fontWeight: 600 }}>What we do</p>
            <h2 style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 900, margin: 0, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              <span style={{ color: W }}>Services built for</span><br />
              <span style={{ ...gradTxt(`linear-gradient(90deg,${ACC},${PINK},${PUR})`) }}>the extraordinary</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }} className="ga-3col">
            {services.map((s, i) => (
              <div key={s.title} className="ga-rv" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "36px 28px", transition: "all .3s", transitionDelay: `${i * 60}ms`, position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,69,0,0.4)"; e.currentTarget.style.background = "rgba(255,69,0,0.04)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,rgba(255,69,0,0.07),transparent)`, pointerEvents: "none" }} />
                <span style={{ fontSize: 30, display: "block", marginBottom: 18, ...gradTxt(`linear-gradient(135deg,${ACC},${PINK})`) }}>{s.icon}</span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: W, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.75, marginBottom: 18 }}>{s.desc}</p>
                <span style={{ display: "inline-block", padding: "4px 14px", border: `1px solid rgba(255,69,0,0.3)`, borderRadius: 999, fontSize: "0.65rem", letterSpacing: "0.1em", color: ACC, fontWeight: 600 }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK GRID SECTION */}
      <section style={{ background: BG2, padding: "120px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="ga-rv" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 10, fontWeight: 600 }}>Selected Work</p>
              <h2 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 900, color: W, margin: 0, letterSpacing: "-0.04em" }}>
                Our <span style={{ ...gradTxt(`linear-gradient(90deg,${PINK},${PUR})`) }}>creations</span>
              </h2>
            </div>
            <Link href="#" style={{ fontSize: "0.85rem", color: MUT, textDecoration: "none", borderBottom: `1px solid rgba(255,255,255,0.2)`, paddingBottom: 2, transition: "color .2s,border-color .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = ACC; e.currentTarget.style.borderColor = ACC; }}
              onMouseLeave={e => { e.currentTarget.style.color = MUT; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            >View all →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 16 }} className="ga-3col">
            {works.map((w, i) => {
              const tall = i === 0 || i === 3;
              const hov = hovWork === i;
              return (
                <div key={w.title} className="ga-rv"
                  style={{ borderRadius: 18, overflow: "hidden", aspectRatio: tall ? "2/3" : "3/4", position: "relative", cursor: "pointer", transitionDelay: `${i * 60}ms` }}
                  onMouseEnter={() => setHovWork(i)}
                  onMouseLeave={() => setHovWork(null)}
                >
                  <div style={{ position: "absolute", inset: 0, background: w.grad, transition: "transform .5s ease", transform: hov ? "scale(1.04)" : "scale(1)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.12, pointerEvents: "none" }}>
                    <svg viewBox="0 0 200 200" width="70%" height="70%">
                      <polygon points="100,10 190,70 160,175 40,175 10,70" fill="none" stroke="white" strokeWidth="1.5" />
                      <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1" />
                      <line x1="10" y1="70" x2="190" y2="70" stroke="white" strokeWidth="0.7" />
                    </svg>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "32px 22px 20px",
                    background: "linear-gradient(to top,rgba(13,11,30,0.85),transparent)",
                    transition: "opacity .3s",
                    opacity: hov ? 0 : 1,
                    pointerEvents: "none",
                  }}>
                    <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", margin: "0 0 5px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{w.cat}</p>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: W, margin: 0 }}>{w.title}</h3>
                  </div>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(13,11,30,0.72)",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8,
                    backdropFilter: "blur(4px)",
                    transition: "opacity .3s",
                    opacity: hov ? 1 : 0,
                    pointerEvents: "none",
                  }}>
                    <p style={{ fontSize: "0.65rem", color: ACC, textTransform: "uppercase", letterSpacing: "0.14em", margin: 0, fontWeight: 600 }}>{w.cat}</p>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: W, margin: 0, letterSpacing: "-0.02em", textAlign: "center", padding: "0 16px" }}>{w.title}</h3>
                    <div style={{ marginTop: 8, padding: "8px 22px", border: `1px solid ${ACC}`, borderRadius: 999, fontSize: "0.75rem", color: ACC, fontWeight: 600, letterSpacing: "0.08em" }}>View Project</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ background: `linear-gradient(135deg,rgba(123,47,255,0.18) 0%,rgba(255,69,0,0.1) 100%),${BG}`, padding: "88px 24px", borderTop: `1px solid rgba(123,47,255,0.18)`, borderBottom: `1px solid rgba(123,47,255,0.18)` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, textAlign: "center" }} className="ga-4col">
          {stats.map(([num, label], i) => (
            <div key={label} className="ga-rv" style={{ transitionDelay: `${i * 80}ms` }}>
              <div style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1, marginBottom: 8, letterSpacing: "-0.04em", ...gradTxt(`linear-gradient(135deg,${ACC},${PINK})`) }}>{num}</div>
              <div style={{ fontSize: "0.82rem", color: MUT, letterSpacing: "0.1em", fontWeight: 500, textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ background: BG, padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ga-rv" style={{ textAlign: "center", marginBottom: 68 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 12, fontWeight: 600 }}>How we work</p>
            <h2 style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 900, color: W, margin: 0, letterSpacing: "-0.04em" }}>
              From idea to <span style={{ ...gradTxt(`linear-gradient(90deg,${PINK},${PUR})`) }}>icon</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 20 }} className="ga-2col">
            {process.map((p, i) => (
              <div key={p.n} className="ga-rv" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "36px 32px", transitionDelay: `${i * 80}ms`, position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,69,0,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "absolute", top: 20, right: 20, opacity: 0.12 }}>
                  <svg width="48" height="48" viewBox="0 0 48 48"><polygon points="24,2 46,14 46,34 24,46 2,34 2,14" fill="none" stroke={ACC} strokeWidth="1.5" /></svg>
                </div>
                <div style={{ fontSize: "4.5rem", fontWeight: 900, lineHeight: 1, marginBottom: 18, letterSpacing: "-0.05em", ...gradTxt(`linear-gradient(135deg,rgba(255,69,0,0.3),rgba(233,30,140,0.15))`) }}>{p.n}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: W, margin: "0 0 10px", letterSpacing: "-0.02em" }}>{p.t}</h3>
                <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8, margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section style={{ background: BG2, padding: "80px 24px", borderTop: `1px solid rgba(255,69,0,0.1)`, borderBottom: `1px solid rgba(255,69,0,0.1)` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div className="ga-rv" style={{ marginBottom: 48 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 12, fontWeight: 600 }}>Trusted by</p>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 700, color: W, margin: 0, letterSpacing: "-0.02em" }}>
              Brands that <span style={{ ...gradTxt(`linear-gradient(90deg,${ACC},${PINK})`) }}>move forward</span>
            </h2>
          </div>
          <div className="ga-rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px 56px", opacity: 0.7 }}>
            {partners.map((partner) => (
              <div key={partner} style={{ fontSize: "1rem", fontWeight: 500, color: MUT, letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = ACC; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.style.color = MUT; e.currentTarget.style.opacity = "0.7"; }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={{ background: BG3, padding: "120px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="ga-rv" style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 12, fontWeight: 600 }}>Client voices</p>
            <h2 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 900, color: W, margin: 0, letterSpacing: "-0.04em" }}>
              What they <span style={{ ...gradTxt(`linear-gradient(90deg,${ACC},${PINK})`) }}>say</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }} className="ga-3col">
            {testi.map((t, i) => (
              <div key={t.name} className="ga-rv" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: 32, borderLeft: `3px solid ${ACC}`, transitionDelay: `${i * 80}ms`, transition: "transform .3s,border-color .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: 14, ...gradTxt(`linear-gradient(135deg,rgba(255,69,0,0.4),transparent)`) }}>&ldquo;</div>
                <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8, marginBottom: 22, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: `linear-gradient(135deg,${ACC},${PINK})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: W, flexShrink: 0 }}>{t.i}</div>
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600, color: W, margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: "0.72rem", color: MUT, margin: "2px 0 0" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: BG, padding: "120px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="ga-rv" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: ACC, marginBottom: 12, fontWeight: 600 }}>Got questions?</p>
            <h2 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 900, color: W, margin: 0, letterSpacing: "-0.04em" }}>
              Frequently <span style={{ ...gradTxt(`linear-gradient(90deg,${ACC},${PINK})`) }}>asked</span>
            </h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="ga-rv" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", transitionDelay: `${i * 50}ms` }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 20, fontFamily: inter.style.fontFamily }}
              >
                <span style={{ fontSize: "1.05rem", fontWeight: 600, color: W, textAlign: "left", letterSpacing: "-0.01em" }}>{f.q}</span>
                <span style={{ fontSize: "1.5rem", color: ACC, flexShrink: 0, transition: "transform .3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>+</span>
              </button>
              <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8, paddingBottom: 22, margin: 0 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: `linear-gradient(135deg,#18053A 0%,#2d0820 50%,#18053A 100%)`, padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {[[`rgba(255,69,0,0.14)`, "-15% 50%"], [`rgba(123,47,255,0.18)`, "80% 30%"], [`rgba(233,30,140,0.1)`, "40% 80%"]].map(([col, pos], i) => (
          <div key={i} style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${col},transparent)`, filter: "blur(70px)", top: pos.split(" ")[1], left: pos.split(" ")[0], transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        ))}
        <div style={{ position: "absolute", inset: 0, opacity: 0.055, pointerEvents: "none" }}>
          <svg viewBox="0 0 1000 400" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 10 }).map((_, i) => (
              <path key={i} d={`M${i * 110},0 C${i * 110 + 55},200 ${i * 110 + 110},100 ${i * 110 + 220},400`} stroke="white" strokeWidth="0.8" fill="none" />
            ))}
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2 }} className="ga-rv">
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: ACC, marginBottom: 22, fontWeight: 600 }}>Ready to begin?</p>
          <h2 style={{ fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 20px", letterSpacing: "-0.05em" }}>
            <span style={{ display: "block", color: W }}>Let&apos;s create</span>
            <span style={{ display: "block", ...gradTxt(`linear-gradient(90deg,${ACC},${PINK},${PUR})`) }}>something wild</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: MUT, marginBottom: 50, fontWeight: 300 }}>No templates. No limits. Pure creative execution.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#" style={{ padding: "16px 48px", background: `linear-gradient(135deg,${ACC},${PINK})`, color: W, borderRadius: 999, fontWeight: 700, fontSize: "1rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(255,69,0,0.4)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >Start a Project</Link>
            <Link href="#" style={{ padding: "16px 48px", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", color: W, borderRadius: 999, fontSize: "1rem", textDecoration: "none", transition: "border-color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = ACC)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)")}
            >See Case Studies</Link>
          </div>
          <p style={{ fontSize: "0.72rem", color: MUT, marginTop: 28, letterSpacing: "0.1em" }}>+91 73573 67085 · hello@nexwebit.in</p>
        </div>
      </section>

      <GAFooter />

      <style>{`
        @keyframes scrollPulse{0%,100%{opacity:.5;transform:scaleY(1)}50%{opacity:1;transform:scaleY(.55)}}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${BG}}
        ::-webkit-scrollbar-thumb{background:rgba(255,69,0,0.35);border-radius:3px}
        @media(max-width:960px){
          .ga-hero-pad{padding:56px 28px!important;}
          .ga-3col{grid-template-columns:1fr 1fr!important;}
          .ga-4col{grid-template-columns:repeat(2,1fr)!important;}
          .ga-2col{grid-template-columns:1fr!important;}
        }
        @media(max-width:560px){
          .ga-3col{grid-template-columns:1fr!important;}
        }
        @media(max-width:768px){
          .ga-links{display:none!important;}
          .ga-burger{display:flex!important;}
        }
      `}</style>
    </div>
  );
}
