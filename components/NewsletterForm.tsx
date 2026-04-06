"use client";

import { FormEvent } from "react";

export function NewsletterForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-accent py-2.5 text-[13px] font-semibold text-white hover:bg-[#e64a19] transition-colors"
      >
        Subscribe
      </button>
      <p className="text-[11px] text-white/50 mt-1">No spam · Unsubscribe anytime</p>
    </form>
  );
}
