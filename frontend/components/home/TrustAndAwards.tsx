import React from 'react';
import { SAMPLE_AWARDS } from '@/data/mockData';
import { Award, CheckCircle2, AlertCircle } from 'lucide-react';

export const TrustAndAwards: React.FC = () => {
  return (
    <section id="awards" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8AA42]/20 text-[#8C6D46] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#E8AA42]" />
            <span>Quality & Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#12372A]">
            Commitment to Purity & Recognition
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Crafted following stringent quality hygiene protocols, fair farmer remuneration, and traditional food purity standards.
          </p>
        </div>

        {/* Prototype Sample Data Notice */}
        <div className="max-w-3xl mx-auto p-3.5 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Prototype Notice:</strong> The citations shown below represent sample showcase records for the Yumnest frontend prototype as required by project governance. Verified production certifications will be updated upon final compliance audit.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SAMPLE_AWARDS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-[#E8DFC8] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#12372A] text-[#E8AA42] flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                    {item.year}
                  </span>
                  <span className="text-[11px] text-stone-500 font-semibold">
                    {item.organization}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#12372A]">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Standards Checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-center">
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DFC8]">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
            <p className="font-bold text-xs text-stone-800">100% Preservative Free</p>
            <p className="text-[10px] text-stone-500">Zero artificial stabilizers</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DFC8]">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
            <p className="font-bold text-xs text-stone-800">No Synthetic Dyes</p>
            <p className="text-[10px] text-stone-500">Pure natural spice colors</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DFC8]">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
            <p className="font-bold text-xs text-stone-800">Zero Added MSG</p>
            <p className="text-[10px] text-stone-500">Naturally flavorful herbs</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8DFC8]">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
            <p className="font-bold text-xs text-stone-800">Triple-Sealed Bags</p>
            <p className="text-[10px] text-stone-500">Freshness aroma lock</p>
          </div>
        </div>

      </div>
    </section>
  );
};
