import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const companyLinks = ["Home", "About", "Services", "Pricing", "Team", "Contact"];
const serviceLinks = [
  "Business Strategy",
  "GST & Compliance",
  "Website & Digital",
  "HR & Recruitment",
  "Corporate Training",
  "Partnerships",
];
const socials = [
  { label: "LinkedIn", key: "linkedin", href: "#" },
  { label: "X (Twitter)", key: "x", href: "#" },
  { label: "Instagram", key: "instagram", href: "#" },
  { label: "WhatsApp", key: "whatsapp", href: "#" },
];

function SocialIcon({ kind }: { kind: string }) {
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.06-.8-1.94-1.92-1.94s-1.92.88-1.92 1.94.8 1.92 1.9 1.92h.02c1.14 0 1.92-.86 1.92-1.92ZM20.44 13.44c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.86 1.1-3.36 1.86V8.5H9.4c.04 1.16 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.7.12-.94.28-.7.9-1.42 1.96-1.42 1.38 0 1.94 1.06 1.94 2.62V20h3.38v-6.56Z" />
      </svg>
    );
  }

  if (kind === "x") {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
        <path d="M18.9 3h2.9l-6.34 7.24L23 21h-5.9l-4.62-6.36L6.9 21H4l6.78-7.75L1 3h6.05l4.17 5.8L18.9 3Zm-1.03 16.24h1.6L6.18 4.67H4.47l13.4 14.57Z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.96 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 2a9.85 9.85 0 0 0-8.4 15L2 22l5.18-1.56A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.92.94-2.98-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.12c-.25-.13-1.5-.74-1.74-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.98-.14.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.12-.12.25-.3.37-.45.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.4-.41-.56-.41h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.75 2.67 4.24 3.74.6.26 1.07.41 1.43.52.6.19 1.15.16 1.58.1.48-.07 1.5-.61 1.71-1.2.2-.6.2-1.1.14-1.2-.06-.1-.23-.17-.48-.3Z" />
    </svg>
  );
}

export default function POFooter() {
  return (
    <footer
      className={inter.className}
      style={{
        background: "#1A1A2E",
        paddingTop: 64,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/themes/pro-office"
              className="mb-4 inline-flex items-center gap-3 no-underline"
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: "linear-gradient(135deg, #3B3DB8, #6366F1)",
                }}
              />
              <div className="leading-none">
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  ProOffice
                </p>
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    marginTop: 2,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Business Solutions
                </p>
              </div>
            </Link>

            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 360,
                marginBottom: 20,
              }}
            >
              We help Indian businesses grow through strategy, compliance, digital
              presence and relentless execution.
            </p>

            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <Link
                  key={social.key}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.55)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#3B3DB8";
                    e.currentTarget.style.color = "#6366F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  <SocialIcon kind={social.key} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="whitespace-nowrap"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6366F1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="whitespace-nowrap"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6366F1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Stay Updated
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                marginBottom: 14,
              }}
            >
              Get business tips and industry updates directly in your inbox.
            </p>

            <div className="mb-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: 0,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  padding: "10px 12px",
                  outline: "none",
                }}
              />
              <button
                type="button"
                style={{
                  border: "none",
                  borderRadius: 8,
                  background: "#3B3DB8",
                  color: "#FFFFFF",
                  padding: "10px 14px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>

            <div className="space-y-2">
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>
                  {"\u25B8"}
                </span>
                C-Scheme, Jaipur, Rajasthan
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>
                  {"\u25B8"}
                </span>
                +91 98765 43210
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>
                  {"\u25B8"}
                </span>
                hello@nexwebit.in
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 34,
            marginBottom: 20,
            height: 1,
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.8rem",
            }}
          >
            Copyright © 2026 <span style={{ color: "#3B3DB8" }}>NextWebIt</span>.
            All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="whitespace-nowrap"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#6366F1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

