"use client";

import { useState } from "react";

const FILTERS = ["All Themes", "Dark", "Light", "Bold", "Minimal"] as const;

export function ThemesFilter() {
  const [active, setActive] = useState<string>("All Themes");

  return (
    <div className="bg-[#F4F6FB] px-10 pt-9 pb-2">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
        <span className="shrink-0 text-sm text-gray-500">Filter by:</span>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border-2 px-4 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-[#0A1F5C] bg-[#0A1F5C] text-white"
                    : "border-gray-200 bg-white text-gray-500 hover:border-[#0A1F5C] hover:text-[#0A1F5C]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
