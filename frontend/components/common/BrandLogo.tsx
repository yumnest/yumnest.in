import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8AA42] rounded-xl p-1 ${className}`}
      aria-label="Yumnest Home"
    >
      {/* Medallion Badge */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#12372A] border-2 border-[#D4A373] shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
        <span className="font-serif font-black text-lg tracking-wider text-[#E8AA42]">YN</span>
        <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span className={`text-xl font-bold tracking-tight font-serif transition-colors ${isLight ? 'text-white' : 'text-[#12372A]'}`}>
          Yumnest
        </span>
        <span className={`text-[10px] tracking-[0.22em] font-semibold uppercase ${isLight ? 'text-amber-200/90' : 'text-[#8C6D46]'}`}>
          Foods • Pure Spices
        </span>
      </div>
    </Link>
  );
};
