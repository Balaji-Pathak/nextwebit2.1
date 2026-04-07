"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import MENavbar from "./MENavbar";
import MEFooter from "./MEFooter";
import {
  Playfair_Display,
  DM_Sans,
  Cormorant_Garamond,
  Libre_Baskerville,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export default function MinimalElegancePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Custom Crosshair Cursor
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "me-cursor";
    cursor.innerHTML = `
      <div id="me-cursor-h"></div>
      <div id="me-cursor-v"></div>
      <div id="me-cursor-dot"></div>
    `;
    document.body.appendChild(cursor);

    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
      #me-cursor {
        position: fixed;
        top: 0; left: 0;
        width: 32px; height: 32px;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
        mix-blend-mode: multiply;
      }
      #me-cursor-h {
        position: absolute;
        top: 50%; left: 0; right: 0;
        height: 1px;
        background: #c16b4a;
        transform: translateY(-50%);
        transition: width 0.2s ease, opacity 0.2s ease;
      }
      #me-cursor-v {
        position: absolute;
        left: 50%; top: 0; bottom: 0;
        width: 1px;
        background: #c16b4a;
        transform: translateX(-50%);
        transition: height 0.2s ease, opacity 0.2s ease;
      }
      #me-cursor-dot {
        position: absolute;
        top: 50%; left: 50%;
        width: 4px; height: 4px;
        background: #c16b4a;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      #me-cursor.expanded #me-cursor-h {
        left: -8px; right: -8px;
      }
      #me-cursor.expanded #me-cursor-v {
        top: -8px; bottom: -8px;
      }
      #me-cursor.expanded #me-cursor-dot {
        transform: translate(-50%, -50%) scale(2);
      }
    `;
    document.head.appendChild(style);

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHoverIn = () => cursor.classList.add("expanded");
    const handleHoverOut = () => cursor.classList.remove("expanded");

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cursor.remove();
      style.remove();
    };
  }, []);

  // Scroll Reveal
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .me-reveal {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
      }
      .me-reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .me-reveal-left {
        opacity: 0;
        transform: translateX(-32px);
        transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
      }
      .me-reveal-left.visible {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, Number((entry.target as HTMLElement).dataset.delay || 0));
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".me-reveal, .me-reveal-left").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      style.remove();
    };
  }, []);

  // Scrollbar styling
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #f7f3ee; }
      ::-webkit-scrollbar-thumb { background: rgba(193,107,74,0.35); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(193,107,74,0.6); }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const portfolioItems = [
    {
      title: "Aara Jewels",
      category: "Brand Identity + Web",
      img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      tag: "Jewellery",
    },
    {
      title: "Marigold Salon",
      category: "Digital Presence",
      img: "https://images.unsplash.com/photo-1560066984-138daaa1ded3?w=600&q=80",
      tag: "Beauty",
    },
    {
      title: "Kesar Couture",
      category: "E-Commerce",
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
      tag: "Fashion",
    },
    {
      title: "Gulmohar Home",
      category: "Brand + Print",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
      tag: "Decor",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Brand Identity",
      desc: "Logo, colour palette, typography system, and brand guidelines — everything a premium brand needs to look the part.",
      price: "From ₹3,999",
    },
    {
      number: "02",
      title: "Website Design",
      desc: "Hand-crafted, fast-loading websites built in Next.js. No templates. Designed to convert visitors into loyal customers.",
      price: "From ₹7,999",
    },
    {
      number: "03",
      title: "E-Commerce Store",
      desc: "Full online shop with product listings, payments, and inventory — so your boutique is open 24/7.",
      price: "From ₹12,999",
    },
    {
      number: "04",
      title: "Google Presence",
      desc: "Google Business setup, local SEO, and reviews management — so customers find you first in your city.",
      price: "From ₹1,499",
    },
  ];

  const testimonials = [
    {
      quote: "Our online enquiries tripled within the first month. The design is exactly what we imagined — elegant and effortless.",
      name: "Priya Sharma",
      role: "Owner, Aara Jewels · Jaipur",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      quote: "They understood our salon's personality from day one. The website has brought in clients we'd never have reached otherwise.",
      name: "Ritu Malhotra",
      role: "Founder, Marigold Salon · Delhi",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      quote: "Professional, fast, and genuinely attentive. The whole process was a pleasure — and the result is beautiful.",
      name: "Anjali Mehta",
      role: "Director, Kesar Couture · Mumbai",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    },
  ];

  const process = [
    {
      step: "I",
      title: "We Visit You",
      desc: "We come to your shop or salon, understand your brand, your customers, and your aspirations — before touching a single pixel.",
    },
    {
      step: "II",
      title: "Design & Review",
      desc: "Within 48 hours, we present a full design concept. You share feedback, we refine until it's exactly right.",
    },
    {
      step: "III",
      title: "Live & Growing",
      desc: "Your site goes live in 5–7 days, with WhatsApp support, Google setup, and ongoing care included.",
    },
  ];

  return (
    <div
      ref={pageRef}
      style={{
        background: "#f7f3ee",
        color: "#2c1f14",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <MENavbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 48px 80px",
          gap: "80px",
          position: "relative",
        }}
        className="me-hero-grid"
      >
        {/* Decorative sparkles */}
        <Sparkle top="18%" left="4%" size={14} delay={0.3} />
        <Sparkle top="72%" left="6%" size={9} delay={0.6} />
        <Sparkle top="30%" right="2%" size={11} delay={0.5} />

        {/* Left */}
        <div>
          <p
            className={dmSans.className}
            style={{
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c16b4a",
              marginBottom: "24px",
            }}
          >
            Web Design Studio · India
          </p>

          <h1
            className={playfair.className}
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "28px",
              color: "#2c1f14",
            }}
          >
            <span style={{ display: "block" }}>Let us design</span>
            <span style={{ display: "block", fontStyle: "italic", color: "#c16b4a" }}>your beautiful</span>
            <span style={{ display: "block" }}>digital presence.</span>
          </h1>

          <p
            className={cormorant.className}
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "rgba(44,31,20,0.55)",
              lineHeight: 1.8,
              maxWidth: "380px",
              marginBottom: "40px",
            }}
          >
            We craft refined websites for boutiques, salons, jewellery shops, and fashion brands across India — places that deserve to look as premium online as they do in person.
          </p>

          {/* Email CTA */}
          <div
            style={{
              display: "flex",
              gap: "0",
              maxWidth: "400px",
              marginBottom: "20px",
            }}
            className="me-email-row"
          >
            <input
              type="email"
              placeholder="your email address"
              className={dmSans.className}
              style={{
                flex: 1,
                background: "rgba(44,31,20,0.05)",
                border: "1px solid rgba(44,31,20,0.14)",
                borderRight: "none",
                padding: "13px 18px",
                fontSize: "0.85rem",
                color: "#2c1f14",
                outline: "none",
                borderRadius: "2px 0 0 2px",
                fontFamily: "inherit",
              }}
            />
            <button
              className={dmSans.className}
              style={{
                background: "#c16b4a",
                color: "#f7f3ee",
                border: "none",
                padding: "13px 24px",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                cursor: "none",
                borderRadius: "0 2px 2px 0",
                whiteSpace: "nowrap",
              }}
            >
              Let's go!
            </button>
          </div>

          <p
            className={dmSans.className}
            style={{
              fontSize: "0.75rem",
              color: "rgba(44,31,20,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            Confirm your attendance ↗
          </p>
        </div>

        {/* Right — Image */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Date badge */}
          <div
            className={baskerville.className}
            style={{
              position: "absolute",
              bottom: "12%",
              right: "-20px",
              textAlign: "right",
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: "0.7rem", color: "#c16b4a", letterSpacing: "0.1em" }}>06/22/2025</div>
            <div
              className={cormorant.className}
              style={{ fontSize: "0.75rem", fontStyle: "italic", color: "rgba(44,31,20,0.5)" }}
            >
              Your brand · Live
            </div>
          </div>

          {/* Shadow rect */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              width: "100%",
              maxWidth: "380px",
              aspectRatio: "3/4",
              background: "rgba(44,31,20,0.07)",
              borderRadius: "50% 16px 60px 16px",
            }}
          />

          {/* Main image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "380px",
              aspectRatio: "3/4",
              borderRadius: "50% 16px 60px 16px",
              overflow: "hidden",
              border: "1px solid rgba(44,31,20,0.08)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=800&q=80"
              alt="Premium boutique style"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div
        style={{
          background: "#2c1f14",
          padding: "18px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            width: "max-content",
            animation: "meMarquee 28s linear infinite",
          }}
        >
          {[...Array(3)].map((_, rep) => (
            <div key={rep} style={{ display: "flex", alignItems: "center", gap: "0" }}>
              {[
                "Brand Identity",
                "✦",
                "Web Design",
                "✦",
                "E-Commerce",
                "✦",
                "Boutique Stores",
                "✦",
                "Salons & Spas",
                "✦",
                "Jewellery Brands",
                "✦",
                "Fashion Labels",
                "✦",
                "Premium Retail",
                "✦",
              ].map((item, i) => (
                <span
                  key={i}
                  className={item === "✦" ? undefined : dmSans.className}
                  style={{
                    fontSize: item === "✦" ? "0.6rem" : "0.72rem",
                    fontWeight: 400,
                    letterSpacing: item === "✦" ? "0" : "0.16em",
                    textTransform: "uppercase",
                    color: item === "✦" ? "#c16b4a" : "rgba(247,243,238,0.6)",
                    padding: "0 24px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes meMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      {/* ── PORTFOLIO / WORK ─────────────────────────────── */}
      <section
        style={{
          background: "#f7f3ee",
          padding: "120px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
          }}
          className="me-section-header me-reveal"
        >
          <div>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "12px",
              }}
            >
              Selected Work
            </p>
            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#2c1f14",
                lineHeight: 1.1,
              }}
            >
              A few brands we've
              <br />
              had the joy of building.
            </h2>
          </div>
          <a
            href="#"
            className={dmSans.className}
            style={{
              fontSize: "0.78rem",
              color: "rgba(44,31,20,0.5)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(44,31,20,0.2)",
              paddingBottom: "2px",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            View all work →
          </a>
        </div>

        {/* Portfolio Grid — 2+2 asymmetric */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "20px",
          }}
          className="me-portfolio-grid"
        >
          {/* Left column — 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {portfolioItems.slice(0, 2).map((item, i) => (
              <PortfolioCard
                key={item.title}
                item={item}
                tall={i === 0}
                playfair={playfair.className}
                dmSans={dmSans.className}
                cormorant={cormorant.className}
                delay={i * 100}
              />
            ))}
          </div>
          {/* Right column — 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "60px" }}>
            {portfolioItems.slice(2, 4).map((item, i) => (
              <PortfolioCard
                key={item.title}
                item={item}
                tall={i === 1}
                playfair={playfair.className}
                dmSans={dmSans.className}
                cormorant={cormorant.className}
                delay={(i + 2) * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / PHILOSOPHY STRIP ─────────────────────── */}
      <section
        style={{
          background: "#ede7de",
          padding: "100px 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="me-about-grid"
        >
          <div className="me-reveal-left">
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "16px",
              }}
            >
              Our Philosophy
            </p>
            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#2c1f14",
                marginBottom: "28px",
              }}
            >
              Every brand deserves to be
              <span
                style={{ fontStyle: "italic", color: "#c16b4a" }}
              >
                {" "}seen, remembered,{" "}
              </span>
              and loved.
            </h2>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.9rem",
                color: "rgba(44,31,20,0.55)",
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: "20px",
              }}
            >
              We started NextWebIt with a single belief: India's premium local brands — the saree boutique that's been running for three generations, the salon that trained in Paris, the jeweller with one-of-a-kind pieces — deserve websites as thoughtful as the businesses themselves.
            </p>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.9rem",
                color: "rgba(44,31,20,0.55)",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              We don't do templates. We visit you, understand your world, and build something that genuinely reflects who you are.
            </p>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
            className="me-reveal"
            data-delay="100"
          >
            {[
              { num: "120+", label: "Brands launched" },
              { num: "14", label: "Cities across India" },
              { num: "48h", label: "First design delivered" },
              { num: "98%", label: "Client satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#f7f3ee",
                  padding: "36px 28px",
                  borderRadius: "2px",
                }}
              >
                <div
                  className={playfair.className}
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    color: "#2c1f14",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className={dmSans.className}
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(44,31,20,0.4)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section
        style={{
          background: "#f7f3ee",
          padding: "120px 48px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="me-reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "16px",
              }}
            >
              What We Build
            </p>
            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 500,
                color: "#2c1f14",
                lineHeight: 1.1,
              }}
            >
              Full-stack presence,
              <span style={{ fontStyle: "italic", color: "#c16b4a" }}> zero complexity.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(44,31,20,0.08)",
              border: "1px solid rgba(44,31,20,0.08)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            className="me-services-grid"
          >
            {services.map((svc, i) => (
              <div
                key={svc.number}
                className="me-reveal"
                data-delay={`${i * 80}`}
                style={{
                  background: "#f7f3ee",
                  padding: "48px 32px",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ede7de";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#f7f3ee";
                }}
              >
                <div
                  className={playfair.className}
                  style={{
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    color: "#c16b4a",
                    marginBottom: "20px",
                  }}
                >
                  {svc.number}
                </div>
                <h3
                  className={playfair.className}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#2c1f14",
                    marginBottom: "14px",
                    lineHeight: 1.2,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className={dmSans.className}
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(44,31,20,0.5)",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    marginBottom: "24px",
                  }}
                >
                  {svc.desc}
                </p>
                <div
                  className={dmSans.className}
                  style={{
                    display: "inline-block",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: "#c16b4a",
                    border: "1px solid rgba(193,107,74,0.3)",
                    padding: "5px 12px",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {svc.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section
        style={{
          background: "#2c1f14",
          padding: "120px 48px",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div className="me-reveal" style={{ marginBottom: "80px" }}>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "16px",
              }}
            >
              How It Works
            </p>
            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#f7f3ee",
                lineHeight: 1.15,
              }}
            >
              Three unhurried steps to{" "}
              <span style={{ fontStyle: "italic", color: "#c16b4a" }}>going live.</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {process.map((step, i) => (
              <div
                key={step.step}
                className="me-reveal"
                data-delay={`${i * 120}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1px 1fr",
                  gap: "0 32px",
                  paddingBottom: i < process.length - 1 ? "60px" : "0",
                }}
              >
                {/* Roman numeral */}
                <div
                  className={playfair.className}
                  style={{
                    fontSize: "3rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#c16b4a",
                    lineHeight: 1,
                    paddingTop: "4px",
                  }}
                >
                  {step.step}
                </div>

                {/* Line */}
                <div
                  style={{
                    width: "1px",
                    background: i < process.length - 1
                      ? "linear-gradient(to bottom, rgba(193,107,74,0.4) 0%, rgba(193,107,74,0) 100%)"
                      : "transparent",
                    margin: "8px 0",
                  }}
                />

                {/* Content */}
                <div style={{ paddingTop: "4px" }}>
                  <h3
                    className={playfair.className}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: "#f7f3ee",
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={dmSans.className}
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(247,243,238,0.45)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section
        style={{
          background: "#f7f3ee",
          padding: "120px 48px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="me-reveal" style={{ marginBottom: "64px" }}>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "12px",
              }}
            >
              Kind Words
            </p>
            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#2c1f14",
              }}
            >
              From the brands we serve.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="me-testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="me-reveal"
                data-delay={`${i * 100}`}
                style={{
                  background: "#ede7de",
                  padding: "40px 32px",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                {/* Quote mark */}
                <div
                  className={playfair.className}
                  style={{
                    fontSize: "4rem",
                    fontStyle: "italic",
                    color: "rgba(193,107,74,0.2)",
                    lineHeight: 0.8,
                    marginBottom: "20px",
                  }}
                >
                  "
                </div>
                <p
                  className={cormorant.className}
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "#2c1f14",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "1.5px solid rgba(193,107,74,0.2)",
                      position: "relative",
                    }}
                  >
                    <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <div
                      className={dmSans.className}
                      style={{ fontSize: "0.85rem", fontWeight: 500, color: "#2c1f14" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className={dmSans.className}
                      style={{ fontSize: "0.72rem", color: "rgba(44,31,20,0.4)", fontWeight: 300 }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────── */}
      <section
        style={{
          background: "#f7f3ee",
          padding: "140px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative thin horizontal lines */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(44,31,20,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(44,31,20,0.04)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="me-reveal">
            <Sparkle top="-10%" left="8%" size={12} />
            <Sparkle top="30%" right="6%" size={8} />

            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "24px",
              }}
            >
              Ready to begin?
            </p>

            <h2
              className={playfair.className}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                color: "#2c1f14",
                marginBottom: "24px",
              }}
            >
              Your brand deserves
              <br />
              <span style={{ fontStyle: "italic", color: "#c16b4a" }}>to be seen.</span>
            </h2>

            <p
              className={cormorant.className}
              style={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "rgba(44,31,20,0.45)",
                marginBottom: "48px",
                lineHeight: 1.6,
              }}
            >
              Book a free discovery call. No pressure, no jargon — just an honest conversation.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#"
                className={dmSans.className}
                style={{
                  background: "#c16b4a",
                  color: "#f7f3ee",
                  padding: "16px 44px",
                  borderRadius: "2px",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#a85a3c";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#c16b4a";
                  el.style.transform = "translateY(0)";
                }}
              >
                Book a Free Call
              </a>
              <a
                href="https://wa.me/919876543210"
                className={dmSans.className}
                style={{
                  background: "transparent",
                  color: "#2c1f14",
                  padding: "16px 44px",
                  borderRadius: "2px",
                  fontSize: "0.88rem",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  border: "1px solid rgba(44,31,20,0.15)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#c16b4a";
                  el.style.color = "#c16b4a";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(44,31,20,0.15)";
                  el.style.color = "#2c1f14";
                }}
              >
                WhatsApp Us
              </a>
            </div>

            <p
              className={cormorant.className}
              style={{
                marginTop: "24px",
                fontSize: "0.85rem",
                fontStyle: "italic",
                color: "rgba(44,31,20,0.3)",
              }}
            >
              By appointment · Jaipur studio · We also visit your location
            </p>
          </div>
        </div>
      </section>

      {/* ── SCROLL CUE ───────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 50,
          opacity: 0.4,
        }}
      >
        <span
          className={dmSans.className}
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2c1f14",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #c16b4a, transparent)",
            animation: "meScrollLine 1.8s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes meScrollLine {
            0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}</style>
      </div>

      <MEFooter />

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .me-hero-grid { grid-template-columns: 1fr !important; padding: 120px 32px 60px !important; }
          .me-about-grid { grid-template-columns: 1fr !important; }
          .me-services-grid { grid-template-columns: 1fr 1fr !important; }
          .me-testimonials-grid { grid-template-columns: 1fr !important; }
          .me-portfolio-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .me-services-grid { grid-template-columns: 1fr !important; }
          .me-section-header { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .me-email-row { flex-direction: column !important; }
          .me-email-row input, .me-email-row button { border-radius: 2px !important; border: 1px solid rgba(44,31,20,0.14) !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────── */

function Sparkle({
  top,
  left,
  right,
  size = 12,
  delay = 0,
}: {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: size,
        height: size,
        animation: `meSparkle 3s ease-in-out ${delay}s infinite`,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <svg viewBox="0 0 16 16" fill="none" width={size} height={size}>
        <path d="M8 0L9 7L16 8L9 9L8 16L7 9L0 8L7 7L8 0Z" fill="#c16b4a" opacity="0.7" />
      </svg>
      <style>{`
        @keyframes meSparkle {
          0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.15) rotate(20deg); }
        }
      `}</style>
    </div>
  );
}

function PortfolioCard({
  item,
  tall,
  playfair,
  dmSans,
  cormorant,
  delay = 0,
}: {
  item: { title: string; category: string; img: string; tag: string };
  tall: boolean;
  playfair: string;
  dmSans: string;
  cormorant: string;
  delay?: number;
}) {
  return (
    <div
      className="me-reveal"
      data-delay={String(delay)}
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        position: "relative",
        aspectRatio: tall ? "4/5" : "4/3",
        cursor: "none",
      }}
      onMouseEnter={(e) => {
        const overlay = (e.currentTarget as HTMLElement).querySelector(".me-card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const overlay = (e.currentTarget as HTMLElement).querySelector(".me-card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
      }}
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
      />

      {/* Tag */}
      <div
        className={dmSans}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          background: "rgba(247,243,238,0.9)",
          color: "#c16b4a",
          fontSize: "0.65rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "2px",
          zIndex: 2,
        }}
      >
        {item.tag}
      </div>

      {/* Hover overlay */}
      <div
        className="me-card-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(44,31,20,0.75)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "28px",
          opacity: 0,
          transition: "opacity 0.35s ease",
          zIndex: 3,
        }}
      >
        <div
          className={playfair}
          style={{
            fontSize: "1.4rem",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#f7f3ee",
            marginBottom: "6px",
          }}
        >
          {item.title}
        </div>
        <div
          className={dmSans}
          style={{
            fontSize: "0.72rem",
            color: "rgba(247,243,238,0.55)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {item.category}
        </div>
        <span
          className={dmSans}
          style={{
            fontSize: "0.78rem",
            color: "#c16b4a",
            letterSpacing: "0.06em",
          }}
        >
          View project →
        </span>
      </div>
    </div>
  );
}
