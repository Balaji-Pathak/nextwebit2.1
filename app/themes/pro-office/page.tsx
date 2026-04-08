"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import PONavbar from "./PONavbar";
import POFooter from "./POFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const serviceCards = [
  {
    icon: "\u{1F4CA}",
    title: "Business Strategy",
    text: "We analyse your market, build growth plans and help you outpace competition.",
    tag: "Most Popular",
  },
  {
    icon: "\u{1F4BC}",
    title: "GST & Compliance",
    text: "Complete GST filing, ITR, ROC compliance and legal documentation handled.",
    tag: "For CAs",
  },
  {
    icon: "\u{1F5A5}",
    title: "Website & Digital",
    text: "Professional websites, Google presence and social media setup for your firm.",
    tag: "From \u20B94,999",
  },
  {
    icon: "\u{1F4C8}",
    title: "HR & Recruitment",
    text: "Hire the right people. We handle JD writing, screening and onboarding.",
    tag: "B2B",
  },
  {
    icon: "\u{1F3AF}",
    title: "Corporate Training",
    text: "Leadership, sales and communication workshops for your entire team.",
    tag: "On-site",
  },
  {
    icon: "\u{1F91D}",
    title: "Business Partnerships",
    text: "We connect you with vendors, investors and distribution partners.",
    tag: "Network",
  },
];

const steps = [
  {
    title: "Discovery Call",
    text: "30-min free call where we understand your business goals",
  },
  {
    title: "Custom Strategy",
    text: "We build a tailored plan for your specific industry and budget",
  },
  {
    title: "Execution",
    text: "Our team executes with weekly updates and transparent reporting",
  },
  {
    title: "Scale & Grow",
    text: "Ongoing support to ensure sustained growth and measurable ROI",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "\u20B915,000/month",
    featured: false,
    button: "Get Starter",
    buttonStyle: "ghost",
    features: [
      "GST Filing",
      "Basic ITR",
      "Email Support",
      "1 Consultation/month",
    ],
  },
  {
    name: "Professional",
    price: "\u20B935,000/month",
    featured: true,
    button: "Choose Professional",
    buttonStyle: "light",
    features: [
      "Everything in Starter",
      "Website Setup",
      "HR Support",
      "4 Consultations",
      "Priority WhatsApp",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    featured: false,
    button: "Contact Sales",
    buttonStyle: "filled",
    features: [
      "Everything +",
      "Dedicated Account Manager",
      "Custom Legal",
      "Board Advisory",
      "Unlimited calls",
    ],
  },
];

const team = [
  { initials: "RK", name: "Rajesh Kumar", role: "Founder & Strategy Head" },
  { initials: "PS", name: "Priya Sharma", role: "CA & Compliance Expert" },
  { initials: "AV", name: "Amit Verma", role: "Digital Growth Lead" },
  { initials: "NJ", name: "Neha Joshi", role: "HR & Recruitment Head" },
];

const testimonials = [
  {
    initials: "RA",
    name: "Ramesh Agarwal",
    type: "CA Office, Jaipur",
    quote:
      "NextWebIt ne hamare CA firm ka website banaya aur GST compliance system set up kiya. Ab paperwork 60% kam ho gayi hai!",
  },
  {
    initials: "SM",
    name: "Sunita Mehta",
    type: "HR Consultancy, Delhi",
    quote:
      "The training workshop was exceptional. Our sales team performance went up by 40% in just 3 months.",
  },
  {
    initials: "VS",
    name: "Vikram Singhania",
    type: "Import Export, Mumbai",
    quote:
      "From website to WhatsApp automation - they handled everything. Our inquiry rate doubled!",
  },
];

const faqItems = [
  {
    q: "How quickly can you build my website?",
    a: "We deliver most business websites within 5-7 working days after you approve the design.",
  },
  {
    q: "Do you come to our office?",
    a: "Yes! We visit your office for the initial consultation anywhere in Rajasthan at no charge.",
  },
  {
    q: "What is included in the monthly plan?",
    a: "GST filing, compliance support, website maintenance, and a dedicated account manager.",
  },
  {
    q: "Can you handle GST for multiple branches?",
    a: "Absolutely. Our CA team handles multi-location GST, TDS and annual filing.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy after the first month, we refund in full.",
  },
  {
    q: "How do I get started?",
    a: "Simply click Get Started or WhatsApp us. We'll schedule a free 30-min discovery call within 24 hours.",
  },
];

const trustTypes = [
  "CA Office",
  "Law Firm",
  "HR Consultancy",
  "Corporate Trainer",
  "IT Company",
  "Import Export",
  "Manufacturing",
  "Real Estate",
];

type CountState = {
  clients: number;
  revenue: number;
  years: number;
  rating: number;
};

export default function ProOfficePage() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const verticalRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const countersStarted = useRef(false);

  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [counts, setCounts] = useState<CountState>({
    clients: 0,
    revenue: 0,
    years: 0,
    rating: 0,
  });

  useEffect(() => {
    const h = horizontalRef.current;
    const v = verticalRef.current;
    if (!h || !v) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;

    const setExpanded = (expanded: boolean) => {
      h.style.width = expanded ? "28px" : "20px";
      v.style.height = expanded ? "28px" : "20px";
      h.style.background = expanded ? "#6366F1" : "#3B3DB8";
      v.style.background = expanded ? "#6366F1" : "#3B3DB8";
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      h.style.left = `${currentX}px`;
      h.style.top = `${currentY}px`;
      v.style.left = `${currentX}px`;
      v.style.top = `${currentY}px`;
      raf = window.requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest("a,button")) {
        setExpanded(true);
      }
    };

    const onOut = (event: MouseEvent) => {
      const from = (event.target as Element | null)?.closest("a,button");
      const to = (event.relatedTarget as Element | null)?.closest("a,button");
      if (from && !to) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    raf = window.requestAnimationFrame(render);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".po-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("po-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const activeIntervals: number[] = [];

    const animateCount = (
      key: keyof CountState,
      end: number,
      durationMs: number,
      delayMs = 0
    ) => {
      const totalSteps = Math.max(24, Math.floor(durationMs / 30));
      const increment = end / totalSteps;
      let current = 0;
      let steps = 0;

      const timeoutId = window.setTimeout(() => {
        const intervalId = window.setInterval(() => {
          steps += 1;
          current += increment;
          const next = steps >= totalSteps ? end : Math.round(current);
          setCounts((prev) => ({ ...prev, [key]: next }));
          if (steps >= totalSteps) {
            window.clearInterval(intervalId);
          }
        }, Math.max(16, Math.floor(durationMs / totalSteps)));

        activeIntervals.push(intervalId);
      }, delayMs);

      activeIntervals.push(timeoutId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            animateCount("clients", 500, 1400, 0);
            animateCount("revenue", 12, 1300, 100);
            animateCount("years", 12, 1200, 200);
            animateCount("rating", 49, 1500, 300);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      activeIntervals.forEach((id) => {
        window.clearInterval(id);
        window.clearTimeout(id);
      });
    };
  }, []);

  return (
    <div
      className={inter.className}
      style={{
        background: "#F8F9FF",
        cursor: "none",
        color: "#1A1A2E",
        overflowX: "hidden",
      }}
    >
      <PONavbar />

      <div
        ref={horizontalRef}
        style={{
          position: "fixed",
          width: 20,
          height: 1.5,
          background: "#3B3DB8",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, background 0.2s ease",
        }}
      />
      <div
        ref={verticalRef}
        style={{
          position: "fixed",
          width: 1.5,
          height: 20,
          background: "#3B3DB8",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "height 0.2s ease, background 0.2s ease",
        }}
      />

      <main>
        <section
          style={{
            position: "relative",
            paddingTop: 120,
            paddingBottom: 120,
            background:
              "linear-gradient(135deg, #ffffff 0%, #F8F9FF 50%, #EEF0FF 100%)",
            overflow: "hidden",
          }}
        >
          <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div className="po-reveal">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 999,
                  padding: "5px 14px",
                  border: "1px solid rgba(59,61,184,0.2)",
                  background: "#EEF0FF",
                  color: "#3B3DB8",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                #1 Rated Business Consultants in Jaipur
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  fontWeight: 800,
                  color: "#1A1A2E",
                }}
              >
                <span className="block">GROW YOUR</span>
                <span className="block" style={{ color: "#3B3DB8" }}>
                  BUSINESS
                </span>
                <span className="block">WITH US</span>
              </h1>

              <p
                style={{
                  marginTop: 20,
                  marginBottom: 28,
                  maxWidth: 420,
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#4A4A6A",
                }}
              >
                We help Indian businesses scale with strategy, technology and
                relentless execution. From CA offices to corporate training firms -
                we make growth happen.
              </p>

              <div className="mb-7 flex flex-wrap gap-3">
                <Link
                  href="#"
                  style={{
                    padding: "10px 22px",
                    borderRadius: 999,
                    background: "#3B3DB8",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2B2D8A";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(59,61,184,0.26)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3B3DB8";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  style={{
                    padding: "10px 22px",
                    borderRadius: 999,
                    border: "1px solid rgba(59,61,184,0.35)",
                    color: "#3B3DB8",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,61,184,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Watch Demo {"\u2192"}
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {["500+ Clients", "12 Years", "4.9\u2605 Rating"].map((badge) => (
                  <div
                    key={badge}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#4A4A6A",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ color: "#22C55E" }}>{"\u2713"}</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="po-reveal" style={{ transitionDelay: "90ms" }}>
              <div
                style={{
                  borderRadius: 24,
                  minHeight: 380,
                  background: "linear-gradient(135deg, #3B3DB8, #6366F1)",
                  position: "relative",
                  padding: 40,
                  boxShadow: "0 24px 60px rgba(59,61,184,0.26)",
                  overflow: "hidden",
                }}
              >
                <svg
                  viewBox="0 0 500 120"
                  style={{
                    position: "absolute",
                    left: 24,
                    right: 24,
                    bottom: 24,
                    width: "calc(100% - 48px)",
                    height: 100,
                    opacity: 0.58,
                  }}
                >
                  <path
                    d="M0 90 C60 70, 110 76, 160 58 C210 40, 260 54, 320 32 C370 14, 430 26, 500 10"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <div
                  className="po-float po-float-1"
                  style={{
                    position: "absolute",
                    top: 34,
                    left: 28,
                    background: "#FFFFFF",
                    borderRadius: 14,
                    padding: "16px 18px",
                    boxShadow: "0 8px 24px rgba(26,26,46,0.12)",
                    minWidth: 170,
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#8888AA",
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    Revenue Growth
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "#3B3DB8",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    +312%
                  </p>
                </div>

                <div
                  className="po-float po-float-2"
                  style={{
                    position: "absolute",
                    top: 120,
                    right: 30,
                    background: "#FFFFFF",
                    borderRadius: 14,
                    padding: "16px 18px",
                    boxShadow: "0 8px 24px rgba(26,26,46,0.12)",
                    minWidth: 160,
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#8888AA",
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    Active Clients
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "#3B3DB8",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    500+
                  </p>
                </div>

                <div
                  className="po-float po-float-3"
                  style={{
                    position: "absolute",
                    right: 56,
                    bottom: 86,
                    background: "#FFFFFF",
                    borderRadius: 14,
                    padding: "16px 18px",
                    boxShadow: "0 8px 24px rgba(26,26,46,0.12)",
                    minWidth: 160,
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#8888AA",
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    Projects Done
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      color: "#3B3DB8",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    1,200+
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              style={{ width: "100%", height: 200, display: "block" }}
            >
              <path
                d="M0,160 C360,200 720,80 1440,140 L1440,200 L0,200 Z"
                fill="#3B3DB8"
                opacity="0.08"
              />
              <path
                d="M0,180 C400,140 800,200 1440,160 L1440,200 L0,200 Z"
                fill="#3B3DB8"
                opacity="0.05"
              />
            </svg>
          </div>
        </section>

        <section
          style={{
            background: "#3B3DB8",
            padding: "14px 0",
            overflow: "hidden",
          }}
        >
          <div className="po-marquee-track">
            {[...trustTypes, ...trustTypes].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                style={{
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {item} <span style={{ margin: "0 14px", opacity: 0.9 }}>{"\u2726"}</span>
              </span>
            ))}
          </div>
        </section>

        <section style={{ background: "#F8F9FF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="po-reveal mx-auto mb-14 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                WHAT WE DO
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Services built for{" "}
                <span style={{ color: "#3B3DB8" }}>Indian businesses</span>
              </h2>
              <p
                style={{
                  marginTop: 12,
                  color: "#8888AA",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                Full-stack growth support for firms that want consistency,
                compliance and scale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card, idx) => (
                <article
                  key={card.title}
                  className="po-reveal"
                  style={{
                    transitionDelay: `${idx * 70}ms`,
                    background: "#FFFFFF",
                    border: "1px solid rgba(59,61,184,0.1)",
                    borderTop: "3px solid #3B3DB8",
                    borderRadius: 16,
                    padding: "32px 28px",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(59,61,184,0.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderTopColor = "#6366F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderTopColor = "#3B3DB8";
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.6rem",
                      marginBottom: 16,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      margin: 0,
                      color: "#1A1A2E",
                      marginBottom: 10,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                      color: "#4A4A6A",
                      marginBottom: 16,
                    }}
                  >
                    {card.text}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      borderRadius: 999,
                      padding: "5px 11px",
                      background: "#EEF0FF",
                      color: "#3B3DB8",
                      fontSize: "0.73rem",
                      fontWeight: 600,
                    }}
                  >
                    {card.tag}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="po-reveal mx-auto mb-16 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                HOW IT WORKS
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                }}
              >
                From first call to{" "}
                <span style={{ color: "#3B3DB8" }}>real results</span>
              </h2>
            </div>

            <div className="relative grid grid-cols-1 gap-7 md:grid-cols-4">
              <div
                className="hidden md:block"
                style={{
                  position: "absolute",
                  left: "13%",
                  right: "13%",
                  top: 24,
                  borderTop: "2px dashed rgba(59,61,184,0.25)",
                  zIndex: 0,
                }}
              />

              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="po-reveal relative z-[1] text-center md:text-left"
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "2px solid #3B3DB8",
                      background: "#EEF0FF",
                      color: "#3B3DB8",
                      fontSize: "1rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                    className="md:mx-0"
                  >
                    {idx + 1}
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: 8,
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#1A1A2E",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: "#8888AA",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          ref={statsRef}
          style={{
            background: "linear-gradient(135deg, #3B3DB8, #2B2D8A)",
            padding: "72px 24px",
          }}
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: `${counts.clients}+`,
                label: "Satisfied Clients",
              },
              {
                value: `\u20B9${counts.revenue}Cr+`,
                label: "Revenue Generated for Clients",
              },
              {
                value: `${counts.years}`,
                label: "Years of Experience",
              },
              {
                value: `${(counts.rating / 10).toFixed(1)}\u2605`,
                label: "Average Client Rating",
              },
            ].map((item, idx) => (
              <div
                key={item.label}
                className="po-reveal po-stat-item px-5 py-4 text-center"
                style={{
                  borderRight:
                    idx !== 3 ? "1px solid rgba(255,255,255,0.18)" : "none",
                  transitionDelay: `${idx * 70}ms`,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 0,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.85rem",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#F8F9FF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="po-reveal mx-auto mb-14 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                TRANSPARENT PRICING
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                }}
              >
                Simple plans,{" "}
                <span style={{ color: "#3B3DB8" }}>no hidden fees</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricing.map((plan, idx) => (
                <article
                  key={plan.name}
                  className="po-reveal relative"
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                    borderRadius: 20,
                    padding: "36px 28px",
                    border: plan.featured
                      ? "none"
                      : plan.name === "Enterprise"
                        ? "2px solid #3B3DB8"
                        : "1px solid rgba(59,61,184,0.15)",
                    background: plan.featured ? "#3B3DB8" : "#FFFFFF",
                    color: plan.featured ? "#FFFFFF" : "#1A1A2E",
                  }}
                >
                  {plan.featured && (
                    <span
                      style={{
                        position: "absolute",
                        right: 16,
                        top: 16,
                        borderRadius: 999,
                        background: "#FFFFFF",
                        color: "#3B3DB8",
                        padding: "5px 10px",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                      }}
                    >
                      Most Popular
                    </span>
                  )}

                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    {plan.name}
                  </p>
                  <p
                    style={{
                      marginTop: 10,
                      marginBottom: 20,
                      fontSize: "2rem",
                      lineHeight: 1,
                      fontWeight: 800,
                    }}
                  >
                    {plan.price}
                  </p>

                  <ul className="mb-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          fontSize: "0.9rem",
                          color: plan.featured
                            ? "rgba(255,255,255,0.9)"
                            : "#4A4A6A",
                        }}
                      >
                        {"\u2713"} {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    style={{
                      width: "100%",
                      borderRadius: 999,
                      padding: "11px 14px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      border:
                        plan.buttonStyle === "ghost"
                          ? "1px solid #3B3DB8"
                          : "none",
                      background:
                        plan.buttonStyle === "light"
                          ? "#FFFFFF"
                          : plan.buttonStyle === "filled"
                            ? "#3B3DB8"
                            : "transparent",
                      color:
                        plan.buttonStyle === "light"
                          ? "#3B3DB8"
                          : plan.buttonStyle === "filled"
                            ? "#FFFFFF"
                            : "#3B3DB8",
                    }}
                  >
                    {plan.button}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="po-reveal mx-auto mb-14 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                OUR TEAM
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                }}
              >
                The people behind{" "}
                <span style={{ color: "#3B3DB8" }}>your growth</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, idx) => (
                <article
                  key={member.name}
                  className="po-reveal overflow-hidden"
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                    background: "#FFFFFF",
                    borderRadius: 16,
                    border: "1px solid rgba(59,61,184,0.1)",
                  }}
                >
                  <div
                    style={{
                      height: 200,
                      background: "linear-gradient(135deg, #EEF0FF, #DDDEFF)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 98,
                        height: 98,
                        borderRadius: "50%",
                        background: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#3B3DB8",
                        fontSize: "3rem",
                        fontWeight: 700,
                        boxShadow: "0 10px 26px rgba(59,61,184,0.12)",
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <h3
                      style={{
                        margin: 0,
                        marginBottom: 6,
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#1A1A2E",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        marginBottom: 10,
                        color: "#8888AA",
                        fontSize: "0.8rem",
                      }}
                    >
                      {member.role}
                    </p>
                    <Link
                      href="#"
                      style={{
                        color: "#3B3DB8",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                      }}
                    >
                      LinkedIn {"\u2197"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section style={{ background: "#EEF0FF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="po-reveal mx-auto mb-14 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                TESTIMONIALS
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                }}
              >
                What our clients{" "}
                <span style={{ color: "#3B3DB8" }}>say about us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <article
                  key={item.name}
                  className="po-reveal"
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: 28,
                    borderLeft: "4px solid #3B3DB8",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "4rem",
                      lineHeight: 0.8,
                      fontWeight: 800,
                      color: "rgba(59,61,184,0.1)",
                    }}
                  >
                    {"\u201C"}
                  </p>
                  <p
                    style={{
                      marginTop: 8,
                      marginBottom: 18,
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      color: "#8888AA",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "#3B3DB8",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.9rem",
                          color: "#1A1A2E",
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.78rem",
                          color: "#8888AA",
                        }}
                      >
                        {item.type}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "96px 24px" }}>
          <div className="mx-auto max-w-[800px]">
            <div className="po-reveal mx-auto mb-10 max-w-[620px] text-center">
              <p
                style={{
                  color: "#3B3DB8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                }}
              >
                FAQ
              </p>
              <h2
                style={{
                  margin: 0,
                  color: "#1A1A2E",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                }}
              >
                Frequently asked{" "}
                <span style={{ color: "#3B3DB8" }}>questions</span>
              </h2>
            </div>

            <div className="po-reveal" style={{ transitionDelay: "80ms" }}>
              {faqItems.map((item, idx) => {
                const isOpen = faqOpen === idx;
                return (
                  <div
                    key={item.q}
                    style={{ borderBottom: "1px solid rgba(59,61,184,0.1)" }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setFaqOpen((prev) => (prev === idx ? null : idx))
                      }
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "18px 0",
                        textAlign: "left",
                        cursor: "pointer",
                        color: "#1A1A2E",
                        fontSize: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      <span>{item.q}</span>
                      <span
                        style={{
                          color: "#3B3DB8",
                          fontSize: "1.3rem",
                          lineHeight: 1,
                        }}
                      >
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? "180px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.32s ease",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          paddingBottom: 16,
                          color: "#8888AA",
                          fontSize: "0.9rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <POFooter />

      <style>{`
        .po-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .po-visible {
          opacity: 1;
          transform: none;
        }

        .po-float {
          animation: poFloat 3s ease-in-out infinite alternate;
        }

        .po-float-2 {
          animation-delay: 0.45s;
        }

        .po-float-3 {
          animation-delay: 0.9s;
        }

        .po-marquee-track {
          display: flex;
          align-items: center;
          gap: 6px;
          width: max-content;
          animation: poMarquee 18s linear infinite;
        }

        @keyframes poFloat {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes poMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 61, 184, 0.3);
          border-radius: 3px;
        }

        @media (max-width: 1023px) {
          .po-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
        }

        @media (max-width: 767px) {
          .po-float-2 {
            right: 16px !important;
          }

          .po-float-3 {
            right: 24px !important;
            bottom: 30px !important;
          }
        }
      `}</style>
    </div>
  );
}
