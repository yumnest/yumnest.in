'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { Star, ShoppingBag, MessageCircle, Check } from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, variantId: string, quantity: number) => void;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants[0]?.id || ''
  );
  const [added, setAdded] = useState(false);

  const currentVariant =
    product.variants.find((v) => v.id === selectedVariantId) ||
    product.variants[0];

  const unitPrice = currentVariant.salePrice || currentVariant.price;
  const originalPrice = currentVariant.price;
  const hasDiscount = originalPrice > unitPrice;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - unitPrice) / originalPrice) * 100)
    : product.discountPercentage || 0;

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(product, currentVariant.id, 1);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappCleanNumber}?text=${encodeURIComponent(
    `Hello Yumnest! I would like to order: ${product.name} (${currentVariant.weight}) - ₹${unitPrice}`
  )}`;

  return (
    <div className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-[#E8DFC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* 1. Image Container */}
      <div 
        onClick={() => onViewDetails?.(product)}
        className="relative w-full aspect-square bg-[#F5F0E6] overflow-hidden cursor-pointer select-none"
      >
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#12372A] text-[#E8AA42] text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow">
              {product.badge}
            </span>
          )}
          {hasDiscount && (
            <span className="px-2 py-0.5 rounded-full bg-[#D9381E] text-white text-[10px] font-black uppercase tracking-wider shadow">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.primaryImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Quick View Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#12372A] text-xs font-bold shadow-lg">
            Quick Details
          </span>
        </div>
      </div>

      {/* 2. Content Details */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        
        <div className="space-y-1.5">
          {/* Category & Malayalam title */}
          <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500">
            <span className="uppercase font-semibold tracking-wider text-[#8C6D46] truncate">
              {product.category}
            </span>
            {product.malayalamName && (
              <span className="text-[10px] text-stone-400 font-medium truncate">
                {product.malayalamName}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onViewDetails?.(product)}
            className="font-serif font-bold text-sm sm:text-base text-[#1C1917] hover:text-[#D9381E] transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-bold text-stone-800 text-[11px] sm:text-xs">
              {product.rating}
            </span>
            <span className="text-stone-400 text-[10px]">
              ({product.reviewCount})
            </span>
          </div>

          {/* Short description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* 3. Weight / Size Variants Selection */}
        <div className="pt-1">
          <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block mb-1">
            Select Pack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((variant) => {
              const isSelected = variant.id === selectedVariantId;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-tight transition-all ${
                    isSelected
                      ? 'bg-[#12372A] text-white shadow-sm ring-1 ring-[#12372A]'
                      : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
                  }`}
                >
                  {variant.weight}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Price & Action Bar */}
        <div className="pt-2 border-t border-stone-100 flex flex-col gap-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-black text-[#12372A]">
              ₹{unitPrice}
            </span>
            {hasDiscount && (
              <span className="text-xs text-stone-400 line-through">
                ₹{originalPrice}
              </span>
            )}
            <span className="text-[10px] text-emerald-700 font-semibold ml-auto">
              In Stock
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              type="button"
              className={`w-full py-2.5 px-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all duration-200 cursor-pointer ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#D9381E] hover:bg-[#B82912] text-white active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-2 rounded-xl bg-stone-100 hover:bg-emerald-50 text-stone-800 hover:text-emerald-700 border border-stone-200 hover:border-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
