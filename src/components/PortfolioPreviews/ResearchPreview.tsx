import React, { useState } from 'react';
import { Search, Filter, ExternalLink, CheckCircle2, FileText } from 'lucide-react';

interface ToolComparison {
  id: string;
  name: string;
  category: string;
  startingPrice: string;
  bestFor: string;
  keyStrength: string;
  limitation: string;
  integrationScore: string;
}

const researchEntries: ToolComparison[] = [
  {
    id: 't-1',
    name: 'Notion Workspace',
    category: 'Knowledge & Docs',
    startingPrice: '$8 / user / mo',
    bestFor: 'Internal SOP wikis, company handbooks, and client portals',
    keyStrength: 'Modular blocks, relational database linking, clean layout',
    limitation: 'Steep initial setup curve for non-technical teams',
    integrationScore: '9.4 / 10'
  },
  {
    id: 't-2',
    name: 'ClickUp 3.0',
    category: 'Project Management',
    startingPrice: '$7 / user / mo',
    bestFor: 'Complex multi-department task tracking and sprint planning',
    keyStrength: 'Highly customizable views (Gantt, List, Board, Mindmap)',
    limitation: 'Feature density can feel cluttered without strict SOP rules',
    integrationScore: '9.2 / 10'
  },
  {
    id: 't-3',
    name: 'Asana Enterprise',
    category: 'Project Management',
    startingPrice: '$10.99 / user / mo',
    bestFor: 'Cross-functional team coordination and executive portfolios',
    keyStrength: 'Rock-solid UI stability, workflow rules, portfolio reporting',
    limitation: 'Higher price point for small businesses',
    integrationScore: '9.6 / 10'
  },
  {
    id: 't-4',
    name: 'Airtable Pro',
    category: 'Database & Ops',
    startingPrice: '$20 / user / mo',
    bestFor: 'Relational business directories, inventory, and content calendars',
    keyStrength: 'Visual relational database with robust automations and interfaces',
    limitation: 'Row limits on lower tier plans',
    integrationScore: '9.5 / 10'
  },
  {
    id: 't-5',
    name: 'Slack Enterprise',
    category: 'Team Communication',
    startingPrice: '$8.75 / user / mo',
    bestFor: 'Real-time internal chat, huddles, and webhook notification channels',
    keyStrength: 'Unmatched 3rd party bot and webhook ecosystem',
    limitation: 'Can become noisy without disciplined channel guidelines',
    integrationScore: '9.8 / 10'
  },
  {
    id: 't-6',
    name: 'Zapier Automation',
    category: 'Workflow Automation',
    startingPrice: '$19.99 / mo',
    bestFor: 'No-code integration pipelines between CRM, email, and sheets',
    keyStrength: 'Over 6,000 app integrations with instant webhooks',
    limitation: 'Cost scales quickly with multi-step high-volume zaps',
    integrationScore: '9.9 / 10'
  }
];

export const ResearchPreview: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = researchEntries.filter((item) => {
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(search.toLowerCase()) ||
      item.keyStrength.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Search & Category Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <Filter className="w-4 h-4 text-cyan-400 shrink-0 mr-1" />
          {['All', 'Knowledge & Docs', 'Project Management', 'Database & Ops', 'Team Communication', 'Workflow Automation'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative sm:w-56">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools & features..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* Research Matrix Table */}
      <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/80">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Software Platform</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Pricing Model</th>
                <th className="py-3 px-4">Optimal Use Case</th>
                <th className="py-3 px-4">Core Advantage</th>
                <th className="py-3 px-4">Integration Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white whitespace-nowrap">{row.name}</td>
                  <td className="py-3 px-4 text-cyan-300 whitespace-nowrap">{row.category}</td>
                  <td className="py-3 px-4 font-mono tabular-nums text-slate-400 whitespace-nowrap">{row.startingPrice}</td>
                  <td className="py-3 px-4 text-slate-300 max-w-xs">{row.bestFor}</td>
                  <td className="py-3 px-4 text-slate-400 max-w-xs">{row.keyStrength}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-emerald-400 tabular-nums whitespace-nowrap">
                    {row.integrationScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Executive Briefing Card */}
      <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 space-y-2">
        <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          Executive Research Briefing Notes
        </span>
        <p className="text-slate-400 leading-relaxed text-[11px]">
          "For growing remote businesses, pairing <strong>Notion</strong> for SOP documentation alongside <strong>ClickUp/Asana</strong> for sprint task accountability yields the highest operational transparency with minimal tool bloat."
        </p>
      </div>
    </div>
  );
};
