"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import NANavbar from "./NANavbar";
import NAFooter from "./NAFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const services = [
  {
    icon: "💐",
    title: "Floral Design",
    description:
      "From breathtaking centerpieces to ceremony arches - every bloom perfectly placed.",
    price: "From ₹15,000",
  },
  {
    icon: "📸",
    title: "Photography",
    description:
      "Professional photographers who capture every stolen glance and joyful tear.",
    price: "From ₹25,000",
  },
  {
    icon: "🎂",
    title: "Wedding Cake",
    description:
      "Custom-designed cakes that taste as beautiful as they look.",
    price: "From ₹8,000",
  },
  {
    icon: "🎵",
    title: "Live Music",
    description:
      "From soulful classical ensembles to vibrant Bollywood bands for your reception.",
    price: "From ₹20,000",
  },
  {
    icon: "🏛️",
    title: "Venue Styling",
    description:
      "We transform any space into the wedding backdrop of your dreams.",
    price: "From ₹35,000",
  },
  {
    icon: "💍",
    title: "Full Planning",
    description:
      "End-to-end wedding management so you enjoy every moment stress-free.",
    price: "Custom",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  "https://images.unsplash.com/photo-1622495966027-e0173192c728?w=600&q=80",
];

const plans = [
  {
    name: "The Intimate",
    price: "₹85,000",
    guests: "up to 50 guests",
    features: [
      "Venue styling",
      "Floral arrangements",
      "Day-of coordination",
      "Photography 4hrs",
    ],
    featured: false,
    buttonClass:
      "border border-[#6B4226]/30 text-[#6B4226] hover:bg-[#6B4226] hover:text-white",
    cta: "Choose Intimate",
  },
  {
    name: "The Grand",
    price: "₹2,20,000",
    guests: "up to 300 guests",
    features: [
      "Full venue transformation",
      "Catering coordination",
      "Mehendi & Sangeet",
      "2-day photography",
      "Videography",
    ],
    featured: true,
    buttonClass: "bg-[#C8A97A] text-white hover:bg-[#b8966a]",
    cta: "Choose Grand",
  },
  {
    name: "The Royal",
    price: "Custom",
    guests: "Unlimited guests",
    features: [
      "Everything in Grand",
      "Destination wedding",
      "International vendors",
      "Bridal styling",
      "Honeymoon planning",
    ],
    featured: false,
    buttonClass:
      "border border-[#6B4226]/30 text-[#6B4226] hover:bg-[#6B4226] hover:text-white",
    cta: "Talk to Us",
  },
];

const testimonials = [
  {
    name: "Priya & Arjun",
    date: "November 2024",
    quote:
      "True Romance ne hamare wedding ko ekdum dream jaisa bana diya. Har ek detail perfect thi. Hum shukriyada hain!",
    initials: "PA",
  },
  {
    name: "Sneha & Rahul",
    date: "February 2024",
    quote:
      "From the mandap flowers to the last dance, everything was exactly as we had imagined. Worth every rupee!",
    initials: "SR",
  },
  {
    name: "Meera & Karan",
    date: "December 2023",
    quote:
      "The team was so calm and organised on the day - we didn't worry about a single thing. Pure magic!",
    initials: "MK",
  },
];

const sparklePositions = [
  "top-20 right-14",
  "top-32 left-12",
  "top-1/2 right-24",
  "top-[58%] left-16",
  "bottom-24 right-12",
  "bottom-14 left-1/3",
  "top-16 right-1/3",
  "bottom-32 right-1/3",
];

const sparkleSizes = ["w-3 h-3", "w-4 h-4", "w-5 h-5", "w-6 h-6"];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 2 L11 9 L18 10 L11 11 L10 18 L9 11 L2 10 L9 9 Z"
        fill="white"
        opacity="0.7"
      />
    </svg>
  );
}

function Eyebrow({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <p
      className={`text-[10px] font-medium uppercase tracking-[0.2em] text-[#C4A882] ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default function NewAestheticPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".na-rv");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("na-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${dmSans.className} overflow-x-hidden bg-[#FBF3EC] text-[#6B4226]`}>
      <NANavbar />

      <main>
        <section className="relative min-h-screen bg-gradient-to-r from-[#F5E2CC] to-[#EDD5BC] pt-16">
          <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 md:grid-cols-[55%_45%]">
            <div className="relative min-h-[44vh] md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80"
                alt="Bride standing near floral wedding decor"
                fill
                className="object-cover object-[center_top]"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#EDD5BC]" />
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-[#F5E2CC]/80 to-[#EDD5BC] px-10 py-20 md:px-16">
              <svg
                className="absolute left-0 right-0 top-12 w-full"
                viewBox="0 0 500 60"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0,30 C80,10 160,50 240,30 C320,10 400,50 500,25"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <svg
                className="absolute bottom-10 left-0 right-0 w-full"
                viewBox="0 0 500 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0,40 C75,8 150,72 225,40 C300,8 375,72 500,26"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {sparklePositions.map((position, index) => (
                <Sparkle
                  key={position}
                  className={`absolute ${position} ${sparkleSizes[index % sparkleSizes.length]}`}
                />
              ))}

              <div className="relative z-10 flex h-full flex-col justify-center">
                <p className="text-[1rem] font-normal italic text-[#9B7355]">We plan</p>
                <h1
                  className={`${playfair.className} mt-4 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight text-[#6B4226]`}
                >
                  Magical
                  <br />
                  moments.
                </h1>
                <p className="mt-4 mb-8 max-w-[280px] text-[0.9rem] font-light leading-relaxed text-[#9B7355]">
                  Bespoke wedding planning for intimate ceremonies, lavish celebrations,
                  and the once-in-a-lifetime details that make every memory glow.
                </p>
                <div>
                  <Link
                    href="#plans"
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#7A5230] px-8 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#5C3D20]"
                  >
                    SEE PLANS
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <span
                    key={dot}
                    className={`block rounded-full ${
                      dot === 1
                        ? "h-2.5 w-2.5 bg-[#6B4226]/70"
                        : "h-2 w-2 bg-[#6B4226]/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="na-rv">
              <Eyebrow>Our Story</Eyebrow>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold italic leading-tight text-[#6B4226]`}
              >
                Planning your perfect day
              </h2>
              <p className="mt-6 text-[0.9rem] font-light leading-relaxed text-[#9B7355]">
                We build celebrations around emotion, detail, and effortless elegance.
                From first inspiration boards to the final farewell, every chapter is
                shaped with sensitivity, warmth, and a deep respect for your story.
              </p>
              <p className="mt-4 text-[0.9rem] font-light leading-relaxed text-[#9B7355]">
                Whether you dream of a serene garden ceremony or a grand multi-day
                gathering, our team choreographs each moment so your guests feel the
                magic and you stay fully present in it.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex cursor-pointer items-center text-[0.85rem] font-medium text-[#6B4226] transition-colors hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="na-rv relative pb-16" style={{ transitionDelay: "80ms" }}>
              <div className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=700&q=80"
                  alt="Wedding reception with romantic lights"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-0 aspect-square w-2/3 overflow-hidden rounded-xl border-4 border-white shadow-xl md:-left-8">
                <Image
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80"
                  alt="Bride portrait with warm floral styling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 28vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F0E7] px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="na-rv mb-14 text-center">
              <Eyebrow center>What We Offer</Eyebrow>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(2rem,4vw,3.3rem)] font-semibold italic text-[#6B4226]`}
              >
                Everything for your special day
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="na-rv rounded-2xl border border-[#6B4226]/[0.08] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 text-3xl">{service.icon}</div>
                  <h3
                    className={`${playfair.className} mb-2 text-lg font-semibold text-[#6B4226]`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#9B7355]">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-block rounded-full bg-[#F9F0E7] px-3 py-1 text-xs font-medium text-[#9B7355]">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="overflow-hidden bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="na-rv mb-12 text-center">
              <Eyebrow center>Our Portfolio</Eyebrow>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(2rem,4vw,3.1rem)] font-semibold italic text-[#6B4226]`}
              >
                Weddings we&apos;ve loved
              </h2>
            </div>
          </div>

          <div className="marquee flex w-max gap-4 pl-6 md:pl-12">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-52 w-72 flex-shrink-0 overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={`Wedding gallery image ${index + 1}`}
                  fill
                  className="cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                  sizes="18rem"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="bg-[#F9F0E7] px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="na-rv mb-14 text-center">
              <Eyebrow center>Our Plans</Eyebrow>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold italic text-[#6B4226]`}
              >
                Choose your experience
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`na-rv rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    plan.featured
                      ? "border-[#6B4226] bg-[#6B4226] text-white"
                      : "border-[#6B4226]/10 bg-white text-[#6B4226]"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {plan.featured && (
                    <span className="mb-5 inline-flex rounded-full bg-[#C8A97A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Loved
                    </span>
                  )}
                  <h3 className={`${playfair.className} text-2xl font-semibold italic`}>
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-4xl font-medium">{plan.price}</p>
                  <p className={`mt-2 text-sm ${plan.featured ? "text-white/70" : "text-[#9B7355]"}`}>
                    {plan.guests}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <span className={plan.featured ? "text-white" : "text-[#C4A882]"}>
                          ✦
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className={`mt-8 inline-flex w-full cursor-pointer items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${plan.buttonClass}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="na-rv mb-14 text-center">
              <Eyebrow center>Love Letters</Eyebrow>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold italic text-[#6B4226]`}
              >
                What couples say
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <div
                  key={item.name}
                  className="na-rv rounded-2xl border border-[#6B4226]/[0.08] bg-[#FBF3EC] p-8"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 text-sm text-[#C4A882]">★★★★★</div>
                  <p className="mb-6 text-sm font-light italic leading-relaxed text-[#9B7355]">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6B4226] text-sm font-medium text-white">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#6B4226]">{item.name}</p>
                      <p className="text-xs text-[#9B7355]">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F9F0E7] px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="na-rv text-center">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#9B7355]">
                @trueromance.in
              </p>
              <h2
                className={`${playfair.className} mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold italic text-[#6B4226]`}
              >
                Follow our journey
              </h2>
            </div>

            <div className="na-rv mt-12 grid grid-cols-2 gap-1 md:grid-cols-5" style={{ transitionDelay: "80ms" }}>
              {galleryImages.slice(0, 5).map((image, index) => (
                <Link
                  key={image}
                  href="#"
                  className="group relative block aspect-square overflow-hidden cursor-pointer"
                  aria-label={`Instagram image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Instagram wedding moment ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#6B4226]/0 text-2xl text-white transition-all duration-300 group-hover:bg-[#6B4226]/40">
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      ♡
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="na-rv mt-8 text-center" style={{ transitionDelay: "160ms" }}>
              <Link
                href="#"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#6B4226]/30 px-6 py-2.5 text-sm font-medium text-[#6B4226] transition-all duration-300 hover:bg-[#6B4226] hover:text-white"
              >
                Follow on Instagram →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-r from-[#6B4226] to-[#4A2E1A] px-6 py-28 text-center md:px-12"
        >
          <svg
            className="absolute left-0 right-0 top-8 w-full"
            viewBox="0 0 500 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0,30 C80,10 160,50 240,30 C320,10 400,50 500,25"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {[
            "top-16 left-[12%]",
            "top-24 right-[16%]",
            "bottom-20 left-[18%]",
            "bottom-28 right-[14%]",
            "top-1/2 left-[8%]",
            "top-[58%] right-[8%]",
          ].map((position, index) => (
            <Sparkle
              key={position}
              className={`absolute ${position} ${sparkleSizes[index % sparkleSizes.length]} opacity-50`}
            />
          ))}

          <div className="na-rv relative z-10 mx-auto max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#C4A882]">
              Begin Your Story
            </p>
            <h2
              className={`${playfair.className} mt-4 text-[clamp(2rem,6vw,4.5rem)] font-bold italic leading-tight text-white`}
            >
              Let us plan your magical moments
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-md text-[0.95rem] font-light text-white/60">
              Tell us what you&apos;re dreaming of and we&apos;ll shape a wedding experience
              that feels intimate, graceful, and unmistakably yours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#6B4226] transition-colors duration-300 hover:bg-[#FBF3EC]"
              >
                Book a Consultation
              </Link>
              <Link
                href="#plans"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                See Our Plans
              </Link>
            </div>
            <p className="mt-8 text-xs text-white/40">+91 73573 67085 · hello@trueromance.in</p>
          </div>
        </section>
      </main>

      <NAFooter />

      <style>{`
        .na-rv { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .na-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .marquee { animation: marqueeScroll 40s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #FBF3EC; }
        ::-webkit-scrollbar-thumb { background: rgba(107,66,38,0.3); border-radius: 3px; }
      `}</style>
    </div>
  );
}
