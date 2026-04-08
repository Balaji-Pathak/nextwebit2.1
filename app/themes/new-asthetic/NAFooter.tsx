import Link from "next/link";
import { Sora, Space_Grotesk } from "next/font/google";

const heading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "Plans", href: "#plans" },
  { label: "Showcase", href: "#showcase" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="#7DF9FF" />
      <circle cx="12" cy="12" r="9" stroke="#7DF9FF" strokeOpacity="0.4" />
    </svg>
  );
}

export default function NAFooter() {
  return (
    <footer
      className={body.className}
      style={{
        background:
          "radial-gradient(circle at 88% -10%, rgba(125,249,255,0.14), transparent 36%), #0A1222",
        color: "#D3E7FF",
        padding: "74px 24px 26px",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          style={{
            border: "1px solid rgba(125,249,255,0.2)",
            borderRadius: 18,
            background: "rgba(19,29,52,0.85)",
            padding: "28px 24px",
            marginBottom: 24,
          }}
        >
          <div className="grid grid-cols-1 gap-9 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <h3
                className={heading.className}
                style={{
                  margin: 0,
                  marginBottom: 12,
                  fontSize: "1.35rem",
                  letterSpacing: "0.05em",
                }}
              >
                New Asthetic Studio
              </h3>
              <p
                style={{
                  margin: 0,
                  maxWidth: 360,
                  fontSize: "0.86rem",
                  lineHeight: 1.9,
                  color: "rgba(211,231,255,0.75)",
                }}
              >
                Distinct dark-editorial websites for brands that want to look
                premium, modern, and unmistakably different.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  style={{
                    border: "1px solid rgba(247,178,103,0.5)",
                    borderRadius: 999,
                    padding: "5px 10px",
                    fontSize: "0.7rem",
                    color: "#F7B267",
                  }}
                >
                  Responsive
                </span>
                <span
                  style={{
                    border: "1px solid rgba(125,249,255,0.4)",
                    borderRadius: 999,
                    padding: "5px 10px",
                    fontSize: "0.7rem",
                    color: "#7DF9FF",
                  }}
                >
                  Aesthetic UI
                </span>
              </div>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  marginBottom: 12,
                  color: "#7DF9FF",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Navigate
              </p>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{
                        color: "#D3E7FF",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  marginBottom: 12,
                  color: "#7DF9FF",
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Connect
              </p>

              <div className="space-y-2">
                {socials.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginRight: 8,
                      marginBottom: 8,
                      border: "1px solid rgba(125,249,255,0.35)",
                      borderRadius: 8,
                      color: "#D3E7FF",
                      textDecoration: "none",
                      fontSize: "0.76rem",
                      padding: "6px 10px",
                    }}
                  >
                    <DotIcon />
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 space-y-2 text-[0.8rem]">
                <p style={{ margin: 0, color: "rgba(211,231,255,0.75)" }}>
                  hello@newasthetic.studio
                </p>
                <p style={{ margin: 0, color: "rgba(211,231,255,0.75)" }}>
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p
            style={{
              margin: 0,
              color: "rgba(211,231,255,0.62)",
              fontSize: "0.78rem",
            }}
          >
            Copyright 2026 New Asthetic Studio.
          </p>
          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#7DF9FF",
                boxShadow: "0 0 10px rgba(125,249,255,0.8)",
              }}
            />
            <p
              style={{
                margin: 0,
                color: "rgba(211,231,255,0.62)",
                fontSize: "0.78rem",
              }}
            >
              Crafted for premium brands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
