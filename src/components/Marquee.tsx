import React from 'react';
import { Award, Globe, Users, HeartHandshake, Sparkles, Building2 } from 'lucide-react';

export const Marquee: React.FC = () => {
  const marqueeItems = [
    { icon: <Award className="w-4 h-4 text-gold-400" />, text: "Since 1987 (37+ Years Legacy)" },
    { icon: <Users className="w-4 h-4 text-gold-400" />, text: "1.5M+ Healed Globally" },
    { icon: <Globe className="w-4 h-4 text-gold-400" />, text: "Clinics in 9 Countries Worldwide" },
    { icon: <Building2 className="w-4 h-4 text-gold-400" />, text: "29+ Clinics in Maharashtra" },
    { icon: <Sparkles className="w-4 h-4 text-gold-400" />, text: "Sacred Siddha Veda Lineage" },
    { icon: <HeartHandshake className="w-4 h-4 text-gold-400" />, text: "Standardized Global Panchkarma Protocols" },
    { icon: <Award className="w-4 h-4 text-gold-400" />, text: "US FDA-Inspected & GMP Certified Formulations" },
    { icon: <Sparkles className="w-4 h-4 text-gold-400" />, text: "Published Peer-Reviewed Clinical Research" },
  ];

  return (
    <div className="bg-forest-900 border-y border-gold-500/25 py-3.5 overflow-hidden relative select-none">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-forest-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-forest-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 text-cream-100 font-sans tracking-wide text-xs md:text-sm uppercase font-medium">
            <span className="p-1 rounded bg-forest-800/80 border border-gold-500/20">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-gold-500 font-serif text-lg leading-none select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
