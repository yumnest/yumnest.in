'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

interface HeroSlide {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  image: string;
  dishName: string;
  offerBadge: string;
  priceNote: string;
  targetAnchor: string;
}

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 'slide-broast',
      badge: 'Signature Kerala Blend',
      titlePrefix: 'Bring Authentic',
      titleHighlight: 'Flavours to',
      titleSuffix: 'Your Kitchen',
      description: 'Hand-crafted crispy broast masala, single-estate high-range spices, and pure wood-pressed coconut oil straight from Kerala’s heritage mills.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80',
      dishName: 'Crispy Broasted Chicken',
      offerBadge: 'BUY 3 GET 1 FREE',
      priceNote: 'Starting at ₹140',
      targetAnchor: '#broast-special',
    },
    {
      id: 'slide-biryani',
      badge: 'Malabar Royal Aromatics',
      titlePrefix: 'Royal Aroma of',
      titleHighlight: 'Tellicherry Spices',
      titleSuffix: 'in Every Dish',
      description: 'Extra bold 8mm+ green cardamom from Idukki misty hills and sun-dried Tellicherry black peppercorns for unmistakable royal warmth.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
      dishName: 'Thalassery Dum Biryani',
      offerBadge: 'ESTATE FRESH HARVEST',
      priceNote: 'Starting at ₹175',
      targetAnchor: '#products',
    },
    {
      id: 'slide-oil',
      badge: 'Cold-Pressed Heritage',
      titlePrefix: 'Sizzle With Pure',
      titleHighlight: 'Roasted Copra',
      titleSuffix: 'Coconut Oil & Spices',
      description: 'Sulfur-free cold-pressed roasted copra oil paired with natural fiery Kashmiri chilli for authentic Kerala nadan curries and fish fries.',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80',
      dishName: 'Coastal Tawa Fish Fry',
      offerBadge: '100% ROASTED COPRA',
      priceNote: 'Starting at ₹235',
      targetAnchor: '#products',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];
  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section className="relative bg-[#12372A] text-white overflow-hidden py-10 sm:py-16 lg:py-20">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#E8AA42]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[450px] h-[450px] bg-[#D9381E]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183E2F] border border-[#2A654F] text-[#E8AA42] text-xs font-bold uppercase tracking-wider shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#E8AA42]" />
              <span>{active.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-[1.15]">
              {active.titlePrefix}{' '}
              <span className="text-[#E8AA42] block sm:inline font-serif italic">
                {active.titleHighlight}
              </span>{' '}
              {active.titleSuffix}
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
              {active.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={active.targetAnchor}
                className="px-7 py-3.5 rounded-full bg-[#D9381E] hover:bg-[#B82912] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-red-950/40 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${whatsappCleanNumber}?text=Hi%20Yumnest,%20I%20would%20like%20to%20order%20pure%20Kerala%20spices.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges Strip */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 text-stone-200">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
                  <Users className="w-4 h-4 text-[#E8AA42]" />
                  <span>50K+</span>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400">Happy Home Cooks*</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
                  <ShieldCheck className="w-4 h-4 text-[#E8AA42]" />
                  <span>100% Pure</span>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400">Zero Chemical Fillers</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-white">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span>4.8 / 5.0</span>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400">Avg. Customer Rating*</p>
              </div>
            </div>

            <p className="text-[10px] text-stone-400 italic">
              *Prototype demonstration metrics for Yumnest product showcase.
            </p>

          </div>

          {/* Right Visual Card with Badge & Dish Platter */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4A373]/30 bg-[#163D2E] group">
              
              {/* Product Background Image */}
              <img
                src={active.image}
                alt={active.dishName}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

              {/* Top Offer Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-1">
                <span className="px-3.5 py-1 rounded-full bg-[#D9381E] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                  {active.offerBadge}
                </span>
              </div>

              {/* Top Right Monogram Medallion */}
              <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#12372A]/90 border border-[#D4A373] flex items-center justify-center shadow-lg">
                <span className="font-serif font-black text-xs text-[#E8AA42]">YN</span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#E8AA42] font-bold uppercase tracking-wider block">
                    Fresh from Kerala Mills
                  </span>
                  <p className="text-base font-serif font-bold text-white">
                    {active.dishName}
                  </p>
                  <span className="text-xs text-stone-300">
                    {active.priceNote}
                  </span>
                </div>

                <a
                  href="#products"
                  className="px-3.5 py-2 rounded-xl bg-[#E8AA42] hover:bg-[#d89931] text-[#12372A] font-black text-xs uppercase tracking-wider transition-colors shadow"
                >
                  View
                </a>
              </div>

            </div>

            {/* Slide Navigation Controls */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#183E2F]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="p-1 rounded-full text-stone-300 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide ? 'w-5 bg-[#E8AA42]' : 'w-1.5 bg-stone-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="p-1 rounded-full text-stone-300 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
