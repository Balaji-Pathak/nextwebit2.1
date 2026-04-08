"use client";

import Image from "next/image";
import Link from "next/link";
import { Sora, Space_Grotesk } from "next/font/google";
import { useEffect, useRef } from "react";
import NANavbar from "./NANavbar";
import NAFooter from "./NAFooter";

const heading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const features = [
  {
    icon: "[]",
    title: "Bold Hero",
    text: "Split-screen hero with high-contrast typography and geometric mood elements.",
  },
  {
    icon: "<>",
    title: "Content Rhythm",
    text: "Clean section flow designed for clarity and visual confidence.",
  },
  {
    icon: "//",
    title: "Premium UI",
    text: "Sharp spacing, subtle motion, and modern layout balance for business websites.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    period: "/month",
    points: ["One-page setup", "Basic sections", "2 revision rounds"],
    featured: false,
  },
  {
    name: "Studio Pro",
    price: "₹34,999",
    period: "/month",
    points: ["Multi-section layout", "Premium interactions", "Priority support"],
    featured: true,
  },
  {
    name: "Signature",
    price: "Custom",
    period: "",
    points: ["Brand-first design system", "Advanced animations", "Dedicated design partner"],
    featured: false,
  },
];

const caseCards = [
  {
    title: "Studio Portfolio",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80",
  },
  {
    title: "Fashion Editorial",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80",
  },
  {
    title: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=1200&q=80",
  },
];

export default function NewAstheticPage() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (!fine) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const move = (event: MouseEvent) => {
      ring.style.left = `${event.clientX}px`;
      ring.style.top = `${event.clientY}px`;
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
    };

    const grow = () => {
      ring.style.width = "38px";
      ring.style.height = "38px";
      ring.style.background = "rgba(125,249,255,0.15)";
    };

    const shrink = () => {
      ring.style.width = "26px";
      ring.style.height = "26px";
      ring.style.background = "transparent";
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach((node) => {
      node.addEventListener("mouseenter", grow);
      node.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.querySelectorAll("a,button").forEach((node) => {
        node.removeEventListener("mouseenter", grow);
        node.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>(".na-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("na-visible");
        });
      },
      { threshold: 0.15 }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={body.className}
      style={{ background: "#0F172A", color: "#EAF2FF", overflowX: "hidden" }}
    >
      <NANavbar />

      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 26,
          height: 26,
          border: "1.5px solid rgba(125,249,255,0.85)",
          borderRadius: 4,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 999,
          transition: "width .2s ease, height .2s ease, background .2s ease",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#F7B267",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 999,
        }}
      />

      <main style={{ paddingTop: 70 }}>
        <section
          style={{
            minHeight: "92vh",
            background:
              "radial-gradient(circle at 85% 15%, rgba(125,249,255,0.16), transparent 28%), #0F172A",
            padding: "92px 24px",
          }}
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_520px]">
            <div className="na-reveal">
              <p
                style={{
                  margin: 0,
                  color: "#7DF9FF",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                New Asthetic / Dark Editorial
              </p>
              <h1
                className={heading.className}
                style={{
                  margin: "14px 0 14px",
                  fontSize: "clamp(2.6rem,6vw,5.4rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.02em",
                }}
              >
                Sharp Design
                <br />
                For Premium
                <br />
                Digital Brands
              </h1>
              <p
                style={{
                  margin: 0,
                  maxWidth: 520,
                  color: "#A8B8D8",
                  fontSize: "0.93rem",
                  lineHeight: 1.9,
                }}
              >
                Dark palette, geometric language, and angular UI to create a
                distinct aesthetic that stays business-ready.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#collections"
                  style={{
                    textDecoration: "none",
                    background: "#7DF9FF",
                    color: "#0F172A",
                    padding: "10px 18px",
                    borderRadius: 8,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  View Blocks
                </Link>
                <Link
                  href="#plans"
                  style={{
                    textDecoration: "none",
                    border: "1px solid rgba(125,249,255,0.45)",
                    color: "#D3E7FF",
                    padding: "10px 18px",
                    borderRadius: 8,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}
                >
                  View Plans
                </Link>
              </div>
            </div>

            <div className="na-reveal" style={{ transitionDelay: "120ms" }}>
              <div
                style={{
                  border: "1px solid rgba(125,249,255,0.25)",
                  borderRadius: 18,
                  padding: 12,
                  background: "#131D34",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1200&q=80"
                  alt="Editorial fashion model"
                  width={1200}
                  height={900}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="collections" style={{ background: "#101B31", padding: "86px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="na-reveal mb-10 text-center">
              <p
                style={{
                  margin: 0,
                  color: "#7DF9FF",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Core Components
              </p>
              <h2
                className={heading.className}
                style={{
                  margin: "12px 0 8px",
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                }}
              >
                Modern section architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {features.map((item, index) => (
                <article
                  key={item.title}
                  className="na-reveal"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    borderRadius: 16,
                    border: "1px solid rgba(125,249,255,0.2)",
                    background: "#131D34",
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      border: "1px solid rgba(247,178,103,0.5)",
                      color: "#F7B267",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={heading.className}
                    style={{ margin: "14px 0 8px", fontSize: "1.35rem" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: "#9FB3D9", lineHeight: 1.8 }}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="showcase" style={{ background: "#0F172A", padding: "86px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="na-reveal mb-10">
              <p
                style={{
                  margin: 0,
                  color: "#7DF9FF",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Showcase
              </p>
              <h2
                className={heading.className}
                style={{ margin: "12px 0 0", fontSize: "clamp(2rem,4vw,3.2rem)" }}
              >
                Visual case slices
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {caseCards.map((card, index) => (
                <article
                  key={card.title}
                  className="na-reveal overflow-hidden"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    borderRadius: 16,
                    border: "1px solid rgba(125,249,255,0.18)",
                    background: "#131D34",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1200}
                    height={900}
                    style={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div style={{ padding: "16px 16px 18px" }}>
                    <h3
                      className={heading.className}
                      style={{ margin: 0, fontSize: "1.2rem" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="plans" style={{ background: "#0E1830", padding: "86px 24px" }}>
          <div className="mx-auto max-w-[1200px]">
            <div className="na-reveal mb-10 text-center">
              <p
                style={{
                  margin: 0,
                  color: "#7DF9FF",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Subscription Plans
              </p>
              <h2
                className={heading.className}
                style={{
                  margin: "12px 0 8px",
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                }}
              >
                Pick your growth plan
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className="na-reveal"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    borderRadius: 16,
                    border: plan.featured
                      ? "1.5px solid rgba(125,249,255,0.65)"
                      : "1px solid rgba(125,249,255,0.2)",
                    background: plan.featured ? "#142548" : "#131D34",
                    padding: "24px 20px",
                    boxShadow: plan.featured
                      ? "0 10px 36px rgba(125,249,255,0.15)"
                      : "none",
                  }}
                >
                  {plan.featured && (
                    <p
                      style={{
                        margin: 0,
                        marginBottom: 10,
                        color: "#7DF9FF",
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                      }}
                    >
                      Most Chosen
                    </p>
                  )}
                  <h3
                    className={heading.className}
                    style={{ margin: 0, fontSize: "1.35rem" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      margin: "10px 0 14px",
                      color: "#F7B267",
                      fontSize: "1.9rem",
                      lineHeight: 1,
                      fontWeight: 600,
                    }}
                  >
                    {plan.price}
                    <span
                      style={{
                        color: "#A8B8D8",
                        fontSize: "0.82rem",
                        marginLeft: 3,
                        fontWeight: 500,
                      }}
                    >
                      {plan.period}
                    </span>
                  </p>
                  <ul className="mb-5 space-y-2">
                    {plan.points.map((point) => (
                      <li
                        key={point}
                        style={{
                          color: "#B6C6E5",
                          fontSize: "0.84rem",
                          lineHeight: 1.7,
                        }}
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      border: "none",
                      borderRadius: 8,
                      background: plan.featured ? "#7DF9FF" : "#1D2A48",
                      color: plan.featured ? "#0F172A" : "#D3E7FF",
                      padding: "10px 12px",
                      fontSize: "0.76rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.11em",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Choose Plan
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>


      </main>

      <NAFooter />

      <style>{`
        .na-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity .55s cubic-bezier(.16,1,.3,1), transform .55s cubic-bezier(.16,1,.3,1);
        }

        .na-visible {
          opacity: 1;
          transform: none;
        }

        @media (pointer:fine) {
          body { cursor: none; }
        }

        @media (max-width: 768px) {
          body { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
}
