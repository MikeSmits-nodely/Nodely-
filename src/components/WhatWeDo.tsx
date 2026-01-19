import { motion } from 'motion/react';
import { Headset, Cog, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Headset,
    title: 'Klantenservice Automatisering',
    description: 'Op maat gemaakte oplossingen die je klantenservice transformeren. Altijd beschikbaar, consistente antwoorden en tevreden klanten.'
  },
  {
    icon: Cog,
    title: 'Proces Automatisering',
    description: 'Automatiseer repetitieve taken en workflows met intelligente systemen die volledig aansluiten op jouw unieke bedrijfsprocessen.'
  },
  {
    icon: TrendingUp,
    title: 'Data-gedreven Inzichten',
    description: 'Transformeer ruwe data naar waardevolle inzichten die directe impact hebben op je business. Elke oplossing is maatwerk, geen standaardproduct.'
  }
];

export function WhatWeDo() {
  return (
    <section id="wat-we-doen" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] mb-6">
            Wat we doen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bouwen AI-oplossingen die naadloos integreren in jouw organisatie
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#FF6200] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FF6200]/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#FF6200]/20 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-[#FF6200] transition-transform duration-300 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {index === 0 ? (
                  <>
                    <span className="text-[#E67E22] font-semibold">Op maat gemaakte oplossingen</span> die je klantenservice transformeren. <span className="text-[#E67E22] font-semibold">Altijd beschikbaar</span>, consistente antwoorden en tevreden klanten.
                  </>
                ) : index === 1 ? (
                  <>
                    Automatiseer <span className="text-[#E67E22] font-semibold">repetitieve taken</span> en workflows met intelligente systemen die <span className="text-[#E67E22] font-semibold">volledig aansluiten</span> op jouw unieke bedrijfsprocessen.
                  </>
                ) : (
                  <>
                    Transformeer ruwe data naar <span className="text-[#E67E22] font-semibold">waardevolle inzichten</span> die directe impact hebben op je business. Elke oplossing is <span className="text-[#E67E22] font-semibold">maatwerk</span>, geen standaardproduct.
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}