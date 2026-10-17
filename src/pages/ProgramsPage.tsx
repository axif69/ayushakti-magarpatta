import React, { useState } from 'react';
import { 
  Calendar, 
  AlertCircle, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { HEALTH_PROGRAMS, CLINIC_INFO } from '../data/clinicData';

interface ProgramsPageProps {
  onOpenBooking: (prefillTherapy?: string) => void;
  onNavigate: (page: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('womens-pcod');

  const currentProgram = HEALTH_PROGRAMS.find((p) => p.id === selectedProgramId) || HEALTH_PROGRAMS[0];

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900">
      {/* Hero Header */}
      <section className="bg-forest-950 text-cream-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#CFAF7E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold inline-block">
            Targeted Life Disruptions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50">
            Specialized Health Programs
          </h1>
          <p className="max-w-2xl mx-auto text-cream-200/90 text-sm sm:text-base leading-relaxed">
            These are not just clinical diseases; they are disruptions to your daily vitality, career focus, and emotional peace. Explore our root-cause solutions calibrated for Magarpatta and Pune residents.
          </p>
        </div>
      </section>

      {/* Program Selector Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {HEALTH_PROGRAMS.map((program) => {
            const isSelected = program.id === selectedProgramId;
            return (
              <button
                key={program.id}
                onClick={() => setSelectedProgramId(program.id)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-forest-900 text-gold-400 border-gold-500 shadow-md ring-2 ring-gold-500/30'
                    : 'bg-cream-50 text-charcoal-800 hover:bg-cream-200/80 border-gold-500/20'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                    isSelected ? 'text-terracotta-400' : 'text-forest-700'
                  }`}>
                    {program.tag}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base mt-1 line-clamp-2">
                    {program.title.split('&')[0]}
                  </h4>
                </div>
                <div className="pt-3 mt-2 border-t border-gold-500/20 flex items-center justify-between text-xs">
                  <span className="text-[11px] opacity-75">{program.durationWeeks}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Program Feature Showcase */}
        <div className="mt-12 bg-cream-50 rounded-3xl border border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Top Hook Banner */}
          <div className="border-b border-gold-500/30 pb-8 mb-8 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs uppercase font-mono tracking-widest text-terracotta-600 font-bold bg-terracotta-500/10 px-3 py-1 rounded-full border border-terracotta-500/20">
                {currentProgram.tag}
              </span>
              <span className="text-xs font-mono text-charcoal-500">
                Duration: <strong>{currentProgram.durationWeeks}</strong>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 leading-tight">
              "{currentProgram.hook}"
            </h2>
            <p className="text-forest-800 font-sans text-base sm:text-lg italic font-medium">
              {currentProgram.subhook}
            </p>
            <p className="text-charcoal-600 text-xs sm:text-sm">
              <strong>Target Audience:</strong> {currentProgram.targetAudience}
            </p>
          </div>

          {/* Main Grid: Symptoms vs Root Cause vs Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Image & Symptoms */}
            <div className="lg:col-span-5 space-y-6">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-500/40 relative shadow-md">
                <img
                  src={currentProgram.image}
                  alt={currentProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <h4 className="font-serif text-lg font-bold text-gold-300">
                    {currentProgram.title}
                  </h4>
                </div>
              </div>

              {/* Symptoms Checklist */}
              <div className="bg-cream-100 p-5 rounded-2xl border border-gold-500/30 space-y-3">
                <h4 className="font-serif font-bold text-forest-950 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-terracotta-500" />
                  <span>Signs Your Body is Signaling This:</span>
                </h4>
                <ul className="space-y-2">
                  {currentProgram.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-800">
                      <span className="text-terracotta-500 font-bold">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Approach & 3-Step Pathway */}
            <div className="lg:col-span-7 space-y-6">
              {/* Root Cause Box */}
              <div className="bg-forest-950 text-cream-100 p-6 rounded-2xl border border-gold-500/40 space-y-2">
                <span className="text-gold-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Ayurvedic Root-Cause Diagnosis (Siddha Veda View)
                </span>
                <p className="text-cream-200/90 text-sm leading-relaxed">
                  {currentProgram.rootCause}
                </p>
              </div>

              {/* 3-Step Guided Pathway */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-bold text-forest-950">
                  The Ayushakti 3-Phase Biological Protocol
                </h4>

                <div className="space-y-3">
                  {currentProgram.ayushaktiApproach.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-cream-100 rounded-xl border border-gold-500/25 flex items-start gap-4 hover:border-gold-500/60 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] uppercase font-mono text-terracotta-500 font-bold">
                            {step.step}
                          </span>
                          <h5 className="font-serif font-bold text-base text-forest-950">
                            {step.title}
                          </h5>
                        </div>
                        <p className="text-xs text-charcoal-700 leading-relaxed mt-1">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Callout */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={() => onOpenBooking(`Specialized Program: ${currentProgram.title}`)}
                  className="w-full sm:w-auto bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enroll in {currentProgram.tag}</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full sm:w-auto text-center sm:text-left text-xs font-semibold text-forest-900 hover:text-terracotta-500 underline underline-offset-4"
                >
                  Consult Dr. Vaishali at The Atrium: {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local Magarpatta Context Box */}
        <div className="mt-12 bg-forest-900 text-cream-100 rounded-2xl p-6 sm:p-8 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-cream-50">
              Living or Working Near Magarpatta City, Amanora, or Kharadi?
            </h4>
            <p className="text-cream-300/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dr. Vaishali regularly treats IT professionals from Cybercity, teachers, and homemakers with conditions aggravated by Pune's micro-climate and urban lifestyle. You don't have to live with fatigue or stiffness.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>View supportive Panchkarma & therapies for these programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Magarpatta Lifestyle Consultation')}
            className="flex-shrink-0 bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
          >
            Schedule Assessment
          </button>
        </div>
      </section>
    </div>
  );
};
