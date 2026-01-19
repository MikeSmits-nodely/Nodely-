import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#003366] mb-8"
          >
            Slimmer werken begint hier
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Nodely ontwikkelt <span className="text-[#E67E22] font-semibold">klantspecifieke AI-modellen</span> die workflows <span className="text-[#E67E22] font-semibold">automatiseren</span>, waardoor bedrijfsprocessen <span className="text-[#E67E22] font-semibold">efficiënter</span>, <span className="text-[#E67E22] font-semibold">consistenter</span> en <span className="text-[#E67E22] font-semibold">kosteneffectiever</span> worden.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/contact"
              className="bg-[#FF6200] hover:bg-[#E55800] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Neem contact op
            </Link>
            <Link 
              to="/applicaties"
              className="border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105"
            >
              Bekijk voorbeelden
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}