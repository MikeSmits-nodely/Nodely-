import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.avif';

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100vw',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {/* White base behind image */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'white', zIndex: 0 }} />

      {/* Image at exactly 13% opacity */}
      <img
        src={heroBg}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          opacity: 0.13,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%', 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '8rem 1rem' 
        }}
        className="px-4 sm:px-6 lg:px-8"
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#003366] mb-6 sm:mb-8"
          >
            Slimmer werken begint hier
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Nodely <span className="text-[#E67E22] font-semibold">automatiseert</span> jouw werkprocessen met behulp van <span className="text-[#E67E22] font-semibold">AI</span>, waardoor handmatige taken verdwijnen en je organisatie <span className="text-[#E67E22] font-semibold">sneller</span> en <span className="text-[#E67E22] font-semibold">foutloos</span> opereert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center px-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/applicaties"
                className="block w-full sm:inline-block border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-200 text-center"
              >
                Bekijk voorbeelden
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}