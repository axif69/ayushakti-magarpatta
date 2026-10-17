import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Star
} from 'lucide-react';
import { Marquee } from '../components/Marquee';
import { CLINIC_INFO, TESTIMONIALS, FAQS } from '../data/clinicData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (prefillTherapy?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-forest-950 text-cream-100 px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Editorial Background Image with Rich Parallax Feeling and Deep Contrast */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />

        {/* Subtle radial gradient overlay for high editorial contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-forest-950 via-forest-900/80 to-forest-950/90 pointer-events-none" />

        {/* Subtle decorative gold circle lines */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gold-500/10 pointer-events-none -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gold-500/10 pointer-events-none -bottom-20 -left-20" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Top subtle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800/80 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest backdrop-blur-sm shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Ayushakti Magarpatta • Official Franchise Clinic</span>
          </div>

          {/* Master Heading */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-50 leading-[1.12]">
              Ancient Wisdom. <br />
              <span className="italic font-normal text-gold-400">Modern Balance.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-cream-200/90 font-light leading-relaxed">
              Root-cause Ayurvedic healing, right here in Magarpatta. Backed by a 37-year global legacy, authentic Nadi Pariksha, and standardized Panchkarma.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking('Nadi Pariksha (Pulse Reading Consultation)')}
              className="w-full sm:w-auto bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-sm sm:text-base font-semibold uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:shadow-terracotta-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2.5 active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Nadi Pariksha</span>
            </button>

            <button
              onClick={() => onNavigate('treatments')}
              className="w-full sm:w-auto bg-forest-900/70 hover:bg-forest-800 text-cream-100 font-sans text-sm sm:text-base font-medium px-8 py-4 rounded-full border border-gold-500/30 hover:border-gold-400 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

          {/* Proof Badges Below CTA */}
          <div className="pt-8 border-t border-forest-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-cream-200/80 text-xs">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-gold-400">1987</span>
              <span className="text-[11px] tracking-wider uppercase text-cream-300/70">Healing Legacy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-gold-400">1.5M+</span>
              <span className="text-[11px] tracking-wider uppercase text-cream-300/70">Global Patients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-gold-400">Dr. Vaishali</span>
              <span className="text-[11px] tracking-wider uppercase text-cream-300/70">Lead Physician</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-gold-400">The Atrium</span>
              <span className="text-[11px] tracking-wider uppercase text-cream-300/70">Magarpatta City</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE AUTHORITY BAR (Infinite Scrolling Marquee) */}
      <Marquee />

      {/* 3. THE "WHY US" SECTION (3 Columns with Subtle Line Art Icons) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
            The Ayushakti Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950">
            Why Magarpatta Trusts Ayushakti
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            We don't suppress symptoms with temporary relief. We diagnose the root biological trigger and reset your cellular memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Nadi Pariksha */}
          <div className="bg-cream-50 rounded-2xl p-8 border border-gold-500/30 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:bg-forest-800 transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                1. Nadi Pariksha
              </h3>
              <p className="text-xs uppercase font-mono text-terracotta-500 font-semibold tracking-wider">
                Deep Pulse Reading
              </p>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                The ancient art of reading your body's story. By feeling 3 levels of your pulse across 28 metabolic metrics, Dr. Vaishali detects Dosha imbalances and hidden organ toxicity before symptoms erupt.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gold-500/20">
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-forest-700 hover:text-terracotta-500 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Explore Pulse Science</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Personalized Protocols */}
          <div className="bg-cream-50 rounded-2xl p-8 border border-gold-500/30 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:bg-forest-800 transition-colors">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                2. Personalized Protocols
              </h3>
              <p className="text-xs uppercase font-mono text-terracotta-500 font-semibold tracking-wider">
                No Generic Diets. Only YOU-Shaped Healing
              </p>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Your constitution (Prakruti) is as unique as your thumbprint. We provide customized nutrition charts, kitchen spice formulas, and circadian lifestyle adjustments tuned directly to your daily routine.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gold-500/20">
              <button
                onClick={() => onNavigate('programs')}
                className="text-xs font-semibold text-forest-700 hover:text-terracotta-500 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>View Targeted Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 3: Authentic Panchkarma */}
          <div className="bg-cream-50 rounded-2xl p-8 border border-gold-500/30 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:bg-forest-800 transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                3. Authentic Panchkarma
              </h3>
              <p className="text-xs uppercase font-mono text-terracotta-500 font-semibold tracking-wider">
                Standardized Global Detox
              </p>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                The exact same clinical cleansing protocols utilized in Ayushakti centres in Germany, Switzerland, and Mumbai. Authentic medicated herbal oils, copper steaming, and clinical bio-purification.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gold-500/20">
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-forest-700 hover:text-terracotta-500 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Panchkarma Protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TREATMENTS (Horizontal Scrolling / Interactive Cards) */}
      <section className="py-20 bg-forest-900 text-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold">
                Clinical Therapies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mt-2">
                Signature Ayurvedic Therapies
              </h2>
              <p className="text-cream-300/80 text-sm mt-2 max-w-xl">
                Administered by certified therapists under the direct medical supervision of Dr. Vaishali at The Atrium, Magarpatta.
              </p>
            </div>

            <button
              onClick={() => onNavigate('treatments')}
              className="mt-4 md:mt-0 text-sm text-gold-400 hover:text-gold-300 font-medium flex items-center gap-2 group"
            >
              <span>View All 5 Therapies</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Panchkarma */}
            <div className="bg-forest-950 rounded-2xl overflow-hidden border border-gold-500/30 flex flex-col group hover:border-gold-400 transition-all">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80"
                  alt="Authentic Panchkarma"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest-900/90 text-gold-300 text-xs px-2.5 py-1 rounded-full border border-gold-500/30 backdrop-blur-sm">
                  Deep Cellular Detox
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-cream-50 font-bold">
                    Authentic Panchkarma
                  </h3>
                  <p className="text-xs text-gold-400 italic font-serif mt-1">
                    The ultimate deep reset.
                  </p>
                  <p className="text-cream-300/80 text-xs mt-3 leading-relaxed">
                    Standardized multi-stage cleanse eliminating deep seated metabolic toxins (Ama) from joints, liver, and micro-channels.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                  <span className="text-xs text-cream-400 font-mono">7 to 21 Days</span>
                  <button
                    onClick={() => onOpenBooking('Authentic Panchkarma Detox')}
                    className="text-xs bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-full font-semibold"
                  >
                    Book Consult
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Agnikarma */}
            <div className="bg-forest-950 rounded-2xl overflow-hidden border border-gold-500/30 flex flex-col group hover:border-gold-400 transition-all">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
                  alt="Agnikarma Pain Relief"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest-900/90 text-gold-300 text-xs px-2.5 py-1 rounded-full border border-gold-500/30 backdrop-blur-sm">
                  Instant Pain Relief
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-cream-50 font-bold">
                    Agnikarma Thermal Therapy
                  </h3>
                  <p className="text-xs text-gold-400 italic font-serif mt-1">
                    Instant pain relief. No surgery.
                  </p>
                  <p className="text-cream-300/80 text-xs mt-3 leading-relaxed">
                    Specialized micro-thermal probe application targeting frozen shoulder, sciatica, knee degeneration, and spondylosis.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                  <span className="text-xs text-cream-400 font-mono">20 - 30 Mins</span>
                  <button
                    onClick={() => onOpenBooking('Agnikarma Instant Pain Relief')}
                    className="text-xs bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-full font-semibold"
                  >
                    Book Consult
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Hridaya Basti */}
            <div className="bg-forest-950 rounded-2xl overflow-hidden border border-gold-500/30 flex flex-col group hover:border-gold-400 transition-all">
              <div className="h-52 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Hridaya Basti"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest-900/90 text-gold-300 text-xs px-2.5 py-1 rounded-full border border-gold-500/30 backdrop-blur-sm">
                  Cardio-Emotional Care
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-cream-50 font-bold">
                    Hridaya Basti
                  </h3>
                  <p className="text-xs text-gold-400 italic font-serif mt-1">
                    A warm hug for your heart.
                  </p>
                  <p className="text-cream-300/80 text-xs mt-3 leading-relaxed">
                    Medicated herbal oil pool over the cardiac chakra to dissolve corporate chest tightness, hypertension stress, and emotional trauma.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-800 flex items-center justify-between">
                  <span className="text-xs text-cream-400 font-mono">45 Mins</span>
                  <button
                    onClick={() => onOpenBooking('Hridaya Basti Heart Warmth')}
                    className="text-xs bg-terracotta-500 hover:bg-terracotta-600 text-white px-4 py-2 rounded-full font-semibold"
                  >
                    Book Consult
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TARGETED HEALTH HOOKS PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-forest-950 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gold-500/30 relative overflow-hidden text-cream-100">
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-terracotta-400 font-mono text-xs uppercase tracking-widest font-semibold">
              Magarpatta & Cybercity Life Disruptions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight">
              Facing Desk Neck, Hard Water Hair Fall, or Uncontrollable PCOD?
            </h2>
            <p className="text-cream-200/90 text-sm sm:text-base leading-relaxed">
              Modern lifestyle in IT hubs creates silent metabolic blockages. Our specialized protocols are designed specifically for the common chronic conditions of Magarpatta residents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-forest-900/80 p-4 rounded-xl border border-gold-500/20">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-cream-100">PCOD & Hormonal Reset</h4>
                  <p className="text-xs text-cream-300/70">"PCOD is not a disease. It's a signal."</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-forest-900/80 p-4 rounded-xl border border-gold-500/20">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-cream-100">Hard Water Scalp Care</h4>
                  <p className="text-xs text-cream-300/70">De-mineralizing East Pune water damage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-forest-900/80 p-4 rounded-xl border border-gold-500/20">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-cream-100">IT Spine & Posture Relief</h4>
                  <p className="text-xs text-cream-300/70">Rehydrate compressed discs without surgery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-forest-900/80 p-4 rounded-xl border border-gold-500/20">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-cream-100">Depritox™ Neuro-Calm</h4>
                  <p className="text-xs text-cream-300/70">Calm the Vata storm and cure 2 AM insomnia.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Explore All 5 Health Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET THE DOCTOR SECTION (Dr. Vaishali) */}
      <section className="py-20 bg-cream-200/60 border-y border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1594824813589-9800742f10b7?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Vaishali - Lead Ayurvedic Physician Ayushakti Magarpatta"
                  className="w-full h-[450px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <h3 className="font-serif text-2xl font-bold">Dr. Vaishali</h3>
                  <p className="text-gold-300 text-xs font-mono">{CLINIC_INFO.doctor.degrees}</p>
                  <p className="text-cream-200 text-xs mt-1">{CLINIC_INFO.doctor.experience}</p>
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
                Clinical Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                "I don't just treat the disease. <br />
                <span className="italic text-terracotta-500">I treat the person."</span>
              </h2>
              
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
                {CLINIC_INFO.doctor.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                <div className="p-4 bg-cream-50 rounded-xl border border-gold-500/30">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Lineage Diagnostics</h4>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Direct training in 2,500-year-old Siddha Veda pulse secrets passed down to Master Healers Dr. Pankaj & Dr. Smita Naram.
                  </p>
                </div>

                <div className="p-4 bg-cream-50 rounded-xl border border-gold-500/30">
                  <h4 className="font-serif text-lg font-bold text-forest-950">The Atrium Clinic</h4>
                  <p className="text-xs text-charcoal-600 mt-1">
                    Centrally located in Magarpatta, equipped with serene Panchkarma suites, authentic herbal steam, and copper equipment.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onOpenBooking('Nadi Pariksha with Dr. Vaishali')}
                  className="bg-forest-900 hover:bg-forest-800 text-cream-100 font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Book Consultation With Dr. Vaishali</span>
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs sm:text-sm font-semibold text-forest-800 hover:text-terracotta-500 underline underline-offset-4"
                >
                  Read Doctor & 1987 Legacy Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-terracotta-500 font-mono text-xs uppercase tracking-widest font-semibold">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            Voices from Magarpatta & Pune
          </h2>
          <p className="text-charcoal-600 text-sm">
            Hear from corporate leaders, mothers, and residents who avoided surgery and restored their natural vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-cream-50 p-8 rounded-2xl border border-gold-500/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-700 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gold-500/20">
                <h4 className="font-serif font-bold text-forest-950">{t.name}</h4>
                <p className="text-xs text-charcoal-500">{t.location}</p>
                <div className="mt-2 inline-block bg-forest-100 text-forest-800 text-[11px] font-medium px-2 py-0.5 rounded">
                  Resolved: {t.condition} in {t.healingTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. AEO OPTIMIZED FAQ SECTION */}
      <section className="py-20 bg-forest-950 text-cream-100 border-t border-gold-500/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold">
              Frequently Asked Questions (AEO & FAQs)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
              Clear Answers About Your Visit
            </h2>
            <p className="text-cream-300/80 text-sm">
              Everything you need to know before visiting Ayushakti Magarpatta clinic.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-forest-900/80 border border-gold-500/20 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between text-cream-100 font-serif text-base sm:text-lg font-semibold hover:text-gold-400 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-gold-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cream-400 shrink-0 ml-4" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-cream-200/90 border-t border-forest-800/80 space-y-3">
                    <p className="leading-relaxed">{faq.answer}</p>
                    {faq.bullets && (
                      <ul className="space-y-2 pl-4 list-disc marker:text-gold-400 text-xs sm:text-sm">
                        {faq.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA box below FAQs */}
          <div className="mt-12 text-center p-8 bg-forest-900 rounded-2xl border border-gold-500/40">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
              Have a Specific Health Question for Dr. Vaishali?
            </h3>
            <p className="text-cream-300/80 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Call our Magarpatta reception team directly or book your pulse reading session today.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full"
              >
                Book Pulse Consultation
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-forest-800 hover:bg-forest-700 text-gold-300 border border-gold-500/30 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full"
              >
                Call: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
