const clients = [
  "Sharma Kirana Store",
  "Pink City Electronics",
  "Dr. Meena Clinic",
  "Royal Dhaba & Family Restaurant",
  "Jodhpur Handicrafts",
  "Agarwal Traders",
  "Jaipur Dental Care",
  "Choudhary Tyre Works",
];

export function ClientLogos() {
  return (
    <section id="clients" className="bg-section-light py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#666666] mb-8">
          Businesses we have worked with
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {clients.map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-full border border-navy/10 bg-white px-4 py-2.5 text-[12px] font-medium text-[#444] shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
