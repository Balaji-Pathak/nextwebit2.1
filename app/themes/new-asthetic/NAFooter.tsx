import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const navigateLinks = ["Home", "Services", "Portfolio", "Plans", "Contact"];
const serviceLinks = [
  "Floral Design",
  "Photography",
  "Wedding Cake",
  "Live Music",
  "Venue Styling",
  "Full Planning",
];

export default function NAFooter() {
  return (
    <footer className={`${dmSans.className} bg-[#2C1810] px-6 pb-8 pt-16 text-white md:px-12`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#3D2415] p-8 md:flex-row md:items-center md:p-12">
          <h2
            className={`${playfair.className} max-w-2xl text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-tight text-white`}
          >
            Discover the full scale of{" "}
            <span className="italic text-[#C4A882]">True Romance</span> capabilities
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get a Demo
            </Link>
            <Link
              href="#"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#C4A882] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#d0b28d]"
            >
              Start for Free
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <div
              className={`${playfair.className} text-[1.4rem] font-semibold text-white`}
            >
              Wedding <span className="italic text-[#C4A882]">&amp; Co.</span>
            </div>
            <p className="mb-5 mt-5 max-w-[280px] text-sm font-light leading-relaxed text-white/45">
              We craft bespoke wedding experiences that reflect your personalities,
              honour your traditions, and create memories that last a lifetime.
            </p>
            <div className="flex gap-3">
              {["f", "tw", "ig", "yt", "wa"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 text-[11px] text-white/70 transition-colors hover:border-[#C4A882] hover:text-[#C4A882]"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C4A882]">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {navigateLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="cursor-pointer text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C4A882]">
              Services
            </p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="cursor-pointer text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C4A882]">
              Stay Inspired
            </p>
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/45">
              Receive planning notes, styling ideas, and celebration stories from our latest weddings.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-[#C4A882] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#C4A882] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#d0b28d]"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-white/45">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C4A882]" />
                hello@trueromance.in
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C4A882]" />
                +91 73573 67085
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C4A882]" />
                Jaipur · Delhi · Destination Weddings
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-xs text-white/25 sm:flex-row sm:items-center">
          <p>
            © 2025 <span className="text-[#C4A882]">NextWebIT</span> · nexwebit.in
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="#" className="cursor-pointer transition-colors hover:text-white/55">
              Privacy Policy
            </Link>
            <Link href="#" className="cursor-pointer transition-colors hover:text-white/55">
              Terms
            </Link>
            <Link href="#" className="cursor-pointer transition-colors hover:text-white/55">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
