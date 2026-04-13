"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

const contactMethods = [
  {
    icon: "📞",
    title: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am – 7pm",
    href: "tel:+919876543210",
    cta: "Call Now",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Usually replies within 1 hour",
    href: "https://wa.me/919876543210",
    cta: "Open WhatsApp",
  },
  {
    icon: "✉️",
    title: "Email Us",
    value: "hello@nexwebit.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@nexwebit.in",
    cta: "Send Email",
  },
  {
    icon: "📍",
    title: "Visit Us",
    value: "Jaipur, Rajasthan",
    sub: "Or we come to your shop!",
    href: "#",
    cta: "Get Directions",
  },
];

const services = [
  "Business Website",
  "Online Store",
  "Clinic / Doctor Website",
  "Restaurant / Hotel Page",
  "Google My Business",
  "Custom Theme",
  "Maintenance & Support",
  "Something Else",
];

const budgets = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000+",
  "Not sure yet",
];

const faqs = [
  {
    q: "Do you come to our shop for consultation?",
    a: "Yes! We visit your shop or office anywhere in Rajasthan at absolutely no charge. Just book a free visit and we will come to you.",
  },
  {
    q: "How quickly will you get back to me?",
    a: "We respond to all WhatsApp messages within 1 hour and emails within 24 hours. For urgent matters, calling is the fastest way to reach us.",
  },
  {
    q: "Is the consultation really free?",
    a: "100% free. No hidden charges, no obligation to buy. We meet, we understand your needs, and if you like what we offer — we move forward.",
  },
  {
    q: "Can I contact you in Hindi?",
    a: "Bilkul! Aap Hindi mein baat kar sakte hain — call pe, WhatsApp pe, ya form mein bhi. Hum dono Hindi aur English mein support dete hain.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    city: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".cp-rv");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("cp-visible");
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    if (form.name && form.phone) setSent(true);
  };

  const inputCls =
    "w-full rounded-lg border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-gray-400 outline-none focus:border-[#0A1F5C] focus:ring-2 focus:ring-[#0A1F5C]/10 transition-all duration-200";

  const labelCls =
    "block text-[11px] font-semibold uppercase tracking-widest text-[#4A4A6A] mb-2";

  return (
    <div className="bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0A1F5C] pt-36 pb-20 px-6 md:px-12">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#FF5722]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#FFD700]/8 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/60 px-4 py-1.5 text-sm font-medium text-[#FFD700] mb-8">
            <span className="h-2 w-2 rounded-full bg-[#FFD700] inline-block animate-pulse" />
            We respond within 1 hour on WhatsApp
          </span>

          <h1 className="text-white text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
            Let&apos;s talk about<br />
            <span className="text-[#FFD700] italic">your business</span>
          </h1>

          <p className="text-white/70 text-[15px] leading-[1.8] max-w-xl mx-auto mb-10">
            Book a free visit, ask a question, or just say hello. We are a real team based in Jaipur — not a chatbot. We will get back to you fast.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact-us-form"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5722] px-7 py-3.5 text-[15px] font-bold text-white hover:bg-[#e64a19] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Send a Message
            </Link>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              WhatsApp Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT METHOD CARDS ── */}
      <section className="bg-[#F4F6FB] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((m, i) => (
              <div
                key={m.title}
                className="cp-rv bg-white rounded-2xl border border-[#0A1F5C]/8 border-t-[3px] border-t-[#0A1F5C] p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="text-3xl block mb-4">{m.icon}</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#888] mb-1">{m.title}</p>
                <p className="text-[#0A1F5C] font-bold text-[0.95rem] mb-1 break-all">{m.value}</p>
                <p className="text-gray-400 text-xs mb-4">{m.sub}</p>
                <Link
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  className="inline-flex items-center text-xs font-semibold text-[#FF5722] hover:text-[#0A1F5C] transition-colors duration-200"
                >
                  {m.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FORM + SIDEBAR ── */}
      <section id="contact-form" className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="cp-rv text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF5722] mb-3">Book a free visit</p>
            <h2 className="text-[#0A1F5C] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Tell us about your <span className="italic text-[#FF5722]">project</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              Fill this form and our team will call you within 24 hours — free consultation, no commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* ── FORM ── */}
            {sent ? (
              <div className="cp-rv bg-[#F4F6FB] rounded-2xl border-2 border-[#0A1F5C] p-12 text-center">
                <span className="text-6xl block mb-5">🎉</span>
                <h3 className="text-[#0A1F5C] font-bold text-2xl mb-3">Message Received!</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Thank you! Our team will call or WhatsApp you within 24 hours to discuss your project. Get ready to take your business online!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-[#0A1F5C] px-6 py-3 text-sm font-bold text-white hover:bg-[#152c6e] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="cp-rv bg-[#F8F9FF] rounded-2xl p-8 md:p-10 border border-[#0A1F5C]/8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>Your Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ramesh Sharma"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone / WhatsApp *</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>Email (optional)</label>
                    <input
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Business Name</label>
                    <input
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Sharma Jewellers"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="mb-4">
                  <label className={labelCls}>Your City</label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Jaipur / Jodhpur / Kota..."
                    className={inputCls}
                  />
                </div>

                {/* Service selector */}
                <div className="mb-4">
                  <label className={labelCls}>What do you need?</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className={`rounded-full px-4 py-2 text-xs font-medium border transition-all duration-200 ${
                          form.service === s
                            ? "bg-[#0A1F5C] border-[#0A1F5C] text-white"
                            : "bg-white border-[#0A1F5C]/20 text-[#1A1A2E] hover:border-[#0A1F5C]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget selector */}
                <div className="mb-4">
                  <label className={labelCls}>Your Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`rounded-full px-4 py-2 text-xs font-medium border transition-all duration-200 ${
                          form.budget === b
                            ? "bg-[#FF5722] border-[#FF5722] text-white"
                            : "bg-white border-[#FF5722]/25 text-[#1A1A2E] hover:border-[#FF5722]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className={labelCls}>Anything else you want to tell us?</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Describe your business, what you sell, any special requirements... Hindi mein bhi likh sakte hain!"
                    className={`${inputCls} resize-y min-h-[100px]`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full rounded-lg bg-[#0A1F5C] py-4 text-[15px] font-bold text-white hover:bg-[#152c6e] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Book My Free Consultation →
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  We will call or WhatsApp you within 24 hours · No commitment required
                </p>
              </div>
            )}

            {/* ── SIDEBAR ── */}
            <div className="flex flex-col gap-5">

              {/* Why us card */}
              <div className="cp-rv bg-[#0A1F5C] rounded-2xl p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FFD700] mb-4">Why NextWebIt?</p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: "🏪", text: "We visit your shop — anywhere in Rajasthan" },
                    { icon: "⚡", text: "Website live in 5 working days" },
                    { icon: "💰", text: "Transparent pricing from ₹4,999" },
                    { icon: "🔁", text: "Free changes until you are 100% happy" },
                    { icon: "📲", text: "WhatsApp support after launch" },
                    { icon: "🌟", text: "4.9★ Google rating — 120+ happy clients" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-white/80 leading-snug">
                      <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working hours */}
              <div className="cp-rv bg-[#F4F6FB] rounded-2xl p-6 border border-[#0A1F5C]/8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#888] mb-4">Working Hours</p>
                <div className="flex flex-col gap-3">
                  {[
                    { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                    { day: "Saturday",  time: "10:00 AM – 5:00 PM" },
                    { day: "Sunday",    time: "Closed (WhatsApp only)" },
                  ].map((r) => (
                    <div key={r.day} className="flex justify-between items-center text-sm">
                      <span className="text-[#0A1F5C] font-medium">{r.day}</span>
                      <span className="text-gray-500">{r.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#0A1F5C]/10">
                  <p className="text-xs text-gray-400">
                    For urgent queries, WhatsApp is the fastest way to reach us — even on weekends.
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="cp-rv bg-white rounded-2xl p-6 border border-[#0A1F5C]/8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#888] mb-4">Follow Us</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { label: "Instagram", short: "ig", href: "#", color: "bg-gradient-to-br from-pink-500 to-orange-400" },
                    { label: "Facebook",  short: "fb", href: "#", color: "bg-blue-600" },
                    { label: "YouTube",   short: "yt", href: "#", color: "bg-red-500" },
                    { label: "LinkedIn",  short: "li", href: "#", color: "bg-blue-700" },
                  ].map((s) => (
                    <Link
                      key={s.short}
                      href={s.href}
                      title={s.label}
                      className={`h-10 w-10 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-bold hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
                    >
                      {s.short}
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">See our latest work and client results on Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="bg-[#F4F6FB] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="cp-rv text-center mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF5722] mb-3">Find us</p>
            <h2 className="text-[#0A1F5C] text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight">
              Based in <span className="italic text-[#FF5722]">Jaipur, Rajasthan</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3">We operate across Jaipur, Jodhpur, Ajmer, Kota and surrounding areas.</p>
          </div>

          {/* Map embed placeholder — replace src with real Google Maps embed URL */}
          <div className="cp-rv rounded-2xl overflow-hidden border border-[#0A1F5C]/10 shadow-sm aspect-[16/6] bg-[#EEF0FF] flex items-center justify-center relative">
            <div className="text-center z-10">
              <span className="text-5xl block mb-3">📍</span>
              <p className="text-[#0A1F5C] font-bold text-lg mb-1">Jaipur, Rajasthan</p>
              <p className="text-gray-500 text-sm mb-4">Replace this with your Google Maps embed</p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#0A1F5C] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#152c6e] transition-colors"
              >
                Open in Google Maps →
              </Link>
            </div>
            {/* To add real map: replace this div with:
                <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" className="w-full h-full" loading="lazy" /> */}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="cp-rv text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FF5722] mb-3">Quick answers</p>
            <h2 className="text-[#0A1F5C] text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tight">
              Before you <span className="italic text-[#FF5722]">reach out</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <div key={i} className="cp-rv border-b border-[#0A1F5C]/10" style={{ transitionDelay: `${i * 50}ms` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 py-5 text-left"
                >
                  <span className="text-[#0A1F5C] font-semibold text-[0.95rem] leading-snug">{f.q}</span>
                  <span
                    className={`text-2xl text-[#FF5722] shrink-0 transition-transform duration-300 inline-block ${
                      openFaq === i ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#0A1F5C] py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -top-16 left-1/3 h-72 w-72 rounded-full bg-[#FF5722]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 right-1/4 h-56 w-56 rounded-full bg-[#FFD700]/8 blur-3xl" />
        <div className="relative z-10 max-w-2xl mx-auto cp-rv">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FFD700] mb-5">Still thinking?</p>
          <h2 className="text-white text-[clamp(2rem,5vw,3.8rem)] font-bold leading-tight tracking-tight mb-4">
            Book a free visit —<br />
            <span className="text-[#FFD700] italic">we come to you</span>
          </h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
            No forms, no pressure. Just a conversation at your shop over chai. Let&apos;s talk about growing your business online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us-form"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5722] px-8 py-4 text-[15px] font-bold text-white hover:bg-[#e64a19] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              📲 Book Free Visit Today
            </Link>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/35 px-8 py-4 text-[15px] font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              WhatsApp Us
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-6 tracking-wide">+91 98765 43210 · hello@nexwebit.in · Jaipur, Rajasthan</p>
        </div>
      </section>

      <Footer />

      <style>{`
        .cp-rv { opacity: 0; transform: translateY(28px); transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1); }
        .cp-visible { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>
    </div>
  );
}
