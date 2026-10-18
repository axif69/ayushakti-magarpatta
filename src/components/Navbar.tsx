import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, ChevronRight, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: (prefillTherapy?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      desc: 'Nadi Pariksha, Panchkarma, Agnikarma, Kati Basti',
      icon: '✨',
    },
    {
      id: 'programs',
      label: 'Targeted Health Programs',
      desc: 'PCOD, Hair & Scalp, Gut Agni, IT Neck/Spine',
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
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro bar for authority */}
      <div className="bg-forest-950 text-gold-300 text-xs py-1.5 px-4 tracking-wider uppercase border-b border-forest-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              Official Ayushakti Franchise • 37-Year Global Healing Lineage
            </span>
            <span className="flex items-center gap-1 text-cream-300/80">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              The Atrium, Magarpatta City, Pune
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cream-200">Consultation Mon–Sat: 10AM – 7:30PM</span>
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="text-gold-400 hover:text-gold-300 font-medium flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" /> {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-900/98 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-2.5 text-cream-100'
            : currentPage === 'home'
            ? 'bg-forest-900/90 backdrop-blur-sm border-b border-white/10 py-3 text-cream-100'
            : 'bg-forest-900 border-b border-gold-500/20 py-3 text-cream-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <button 
            onClick={() => handlePageSelect('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/60 p-1 flex items-center justify-center bg-forest-950 shadow-md group-hover:border-gold-400 transition-colors shrink-0">
              <img src="./ayushakti-logo.png" alt="Ayushakti Emblem" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-cream-50 group-hover:text-gold-300 transition-colors">
                  AYUSHAKTI
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-mono px-1.5 py-0.5 rounded bg-terracotta-500/20 text-terracotta-400 border border-terracotta-500/30 shrink-0">
                  MAGARPATTA
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-gold-400/90 tracking-wide font-sans truncate">
                Ayurvedic Clinic & Panchkarma Centre
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                  currentPage === link.id
                    ? 'text-gold-400 font-semibold'
                    : 'text-cream-200/90 hover:text-gold-300'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action CTA (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cream-200 hover:text-gold-300 border border-gold-500/30 px-3.5 py-2 rounded-full transition-all hover:border-gold-400"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs md:text-sm font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Nadi Pariksha</span>
            </button>
          </div>

          {/* Mobile Navigation Trigger: Prominent and Unmissable */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-forest-800/95 hover:bg-forest-700 text-gold-300 border border-gold-500/60 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cream-100">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cream-100">Pages</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Full-Height Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 z-50 bg-forest-950/98 backdrop-blur-xl border-t border-gold-500/30 overflow-y-auto px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-forest-800">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-gold-400 font-semibold">
                <Compass className="w-4 h-4 text-gold-500" />
                Select Page (5 Multi-Pages)
              </span>
              <span className="text-[11px] text-cream-400/80">Tap to navigate</span>
            </div>

            <div className="space-y-2.5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handlePageSelect(link.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-forest-800/90 border-gold-500 text-cream-50 shadow-md ring-1 ring-gold-500/50'
                        : 'bg-forest-900/60 border-forest-800 text-cream-200 hover:bg-forest-800/50 active:bg-forest-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl p-2 rounded-lg bg-forest-950 border border-gold-500/20 shrink-0">
                        {link.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base font-semibold text-cream-100">
                            {link.label}
                          </span>
                          {isActive && (
                            <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-400 border border-gold-500/40 font-bold">
                              Current Page
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-cream-300/70 font-sans mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-gold-400' : 'text-cream-400/40'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Actions at bottom of mobile menu */}
            <div className="pt-4 border-t border-forest-800 space-y-2.5 pb-20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 active:scale-98 text-white py-3 rounded-xl text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" /> Book Nadi Pariksha Visit
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-gold-500/40 text-gold-300 rounded-xl text-sm font-semibold hover:bg-forest-900 active:bg-forest-800"
              >
                <Phone className="w-4 h-4" /> Call Clinic: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

