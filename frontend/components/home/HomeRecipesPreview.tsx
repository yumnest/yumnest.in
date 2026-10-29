'use client';

import React, { useState } from 'react';
import { Recipe } from '@/types';
import { Clock, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface HomeRecipesPreviewProps {
  recipes: Recipe[];
}

export const HomeRecipesPreview: React.FC<HomeRecipesPreviewProps> = ({ recipes }) => {
  const [expandedRecipeId, setExpandedRecipeId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  return (
    <section id="recipes" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D46]">
            From Our Kitchen to Yours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#12372A]">
            Cooking Inspiration & Recipes
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Step-by-step masterclasses showing you how to get cafeteria-style crunch and authentic Malabar aroma right in your home.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {recipes.map((recipe) => {
            const isExpanded = expandedRecipeId === recipe.id;
            return (
              <div
                key={recipe.id}
                className="group flex flex-col bg-white rounded-3xl border border-[#E8DFC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={recipe.thumbnailUrl}
                    alt={recipe.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#12372A]/90 backdrop-blur-md text-[#E8AA42] text-[10px] font-bold uppercase tracking-wider shadow">
                    {recipe.category}
                  </span>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#E8AA42]" />
                    <span>{recipe.duration}</span>
                  </div>

                  {/* Centered Play Button Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#D9381E] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Recipe Summary */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#D9381E] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {recipe.shortDescription}
                    </p>
                  </div>

                  {/* Expandable Recipe Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-stone-100 text-xs space-y-3 animate-in fade-in duration-200">
                      <div>
                        <strong className="text-stone-800 font-bold block mb-1">Key Ingredients:</strong>
                        <ul className="list-disc list-inside text-stone-600 space-y-0.5 pl-1">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <strong className="text-stone-800 font-bold block mb-1">Method:</strong>
                        <ol className="list-decimal list-inside text-stone-600 space-y-1 pl-1">
                          {recipe.instructions.map((step, idx) => (
                            <li key={idx} className="leading-snug">{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(recipe.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Steps' : 'View Recipe Steps'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
