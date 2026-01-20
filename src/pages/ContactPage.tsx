import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Let Netlify handle the submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Geïnteresseerd?
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Bel of mail ons voor een vrijblijvend gesprek over de mogelijkheden 
              voor jouw bedrijf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-[#003366] mb-8">
                Neem contact op
              </h2>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#003366] mb-2">
                    Naam*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6200] focus:ring-[#FF6200] focus:ring-opacity-50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#003366] mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6200] focus:ring-[#FF6200] focus:ring-opacity-50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#003366] mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6200] focus:ring-[#FF6200] focus:ring-opacity-50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#003366] mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6200] focus:ring-[#FF6200] focus:ring-opacity-50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#003366] mb-2">
                    Bericht*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF6200] focus:ring-[#FF6200] focus:ring-opacity-50 outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6200] text-white py-3 rounded-lg font-medium hover:bg-[#FF6200]/90 transition-colors flex items-center justify-center gap-2"
                >
                  Verstuur bericht <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-12"
            >
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6200]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#FF6200]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">Email</h3>
                    <a href="mailto:info@nodely.nl" className="text-gray-600 hover:text-[#FF6200] transition-colors">
                      info@nodely.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6200]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF6200]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">Locatie</h3>
                    <p className="text-gray-600">
                      Eindhoven, Nederland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6200]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-[#FF6200]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/nodelynl/" className="text-gray-600 hover:text-[#FF6200] transition-colors">
                      Volg ons op LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Direct contact
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  We streven ernaar om alle vragen binnen 24 uur te beantwoorden. 
                  Liever direct contact? Bel of mail ons.
                </p>
                <div className="space-y-3">
                  <p className="text-white/90">
                    <span className="font-semibold text-white">Email:</span> info@nodely.nl
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}