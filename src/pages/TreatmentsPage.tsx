import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Flame, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';

interface TreatmentsPageProps {
  onOpenBooking: (prefillTherapy?: string) => void;
  onNavigate: (page: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('nadi-pariksha');
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'benefits'>('overview');

  const currentTreatment = TREATMENTS.find((t) => t.id === selectedTreatmentId) || TREATMENTS[0];

  // Specific 5 Panchkarma sub-therapies breakdown as requested in prompt
  const panchkarmaPillars = [
    {
      name: "1. Vamana Karma (Therapeutic Emesis)",
      target: "Upper Respiratory & Kapha Stagnation",
      description: "Standardized biological expulsion of excess toxic mucus and Kapha from the thoracic and stomach cavities. Indicated for stubborn asthma, chronic bronchitis, psoriasis, and sluggish metabolism.",
      modernInsight: "Resets gastric ghrelin receptors and eliminates hyper-viscous airway secretions."
    },
    {
      name: "2. Virechana Karma (Medicated Purgation)",
      target: "Liver, Gallbladder & Pitta Acidosis",
      description: "Gentle bio-purification of the small intestine, liver, and biliary tree using customized herbal extracts. Clears burning acidity, chronic skin hives, hepatic fat, and hormonal breakouts.",
      modernInsight: "Flushes bile-bound fat-soluble endotoxins and accelerates phase-II liver detox enzymes."
    },
    {
      name: "3. Basti Karma (Medicated Herbal Enemas)",
      target: "Colon, Nervous System & Vata Disorders",
      description: "The 'Half of All Ayurvedic Medicine'. Nourishing warm herbal decoctions (Kashaya) and medicated sesame oils (Sneha) introduced rectally to soothe the autonomic nervous system and rehydrate bone tissue.",
      modernInsight: "Directly modulates the enteric nervous system ('second brain') and re-establishes a balanced gut microbiome."
    },
    {
      name: "4. Nasya Karma (Cranial Bio-Clearing)",
      target: "Sinuses, Eyes, Brain & Cervical Spine",
      description: "Therapeutic instillation of herbal oils and botanical extracts through the nasal passages—the anatomical gateway to the cranium. Alleviates migraines, chronic sinusitis, cervical neck tension, and hair fall.",
      modernInsight: "Bypasses the blood-brain barrier via olfactory neuro-pathways, stimulating pituitary-hypothalamic balance."
    },
    {
      name: "5. Raktamokshan (Micro-Blood Purification)",
      target: "Blood Toxins & Localized Inflammatory Lesions",
      description: "Classical, sterile therapeutic blood purification methods used selectively for deep dermatological stagnation, non-healing ulcers, varicose inflammation, and severe localized eczema.",
      modernInsight: "Relieves localized capillary hyper-pressure and removes stagnant inflammatory cytokines."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900">
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#CFAF7E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold inline-block">
            Standardized Classical Therapies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50">
            Treatments & Panchkarma Therapies
          </h1>
          <p className="max-w-2xl mx-auto text-cream-200/90 text-sm sm:text-base leading-relaxed">
            Every therapy at Ayushakti Magarpatta is calibrated according to your precise Nadi Pariksha pulse reading, using authentic medicinal oils prepared in copper vessels.
          </p>
        </div>
      </section>

      {/* Main Interactive Tabbed / Accordion Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs for Therapies */}
        <div className="flex overflow-x-auto pb-4 gap-3 border-b border-gold-500/30 scrollbar-none">
          {TREATMENTS.map((treatment) => {
            const isSelected = treatment.id === selectedTreatmentId;
            return (
              <button
                key={treatment.id}
                onClick={() => setSelectedTreatmentId(treatment.id)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-forest-900 text-gold-400 border border-gold-500 shadow-md'
                    : 'bg-cream-50 text-charcoal-700 hover:bg-cream-200/70 border border-gold-500/20'
                }`}
              >
                {treatment.id === 'nadi-pariksha' && <Activity className="w-4 h-4" />}
                {treatment.id === 'panchkarma' && <ShieldCheck className="w-4 h-4" />}
                {treatment.id === 'agnikarma' && <Flame className="w-4 h-4" />}
                {treatment.id === 'hridaya-basti' && <Heart className="w-4 h-4" />}
                {treatment.id === 'abhyanga-marma' && <Sparkles className="w-4 h-4" />}
                <span>{treatment.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Treatment Detail Showcase */}
        <div className="mt-10 bg-cream-50 rounded-3xl border border-gold-500/40 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-gold-500/40 shadow-xl h-[320px] sm:h-[400px] relative group">
                <img
                  src={currentTreatment.image}
                  alt={currentTreatment.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <span className="text-[11px] font-mono uppercase bg-terracotta-500 px-2.5 py-0.5 rounded text-white">
                    {currentTreatment.duration}
                  </span>
                  <p className="font-serif text-lg font-bold mt-1 text-gold-300">
                    {currentTreatment.sanskritName}
                  </p>
                </div>
              </div>

              {/* Quick Clinic Assurance */}
              <div className="p-4 bg-forest-950 text-cream-200 rounded-xl border border-gold-500/30 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Clinical Standard at The Atrium, Magarpatta</span>
                </div>
                <p className="text-cream-300/80">
                  Supervised by Dr. Vaishali. Pure organic classical tailams and sterilized instruments used for every single patient session.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-terracotta-500 font-bold">
                  {currentTreatment.sanskritName}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 mt-1">
                  {currentTreatment.name}
                </h2>
                <p className="text-base sm:text-lg text-forest-800 font-serif italic mt-1">
                  "{currentTreatment.tagline}"
                </p>
                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mt-4">
                  {currentTreatment.description}
                </p>
              </div>

              {/* Sub-tabs inside treatment */}
              <div className="pt-2">
                <div className="flex gap-4 border-b border-gold-500/20 pb-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`text-xs uppercase font-semibold tracking-wider pb-1 transition-colors ${
                      activeTab === 'overview'
                        ? 'text-forest-900 border-b-2 border-forest-900 font-bold'
                        : 'text-charcoal-500 hover:text-forest-800'
                    }`}
                  >
                    Key Clinical Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('steps')}
                    className={`text-xs uppercase font-semibold tracking-wider pb-1 transition-colors ${
                      activeTab === 'steps'
                        ? 'text-forest-900 border-b-2 border-forest-900 font-bold'
                        : 'text-charcoal-500 hover:text-forest-800'
                    }`}
                  >
                    Treatment Procedure
                  </button>
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`text-xs uppercase font-semibold tracking-wider pb-1 transition-colors ${
                      activeTab === 'benefits'
                        ? 'text-forest-900 border-b-2 border-forest-900 font-bold'
                        : 'text-charcoal-500 hover:text-forest-800'
                    }`}
                  >
                    Recommended For
                  </button>
                </div>

                <div className="pt-4">
                  {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentTreatment.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 bg-cream-100 p-3 rounded-lg border border-gold-500/20">
                          <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                          <span className="text-xs text-charcoal-800 leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'steps' && (
                    <div className="space-y-3">
                      {currentTreatment.procedureSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-cream-100 p-3 rounded-lg border border-gold-500/20">
                          <span className="w-5 h-5 rounded-full bg-forest-900 text-gold-400 text-xs font-mono flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-xs text-charcoal-800 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div className="flex flex-wrap gap-2">
                      {currentTreatment.recommendedFor.map((cond, idx) => (
                        <span
                          key={idx}
                          className="bg-forest-100 text-forest-900 border border-forest-700/20 text-xs px-3 py-1.5 rounded-full font-medium"
                        >
                          ✓ {cond}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center border-t border-gold-500/20">
                <button
                  onClick={() => onOpenBooking(`${currentTreatment.name} (${currentTreatment.sanskritName})`)}
                  className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {currentTreatment.name}</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-xs font-semibold text-forest-900 hover:text-terracotta-500 underline underline-offset-4"
                >
                  Questions? Call Clinic: {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SPECIAL EXPANDED SECTION: 5 PANCHKARMA ACTIONS WITH MODERN EXPLANATIONS */}
        {selectedTreatmentId === 'panchkarma' && (
          <div className="mt-16 bg-forest-950 text-cream-100 rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-xl space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold">
                Classical Deep Dive
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
                The 5 Classical Panchkarma Actions
              </h3>
              <p className="text-cream-300/80 text-sm leading-relaxed">
                Ayushakti utilizes standardized bio-cleansing protocols validated through clinical trials. Here is how the 5 Karmas work in modern physiological terms:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panchkarmaPillars.map((pillar, idx) => (
                <div key={idx} className="bg-forest-900/90 rounded-2xl p-6 border border-gold-500/30 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase text-terracotta-400 tracking-wider font-semibold">
                      {pillar.target}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-cream-50">
                      {pillar.name}
                    </h4>
                    <p className="text-xs text-cream-200/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="p-3 bg-forest-950 rounded-xl border border-gold-500/20 text-[11px] text-gold-300">
                    <strong>Modern Medical Insight:</strong> {pillar.modernInsight}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/40 text-center space-y-3">
              <h4 className="font-serif text-xl font-bold text-cream-50">
                Wondering Which Panchkarma Cleanse Your Body Requires?
              </h4>
              <p className="text-cream-300 text-xs max-w-xl mx-auto">
                No patient undergoes Panchkarma blindly. Dr. Vaishali performs a comprehensive Nadi Pariksha first to establish whether your body needs Snehana, Virechana, or Basti.
              </p>
              <button
                onClick={() => onOpenBooking('Panchkarma Pulse Evaluation')}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs uppercase font-semibold px-6 py-2.5 rounded-full"
              >
                Schedule Pulse Evaluation
              </button>
            </div>
          </div>
        )}

        {/* SPECIAL EXPANDED SECTION: NADI PARIKSHA 3 DEPTHS & PULSE SCIENCE */}
        {selectedTreatmentId === 'nadi-pariksha' && (
          <div className="mt-16 bg-forest-950 text-cream-100 rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-xl space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold">
                Siddha Veda Diagnostic Science
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
                The Three Depths & 28 Rhythms of Nadi Pariksha
              </h3>
              <p className="text-cream-300/80 text-sm leading-relaxed">
                Nadi Pariksha is not simply checking your heart rate beats per minute. Under the 2,500-year-old Siddha Veda lineage, Dr. Vaishali evaluates your radial artery across three physical depths:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-3">
                <span className="text-xs font-mono uppercase text-terracotta-400 font-bold">Level 1: Sthula Nadi</span>
                <h4 className="font-serif text-lg font-bold text-cream-50">Superficial Pulse (Current Toxins)</h4>
                <p className="text-xs text-cream-300/80 leading-relaxed">
                  Felt with light feather-touch pressure. Reveals active Dosha imbalances (aggravated Vata, inflamed Pitta, or congested Kapha), digestive fermentation, and immediate gut inflammation.
                </p>
              </div>

              <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-3">
                <span className="text-xs font-mono uppercase text-terracotta-400 font-bold">Level 2: Sukshma Nadi</span>
                <h4 className="font-serif text-lg font-bold text-cream-50">Subtle Tissue Pulse (7 Dhatus)</h4>
                <p className="text-xs text-cream-300/80 leading-relaxed">
                  Felt with moderate pressure. Evaluates the deep biological nourishment of plasma, blood cells, muscle tissue, fat metabolism, bone density, marrow, and reproductive essence (Ojas).
                </p>
              </div>

              <div className="p-6 bg-forest-900 rounded-2xl border border-gold-500/30 space-y-3">
                <span className="text-xs font-mono uppercase text-terracotta-400 font-bold">Level 3: Karana Nadi</span>
                <h4 className="font-serif text-lg font-bold text-cream-50">Deep Genetic & Emotional Pulse</h4>
                <p className="text-xs text-cream-300/80 leading-relaxed">
                  Felt near the radial periosteum. Uncovers your true genetic Prakruti (constitutional birth code), hereditary tendencies, and unresolved emotional grief or stress stored inside the heart and adrenals.
                </p>
              </div>
            </div>

            <div className="p-6 bg-forest-900/80 rounded-2xl border border-gold-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-cream-200">
              <div className="space-y-1">
                <strong className="text-gold-400 font-serif text-sm block">Sarpa Gati (Snake Wave)</strong>
                <p>Fast, erratic, thin, and sliding pulse. Indicates excess Vata Dosha, nervous exhaustion, insomnia, dry joints, and gas.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-gold-400 font-serif text-sm block">Manduka Gati (Frog Wave)</strong>
                <p>Bounding, sharp, hot, and jumping pulse. Indicates aggravated Pitta Dosha, acidic blood, liver heat, skin hives, and inflammation.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-gold-400 font-serif text-sm block">Hamsa Gati (Swan Wave)</strong>
                <p>Slow, wavy, heavy, and majestic pulse. Indicates Kapha stagnation, sluggish lymphatic fluid, metabolic slowdown, and water retention.</p>
              </div>
            </div>
          </div>
        )}

        {/* Link to targeted programs */}
        <div className="mt-14 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-lg text-forest-950">Looking for a Condition-Specific Care Plan?</h4>
            <p className="text-xs text-charcoal-600 mt-1">Explore our targeted programs for Women's PCOD, East Pune hard water hair fall, and IT spine pain.</p>
          </div>
          <button
            onClick={() => onNavigate('programs')}
            className="flex-shrink-0 bg-forest-900 hover:bg-forest-800 text-cream-100 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2"
          >
            <span>View Health Programs</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </section>
    </div>
  );
};
