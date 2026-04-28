"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

const navLinks = ["About", "Features", "Pricing", "Download", "News", "Contact"];
const serviceLinks = ["Web Design", "UI/UX Strategy", "Motion Graphics", "Brand Identity", "Digital Marketing", "Creative Direction"];
const socialLinks = [
  { name: "tw", icon: "𝕏", label: "Twitter" },
  { name: "ig", icon: "📷", label: "Instagram" },
  { name: "li", icon: "🔗", label: "LinkedIn" },
  { name: "yt", icon: "▶", label: "YouTube" },
  { name: "wa", icon: "💬", label: "WhatsApp" }
];

export default function GAFooter() {
  const BG = "#080614";
  const ACCENT = "#FF4500";
  const PINK = "#E91E8C";
  const MUTED = "rgba(255,255,255,0.4)";
  const TEXT = "rgba(255,255,255,0.65)";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: BG, fontFamily: inter.style.fontFamily, paddingTop: 0, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(255,69,0,0.08), transparent)`, filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, rgba(123,47,255,0.08), transparent)`, filter: "blur(70px)", pointerEvents: "none" }} />

      <div style={{ overflow: "hidden", lineHeight: 0, background: "#0D0B1E" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
          <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill={BG} />
          <path d="M0,60 C360,100 720,20 1440,60 L1440,80 L0,80 Z" fill="rgba(255,69,0,0.05)" />
        </svg>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px 48px", position: "relative", zIndex: 2 }}>

        {/* FIXED: Removed gridTemplateColumns from inline styles */}
        <div style={{ display: "grid", gap: 48 }} className="ga-footer-grid">

          {/* Brand Column */}
          <div className="ga-footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ 
                width: 40, height: 40, borderRadius: "50%", 
                border: `2px solid ${ACCENT}`, 
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
                animation: "pulse 2s ease infinite"
              }}>
                <div style={{ width: 16, height: 2, background: `linear-gradient(90deg,${ACCENT},${PINK})`, borderRadius: 2, transform: "rotate(-40deg)" }} />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                geo<span style={{ color: ACCENT, background: `linear-gradient(135deg,${ACCENT},${PINK})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>abstract</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: TEXT, lineHeight: 1.8, maxWidth: 300, marginBottom: 28 }}>
              We create extraordinary digital experiences through abstract design, motion, and creative technology that makes your brand impossible to ignore.
            </p>
            
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              {socialLinks.map(s => (
                <Link key={s.name} href="#" 
                  aria-label={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: TEXT, fontSize: "1.1rem", textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.borderColor = ACCENT; 
                    e.currentTarget.style.color = ACCENT; 
                    e.currentTarget.style.background = `rgba(255,69,0,0.1)`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; 
                    e.currentTarget.style.color = TEXT; 
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >{s.icon}</Link>
              ))}
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <div style={{ width: 30, height: 2, background: `linear-gradient(90deg,${ACCENT},transparent)` }} />
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, fontWeight: 600, margin: 0 }}>Navigate</p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((l) => (
                <li key={l} style={{ marginBottom: 14 }}>
                  <Link href="#" style={{ 
                    fontSize: "0.9rem", color: TEXT, textDecoration: "none", 
                    transition: "all 0.2s",
                    display: "inline-block",
                  }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.color = ACCENT; 
                      e.currentTarget.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.color = TEXT; 
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <div style={{ width: 30, height: 2, background: `linear-gradient(90deg,${ACCENT},transparent)` }} />
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, fontWeight: 600, margin: 0 }}>Services</p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "8px 16px" }}>
              {serviceLinks.map(l => (
                <li key={l}>
                  <Link href="#" style={{ 
                    fontSize: "0.85rem", color: TEXT, textDecoration: "none", 
                    transition: "all 0.2s",
                    display: "inline-block",
                  }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.color = PINK; 
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.color = TEXT; 
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <div style={{ width: 30, height: 2, background: `linear-gradient(90deg,${ACCENT},transparent)` }} />
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, fontWeight: 600, margin: 0 }}>Stay in the Loop</p>
            </div>
            <p style={{ fontSize: "0.9rem", color: TEXT, lineHeight: 1.7, marginBottom: 24 }}>
              Creative drops, design inspiration and exclusive early access - straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                  style={{
                    flex: 1, minWidth: 0,
                    background: "rgba(255,255,255,0.05)", 
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10, 
                    padding: "12px 16px", 
                    fontSize: "0.875rem", 
                    color: "#fff",
                    outline: "none", 
                    fontFamily: inter.style.fontFamily,
                    transition: "all 0.2s",
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                />
                <button 
                  type="submit"
                  style={{ 
                    background: `linear-gradient(135deg,${ACCENT},${PINK})`, 
                    color: "#fff", 
                    border: "none", 
                    borderRadius: 10, 
                    padding: "0 24px", 
                    fontSize: "0.875rem", 
                    fontWeight: 600, 
                    cursor: "pointer", 
                    whiteSpace: "nowrap", 
                    fontFamily: inter.style.fontFamily,
                    transition: "all 0.3s",
                    boxShadow: "0 4px 12px rgba(255,69,0,0.2)",
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.transform = "translateY(-2px)"; 
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,69,0,0.4)";
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.transform = "translateY(0)"; 
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,69,0,0.2)";
                  }}
                >
                  Join
                </button>
              </div>
            </form>
            
            {subscribed && (
              <div style={{
                background: "rgba(255,69,0,0.15)",
                border: `1px solid ${ACCENT}`,
                borderRadius: 8,
                padding: "10px 16px",
                marginBottom: 20,
                fontSize: "0.8rem",
                color: ACCENT,
                textAlign: "center",
                animation: "slideIn 0.3s ease"
              }}>
                ✨ Thanks for joining! Check your inbox.
              </div>
            )}

            <p style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: MUTED, marginBottom: 24 }}>📬 No spam · Unsubscribe anytime</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { icon: "📍", text: "Jaipur, Rajasthan" },
                { icon: "📞", text: "+91 73573 67085" },
                { icon: "✉️", text: "hello@nexwebit.in" }
              ].map(item => (
                <div key={item.text} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 12, 
                  fontSize: "0.85rem", 
                  color: MUTED,
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = ACCENT; }}
                  onMouseLeave={e => { e.currentTarget.style.color = MUTED; }}
                >
                  <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          height: 1, 
          background: "linear-gradient(90deg, transparent, rgba(255,69,0,0.3), rgba(233,30,140,0.3), transparent)",
          margin: "48px 0 28px" 
        }} />
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: "0.8rem", color: MUTED, display: "flex", alignItems: "center", gap: 6 }}>
            © 2025 
            <span style={{ 
              background: `linear-gradient(135deg,${ACCENT},${PINK})`, 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              fontWeight: 600
            }}>NextWebIT</span> 
            · nexwebit.in · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
              <Link key={l} href="#" style={{ 
                fontSize: "0.78rem", 
                color: MUTED, 
                textDecoration: "none", 
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.color = MUTED; }}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Mobile: 1 column (default) */
        
        /* Tablet: 2 columns */
        @media (min-width: 640px) {
          .ga-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Desktop: 4 columns in a row */
        @media (min-width: 1024px) {
          .ga-footer-grid {
            grid-template-columns: 1.6fr 0.8fr 1.2fr 1.5fr !important;
            gap: 48px !important;
          }
        }
        
        @media (max-width: 640px) {
          .ga-footer-brand {
            text-align: center;
          }
          .ga-footer-brand > div:first-child {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}