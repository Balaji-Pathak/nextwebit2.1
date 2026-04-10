"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });

const steps = [
  { num: "01", icon: "💬", title: "Tell Us Your Vision", desc: "Share your business type, target audience, brand personality and any inspirations you already love. No technical knowledge needed — just describe your dream." },
  { num: "02", icon: "🎨", title: "Choose Your Style", desc: "We present you 3 mood boards with different colour palettes, font pairings and layout directions. You pick what resonates with you most." },
  { num: "03", icon: "✏️", title: "We Design For You", desc: "Our team builds a full design prototype based on your choices. You review it, give feedback and we refine until every pixel feels right." },
  { num: "04", icon: "🚀", title: "We Build & Launch", desc: "Once the design is approved, we develop the full website and launch it live within 5–7 working days." },
];

const options = [
  { icon: "🌈", title: "Any Colour Palette", desc: "Your brand colours, your logo colours, or we pick the perfect palette based on your industry and mood." },
  { icon: "✍️", title: "Any Font Style", desc: "Classic serif, modern sans-serif, playful rounded, elegant script — we match the typography to your brand voice." },
  { icon: "📐", title: "Any Layout", desc: "Minimal clean, visually heavy, full-width, grid-based — whatever layout works best for your content." },
  { icon: "✨", title: "Any Animation", desc: "Subtle hover effects, scroll reveals, bold entrance animations — we calibrate the motion to your personality." },
  { icon: "📱", title: "Fully Responsive", desc: "Your custom design looks perfect on mobile, tablet and desktop — always." },
  { icon: "🔒", title: "Yours Forever", desc: "Your theme is built exclusively for you. No templates. No recycling. It belongs only to your business." },
];

const faqs = [
  { q: "How is a custom theme different from your other themes?", a: "Our other themes (Vintage Luxury, Modern Premium, etc.) are pre-designed styles you pick from. A custom theme is built from scratch around your specific brand — your colours, fonts, layout and personality. Nothing is borrowed from another design." },
  { q: "Do I need to know about design or coding?", a: "Not at all. You just describe what you like — in simple words, in Hindi or English — and we handle everything. You only need to tell us about your business and your taste." },
  { q: "How long does a custom theme take?", a: "We typically deliver the design prototype within 3–4 days and the full live website within 7–10 working days after approval." },
  { q: "What if I don't like the first design?", a: "We offer unlimited revisions until you are 100% happy. We don't launch anything without your full approval." },
  { q: "How much does a custom theme cost?", a: "Custom themes start at ₹8,999. The final price depends on the complexity and number of pages. We will give you a clear quote after the free consultation — no surprises." },
  { q: "Can I switch to a custom theme later?", a: "Absolutely. If you start with one of our standard themes and later want a fully custom one, we can upgrade you at any time." },
];

const inspirations = [
  { label: "Dark & Bold",    bg: "linear-gradient(135deg,#0D0B1E,#1a0535)",  accent: "#FF4500" },
  { label: "Clean & Light",  bg: "linear-gradient(135deg,#F5F0E8,#EDE8DF)",  accent: "#C4735A" },
  { label: "Rich & Royal",   bg: "linear-gradient(135deg,#1a0a00,#2d1600)",  accent: "#C9A84C" },
  { label: "Fresh & Modern", bg: "linear-gradient(135deg,#0A1F5C,#1A3A8F)",  accent: "#FFD700" },
  { label: "Nature & Calm",  bg: "linear-gradient(135deg,#0f2419,#1a3a2a)",  accent: "#C9A96E" },
  { label: "Vibrant & Bold", bg: "linear-gradient(135deg,#3B3DB8,#6366F1)",  accent: "#ffffff" },
];

export default function CustomThemePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", business: "", phone: "", vision: "", style: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".ct-rv");
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

  const BG    = "#F8F9FF";
  const BG2   = "#EEF0FF";
  const IND   = "#3B3DB8";
  const INDL  = "#6366F1";
  const DARK  = "#1A1A2E";
  const MUT   = "#4A4A6A";
  const SOFTM = "#8888AA";

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#fff", border: "1px solid rgba(59,61,184,0.18)",
    borderRadius: 10, padding: "13px 16px", fontSize: "0.9rem",
    color: DARK, outline: "none", fontFamily: inter.style.fontFamily,
    transition: "border-color .2s", boxSizing: "border-box",
  };

  return (
    <div style={{ background: BG, fontFamily: inter.style.fontFamily }}>
      <Navbar />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg,#ffffff 0%,${BG} 50%,${BG2} 100%)`, padding: "120px 24px 100px", position: "relative", overflow: "hidden", paddingTop: 140 }}>
        {/* deco circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,rgba(99,102,241,0.1),transparent)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,rgba(59,61,184,0.07),transparent)`, pointerEvents: "none" }} />
        {/* dashed border decoration */}
        <div style={{ position: "absolute", top: 100, right: 80, width: 200, height: 200, borderRadius: "50%", border: "1.5px dashed rgba(59,61,184,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 130, right: 110, width: 140, height: 140, borderRadius: "50%", border: "1px dashed rgba(59,61,184,0.1)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BG2, border: `1px solid rgba(59,61,184,0.2)`, borderRadius: 999, padding: "5px 16px", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: IND, display: "inline-block" }} />
            <span style={{ fontSize: "0.75rem", color: IND, fontWeight: 600, letterSpacing: "0.06em" }}>100% Bespoke — Built Just For You</span>
          </div>
          <h1 className={playfair.className} style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 700, color: DARK, lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Your website,<br />
            <span style={{ fontStyle: "italic", color: IND }}>your rules.</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUT, lineHeight: 1.85, maxWidth: 580, margin: "0 auto 40px" }}>
            Not happy with the standard themes? Tell us exactly what you want and we will design and build a completely unique website from scratch — tailored to your business, your brand and your customers.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#consult-form" style={{ padding: "14px 36px", background: IND, color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2B2D8A"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,61,184,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = IND; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >Start Designing →</Link>
            <Link href="#how-it-works" style={{ padding: "14px 36px", background: "transparent", border: `1px solid rgba(59,61,184,0.3)`, color: DARK, borderRadius: 999, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = IND; e.currentTarget.style.color = IND; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(59,61,184,0.3)"; e.currentTarget.style.color = DARK; }}
            >See How It Works</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INSPIRATION SWATCHES
      ══════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ct-rv" style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>Just a few directions</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              What style feels <span style={{ fontStyle: "italic", color: IND }}>like you?</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: MUT, marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>These are just starting points. Your actual theme can be anything you imagine.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 16 }} className="ct-3col">
            {inspirations.map((ins, i) => (
              <div key={ins.label} className="ct-rv" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", position: "relative", cursor: "pointer", transitionDelay: `${i * 60}ms`, transition: "transform .3s,box-shadow .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(59,61,184,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", inset: 0, background: ins.bg }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px 14px", background: "linear-gradient(to top,rgba(0,0,0,0.5),transparent)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: ins.accent, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>{ins.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: "0.85rem", color: SOFTM, marginTop: 20 }}>
            ✦ Or bring your own inspiration — a photo, a website you love, a colour you like. We work with anything.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          WHAT YOU GET
      ══════════════════════════════ */}
      <section style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ct-rv" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>Full control</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              You choose <span style={{ fontStyle: "italic", color: IND }}>everything</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 18 }} className="ct-3col">
            {options.map((o, i) => (
              <div key={o.title} className="ct-rv" style={{ background: "#fff", border: "1px solid rgba(59,61,184,0.1)", borderRadius: 16, padding: "28px 24px", borderTop: `3px solid ${IND}`, transition: "all .3s", transitionDelay: `${i * 60}ms` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(59,61,184,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 14 }}>{o.icon}</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: DARK, margin: "0 0 8px" }}>{o.title}</h3>
                <p style={{ fontSize: "0.875rem", color: MUT, lineHeight: 1.75, margin: 0 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOW IT WORKS
      ══════════════════════════════ */}
      <section id="how-it-works" style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="ct-rv" style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>The process</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              Simple. Guided. <span style={{ fontStyle: "italic", color: IND }}>Done for you.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={s.num} className="ct-rv" style={{ display: "grid", gridTemplateColumns: "72px 2px 1fr", gap: "0 28px", padding: "36px 0", borderBottom: i < steps.length - 1 ? "1px solid rgba(59,61,184,0.08)" : "none", transitionDelay: `${i * 80}ms` }}>
                <div style={{ textAlign: "right", paddingRight: 8 }}>
                  <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(59,61,184,0.3)", letterSpacing: "0.05em" }}>{s.num}</div>
                </div>
                <div style={{ width: 2, background: `linear-gradient(to bottom,${IND},rgba(59,61,184,0.1))`, margin: "0 auto", height: "100%" }} />
                <div style={{ paddingLeft: 8, paddingTop: 4 }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: DARK, margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRICING STRIP
      ══════════════════════════════ */}
      <section style={{ background: `linear-gradient(135deg,${IND},${INDL})`, padding: "72px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, textAlign: "center" }} className="ct-3col">
          {[
            { num: "₹8,999", label: "Starting Price", sub: "5-page custom website" },
            { num: "5–7", label: "Days to Launch", sub: "After design approval" },
            { num: "∞", label: "Revisions", sub: "Until you're 100% happy" },
          ].map((s) => (
            <div key={s.label} className="ct-rv">
              <div className={playfair.className} style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section style={{ background: BG, padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="ct-rv" style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>Common questions</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.1 }}>
              Your <span style={{ fontStyle: "italic", color: IND }}>questions</span> answered
            </h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="ct-rv" style={{ borderBottom: "1px solid rgba(59,61,184,0.1)", transitionDelay: `${i * 50}ms` }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 16, fontFamily: inter.style.fontFamily }}
              >
                <span style={{ fontSize: "0.975rem", fontWeight: 600, color: DARK, textAlign: "left", letterSpacing: "-0.01em" }}>{f.q}</span>
                <span style={{ fontSize: "1.4rem", color: IND, flexShrink: 0, transition: "transform .3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", display: "inline-block" }}>+</span>
              </button>
              <div style={{ maxHeight: openFaq === i ? 240 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8, paddingBottom: 20, margin: 0 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          CONSULTATION FORM
      ══════════════════════════════ */}
      <section id="consult-form" style={{ background: BG2, padding: "100px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="ct-rv" style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: IND, fontWeight: 600, marginBottom: 10 }}>Free consultation</p>
            <h2 className={playfair.className} style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 600, color: DARK, margin: "0 0 12px", lineHeight: 1.1 }}>
              Let&apos;s start building<br />
              <span style={{ fontStyle: "italic", color: IND }}>your dream website</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: MUT, margin: 0 }}>Fill this form and we will call you within 24 hours to discuss your vision — for free, no commitment.</p>
          </div>

          {sent ? (
            <div className="ct-rv" style={{ background: "#fff", border: `2px solid ${IND}`, borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
              <h3 className={playfair.className} style={{ fontSize: "1.8rem", fontWeight: 600, color: DARK, margin: "0 0 10px" }}>We&apos;ve got your details!</h3>
              <p style={{ fontSize: "0.9rem", color: MUT, lineHeight: 1.8 }}>Our team will call you within 24 hours to discuss your custom theme. Get ready to build something amazing!</p>
            </div>
          ) : (
            <div className="ct-rv" style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", boxShadow: "0 8px 40px rgba(59,61,184,0.08)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="ct-form-grid">
                <div>
                  <label style={{ fontSize: "0.72rem", fontWeight: 600, color: MUT, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Your Name *</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ramesh Sharma" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = IND)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(59,61,184,0.18)")}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.72rem", fontWeight: 600, color: MUT, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Business Name *</label>
                  <input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} placeholder="Sharma Jewellers" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = IND)}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(59,61,184,0.18)")}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 600, color: MUT, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Phone / WhatsApp *</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = IND)}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(59,61,184,0.18)")}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 600, color: MUT, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Describe your vision</label>
                <textarea value={form.vision} onChange={e => setForm({ ...form, vision: e.target.value })}
                  placeholder="Tell us about your business, what you sell, who your customers are, and what you want your website to feel like. You can write in Hindi too!"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                  onFocus={e => (e.currentTarget.style.borderColor = IND)}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(59,61,184,0.18)")}
                />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 600, color: MUT, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Which style feels closest to you?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {["Dark & Bold", "Clean & Light", "Rich & Royal", "Fresh & Modern", "Nature & Calm", "Vibrant & Bold", "Something Totally Different"].map(s => (
                    <button key={s} onClick={() => setForm({ ...form, style: s })}
                      style={{ padding: "8px 18px", borderRadius: 999, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", border: `1.5px solid ${form.style === s ? IND : "rgba(59,61,184,0.2)"}`, background: form.style === s ? IND : "transparent", color: form.style === s ? "#fff" : DARK, transition: "all .2s", fontFamily: inter.style.fontFamily }}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => { if (form.name && form.phone) setSent(true); }}
                style={{ width: "100%", padding: "15px", background: IND, color: "#fff", border: "none", borderRadius: 10, fontSize: "1rem", fontWeight: 700, cursor: "pointer", fontFamily: inter.style.fontFamily, transition: "background .2s,transform .2s", letterSpacing: "0.02em" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2B2D8A"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = IND; e.currentTarget.style.transform = "translateY(0)"; }}
              >Book My Free Consultation →</button>
              <p style={{ fontSize: "0.75rem", color: SOFTM, textAlign: "center", marginTop: 14 }}>We will call or WhatsApp you within 24 hours · No commitment required</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:rgba(59,61,184,0.3);border-radius:3px}
        @media(max-width:768px){
          .ct-3col{grid-template-columns:1fr 1fr!important;}
          .ct-form-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:480px){
          .ct-3col{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
