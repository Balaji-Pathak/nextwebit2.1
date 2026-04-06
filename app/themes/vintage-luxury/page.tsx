"use client";

import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import Link from "next/link";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

const TYPEWRITER_PHRASES = [
  "website for my jewellery shop",
  "booking page for my clinic",
  "online store for my saree shop",
  "menu page for my dhaba",
];

const SERVICES = [
  {
    icon: "🏺",
    title: "Design & Build",
    desc: "Bespoke sites crafted around your brand, voice, and goals — not a template.",
    tag: "From ₹4,999",
  },
  {
    icon: "✍️",
    title: "Content & Copy",
    desc: "Warm, human-voiced copy in Hindi and English that turns visitors into customers.",
    tag: "Included",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Full online store in days. UPI, card, COD. Inventory, checkout, delivery — built to scale.",
    tag: "From ₹9,999",
  },
  {
    icon: "🔧",
    title: "Maintenance & Care",
    desc: "24/7 uptime monitoring, updates, security patches, and priority support.",
    tag: "₹499/mo",
  },
  {
    icon: "📍",
    title: "Google Presence",
    desc: "Google My Business setup, Maps listing, and local SEO so customers find you first.",
    tag: "From ₹1,499",
  },
  {
    icon: "📸",
    title: "Photography",
    desc: "Professional product and storefront photography to make your site look like a brand.",
    tag: "Custom",
  },
] as const;

const MARQUEE = [
  { g: "linear-gradient(135deg,#8B4513,#3d1c00)", name: "Rattan Jewellers", cat: "Jewellery · Jaipur" },
  { g: "linear-gradient(135deg,#1a0a00,#C9A84C)", name: "Mithaas Sweets", cat: "Sweet Shop · Jodhpur" },
  { g: "linear-gradient(135deg,#2d0000,#8B0000)", name: "Arora Fabrics", cat: "Saree Store · Ajmer" },
  { g: "linear-gradient(135deg,#0d1a00,#2d4a00)", name: "Meena Clinic", cat: "Clinic · Kota" },
  { g: "linear-gradient(135deg,#1a1a2e,#C9A84C)", name: "Haveli Dhaba", cat: "Restaurant · Udaipur" },
  { g: "linear-gradient(135deg,#2d1600,#8B6914)", name: "Surana Antiques", cat: "Heritage Store · Jaipur" },
  { g: "linear-gradient(135deg,#0a0a1a,#4a0080)", name: "Rajputana Motors", cat: "Auto · Bikaner" },
  { g: "linear-gradient(135deg,#1a0a0a,#C9A84C)", name: "Geetanjali Salon", cat: "Salon · Jaipur" },
] as const;

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-vl-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const d = el.getAttribute("data-vl-delay") ?? "0";
            el.style.transitionDelay = `${d}ms`;
            el.classList.add("vl-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function useCustomCursor(rootRef: RefObject<HTMLElement | null>) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });
  const inner = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const under = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const h = !!(under && root.contains(under) && under.closest("a, button"));
        if (h !== hoverRef.current) {
        hoverRef.current = h;
        outerRef.current?.classList.toggle("vl-cursor-ring--hover", h);
      }
    };

    const tick = () => {
      const o = outer.current;
      const i = inner.current;
      o.x += (target.current.x - o.x) * 0.12;
      o.y += (target.current.y - o.y) * 0.12;
      i.x += (target.current.x - i.x) * 0.38;
      i.y += (target.current.y - i.y) * 0.38;

      if (outerRef.current) {
        outerRef.current.style.left = `${o.x}px`;
        outerRef.current.style.top = `${o.y}px`;
      }
      if (innerRef.current) {
        innerRef.current.style.left = `${i.x}px`;
        innerRef.current.style.top = `${i.y}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [rootRef]);

  return { outerRef, innerRef };
}

function TypewriterLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const line = TYPEWRITER_PHRASES[phraseIndex];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIndex < line.length) {
        t = setTimeout(() => setCharIndex((c) => c + 1), 55);
      } else {
        t = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (charIndex > 0) {
      t = setTimeout(() => setCharIndex((c) => c - 1), 28);
    } else {
      t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length);
      }, 400);
    }
    return () => clearTimeout(t);
  }, [charIndex, deleting, line.length, phraseIndex]);

  const text = line.slice(0, charIndex);

  return (
    <span className="vl-font-body text-[clamp(1rem,2.5vw,1.15rem)] text-[var(--text)]">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-[#C9A84C]" aria-hidden>
        |
      </span>
    </span>
  );
}

export default function VintageLuxuryThemePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { outerRef, innerRef } = useCustomCursor(rootRef);
  useScrollReveal();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("vl-theme-page");
    return () => html.classList.remove("vl-theme-page");
  }, []);

  const fontVars = `${playfair.variable} ${dmSans.variable} ${dmMono.variable}`;

  return (
    <>
      <style>{`
        #vl-root {
          --bg: #080808;
          --bg2: #0f0f0f;
          --accent: #C9A84C;
          --accent2: #e2c074;
          --accent-dim: rgba(201,168,76,0.12);
          --text: #f0ece4;
          --muted: rgba(240,236,228,0.5);
          --glass-bg: rgba(15,15,15,0.55);
          --glass-border: rgba(255,255,255,0.08);
          --card-bg: rgba(18,18,18,0.85);
        }
        .vl-font-display { font-family: var(--font-playfair), ui-serif, Georgia, serif; }
        .vl-font-body { font-family: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif; }
        .vl-font-mono { font-family: var(--font-dm-mono), ui-monospace, monospace; }

        html.vl-theme-page {
          scrollbar-width: thin;
          scrollbar-color: rgba(201,168,76,0.25) transparent;
        }
        html.vl-theme-page::-webkit-scrollbar { width: 6px; }
        html.vl-theme-page::-webkit-scrollbar-track { background: transparent; }
        html.vl-theme-page::-webkit-scrollbar-thumb {
          background: rgba(201,168,76,0.25);
          border-radius: 3px;
        }

        @media (min-width: 768px) {
          #vl-root { cursor: none; }
        }

        .vl-cursor-ring {
          position: fixed; width: 36px; height: 36px; margin-left: -18px; margin-top: -18px;
          border: 1.5px solid #C9A84C; border-radius: 50%; pointer-events: none; z-index: 10002;
          transition: width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.25s ease;
        }
        .vl-cursor-ring--hover {
          width: 56px; height: 56px; margin-left: -28px; margin-top: -28px;
          background: rgba(201,168,76,0.12);
        }
        .vl-cursor-dot {
          position: fixed; width: 6px; height: 6px; margin-left: -3px; margin-top: -3px;
          background: #C9A84C; border-radius: 50%; pointer-events: none; z-index: 10002;
        }

        #vl-root::after {
          content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 9998; opacity: 0.6;
          background-image: ${NOISE_BG};
          background-repeat: repeat;
        }

        @keyframes vlHeroLine {
          from { opacity: 0; transform: translateY(60px) skewY(4deg); }
          to { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        .vl-hero-line { animation: vlHeroLine 0.85s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .vl-hero-line--1 { animation-delay: 0.1s; }
        .vl-hero-line--2 { animation-delay: 0.25s; }
        .vl-hero-line--3 { animation-delay: 0.4s; }

        @keyframes vlFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .vl-hero-sub { animation: vlFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.6s forwards; opacity: 0; }
        .vl-hero-cta { animation: vlFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.8s forwards; opacity: 0; }

        @keyframes vlChipTL { from { opacity: 0; transform: translate(-24px,-24px); } to { opacity: 1; transform: translate(0,0); } }
        @keyframes vlChipTR { from { opacity: 0; transform: translate(24px,-24px); } to { opacity: 1; transform: translate(0,0); } }
        @keyframes vlChipBL { from { opacity: 0; transform: translate(-24px, 24px); } to { opacity: 1; transform: translate(0,0); } }
        @keyframes vlChipBR { from { opacity: 0; transform: translate(24px, 24px); } to { opacity: 1; transform: translate(0,0); } }

        .vl-chip { animation-duration: 0.85s; animation-timing-function: cubic-bezier(0.16,1,0.3,1); animation-fill-mode: forwards; animation-delay: 1s; opacity: 0; }
        .vl-chip--tl { animation-name: vlChipTL; }
        .vl-chip--tr { animation-name: vlChipTR; }
        .vl-chip--bl { animation-name: vlChipBL; }
        .vl-chip--br { animation-name: vlChipBR; }

        @keyframes vlScrollLine {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .vl-scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, transparent, #C9A84C);
          animation: vlScrollLine 2s ease-in-out infinite;
        }

        @keyframes vlMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .vl-marquee-track { animation: vlMarquee 38s linear infinite; }
        .vl-marquee-wrap:hover .vl-marquee-track { animation-play-state: paused; }

        @keyframes vlFloat {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(12px,-10px); }
        }
        @keyframes vlFloat2 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-10px,14px); }
        }
        @keyframes vlFloat3 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(6px,8px); }
        }
        .vl-orb-1 { animation: vlFloat 14s ease-in-out infinite; }
        .vl-orb-2 { animation: vlFloat2 18s ease-in-out infinite; }
        .vl-orb-3 { animation: vlFloat3 12s ease-in-out infinite; }

        [data-vl-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        [data-vl-reveal].vl-visible {
          opacity: 1;
          transform: none;
        }

        .vl-step-num {
          background: linear-gradient(135deg, #C9A84C, #e2c074);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div
        id="vl-root"
        ref={rootRef}
        className={`relative min-h-screen ${fontVars}`}
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        <div ref={outerRef} className="vl-cursor-ring hidden md:block" aria-hidden />
        <div ref={innerRef} className="vl-cursor-dot hidden md:block" aria-hidden />

        <div className="relative z-[10000]">
          <Navbar />
        </div>

        <main className="vl-font-body">
          {/* SECTION 1 — HERO */}
          <section
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(201,168,76,0.06) 0%, transparent 70%), linear-gradient(170deg, #111 0%, #080808 40%, #0d0b08 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, transparent 40%, rgba(8,8,8,0.7) 100%)",
              }}
            />

            <div className="vl-chip vl-chip--tl vl-font-display absolute left-4 top-28 z-10 hidden max-w-[200px] rounded-2xl border border-[var(--glass-border)] p-[18px_24px] backdrop-blur-[18px] transition-all duration-300 lg:block" style={{ background: "var(--glass-bg)" }}>
              <p className="vl-font-mono text-[10px] tracking-widest text-[var(--muted)]">PROJECTS LIVE</p>
              <p className="mt-1 text-2xl font-bold text-[#C9A84C]">120+</p>
            </div>
            <div className="vl-chip vl-chip--tr vl-font-display absolute right-4 top-28 z-10 hidden max-w-[200px] rounded-2xl border border-[var(--glass-border)] p-[18px_24px] backdrop-blur-[18px] transition-all duration-300 lg:block hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]" style={{ background: "var(--glass-bg)" }}>
              <p className="vl-font-mono text-[10px] tracking-widest text-[var(--muted)]">AVG. TURNAROUND</p>
              <p className="mt-1 text-2xl font-bold text-[var(--text)]">
                5–7 <span className="text-sm font-normal text-[var(--muted)]">days</span>
              </p>
            </div>
            <div className="vl-chip vl-chip--bl vl-font-display absolute bottom-36 left-4 z-10 hidden max-w-[200px] rounded-2xl border border-[var(--glass-border)] p-[18px_24px] backdrop-blur-[18px] transition-all duration-300 lg:block hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]" style={{ background: "var(--glass-bg)" }}>
              <p className="vl-font-mono text-[10px] tracking-widest text-[var(--muted)]">TURNAROUND</p>
              <p className="mt-1 text-2xl font-bold text-[var(--text)]">
                5–7 <span className="text-sm font-normal text-[var(--muted)]">days</span>
              </p>
            </div>
            <div className="vl-chip vl-chip--br vl-font-display absolute bottom-36 right-4 z-10 hidden max-w-[200px] rounded-2xl border border-[var(--glass-border)] p-[18px_24px] backdrop-blur-[18px] transition-all duration-300 lg:block hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.12)]" style={{ background: "var(--glass-bg)" }}>
              <p className="vl-font-mono text-[10px] tracking-widest text-[var(--muted)]">CLIENT RATING</p>
              <p className="mt-1 text-2xl font-bold text-[#C9A84C]">
                4.9 <span className="text-sm">★</span>
              </p>
            </div>

            <div className="relative z-[1] mx-auto max-w-5xl text-center">
              <h1 className="vl-font-display font-black tracking-[-0.04em] text-[clamp(4.5rem,10vw,9rem)] leading-[0.92]">
                <span className="vl-hero-line vl-hero-line--1 block text-[var(--text)]">Your Shop.</span>
                <span className="vl-hero-line vl-hero-line--2 block italic text-[#C9A84C]">Your Legacy.</span>
                <span className="vl-hero-line vl-hero-line--3 block text-[var(--text)]">The Web.</span>
              </h1>
              <p className="vl-hero-sub mx-auto mt-8 max-w-xl font-light text-[var(--muted)] [font-size:clamp(1rem,2vw,1.2rem)]">
                We build websites that make decades-old businesses impossible to ignore online.
              </p>
              <div className="vl-hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-[#C9A84C] px-8 py-[13px] text-sm font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-[#e2c074] hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
                >
                  Start Your Project
                </Link>
                <a
                  href="#vl-work"
                  className="rounded-full border border-[rgba(255,255,255,0.08)] bg-transparent px-8 py-[13px] text-sm font-bold text-[var(--text)] transition-colors hover:border-[rgba(201,168,76,0.4)] hover:bg-[rgba(201,168,76,0.12)]"
                >
                  View Our Work ↓
                </a>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center gap-2">
              <span className="vl-font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">SCROLL</span>
              <div className="vl-scroll-line" />
            </div>
          </section>

          {/* SECTION 2 — AI SEARCH */}
          <section
            className="relative px-6 py-[120px]"
            style={{
              backgroundColor: "var(--bg2)",
              boxShadow:
                "inset 0 80px 80px -80px rgba(8,8,8,0.9), inset 0 -80px 80px -80px rgba(8,8,8,0.9)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24"
              style={{
                background: "linear-gradient(to bottom, var(--bg), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background: "linear-gradient(to top, var(--bg), transparent)",
              }}
            />

            <div className="relative z-[1] mx-auto max-w-[760px] text-center" data-vl-reveal>
              <p className="vl-font-mono text-xs font-normal uppercase tracking-[0.18em] text-[#C9A84C]">
                POWERED BY AI
              </p>
              <h2 className="vl-font-display mt-4 font-bold text-[clamp(2rem,4vw,3.5rem)] text-[var(--text)]">
                What does your business need?
              </h2>
              <div
                className="mt-8 flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] px-6 py-[18px] text-left"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-[#C9A84C]" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <div className="min-h-[1.5rem] flex-1">
                  <TypewriterLine />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Jewellery Shop", "Sweet Shop", "Heritage Store", "Clinic", "Restaurant"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="rounded-full border border-[var(--glass-border)] px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3 — SERVICES */}
          <section className="mx-auto max-w-[1280px] px-6 py-[120px]">
            <div className="text-center" data-vl-reveal>
              <p className="vl-font-mono text-xs uppercase tracking-widest text-[#C9A84C]">WHAT WE DO</p>
              <h2 className="vl-font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--text)]">
                Full-stack presence,
                <br />
                <span className="italic text-[#C9A84C]">zero complexity</span>
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  data-vl-reveal
                  data-vl-delay={String(i * 80)}
                  className="group relative overflow-hidden rounded-[14px] border border-[var(--glass-border)] p-8 backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
                  style={{ background: "var(--card-bg)" }}
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)" }}
                  />
                  <span
                    className="relative text-3xl drop-shadow-[0_0_8px_rgba(201,168,76,0.4)]"
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h3 className="vl-font-display relative mt-4 text-xl font-bold text-[var(--text)]">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-sm font-normal leading-relaxed text-[var(--muted)]">
                    {s.desc}
                  </p>
                  <span className="relative mt-6 inline-block rounded-full border border-[#C9A84C] px-3 py-1 text-xs font-semibold text-[#C9A84C]">
                    {s.tag}
                  </span>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 4 — MARQUEE */}
          <section id="vl-work" className="overflow-hidden py-[120px]">
            <div className="px-6 text-center" data-vl-reveal>
              <p className="vl-font-mono text-xs uppercase tracking-widest text-[#C9A84C]">RECENT WORK</p>
              <h2 className="vl-font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--text)]">
                Built for the <span className="italic text-[#C9A84C]">real world</span>
              </h2>
            </div>
            <div className="vl-marquee-wrap relative mt-14">
              <div className="vl-marquee-track flex w-max gap-5">
                {[...MARQUEE, ...MARQUEE].map((m, idx) => (
                  <div
                    key={`${m.name}-${idx}`}
                    className="w-[280px] shrink-0 overflow-hidden rounded-[14px] border border-[var(--glass-border)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                    style={{ background: "var(--card-bg)" }}
                  >
                    <div className="h-[180px] w-full" style={{ background: m.g }} />
                    <div className="px-5 py-4">
                      <p className="font-bold text-[var(--text)]">{m.name}</p>
                      <p className="mt-1 text-xs text-[var(--muted)]">{m.cat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5 — PROCESS */}
          <section className="mx-auto max-w-[1000px] px-6 py-[120px]">
            <div className="text-center" data-vl-reveal>
              <p className="vl-font-mono text-xs uppercase tracking-widest text-[#C9A84C]">HOW IT WORKS</p>
              <h2 className="vl-font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--text)]">
                Three steps to <span className="italic text-[#C9A84C]">live</span>
              </h2>
            </div>
            <div className="mt-16 space-y-0">
              {[
                {
                  n: "01",
                  t: "Discovery Visit",
                  p: "We come to your shop. We meet you, understand your business, your customers, and what makes you different.",
                },
                {
                  n: "02",
                  t: "Design & Build",
                  p: "We present concepts in 48 hours. You approve, we build — live in 5–7 working days.",
                },
                {
                  n: "03",
                  t: "Launch & Grow",
                  p: "Go live with full SEO setup and Google listing. We stay on as your growth partner on WhatsApp.",
                },
              ].map((step, i) => (
                <div key={step.n} className="grid grid-cols-[80px_1px_1fr] gap-0 md:grid-cols-[80px_1px_1fr]">
                  <div
                    className="vl-font-display flex items-start justify-center pt-2 text-[3.5rem] font-black leading-none vl-step-num"
                    data-vl-reveal
                    data-vl-delay={String(i * 150)}
                  >
                    {step.n}
                  </div>
                  <div
                    className="mx-auto w-px self-stretch"
                    style={{
                      background: "linear-gradient(to bottom, #C9A84C, transparent)",
                    }}
                  />
                  <div className="pb-14 pl-6 md:pl-10" data-vl-reveal data-vl-delay={String(i * 150 + 50)}>
                    <h3 className="vl-font-display text-[1.8rem] font-bold text-[var(--text)]">{step.t}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{step.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — CTA */}
          <section
            className="relative overflow-hidden px-6 py-[140px] text-center"
            style={{ backgroundColor: "var(--bg2)" }}
          >
            <div
              className="vl-orb-1 pointer-events-none absolute left-[-8%] top-[-10%] h-[500px] w-[500px] rounded-full blur-[80px]"
              style={{ background: "rgba(201,168,76,0.07)" }}
            />
            <div
              className="vl-orb-2 pointer-events-none absolute bottom-[-12%] right-[-6%] h-[400px] w-[400px] rounded-full blur-[80px]"
              style={{ background: "rgba(201,168,76,0.05)" }}
            />
            <div
              className="vl-orb-3 pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
              style={{ background: "rgba(201,168,76,0.04)" }}
            />

            <div className="relative z-[2] mx-auto max-w-3xl" data-vl-reveal>
              <h2 className="vl-font-display text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] text-[var(--text)]">
                Ready to stand out{" "}
                <span className="italic text-[#C9A84C]">in your city?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg font-light text-[var(--muted)]">
                No templates. No agency bloat. Just you, your story, and the web.
              </p>
              <Link
                href="/#contact"
                className="mt-10 inline-block rounded-full bg-[#C9A84C] px-11 py-4 text-lg font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-[#e2c074] hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)]"
              >
                Book Your Free Discovery Call
              </Link>
            </div>
          </section>
        </main>

        <div className="relative z-[10000]">
          <Footer />
        </div>
      </div>
    </>
  );
}
