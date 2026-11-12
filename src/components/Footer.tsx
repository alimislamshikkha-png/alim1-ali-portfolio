import React, { useState, useEffect } from 'react';
import { Mail, ArrowUp, Globe, Clock, ShieldCheck, Heart, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [bdTime, setBdTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040711] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Identity & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-lg font-bold text-white tracking-tight block">
                Md. Alim Ali
              </span>
              <span className="text-xs text-cyan-400 font-medium block mt-0.5">
                Virtual Assistant & Digital Marketing Support
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing dependable, detail-driven remote support for founders, executives, and business teams worldwide. Structured administrative rigor and organic digital execution.
            </p>

            <div className="flex items-center gap-2 pt-1 text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a
                href="mailto:alimasko12@gmail.com"
                className="font-mono text-cyan-300 hover:text-white transition-colors"
              >
                alimasko12@gmail.com
              </a>
            </div>

            {/* LinkedIn Integration in Footer */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/alim-ali-488a50415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-bold text-[11px] tracking-wider uppercase transition-all shadow-md shadow-cyan-950/30"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                Worldwide Remote Services
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-mono text-slate-300">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                BST: {bdTime || 'UTC+6'}
              </span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Md. Alim Ali</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors">16 Core Services</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">16 Projects Portfolio</a>
              <a href="#reviews" className="hover:text-cyan-400 transition-colors">Client Evaluations</a>
              <a href="#why-hire-me" className="hover:text-cyan-400 transition-colors">Why Hire Me</a>
              <a href="#calendar-booking" className="hover:text-cyan-400 transition-colors">Schedule Consultation</a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Inquiries</a>
            </div>
          </div>

          {/* Trust & Ethics Policy (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Ethical Standards
            </span>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-2">
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Honest Business Ethics</span>
              </div>
              <p className="leading-relaxed">
                All portfolio projects are honest demonstration assets. Client confidentiality is guarded with strict NDA readiness and zero data disclosure.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Md. Alim Ali. All rights reserved. Worldwide Remote Services.
          </div>

          <div className="flex items-center gap-4">
            <span>Bangladesh · International Service Delivery</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
