import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Namaste Dr. Vaishali & Ayushakti Magarpatta Team! I would like to enquire about Nadi Pariksha and treatment at The Atrium clinic.");
    window.open(`https://wa.me/917262062525?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-950/95 backdrop-blur-md border-t border-gold-500/30 px-4 py-2.5 sm:hidden shadow-2xl flex items-center justify-between gap-2">
      <a
        href={`tel:${CLINIC_INFO.phone}`}
        className="flex-1 bg-forest-800 hover:bg-forest-700 text-cream-100 text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 border border-gold-500/30 active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-gold-400" />
        <span>Call Now</span>
      </a>

      <button
        onClick={handleWhatsApp}
        className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-3.5 h-3.5 text-white" />
        <span>WhatsApp</span>
      </button>

      <button
        onClick={onOpenBooking}
        className="flex-1 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Visit</span>
      </button>
    </div>
  );
};
