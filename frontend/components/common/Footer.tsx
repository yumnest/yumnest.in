import React from 'react';
import { BrandLogo } from './BrandLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  HeartHandshake, 
  ArrowUp
} from 'lucide-react';
import { SITE_SETTINGS } from '@/data/mockData';

export const Footer: React.FC = () => {
  const whatsappCleanNumber = SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <footer id="footer" className="bg-[#0A2219] text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-[#183E2F] relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8AA42]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#12372A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Value Trust Grid Bar inside footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-stone-800">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-11 h-11 rounded-xl bg-[#E8AA42]/10 flex items-center justify-center text-[#E8AA42] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">100% Pure & Preservative Free</h3>
              <p className="text-xs text-stone-400">Zero MSG, no synthetic colours or fillers</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-11 h-11 rounded-xl bg-[#E8AA42]/10 flex items-center justify-center text-[#E8AA42] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">All India Safe Delivery</h3>
              <p className="text-xs text-stone-400">Nitrogen-sealed freshness packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-11 h-11 rounded-xl bg-[#E8AA42]/10 flex items-center justify-center text-[#E8AA42] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Kerala High-Range Sourcing</h3>
              <p className="text-xs text-stone-400">Single-estate Wayanad & Idukki spices</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo isLight />
            <p className="text-stone-400 text-sm leading-relaxed pr-4">
              Yumnest brings you the authentic culinary soul of Kerala. From our legendary crispy broast masala to bold Idukki cardamoms and cold-pressed coconut oil, we deliver uncompromised purity to family kitchens.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${whatsappCleanNumber}?text=Hi%20Yumnest,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-serif font-bold text-white text-base tracking-wide">Quick Links</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Our Spices</a></li>
              <li><a href="#broast-special" className="hover:text-[#E8AA42] transition-colors">Signature Broast</a></li>
              <li><a href="#about" className="hover:text-[#E8AA42] transition-colors">Heritage Story</a></li>
              <li><a href="#recipes" className="hover:text-[#E8AA42] transition-colors">Recipe Vlogs</a></li>
              <li><a href="#awards" className="hover:text-[#E8AA42] transition-colors">Quality Standards</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif font-bold text-white text-base tracking-wide">Categories</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Broast Masala Powders</a></li>
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Stone-Ground Masala</a></li>
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Single Estate Whole Spices</a></li>
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Cold-Pressed Coconut Oil</a></li>
              <li><a href="#products" className="hover:text-[#E8AA42] transition-colors">Shawaya & Alfaham Mixes</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-serif font-bold text-white text-base tracking-wide">Customer Support</p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8AA42] shrink-0 mt-0.5" />
                <span>{SITE_SETTINGS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <a href={`tel:${SITE_SETTINGS.supportPhone}`} className="hover:text-white transition-colors">
                  {SITE_SETTINGS.supportPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8AA42] shrink-0" />
                <a href={`mailto:${SITE_SETTINGS.supportEmail}`} className="hover:text-white transition-colors">
                  {SITE_SETTINGS.supportEmail}
                </a>
              </li>
              <li className="pt-2 text-xs text-stone-500">
                Mon - Sat: 9:00 AM - 7:00 PM IST
              </li>
            </ul>
          </div>

        </div>

        {/* Prototype Scope Disclosure & Copyright Notice */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-400 space-y-3">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-stone-800/80 text-[11px] leading-relaxed text-stone-400">
            <strong className="text-stone-300">Phase 1 Frontend Prototype:</strong> This interface showcases the brand visual identity, product catalog presentation, and responsive customer experience for Yumnest. Customer reviews, certifications, and awards shown in this prototype are illustrative sample data. E-commerce checkout, payment gateway, and backend database integrations are scheduled for subsequent production phases.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 pt-2">
            <p>© 2026 Yumnest Spices & Foods Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
              <span>•</span>
              <a href="#" className="inline-flex items-center gap-1 hover:text-[#E8AA42] transition-colors">
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
