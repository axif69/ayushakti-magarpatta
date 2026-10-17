import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-forest-950 text-cream-200 border-t border-gold-500/30 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold-500/60 p-1 flex items-center justify-center bg-forest-900 shadow-md">
                <img src="./ayushakti-logo.png" alt="Ayushakti Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                  AYUSHAKTI
                </span>
                <p className="text-[10px] tracking-widest uppercase font-mono text-terracotta-400">
                  MAGARPATTA FRANCHISE
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-300/80 leading-relaxed font-body">
              Root-cause Ayurvedic healing, pulse diagnosis, and authentic Panchkarma right in Magarpatta City. Backed by a 37-year global legacy and 1.5M+ patients healed worldwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-400">
              <Award className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Siddha Veda Lineage & US-FDA / GMP Formulations</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg text-cream-50 font-semibold mb-4 border-b border-gold-500/20 pb-2">
              Website Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Home & Clinic Overview</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Treatments & Panchkarma Therapies</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Targeted Programs (PCOD, Hair, Spine)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>1987 Legacy & Meet Dr. Vaishali</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>Clinic Location & Booking Form</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Treatments List */}
          <div>
            <h4 className="font-serif text-lg text-cream-50 font-semibold mb-4 border-b border-gold-500/20 pb-2">
              Signature Therapies
            </h4>
            <ul className="space-y-2 text-sm text-cream-300/80">
              <li className="flex items-center justify-between">
                <span>Nadi Pariksha (Pulse Reading)</span>
                <span className="text-xs text-gold-500">Root Diagnosis</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Authentic Panchkarma Detox</span>
                <span className="text-xs text-gold-500">7-21 Days</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Agnikarma Pain Relief</span>
                <span className="text-xs text-gold-500">Zero Surgery</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Hridaya Basti Heart Warmth</span>
                <span className="text-xs text-gold-500">Cardio-Calm</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Abhyanga & Marma Therapy</span>
                <span className="text-xs text-gold-500">Nerve Reset</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg text-cream-50 font-semibold mb-4 border-b border-gold-500/20 pb-2">
              Visit The Clinic
            </h4>
            <div className="space-y-3 text-sm text-cream-300/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-gold-400 hover:underline font-mono text-xs">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs">{CLINIC_INFO.hours}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cream-400/60 gap-4">
          <p>
            © {new Date().getFullYear()} Ayushakti Ayurved Magarpatta Franchise Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Lead Physician: Dr. Vaishali (B.A.M.S.)</span>
            <span className="hidden sm:inline">•</span>
            <span>Ayushakti Global Research & Standardized Healing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
