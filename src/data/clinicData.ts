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
  founders: {
    drPankajNaram: {
      name: "Late Dr. Pankaj Naram",
      title: "Master Healer & Co-Founder, Ayushakti (1955 – 2020)",
      image: "./dr-pankaj-naram.jpg",
      bio: "A globally celebrated Ayurvedic master healer who learned the unbroken 2,500-year-old Siddha Veda lineage directly from his master Baba Ramdas (who lived past 125 years). Dr. Pankaj Naram read the pulse of over 1.5 million people worldwide, including Mother Teresa, His Holiness the Dalai Lama, Nelson Mandela, and world leaders across Europe and the Americas. Author of 'Ancient Secrets of a Master Healer', his life mission was to prove that ancient pulse diagnosis can eliminate suffering without chemical dependency."
    },
    drSmitaNaram: {
      name: "Vaidya Dr. Smita Naram",
      title: "Co-Founder & 5th Generation Classical Vaidya",
      image: "./dr-smita-naram.jpg",
      bio: "Hailing from five uninterrupted generations of classical Ayurvedic physicians, Dr. Smita Naram has spent 37+ years standardizing Ayurvedic herbal pharmacopoeia to international pharmaceutical benchmarks. She spearheads Ayushakti's research laboratories, overseeing US-FDA inspected, GMP-certified production facilities. Her clinical trials on chronic osteoarthritis, bronchial asthma, and autoimmune disorders have been published in respected peer-reviewed European and American medical journals."
    }
  },
  doctor: {
    name: "Dr. Vaishali",
    degrees: "B.A.M.S., C.C.A. (Senior Ayurvedic Physician)",
    role: "Lead Pulse Diagnosis & Panchkarma Specialist",
    experience: "12+ Years Clinical Practice",
    image: "./dr-vaishali-portrait.jpg",
    quote: "I don't just treat the disease. I treat the person.",
    bio: "Personally mentored in the Siddha Veda pulse lineage, Dr. Vaishali has consulted over 14,000 patients across Maharashtra, specializing in chronic hormonal imbalances (PCOD, Thyroid), severe degenerative spine issues, and intractable metabolic disorders. Her diagnostic precision allows her to pinpoint subtle Ama (toxin) encrustation and Manda Agni (sluggish digestion) long before standard pathological lab tests register abnormal markers."
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: "nadi-pariksha",
    name: "Nadi Pariksha",
    sanskritName: "नाडी परीक्षा (Deep Pulse Reading)",
    tagline: "Your pulse tells a story. Let us read it.",
    description: "An ancient non-invasive diagnostic methodology dating back 2,500 years in the Siddha Veda lineage. By reading 3 distinct depth levels of your radial pulse across 28 pulse parameters, Dr. Vaishali pinpoints Vata-Pitta-Kapha imbalances, subtle cellular toxicity (Ama), organ fatigue, and emotional bottlenecks up to 6 months before physical blood tests or MRI scans detect structural damage.",
    duration: "30 - 45 Minutes Consultation",
    recommendedFor: ["Chronic Fatigue & Brain Fog", "PCOD & Hormonal Irregularity", "Unexplained Digestive Distress & IBS", "Spine & Joint Stiffness", "Preventative Cellular Health Mapping"],
    procedureSteps: [
      "Calm pulse stabilization: Sitting in a quiet, temperature-regulated consultation room at The Atrium to allow cardiovascular resting state",
      "Tri-finger radial assessment: Forefinger measures Vata (Nervous system/Colon), Middle finger measures Pitta (Liver/Metabolic Agni/Heart), Ring finger measures Kapha (Lungs/Joints/Kidneys)",
      "Three-depth evaluation: Superficial (current toxins & active Dosha), Medium (7 tissue Dhatus & blood circulation), Deep (birth constitution Prakruti & emotional trauma stored in organs)",
      "Pulse rhythm analysis (Gati): Detecting the Snake pulse (Sarpa/Vata), Frog pulse (Manduka/Pitta), Swan pulse (Hamsa/Kapha), or mixed patterns",
      "Instant customized Diet, Dinacharya circadian routine & herbal prescription blueprint"
    ],
    keyBenefits: [
      "100% painless, non-invasive, no needles, no fasting needed",
      "Detects cellular disease at Stage 1 & 2 (Accumulation & Aggravation) rather than waiting for Stage 5 structural damage",
      "Identifies exact biological root cause behind hair fall, chronic pain, or weight resistance",
      "Personalized lifestyle and kitchen herbal formulations tailored exclusively to your biology"
    ],
    image: "./nadi-pariksha-authentic.jpg"
  },
  {
    id: "panchkarma",
    name: "Authentic Panchkarma",
    sanskritName: "पञ्चकर्म (The Five Cellular Cleanses)",
    tagline: "The ultimate deep reset for biological rejuvenation.",
    description: "Ayushakti's internationally validated, standardized multi-day bio-cleansing program. Panchkarma does not simply flush the colon; it dissolves deeply encrusted fat-soluble metabolic waste (Ama) stored inside joints, bone marrow, and micro-capillaries, reversing your biological age and resetting epigenetic expression.",
    duration: "7 to 21 Days Tailored Programs",
    recommendedFor: ["Autoimmune Disorders (Rheumatoid, Psoriasis)", "Stubborn Visceral Obesity", "Chronic Migraine & Sinusitis", "Degenerative Joint Osteoarthritis", "Post-Viral Fatigue & Long-Term Drug Toxicity"],
    procedureSteps: [
      "Purva Karma (Pre-Cleanse): Deepana & Pachana with digestive catalysts, followed by Snehana (internal oleation with medicated herbal ghee) & Swedana (herbal steam in wooden Droni chambers) to liquefy deep cellular toxins",
      "Pradhana Karma (The 5 Cleanses): Precision administration of chosen therapies—Vamana (respiratory/Kapha), Virechana (liver/Pitta purge), Basti (colonic herbal oil enemas/Vata), Nasya (sinus/cranial nerves), Raktamokshan (micro-blood purification)",
      "Paschat Karma (Post-Cleanse Rebuilding): Samsarjana Krama dietary progression (warm rice water -> lentil broth -> soft Sattvic khichdi) to reignite pure digestive enzyme fire (Agni)",
      "Rasayana Therapy: Administration of cellular rejuvenating herbal botanicals to rebuild healthy Ojas (immune vitality)"
    ],
    keyBenefits: [
      "Global standardized protocols identical to Ayushakti centres in Germany, Switzerland & Mumbai",
      "Clinically proven reduction in inflammatory markers (ESR, CRP, HbA1c, Liver enzymes)",
      "Reverses chronic arterial and lymphatic stagnation",
      "Noticeable clarity of thought, radiant skin texture, and deep uninterrupted sleep"
    ],
    image: "./panchkarma-droni.jpg"
  },
  {
    id: "agnikarma",
    name: "Agnikarma Pain Relief",
    sanskritName: "अग्निकर्म (Targeted Thermal Micro-Therapy)",
    tagline: "Instant pain relief. No surgery. No downtime.",
    description: "A highly specialized, painless thermal micro-application using a sterilized red-hot Panchadhatu Shalaka (sacred five-metal probe of copper, brass, bronze, silver, and gold) directly at neurological trigger points. Agnikarma instantly stimulates local blood circulation, releases contracted myofascial knots, and neutralizes trapped Vata pain signals.",
    duration: "20 - 30 Minutes Session",
    recommendedFor: ["Frozen Shoulder & Rotator Cuff Calcification", "Sciatica & Lumbar Slip Disc", "Knee Osteoarthritis & Synovial Degeneration", "Tennis Elbow & Golfer's Elbow", "Cervical Spondylosis & Trapezius Spasms"],
    procedureSteps: [
      "Precise neurological palpation of Marma pain epicenters by Dr. Vaishali",
      "Sterile heating of certified medical-grade Panchadhatu probe to calibrated therapeutic temperature",
      "Microsecond touch applications (Bindu / point-touch technique) producing zero open wounds or blistering",
      "Immediate cooling with freshly scraped natural Aloe Vera gel and classical Chandan-Yastimadhu lepam",
      "Patient assessment for instant range of motion restoration"
    ],
    keyBenefits: [
      "80%+ pain reduction experienced by majority of patients during their first clinic visit",
      "Eliminates dependency on harsh NSAID painkillers that erode stomach lining and stress kidneys",
      "Effective non-surgical alternative for musculoskeletal degeneration",
      "Zero downtime; resume office, driving, and daily activities immediately"
    ],
    image: "./kati-basti-authentic.jpg"
  },
  {
    id: "hridaya-basti",
    name: "Hridaya Basti & Kati Basti",
    sanskritName: "हृदय एवं कटि बस्ति (Localized Warm Oil Pools)",
    tagline: "Targeted nourishment for heart chakra and lumbar spine.",
    description: "An authentic, deeply calming therapy where a leakproof ring made of organic black gram (urad dal) dough is placed over the cardiac region (Hridaya Basti) or lower back (Kati Basti). Warm, medicated Ayurvedic oils (infused with Arjuna, Shankhpushpi, Ashwagandha, and Mahanarayan tailam) are continuously pooled and refreshed at therapeutic temperature.",
    duration: "45 Minutes",
    recommendedFor: ["Chronic Lower Back Spasm & Disc Herniation", "Anxiety, Chest Tightness & Panic Sensations", "Mild Hypertension & Stress Arrhythmia", "Sciatic Nerve Compression", "Emotional Grief & Trapped Stress"],
    procedureSteps: [
      "Preparation of fresh organic urad dal dough ring, sealed comfortably to the skin",
      "Continuous gentle pouring and refreshing of warm, cardioprotective or neuro-reparative medicated oil",
      "Gentle circular Marma point massage surrounding the dam area",
      "Warm herbal compress and gradual temperature tapering for nervous system grounding"
    ],
    keyBenefits: [
      "Rehydrates desiccated intervertebral spinal discs and relaxes deep paraspinal muscle spasms",
      "Dissolves corporate chest tightness and resets erratic shallow breathing patterns",
      "Stimulates parasympathetic vagus nerve tone, reducing elevated cortisol",
      "Nourishes Sadhaka Pitta (the Ayurvedic subdosha governing heart courage and peace)"
    ],
    image: "./kati-basti-authentic.jpg"
  },
  {
    id: "abhyanga-marma",
    name: "Abhyanga & Marma Therapy",
    sanskritName: "अभ्यङ्ग एवं मर्म चिकित्सा",
    tagline: "The healing touch of ancient wisdom.",
    description: "Full-body synchronized warm herbal oil massage coordinated along the classical venous energy channels, followed by precise activation of vital Marma points. Marma therapy taps directly into the body's self-repair matrix, releasing locked emotional memory and clearing systemic lymphatic congestion.",
    duration: "60 Minutes Session",
    recommendedFor: ["Full-body Exhaustion & Burnout", "Sluggish Lymphatic Drainage", "Vata Aggravation & Dry Skin", "Chronic Insomnia & Restless Legs", "Post-Workout Muscle Soreness"],
    procedureSteps: [
      "Custom formulation of warm, herb-infused classical tailams matched to your Dosha",
      "Synchronized long rhythmic strokes (Anuloma) following natural venous blood flow",
      "Circular thumb activation of key neuro-vascular Marma junction points",
      "Herbal steam cabinet bath (Swedana) using eucalyptus and dashamoola vapors to open micro-capillaries"
    ],
    keyBenefits: [
      "Accelerates lymphatic circulation, flushing cellular metabolic debris",
      "Nourishes all seven biological body tissues (Dhatus) from plasma to bone marrow",
      "Calms hyper-excitable central nervous systems, inducing deep regenerative sleep",
      "Softens skin texture and restores youthful physical flexibility"
    ],
    image: "./panchkarma-droni.jpg"
  }
];

export const HEALTH_PROGRAMS: HealthProgram[] = [
  {
    id: "womens-pcod",
    title: "Women's Hormonal Reset & PCOD Reversal",
    targetAudience: "Women struggling with irregular cycles, cystic acne, weight gain & PCOS in Pune",
    hook: "PCOD is not a disease. It's a signal.",
    subhook: "Stop masking hormonal chaos with synthetic contraceptive pills. Heal the ovarian micro-environment naturally.",
    tag: "Women's Wellness",
    rootCause: "Accumulation of Kapha and Ama in Artava Vaha Srotas (female reproductive micro-channels), causing insulin resistance, sluggish liver estrogen clearance, and ovarian follicular encystment.",
    symptoms: [
      "Irregular, delayed, or missing menstrual periods",
      "Adult cystic jawline acne and hormonal facial hair (hirsutism)",
      "Stubborn lower belly fat resistant to strict dieting and gym workouts",
      "Unexplained mood swings, severe PMS anxiety, and thinning scalp hair"
    ],
    ayushaktiApproach: [
      { step: "Phase 1: Ama Elimination", title: "Metabolic & Liver Detox", detail: "Purging hormonal toxins and restoring insulin sensitivity through customized botanical extracts (Shatavari, Kanchnar Guggulu, Varun, and Lodhra)." },
      { step: "Phase 2: Follicular Cleansing", title: "Ovarian Micro-Circulation", detail: "Targeted localized Basti and Udar Pichu (warm herbal abdominal packs) to soften fibrous follicular walls and restore natural spontaneous ovulation." },
      { step: "Phase 3: Axis Stabilization", title: "Pituitary-Ovarian Rhythm", detail: "Stabilizing the hypothalamic-pituitary-ovarian axis with personalized circadian nutrition, ensuring permanent 28-day cycle rhythm without pharmaceuticals." }
    ],
    durationWeeks: "12 - 16 Weeks Guided Reversal",
    image: "./nadi-pariksha-authentic.jpg"
  },
  {
    id: "hair-skin",
    title: "Hard-Water Scalp Detox & Skin Radiance",
    targetAudience: "Residents of Magarpatta, Amanora, Hadapsar & Kharadi dealing with borewell water damage",
    hook: "Is Magarpatta's hard water ruining your hair?",
    subhook: "The high TDS and mineral build-up in East Pune water strip natural sebum, triggering scalp calcification and premature shedding.",
    tag: "Hair & Scalp Vitality",
    rootCause: "External calcium and magnesium mineral encrustation coupled with internal excess Pitta in Asthi Dhatu (bone tissue) that starves the Kesha (hair root) follicles of nutrient-rich blood flow.",
    symptoms: [
      "Sudden clumps of hair fall during showers in Magarpatta & Amanora apartments",
      "Itchy, inflamed, flaky scalp and stubborn dandruff resistant to chemical shampoos",
      "Dry, brittle hair shaft snapping easily when combing",
      "Dull, congested skin and dark pigmentary patches across forehead and cheeks"
    ],
    ayushaktiApproach: [
      { step: "Phase 1: De-Mineralization", title: "Scalp Bio-Purification", detail: "Shiro Abhyanga with cold-pressed Bhringraj, Brahmi, and Amla oils prepared in copper vessels to dissolve hard water mineral crystallization." },
      { step: "Phase 2: Blood Purification", title: "Pitta Pacification", detail: "Internal herbal blood cleansers (Manjistha, Neem, Sariva, and Khadir) to cool excess internal heat from the bloodstream." },
      { step: "Phase 3: Nasya Therapy", title: "Follicular Stimulation", detail: "Medicated herbal nasal drops (Anu Taila) that directly nourish the cranial nerve roots and stimulate dormant follicular stem cells." }
    ],
    durationWeeks: "8 - 12 Weeks Targeted Protocol",
    image: "./panchkarma-droni.jpg"
  },
  {
    id: "digestive-health",
    title: "Agni Deep Gut & Microbiome Reset",
    targetAudience: "IT professionals & families experiencing bloating, IBS, acidity & sluggish metabolism",
    hook: "Your Agni is the key to your immunity.",
    subhook: "80% of all chronic disease begins in the gut. If you cannot digest your lunch, your cells are starved no matter how healthy your diet looks.",
    tag: "Gut Health & Immunity",
    rootCause: "Manda Agni (diminished metabolic digestive fire) creating Ama (undigested fermenting sludge) in the intestines, causing leaky mucosal walls and gut dysbiosis.",
    symptoms: [
      "Post-meal abdominal bloating, distension, and heavy gas within 30 minutes of eating",
      "Chronic acid reflux, burning sensation in chest and throat",
      "Alternating diarrhea and constipation (IBS irritable bowel patterns)",
      "Persistent brain fog, daytime sleepiness, and lethargy after meals"
    ],
    ayushaktiApproach: [
      { step: "Phase 1: Deepana & Pachana", title: "Digestive Enzyme Ignition", detail: "Stimulating gastric hydrochloric and pancreatic enzyme secretion with ginger, Pippali, and classical Trikatu catalysts." },
      { step: "Phase 2: Mucosal Repair", title: "Intestinal Lining Healing", detail: "Healing inflamed intestinal mucosal walls with Bilva, Kutaja, and customized Takra (probiotic herbal buttermilk) protocols." },
      { step: "Phase 3: Microbiome Rebalance", title: "Flora Repopulation", detail: "Re-establishing healthy internal microbial harmony through customized Sattvic bio-available meals and pre-biotic herbal fibers." }
    ],
    durationWeeks: "6 - 10 Weeks Guided Reset",
    image: "./nadi-pariksha-authentic.jpg"
  },
  {
    id: "corporate-pain",
    title: "IT Spine & Ergonomic Pain Restoration",
    targetAudience: "Cybercity Magarpatta & Pune IT park engineers sitting 9+ hours a day",
    hook: "Fix the desk-job slouch before it becomes a spine issue.",
    subhook: "Long coding sprints and screen hunching trap dry Vata in the cervical spine and lumbosacral joints.",
    tag: "Musculoskeletal & Posture",
    rootCause: "Stagnant circulation, dehydrated vertebral discs, and localized Vata vitiation caused by prolonged static posture in air-conditioned tech parks.",
    symptoms: [
      "Chronic cervical neck stiffness & tension headaches radiating to temples",
      "Sharp lower back spasm when standing up from desk after 2 hours",
      "Carpal tunnel wrist tingling, numbness, and forearm mouse fatigue",
      "Forward head posture ('Tech Neck') causing shoulder knotting"
    ],
    ayushaktiApproach: [
      { step: "Phase 1: Disc Rehydration", title: "Kati & Greeva Basti", detail: "Warm medicated dough dams of herbal oil held over C5-C7 and L4-L5 vertebrae to deeply rehydrate compressed discs." },
      { step: "Phase 2: Spasm Release", title: "Agnikarma Precision", detail: "Instant thermal micro-probe release of frozen shoulder and sciatica nerve spasms within 20 minutes." },
      { step: "Phase 3: Joint Stabilization", title: "Anti-Vata Bone Tonics", detail: "Custom ergonomic corrective stretches and anti-Vata herbal joint tonics (Guggulu, Shallaki, Rasna)." }
    ],
    durationWeeks: "4 - 8 Weeks Rapid Recovery",
    image: "./kati-basti-authentic.jpg"
  },
  {
    id: "mental-wellness",
    title: "Depritox™ Neuro-Calm & Sleep Architecture",
    targetAudience: "High-stress founders, executives and individuals fighting burnout and insomnia",
    hook: "Depritox: Calm the Vata in your brain.",
    subhook: "Sleep medication knocks you out; it does not repair your nervous system. Restore genuine deep REM naturally.",
    tag: "Mind & Emotional Wellness",
    rootCause: "Prana Vata agitation and Sadhaka Pitta hyper-excitation exhausting the Ojas (vital immunity essence) of the mind and brain tissues.",
    symptoms: [
      "Racing thoughts at 2:00 AM unable to fall or stay asleep",
      "Chronic workplace anxiety, irritability, and panic jitters",
      "Emotional exhaustion, cynicism, and mental burnout",
      "Morning fatigue despite 8 hours in bed"
    ],
    ayushaktiApproach: [
      { step: "Phase 1: Brainwave Sync", title: "Shirodhara & Shiro Basti", detail: "A steady, continuous cascade of warm herbal medicated oil over the forehead to synchronise theta brainwaves." },
      { step: "Phase 2: Neuro-Botanicals", title: "Depritox Formulations", detail: "Ayushakti's clinically researched, proprietary botanicals including Medhya Rasayanas like Brahmi, Shankhpushpi & Jatamansi." },
      { step: "Phase 3: Circadian Reset", title: "Pranayama & Circadian Sync", detail: "Daily grounding rituals that reset cortisol rhythms and naturally elevate serotonin synthesis." }
    ],
    durationWeeks: "8 Weeks Integrative Protocol",
    image: "./panchkarma-droni.jpg"
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
      "Superficial Pulse (Sthula): Reveals current active Dosha imbalances (Vata, Pitta, Kapha) and immediate digestion/toxin states.",
      "Medium Pulse (Sukshma): Evaluates deep tissue health across the 7 Dhatus (plasma, blood, muscle, fat, bone, marrow, reproductive) and micro-circulatory flow.",
      "Deep Pulse (Karana): Uncovers your constitutional birth blueprint (Prakruti), chronic hereditary vulnerabilities, and emotional stress stored in organs.",
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
