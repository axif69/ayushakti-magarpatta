import React from 'react';
import { 
  Quote, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Award,
  BookOpen,
  Sparkles
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
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2,500-Year-Old Siddha Veda Lineage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50">
            The Founders, The Lineage & Dr. Vaishali
          </h1>
          <p className="max-w-3xl mx-auto text-cream-200/90 text-sm sm:text-base leading-relaxed">
            The story of how ancient Himalayan pulse secrets transformed modern holistic medicine across 9 countries, now serving Magarpatta City with uncompromised clinical excellence.
          </p>
        </div>
      </section>

      {/* 1. THE FOUNDERS SHOWCASE: DR. PANKAJ NARAM & DR. SMITA NARAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
            Our Global Legacy Since 1987
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950">
            Master Healers Who Re-Awakened Ayurveda Worldwide
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Ayushakti was born out of an unbroken spiritual and medical lineage. Meet the visionary founders who proved ancient pulse diagnosis to international medical faculties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* Late Dr. Pankaj Naram Card */}
          <div className="bg-cream-50 rounded-3xl overflow-hidden border border-gold-500/40 shadow-xl flex flex-col justify-between group hover:border-gold-500 transition-all">
            <div>
              <div className="h-96 overflow-hidden relative bg-forest-900">
                <img
                  src="./dr-pankaj-naram.jpg"
                  alt="Master Healer Late Dr. Pankaj Naram"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-5 left-6 right-6 text-cream-50">
                  <span className="text-[11px] font-mono uppercase bg-terracotta-500 px-3 py-1 rounded text-white font-semibold">
                    1955 – 2020
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 mt-2">
                    Late Dr. Pankaj Naram
                  </h3>
                  <p className="text-gold-300 text-xs font-mono">
                    Master Pulse Healer & Siddha Veda Lineage Holder
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  {CLINIC_INFO.founders.drPankajNaram.bio}
                </p>

                <div className="p-4 bg-forest-950 text-cream-100 rounded-2xl border border-gold-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase font-mono">
                    <BookOpen className="w-4 h-4" />
                    <span>The Lineage from Baba Ramdas</span>
                  </div>
                  <p className="text-cream-300/80 leading-relaxed">
                    Under the strict mentorship of his 125-year-old master Baba Ramdas, Dr. Pankaj Naram decoded ancient palm-leaf scrolls describing 28 distinct radial pulse waves (Gatis). His techniques enabled doctors to map chronic ailments long before standard pathology.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <div className="flex items-center justify-between text-xs text-forest-800 font-semibold border-t border-gold-500/20 pt-4">
                <span>Patients Read: 1.5M+ Worldwide</span>
                <span className="text-gold-600 font-mono">Global Icon</span>
              </div>
            </div>
          </div>

          {/* Dr. Smita Naram Card */}
          <div className="bg-cream-50 rounded-3xl overflow-hidden border border-gold-500/40 shadow-xl flex flex-col justify-between group hover:border-gold-500 transition-all">
            <div>
              <div className="h-96 overflow-hidden relative bg-forest-900 flex items-center justify-center">
                <img
                  src="./dr-smita-naram.jpg"
                  alt="Vaidya Dr. Smita Naram"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-5 left-6 right-6 text-cream-50">
                  <span className="text-[11px] font-mono uppercase bg-forest-800 px-3 py-1 rounded text-gold-300 border border-gold-500/30 font-semibold">
                    5th Generation Vaidya
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 mt-2">
                    Vaidya Dr. Smita Naram
                  </h3>
                  <p className="text-gold-300 text-xs font-mono">
                    Co-Founder, Lead Formulator & Clinical Research Head
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  {CLINIC_INFO.founders.drSmitaNaram.bio}
                </p>

                <div className="p-4 bg-forest-950 text-cream-100 rounded-2xl border border-gold-500/20 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase font-mono">
                    <Award className="w-4 h-4" />
                    <span>Published Clinical Trials & US-FDA Compliance</span>
                  </div>
                  <p className="text-cream-300/80 leading-relaxed">
                    Dr. Smita Naram bridged classical herbal alchemy with modern pharmacological testing. Every Ayushakti formula is heavy-metal tested, DNA-fingerprinted for botanical authenticity, and produced in GMP-certified sterile labs.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 pt-2">
              <div className="flex items-center justify-between text-xs text-forest-800 font-semibold border-t border-gold-500/20 pt-4">
                <span>Herbal Formulations: 300+ Standardized</span>
                <span className="text-gold-600 font-mono">37+ Years Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 STAGES OF DISEASE BREAKDOWN (EDUCATIONAL EDITORIAL DEPTH) */}
      <section className="bg-forest-950 text-cream-100 py-20 border-y border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold">
              The Science of Early Reversal: Shad Kriya Kala
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">
              Why Ayushakti Pulse Reading Catches Illness Years Before Lab Scans
            </h2>
            <p className="text-cream-300/80 text-sm leading-relaxed">
              In modern Western pathology, a person is declared "healthy" until blood tests, X-rays, or MRIs show structural cellular damage. In Siddha Veda Ayurveda, disease evolves through 6 distinct biological stages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 1: Sanchaya (Accumulation)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Toxin Build-up in Digestive Fire</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Sluggish digestive enzymes (Manda Agni) cause subtle fermenting toxins (Ama) to gather in stomach and intestines. Detected instantly via Nadi Pariksha. Standard tests: Normal.
              </p>
            </div>

            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 2: Prakopa (Aggravation)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Dosha Irritation & Gas/Acidity</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Toxins begin to ferment and agitate Vata, Pitta, or Kapha. Occasional acid reflux or minor fatigue occurs. Detected via Nadi Pariksha. Standard tests: Normal.
              </p>
            </div>

            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 3: Prasara (Circulation)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Toxins Enter Bloodstream</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Metabolic waste overflows into plasma (Rasa) and blood vessels (Rakta), circulating systemically. Patient feels generalized heaviness. Detected via Nadi Pariksha. Standard tests: Normal.
              </p>
            </div>

            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 4: Sthana Samshraya (Relocation)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Lodging in Weak Organs</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Toxins find vulnerable genetic weak spots: joint cartilage (Arthritis), ovaries (PCOD), cervical spine (Spondylosis), or hair follicles. Detected via Nadi Pariksha. Standard tests: Inconclusive.
              </p>
            </div>

            <div className="p-6 bg-forest-900/90 rounded-2xl border-2 border-terracotta-500 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 5: Vyakti (Manifestation)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Symptoms Explode</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Severe joint swelling, menstrual cessation, intense sciatica, or hair clump shedding. <strong>THIS is where standard blood tests and MRI scans finally show disease.</strong>
              </p>
            </div>

            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-2">
              <span className="text-xs font-mono text-terracotta-400 font-bold uppercase">Stage 6: Bheda (Destruction)</span>
              <h4 className="font-serif text-lg font-bold text-cream-50">Chronic Tissue Destruction</h4>
              <p className="text-xs text-cream-300/80 leading-relaxed">
                Irreversible joint bone erosion, chronic organ failure, or lifelong dependence on steroids. Ayushakti intervenes to arrest degeneration and initiate deep tissue recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET DR. VAISHALI (LEAD PHYSICIAN PROFILE WITH REAL CLINICAL PHOTO) */}
      <section className="bg-cream-200/60 py-20 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border-2 border-gold-500/50 shadow-2xl relative">
                <img
                  src="./dr-vaishali-portrait.jpg"
                  alt="Dr. Vaishali - Lead Ayurvedic Physician Ayushakti Magarpatta"
                  className="w-full h-[520px] object-cover object-top"
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
                    {CLINIC_INFO.doctor.role} • 12+ Years Clinical Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Bio and Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
                Magarpatta Clinical Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                Healing the Root Cause with Compassion & Diagnostic Mastery
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
                  Having consulted over 14,000 patients across Pune with severe metabolic syndrome, rheumatoid arthritis, endocrine collapse (PCOD), and degenerative spine disease, Dr. Vaishali's consultations are celebrated for their warmth, depth, and actionable clarity. She takes time to listen to your entire lifestyle narrative before prescribing a single herb.
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
                  <span>Standardized Panchkarma Supervision</span>
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

      {/* 4. THE MAGARPATTA SANCTUARY (THE ATRIUM CLINIC) */}
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
