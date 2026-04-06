import type { ReactNode } from "react";

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
    <BrowserChrome className="relative bg-[#1a0a00]">
      <div className="pointer-events-none absolute right-1 top-6 h-10 w-10 rounded-full border border-[#C9A84C]/25" />
      <div className="pointer-events-none absolute right-2 top-7 h-6 w-6 rounded-full border border-[#C9A84C]/35" />
      <NavBarRow className="bg-[#2d1600] text-[#C9A84C]">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#C9A84C]" />
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-[#C9A84C]"
        subClass="text-[#C9A84C]/60"
        ctaClass="rounded-sm bg-[#C9A84C] text-[#1a0a00]"
      />
    </BrowserChrome>
  );
}

function PreviewModernPremium() {
  return (
    <BrowserChrome className="relative bg-[#0f0f0f]">
      <div className="pointer-events-none absolute -right-2 top-4 h-8 w-8 rounded-full bg-[#6C63FF]/25" />
      <div className="pointer-events-none absolute right-3 top-8 h-5 w-5 rounded-full bg-[#9B59B6]/30" />
      <NavBarRow className="border-b border-white/[0.08] bg-white/[0.04] text-white">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-gradient-to-br from-[#6C63FF] to-[#9B59B6]" />
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-white"
        subClass="text-white/50"
        ctaClass="rounded-sm bg-[#6C63FF] text-white"
      />
    </BrowserChrome>
  );
}

function PreviewMinimalElegance() {
  return (
    <BrowserChrome className="relative bg-[#fafaf8]">
      <div className="pointer-events-none absolute right-1 top-6 w-8 space-y-0.5">
        <div className="h-px bg-gray-200" />
        <div className="ml-1 h-px bg-gray-200" />
        <div className="ml-2 h-px bg-gray-200" />
      </div>
      <NavBarRow className="border-b border-gray-100 bg-white text-black">
        <span className="h-2.5 w-2.5 shrink-0 bg-black" />
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-[#111]"
        subClass="text-[#888]"
        ctaClass="rounded-sm bg-[#111] text-white"
      />
    </BrowserChrome>
  );
}

function PreviewProOffice() {
  return (
    <BrowserChrome className="relative bg-[#F0F4FF]">
      <div className="pointer-events-none absolute right-1 top-5 flex gap-0.5">
        <div className="h-6 w-5 rounded-sm border border-[#1B3A8F]/15 bg-white shadow-sm" />
        <div className="h-6 w-5 rounded-sm border border-[#1B3A8F]/10 bg-[#E8EEFF]" />
      </div>
      <NavBarRow className="bg-[#1B3A8F] text-white">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-white" />
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-[#1B3A8F]"
        subClass="text-[#555]"
        ctaClass="rounded-sm bg-[#1B3A8F] text-white"
      />
    </BrowserChrome>
  );
}

function PreviewNewAesthetic() {
  return (
    <BrowserChrome className="relative bg-[#FFF5F0]">
      <div
        className="pointer-events-none absolute -right-1 top-5 h-12 w-12 bg-[#FF6B6B]/10"
        style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
      />
      <NavBarRow className="bg-[#FF6B6B] text-white">
        <span className="flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-white text-[4px] text-[#FF6B6B]">
          ●
        </span>
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-[#D63031]"
        subClass="text-[#888]"
        ctaClass="rounded-full bg-[#FF6B6B] text-white"
      />
    </BrowserChrome>
  );
}

function PreviewGeoAbstract() {
  return (
    <BrowserChrome className="relative bg-[#0D0D1A]">
      <div className="pointer-events-none absolute right-1 top-5 opacity-40">
        <div
          className="absolute h-0 w-0 border-b-[10px] border-l-[6px] border-r-[6px] border-b-[#00FFC8] border-l-transparent border-r-transparent"
          style={{ top: 0, right: 0 }}
        />
        <div
          className="absolute h-0 w-0 border-b-[6px] border-l-[4px] border-r-[4px] border-b-[#00FFC8] border-l-transparent border-r-transparent"
          style={{ top: 6, right: 8 }}
        />
      </div>
      <NavBarRow className="border-b border-[rgba(0,255,200,0.15)] bg-white/[0.03] text-[#00FFC8]">
        <span
          className="h-2 w-2 shrink-0 bg-[#00FFC8]"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        />
      </NavBarRow>
      <FakeHeroBlock
        h1Class="text-[9px] font-bold leading-tight text-[#00FFC8]"
        subClass="text-[#00FFC8]/50"
        ctaClass="rounded-sm border border-[#00FFC8] bg-transparent text-[#00FFC8]"
      />
    </BrowserChrome>
  );
}

function PreviewExtremeShow() {
  return (
    <div className="flex h-32 flex-col overflow-hidden rounded-t-2xl">
      <div className="flex h-8 shrink-0 items-center gap-1 bg-black px-2">
        <span className="flex h-3 w-3 shrink-0 items-center justify-center bg-[#FF0000] text-[5px] font-black tracking-widest text-white">
          X
        </span>
        <span className="text-[6px] font-black tracking-widest text-[#FF0000]">BRAND NAME</span>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#FF0000] px-2 pb-2 pt-1">
        <div className="pointer-events-none absolute bottom-0 right-0 top-2 w-3 origin-top-right rotate-12 bg-black" />
        <div className="pointer-events-none absolute bottom-0 right-1 top-3 w-1.5 origin-top-right rotate-12 bg-black/40" />
        <div className="text-[9px] font-black uppercase leading-tight text-white">
          <div>BOLD.</div>
          <div>POWERFUL.</div>
          <div>UNSTOPPABLE.</div>
        </div>
        <p className="mt-0.5 text-[6px] text-white/70">Short supporting text.</p>
        <button
          type="button"
          className="mt-1 border border-[#FF0000] bg-black px-1.5 py-0.5 text-[6px] font-black text-[#FF0000]"
        >
          GO
        </button>
      </div>
    </div>
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
    id: "new-aesthetic",
    name: "New Aesthetic",
    description:
      "Warm coral and peach tones with friendly shapes. Great for salons, cafes, and boutiques.",
    tagClass: "bg-[#FFF3E0] text-[#E65100]",
    tagLabel: "Light · Warm",
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
          <button
            type="button"
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium text-white transition-colors ${btnClass}`}
          >
            {theme.buttonLabel ?? "Preview"}
          </button>
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
