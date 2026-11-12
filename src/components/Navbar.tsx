import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060a17]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
        >
          Md. Alim Ali
        </a>

        {/* Zone 2: 4–5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio
          </a>
          <a
            href="#reviews"
            onClick={(e) => handleNavClick(e, 'reviews')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Reviews
          </a>
          <a
            href="#why-hire-me"
            onClick={(e) => handleNavClick(e, 'why-hire-me')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Why Hire Me
          </a>
          <a
            href="#calendar-booking"
            onClick={(e) => handleNavClick(e, 'calendar-booking')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Schedule
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, 'faq')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap shrink-0"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b19]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Services (16 Core Offerings)
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              16 Portfolio Projects
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleNavClick(e, 'reviews')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Client Reviews (Upwork Standards)
            </a>
            <a
              href="#why-hire-me"
              onClick={(e) => handleNavClick(e, 'why-hire-me')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Why Hire Me
            </a>
            <a
              href="#calendar-booking"
              onClick={(e) => handleNavClick(e, 'calendar-booking')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 text-center py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold text-sm"
            >
              Get In Touch (Hire Me)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
