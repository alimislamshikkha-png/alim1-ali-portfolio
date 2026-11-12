import React from 'react';
import { GraduationCap, Award, Compass, ShieldCheck, Cpu, Clock, Check, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            About Md. Alim Ali
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
            Structured Support Built on Business Discipline & Technical Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A Bangladesh-based Virtual Assistant and Digital Marketing Support professional with an academic foundation in Business Administration and a dedication to dependable, worldwide remote service.
          </p>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Academic Credentials, Story & Working Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Bachelor of Business Administration (BBA)</h3>
                  <p className="text-sm text-cyan-300 font-medium">National University, Bangladesh</p>
                  <p className="text-sm text-slate-400 mt-2">
                    My formal business education provides a solid grasp of organizational workflow, operational efficiency, financial numeracy, customer relationship management, and commercial ethics. This background ensures that every task I undertake—whether organizing an inbox or formatting an executive spreadsheet—is approached through a structured business lens.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base">
              <p>
                As business owners, founders, and departmental managers expand, operational friction often slows growth. Unanswered emails accumulate, meeting schedules clash across international time zones, data files become disorganized, and social channels go quiet.
              </p>
              <p>
                My mission is to act as your dependable operational anchor. Based in Bangladesh, I serve international clients across North America, the United Kingdom, Europe, Australia, and beyond. I take pride in delivering meticulous, organized assistance so you can focus on core revenue-generating priorities.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Absolute Confidentiality</h4>
                  <p className="text-xs text-slate-400 mt-1">Strict adherence to client NDAs, data privacy best practices, and secure credential handling.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Global Timezone Overlap</h4>
                  <p className="text-xs text-slate-400 mt-1">Flexible shift scheduling ensuring synchronized communication windows for US, UK, and EU clients.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Compass className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Methodical SOP Execution</h4>
                  <p className="text-xs text-slate-400 mt-1">Clear checklists and documented standard operating procedures for error-free task completion.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Transparent Communication</h4>
                  <p className="text-xs text-slate-400 mt-1">Prompt daily status recaps, proactive roadblock flagging, and honest time logging.</p>
                </div>
              </div>
            </div>

            {/* LinkedIn Connection CTA in About Section */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/alim-ali-488a50415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-950/20"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Column: Software & Ecosystem Competence (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/20 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Software & Tool Ecosystem</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Fluent across modern cloud productivity suites and digital collaboration platforms:
              </p>

              <div className="space-y-4">
                {/* Category 1: Workspace & Documents */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Productivity & Workspaces
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Google Workspace (Drive, Docs, Sheets)</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Microsoft 365 / Excel</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Notion</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Airtable</span>
                  </div>
                </div>

                {/* Category 2: Project Management & Communication */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Coordination & Communication
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Slack</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Trello</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Asana</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Zoom & Google Meet</span>
                  </div>
                </div>

                {/* Category 3: Creative & Media */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Design & Media Production
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Canva Pro</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">CapCut Video</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Adobe Premiere Rush</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Meta Business Suite</span>
                  </div>
                </div>

                {/* Category 4: Email & Support */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Support & Marketing Platforms
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Gmail & Outlook Triage</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Mailchimp / Substack</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">Zendesk / Help Scout</span>
                  </div>
                </div>
              </div>

              {/* Service Boundary Clarification */}
              <div className="mt-6 pt-5 border-t border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Specialized in administrative rigor, organic social coordination, and creative asset support. No SEO or advanced paid advertising claims.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
