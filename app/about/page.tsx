"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });

const team = [
  { name: "Balaji Pathak", role: "Founder", init: "BP",desc: "Co-founder of NextWebIt, leading development and technical excellence.",  color: "#3B3DB8" },
  { name: "Nandish Taylor", role: "Founder", init: "NT",desc: "Co-founder of NextWebIt, driving innovation and client relationships." , color: "#7B2FFF" },
];

const values = [
  { icon: "🏪", title: "We Come To You", desc: "We visit your shop or office anywhere in Rajasthan. No zoom calls, no long emails — just a real conversation over chai." },
  { icon: "🤝", title: "Honest Pricing", desc: "No hidden fees. No surprise invoices. What we quote is what you pay. Always." },
  { icon: "⚡", title: "Fast Delivery", desc: "We know your time is money. Most websites are live within 5–7 working days of design approval." },
  { icon: "📞", title: "WhatsApp Support", desc: "After launch you have our WhatsApp number. Text us any time for updates, changes or questions." },
  { icon: "🌟", title: "Local Understanding", desc: "We are from Jaipur. We understand the local market, Indian business culture and what your customers actually look for." },
  { icon: "🔁", title: "Long Term Partners", desc: "We don't disappear after launch. We grow with you — updating your website as your business evolves." },
];

const milestones = [
  { year: "2022", title: "NextWebIt Founded", desc: "Started with one laptop and one belief — every local business deserves a professional online presence." },
  { year: "2023", title: "50 Websites Delivered", desc: "Crossed 50 clients in Jaipur and expanded to Jodhpur, Ajmer and Kota. First 5-star Google review." },
  { year: "2024", title: "Themes Platform Launched", desc: "Introduced 8 pre-designed themes so clients could choose their style before we start building." },
  { year: "2025", title: "120+ Clients & Growing", desc: "Today we serve 120+ businesses across Rajasthan with websites, Google presence and digital support." },
];

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll(".ab-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(32px)";
      (el as HTMLElement).style.transition = "opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const BG   = "#F8F9FF";
  const BG2  = "#EEF0FF";
  const IND  = "#3B3DB8";
  const DARK = "#1A1A2E";
  const MUT  = "#4A4A6A";
  const SOFT = "#8888AA";

  return (
    <div style={{ background: BG, fontFamily: inter.style.fontFamily }}>
      <Navbar />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg,#fff 0%,${BG} 50%,${BG2} 100%)`, padding: "140px 24px 96px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.09),transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BG2, border: "1px solid rgba(59,61,184,0.2)", borderRadius: 999, padding: "5px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: IND, display: "inline-block" }} />
            <span style={{ fontSize: "0.75rem", color: IND, fontWeight: 600, letterSpacing: "0.06em" }}>Based in Jaipur, Rajasthan</span>
          </div>
          <h1 className={playfair.className} style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 700, color: DARK, lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            We are NextWebIt.<br />
            <span style={{ fontStyle: "italic", color: IND }}>We come to you.</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUT, lineHeight: 1.85, maxWidth: 560, margin: "0 auto 40px" }}>
            A Jaipur-based web agency that visits local shops, understands their business, and builds websites that bring more customers. No technical jargon. Just real results.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/themes" style={{ padding: "13px 32px", background: IND, color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2B2D8A"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,61,184,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = IND; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >See Our Themes</Link>
            <Link href="/#contact" style={{ padding: "13px 32px", background: "transparent", border: "1px solid rgba(59,61,184,0.3)", color: DARK, borderRadius: 999, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = IND; e.currentTarget.style.color = IND; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,61,184,0.3)"; e.currentTarget.style.color = DARK; }}
            >Book a Free Visit</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS ROW
      ══════════════════════════════ */}
      <section style={{ background: IND, padding: "28px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, textAlign: "center" }} className="ab-4col">
          {[["120+","Websites Built"],["3","Years Active"],["4.9★","Google Rating"],["100%","Satisfaction"]]
            .map(([num, label]) => (
              <div key={label}>
                <div className={playfair.className} style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.65)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
        </div>
      </section>

      {/* ══════════════════════════════
          OUR STORY
      ══════════════════════════════ */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="ab-2col">
          <div className="ab-rv">
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 12 }}>Our story</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: "0 0 20px", lineHeight: 1.12 }}>
              Started with a simple<br />
              <span style={{ fontStyle: "italic", color: IND }}>observation</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: MUT, lineHeight: 1.85, marginBottom: 16 }}>
              In 2022, our founders Balaji Pathak and Nandish Taylor noticed something — hundreds of brilliant local businesses in Jaipur had no online presence. A jeweller with 30 years of heritage. A sweet shop with the best mithai in the city. A clinic trusted by thousands. All invisible on Google.
            </p>
            <p style={{ fontSize: "0.95rem", color: MUT, lineHeight: 1.85, marginBottom: 24 }}>
              So they started NextWebIt with one rule: <strong style={{ color: DARK }}>we go to them.</strong> No complicated forms, no cold emails. We walk into your shop, have a conversation, and build something that truly represents your business.
            </p>
            <div style={{ display: "flex", gap: 28 }}>
              {[["120+","Clients"],["5 Days","Avg. Delivery"],["₹4,999","Starting"]].map(([num, label]) => (
                <div key={label}>
                  <div className={playfair.className} style={{ fontSize: "1.8rem", fontWeight: 700, color: IND }}>{num}</div>
                  <div style={{ fontSize: "0.65rem", color: SOFT, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ab-rv" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div style={{ aspectRatio: "3/4", borderRadius: "80px 16px 16px 16px", overflow: "hidden", position: "relative", background: `linear-gradient(135deg,${BG2},#DDDEFF)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className={playfair.className} style={{ fontSize: "4rem", color: IND, opacity: 0.3, fontStyle: "italic" }}>NW</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 32 }}>
              <div style={{ aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", background: `linear-gradient(135deg,${IND},#6366F1)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "2rem" }}>🏪</span>
              </div>
              <div style={{ background: DARK, borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
                <div className={playfair.className} style={{ fontSize: "2rem", fontWeight: 700, color: "#FFD700", fontStyle: "italic" }}>2022</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VALUES
      ══════════════════════════════ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ab-rv" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>What we stand for</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              Our <span style={{ fontStyle: "italic", color: IND }}>values</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 18 }} className="ab-3col">
            {values.map((v, i) => (
              <div key={v.title} className="ab-rv" style={{ background: "#fff", border: "1px solid rgba(59,61,184,0.1)", borderRadius: 16, padding: "28px 24px", borderTop: `3px solid ${IND}`, transition: "all .3s", transitionDelay: `${i * 60}ms` }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(59,61,184,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{ fontSize: 26, display: "block", marginBottom: 14 }}>{v.icon}</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: DARK, margin: "0 0 8px" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: MUT, lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TEAM
      ══════════════════════════════ */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ab-rv" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>The people</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              Meet the <span style={{ fontStyle: "italic", color: IND }}>founders</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="ab-4col">
            {team.map((m, i) => (
              <div key={m.name} className="ab-rv" style={{ background: BG, border: "1px solid rgba(59,61,184,0.1)", borderRadius: 18, overflow: "hidden", transition: "all .3s", transitionDelay: `${i * 70}ms` }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(59,61,184,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 160, background: `linear-gradient(135deg,${m.color}22,${m.color}44)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>{m.init}</div>
                </div>
                <div style={{ padding: "20px 18px" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: DARK, margin: "0 0 3px" }}>{m.name}</h3>
                  <p style={{ fontSize: "0.7rem", color: m.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" }}>{m.role}</p>
                  <p style={{ fontSize: "0.82rem", color: MUT, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TIMELINE
      ══════════════════════════════ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="ab-rv" style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>Our journey</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              How we <span style={{ fontStyle: "italic", color: IND }}>got here</span>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: 36, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,${IND},rgba(59,61,184,0.1))` }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {milestones.map((m, i) => (
                <div key={m.year} className="ab-rv" style={{ display: "grid", gridTemplateColumns: "74px 1fr", gap: 24, padding: "32px 0", borderBottom: i < milestones.length - 1 ? "1px solid rgba(59,61,184,0.08)" : "none", transitionDelay: `${i * 80}ms` }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === milestones.length - 1 ? IND : "#fff", border: `2px solid ${IND}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative", zIndex: 1 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: i === milestones.length - 1 ? "#fff" : IND }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: IND, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{m.year}</div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: DARK, margin: "0 0 8px" }}>{m.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: MUT, lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg,${IND},#6366F1)`, padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, left: "30%", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }} className="ab-rv">
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: 18 }}>Ready to work together?</p>
          <h2 className={playfair.className} style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, color: "#fff", lineHeight: 0.95, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            We&apos;d love to visit<br />
            <span style={{ fontStyle: "italic" }}>your shop</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", marginBottom: 40, fontWeight: 300 }}>Book a free consultation — we come to you, no cost, no commitment.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ padding: "14px 40px", background: "#fff", color: IND, borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >Book Free Visit</Link>
            <Link href="/themes" style={{ padding: "14px 40px", background: "transparent", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", borderRadius: 999, fontSize: "0.95rem", textDecoration: "none", transition: "border-color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            >View Our Themes</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:rgba(59,61,184,0.3);border-radius:3px}
        @media(max-width:900px){
          .ab-2col{grid-template-columns:1fr!important;gap:40px!important;}
          .ab-3col{grid-template-columns:1fr 1fr!important;}
          .ab-4col{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:520px){
          .ab-3col{grid-template-columns:1fr!important;}
          .ab-4col{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>
    </div>
  );
}
