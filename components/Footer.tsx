import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT, WHATSAPP_E164 } from "@/lib/site";
import { Logo } from "@/components/Logo";
import {
  FaLinkedinIn,
} from "react-icons/fa6";


const quickLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "/about", label: "About Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "/contact-us", label: "Contact" },
];

function SocialIcon({ children, label, href }: { children: ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/90 hover:border-gold hover:text-gold transition-colors"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-6">
            <Link href="/" className="group">
              <Logo />
            </Link>

            <p className="mt-6 text-[15px] leading-[1.7] text-white/70 max-w-md">
              Jaipur ke local business ke liye fast aur professional website solution.
              Sirf ek simple offer - sab kuch included, bina confusion.
            </p>


          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-gold font-semibold text-[15px]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-gold font-semibold text-[15px]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-[14px] text-white/70">

              <p>{CONTACT.address}</p>

              <p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {CONTACT.phone}
                </a>
              </p>

              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </p>



              {/* LinkedIn (low priority) */}
              <div className="pt-2">
                <SocialIcon
                  href="https://linkedin.com/company/your-company"
                  label="LinkedIn"
                >
                  <FaLinkedinIn size={14} />
                </SocialIcon>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 text-center text-[13px] text-white/55">

          <p>
            © {new Date().getFullYear()} NextWebIT · nextwebit.in
          </p>
        </div>
      </div>
    </footer>
  );
}