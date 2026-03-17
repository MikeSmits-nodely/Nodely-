import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import contactImage from '../assets/contactpicture.jpg';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Er is iets misgegaan. Probeer het alstublieft opnieuw.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Netwerkfout. Probeer het alstublieft opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => setSubmitStatus('idle');

  return (
    <div className="min-h-screen bg-white">

      {/* Responsive override — only changes layout on mobile */}
      <style>{`
        @media (max-width: 1023px) {
          .contact-split { grid-template-columns: 1fr !important; margin-left: 0 !important; }
          .contact-left { min-height: 500px !important; }
          .contact-right { padding: 48px 24px !important; }
        }
      `}</style>

      {/* Modal Backdrop */}
      {submitStatus !== 'idle' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Success Modal */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-50"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', damping: 20, stiffness: 200 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#003366] mb-2">Bedankt!</h3>
            <p className="text-gray-600 mb-6">
              Bedankt voor je bericht, we komen zo snel mogelijk bij je terug.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#FF6200] hover:bg-[#E55800] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Sluiten
            </button>
          </div>
        </motion.div>
      )}

      {/* Error Modal */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 z-50"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', damping: 20, stiffness: 200 }}
              className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4"
            >
              <AlertCircle className="w-8 h-8 text-red-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#003366] mb-2">Oeps!</h3>
            <p className="text-gray-600 mb-6">{submitMessage}</p>
            <button
              onClick={closeModal}
              className="w-full bg-[#FF6200] hover:bg-[#E55800] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Probeer opnieuw
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Neem contact op voor een <span className="text-[#E67E22] font-semibold"> vrijblijvend gesprek</span> over uw <span className="text-[#E67E22] font-semibold">AI-automatisering</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split layout */}
      <div className="contact-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '90vh', marginLeft: '8%' }}>

        {/* Left: photo + overlay */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-left"
          style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh' }}
        >
          <img
            src={contactImage}
            alt="Mike Smits - Founder Nodely"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,51,102,0.6) 0%, rgba(0,64,128,0.75) 100%)' }} />

          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '15%', paddingRight: '8%' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Mike Smits</h2>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>Account Manager</p>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)' }}>Nodely</p>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '16px' }}>Contactgegevens</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="mailto:info@nodely.nl" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                    <Mail size={20} style={{ flexShrink: 0 }} /><span>info@nodely.nl</span>
                  </a>
                  <a href="tel:+31683367060" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                    <Phone size={20} style={{ flexShrink: 0 }} /><span>+31 6 83367060</span>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}>
                    <MapPin size={20} style={{ flexShrink: 0 }} /><span>Eindhoven, Nederland</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                We streven ernaar binnen 24 uur te reageren op alle aanvragen.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-right"
          style={{ background: 'white', display: 'flex', alignItems: 'center', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '8%', paddingRight: '8%' }}
        >
          <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#003366', marginBottom: '12px' }}>
              Stuur ons een bericht
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '40px' }}>
              Vul het formulier in en we nemen zo snel mogelijk contact met u op.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {/* Required hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot — hidden from humans, visible to bots */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
              </div>

              {[
                { id: 'name', label: 'Naam *', type: 'text', placeholder: 'Uw volledige naam', required: true },
                { id: 'email', label: 'E-mailadres *', type: 'email', placeholder: 'naam@bedrijf.nl', required: true },
                { id: 'company', label: 'Bedrijf *', type: 'text', placeholder: 'Bedrijfsnaam', required: true },
                { id: 'phone', label: 'Telefoonnummer', type: 'tel', placeholder: '+31 6 12345678', required: false },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id}>
                  <label htmlFor={id} style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#003366', marginBottom: '8px' }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder={placeholder}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box', opacity: isSubmitting ? 0.6 : 1 }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#003366', marginBottom: '8px' }}>
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Beschrijf uw vraag of project..."
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'none', boxSizing: 'border-box', opacity: isSubmitting ? 0.6 : 1 }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ width: '100%', background: isSubmitting ? '#9CA3AF' : '#FF6200', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.125rem', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{ width: '20px', height: '20px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                    Verzenden...
                  </>
                ) : (
                  <>
                    Verstuur bericht
                    <Send size={20} />
                  </>
                )}
              </button>

              {/* Spinner keyframe */}
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}