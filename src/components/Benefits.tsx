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

const highlightBenefit = (text: string) => {
  if (text.includes('95%')) {
    return (
      <>
        Tot <span className="text-[#E67E22] font-semibold">95%</span> of meer <span className="text-[#E67E22] font-semibold">tijdsbesparing</span>, afhankelijk van de use-case
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

export function Benefits() {
  return (
    <section id="voordelen" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Title, subtitle, and benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] mb-6">
              Waarom kiezen voor Nodely?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Onze AI-oplossingen leveren meetbare resultaten vanaf dag één.
              Ontdek hoe we jouw bedrijf kunnen transformeren.
            </p>

            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, backgroundColor: 'rgba(255, 98, 0, 0.05)', transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-3 rounded-lg transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FF6200] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-gray-700">
                    {highlightBenefit(benefit)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image — natural aspect ratio, no stretching */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <img
              src="/src/assets/workinglaptop.jpg"
              alt="Professional working on laptop"
              className="rounded-2xl shadow-md w-full h-auto"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}