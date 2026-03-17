import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt voor je bericht. We nemen binnen 24 uur contact met u op.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Split layout — desktop: side by side with white left margin. Mobile: stacked */}
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
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Blue overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,51,102,0.6) 0%, rgba(0,64,128,0.75) 100%)',
          }} />

          {/* Text over photo */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '64px', paddingBottom: '64px', paddingLeft: '15%', paddingRight: '8%',
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
                Mike Smits
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>
                Founder & Lead Consultant
              </p>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)' }}>Nodely</p>
            </div>

            <div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '16px',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
                  Contactgegevens
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="mailto:info@nodely.nl" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                    <Mail size={20} style={{ flexShrink: 0 }} />
                    <span>info@nodely.nl</span>
                  </a>
                  <a href="tel:+31683367060" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>
                    <Phone size={20} style={{ flexShrink: 0 }} />
                    <span>+31 6 83367060</span>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}>
                    <MapPin size={20} style={{ flexShrink: 0 }} />
                    <span>Eindhoven, Nederland</span>
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
          style={{
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '64px', paddingBottom: '64px', paddingLeft: '8%', paddingRight: '8%',
          }}
        >
          <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#003366', marginBottom: '12px' }}>
              Stuur ons een bericht
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '40px' }}>
              Vul het formulier in en we nemen zo snel mogelijk contact met u op.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                    placeholder={placeholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
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
                  rows={5}
                  placeholder="Beschrijf uw vraag of project..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#FF6200',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Verstuur bericht
                <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}