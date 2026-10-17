import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
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

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments & Therapies' },
    { id: 'programs', label: 'Targeted Programs' },
    { id: 'about', label: 'Legacy & Doctor' },
    { id: 'contact', label: 'Contact & Map' },
  ];

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
            ? 'bg-forest-700/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-3 text-cream-100'
            : currentPage === 'home'
            ? 'bg-forest-900/60 backdrop-blur-sm border-b border-white/10 py-4 text-cream-100'
            : 'bg-forest-700 border-b border-gold-500/20 py-4 text-cream-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <button 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-gold-500/60 p-1 flex items-center justify-center bg-forest-900/90 shadow-md group-hover:border-gold-400 transition-colors">
              <img src="./ayushakti-logo.png" alt="Ayushakti Emblem" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-cream-50 group-hover:text-gold-300 transition-colors">
                  AYUSHAKTI
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono px-1.5 py-0.5 rounded bg-terracotta-500/20 text-terracotta-400 border border-terracotta-500/30">
                  MAGARPATTA
                </span>
              </div>
              <p className="text-[11px] text-gold-400/90 tracking-wide font-sans">
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

          {/* Right Action CTA */}
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

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-terracotta-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 sm:hidden"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-cream-200 hover:text-white hover:bg-forest-600/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-forest-900 border-t border-forest-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-forest-800 text-gold-400 font-semibold'
                    : 'text-cream-200 hover:bg-forest-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-forest-800 space-y-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-gold-500/40 text-gold-300 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" /> Call: {CLINIC_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-lg text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" /> Book Nadi Pariksha
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
