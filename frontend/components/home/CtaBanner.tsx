import React from 'react';
import { ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

export const CtaBanner: React.FC = () => {
  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section className="bg-gradient-to-r from-[#12372A] via-[#164333] to-[#1E4D3E] text-white py-16 px-4 text-center relative overflow-hidden">
      {/* Decorative ambient radial lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8AA42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8AA42]/20 text-[#E8AA42] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready to Cook Something Special?</span>
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight">
          Taste the Authentic Magic of Pure Kerala Spices
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Order online today or message us directly on WhatsApp. Fast, nitrogen-sealed delivery with natural aroma guaranteed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#products"
            className="px-8 py-3.5 rounded-full bg-[#D9381E] hover:bg-[#B82912] text-white font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Explore All Spices</span>
          </a>

          <a
            href={`https://wa.me/${whatsappCleanNumber}?text=Hi%20Yumnest,%20I%20would%20like%20to%20order%20pure%20Kerala%20spices.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Direct Order</span>
          </a>
        </div>
      </div>
    </section>
  );
};
