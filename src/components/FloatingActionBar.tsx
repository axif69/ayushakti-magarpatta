import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Compass, X, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Namaste Dr. Vaishali & Ayushakti Magarpatta Team! I would like to enquire about Nadi Pariksha and treatment at The Atrium clinic.");
    window.open(`https://wa.me/917262062525?text=${text}`, '_blank');
  };

  const navLinks = [
    {
      id: 'home',
      label: 'Home',
      desc: 'Ancient Wisdom • 37-Year Global Legacy',
      icon: '🌿',
    },
    {
      id: 'treatments',
      label: 'Treatments & Therapies',
      desc: 'Nadi Pariksha, Panchkarma, Agnikarma',
      icon: '✨',
    },
    {
      id: 'programs',
      label: 'Targeted Health Programs',
      desc: 'PCOD, Hair, Gut Agni & Desk Slouch',
      icon: '🎯',
    },
    {
      id: 'about',
      label: 'Legacy & Doctor',
      desc: 'Lineage & Meet Dr. Vaishali (B.A.M.S.)',
      icon: '📜',
    },
    {
      id: 'contact',
      label: 'Contact & Map',
      desc: 'The Atrium, Magarpatta City Clinic',
      icon: '📍',
    },
  ];

  const handlePageSelect = (pageId: string) => {
    onNavigate(pageId);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Mobile Page Navigator Bottom Sheet */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-end sm:hidden animate-in fade-in duration-200"
          onClick={() => setDrawerOpen(false)}
        >
          <div 
            className="bg-forest-950 border-t-2 border-gold-500 rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto space-y-3.5 shadow-2xl animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-forest-800">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold-400" />
                <span className="font-serif text-lg font-bold text-cream-50">Switch Website Page</span>
              </div>
              <button 
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handlePageSelect(link.id)}
                    className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-forest-800 border-gold-400 text-cream-50 shadow-md ring-1 ring-gold-500/50'
                        : 'bg-forest-900/80 border-forest-800 text-cream-200 hover:bg-forest-850'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl p-1.5 rounded-lg bg-forest-950 border border-gold-500/20">
                        {link.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-semibold text-cream-100">
                            {link.label}
                          </span>
                          {isActive && (
                            <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-400 font-bold border border-gold-500/40">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-cream-300/70 mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-cream-400/40'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-950/98 backdrop-blur-md border-t border-gold-500/30 px-3 py-2 sm:hidden shadow-2xl flex items-center justify-between gap-1.5">
        {/* Menu / Pages Button */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={`flex-1 ${
            drawerOpen ? 'bg-forest-750 border-gold-400 text-gold-300' : 'bg-forest-900 border-gold-500/30 text-cream-100'
          } hover:bg-forest-800 text-[11px] font-semibold py-2 px-1.5 rounded-lg flex flex-col items-center justify-center gap-1 border active:scale-95 transition-transform`}
        >
          <Compass className="w-4 h-4 text-gold-400" />
          <span>Pages</span>
        </button>

        {/* Call Now Button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 bg-forest-850 hover:bg-forest-800 text-cream-100 text-[11px] font-semibold py-2 px-1.5 rounded-lg flex flex-col items-center justify-center gap-1 border border-gold-500/30 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-white text-[11px] font-semibold py-2 px-1.5 rounded-lg flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform shadow"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </button>

        {/* Book Visit Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.2] bg-terracotta-500 hover:bg-terracotta-600 text-white text-[11px] font-bold py-2 px-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
};

