import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, MessageSquare, Sparkles, User, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTherapy?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, prefillTherapy }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTherapy: prefillTherapy || 'Nadi Pariksha (Pulse Reading Consultation)',
    preferredDate: '',
    preferredTime: 'Morning (10:30 AM - 1:00 PM)',
    healthConcern: '',
    isFirstTime: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Namaste Dr. Vaishali & Ayushakti Magarpatta Team,\n\nI would like to book an appointment:\n• Name: ${formData.fullName || 'Patient'}\n• Phone: ${formData.phone || 'Provided via form'}\n• Therapy: ${formData.preferredTherapy}\n• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n• Time Slot: ${formData.preferredTime}\n• Concern: ${formData.healthConcern || 'General Wellness Consultation'}\n\nPlease confirm availability at The Atrium clinic.`;
    window.open(`https://wa.me/917262062525?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative bg-cream-50 rounded-2xl max-w-xl w-full border border-gold-500/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-forest-800 text-cream-100 p-6 relative border-b border-gold-500/30">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-gold-300 hover:text-white p-1 rounded-full hover:bg-forest-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ayushakti Magarpatta Clinic Appointment</span>
          </div>
          <h3 className="font-serif text-2xl text-cream-50 font-semibold">
            Book Your Pulse Consultation
          </h3>
          <p className="text-cream-200/80 text-xs mt-1">
            Consult with Dr. Vaishali at D-105, The Atrium, Magarpatta City.
          </p>
        </div>

        {/* Content body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mx-auto border-2 border-forest-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-forest-900">
                Appointment Request Received!
              </h4>
              <p className="text-charcoal-700 text-sm max-w-md mx-auto">
                Dhanyawad, <strong>{formData.fullName}</strong>. Our clinic reception team at The Atrium, Magarpatta will call you within 2 hours to confirm your exact slot with Dr. Vaishali.
              </p>

              <div className="p-4 bg-cream-200/70 rounded-xl border border-gold-500/20 text-left text-xs text-charcoal-800 space-y-1">
                <div><strong>Selected Therapy:</strong> {formData.preferredTherapy}</div>
                <div><strong>Preferred Slot:</strong> {formData.preferredDate || 'Earliest available'} ({formData.preferredTime})</div>
                <div><strong>Clinic Location:</strong> D-105, The Atrium, B.G. Shirke Road, Magarpatta</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Speed Up Confirmation via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="bg-forest-900 text-cream-100 hover:bg-forest-800 px-5 py-2.5 rounded-full text-xs sm:text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Joshi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-charcoal-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98220 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Select Therapy or Assessment *
                  </label>
                  <select
                    value={formData.preferredTherapy}
                    onChange={(e) => setFormData({ ...formData, preferredTherapy: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  >
                    <option value="Nadi Pariksha (Pulse Reading Consultation)">Nadi Pariksha (Pulse Reading)</option>
                    <option value="Authentic Panchkarma Detox">Authentic Panchkarma Detox</option>
                    <option value="Agnikarma Instant Pain Relief">Agnikarma Pain Relief</option>
                    <option value="Hridaya Basti Heart Warmth">Hridaya Basti (Heart & Anxiety)</option>
                    <option value="Abhyanga & Marma Therapy">Abhyanga & Marma Therapy</option>
                    <option value="Women's PCOD / Hormonal Protocol">Women's PCOD / Hormonal Program</option>
                    <option value="Hard Water Scalp & Hair Detox">Hard Water Hair & Scalp Care</option>
                    <option value="Agni Digestive Gut Reset">Agni Digestive & Gut Reset</option>
                    <option value="IT Spine / Corporate Back Pain">IT Spine & Posture Restoration</option>
                    <option value="Depritox Neuro-Calm (Stress/Sleep)">Depritox Neuro-Calm & Sleep</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-charcoal-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-charcoal-500 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    >
                      <option value="Morning (10:30 AM - 1:00 PM)">Morning (10:30 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                  Describe Your Main Health Concern or Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Struggling with stiff neck and poor sleep since 6 months; had high acidity..."
                  value={formData.healthConcern}
                  onChange={(e) => setFormData({ ...formData, healthConcern: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="firstTime"
                  checked={formData.isFirstTime}
                  onChange={(e) => setFormData({ ...formData, isFirstTime: e.target.checked })}
                  className="rounded border-gold-500 text-forest-700 focus:ring-forest-600"
                />
                <label htmlFor="firstTime" className="text-xs text-charcoal-600">
                  This is my first time visiting Ayushakti Magarpatta Clinic
                </label>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans font-semibold text-sm uppercase tracking-wider py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Request Clinic Appointment
                </button>

                <p className="text-[11px] text-center text-charcoal-500">
                  🔒 100% Confidential. Or call direct: <a href={`tel:${CLINIC_INFO.phone}`} className="text-forest-700 font-semibold underline">{CLINIC_INFO.phone}</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
