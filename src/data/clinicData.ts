import type { Treatment, HealthProgram, Testimonial, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: "Ayushakti Ayurved Magarpatta",
  franchise: "Official Franchise Clinic of Ayushakti Ayurved Worldwide",
  legacyYear: 1987,
  globalPatients: "1.5 Million+",
  countriesCount: 9,
  maharashtraClinics: "29+",
  phone: "+91 72620 62525",
  whatsapp: "+917262062525",
  email: "magarpatta@ayushakti.com",
  address: "D-105, The Atrium, B.G. Shirke Road, Magarpatta, Hadapsar, Pune - 411036",
  landmark: "Near Magarpatta City North Gate & Seasons Mall access corridor",
  hours: "Monday – Saturday: 10:00 AM – 7:30 PM | Sunday: By Prior Appointment",
  doctor: {
    name: "Dr. Vaishali",
    degrees: "B.A.M.S., C.C.A. (Senior Ayurvedic Physician)",
    role: "Lead Pulse Diagnosis & Panchkarma Specialist",
    experience: "12+ Years Clinical Practice",
    quote: "I don't just treat the disease. I treat the person.",
    bio: "Trained under the direct lineage of Siddha Veda and Ayushakti global masters, Dr. Vaishali has helped thousands of patients in Pune reverse chronic metabolic, hormonal, and musculoskeletal disorders without invasive procedures. Her diagnostic mastery in Nadi Pariksha allows her to uncover hidden cellular toxicity, weak digestive fire (Manda Agni), and emotional blockages before they manifest into irreversible pathology."
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: "nadi-pariksha",
    name: "Nadi Pariksha",
    sanskritName: "नाडी परीक्षा (Deep Pulse Reading)",
    tagline: "Your pulse tells a story. Let us read it.",
    description: "An ancient non-invasive diagnostic methodology dating back 2,500 years in the Siddha Veda lineage. By reading 3 levels of your radial pulse across 28 pulse parameters, our Vaidya pinpoints Vata-Pitta-Kapha imbalances, hidden chronic inflammation, organ stress, and emotional bottlenecks before physical lab reports can even detect them.",
    duration: "30 - 45 Minutes Consultation",
    recommendedFor: ["Chronic Fatigue", "Unexplained Digestive Distress", "Hormonal Imbalance", "Stress & Anxiety", "Preventative Health Mapping"],
    procedureSteps: [
      "Calm pulse stabilization in a tranquil copper-accented consultation suite",
      "Tri-finger radial assessment across Superficial, Medium, and Deep pulse currents",
      "Determination of your unique Prakruti (birth constitution) and Vikruti (current imbalance)",
      "Instant customized Diet, Lifestyle & Herbal prescription blueprint"
    ],
    keyBenefits: [
      "No needles, no blood draws, 100% painless root-cause revelation",
      "Detects organ weakness up to 6 months before clinical symptom onset",
      "Reveals specific Dosha aggravations (Vata, Pitta, Kapha) causing cellular fatigue",
      "Creates an exact, personalized roadmap tailored only to your biology"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "panchkarma",
    name: "Authentic Panchkarma",
    sanskritName: "पञ्चकर्म (The Five Cellular Cleanses)",
    tagline: "The ultimate deep reset for biological rejuvenation.",
    description: "Ayushakti's internationally proven, standardized multi-day bio-cleansing program. Panchkarma does not just flush toxins from the gut—it dissolves fat-soluble cellular waste (Ama) stored deep inside bone tissue, blood vessels, and nervous system junctions, restoring your biological age.",
    duration: "7 to 21 Days Tailored Programs",
    recommendedFor: ["Autoimmune Tendencies", "Stubborn Obesity", "Chronic Psoriasis & Eczema", "Severe Joint Degeneration", "Post-Viral Fatigue"],
    procedureSteps: [
      "Purva Karma: Internal Snehana (medicated ghee ingestion) & Swedana (steam herbal fomentation) to liquefy deep Ama",
      "Pradhana Karma: Scientific administration of chosen detox therapies (Virechana purgation, Basti medicated enemas, Nasya sinus clearing)",
      "Paschat Karma: Samsarjana Krama dietary reboot to reignite peak digestive enzyme fire (Agni)"
    ],
    keyBenefits: [
      "Full cellular reset eliminating metabolic micro-sludge",
      "Standardized protocols identical to Ayushakti centres in Germany, USA & Mumbai",
      "Clinical reduction in inflammatory markers (ESR, CRP) and cholesterol",
      "Profound lightness of mind, radiant skin texture, and revived metabolic rate"
    ],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "agnikarma",
    name: "Agnikarma Pain Relief",
    sanskritName: "अग्निकर्म (Targeted Thermal Micro-Therapy)",
    tagline: "Instant pain relief. No surgery. No downtime.",
    description: "A highly specialized, painless thermal micro-application using a sterilized red-hot Panchadhatu Shalaka (sacred five-metal probe) directly at neurological trigger points. Agnikarma instantly stimulates local blood circulation, releases contracted myofascial knots, and pacifies trapped Vata pain signals.",
    duration: "20 - 30 Minutes Session",
    recommendedFor: ["Frozen Shoulder", "Sciatica & Slip Disc Pain", "Knee Osteoarthritis", "Tennis Elbow & Calcification", "Cervical Spondylosis"],
    procedureSteps: [
      "Precise palpation of Marma pain epicenters by Dr. Vaishali",
      "Sterile heating of certified medical-grade Panchadhatu probe",
      "Microsecond touch applications (Bindu-style) producing zero blistering",
      "Immediate application of soothing Ayurvedic Aloe-Chandan Lepam"
    ],
    keyBenefits: [
      "Noticeable relief in acute & chronic joint pain right after Session 1",
      "Reduces dependency on heavy NSAID painkillers that erode gastric lining",
      "Non-surgical alternative for musculoskeletal stiffness and tendonitis",
      "Zero recovery downtime; resume normal work immediately"
    ],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hridaya-basti",
    name: "Hridaya Basti",
    sanskritName: "हृदय बस्ति (Cardio-Emotional Warmth Sanctuary)",
    tagline: "A warm hug for your heart.",
    description: "An authentic, deeply calming therapy where a ring made of organic black gram flour dough is placed over the cardiac region (Hridaya Chakra). Warm, medicated Ayurvedic oils infused with Shankhpushpi, Arjuna, and Ashwagandha are gently pooled and maintained at precise therapeutic temperature.",
    duration: "45 Minutes",
    recommendedFor: ["Anxiety & Panic Episodes", "Post-Stress Chest Tightness", "Mild Arrhythmias & High BP", "Emotional Grief & Heartache", "Insomnia"],
    procedureSteps: [
      "Creation of an airtight natural dough dam over the sternum and heart center",
      "Rhythmic pouring and refreshing of warm, cardioprotective herbal medicated oils",
      "Gentle Marma point stimulation around the chest and solar plexus",
      "Warm herbal compress and grounding sensory integration"
    ],
    keyBenefits: [
      "Strengthens cardiac muscles and stabilizes erratic blood pressure spikes",
      "Melts psychosomatic chest tension and breath constriction caused by chronic corporate anxiety",
      "Induces deep parasympathetic relaxation, resetting your nervous system",
      "Balances Sadhaka Pitta—the Ayurvedic subdosha governing emotions and courage"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "abhyanga-marma",
    name: "Abhyanga & Marma Therapy",
    sanskritName: "अभ्यङ्ग एवं मर्म चिकित्सा",
    tagline: "The healing touch of ancient wisdom.",
    description: "Full-body synchronized warm herbal oil massage coordinated along classical energy channels, followed by precise activation of vital Marma points. Marma therapy activates the body's self-repair matrix, releasing locked emotional memory and clearing lymphatic congestion.",
    duration: "60 Minutes",
    recommendedFor: ["Full-body Fatigue", "Poor Lymphatic Drainage", "Vata Aggravation", "Muscle Soreness", "Sleep Deprivation"],
    procedureSteps: [
      "Custom formulation of warm herb-infused classical tailam (oils)",
      "Synchronized long rhythmic strokes (Anuloma) following venous blood flow",
      "Circular thumb activation of key neuro-vascular Marma centers",
      "Herbal steam cabinet bath (Swedana) to open micro-capillaries"
    ],
    keyBenefits: [
      "Accelerates lymphatic circulation and eliminates stagnation",
      "Nourishes seven body tissues (Dhatus) from plasma down to bone marrow",
      "Calms hyperactive nervous systems and cures persistent sleeplessness",
      "Softens skin and restores youthful muscle flexibility"
    ],
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e0f316?auto=format&fit=crop&w=1200&q=80"
  }
];

export const HEALTH_PROGRAMS: HealthProgram[] = [
  {
    id: "womens-pcod",
    title: "Women's Hormonal Reset & PCOD Reversal",
    targetAudience: "Women struggling with irregular cycles, cystic acne, weight gain & PCOS",
    hook: "PCOD is not a lifelong disease. It is a biological signal.",
    subhook: "Stop masking hormonal chaos with synthetic contraceptive pills. Heal the ovarian micro-environment naturally.",
    tag: "Women's Wellness",
    rootCause: "Accumulation of Kapha and Ama in Artava Vaha Srotas (female reproductive channels), leading to insulin resistance, sluggish liver metabolism, and follicular stagnation.",
    symptoms: ["Irregular or missing periods", "Adult cystic jawline acne", "Stubborn belly fat resistant to gym workouts", "Unexplained mood dips and hair thinning"],
    ayushaktiApproach: [
      { step: "Phase 1", title: "Metabolic Detoxification", detail: "Purging hormonal toxins and restoring insulin sensitivity through customized herbal extracts (Shatavari, Kanchnar, Varun)." },
      { step: "Phase 2", title: "Ovarian Micro-Circulation", detail: "Targeted localized Basti and Udar Pichu to soften follicular walls and restore spontaneous natural ovulation." },
      { step: "Phase 3", title: "Endocrine Stabilization", detail: "Stabilizing the pituitary-ovarian axis with personalized circadian nutrition, ensuring permanent cycle rhythm." }
    ],
    durationWeeks: "12 Weeks Guided Program",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hair-skin",
    title: "Hard-Water Scalp Detox & Skin Radiance",
    targetAudience: "Residents of Magarpatta, Amanora, Hadapsar & Kharadi facing water & pollution impact",
    hook: "Is Magarpatta's hard water ruining your scalp and hair follicles?",
    subhook: "The high TDS and mineral build-up in East Pune water strip natural sebum, triggering scalp calcification and premature shedding.",
    tag: "Hair & Skin Vitality",
    rootCause: "External mineral encrustation coupled with internal excess Pitta in Asthi Dhatu (bone tissue) that starves the Kesha (hair root) follicles of nutrient-rich blood flow.",
    symptoms: ["Sudden clumps of hair fall during showers", "Itchy, flaky scalp and dandruff resistant to shampoos", "Dull, congested skin and pigmentary patches", "Premature graying"],
    ayushaktiApproach: [
      { step: "Phase 1", title: "Scalp De-mineralization", detail: "Shiro Abhyanga with cold-pressed Bhringraj and Brahmi oils cooked in copper cauldrons to dissolve calcium deposits." },
      { step: "Phase 2", title: "Pitta Pacification", detail: "Internal herbal blood purifiers (Manjistha, Neem, Sariva) to clear heated toxins from the bloodstream." },
      { step: "Phase 3", title: "Nasya Therapy", detail: "Herbal nasal drops that directly nourish the sensory nerve roots and stimulate dormant follicular cells." }
    ],
    durationWeeks: "8 - 12 Weeks Targeted Care",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "digestive-health",
    title: "Agni Deep Gut & Microbiome Reset",
    targetAudience: "Professionals experiencing bloating, IBS, constant acidity & sluggish metabolism",
    hook: "Your Agni is the single master key to your immunity.",
    subhook: "80% of all disease begins in the gut. If you cannot digest your lunch, your cells are starved no matter how healthy your diet looks.",
    tag: "Gut Health & Immunity",
    rootCause: "Manda Agni (diminished metabolic digestive fire) creating Ama (undigested toxic ferment) in the intestines, causing leaky mucosal walls and dysbiosis.",
    symptoms: ["Post-meal abdominal bloating and heaviness", "Chronic acid reflux and burning sensation", "Alternating diarrhea and constipation (IBS patterns)", "Brain fog and lethargy after eating"],
    ayushaktiApproach: [
      { step: "Phase 1", title: "Deepana & Pachana", detail: "Stimulating gastric hydrochloric and enzyme secretions with ginger, Pippali, and classical Trikatu catalysts." },
      { step: "Phase 2", title: "Gut Mucosal Repair", detail: "Healing inflamed intestinal linings with Bilva, Kutaja, and Takra (probiotic herbal buttermilk) protocols." },
      { step: "Phase 3", title: "Microbiome Repopulation", detail: "Re-establishing healthy internal microbial harmony through customized Sattvic bio-available meals." }
    ],
    durationWeeks: "6 - 10 Weeks Protocol",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "corporate-pain",
    title: "IT Spine & Ergonomic Pain Restoration",
    targetAudience: "Cybercity Magarpatta & Pune IT park engineers sitting 9+ hours a day",
    hook: "Fix the desk-job slouch before it turns into permanent lumbar disc degeneration.",
    subhook: "Long coding sprints and screen hunching trap dry Vata in the cervical spine and lumbosacral joints.",
    tag: "Musculoskeletal & Posture",
    rootCause: "Stagnant circulation, dehydrated vertebral discs, and localized Vata vitiation caused by prolonged static posture in air-conditioned tech parks.",
    symptoms: ["Chronic cervical neck stiffness & morning headache", "Lower back spasm when standing up from desk", "Carpal tunnel wrist tingling & forearm soreness", "Forward head posture ('Tech Neck')"],
    ayushaktiApproach: [
      { step: "Phase 1", title: "Kati & Greeva Basti", detail: "Warm medicated dams of herbal oil held over C5-C7 and L4-L5 vertebrae to deeply rehydrate compressed discs." },
      { step: "Phase 2", title: "Agnikarma Precision", detail: "Instant thermal release of frozen shoulder and sciatica nerve spasms within 20 minutes." },
      { step: "Phase 3", title: "Postural Spine Rebalancing", detail: "Custom ergonomic corrective stretches and anti-Vata herbal joint tonics (Guggulu, Shallaki)." }
    ],
    durationWeeks: "4 - 8 Weeks Rapid Recovery",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "mental-wellness",
    title: "Depritox™ Neuro-Calm & Sleep Architecture",
    targetAudience: "High-stress founders, executives and individuals fighting burnout and insomnia",
    hook: "Depritox: Calm the raging Vata storm in your brain.",
    subhook: "Sleep medication knocks you out; it does not repair your nervous system. Restore genuine deep REM naturally.",
    tag: "Mind & Emotional Wellness",
    rootCause: "Prana Vata agitation and Sadhaka Pitta hyper-excitation exhausting the Ojas (vital immunity essence) of the mind.",
    symptoms: ["Racing thoughts at 2:00 AM unable to sleep", "Chronic workplace anxiety and panic jitters", "Emotional exhaustion and brain burnout", "Morning fatigue despite 8 hours in bed"],
    ayushaktiApproach: [
      { step: "Phase 1", title: "Shirodhara & Shiro Basti", detail: "A steady, continuous cascade of warm herbal medicated oil over the forehead to synchronise theta brainwaves." },
      { step: "Phase 2", title: "Depritox Neuro-Formulations", detail: "Ayushakti's clinically researched, proprietary botanicals including Medhya Rasayanas like Brahmi & Jatamansi." },
      { step: "Phase 3", title: "Pranayama & Circadian Sync", detail: "Daily grounding rituals that reset cortisol rhythms and naturally elevate serotonin synthesis." }
    ],
    durationWeeks: "8 Weeks Integrative Program",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Snehal Deshpande",
    location: "Magarpatta City (Cosmos)",
    condition: "Severe PCOD & Weight Resistance",
    quote: "I had visited 3 different gynecologists in Pune who only offered birth control pills. Dr. Vaishali did my Nadi Pariksha and in 5 minutes explained my liver stagnation and sluggish Agni. Within 4 months of Ayushakti herbs and dietary tuning, my cycles normalized naturally without a single synthetic hormone!",
    healingTime: "4 Months",
    doctor: "Dr. Vaishali"
  },
  {
    id: "test-2",
    name: "Rahul Verma",
    location: "Senior Software Architect, Cybercity",
    condition: "Lumbar Disc Bulge & Sciatica",
    quote: "Working 12-hour shifts left me with shooting pain down my left leg. I was advised surgery. One Agnikarma session and 7 days of Kati Basti at The Atrium clinic gave me 80% pain relief. It felt like a miracle, but Dr. Vaishali explained the exact science behind it.",
    healingTime: "3 Weeks",
    doctor: "Dr. Vaishali"
  },
  {
    id: "test-3",
    name: "Ananya Kulkarni",
    location: "Amanora Park Town",
    condition: "Hard Water Hair Fall & Chronic Acidity",
    quote: "Moving to East Pune destroyed my hair density due to hard borewell water. The specific scalp detox and Pitta pacification treatment stopped my hair shedding in 20 days. My digestion has never been this smooth.",
    healingTime: "6 Weeks",
    doctor: "Dr. Vaishali"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What actually happens during a Nadi Pariksha (Pulse Reading)?",
    category: "nadi-pariksha",
    answer: "Nadi Pariksha is a gentle, completely non-invasive 30-minute diagnostic session. Dr. Vaishali places her three index, middle, and ring fingers on your radial pulse at your wrist to assess 28 physiological parameters across three depths:",
    bullets: [
      "Superficial Pulse: Reveals current active Dosha imbalances and immediate digestion/toxin states.",
      "Medium Pulse: Evaluates deep tissue health (Dhatus) and micro-circulatory flow.",
      "Deep Pulse: Uncovers your constitutional blueprint (Prakruti), chronic tendencies, and emotional stress stored in organs.",
      "No fasting is strictly required, though avoiding caffeine or heavy meals 1.5 hours prior ensures the most accurate pulse reading."
    ]
  },
  {
    question: "How are Ayushakti's treatments different from normal Ayurvedic clinics?",
    category: "general",
    answer: "Ayushakti is not a generic dispensary—it is a 37-year global clinical institution with published peer-reviewed clinical papers in international medical journals. Key differentiators include:",
    bullets: [
      "Global Standardized Protocols: Every detox and herbal protocol in Magarpatta follows the exact same clinical quality standards used in Ayushakti centres in Germany, Switzerland, and Mumbai.",
      "Authentic Siddha Veda Lineage: Transmitted through Master Healer Late Dr. Pankaj Naram and Dr. Smita Naram.",
      "Heavy Metal Tested & Certified: All herbal remedies are manufactured in US FDA-inspected, GMP-certified facilities.",
      "Root-Cause Focus: We do not prescribe lifelong symptomatic remedies; we aim for permanent biological reversal."
    ]
  },
  {
    question: "Does Agnikarma therapy hurt or leave burn scars?",
    category: "panchkarma",
    answer: "No. Despite its name ('Agni' meaning fire), classical Agnikarma performed by Dr. Vaishali does NOT cause burns or open blisters. A specialized therapeutic Panchadhatu (5 sacred metals) probe is heated and applied to micro-points for a fraction of a second. Patients feel only a brief tingling warmth, followed by instant relief from tendon and nerve pressure.",
    bullets: [
      "No open wounds or bleeding",
      "Immediate soothing herbal lepam applied right after",
      "Patients can take a shower and return to office work on the same day"
    ]
  },
  {
    question: "Do you provide customized diet charts and grocery lists?",
    category: "general",
    answer: "Yes, absolutely! At Ayushakti Magarpatta, no two patients receive the same diet plan. Based on whether your body is running on high Pitta (heat), aggravated Vata (dryness/air), or sluggish Kapha (heaviness), Dr. Vaishali curates an exact grocery and spice guide tailored to your kitchen, your work hours, and your lifestyle.",
    bullets: [
      "Clear guidance on foods to consume and hidden inflammatory foods to pause",
      "Targeted herbal home remedies (Kadhas and teas) you can prepare in 5 minutes",
      "Practical adjustments for IT professionals ordering meals or working night shifts"
    ]
  },
  {
    question: "What is the consultation fee and how do appointments work?",
    category: "pricing",
    answer: "We believe in complete transparency and clinical integrity. Your initial comprehensive Nadi Pariksha and consultation with Dr. Vaishali includes pulse reading, Dosha profiling, and a customized treatment roadmap.",
    bullets: [
      "Consultation & In-depth Nadi Pariksha: Affordable, transparent pricing with no hidden charges.",
      "Follow-up reviews: Scheduled every 2 to 4 weeks to monitor pulse changes and reduce herbal dosages as you heal.",
      "Direct Booking: You can book your preferred time slot online through our website, or WhatsApp our clinic desk directly at 72620 62525."
    ]
  }
];
