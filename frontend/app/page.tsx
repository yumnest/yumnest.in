'use client';

import React, { useState } from 'react';
import { PRODUCTS, RECIPES } from '@/data/mockData';
import { Product } from '@/types';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { MobileBottomNav } from '@/components/common/MobileBottomNav';
import { CartDrawer, CartLineItem } from '@/components/common/CartDrawer';
import { QuickViewModal } from '@/components/common/QuickViewModal';
import { SearchModal } from '@/components/common/SearchModal';

import { HeroSection } from '@/components/home/HeroSection';
import { ValuePillars } from '@/components/home/ValuePillars';
import { CategoryCircles } from '@/components/home/CategoryCircles';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { BroastPromoBanner } from '@/components/home/BroastPromoBanner';
import { HomeAboutStory } from '@/components/home/HomeAboutStory';
import { HomeRecipesPreview } from '@/components/home/HomeRecipesPreview';
import { TrustAndAwards } from '@/components/home/TrustAndAwards';
import { CustomerTestimonials } from '@/components/home/CustomerTestimonials';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [cartItems, setCartItems] = useState<CartLineItem[]>([
    {
      id: 'broast-masala-powder-v-b1',
      product: PRODUCTS[0],
      variant: PRODUCTS[0].variants[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const broastProduct = PRODUCTS.find((p) => p.id === 'broast-masala-powder') || PRODUCTS[0];

  const handleAddToCart = (product: Product, variantId: string, quantity: number) => {
    const variant =
      product.variants.find((v) => v.id === variantId) || product.variants[0];
    const lineId = `${product.id}-${variant.id}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === lineId);
      if (existing) {
        return prev.map((item) =>
          item.id === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: lineId, product, variant, quantity }];
    });
  };

  const handleUpdateQuantity = (lineId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === lineId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartLineItem[]
    );
  };

  const handleRemoveItem = (lineId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== lineId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] selection:bg-[#E8AA42]/30 selection:text-[#12372A]">
      {/* 1. Global Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Showcase Slider */}
        <HeroSection />

        {/* 3. Four Value Pillars Bar */}
        <ValuePillars />

        {/* 4. Circular Category Navigation with Malayalam Subtitles */}
        <CategoryCircles
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Complete Featured Products Collection */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onViewProduct={(prod) => setQuickViewProduct(prod)}
        />

        {/* 6. Signature Broast Masala Spotlight Promo Banner */}
        <BroastPromoBanner
          broastProduct={broastProduct}
          onAddToCart={handleAddToCart}
          onViewProduct={(prod) => setQuickViewProduct(prod)}
        />

        {/* 7. Authentic Kerala Heritage & Processing Story */}
        <HomeAboutStory />

        {/* 8. Cooking Inspiration & Recipe Vlogs Preview */}
        <HomeRecipesPreview recipes={RECIPES} />

        {/* 9. Standards, Quality & Awards (Sample Data Disclosed) */}
        <TrustAndAwards />

        {/* 10. Sample Customer Testimonials (Sample Data Disclosed) */}
        <CustomerTestimonials />

        {/* 11. Closing Call-to-Action Banner */}
        <CtaBanner />
      </main>

      {/* 12. Global Comprehensive Footer */}
      <Footer />

      {/* 13. Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 14. Interactive Slide-in Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 15. Product Quick View & Specification Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 16. Quick Real-Time Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(prod) => {
          setQuickViewProduct(prod);
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
}
