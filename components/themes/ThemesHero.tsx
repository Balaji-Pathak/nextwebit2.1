export function ThemesHero() {
  const pills = [
    "8 unique styles",
    "Free theme changes",
    "Mobile friendly",
    "Custom colors on request",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A1F5C] pt-[calc(5rem+72px)] pb-14 text-center md:pt-[calc(5.5rem+72px)]">
      <div
        className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-[#FF5722]/10 md:h-64 md:w-64"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#FFD700]/10 md:h-72 md:w-72"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FF5722]">
          CHOOSE YOUR STYLE
        </p>
        <h1 className="text-4xl font-bold text-white">
          Pick a <span className="text-[#FFD700]">Theme</span> for Your Website
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-white/70">
          We show you these design styles when we visit your shop. Pick what feels right for your
          business — we build it exactly the way you like.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {pills.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/75"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
