const steps = [
  {
    n: 1,
    title: "We visit your shop",
    desc: "Team aapke time ke hisaab se aati hai — bina advance payment ke consultation.",
    badge: "Free visit",
  },
  {
    n: 2,
    title: "We understand your requirements",
    desc: "Products, photos, timings, location — sab note karte hain seedhi boli mein.",
  },
  {
    n: 3,
    title: "You choose a theme from our options",
    desc: "3–4 ready layouts dikha kar aap apni pasand choose karte hain.",
  },
  {
    n: 4,
    title: "You approve the design",
    desc: "Colours, text, photos — jitni baar change chahiye, tab tak free revision.",
    badge: "Free changes till satisfied",
  },
  {
    n: 5,
    title: "We go live — within 5 days",
    desc: "Domain, hosting setup aur launch — aapke approval ke baad turant online.",
    badge: "Live",
  },
  {
    n: 6,
    title: "Ongoing WhatsApp support",
    desc: "Chhota update ho ya sawaal — WhatsApp par seedha jawab.",
    badge: "Support",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-gold mb-3">
          How we work
        </p>
        <h2 className="text-[28px] font-semibold text-white leading-tight">
          Simple process, no tech headache
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/70">
          Hum process ko itna aasaan banate hain ki aapko computer ki zyada samajh na bhi ho to chalega.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-0">
          {steps.map((step, i) => {
            const col = i % 3;
            const showDivider = col < 2;
            return (
              <div
                key={step.n}
                className={`relative px-4 md:px-6 ${
                  showDivider
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg"
                    aria-hidden
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold leading-snug">{step.title}</h3>
                    {step.badge && (
                      <span className="mt-2 inline-block rounded-full border border-gold/50 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                        {step.badge}
                      </span>
                    )}
                    <p className="mt-3 text-[15px] leading-[1.7] text-white/65">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
