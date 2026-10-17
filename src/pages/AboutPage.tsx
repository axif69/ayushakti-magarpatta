import React from 'react';
import { 
  ShieldCheck, 
  Quote, 
  Calendar, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutPageProps {
  onOpenBooking: (prefillTherapy?: string) => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900">
      {/* Hero Header */}
      <section className="bg-forest-950 text-cream-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#CFAF7E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold inline-block">
            37+ Years of Authentic Healing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50">
            The Legacy & Lead Doctor
          </h1>
          <p className="max-w-2xl mx-auto text-cream-200/90 text-sm sm:text-base leading-relaxed">
            Rooted in the ancient 2,500-year-old Siddha Veda lineage, Ayushakti brings time-tested pulse wisdom and standardized holistic protocols right to Magarpatta City.
          </p>
        </div>
      </section>

      {/* 1. THE 1987 FOUNDATIONAL LEGACY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
              The Lineage Since 1987
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight">
              A Global Healing Movement Rooted in Siddha Veda
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
              In 1987, Master Healer <strong>Late Dr. Pankaj Naram</strong> and <strong>Vaidya Dr. Smita Naram</strong> (a 5th generation classical Vaidya) embarked on a mission: to liberate humanity from chronic, debilitating diseases through pure, uncompromising Ayurvedic science.
            </p>
            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
              Over the last 37+ years, Ayushakti has grown from a humble Mumbai sanctuary to a globally revered institution operating in <strong>9 countries</strong> (including Germany, Switzerland, the United States, UK, and Australia) and over <strong>29+ clinics across Maharashtra</strong>. Over <strong>1.5 Million individuals worldwide</strong> have experienced profound biological recovery through Ayushakti's certified formulations and pulse diagnostics.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-cream-50 rounded-xl border border-gold-500/30">
                <div className="font-serif text-2xl font-bold text-forest-900">1.5 Million+</div>
                <div className="text-xs text-charcoal-600 mt-1">Lives Transformed Globally</div>
              </div>
              <div className="p-4 bg-cream-50 rounded-xl border border-gold-500/30">
                <div className="font-serif text-2xl font-bold text-forest-900">9 Countries</div>
                <div className="text-xs text-charcoal-600 mt-1">Global Medical Recognition</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512290900672-1f55b9e0f316?auto=format&fit=crop&w=1200&q=80"
                alt="Ayushakti Ayurvedic Heritage & Copper Vessels"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream-100 space-y-2">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>US-FDA Inspected & GMP Certified</span>
                </div>
                <p className="font-serif text-xl font-bold text-cream-50">
                  Standardized Herbal Purity & Research
                </p>
                <p className="text-xs text-cream-200/80">
                  All Ayushakti remedies undergo heavy-metal testing, microbiological screening, and clinical batch validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET DR. VAISHALI (PROFILE SECTION) */}
      <section className="bg-cream-200/60 py-20 border-y border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-gold-500/50 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1594824813589-9800742f10b7?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Vaishali - Lead Ayurvedic Physician Ayushakti Magarpatta"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                    Dr. Vaishali
                  </h3>
                  <p className="text-gold-300 font-mono text-xs mt-1">
                    {CLINIC_INFO.doctor.degrees}
                  </p>
                  <p className="text-cream-200/80 text-xs mt-0.5">
                    {CLINIC_INFO.doctor.role} • 12+ Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Bio and Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
                Lead Physician Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                Healing the Root Cause with Compassion & Clinical Rigor
              </h2>

              {/* Quote Block as requested in prompt */}
              <div className="p-6 bg-forest-950 text-cream-100 rounded-2xl border-l-4 border-gold-500 relative">
                <Quote className="w-8 h-8 text-gold-400/40 absolute top-4 right-4" />
                <p className="font-serif text-xl sm:text-2xl italic text-cream-50">
                  "{CLINIC_INFO.doctor.quote}"
                </p>
                <span className="text-xs text-gold-400 font-mono uppercase tracking-wider block mt-2">
                  — Dr. Vaishali, Ayushakti Magarpatta
                </span>
              </div>

              <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed">
                <p>
                  {CLINIC_INFO.doctor.bio}
                </p>
                <p>
                  Having consulted patients with severe metabolic syndrome, rheumatoid flare-ups, endocrine collapse, and degenerative spine disease, Dr. Vaishali's consultations are celebrated for their warmth, depth, and actionable clarity. She takes time to listen to your entire lifestyle narrative before prescribing a single herb.
                </p>
              </div>

              {/* Core Doctor Specialities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Siddha Veda Nadi Pariksha Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Classical Panchkarma Supervision</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Agnikarma Pain Micro-Therapy</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Circadian & Dosha Nutrition Design</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenBooking('Nadi Pariksha with Dr. Vaishali')}
                  className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Vaishali</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="bg-forest-900 hover:bg-forest-800 text-cream-100 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
                >
                  <span>Clinic Desk: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE MAGARPATTA SANCTUARY (THE ATRIUM CLINIC) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
            The Clinic Environment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            A Serene Healing Sanctuary at The Atrium
          </h2>
          <p className="text-charcoal-600 text-sm">
            Step away from traffic, deadlines, and screen strain into a tranquil space designed for sensory grounding and rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-cream-50 p-6 rounded-2xl border border-gold-500/30 space-y-3">
            <h4 className="font-serif font-bold text-lg text-forest-950">Private Consultation Suites</h4>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Quiet, temperature-regulated doctor chambers where your pulse can settle into a calm resting state before diagnosis.
            </p>
          </div>

          <div className="bg-cream-50 p-6 rounded-2xl border border-gold-500/30 space-y-3">
            <h4 className="font-serif font-bold text-lg text-forest-950">Authentic Panchkarma Rooms</h4>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Fitted with traditional solid wood Droni massage tables, sterile copper steam cabinets, and continuous warm oil drip apparatus.
            </p>
          </div>

          <div className="bg-cream-50 p-6 rounded-2xl border border-gold-500/30 space-y-3">
            <h4 className="font-serif font-bold text-lg text-forest-950">Pure Herbal Pharmacy</h4>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Direct access to authentic Ayushakti botanical tablets, therapeutic syrups, medicated tailams, and herbal teas.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('treatments')}
            className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-cream-100 font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>Explore The Treatments We Offer at The Atrium</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
