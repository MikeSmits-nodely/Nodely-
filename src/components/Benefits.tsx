import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const benefits = [
  'Tot 95% of meer tijdsbesparing, afhankelijk van de use-case',
  'Consistenter werken door gestandaardiseerde processen',
  'Lagere operationele kosten op lange termijn',
  'Minimaliseer menselijke fouten in kritieke processen',
  'Schaalbare oplossingen die meegroeien met je bedrijf',
  '24/7 beschikbaarheid zonder extra personeelskosten'
];

export function Benefits() {
  return (
    <section id="voordelen" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] mb-6">
              Waarom kiezen voor Nodely?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Onze AI-oplossingen leveren meetbare resultaten vanaf dag één. 
              Ontdek hoe we jouw bedrijf kunnen transformeren.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              // Helper function to highlight key terms in orange
              const highlightBenefit = (text: string) => {
                const parts = [];
                if (text.includes('95%')) {
                  return (
                    <>
                      Tot <span className="text-[#E67E22] font-semibold">95%</span> <span className="text-[#E67E22] font-semibold">tijdsbesparing</span>, afhankelijk van de use-case
                    </>
                  );
                } else if (text.includes('Consistenter')) {
                  return (
                    <>
                      <span className="text-[#E67E22] font-semibold">Consistenter</span> werken door gestandaardiseerde processen
                    </>
                  );
                } else if (text.includes('Lagere')) {
                  return (
                    <>
                      <span className="text-[#E67E22] font-semibold">Lagere operationele kosten</span> op lange termijn
                    </>
                  );
                } else if (text.includes('Minimaliseer')) {
                  return (
                    <>
                      <span className="text-[#E67E22] font-semibold">Minimaliseer menselijke fouten</span> in kritieke processen
                    </>
                  );
                } else if (text.includes('Schaalbare')) {
                  return (
                    <>
                      <span className="text-[#E67E22] font-semibold">Schaalbare oplossingen</span> die meegroeien met je bedrijf
                    </>
                  );
                } else if (text.includes('24/7')) {
                  return (
                    <>
                      <span className="text-[#E67E22] font-semibold">24/7 beschikbaarheid</span> zonder extra personeelskosten
                    </>
                  );
                }
                return text;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255, 98, 0, 0.05)', transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6200] rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700">
                    {highlightBenefit(benefit)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}