const items = [
  { title: "Kirana & General Store", tag: "Jaipur" },
  { title: "Jewellery Showroom", tag: "Udaipur" },
  { title: "Dental Clinic", tag: "Jodhpur" },
  { title: "Highway Dhaba", tag: "NH-48" },
  { title: "Mobile Repair Shop", tag: "Ajmer" },
  { title: "Boutique & Tailoring", tag: "Kota" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-section-light py-16 md:py-24 border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-accent mb-3">
          Portfolio
        </p>
        <h2 className="text-[28px] font-semibold text-navy leading-tight">
          Recent work from Rajasthan
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#444]">
          Har project local business ke liye custom — aapki pehchan, aapke customers ke liye asaan.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-navy/90 via-navy-mid/80 to-accent/40 relative">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,#ffd700_0%,transparent_50%)]" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-mid">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-navy group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#666] mt-1">Live website · Mobile-first</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
