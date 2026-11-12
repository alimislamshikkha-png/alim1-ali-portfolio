/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Reviews } from './components/Reviews';
import { WhyHireMe } from './components/WhyHireMe';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Virtual Assistant Support');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#060a17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Fixed Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Page 1: Home */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onViewPortfolio={() => scrollToSection('portfolio')}
          onHireMe={() => scrollToSection('contact')}
        />

        {/* Page 2: About */}
        <About />

        {/* Page 3: Services (16 Services) */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Page 4: Portfolio (16 Demonstration Projects) */}
        <Portfolio />

        {/* Client Reviews (3 Upwork-Inspired Cards) */}
        <Reviews />

        {/* Page 7: Why Hire Me */}
        <WhyHireMe />

        {/* Page 5: Calendar and Booking */}
        <Booking preselectedService={selectedService} />

        {/* Page 8: FAQ */}
        <FAQ />

        {/* Page 6: Contact */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Page 9: Footer */}
      <Footer />
    </div>
  );
}
