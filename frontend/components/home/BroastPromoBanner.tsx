'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { Sparkles, ShoppingBag, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

interface BroastPromoBannerProps {
  broastProduct?: Product;
  onAddToCart?: (product: Product, variantId: string, quantity: number) => void;
  onViewProduct?: (product: Product) => void;
}

export const BroastPromoBanner: React.FC<BroastPromoBannerProps> = ({
  broastProduct,
  onAddToCart,
  onViewProduct,
}) => {
  const [added, setAdded] = useState(false);

  const handleOrder = () => {
    if (broastProduct && onAddToCart) {
      onAddToCart(broastProduct, broastProduct.variants[0].id, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1600);
    }
  };

  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappCleanNumber}?text=${encodeURIComponent(
    'Hi Yumnest! I would like to order the Signature Broast Masala Powder (100g) - ₹140.'
  )}`;

  return (
    <section id="broast-special" className="py-12 sm:py-16 bg-[#12372A] text-white relative overflow-hidden border-y border-[#1A4B3A]">
      {/* Decorative ambient radial glows */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E8AA42]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#D9381E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual on the Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square shadow-2xl border-2 border-[#D4A373]/40 bg-[#0E2C21] group">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
                alt="Golden Kerala Broasted Chicken"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#D9381E] text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                BUY 3 GET 1 FREE
              </div>

              <div className="absolute bottom-4 inset-x-4 p-3.5 bg-black/65 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#E8AA42]">Crunchy Flaky Crust</p>
                  <p className="text-[11px] text-stone-300">Zero MSG & Preservative Free</p>
                </div>
                <span className="text-sm font-black text-white">₹140 / 100g</span>
              </div>
            </div>
          </div>

          {/* Copy and CTA on the Right */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E2F] border border-[#2B6650] text-[#E8AA42] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Signature Product</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
              Restaurant-Style Crispy Broast Chicken, <br className="hidden sm:inline" />
              <span className="text-[#E8AA42] italic font-normal">Made Simple at Home</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              No need to spend on expensive cafeteria takeouts! Our master broast formulation coats chicken with the iconic golden craggy flakes while sealing juices inside. Simply marinate, double-dredge, and fry for 12 minutes.
            </p>

            {/* Quality Checklist */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-stone-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <span>100% All-Natural Spices</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <span>Air Fryer & Deep Fry Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <span>Zero Artificial Flavourings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <span>Detailed Chef Recipe Included</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleOrder}
                type="button"
                className={`px-6 py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-transform active:scale-95 cursor-pointer ${
                  added ? 'bg-emerald-600' : 'bg-[#D9381E] hover:bg-[#B82912]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Broast Masala (₹140)</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Order</span>
              </a>

              {broastProduct && (
                <button
                  onClick={() => onViewProduct?.(broastProduct)}
                  type="button"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
