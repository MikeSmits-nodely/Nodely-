import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if consent cookie exists
    const consent = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookie_consent='));
    
    if (!consent) {
      // Small delay to ensure smooth appearance
      const timer = setTimeout(() => {
        setShow(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Set cookie to expire in 1 year
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `cookie_consent=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    setShow(false);
  };

  const declineCookies = () => {
    // Set cookie to expire in 1 year (even for decline, to remember preference)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `cookie_consent=declined; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF6200]/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#FF6200]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#003366] mb-2">
                  Wij gebruiken cookies
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren. 
                  Door op "Accepteren" te klikken, gaat u akkoord met ons gebruik van cookies. 
                  Lees meer in ons{' '}
                  <Link 
                    to="/privacy-policy" 
                    className="text-[#FF6200] hover:text-[#E55800] underline font-medium transition-colors"
                  >
                    Privacybeleid
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={declineCookies}
                  className="px-6 py-3 text-[#003366] bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap"
                >
                  Weigeren
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-[#FF6200] hover:bg-[#E55800] text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  Accepteren
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
