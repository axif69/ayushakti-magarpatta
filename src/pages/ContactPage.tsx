import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Navigation, 
  Car
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    therapy: 'Nadi Pariksha (Pulse Consultation)',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
    isFirstTime: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Namaste Dr. Vaishali & Ayushakti Magarpatta,\n\nI would like to book a consultation at The Atrium clinic:\n• Name: ${formData.name || 'Patient'}\n• Phone: ${formData.phone || 'Provided via form'}\n• Selected Therapy: ${formData.therapy}\n• Date: ${formData.date || 'Earliest available'}\n• Slot: ${formData.timeSlot}\n• Note: ${formData.message || 'General checkup'}\n\nPlease confirm my slot.`;
    window.open(`https://wa.me/917262062525?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900">
      {/* Header Banner */}
      <section className="bg-forest-950 text-cream-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gold-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#CFAF7E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold inline-block">
            Find Us in Magarpatta City
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50">
            Contact & Clinic Location
          </h1>
          <p className="max-w-2xl mx-auto text-cream-200/90 text-sm sm:text-base leading-relaxed">
            Conveniently situated at The Atrium on B.G. Shirke Road, easily accessible for residents of Magarpatta City, Amanora Park Town, Kharadi, and Hadapsar.
          </p>
        </div>
      </section>

      {/* Main Split Layout Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Modern Booking Form */}
          <div className="lg:col-span-6 bg-cream-50 rounded-3xl p-6 sm:p-10 border border-gold-500/40 shadow-xl">
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase font-mono tracking-widest text-terracotta-500 font-bold">
                Direct Appointment Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                Book a Consultation with Dr. Vaishali
              </h2>
              <p className="text-charcoal-600 text-xs sm:text-sm">
                Fill this quick form and our clinic manager will call to confirm your exact appointment slot.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-forest-900 text-cream-100 rounded-2xl text-center space-y-4 border border-gold-500/30">
                <div className="w-14 h-14 bg-forest-800 text-gold-400 rounded-full flex items-center justify-center mx-auto border border-gold-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream-50">
                  Dhanyawad, {formData.name || 'Patient'}!
                </h3>
                <p className="text-cream-200/90 text-sm">
                  We have received your appointment request for <strong>{formData.therapy}</strong>. Our reception team will reach out at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 mx-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Confirmation on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98220 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="rajesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Therapy of Interest *
                    </label>
                    <select
                      value={formData.therapy}
                      onChange={(e) => setFormData({ ...formData, therapy: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    >
                      <option value="Nadi Pariksha (Pulse Consultation)">Nadi Pariksha (Pulse Reading)</option>
                      <option value="Authentic Panchkarma Detox">Authentic Panchkarma Detox</option>
                      <option value="Agnikarma Instant Pain Relief">Agnikarma Pain Relief</option>
                      <option value="Hridaya Basti (Heart & Anxiety)">Hridaya Basti Heart Warmth</option>
                      <option value="Abhyanga & Marma Therapy">Abhyanga & Marma Therapy</option>
                      <option value="Women's PCOD / Hormonal Protocol">Women's PCOD / Hormones</option>
                      <option value="Hard Water Scalp & Hair Detox">Hard Water Scalp Detox</option>
                      <option value="Agni Digestive Gut Reset">Agni Digestive Gut Reset</option>
                      <option value="IT Spine / Corporate Back Pain">IT Spine & Posture Relief</option>
                      <option value="Depritox Neuro-Calm">Depritox Neuro-Calm & Sleep</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                    Describe Your Symptoms / Medical History
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you are dealing with (e.g. chronic back stiffness, PCOD since 2 years, hair loss)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gold-500/40 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="firstTimeVisit"
                    checked={formData.isFirstTime}
                    onChange={(e) => setFormData({ ...formData, isFirstTime: e.target.checked })}
                    className="rounded border-gold-500 text-forest-700 focus:ring-forest-600"
                  />
                  <label htmlFor="firstTimeVisit" className="text-xs text-charcoal-600">
                    This is my first consultation at Ayushakti Magarpatta
                  </label>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-charcoal-500 pt-1">
                    <span>🔒 Privacy Guaranteed</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Direct WhatsApp Desk
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Side: Map & Complete Location Information */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Map Container */}
            <div className="bg-cream-50 rounded-3xl overflow-hidden border border-gold-500/40 shadow-xl">
              <div className="p-5 bg-forest-950 text-cream-100 flex items-center justify-between border-b border-gold-500/30">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-cream-50">The Atrium, Magarpatta</h3>
                    <p className="text-[11px] text-cream-300/80">Hadapsar, Pune - 411036</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=The+Atrium+Magarpatta+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-800 hover:bg-forest-700 text-gold-300 text-xs px-3 py-1.5 rounded-lg border border-gold-500/30 flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open Maps</span>
                </a>
              </div>

              {/* Google Map Embedded Frame */}
              <div className="w-full h-[320px] bg-cream-200">
                <iframe
                  title="Ayushakti Magarpatta Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.376848135898!2d73.9295!3d18.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c187d9039f9d%3A0x6e788bc5f67b514b!2sMagarpatta%20City%2C%20Hadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Clinic Details Cards */}
            <div className="bg-cream-50 rounded-3xl p-6 border border-gold-500/40 shadow-md space-y-4">
              <h3 className="font-serif text-lg font-bold text-forest-950 border-b border-gold-500/20 pb-2">
                Clinic Location & Directions
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Full Address:</strong> {CLINIC_INFO.address}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Phone:</strong> <a href={`tel:${CLINIC_INFO.phone}`} className="text-forest-800 font-bold hover:underline">{CLINIC_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Consultation Hours:</strong> {CLINIC_INFO.hours}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Parking & Access:</strong> Dedicated basement and visitor parking available at The Atrium building. 5 mins drive from Cybercity Tower 4 & 7.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gold-500/20 flex flex-wrap gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex-1 bg-forest-900 hover:bg-forest-800 text-cream-100 text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Clinic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
