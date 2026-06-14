"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const service = {
  title: "Elite Online Presence",
  originalPrice: "₹16,999",
  price: "₹8,999",
  savings: "You Save ₹5,200",
  features: [
    "Elite Web Page Design",
    "Mobile Responsiveness",
    "SEO / SSL Certificate",
    "Domain (Free 1st Year)",
    "Hosting",
    "Map Integration",
    "WhatsApp Integration",
    "Advanced Speed Optimization",
  ],
};

export function Services() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    if (!isBrochureOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsBrochureOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isBrochureOpen]);

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-accent mb-3">
          Special Offer
        </p>

        <h2 className="text-[28px] md:text-[36px] font-semibold text-navy leading-tight">
          Apke Business Ka Professional Website
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-[1.7] text-[#444]">
          Ek complete online presence — design se lekar hosting tak sab included. Simple, fast aur reliable.
        </p>

        {/* Main Card */}
        <div className="mt-14 flex justify-center">
  <div className="relative w-full max-w-7xl rounded-2xl border border-navy/10 bg-white shadow-sm hover:shadow-md transition-all duration-500 p-8 md:p-12 text-left">
    
    <div className="absolute -top-3 left-6 bg-accent text-white text-[13px] md:text-[14px] px-4 py-1.5 rounded-full font-semibold tracking-wide">
      LIMITED PERIOD OFFER
    </div>

    <h3 className="text-2xl md:text-3xl font-semibold text-navy">
      {service.title}
    </h3>

    <div className="mt-5 flex items-center gap-4 flex-wrap">
      <span className="text-[16px] md:text-[18px] text-[#777] line-through">
        ₹16,999
      </span>

      <span className="text-4xl md:text-5xl font-bold text-navy-mid leading-none">
        ₹8,999
      </span>

      <span className="text-[14px] md:text-[15px] font-semibold text-green-600">
        You Save ₹8,000
      </span>
    </div>

    <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Elite Web Page Design
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Mobile Responsiveness
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>SEO / SSL Certificate
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Domain (Free 1st Year)
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Hosting
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Map Integration
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>WhatsApp Integration
      </li>
      <li className="flex items-start gap-3 text-[16px] md:text-[17px] text-[#333]">
        <span className="text-green-600 mt-[3px] text-[14px]">✔</span>Advanced Speed Optimization
      </li>
    </ul>

    <div className="mt-10 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={() => setIsBrochureOpen(true)}
        className="inline-flex items-center justify-center rounded-md border border-navy/15 bg-navy px-5 py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-navy-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        See our brochure
      </button>

      <span className="text-[13px] leading-6 text-[#666]">
        Full offer details in one quick preview.
      </span>
    </div>

  </div>
</div>

        {/* Trust Signals */}
        <p className="mt-12 text-[13px] text-[#555] max-w-2xl mx-auto">
          100% Satisfaction Guarantee • On-time Delivery (Within 5 Working Days) • Trusted by Local Businesses in Jaipur
        </p>

      </div>

      {isBrochureOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="NextWebIT brochure preview"
          onMouseDown={() => setIsBrochureOpen(false)}
        >
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy/10 px-4 py-3 md:px-5">
              <p className="text-[15px] font-semibold text-navy">
                NextWebIT Brochure
              </p>

              <button
                type="button"
                onClick={() => setIsBrochureOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                aria-label="Close brochure preview"
              >
                X
              </button>
            </div>

            <div className="max-h-[82vh] overflow-auto bg-[#f7f7f7] p-3 md:p-5">
              <Image
                src="/Brochure1.png"
                alt="NextWebIT service brochure"
                width={3584}
                height={4780}
                className="mx-auto h-auto w-full max-w-4xl rounded-md shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
