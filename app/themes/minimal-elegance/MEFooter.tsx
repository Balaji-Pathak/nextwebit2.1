import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
});

export default function MEFooter() {
  const footerLinks = {
    Studio: ["About Us", "Our Process", "Portfolio", "Journal", "Careers"],
    Services: ["Brand Identity", "Web Design", "Photography", "Print & Collateral", "Consultation"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socials = ["Ig", "Fb", "Pi", "Li"];

  return (
    <footer
      style={{
        background: "#f0ebe3",
        borderTop: "1px solid rgba(44,31,20,0.08)",
        padding: "80px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 0.9fr 0.9fr 1.5fr",
            gap: "60px",
            paddingBottom: "60px",
            borderBottom: "1px solid rgba(44,31,20,0.08)",
          }}
          className="me-footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                className={playfair.className}
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "#2c1f14",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Bloom
              </span>
              <span
                className={playfair.className}
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#c16b4a",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Studio
              </span>
            </div>
            <p
              className={cormorant.className}
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
                color: "rgba(44,31,20,0.5)",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "260px",
              }}
            >
              We design beautiful digital presences for boutiques, salons, and premium brands across India.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className={dmSans.className}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(44,31,20,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "rgba(44,31,20,0.5)",
                    textDecoration: "none",
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
                    el.style.color = "rgba(44,31,20,0.5)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                className={dmSans.className}
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#c16b4a",
                  marginBottom: "20px",
                }}
              >
                {heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={dmSans.className}
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        color: "rgba(44,31,20,0.55)",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#c16b4a";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "rgba(44,31,20,0.55)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#c16b4a",
                marginBottom: "20px",
              }}
            >
              Stay Inspired
            </p>
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.82rem",
                color: "rgba(44,31,20,0.5)",
                lineHeight: 1.7,
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              Design notes, seasonal lookbooks, and studio updates — once a month.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: "rgba(44,31,20,0.04)",
                  border: "1px solid rgba(44,31,20,0.12)",
                  borderRadius: "2px",
                  padding: "10px 14px",
                  fontSize: "0.82rem",
                  color: "#2c1f14",
                  fontFamily: "inherit",
                  outline: "none",
                }}
              />
              <button
                className={dmSans.className}
                style={{
                  background: "#2c1f14",
                  color: "#f7f3ee",
                  border: "none",
                  borderRadius: "2px",
                  padding: "10px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "none",
                  transition: "background 0.2s",
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Contact Info */}
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { dot: true, text: "hello@nexwebit.in" },
                { dot: true, text: "+91 98765 43210" },
                { dot: true, text: "Jaipur, Rajasthan" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#c16b4a",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className={dmSans.className}
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(44,31,20,0.5)",
                      fontWeight: 300,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
          }}
          className="me-footer-bottom"
        >
          <span
            className={dmSans.className}
            style={{
              fontSize: "0.75rem",
              color: "rgba(44,31,20,0.35)",
              fontWeight: 300,
            }}
          >
            © 2025{" "}
            <a
              href="https://nexwebit.in"
              style={{
                color: "#c16b4a",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              NextWebIt
            </a>{" "}
            · nexwebit.in · All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms", "Cookies"].map((p) => (
              <a
                key={p}
                href="#"
                className={dmSans.className}
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(44,31,20,0.35)",
                  textDecoration: "none",
                  fontWeight: 300,
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#c16b4a";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(44,31,20,0.35)";
                }}
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .me-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .me-footer-grid {
            grid-template-columns: 1fr !important;
          }
          .me-footer-bottom {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
