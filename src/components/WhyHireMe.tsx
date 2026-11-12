import React from 'react';
import { 
  CheckCircle2, XCircle, ShieldCheck, Clock, FileCheck, 
  MessageSquare, UserCheck, Zap, Sparkles 
} from 'lucide-react';

export const WhyHireMe: React.FC = () => {
  const pillars = [
    {
      title: 'Organized Workflow',
      icon: FileCheck,
      description: 'Checklist-driven execution with documented Standard Operating Procedures (SOPs). Nothing is left to guesswork, ensuring uniform quality every time.',
      stat: '100% SOP Compliance'
    },
    {
      title: 'Attention to Detail',
      icon: CheckCircle2,
      description: 'Meticulous data hygiene, double-checking spreadsheet calculations, formatting alignment, and rigorous proofreading before any deliverable is sent.',
      stat: 'Zero-Error Standard'
    },
    {
      title: 'Reliable Communication',
      icon: MessageSquare,
      description: 'Prompt daily status recaps via Slack, WhatsApp, or email. Proactive identification of roadblocks with solutions ready before you even ask.',
      stat: '< 2hr Response Target'
    },
    {
      title: 'Strict Confidentiality',
      icon: ShieldCheck,
      description: 'NDA-ready with comprehensive digital hygiene. Password manager integration (1Password / Bitwarden), 2FA enforcement, and zero data leakage.',
      stat: 'Enterprise Privacy'
    },
    {
      title: 'Remote Collaboration',
      icon: UserCheck,
      description: 'Seasoned in asynchronous workflows, cloud drive structures, and agile coordination across global distributed teams with zero handoff friction.',
      stat: 'Worldwide Fluent'
    },
    {
      title: 'Disciplined Time Management',
      icon: Clock,
      description: 'Precise time tracking with transparent activity logs (Toggl / Clockify). Dedicated focus blocks to guarantee on-time turnaround for every project.',
      stat: 'Guaranteed Deadlines'
    }
  ];

  const comparisonRows = [
    {
      criteria: 'Task Execution Standard',
      standardVa: 'Ad-hoc, inconsistent steps, requires constant micro-management.',
      alimAli: 'Documented SOP checklists, proactive double-verification, self-managed.'
    },
    {
      criteria: 'Communication & Updates',
      standardVa: 'Radio silence for days until tasks become critically overdue.',
      alimAli: 'Daily asynchronous recaps, proactive blocker alerts, clear delivery ETAs.'
    },
    {
      criteria: 'Data Privacy & Security',
      standardVa: 'Passwords shared in plain text; careless file permissions.',
      alimAli: 'NDA-compliant, 1Password / Bitwarden secure access, 2FA protected.'
    },
    {
      criteria: 'Business & Analytical Mindset',
      standardVa: 'Pure mechanical data entry without understanding commercial context.',
      alimAli: 'BBA academic foundation; understands business goals and ROI.'
    },
    {
      criteria: 'Timezone Synchronicity',
      standardVa: 'Rigid local hours with zero availability during client daytime.',
      alimAli: 'Flexible overlap windows tailored for US, UK, EU, and AU business hours.'
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Why Hire Md. Alim Ali
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
            Reliability You Can Measure, Discipline You Can Trust
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hiring a remote support specialist should remove stress from your business—not add another person to manage. Here is the operational standard I bring to your team.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {pillar.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Standard VA vs Md. Alim Ali */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              The Operational Difference
            </span>
            <h3 className="text-xl font-bold text-white">
              Standard VA Frustrations vs. The Md. Alim Ali Standard
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800 text-[10px] uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4 w-1/4">Evaluation Criteria</th>
                  <th className="py-3 px-4 w-3/8 text-rose-400">Common Remote Freelancer Risks</th>
                  <th className="py-3 px-4 w-3/8 text-cyan-400">The Md. Alim Ali Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-200">
                      {row.criteria}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.standardVa}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.alimAli}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
