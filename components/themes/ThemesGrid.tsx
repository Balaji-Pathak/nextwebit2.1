import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

function BrowserChrome({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`h-32 overflow-hidden rounded-t-2xl ${className}`}>{children}</div>;
}

function NavBarRow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex h-8 items-center gap-1.5 px-2 ${className ?? ""}`}>
      {children}
      <span className="text-[6px] font-bold tracking-tight">BRAND NAME</span>
    </div>
  );
}

function FakeHeroBlock({
  h1Class,
  subClass,
  ctaClass,
  ctaLabel = "BOOK",
  lines = 2,
}: {
  h1Class: string;
  subClass: string;
  ctaClass: string;
  ctaLabel?: string;
  lines?: number;
}) {
  return (
    <div className="relative px-2 pb-2 pt-1">
      <div className={h1Class}>
        {lines >= 1 && <div className="leading-tight">Your headline</div>}
        {lines >= 2 && <div className="leading-tight">goes right here</div>}
        {lines >= 3 && <div className="leading-tight">line three</div>}
      </div>
      <p className={`mt-0.5 text-[7px] leading-snug ${subClass}`}>
        Short supporting text for your visitors.
      </p>
      <button type="button" className={`mt-1 text-[6px] font-bold px-1.5 py-0.5 ${ctaClass}`}>
        {ctaLabel}
      </button>
    </div>
  );
}

function PreviewVintageLuxury() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/vintage-luxury.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewModernPremium() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/modern-premium.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewMinimalElegance() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/minimal-elegance.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewProOffice() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/pro-office.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewNewAesthetic() {
  return (
   <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/new-asthetic.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewGeoAbstract() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/geo-abstract.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewExtremeShow() {
  return (
    <BrowserChrome>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src="/theme-previews/extreme-show.png"
          alt="Modern Premium theme preview"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </BrowserChrome>
  );
}

function PreviewCustomTheme() {
  return (
    <BrowserChrome className="relative bg-[#F8F8F8]">
      <div className="flex h-8 items-center gap-1.5 border-b border-gray-100 bg-white px-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-gray-200" aria-hidden />
        <span className="text-[6px] font-medium text-gray-300">Your Brand</span>
      </div>
      <div className="flex flex-col items-center justify-center px-2 py-3 text-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-xl font-light text-gray-300">
          +
        </div>
        <p className="mt-1 text-[8px] font-semibold text-gray-500">Your Own Design</p>
        <p className="mt-0.5 max-w-[120px] text-[6px] leading-snug text-gray-400">
          Tell us your colours, we build from scratch
        </p>
      </div>
    </BrowserChrome>
  );
}

type ThemeDef = {
  id: string;
  name: string;
  description: string;
  tagClass: string;
  tagLabel: string;
  preview: ReactNode;
  popular?: boolean;
  dashed?: boolean;
  buttonClass?: string;
  buttonLabel?: string;
};

const THEMES: ThemeDef[] = [
  {
    id: "vintage-luxury",
    name: "Vintage Luxury",
    description:
      "Rich dark brown with gold accents. Perfect for jewellers, sweet shops, and heritage businesses.",
    tagClass: "bg-[#EEF2FF] text-[#3949AB]",
    tagLabel: "Dark · Royal",
    preview: <PreviewVintageLuxury />,
  },
  {
    id: "modern-premium",
    name: "Modern Premium",
    description:
      "Dark background with purple-violet accents. Best for tech shops, institutes, and modern brands.",
    tagClass: "bg-[#EEF2FF] text-[#3949AB]",
    tagLabel: "Dark · Premium",
    preview: <PreviewModernPremium />,
    popular: true,
  },
  {
    id: "minimal-elegance",
    name: "Minimal Elegance",
    description:
      "White and cream tones with sharp black typography. Ideal for clinics, lawyers, and boutiques.",
    tagClass: "bg-[#F5F5F5] text-[#555]",
    tagLabel: "Light · Clean",
    preview: <PreviewMinimalElegance />,
  },
  {
    id: "pro-office",
    name: "Pro Office",
    description:
      "Navy blue and white corporate style. Best for CA offices, consultants, and service businesses.",
    tagClass: "bg-[#EEF2FF] text-[#3949AB]",
    tagLabel: "Light · Corporate",
    preview: <PreviewProOffice />,
  },
  {
    id: "new-asthetic",
    name: "New Asthetic",
    description:
      "Dark editorial design with cyan accents and crisp structure for premium modern brands.",
    tagClass: "bg-[#E8F2FF] text-[#1C3E6D]",
    tagLabel: "Dark · Editorial",
    preview: <PreviewNewAesthetic />,
  },
  {
    id: "geo-abstract",
    name: "Geo Abstract",
    description:
      "Dark with neon teal geometric shapes. Unique, futuristic look for electronics and modern traders.",
    tagClass: "bg-[#EEF2FF] text-[#3949AB]",
    tagLabel: "Dark · Futuristic",
    preview: <PreviewGeoAbstract />,
  },
  {
    id: "extreme-show",
    name: "Extreme Show",
    description:
      "High-contrast black and red with bold typography. Perfect for gyms, sports shops, and high-energy brands.",
    tagClass: "bg-[#FFEBEE] text-[#C62828]",
    tagLabel: "Dark · Extreme",
    preview: <PreviewExtremeShow />,
  },
  {
    id: "custom-theme",
    name: "Custom Theme",
    description:
      "You choose the colours, fonts and layout. We design a completely unique website just for you.",
    tagClass: "bg-[#E8F5E9] text-[#2E7D32]",
    tagLabel: "Fully Custom",
    preview: <PreviewCustomTheme />,
    dashed: true,
    buttonClass: "bg-[#FF5722] hover:bg-[#e64a19]",
    buttonLabel: "Discuss →",
  },
];

function ThemeCard({ theme }: { theme: ThemeDef }) {
  const btnDefault = "bg-[#0A1F5C] hover:bg-[#FF5722]";
  const btnClass = theme.buttonClass ?? btnDefault;

  const borderCls = theme.popular
    ? "border-2 border-[#FFD700]"
    : theme.dashed
      ? "border-[1.5px] border-dashed border-[#ccc]"
      : "border-[1.5px] border-[#e0e5f0]";

  return (
    <article
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#FF5722] ${borderCls}`}
    >
      {theme.popular && (
        <span className="absolute right-2.5 top-2.5 z-10 rounded-lg bg-[#FFD700] px-2 py-0.5 text-[9px] font-bold uppercase text-[#0A1F5C]">
          Popular
        </span>
      )}
      {theme.preview}
      <div className="p-4">
        <h3 className="mb-1 text-sm font-semibold text-[#0A1F5C]">{theme.name}</h3>
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-gray-500">{theme.description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${theme.tagClass}`}>
            {theme.tagLabel}
          </span>
          <Link
            href={`/themes/${theme.id}`}
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium text-white transition-colors ${btnClass}`}
          >
            {theme.buttonLabel ?? "Preview"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ThemesGrid() {
  return (
    <section className="bg-[#F4F6FB] px-10 pb-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {THEMES.map((t) => (
          <ThemeCard key={t.id} theme={t} />
        ))}
      </div>
    </section>
  );
}
