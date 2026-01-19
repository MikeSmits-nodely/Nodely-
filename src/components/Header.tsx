import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo-main.png'

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#003366] via-[#004080] to-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="bg-white rounded-lg px-4 py-2 border-2 border-transparent hover:border-[#FF6200] hover:shadow-lg transition-all duration-200">
              <img 
                src={logo} 
                alt="Nodely" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
          </Link>
           
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className={`relative font-medium transition-colors duration-200 group ${ 
                isActive('/') 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6200] transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
            <Link 
              to="/over-ons"
              className={`relative font-medium transition-colors duration-200 group ${
                isActive('/over-ons') 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Over ons
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6200] transition-all duration-300 ${
                isActive('/over-ons') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
            <Link 
              to="/applicaties"
              className={`relative font-medium transition-colors duration-200 group ${
                location.pathname.startsWith('/applicaties') 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Applicaties
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6200] transition-all duration-300 ${
                location.pathname.startsWith('/applicaties') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
            <Link 
              to="/faq"
              className={`relative font-medium transition-colors duration-200 group ${
                isActive('/faq') 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              FAQ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6200] transition-all duration-300 ${
                isActive('/faq') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
            <Link 
              to="/contact"
              className={`relative font-medium transition-colors duration-200 group ${
                isActive('/contact') 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6200] transition-all duration-300 ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          </nav>

          {/* Desktop CTA Button - large screens only */}
          <Link 
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-white rounded-lg px-5 py-3 border-2 border-transparent hover:border-[#FF6200] hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-[#003366]" />
            <span className="font-semibold text-[#003366]">Plan een consult</span>
          </Link>

          {/* Tablet CTA Button - medium screens only */}
          <Link 
            to="/contact"
            className="hidden md:flex lg:hidden items-center gap-2 bg-white rounded-lg px-5 py-3 border-2 border-transparent hover:border-[#FF6200] hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-[#003366]" />
            <span className="font-semibold text-[#003366]">Contact</span>
          </Link>

          {/* Mobile menu button - small screens only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/over-ons"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/over-ons') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                Over ons
              </Link>
              <Link
                to="/applicaties"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  location.pathname.startsWith('/applicaties') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                Applicaties
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/faq') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive('/contact') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-white rounded-lg px-5 py-3 border-2 border-transparent hover:border-[#FF6200] hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-[#003366]" />
                <span className="font-semibold text-[#003366]">Plan een consult</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}