"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MENavbar from "./MENavbar";
import MEFooter from "./MEFooter";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const CREAM = "#F5F0E8";
const GREEN = "#2C3E2D";
const TERRA = "#C4735A";
const MUTED = "#5C6B5D";
const SOFT = "#8A9E8B";
const BG2 = "#EDE8DF";
const PINK = "rgba(196,115,90,0.12)";

const packages = [
  { name: "The Intimate", price: "₹85,000", guests: "Up to 50 guests", features: ["Venue styling", "Floral arrangements", "Day-of coordination", "Photography 4hrs"], popular: false },
  { name: "The Grand", price: "₹2,20,000", guests: "Up to 300 guests", features: ["Full venue transformation", "Catering coordination", "Mehendi & Sangeet", "2-day photography", "Videography"], popular: true },
  { name: "The Royal", price: "Custom", guests: "Unlimited guests", features: ["Everything in Grand", "Destination wedding", "International vendors", "Bridal styling", "Honeymoon planning"], popular: false },
];

const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
];

const steps = [
  { num: "01", title: "First Consultation", desc: "We meet you over chai — at your home or our Jaipur studio. We listen to your love story and understand your dream day." },
  { num: "02", title: "Crafting Your Vision", desc: "Our team curates venue options, mood boards, floral concepts and a custom timeline — all presented in a beautiful proposal." },
  { num: "03", title: "Bringing It to Life", desc: "From vendor coordination to day-of management, we handle everything so you can simply be present in every moment." },
];

const testimonials = [
  { name: "Priya & Arjun", date: "November 2024", text: "True Romance ne hamare wedding ko ekdum dream jaisa bana diya. Har ek detail perfect thi. Hum shukriyada hain!", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80" },
  { name: "Sneha & Rahul", date: "February 2024", text: "From the mandap flowers to the last dance, everything was exactly as we had imagined. Worth every rupee!", img: "https://images.unsplash.com/photo-1622495966027-e0173192c728?w=200&q=80" },
  { name: "Meera & Karan", date: "December 2023", text: "The team was so calm and organised on the day — we didn't worry about a single thing. Pure magic!", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&q=80" },
];

const Sparkle = ({ size = 14, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={TERRA} style={{ opacity: 0.7, ...style }}>
    <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
  </svg>
);

export default function MinimalElegancePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Soft blush cursor — completely different from other themes
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      width:14px;height:14px;
      background:rgba(196,115,90,0.55);
      border-radius:50%;
      position:fixed;top:0;left:0;
      pointer-events:none;z-index:9999;
      transform:translate(-50%,-50%);
      transition:width .25s ease,height .25s ease,background .25s ease,border .25s ease;
      mix-blend-mode:multiply;
    `;
    document.body.appendChild(cursor);
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const grow = () => {
      cursor.style.width = "40px"; cursor.style.height = "40px";
      cursor.style.background = "transparent";
      cursor.style.border = `1.5px solid ${TERRA}`;
    };
    const shrink = () => {
      cursor.style.width = "14px"; cursor.style.height = "14px";
      cursor.style.background = "rgba(196,115,90,0.55)";
      cursor.style.border = "none";
    };
    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,input").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => {
      document.removeEventListener("mousemove", move);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".me-reveal");
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
      (el as HTMLElement).style.transform = "translateY(28px)";
      (el as HTMLElement).style.transition = "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={pageRef} style={{ background: CREAM, cursor: "none", overflowX: "hidden", fontFamily: dmSans.style.fontFamily }}>
      <MENavbar />

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section style={{ minHeight: "100vh", background: CREAM, display: "flex", alignItems: "center", paddingTop: 68, position: "relative", overflow: "hidden" }}>
        {/* Large soft circle bg decoration */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "rgba(196,115,90,0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(196,115,90,0.05)", pointerEvents: "none" }} />
        {/* Starburst decoration bottom-left like image */}
        <div style={{ position: "absolute", bottom: 80, left: 60, opacity: 0.18, pointerEvents: "none" }}>
          <svg width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x2 = 60 + 55 * Math.cos(angle);
              const y2 = 60 + 55 * Math.sin(angle);
              return <line key={i} x1="60" y1="60" x2={x2} y2={y2} stroke={TERRA} strokeWidth={i % 3 === 0 ? 1.5 : 0.8} />;
            })}
          </svg>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="me-hero-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <Sparkle size={12} />
              <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA }}>Wedding Planners · Jaipur</p>
              <Sparkle size={8} style={{ opacity: 0.4 }} />
            </div>
            <h1 className={cormorant.className} style={{ fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 500, color: GREEN, lineHeight: 1.05, letterSpacing: "-0.01em", margin: "0 0 8px" }}>
              Let us celebrate
            </h1>
            <h1 className={cormorant.className} style={{ fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 500, fontStyle: "italic", color: GREEN, lineHeight: 1.05, margin: "0 0 28px" }}>
              this beautiful day
            </h1>
            <p style={{ fontSize: "0.95rem", color: MUTED, lineHeight: 1.85, maxWidth: 400, marginBottom: 36 }}>
              Every love story is unique. We craft bespoke wedding experiences that reflect your personalities, honour your traditions, and create memories that last a lifetime.
            </p>
            {/* Email subscribe — like the image */}
            <div style={{ display: "flex", gap: 0, marginBottom: 16, maxWidth: 380, borderRadius: 999, overflow: "hidden", border: "1px solid rgba(44,62,45,0.18)", background: "#fff" }}>
              <input type="email" placeholder="your email address" style={{ flex: 1, border: "none", outline: "none", padding: "13px 20px", fontSize: "0.875rem", color: GREEN, background: "transparent", fontFamily: dmSans.style.fontFamily }} />
              <button style={{ background: TERRA, color: "#fff", border: "none", borderRadius: 999, padding: "13px 24px", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap", margin: 3, fontFamily: dmSans.style.fontFamily, transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#d4856c")}
                onMouseLeave={e => (e.currentTarget.style.background = TERRA)}
              >Let&apos;s go!</button>
            </div>
            <Link href="#" style={{ fontSize: "0.8rem", color: SOFT, textDecoration: "none", borderBottom: `1px solid rgba(138,158,139,0.4)`, paddingBottom: 1, fontFamily: dmMono.style.fontFamily, letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = GREEN)}
              onMouseLeave={e => (e.currentTarget.style.color = SOFT)}
            >Confirm your attendance</Link>
          </div>

          {/* Right — arch image like the reference */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            {/* Scattered sparkles around image */}
            <Sparkle size={14} style={{ position: "absolute", top: "10%", left: "8%", opacity: 0.6 }} />
            <Sparkle size={9} style={{ position: "absolute", top: "25%", right: "6%", opacity: 0.4 }} />
            <Sparkle size={12} style={{ position: "absolute", bottom: "20%", right: "10%", opacity: 0.5 }} />
            <Sparkle size={7} style={{ position: "absolute", bottom: "10%", left: "20%", opacity: 0.35 }} />

            {/* Arch / pill image frame — exactly like reference */}
            <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
              <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "160px 160px 80px 80px", overflow: "hidden", border: "1px solid rgba(44,62,45,0.1)", position: "relative" }}>
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80" alt="Happy couple" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
              </div>
              {/* Date card floating bottom-right — like reference */}
              <div style={{ position: "absolute", bottom: -16, right: -16, background: CREAM, border: "1px solid rgba(44,62,45,0.1)", borderRadius: 10, padding: "12px 16px", boxShadow: "0 4px 24px rgba(44,62,45,0.08)" }}>
                <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.7rem", letterSpacing: "0.1em", color: TERRA, margin: 0, marginBottom: 3 }}>06/22/2025</p>
                <p className={cormorant.className} style={{ fontSize: "0.95rem", fontStyle: "italic", color: GREEN, margin: 0 }}>Christopher &amp; Elena</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, transparent, ${TERRA})`, animation: "scrollPulse 2s ease infinite" }} />
          <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: SOFT }}>Scroll</p>
        </div>
      </section>

      {/* ══════════════════════════
          ABOUT STRIP — horizontal with image
      ══════════════════════════ */}
      <section style={{ background: BG2, padding: "88px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="me-2col">
          <div className="me-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ aspectRatio: "3/4", borderRadius: "80px 80px 20px 20px", overflow: "hidden", position: "relative" }}>
              <Image src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80" alt="Wedding" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 40 }}>
              <div style={{ aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
                <Image src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80" alt="Wedding detail" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ background: "#2C3E2D", borderRadius: 16, padding: "20px 16px", textAlign: "center" }}>
                <div className={cormorant.className} style={{ fontSize: "2rem", fontWeight: 600, color: TERRA, fontStyle: "italic" }}>500+</div>
                <div style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.6)", marginTop: 4 }}>Weddings Planned</div>
              </div>
            </div>
          </div>
          <div className="me-reveal">
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 14 }}>Our story</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 500, color: GREEN, margin: "0 0 20px", lineHeight: 1.15 }}>
              We plan. You <span style={{ fontStyle: "italic", color: TERRA }}>celebrate.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.85, marginBottom: 16 }}>
              Founded in Jaipur with a love for love itself, True Romance has spent over a decade turning wedding dreams into extraordinary realities. We are a team of passionate planners, designers, and storytellers.
            </p>
            <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.85, marginBottom: 28 }}>
              From intimate court marriages to 1000-guest grand celebrations — we bring the same meticulous attention to every single detail of every single day.
            </p>
            <div style={{ display: "flex", gap: 32 }}>
              {[["500+","Weddings"],["12","Years"],["4.9★","Rating"]].map(([num, label]) => (
                <div key={label}>
                  <div className={cormorant.className} style={{ fontSize: "1.8rem", fontWeight: 600, color: GREEN }}>{num}</div>
                  <div style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: SOFT }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          GALLERY — Masonry grid
      ══════════════════════════ */}
      <section style={{ background: CREAM, padding: "88px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="me-reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 10 }}>Our work</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 500, color: GREEN, margin: 0 }}>
              Gallery of <span style={{ fontStyle: "italic" }}>Love</span>
            </h2>
          </div>
          {/* Masonry-style grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto", gap: 14 }} className="me-3col">
            {gallery.map((img, i) => (
              <div key={i} className="me-reveal" style={{
                borderRadius: i % 3 === 0 ? "80px 80px 16px 16px" : i % 3 === 1 ? 16 : "16px 16px 80px 80px",
                overflow: "hidden",
                aspectRatio: i === 1 || i === 4 ? "4/3" : "3/4",
                position: "relative",
                cursor: "pointer",
                transitionDelay: `${i * 60}ms`,
              }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector(".me-img") as HTMLElement; if (img) img.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector(".me-img") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <div className="me-img" style={{ position: "absolute", inset: 0, transition: "transform 0.5s ease" }}>
                  <Image src={img} alt={`Wedding ${i + 1}`} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "rgba(44,62,45,0)", transition: "background 0.3s" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="#" style={{ display: "inline-block", padding: "12px 36px", background: "transparent", border: `1px solid rgba(44,62,45,0.25)`, color: GREEN, borderRadius: 999, fontSize: "0.875rem", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = CREAM; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GREEN; }}
            >View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HOW WE WORK — elegant numbered steps
      ══════════════════════════ */}
      <section style={{ background: BG2, padding: "88px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="me-reveal" style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 10 }}>The process</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 500, color: GREEN, margin: 0 }}>
              How we <span style={{ fontStyle: "italic", color: TERRA }}>work together</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.num} className="me-reveal" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, padding: "36px 0", borderBottom: i < steps.length - 1 ? "1px solid rgba(44,62,45,0.08)" : "none", transitionDelay: `${i * 100}ms` }}>
                <div className={cormorant.className} style={{ fontSize: "3.2rem", fontWeight: 400, color: "rgba(196,115,90,0.25)", lineHeight: 1, fontStyle: "italic", textAlign: "right", paddingRight: 8 }}>{step.num}</div>
                <div style={{ paddingTop: 8 }}>
                  <h3 className={cormorant.className} style={{ fontSize: "1.6rem", fontWeight: 500, color: GREEN, margin: "0 0 10px" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PACKAGES — Pricing cards
      ══════════════════════════ */}
      <section style={{ background: CREAM, padding: "88px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="me-reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 10 }}>Pricing</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 500, color: GREEN, margin: 0 }}>
              Choose your <span style={{ fontStyle: "italic" }}>experience</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }} className="me-3col">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className="me-reveal" style={{ background: pkg.popular ? GREEN : "#fff", border: pkg.popular ? "none" : "1px solid rgba(44,62,45,0.12)", borderRadius: 20, padding: "36px 28px", position: "relative", transition: "transform 0.3s", transitionDelay: `${i * 80}ms` }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {pkg.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: TERRA, color: "#fff", borderRadius: 999, padding: "4px 18px", fontSize: "0.7rem", fontFamily: dmMono.style.fontFamily, letterSpacing: "0.1em", whiteSpace: "nowrap" }}>Most Popular</div>
                )}
                <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: pkg.popular ? "rgba(245,240,232,0.5)" : SOFT, marginBottom: 10 }}>{pkg.guests}</p>
                <h3 className={cormorant.className} style={{ fontSize: "1.8rem", fontWeight: 500, fontStyle: "italic", color: pkg.popular ? CREAM : GREEN, margin: "0 0 8px" }}>{pkg.name}</h3>
                <div className={cormorant.className} style={{ fontSize: "2.2rem", fontWeight: 600, color: pkg.popular ? TERRA : GREEN, margin: "0 0 24px" }}>{pkg.price}</div>
                <div style={{ height: 1, background: pkg.popular ? "rgba(245,240,232,0.1)" : "rgba(44,62,45,0.1)", marginBottom: 20 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: pkg.popular ? "rgba(245,240,232,0.75)" : MUTED }}>
                      <span style={{ color: TERRA, fontSize: 12, flexShrink: 0 }}>✦</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="#" style={{ display: "block", textAlign: "center", padding: "12px", background: pkg.popular ? TERRA : "transparent", color: pkg.popular ? "#fff" : GREEN, border: pkg.popular ? "none" : `1px solid rgba(44,62,45,0.25)`, borderRadius: 999, fontSize: "0.875rem", textDecoration: "none", fontWeight: 500, transition: "all 0.2s" }}
                  onMouseEnter={e => { if (!pkg.popular) { e.currentTarget.style.background = GREEN; e.currentTarget.style.color = CREAM; } }}
                  onMouseLeave={e => { if (!pkg.popular) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GREEN; } }}
                >Choose this plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TESTIMONIALS — soft cards
      ══════════════════════════ */}
      <section style={{ background: BG2, padding: "88px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="me-reveal" style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 10 }}>Real stories</p>
            <h2 className={cormorant.className} style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 500, color: GREEN, margin: 0 }}>
              Love <span style={{ fontStyle: "italic" }}>letters to us</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }} className="me-3col">
            {testimonials.map((t, i) => (
              <div key={t.name} className="me-reveal" style={{ background: "#fff", border: "1px solid rgba(44,62,45,0.08)", borderRadius: 20, padding: 28, transitionDelay: `${i * 80}ms` }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: TERRA, fontSize: 13 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(44,62,45,0.06)" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <p className={cormorant.className} style={{ fontSize: "1rem", fontWeight: 500, color: GREEN, margin: 0 }}>{t.name}</p>
                    <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", color: SOFT, margin: 0, marginTop: 2, letterSpacing: "0.06em" }}>{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          INSTAGRAM WALL — decorative photo strip
      ══════════════════════════ */}
      <section style={{ background: CREAM, padding: "72px 0 0", overflow: "hidden" }}>
        <div className="me-reveal" style={{ textAlign: "center", padding: "0 40px 40px" }}>
          <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TERRA, marginBottom: 10 }}>@trueromance.in</p>
          <h2 className={cormorant.className} style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 500, color: GREEN, margin: 0 }}>
            Follow our <span style={{ fontStyle: "italic" }}>journey</span>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {gallery.slice(0, 5).map((img, i) => (
            <div key={i} style={{ flex: 1, height: 280, position: "relative", overflow: "hidden", cursor: "pointer" }}
              onMouseEnter={e => { const c = e.currentTarget.querySelector(".ig-overlay") as HTMLElement; if (c) c.style.opacity = "1"; }}
              onMouseLeave={e => { const c = e.currentTarget.querySelector(".ig-overlay") as HTMLElement; if (c) c.style.opacity = "0"; }}
            >
              <Image src={img} alt="" fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
              <div className="ig-overlay" style={{ position: "absolute", inset: 0, background: "rgba(44,62,45,0.45)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                <span style={{ color: CREAM, fontSize: 22 }}>♡</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MEFooter />

      <style>{`
        @keyframes scrollPulse { 0%,100%{opacity:.5;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(.6)} }
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${CREAM}}
        ::-webkit-scrollbar-thumb{background:rgba(196,115,90,0.3);border-radius:3px}
        @media(max-width:900px){
          .me-hero-grid{grid-template-columns:1fr!important;gap:40px!important;padding:40px 24px!important;}
          .me-2col{grid-template-columns:1fr!important;gap:40px!important;}
          .me-3col{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:560px){
          .me-3col{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
