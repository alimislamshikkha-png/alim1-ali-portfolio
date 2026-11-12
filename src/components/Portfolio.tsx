import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { DemoProject } from '../types';
import { 
  ArrowRight, X, CheckCircle2, ShieldAlert, Sparkles, 
  ExternalLink, Layers, Check, Clock, Filter, Eye, Briefcase
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<'All' | 'Digital Marketing Support' | 'Virtual Assistant'>('All');
  const [activeProject, setActiveProject] = useState<DemoProject | null>(null);

  const filteredProjects = portfolioData.filter((p) => {
    return selectedDivision === 'All' || p.division === selectedDivision;
  });

  const handleInquireForProject = (projectTitle: string) => {
    setActiveProject(null);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Interactive 3D Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              16 Complete Demonstration Projects
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore 16 in-depth projects—10 Digital Marketing Support and 6 Virtual Assistant deliverables—demonstrating real operational workflows, data architectures, and creative collateral.
            </p>
          </div>

          {/* Honest Independent Demo Project Notice */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 max-w-md">
            <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Independent Demo Project Standard</span>
              <span>All 16 projects are authentic showcase deliverables engineered by Md. Alim Ali to display real capabilities. Never claimed as paid client work.</span>
            </div>
          </div>
        </div>

        {/* Division Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 text-xs font-medium">
          <button
            onClick={() => setSelectedDivision('All')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              selectedDivision === 'All'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm shadow-cyan-950/40'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Projects ({portfolioData.length})
          </button>
          <button
            onClick={() => setSelectedDivision('Digital Marketing Support')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              selectedDivision === 'Digital Marketing Support'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm shadow-cyan-950/40'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Digital Marketing Support ({portfolioData.filter(p => p.division === 'Digital Marketing Support').length})
          </button>
          <button
            onClick={() => setSelectedDivision('Virtual Assistant')}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              selectedDivision === 'Virtual Assistant'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400 font-bold shadow-sm shadow-cyan-950/40'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Virtual Assistant ({portfolioData.filter(p => p.division === 'Virtual Assistant').length})
          </button>
        </div>

        {/* 16 Projects Responsive 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/30 overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div>
                {/* 16:9 Project Image Container with 3D Depth & Scrim */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Independent Demo Project Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-300 uppercase shadow-md">
                      {project.demoTypeLabel} · #{project.number}
                    </span>
                  </div>

                  {/* Division Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-slate-300">
                      {project.division === 'Digital Marketing Support' ? 'Marketing' : 'VA & Ops'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools Used Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800/90 text-[10px] font-medium text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-800/60 text-[10px] text-slate-400">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with explicit View Project Details Button */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] font-medium">
                  {project.deliverables.length} Deliverables
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 transition-all group-hover:border-cyan-400 shadow-sm"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#080d1e] border border-cyan-500/40 rounded-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Badges */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 uppercase">
                {activeProject.demoTypeLabel} · #{activeProject.number}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {activeProject.division}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
              {activeProject.tagline}
            </p>

            {/* High-Resolution Project Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 mb-8 bg-black shadow-xl">
              <img
                src={activeProject.imagePath}
                alt={activeProject.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Business Problem vs Proposed Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-rose-500/20 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                  Business Problem
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeProject.businessProblem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                  Proposed Solution & System
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeProject.proposedSolution}
                </p>
              </div>
            </div>

            {/* Step-by-Step Workflow */}
            <div className="mb-8 p-5 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
                Structured Operational Workflow (5 Steps)
              </h4>
              <div className="space-y-2.5">
                {activeProject.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Tools Utilized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Sample Deliverables Included
                </h4>
                <ul className="space-y-2">
                  {activeProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Software & Platforms Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 block mb-1">Authentic Demonstration Asset</span>
                  <p className="text-[11px] leading-relaxed">
                    Created and maintained by Md. Alim Ali as part of the official international showcase. Available for replication in your live business environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-800 gap-4">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close Details
              </button>
              <button
                onClick={() => handleInquireForProject(activeProject.title)}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <span>Request Similar Deliverable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
