import Link from "next/link";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600"], style: ["normal","italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

const quickLinks = ["Home", "Gallery", "Schedule", "About", "Contact"];
const services = ["Wedding Planning", "Event Decor", "Photography", "Catering", "Venue Booking", "Mehendi & Beauty"];
const socialLinks = [
  { label: "Instagram", short: "ig" },
  { label: "Pinterest", short: "pt" },
  { label: "Facebook", short: "fb" },
  { label: "WhatsApp", short: "wa" },
];

export default function MEFooter() {
  return (
    <footer style={{ background: "#EDE8DF", borderTop: "1px solid rgba(44,62,45,0.08)", fontFamily: dmSans.style.fontFamily }}>

      {/* Top CTA band */}
      <div style={{ background: "#2C3E2D", padding: "64px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(196,115,90,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(196,115,90,0.06)", pointerEvents: "none" }} />
        <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C4735A", marginBottom: 14 }}>Let us make it unforgettable</p>
        <h2 className={cormorant.className} style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 500, fontStyle: "italic", color: "#F5F0E8", margin: "0 0 20px", lineHeight: 1.15 }}>
          Your perfect day <span style={{ color: "#C4735A" }}>awaits</span>
        </h2>
        <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.6)", marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
          From intimate ceremonies to grand celebrations — we handle every detail with love.
        </p>
        <Link href="#" style={{ display: "inline-block", padding: "13px 36px", background: "#C4735A", color: "#fff", borderRadius: 999, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#d4856c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#C4735A"; e.currentTarget.style.transform = "translateY(0)"; }}
        >Start Planning Together</Link>
      </div>

      {/* Main footer grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 48 }} className="me-footer-grid">

          {/* Brand */}
          <div>
            <div className={cormorant.className} style={{ fontSize: "1.6rem", fontWeight: 600, color: "#2C3E2D", marginBottom: 4 }}>True Romance</div>
            <div style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A9E8B", marginBottom: 18 }}>Wedding Planners</div>
            <p style={{ fontSize: "0.875rem", color: "#5C6B5D", lineHeight: 1.85, maxWidth: 280, marginBottom: 24 }}>
              We believe every love story deserves a beautiful beginning. Based in Jaipur, we craft bespoke weddings that reflect who you truly are.
            </p>
            {/* Sparkle decoration */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
              {["✦","✧","✦"].map((s, i) => (
                <span key={i} style={{ color: "#C4735A", fontSize: i === 1 ? 10 : 14, opacity: i === 1 ? 0.5 : 0.8 }}>{s}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {socialLinks.map((s) => (
                <Link key={s.short} href="#" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(44,62,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#5C6B5D", textDecoration: "none", fontFamily: dmMono.style.fontFamily, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4735A"; e.currentTarget.style.color = "#C4735A"; e.currentTarget.style.background = "rgba(196,115,90,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(44,62,45,0.2)"; e.currentTarget.style.color = "#5C6B5D"; e.currentTarget.style.background = "transparent"; }}
                >{s.short}</Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A9E8B", marginBottom: 20 }}>Navigate</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((l) => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <Link href="#" style={{ fontSize: "0.875rem", color: "#5C6B5D", textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C4735A")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5C6B5D")}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A9E8B", marginBottom: 20 }}>Services</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((l) => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <Link href="#" style={{ fontSize: "0.875rem", color: "#5C6B5D", textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C4735A")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5C6B5D")}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A9E8B", marginBottom: 20 }}>Stay Inspired</p>
            <p style={{ fontSize: "0.875rem", color: "#5C6B5D", lineHeight: 1.75, marginBottom: 18 }}>
              Wedding inspiration, planning tips and real love stories — straight to your inbox.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              <input type="email" placeholder="your@email.com" style={{ background: "#fff", border: "1px solid rgba(44,62,45,0.15)", borderRadius: 999, padding: "11px 18px", fontSize: "0.85rem", color: "#2C3E2D", outline: "none", fontFamily: dmSans.style.fontFamily, transition: "border-color 0.2s" }}
                onFocus={e => (e.currentTarget.style.borderColor = "#C4735A")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(44,62,45,0.15)")}
              />
              <button style={{ background: "#2C3E2D", color: "#F5F0E8", border: "none", borderRadius: 999, padding: "11px 18px", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", fontFamily: dmSans.style.fontFamily, transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3d5240")}
                onMouseLeave={e => (e.currentTarget.style.background = "#2C3E2D")}
              >Subscribe</button>
            </div>
            <p style={{ fontFamily: dmMono.style.fontFamily, fontSize: "0.6rem", color: "#8A9E8B", letterSpacing: "0.06em" }}>No spam · Unsubscribe anytime</p>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {["Jaipur, Rajasthan", "+91 98765 43210", "hello@nexwebit.in"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#5C6B5D" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C4735A", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(44,62,45,0.1)", margin: "40px 0 20px" }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }} className="me-footer-bottom">
          <p style={{ fontSize: "0.78rem", color: "#8A9E8B" }}>
            © 2025 <span style={{ color: "#2C3E2D", fontWeight: 500 }}>NextWebIt</span> · nexwebit.in · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <Link key={l} href="#" style={{ fontSize: "0.78rem", color: "#8A9E8B", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4735A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8A9E8B")}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .me-footer-grid{grid-template-columns:1fr 1fr!important;gap:36px!important;}
        }
        @media(max-width:600px){
          .me-footer-grid{grid-template-columns:1fr!important;}
          .me-footer-bottom{flex-direction:column;align-items:flex-start!important;}
        }
      `}</style>
    </footer>
  );
}
