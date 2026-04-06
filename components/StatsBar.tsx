const stats = [
  { value: "120+", label: "Websites Delivered" },
  { value: "5 Days", label: "Avg Delivery" },
  { value: "4.9★", label: "Google Rating" },
  { value: "₹4,999", label: "Starting Price" },
];

export function StatsBar() {
  return (
    <section className="w-full bg-gold py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center lg:text-left">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center lg:items-start">
              <p className="text-[26px] font-bold text-navy leading-tight">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-navy-mid">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
