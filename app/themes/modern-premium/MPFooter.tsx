import Link from "next/link";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","600","700"], style: ["normal","italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const navLinks = ["Home", "Shop", "Collections", "About", "Contact"];
const serviceLinks = ["Design & Build", "E-Commerce", "Content & Copy", "Google Presence", "Photography", "Maintenance"];
const socialLinks = ["f", "in", "yt", "wa", "tw"];
const contactItems = ["Jaipur, Rajasthan", "+91 98765 43210", "hello@nexwebit.in"];

export default function MPFooter() {
  return (
    <footer style={{ background: "#0a1e10", borderTop: "1px solid rgba(245,237,224,0.07)", paddingTop: 56, fontFamily: dmSans.style.fontFamily }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 40 }} className="mp-footer-grid">

          {/* Brand */}
          <div>
            <Link href="/themes/modern-premium" style={{ textDecoration: "none", display: "block", marginBottom: 20 }}>
              <span className={cormorant.className} style={{ fontSize: "1.9rem", fontWeight: 700, fontStyle: "italic", color: "#f5ede0", letterSpacing: "-0.02em" }}>
                Modern<span style={{ color: "#c9a96e" }}> Premium</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,237,224,0.5)", lineHeight: 1.8, marginBottom: 24, maxWidth: 300 }}>
              We build stunning websites for boutiques, salons, and premium retailers. Your brand deserves a digital presence as refined as your products.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socialLinks.map((s) => (
                <Link key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: "50%",
                  border: "1px solid rgba(245,237,224,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(245,237,224,0.45)", fontSize: 13,
                  textDecoration: "none", fontFamily: dmMono.style.fontFamily,
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a96e"; e.currentTarget.style.color = "#c9a96e"; e.currentTarget.style.background = "rgba(201,169,110,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,237,224,0.1)"; e.currentTarget.style.color = "rgba(245,237,224,0.45)"; e.currentTarget.style.background = "transparent"; }}
                >{s}</Link>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 20 }}>Navigate</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((l) => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <Link href="#" style={{ fontSize: "0.875rem", color: "rgba(245,237,224,0.5)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c9a96e")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.5)")}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 20 }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map((l) => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <Link href="#" style={{ fontSize: "0.875rem", color: "rgba(245,237,224,0.5)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#c9a96e")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.5)")}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 20 }}>Stay in Touch</p>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,237,224,0.5)", lineHeight: 1.7, marginBottom: 16 }}>
              Premium tips for boutique owners in Hindi &amp; English. No spam, ever.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, minWidth: 0,
                background: "rgba(245,237,224,0.04)",
                border: "1px solid rgba(245,237,224,0.1)",
                borderRadius: 6, padding: "10px 14px",
                fontSize: "0.875rem", color: "#f5ede0",
                outline: "none", fontFamily: dmSans.style.fontFamily,
              }} />
              <button style={{ background: "#c9a96e", color: "#0f2419", border: "none", borderRadius: 6, padding: "10px 18px", fontSize: "0.875rem", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", fontFamily: dmSans.style.fontFamily }}>
                Join
              </button>
            </div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.65rem", letterSpacing: "0.06em", color: "rgba(245,237,224,0.25)", marginBottom: 20 }}>No spam · Unsubscribe anytime</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "rgba(245,237,224,0.4)" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#c9a96e", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(245,237,224,0.06)", margin: "0 0 20px" }} />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }} className="mp-footer-bottom">
          <p style={{ fontSize: "0.78rem", color: "rgba(245,237,224,0.3)" }}>
            © 2025 <span style={{ color: "#c9a96e" }}>NextWebIt</span> · nexwebit.in · All rights reserved.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <Link key={l} href="#" style={{ fontSize: "0.78rem", color: "rgba(245,237,224,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a96e")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,237,224,0.3)")}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .mp-footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .mp-footer-grid { grid-template-columns: 1.8fr 0.9fr 1.1fr 1.5fr !important; gap: 48px !important; }
        }
        @media (min-width: 640px) {
          .mp-footer-bottom { flex-direction: row !important; justify-content: space-between !important; }
        }
      `}</style>
    </footer>
  );
}
