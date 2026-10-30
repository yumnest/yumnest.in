'use client';

import React from 'react';
import { CATEGORIES } from '@/data/mockData';

interface CategoryCirclesProps {
  selectedCategory?: string;
  onSelectCategory?: (categoryName: string) => void;
}

export const CategoryCircles: React.FC<CategoryCirclesProps> = ({
  selectedCategory = 'All Products',
  onSelectCategory,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F5] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D46]">
            Traditional Spice Heritage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#12372A]">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Find your favourite products by category—freshly milled and packaged.
          </p>
        </div>

        {/* Circular Categories Grid */}
        <div className="pt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-start justify-center">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory?.(cat.name)}
                className="group flex flex-col items-center text-center gap-2.5 p-2 rounded-2xl transition-all focus:outline-none cursor-pointer"
              >
                {/* Circle Container */}
                <div 
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 transition-all duration-300 group-hover:scale-105 ${
                    isSelected
                      ? 'ring-3 ring-[#12372A] shadow-lg shadow-emerald-950/20'
                      : 'border-2 border-[#D4A373]/50 shadow-sm hover:border-[#12372A]'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-stone-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {isSelected && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#D9381E] rounded-full ring-2 ring-white" />
                  )}
                </div>

                {/* Text Labels */}
                <div className="space-y-0.5">
                  <p 
                    className={`text-xs sm:text-sm font-bold tracking-tight transition-colors line-clamp-1 ${
                      isSelected ? 'text-[#D9381E]' : 'text-[#1C1917] group-hover:text-[#12372A]'
                    }`}
                  >
                    {cat.name}
                  </p>
                  {cat.malayalamName && (
                    <p className="text-[10px] text-stone-500 font-medium line-clamp-1">
                      {cat.malayalamName}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
