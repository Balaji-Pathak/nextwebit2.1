const testimonials = [
  {
    quote:
      "Pehle humein lagta tha website sirf bade logo ke liye hai. NextWebIt ne dukaan par aa kar sab samjhaya aur 5 din mein site live kar di. Ab phone par zyada calls aati hain.",
    initials: "RS",
    name: "Ramesh Soni",
    biz: "Soni General Store, Jaipur",
  },
  {
    quote:
      "Menu aur location WhatsApp par baar baar bhejna padta tha. Ab customer seedha link khol leta hai. Kaam seedha, daam clear — koi chakkar nahi.",
    initials: "MK",
    name: "Mahendra Khichar",
    biz: "Highway Dhaba, Ajmer Road",
  },
  {
    quote:
      "Clinic ke liye timing aur services online dikhane ki zaroorat thi. Design saaf hai, patients bolte hain ‘website dekh kar aaye’. Bahut khush hoon.",
    initials: "PM",
    name: "Dr. Priya Meena",
    biz: "Meena Dental Care, Jodhpur",
  },
  {
    quote:
      "Hum electronics ka kaam karte hain, computer kam chalate hain. Inhone Hindi mein guide kiya, har cheez likhwa li. Google par bhi dikhne lage.",
    initials: "VA",
    name: "Vikram Agarwal",
    biz: "Agarwal Electronics, Kota",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 star rating">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#F7F9FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-accent mb-3">
          Reviews
        </p>
        <h2 className="text-[28px] font-semibold text-navy leading-tight">
          Rajasthan ke business owners kya kehte hain
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#444]">
          Asli dukaan, asli feedback — zyada nahi, bas jo kaam par utarta hai.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-xl border border-navy/5 bg-white pl-5 pr-6 py-6 shadow-sm border-l-[3px] border-l-accent hover:shadow-md hover:border-navy/10 transition-all duration-300"
            >
              <Stars />
              <p className="mt-4 text-[15px] leading-[1.7] text-[#444] italic">“{t.quote}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-navy text-[15px]">{t.name}</cite>
                  <p className="text-[13px] text-[#666]">{t.biz}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
