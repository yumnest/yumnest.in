'use client';

import React from 'react';
import { Home, Sparkles, ShoppingBag, MessageCircle, Flame } from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

interface MobileBottomNavProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  cartCount = 0,
  onOpenCart 
}) => {
  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <nav 
      aria-label="Mobile Bottom Navigation" 
      className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#E8DFC8] z-40 px-3 py-2 shadow-2xl"
    >
      <div className="flex items-center justify-around max-w-md mx-auto text-xs">
        {/* Home */}
        <a 
          href="#" 
          className="flex flex-col items-center gap-1 text-[#12372A] p-1.5 focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </a>

        {/* Products */}
        <a 
          href="#products" 
          className="flex flex-col items-center gap-1 text-stone-600 hover:text-[#12372A] p-1.5 focus:outline-none"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Spices</span>
        </a>

        {/* Signature Broast Special */}
        <a 
          href="#broast-special" 
          className="flex flex-col items-center gap-1 text-[#D9381E] p-1.5 focus:outline-none"
        >
          <Flame className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-black uppercase">Broast</span>
        </a>

        {/* Cart */}
        <button 
          onClick={onOpenCart} 
          type="button"
          className="relative flex flex-col items-center gap-1 text-stone-600 hover:text-[#12372A] p-1.5 focus:outline-none"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 rounded-full bg-[#D9381E] text-white font-bold text-[9px] flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-semibold">Cart</span>
        </button>

        {/* WhatsApp Direct */}
        <a 
          href={`https://wa.me/${whatsappCleanNumber}?text=Hi%20Yumnest,%20I%20would%20like%20to%20order%20pure%20spices.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-emerald-600 p-1.5 focus:outline-none"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-bold">Order</span>
        </a>
      </div>
    </nav>
  );
};
