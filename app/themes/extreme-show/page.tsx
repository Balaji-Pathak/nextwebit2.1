"use client";

import { useEffect, useRef, useState } from "react";
import { Bebas_Neue, Inter } from "next/font/google";
import Image from "next/image";
import ESNavbar from "./ESNavbar";
import ESFooter from "./ESFooter";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// ── Scroll Reveal Hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".es-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Cursor ─────────────────────────────────────────────────────────────────
function ESCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.borderColor = "#DC2626";
      }
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(220,38,38,0.6)";
      }
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          background: "#DC2626",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%,-50%)",
          transition: "transform 0.15s ease",
          boxShadow: "0 0 10px rgba(220,38,38,0.8)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: "36px",
          height: "36px",
          border: "1.5px solid rgba(220,38,38,0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%,-50%)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
        }}
      />
    </>
  );
}

// ── Count Up ───────────────────────────────────────────────────────────────
function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// ── Shows data ─────────────────────────────────────────────────────────────
const upcomingShows = [
  {
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80",
    genre: "METAL",
    title: "Thrash & Burn Night",
    date: "May 10, 2025",
    venue: "Phoenix Arena, Mumbai",
    price: "₹999",
  },
  {
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    genre: "ELECTRONIC",
    title: "Voltage 2025",
    date: "May 24, 2025",
    venue: "Dome, Delhi",
    price: "₹1,499",
  },
  {
    img: "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?w=600&q=80",
    genre: "ROCK",
    title: "Loud Fest India",
    date: "June 7, 2025",
    venue: "MMRDA Grounds, Mumbai",
    price: "₹799",
  },
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    genre: "HIP-HOP",
    title: "Street Loud Vol.3",
    date: "June 21, 2025",
    venue: "Jawahar, Bangalore",
    price: "₹599",
  },
];

const artists = [
  { img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80", name: "IRON SIEGE", genre: "Heavy Metal", shows: 12 },
  { img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80", name: "DJ NOVA", genre: "Electronic", shows: 8 },
  { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", name: "RAW PITCH", genre: "Rock & Indie", shows: 15 },
  { img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", name: "BASSLINE KING", genre: "Hip-Hop", shows: 6 },
];

// ── FAQ data ────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Can I get a refund if a show is cancelled?", a: "Yes — if a show is cancelled by us, you receive a full refund within 5–7 working days. Rescheduled shows allow a 48-hour refund window." },
  { q: "Are tickets transferable?", a: "Tickets are non-transferable by default. Exceptions apply for medical emergencies — contact support with documentation." },
  { q: "Is there an age restriction?", a: "Most shows are 18+. All-ages events are clearly marked on the ticket page. Valid ID is required at the gate." },
  { q: "What is the entry policy?", a: "Gates open 90 minutes before showtime. Entry is QR-code based. No physical tickets are needed — just your phone." },
  { q: "Can I bring my camera?", a: "Point-and-shoot cameras are allowed. DSLRs and cameras with detachable lenses require a media pass. No professional recording equipment." },
  { q: "How do I access my tickets?", a: "Tickets are emailed instantly after purchase. You can also find them in your ExtremeShow account dashboard anytime." },
];

// ══════════════════════════════════════════════════════════════════════════
export default function ExtremeShowPage() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % upcomingShows.length), 4000);
    return () => clearInterval(t);
  }, []);

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <div
      style={{
        background: "#080808",
        color: "#fff",
        cursor: "none",
        fontFamily: inter.style.fontFamily,
        overflowX: "hidden",
      }}
    >
      <ESCursor />
      <ESNavbar />

      {/* ──────────────────── HERO ──────────────────── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1600&q=90"
            alt="Concert crowd"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(5,5,5,0.92) 40%, rgba(5,5,5,0.4) 100%), linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 40%)",
            }}
          />
          {/* Red glow overlay */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "20%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 40px 80px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "60px",
            width: "100%",
          }}
          className="es-hero-grid"
        >
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="es-reveal"
              style={{
                ...revealStyle,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(220,38,38,0.15)",
                border: "1px solid rgba(220,38,38,0.4)",
                borderRadius: "3px",
                padding: "6px 14px",
                marginBottom: "28px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#DC2626", animation: "pulse 1.5s infinite" }} />
              <span style={{ fontFamily: inter.style.fontFamily, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", color: "#DC2626", textTransform: "uppercase" }}>
                Live Events · Tickets · Merch
              </span>
            </div>

            <h1
              className="es-reveal"
              style={{
                ...revealStyle,
                fontFamily: bebas.style.fontFamily,
                fontSize: "clamp(4rem, 9vw, 9rem)",
                letterSpacing: "0.02em",
                lineHeight: 0.88,
                marginBottom: "28px",
                transitionDelay: "0.1s",
              }}
            >
              FEEL THE<br />
              <span style={{ color: "#DC2626", WebkitTextStroke: "2px #DC2626" }}>EXTREME</span><br />
              SOUND
            </h1>

            <p
              className="es-reveal"
              style={{
                ...revealStyle,
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                maxWidth: "440px",
                marginBottom: "40px",
                transitionDelay: "0.2s",
              }}
            >
              India&apos;s most electrifying live event platform. From metal nights to EDM raves — book your seats, feel the energy, live the moment.
            </p>

            <div
              className="es-reveal"
              style={{ ...revealStyle, display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px", transitionDelay: "0.3s" }}
            >
              <a
                href="#tickets"
                style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: "1.1rem",
                  letterSpacing: "0.12em",
                  color: "#fff",
                  background: "linear-gradient(135deg, #DC2626, #991B1B)",
                  padding: "14px 36px",
                  borderRadius: "3px",
                  textDecoration: "none",
                  boxShadow: "0 4px 30px rgba(220,38,38,0.5)",
                }}
              >
                BUY TICKETS NOW
              </a>
              <a
                href="#shows"
                style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: "1.1rem",
                  letterSpacing: "0.12em",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "14px 36px",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
              >
                VIEW SHOWS →
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="es-reveal"
              style={{ ...revealStyle, display: "flex", gap: "32px", transitionDelay: "0.4s" }}
            >
              {[["500+", "Shows"], ["2M+", "Fans"], ["4.8★", "Rating"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.8rem", color: "#DC2626", letterSpacing: "0.05em" }}>{num}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Ticket card */}
          <div className="es-reveal" style={{ ...revealStyle, transitionDelay: "0.3s" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(127,29,29,0.1))",
                border: "1px solid rgba(220,38,38,0.25)",
                borderRadius: "12px",
                padding: "32px",
                backdropFilter: "blur(16px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "200px",
                  height: "200px",
                  background: "radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.85rem", letterSpacing: "0.2em", color: "#DC2626", marginBottom: "16px" }}>
                🎫 FEATURED SHOW
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "220px",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={upcomingShows[slideIndex].img}
                  alt={upcomingShows[slideIndex].title}
                  fill
                  style={{ objectFit: "cover", transition: "opacity 0.5s" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#DC2626",
                    borderRadius: "2px",
                    padding: "3px 10px",
                    fontFamily: bebas.style.fontFamily,
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  {upcomingShows[slideIndex].genre}
                </div>
              </div>
              <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.6rem", letterSpacing: "0.06em", marginBottom: "8px" }}>
                {upcomingShows[slideIndex].title}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
                📅 {upcomingShows[slideIndex].date}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
                📍 {upcomingShows[slideIndex].venue}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>From</div>
                  <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "2rem", color: "#DC2626" }}>
                    {upcomingShows[slideIndex].price}
                  </div>
                </div>
                <a
                  href="#tickets"
                  style={{
                    fontFamily: bebas.style.fontFamily,
                    fontSize: "0.95rem",
                    letterSpacing: "0.12em",
                    color: "#fff",
                    background: "#DC2626",
                    padding: "12px 24px",
                    borderRadius: "3px",
                    textDecoration: "none",
                  }}
                >
                  GET TICKETS
                </a>
              </div>

              {/* Slide dots */}
              <div style={{ display: "flex", gap: "6px", marginTop: "16px", justifyContent: "center" }}>
                {upcomingShows.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    style={{
                      width: i === slideIndex ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === slideIndex ? "#DC2626" : "rgba(255,255,255,0.25)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling genre bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(220,38,38,0.9)",
            padding: "10px 0",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "48px",
              animation: "marquee 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {["ROCK", "METAL", "EDM", "HIP-HOP", "INDIE", "JAZZ", "PUNK", "TECHNO", "ROCK", "METAL", "EDM", "HIP-HOP", "INDIE", "JAZZ", "PUNK", "TECHNO"].map((g, i) => (
              <span key={i} style={{ fontFamily: bebas.style.fontFamily, fontSize: "1rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.9)" }}>
                {g} <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: "12px" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── UPCOMING SHOWS ──────────────────── */}
      <section id="shows" style={{ padding: "100px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="es-reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
            DON&apos;T MISS OUT
          </div>
          <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9, marginBottom: "16px" }}>
            UPCOMING <span style={{ color: "#DC2626" }}>SHOWS</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", maxWidth: "480px", margin: "0 auto" }}>
            Catch the biggest names live before they sell out. Tickets go fast — grab yours now.
          </p>
        </div>

        {/* Tabs */}
        <div className="es-reveal" style={{ ...revealStyle, display: "flex", gap: "4px", marginBottom: "48px", justifyContent: "center" }}>
          {["All Shows", "This Month", "Rock/Metal", "Electronic"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                fontFamily: bebas.style.fontFamily,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                padding: "10px 22px",
                border: "1px solid",
                borderColor: activeTab === i ? "#DC2626" : "rgba(255,255,255,0.12)",
                background: activeTab === i ? "#DC2626" : "transparent",
                color: activeTab === i ? "#fff" : "rgba(255,255,255,0.5)",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="es-shows-grid"
        >
          {upcomingShows.map((show, i) => (
            <div
              key={show.title}
              className="es-reveal es-show-card"
              style={{
                ...revealStyle,
                transitionDelay: `${i * 0.1}s`,
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(220,38,38,0.2)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ position: "relative", height: "200px" }}>
                <Image src={show.img} alt={show.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#DC2626",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    fontFamily: bebas.style.fontFamily,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                  }}
                >
                  {show.genre}
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.3rem", letterSpacing: "0.06em", marginBottom: "10px" }}>
                  {show.title}
                </h3>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>📅 {show.date}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>📍 {show.venue}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.4rem", color: "#DC2626" }}>{show.price}</span>
                  <a
                    href="#tickets"
                    style={{
                      fontFamily: bebas.style.fontFamily,
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: "#DC2626",
                      padding: "8px 16px",
                      borderRadius: "3px",
                      textDecoration: "none",
                    }}
                  >
                    BOOK
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────── STATS ──────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #DC2626 0%, #7F1D1D 100%)",
          padding: "72px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", position: "relative" }}
          className="es-stats-grid"
        >
          {[
            { num: 500, suffix: "+", label: "Shows Hosted" },
            { num: 2000000, suffix: "+", label: "Fans Served" },
            { num: 120, suffix: "+", label: "Artists Featured" },
            { num: 25, suffix: "+", label: "Cities Covered" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="es-reveal"
              style={{
                ...revealStyle,
                textAlign: "center",
                transitionDelay: `${i * 0.1}s`,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
              }}
            >
              <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "0.04em", color: "#fff" }}>
                <CountUp target={stat.num} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────── ARTISTS ──────────────────── */}
      <section id="artists" style={{ padding: "100px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="es-reveal" style={{ ...revealStyle, marginBottom: "64px" }}>
          <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
            ON THE LINEUP
          </div>
          <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9 }}>
            FEATURED <span style={{ color: "#DC2626" }}>ARTISTS</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="es-artists-grid">
          {artists.map((artist, i) => (
            <div
              key={artist.name}
              className="es-reveal"
              style={{
                ...revealStyle,
                transitionDelay: `${i * 0.1}s`,
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                height: "320px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector(".es-artist-overlay") as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector(".es-artist-overlay") as HTMLElement).style.opacity = "0";
              }}
            >
              <Image src={artist.img} alt={artist.name} fill style={{ objectFit: "cover", filter: "grayscale(40%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)" }} />
              <div className="es-artist-overlay" style={{ position: "absolute", inset: 0, background: "rgba(220,38,38,0.2)", transition: "opacity 0.3s", opacity: 0 }} />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.5rem", letterSpacing: "0.08em" }}>{artist.name}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em" }}>{artist.genre}</div>
                <div style={{ fontSize: "0.7rem", color: "#DC2626", marginTop: "4px" }}>{artist.shows} upcoming shows</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────── TICKETS / HOW IT WORKS ──────────────────── */}
      <section id="tickets" style={{ background: "#0d0d0d", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="es-reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: "72px" }}>
            <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
              IT&apos;S SIMPLE
            </div>
            <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9, marginBottom: "16px" }}>
              HOW TO GET <span style={{ color: "#DC2626" }}>YOUR TICKETS</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative" }} className="es-steps-grid">
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "36px",
                left: "10%",
                right: "10%",
                height: "2px",
                background: "linear-gradient(to right, #DC2626, rgba(220,38,38,0.2))",
                zIndex: 0,
              }}
              className="es-steps-line"
            />
            {[
              { num: "01", title: "Browse Shows", desc: "Explore hundreds of live events across genres and cities on our platform." },
              { num: "02", title: "Choose Seats", desc: "Pick your category — General, VIP, or Front Row. All shown on our live map." },
              { num: "03", title: "Secure Payment", desc: "Pay via UPI, card or net banking. Your ticket is emailed instantly." },
              { num: "04", title: "Show Up & Rock", desc: "Scan the QR at the gate and walk straight in. No queues, no hassle." },
            ].map((step, i) => (
              <div
                key={step.num}
                className="es-reveal"
                style={{
                  ...revealStyle,
                  transitionDelay: `${i * 0.12}s`,
                  textAlign: "center",
                  padding: "0 24px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "#DC2626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontFamily: bebas.style.fontFamily,
                    fontSize: "1.5rem",
                    letterSpacing: "0.05em",
                    boxShadow: "0 0 30px rgba(220,38,38,0.4)",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.2rem", letterSpacing: "0.08em", marginBottom: "12px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── MERCH SECTION ──────────────────── */}
      <section id="merch" style={{ padding: "100px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div className="es-reveal" style={{ ...revealStyle, display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
              OFFICIAL STORE
            </div>
            <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9 }}>
              SHOP THE <span style={{ color: "#DC2626" }}>MERCH</span>
            </h2>
          </div>
          <a href="#" style={{ fontFamily: bebas.style.fontFamily, fontSize: "1rem", letterSpacing: "0.12em", color: "#DC2626", textDecoration: "none", border: "1px solid #DC2626", padding: "12px 24px", borderRadius: "3px" }}>
            VIEW ALL MERCH →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="es-merch-grid">
          {[
            { img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", name: "Extreme Show Tee", price: "₹999", tag: "Bestseller" },
            { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80", name: "Tour Hoodie 2025", price: "₹2,499", tag: "Limited" },
            { img: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=400&q=80", name: "Logo Cap", price: "₹699", tag: "New" },
            { img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80", name: "Wristband Pack", price: "₹299", tag: "Fan Fave" },
          ].map((item, i) => (
            <div
              key={item.name}
              className="es-reveal"
              style={{
                ...revealStyle,
                transitionDelay: `${i * 0.1}s`,
                background: "#111",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "relative", height: "220px" }}>
                <Image src={item.img} alt={item.name} fill style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "#DC2626",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    fontFamily: bebas.style.fontFamily,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.tag}
                </div>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontFamily: inter.style.fontFamily, fontSize: "0.9rem", fontWeight: 500, marginBottom: "8px" }}>{item.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.3rem", color: "#DC2626" }}>{item.price}</span>
                  <button
                    style={{
                      fontFamily: bebas.style.fontFamily,
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "6px 14px",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────── TESTIMONIALS ──────────────────── */}
      <section style={{ background: "#0d0d0d", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="es-reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
              CROWD SPEAKS
            </div>
            <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9 }}>
              WHAT FANS <span style={{ color: "#DC2626" }}>SAY</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="es-testimonials-grid">
            {[
              { initials: "RK", name: "Rahul K.", city: "Mumbai", text: "Loud Fest was INSANE. Front row tickets through ExtremeShow — no hassle, no scammers. Scanned my phone and walked in. 10/10 every time!" },
              { initials: "PS", name: "Priya S.", city: "Delhi", text: "Bought merch and tickets together in one order. The hoodie arrived before the show — quality is legit. ExtremeShow really gets it." },
              { initials: "AV", name: "Arjun V.", city: "Bangalore", text: "The VIP experience at Voltage 2025 was unreal. Premium bar, best views, zero crowd chaos. Worth every rupee. Already booked for next year." },
            ].map((t, i) => (
              <div
                key={t.name}
                className="es-reveal"
                style={{
                  ...revealStyle,
                  transitionDelay: `${i * 0.1}s`,
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "4px solid #DC2626",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "4rem", color: "rgba(220,38,38,0.15)", lineHeight: 0.8, marginBottom: "16px" }}>"</div>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "24px" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #DC2626, #7F1D1D)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: bebas.style.fontFamily,
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Fan · {t.city}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#DC2626", fontSize: "0.85rem" }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FAQ ──────────────────── */}
      <section id="about" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="es-reveal" style={{ ...revealStyle, textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.8rem", letterSpacing: "0.25em", color: "#DC2626", marginBottom: "12px" }}>
              GOT QUESTIONS?
            </div>
            <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "0.04em", lineHeight: 0.9 }}>
              FREQUENTLY <span style={{ color: "#DC2626" }}>ASKED</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="es-reveal"
                style={{
                  ...revealStyle,
                  transitionDelay: `${i * 0.06}s`,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontFamily: inter.style.fontFamily, fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontFamily: bebas.style.fontFamily,
                      fontSize: "1.5rem",
                      color: "#DC2626",
                      flexShrink: 0,
                      transition: "transform 0.3s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, paddingBottom: "24px" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CTA BAND ──────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #7F1D1D 0%, #DC2626 50%, #991B1B 100%)",
          padding: "100px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        {[
          { top: "-100px", left: "-100px", size: "400px" },
          { top: "50%", right: "-100px", size: "300px" },
          { bottom: "-80px", left: "40%", size: "250px" },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: orb.size,
              height: orb.size,
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%",
              filter: "blur(60px)",
              top: orb.top,
              bottom: orb.bottom,
              left: orb.left,
              right: orb.right,
              pointerEvents: "none",
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="es-reveal" style={revealStyle}>
            <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "0.85rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>
              YOUR FRONT ROW AWAITS
            </div>
            <h2 style={{ fontFamily: bebas.style.fontFamily, fontSize: "clamp(3rem,8vw,8rem)", letterSpacing: "0.02em", lineHeight: 0.88, color: "#fff", marginBottom: "24px" }}>
              READY TO<br />ROCK?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", marginBottom: "40px", fontWeight: 300 }}>
              Join 2 million fans who trust ExtremeShow for their live event experience.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#shows"
                style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: "1.1rem",
                  letterSpacing: "0.12em",
                  color: "#DC2626",
                  background: "#fff",
                  padding: "16px 40px",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
              >
                BROWSE ALL SHOWS
              </a>
              <a
                href="tel:+919876543210"
                style={{
                  fontFamily: bebas.style.fontFamily,
                  fontSize: "1.1rem",
                  letterSpacing: "0.12em",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  padding: "16px 40px",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
              >
                CALL US NOW
              </a>
            </div>
            <div style={{ marginTop: "32px", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
              +91 98765 43210 · hello@extremeshow.in
            </div>
          </div>
        </div>
      </section>

      <ESFooter />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: rgba(220,38,38,0.5); border-radius: 3px; }
        @media (max-width: 1024px) {
          .es-hero-grid { grid-template-columns: 1fr !important; }
          .es-shows-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .es-artists-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .es-merch-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .es-steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .es-steps-line { display: none !important; }
          .es-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .es-testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .es-shows-grid { grid-template-columns: 1fr !important; }
          .es-artists-grid { grid-template-columns: 1fr !important; }
          .es-merch-grid { grid-template-columns: 1fr !important; }
          .es-steps-grid { grid-template-columns: 1fr !important; }
          .es-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
