
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
const logo = '/src/assets/logo-main.png'

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#002244] via-[#003366] to-[#002855] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#004080]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-4 inline-block mb-6 border-2 border-transparent hover:border-[#FF6200] hover:shadow-xl transition-all duration-200">
              <img 
                src={logo} 
                alt="Nodely" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Nodely ontwikkelt klantspecifieke AI-modellen die workflows automatiseren, 
              waardoor bedrijfsprocessen efficiënter, consistenter en kosteneffectiever worden.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/over-ons" className="text-white/80 hover:text-[#FF6200] transition-colors duration-200">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/applicaties" className="text-white/80 hover:text-[#FF6200] transition-colors duration-200">
                  Applicaties
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-[#FF6200] transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#FF6200] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#FF6200] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@nodely.nl" className="text-white/80 hover:text-[#FF6200] transition-colors duration-200">
                  info@nodely.nl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#FF6200] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Eindhoven, Nederland
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin className="w-5 h-5 text-[#FF6200] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.linkedin.com/company/nodelynl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#FF6200] transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Nodely. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-white/60 hover:text-[#FF6200] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/algemene-voorwaarden" className="text-white/60 hover:text-[#FF6200] text-sm transition-colors duration-200">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}