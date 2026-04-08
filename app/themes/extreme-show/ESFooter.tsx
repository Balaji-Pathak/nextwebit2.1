import { Bebas_Neue, Inter } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function ESFooter() {
  const quickLinks = ["Home", "Shows", "Artists", "Tickets", "Merch", "About", "Contact"];
  const genres = ["Rock & Metal", "Electronic / EDM", "Hip-Hop & Rap", "Pop & Indie", "Jazz & Blues", "Classical Live"];
  const socials = [
    { label: "Instagram", icon: "📸", href: "#" },
    { label: "YouTube", icon: "▶️", href: "#" },
    { label: "Twitter / X", icon: "🐦", href: "#" },
    { label: "TikTok", icon: "🎵", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(220,38,38,0.2)",
        paddingTop: "72px",
        fontFamily: inter.style.fontFamily,
      }}
    >
      {/* Top Grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "48px",
        }}
        className="es-footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #DC2626, #7F1D1D)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 16px rgba(220,38,38,0.4)",
              }}
            >
              <span style={{ color: "#fff", fontSize: "16px", fontWeight: 900, fontFamily: bebas.style.fontFamily }}>ES</span>
            </div>
            <div>
              <div style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.4rem", letterSpacing: "0.15em", color: "#fff" }}>
                EXTREME<span style={{ color: "#DC2626" }}>SHOW</span>
              </div>
              <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Live Event Experience
              </div>
            </div>
          </div>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontWeight: 300, maxWidth: "320px", marginBottom: "28px" }}>
            We bring the world&apos;s most electrifying live performances to you. From underground gigs to stadium spectacles — ExtremeShow is your front-row pass.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#DC2626", marginBottom: "20px" }}>
            QUICK LINKS
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {quickLinks.map((l) => (
              <li key={l}>
                <Link
                  href={`#${l.toLowerCase()}`}
                  style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.03em", whiteSpace: "nowrap", transition: "color 0.2s" }}
                >
                  <span style={{ color: "#DC2626", marginRight: "8px" }}>▸</span>{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Genres */}
        <div>
          <h4 style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#DC2626", marginBottom: "20px" }}>
            GENRES
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {genres.map((g) => (
              <li key={g}>
                <Link
                  href="#shows"
                  style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}
                >
                  <span style={{ color: "#DC2626", marginRight: "8px" }}>▸</span>{g}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Contact */}
        <div>
          <h4 style={{ fontFamily: bebas.style.fontFamily, fontSize: "1.1rem", letterSpacing: "0.15em", color: "#DC2626", marginBottom: "8px" }}>
            STAY IN THE LOOP
          </h4>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginBottom: "16px", lineHeight: 1.7 }}>
            Get early access to ticket drops, exclusive merch and artist news.
          </p>
          <div style={{ display: "flex", gap: "0", marginBottom: "28px" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRight: "none",
                borderRadius: "3px 0 0 3px",
                padding: "10px 14px",
                color: "#fff",
                fontSize: "0.8rem",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "#DC2626",
                border: "none",
                borderRadius: "0 3px 3px 0",
                padding: "10px 16px",
                color: "#fff",
                fontFamily: bebas.style.fontFamily,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              JOIN
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { icon: "📍", text: "Mumbai · Delhi · Bangalore · Jaipur" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "hello@extremeshow.in" },
            ].map((c) => (
              <div key={c.text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ fontSize: "0.85rem" }}>{c.icon}</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "1280px", margin: "56px auto 0", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
          © 2025 <span style={{ color: "#DC2626" }}>ExtremeShow</span>. All rights reserved. Built for the stage.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service", "Refund Policy"].map((p) => (
            <Link
              key={p}
              href="#"
              style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              {p}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .es-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .es-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
