export interface Treatment {
  id: string;
  name: string;
  sanskritName: string;
  tagline: string;
  description: string;
  duration: string;
  recommendedFor: string[];
  procedureSteps: string[];
  keyBenefits: string[];
  image: string;
}

export interface HealthProgram {
  id: string;
  title: string;
  targetAudience: string;
  hook: string;
  subhook: string;
  tag: string;
  rootCause: string;
  symptoms: string[];
  ayushaktiApproach: {
    step: string;
    title: string;
    detail: string;
  }[];
  durationWeeks: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  quote: string;
  healingTime: string;
  doctor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  bullets?: string[];
  category: 'general' | 'nadi-pariksha' | 'panchkarma' | 'pricing';
}
