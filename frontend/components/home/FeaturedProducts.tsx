'use client';

import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart?: (product: Product, variantId: string, quantity: number) => void;
  onViewProduct?: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onViewProduct,
}) => {
  const categoriesList = [
    'All Products',
    'Broast Powder',
    'Masala Powders',
    'Spice Blends',
    'Coconut Oil',
    'Special Mixes',
  ];

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DFC8] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A]/10 text-[#12372A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E8AA42]" />
              <span>Small-Batch Pure Milling</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#12372A]">
              Our Signature Spice Collection
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Authentic Kerala spices milled at low temperature to protect natural flavour and volatile essential oils.
            </p>
          </div>

          {/* Category Filter Pills (Desktop & Tablet) */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoriesList.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer ${
                    active
                      ? 'bg-[#12372A] text-white shadow-md'
                      : 'bg-[#F4EFE6] text-stone-700 hover:bg-stone-200/80 border border-[#E8DFC8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            <p className="text-base font-semibold">No products found in this category.</p>
            <button
              onClick={() => onSelectCategory('All Products')}
              className="mt-3 px-4 py-2 rounded-full bg-[#12372A] text-white text-xs font-bold uppercase"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
