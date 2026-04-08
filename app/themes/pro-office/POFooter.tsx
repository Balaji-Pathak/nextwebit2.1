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
  { label: "li", href: "#" },
  { label: "tw", href: "#" },
  { label: "ig", href: "#" },
  { label: "wa", href: "#" },
];

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
                  key={social.label}
                  href={social.href}
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
                  {social.label}
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
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>?</span>
                C-Scheme, Jaipur, Rajasthan
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>?</span>
                +91 98765 43210
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <span style={{ color: "#3B3DB8", marginRight: 6 }}>?</span>
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
            Copyright � 2026 <span style={{ color: "#3B3DB8" }}>NextWebIt</span>.
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
