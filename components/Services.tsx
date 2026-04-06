const services = [
  {
    icon: "🏪",
    title: "Business Website",
    desc: "Single-page ya multi-page site — products, timings, map, call buttons. Mobile pe perfect.",
    price: "₹4,999",
  },
  {
    icon: "🛒",
    title: "Online Store",
    desc: "Catalog, WhatsApp order, simple checkout options. Aapka samaan online dikhe.",
    price: "₹9,999",
  },
  {
    icon: "🏥",
    title: "Clinic Website",
    desc: "Doctor profile, timings, services, appointment CTA — patients ko bharosa milta hai.",
    price: "₹6,999",
  },
  {
    icon: "🍽️",
    title: "Restaurant Page",
    desc: "Menu, photos, location, table booking hint — dhaba aur restaurant dono ke liye.",
    price: "₹5,999",
  },
  {
    icon: "📍",
    title: "Google My Business",
    desc: "Profile setup / optimize, photos, categories — local search mein upar aane mein madad.",
    price: "₹1,499",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Monthly updates, small text changes, backup — tension-free chalta rahe.",
    price: "₹499/month",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-accent mb-3">
          What we build
        </p>
        <h2 className="text-[28px] font-semibold text-navy leading-tight">
          Services for every local business
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#444]">
          Sab packages clear pricing ke sath — pehle free visit, phir aap decide karein. Hum
          Rajasthan ke hisaab se simple, tez aur reliable websites banate hain.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-xl border border-navy/10 bg-white pt-[3px] shadow-sm hover:shadow-md hover:border-navy-mid/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute top-0 left-4 right-4 h-[3px] rounded-b-sm bg-navy-mid" />
              <div className="p-6 pt-7">
                <span className="text-3xl" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#444]">{s.desc}</p>
                <p className="mt-5 inline-block rounded-full bg-card-tint px-3 py-1.5 text-sm font-semibold text-navy-mid">
                  {s.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
