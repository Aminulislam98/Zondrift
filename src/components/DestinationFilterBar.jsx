"use client";
import React, { useState } from "react";

const DestinationFilterBar = () => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
        {[
          {
            value: category,
            setter: setCategory,
            placeholder: "Category",
            options: [
              { value: "beach", label: "Beach" },
              { value: "city", label: "City" },
              { value: "nature", label: "Nature" },
              { value: "island", label: "Island" },
              { value: "adventure", label: "Adventure" },
              { value: "culture", label: "Culture" },
              { value: "mountain", label: "Mountain" },
            ],
          },
          {
            value: priceRange,
            setter: setPriceRange,
            placeholder: "Price Range",
            options: [
              { value: "budget", label: "Budget — Under $2,000" },
              { value: "mid", label: "Mid — $2,000 to $4,000" },
              { value: "luxury", label: "Luxury — $4,000+" },
            ],
          },
          {
            value: sortBy,
            setter: setSortBy,
            placeholder: "Sort By",
            options: [
              { value: "popular", label: "Most Popular" },
              { value: "rating", label: "Top Rated" },
              { value: "price-low", label: "Price: Low to High" },
              { value: "price-high", label: "Price: High to Low" },
            ],
          },
        ].map((filter) => (
          <div key={filter.placeholder} className="relative flex-1">
            <select
              value={filter.value}
              onChange={(e) => filter.setter(e.target.value)}
              className="w-full appearance-none bg-white border border-black/[0.12] rounded-md px-4 py-3.5 text-[13px] tracking-[0.04em] uppercase font-medium outline-none hover:border-black/25 transition-colors cursor-pointer pr-10 text-[#555]"
            >
              <option value="">{filter.placeholder}</option>
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#888]"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationFilterBar;
