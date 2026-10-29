import React from 'react';
import { Award, PackageCheck, Truck, Sparkles } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Export Quality Graded',
      description: 'Hand-picked from certified Wayanad & Idukki high-range estates.',
    },
    {
      icon: PackageCheck,
      title: 'Hygienically Packed',
      description: 'Triple-layer sealed packaging to lock in natural essential aroma.',
    },
    {
      icon: Truck,
      title: 'Fast All-India Shipping',
      description: 'Carefully packed and dispatched directly from our Kerala facility.',
    },
    {
      icon: Sparkles,
      title: '100% Pure & Natural',
      description: 'Strictly zero MSG, no artificial food colours, and no preservatives.',
    },
  ];

  return (
    <section className="bg-[#F4EFE6] border-y border-[#E8DFC8] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-[#E8DFC8]/60 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#12372A] text-[#E8AA42] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#12372A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
