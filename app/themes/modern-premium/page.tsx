"use client";

import { useEffect, useRef, type RefObject } from "react";
import Image from "next/image";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import MPNavbar from "./MPNavbar";
import MPFooter from "./MPFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weights: [300, 400, 500],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: 400,
  variable: "--font-dm-mono",
  display: "swap",
});

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

const COLLECTIONS = [
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    name: "Evening Wear",
    count: "12 items",
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    name: "Casual Chic",
    count: "8 items",
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    name: "Accessories",
    count: "15 items",
  },
];

const SERVICES = [
  {
    icon: "🎨",
    title: "Design & Build",
    desc: "Custom websites tailored for fashion brands and boutiques.",
    tag: "From ₹4,999",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Full online stores with secure payments and inventory management.",
    tag: "From ₹9,999",
  },
  {
    icon: "🔍",
    title: "Google Presence",
    desc: "SEO optimization to dominate local search results.",
    tag: "From ₹1,499",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Ongoing support and updates to keep your site perfect.",
    tag: "₹499/mo",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Visit",
    desc: "We visit your boutique to understand your brand, customers, and vision.",
  },
  {
    number: "02",
    title: "Design & Build",
    desc: "Custom design presented in 48 hours, live website in 5-7 days.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    desc: "Full SEO setup, WhatsApp integration, and growth strategies.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-mp-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const d = el.getAttribute("data-mp-delay") ?? "0";
            el.style.transitionDelay = `${d}ms`;
            el.classList.add("mp-visible");
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
      const under = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      const h = !!(under && root.contains(under) && under.closest("a, button"));
      if (h !== hoverRef.current) {
        hoverRef.current = h;
        outerRef.current?.classList.toggle("mp-cursor-ring--hover", h);
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

export default function ModernPremiumThemePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { outerRef, innerRef } = useCustomCursor(rootRef);
  useScrollReveal();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("mp-theme-page");
    return () => html.classList.remove("mp-theme-page");
  }, []);

  const fontVars = `${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`;

  return (
    <>
      <style>{`
        #mp-root {
          --bg: #0f2419;
          --bg2: #162d20;
          --bg3: #1a3a2a;
          --accent: #c9a96e;
          --cream: #f5ede0;
          --cream-muted: rgba(245,237,224,0.55);
          --cream-dim: rgba(245,237,224,0.15);
          --text: #f5ede0;
          --muted: rgba(245,237,224,0.55);
          --glass-border: rgba(245,237,224,0.1);
          --btn-bg: #1a3a2a;
          --btn-text: #f5ede0;
        }
        .mp-font-display { font-family: var(--font-cormorant), ui-serif, Georgia, serif; }
        .mp-font-body { font-family: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif; }
        .mp-font-mono { font-family: var(--font-dm-mono), ui-monospace, monospace; }

        html.mp-theme-page {
          scrollbar-width: thin;
          scrollbar-color: rgba(201,169,110,0.3) transparent;
        }
        html.mp-theme-page::-webkit-scrollbar { width: 6px; }
        html.mp-theme-page::-webkit-scrollbar-track { background: transparent; }
        html.mp-theme-page::-webkit-scrollbar-thumb {
          background: rgba(201,169,110,0.3);
          border-radius: 3px;
        }

        @media (min-width: 768px) {
          #mp-root { cursor: none; }
        }

        .mp-cursor-ring {
          position: fixed; width: 32px; height: 32px; margin-left: -16px; margin-top: -16px;
          border: 1.5px solid #c9a96e; border-radius: 50%; pointer-events: none; z-index: 10002;
          transition: width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.25s ease;
        }
        .mp-cursor-ring--hover {
          width: 52px; height: 52px; margin-left: -26px; margin-top: -26px;
          background: rgba(201,169,110,0.12);
        }
        .mp-cursor-dot {
          position: fixed; width: 5px; height: 5px; margin-left: -2.5px; margin-top: -2.5px;
          background: #c9a96e; border-radius: 50%; pointer-events: none; z-index: 10002;
        }

        #mp-root::after {
          content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 9998; opacity: 0.5;
          background-image: ${NOISE_BG};
          background-repeat: repeat;
        }

        .mp-reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .mp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mp-star {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 14px solid #c9a96e;
          position: relative;
        }
        .mp-star::after {
          content: '';
          position: absolute;
          top: 5px;
          left: -8px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 14px solid #c9a96e;
        }

        .mp-bracket {
          position: absolute;
          width: 40px;
          height: 120px;
          border: 1px solid rgba(245,237,224,0.2);
          border-radius: 20px;
        }
        .mp-bracket-left {
          left: 24px;
          top: 50%;
          transform: translateY(-50%);
          border-right: none;
          border-radius: 20px 0 0 20px;
        }
        .mp-bracket-right {
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          border-left: none;
          border-radius: 0 20px 20px 0;
        }

        .mp-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, #c9a96e);
          animation: mpScrollLine 2s ease-in-out infinite;
        }
        @keyframes mpScrollLine {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
      `}</style>

      <div id="mp-root" ref={rootRef} className={`${fontVars} relative min-h-screen`}>
        <MPNavbar />

        {/* Custom Cursor */}
        <div ref={outerRef} className="mp-cursor-ring"></div>
        <div ref={innerRef} className="mp-cursor-dot"></div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0f2419', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f5ede0\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <span className={`${dmMono.className} text-[#c9a96e] text-[0.7rem] tracking-[0.2em] uppercase`}>
                  PREMIUM COLLECTION 2025
                </span>
              </div>
              <h1 className={`${cormorant.className} text-[#f5ede0] leading-[0.9] mb-4`}>
                <span className="block text-[clamp(4rem,8vw,7.5rem)] font-semibold italic" style={{ letterSpacing: '-0.02em' }}>
                  Unique
                </span>
                <span className="block text-[clamp(4rem,8vw,7.5rem)] font-normal" style={{ letterSpacing: '-0.02em' }}>
                  fashion
                </span>
                <span className="block text-[clamp(4rem,8vw,7.5rem)] italic text-[#c9a96e]" style={{ letterSpacing: '-0.02em' }}>
                  design
                </span>
              </h1>
              <p className={`${dmSans.className} text-[rgba(245,237,224,0.55)] text-[0.95rem] leading-[1.8] max-w-[360px] mb-6`}>
                We craft bespoke digital experiences for premium fashion brands and boutiques that demand the extraordinary.
              </p>
              <button className={`${dmSans.className} bg-[#1a3a2a] border border-[rgba(201,169,110,0.4)] text-[#f5ede0] px-8 py-3 rounded text-[0.9rem] hover:bg-[rgba(201,169,110,0.15)] hover:border-[#c9a96e] transition-all`}>
                Shop now!
              </button>
              <div className="absolute bottom-[-40px] left-0 flex gap-4">
                <div className="mp-star" style={{ width: '16px', height: '16px' }}></div>
                <div className="mp-star" style={{ width: '10px', height: '10px' }}></div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#1a3a2a] translate-x-2 translate-y-2 rounded-[16px_16px_60px_16px]"></div>
                <div className="relative rounded-[16px_16px_60px_16px] overflow-hidden" style={{ width: '100%', maxWidth: '380px', aspectRatio: '3/4' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                    alt="Fashion model"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-[rgba(245,237,224,0.55)] text-xs leading-tight" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(90deg)' }}>
                  <span className={`${dmMono.className}`}>Our best designers working for the best designs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Brackets */}
          <div className="mp-bracket mp-bracket-left"></div>
          <div className="mp-bracket mp-bracket-right"></div>

          {/* Scroll Cue */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <span className={`${dmMono.className} text-[#f5ede0] text-xs tracking-widest`}>SCROLL</span>
            <div className="mp-scroll-line"></div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-24 px-6" style={{ backgroundColor: '#162d20' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-mp-reveal>
              <div className="mb-4">
                <span className={`${dmMono.className} text-[#c9a96e] text-[0.7rem] tracking-[0.2em] uppercase`}>
                  CURATED FOR YOU
                </span>
              </div>
              <h2 className={`${cormorant.className} text-[#f5ede0] text-[clamp(2.5rem,5vw,4rem)] font-semibold italic leading-tight`}>
                Our Collections
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COLLECTIONS.map((collection, index) => (
                <div
                  key={index}
                  className="bg-[#1a3a2a] border border-[rgba(245,237,224,0.08)] rounded-lg overflow-hidden hover:border-[rgba(201,169,110,0.3)] hover:-translate-y-1 transition-all duration-300"
                  data-mp-reveal
                  data-mp-delay={index * 100}
                >
                  <div className="h-80 relative">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className={`${cormorant.className} text-[#f5ede0] text-[1.3rem] italic mb-1`}>
                      {collection.name}
                    </h3>
                    <span className={`${dmMono.className} text-[#c9a96e] text-xs uppercase tracking-wide mb-3 block`}>
                      {collection.count}
                    </span>
                    <a href="#" className="text-[rgba(245,237,224,0.55)] hover:text-[#c9a96e] transition-colors text-sm">
                      Explore →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6" style={{ backgroundColor: '#0f2419' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-mp-reveal>
              <div className="mb-4">
                <span className={`${dmMono.className} text-[#c9a96e] text-[0.7rem] tracking-[0.2em] uppercase`}>
                  WHAT WE BUILD
                </span>
              </div>
              <h2 className={`${cormorant.className} text-[#f5ede0] text-[clamp(2.5rem,5vw,4rem)] font-semibold italic leading-tight`}>
                Full-stack presence,<br />
                <span className="text-[#c9a96e]">zero complexity</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#162d20] border border-[rgba(245,237,224,0.07)] rounded-xl p-6 hover:border-[rgba(201,169,110,0.2)] transition-colors"
                  data-mp-reveal
                  data-mp-delay={index * 100}
                >
                  <div className="text-2xl mb-4">{service.icon}</div>
                  <h3 className={`${cormorant.className} text-[#f5ede0] text-[1.4rem] mb-2`}>
                    {service.title}
                  </h3>
                  <p className={`${dmSans.className} text-[rgba(245,237,224,0.55)] text-[0.875rem] leading-[1.6] mb-4`}>
                    {service.desc}
                  </p>
                  <div className="border border-[rgba(201,169,110,0.3)] rounded px-2 py-1 inline-block">
                    <span className={`${dmMono.className} text-[#c9a96e] text-xs`}>
                      {service.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 max-w-4xl mx-auto" style={{ backgroundColor: '#162d20' }}>
          <div className="text-center mb-16" data-mp-reveal>
            <div className="mb-4">
              <span className={`${dmMono.className} text-[#c9a96e] text-[0.7rem] tracking-[0.2em] uppercase`}>
                OUR PROCESS
              </span>
            </div>
            <h2 className={`${cormorant.className} text-[#f5ede0] text-[clamp(2.5rem,5vw,4rem)] font-semibold italic leading-tight`}>
              Three steps to <span className="text-[#c9a96e]">live</span>
            </h2>
          </div>
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-[80px_1px_1fr] gap-6 items-start"
                data-mp-reveal
                data-mp-delay={index * 200}
              >
                <div className={`${cormorant.className} text-[#c9a96e] text-[4rem] font-bold leading-none`}>
                  {step.number}
                </div>
                <div className="h-full w-px bg-gradient-to-b from-[#c9a96e] to-transparent"></div>
                <div>
                  <h3 className={`${cormorant.className} text-[#f5ede0] text-[1.8rem] mb-2`}>
                    {step.title}
                  </h3>
                  <p className={`${dmSans.className} text-[rgba(245,237,224,0.55)] leading-[1.6]`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#0f2419' }}>
          {/* Blurred Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(201,169,110,0.1)] rounded-full blur-[80px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(201,169,110,0.1)] rounded-full blur-[80px]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className={`${cormorant.className} text-[#f5ede0] text-[clamp(3rem,7vw,6rem)] font-bold italic leading-tight mb-6`}>
              Ready to stand out<br />
              <span className="text-[#c9a96e]">in your city?</span>
            </h2>
            <p className={`${dmSans.className} text-[rgba(245,237,224,0.55)] text-lg leading-[1.6] mb-8 max-w-2xl mx-auto`} style={{ fontWeight: 300 }}>
              Join premium fashion brands who trust us to create their digital presence.
            </p>
            <button className={`${dmSans.className} bg-[#c9a96e] text-[#0f2419] px-11 py-4 rounded text-[1.05rem] font-bold hover:bg-[#e2c074] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,169,110,0.35)] transition-all`}>
              Get Started Today
            </button>
          </div>
        </section>

        <MPFooter />
      </div>
    </>
  );
}
