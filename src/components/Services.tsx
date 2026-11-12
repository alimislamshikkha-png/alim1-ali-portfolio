import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Briefcase, Mail, Calendar, Database, Table, Search, 
  Headphones, Share2, Palette, Video, Settings, Megaphone,
  ArrowRight, X, Clock, CheckCircle2, ShieldAlert,
  CalendarCheck, UserCheck, BarChart3, FileText, Send, Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedDivision, setSelectedDivision] = useState<'All' | 'Virtual Assistant' | 'Digital Marketing Support'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Mail': return <Mail className={className} />;
      case 'Calendar': return <Calendar className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Table': return <Table className={className} />;
      case 'Search': return <Search className={className} />;
      case 'Headphones': return <Headphones className={className} />;
      case 'Share2': return <Share2 className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Video': return <Video className={className} />;
      case 'Settings': return <Settings className={className} />;
      case 'Megaphone': return <Megaphone className={className} />;
      case 'CalendarCheck': return <CalendarCheck className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      case 'BarChart3': return <BarChart3 className={className} />;
      case 'FileText': return <FileText className={className} />;
      default: return <Briefcase className={className} />;
    }
  };

  const filteredServices = servicesData.filter((svc) => {
    const matchesDivision = selectedDivision === 'All' || svc.division === selectedDivision;
    const matchesSearch = 
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDivision && matchesSearch;
  });

  const handleRequestService = (svcTitle: string) => {
    setActiveModalService(null);
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(svcTitle);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Complete Service Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              16 Specialized Remote Business Services
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every service is delivered with business rigor, standardized operating protocols, and dependable turnaround times across Virtual Assistance and Digital Marketing Support.
            </p>
          </div>

          {/* Boundaries Notice (Required) */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 max-w-sm">
            <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Strict Focus: Administrative & organic marketing support. No SEO or advanced paid ad management.</span>
          </div>
        </div>

        {/* Division Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-medium">
            <button
              onClick={() => setSelectedDivision('All')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedDivision === 'All'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All (16)
            </button>
            <button
              onClick={() => setSelectedDivision('Virtual Assistant')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedDivision === 'Virtual Assistant'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Virtual Assistant (8)
            </button>
            <button
              onClick={() => setSelectedDivision('Digital Marketing Support')}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedDivision === 'Digital Marketing Support'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Digital Marketing Support (8)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 16 services..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* 16 Services 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              onClick={() => setActiveModalService(svc)}
              className="group p-6 rounded-2xl bg-gradient-to-b from-slate-900/85 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div>
                {/* Header: Number & Division Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      #{svc.number}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {svc.division === 'Virtual Assistant' ? 'Virtual Assistant' : 'Marketing Support'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                    {renderIcon(svc.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {svc.shortDescription}
                </p>

                {/* Key Deliverables (2 items preview) */}
                <div className="space-y-1.5 mb-5">
                  {svc.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                  {svc.deliverables.length > 2 && (
                    <p className="text-[10px] text-cyan-400 font-medium pt-0.5">
                      + {svc.deliverables.length - 2} more deliverables in scope
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer with BOTH View Details and Request Service Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalService(svc);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-medium text-[11px] flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRequestService(svc.title);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 hover:text-white font-semibold text-[11px] flex items-center gap-1 transition-colors shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>Request Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No services matched "{searchQuery}". Try selecting another category or clear the search.
          </div>
        )}
      </div>

      {/* Comprehensive Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#090e1f] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Number */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                SERVICE #{activeModalService.number}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                {activeModalService.division}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalService.detailedDescription}
            </p>

            {/* Administrative Clarification Notice (if applicable) */}
            {activeModalService.administrativeClarification && (
              <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Administrative Scope & Clarity</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {activeModalService.administrativeClarification}
                </p>
              </div>
            )}

            {/* Business Benefits Grid (Requirement 3) */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Key Business Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeModalService.businessBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Work */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Scope of Work
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeModalService.scopeOfWork.map((scope, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">·</span>
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Included Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeModalService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Turnaround */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                  Primary Tools Utilized
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalService.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                  Standard Delivery SLA
                </span>
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {activeModalService.turnaroundTime}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleRequestService(activeModalService.title)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request {activeModalService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
