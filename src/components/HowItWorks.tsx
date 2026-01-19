import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Kennismaking & Verkenning',
    description: 'We starten met een grondige analyse van jouw bedrijfsprocessen en uitdagingen.'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategie',
    description: 'Samen ontwikkelen we een op maat gemaakt plan met heldere doelstellingen en KPI\'s.'
  },
  {
    number: '03',
    icon: Code,
    title: 'Ontwerpen & Testen',
    description: 'Ons team bouwt jouw AI-oplossing met de nieuwste technologieën en best practices.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Implementeren & Ondersteunen',
    description: 'We implementeren de oplossing naadloos en zorgen voor training, after-sales support en doorlopende ondersteuning.'
  }
];

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#003366] mb-6">
            Hoe het werkt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van idee tot implementatie in vier heldere stappen
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#FF6200] hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-[#FF6200]/40 mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line - hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FF6200]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}