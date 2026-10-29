import React from 'react';
import { Sparkles, Leaf, Shield, Heart } from 'lucide-react';

export const HomeAboutStory: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4EFE6] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Kerala high-range spices harvest"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-2xl bg-[#12372A] text-white space-y-1 shadow">
                <p className="font-serif font-bold text-lg text-[#E8AA42]">Wayanad & Idukki</p>
                <p className="text-xs text-stone-300">Single-estate hillside harvests</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFC8] space-y-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#D9381E]">
                  <Leaf className="w-4 h-4" />
                  <span>Cold-Milled</span>
                </div>
                <p className="text-xs text-stone-600">Preserves natural essential oils</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
                  alt="Authentic traditional spice blend preparation"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12372A]/10 text-[#12372A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E8AA42]" />
              <span>Rooted in Kerala&apos;s Spice Traditions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#12372A] tracking-tight leading-tight">
              Purity You Can Taste, <br />
              <span className="text-[#D9381E] italic font-normal">Tradition You Can Trust</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              At <strong>Yumnest</strong>, we believe real food should never compromise on purity. Born in the heart of Kerala’s spice country, our mission is to resurrect the authentic aromas of traditional family kitchens.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Commercial masalas are often diluted with starch, artificial colour dyes, and chemical flavor enhancers like MSG. We take the slower, honest route: direct estate sourcing, careful sun-drying, stone milling at controlled temperatures, and nitrogen-sealed packaging so that when you break the seal, the aroma fills your entire home.
            </p>

            {/* Three Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC8]">
                <Leaf className="w-5 h-5 text-emerald-700 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-[#1C1917]">Zero MSG & Dyes</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Pure spice colors and flavors only</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC8]">
                <Shield className="w-5 h-5 text-amber-600 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-[#1C1917]">Single-Estate</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Grown on pristine Western Ghats hills</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC8]">
                <Heart className="w-5 h-5 text-red-600 mb-1.5" />
                <h4 className="font-bold text-xs sm:text-sm text-[#1C1917]">Heritage Recipes</h4>
                <p className="text-[11px] text-stone-500 mt-0.5">Mastered over generations</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
