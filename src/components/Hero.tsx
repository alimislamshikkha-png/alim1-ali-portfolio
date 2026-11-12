import React, { useState, useEffect } from 'react';
import { ArrowRight, Briefcase, Sparkles, Globe, Clock, CheckCircle2, ChevronRight, Linkedin } from 'lucide-react';
import { Workspace3D } from './ThreeCanvas/Workspace3D';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortfolio: () => void;
  onHireMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onViewPortfolio,
  onHireMe,
}) => {
  // Live Bangladesh Standard Time (UTC+6) Clock
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

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Split: Headline & Bio on Left, Portrait & Identity Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional identity kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-4">
              <span>Md. Alim Ali</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Virtual Assistant & Digital Marketing Support</span>
            </div>

            {/* Main Headline (Exact requirement) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] text-wrap:balance">
              Your Business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Better Organized.
              </span>{' '}
              More Productive.
            </h1>

            {/* Subheadline (Exact requirement) */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Reliable Virtual Assistance and Digital Marketing Support for Businesses Worldwide.
            </p>

            {/* Action Buttons: Hire Me, View Portfolio, Explore Services, CONNECT ON LINKEDIN */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onHireMe}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPortfolio}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>

              <a
                href="https://www.linkedin.com/in/alim-ali-488a50415"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs font-bold tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 rounded-xl transition-all flex items-center gap-2 shrink-0 uppercase shadow-md shadow-cyan-950/30"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              <button
                onClick={onExploreServices}
                className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust and Location Markers Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200 block">Based in Bangladesh</span>
                  <span>Serving Worldwide Clients</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200 block">BST (UTC+6): {bdTime || 'Active'}</span>
                  <span>US, UK & EU Overlap</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200 block">National University</span>
                  <span>BBA in Business Admin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Official Portrait with futuristic glassmorphism framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient border */}
              <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-indigo-500/20 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
                {/* Official Uploaded Portrait (Exact Asset, Preserved Identity) */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900">
                  <img
                    src="/assets/aistudio/Professional_Office_Portrait_with_Warm_Bokeh_07dc2d0f.png"
                    alt="Md. Alim Ali — Virtual Assistant & Digital Marketing Support Specialist"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a17]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Identification Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/25">
                    <p className="text-sm font-bold text-white tracking-tight">Md. Alim Ali</p>
                    <p className="text-xs text-cyan-300 font-medium">Virtual Assistant & Digital Marketing Support Specialist</p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span>Dhaka, Bangladesh</span>
                      <span aria-hidden="true">·</span>
                      <span>Worldwide Remote Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 3D Operational Workspace Showcase */}
        <div className="mt-8 pt-10 border-t border-slate-800/60">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Interactive 3D Workspace
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Explore The Digital Command Center
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Interact with the 3D model below to preview operational nodes: task orchestration, calendar management, spreadsheet analytics, and creative media workflows.
            </p>
          </div>

          <Workspace3D onSelectNode={(id) => {
            if (id === 'calendar') {
              const el = document.getElementById('calendar-booking');
              el?.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'sheets' || id === 'media') {
              const el = document.getElementById('portfolio');
              el?.scrollIntoView({ behavior: 'smooth' });
            } else {
              const el = document.getElementById('services');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }} />
        </div>
      </div>
    </section>
  );
};
