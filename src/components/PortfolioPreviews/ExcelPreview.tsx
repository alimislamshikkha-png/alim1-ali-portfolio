import React, { useState } from 'react';
import { Table, Download, TrendingUp, CheckCircle, BarChart3, Filter } from 'lucide-react';

interface ProjectRow {
  id: string;
  client: string;
  department: string;
  budget: number;
  progress: number;
  status: 'Completed' | 'In Progress' | 'On Track';
  slaScore: string;
}

const initialRows: ProjectRow[] = [
  { id: 'PRJ-101', client: 'Acme Cloud Dynamics', department: 'Operations', budget: 14500, progress: 100, status: 'Completed', slaScore: '99.4%' },
  { id: 'PRJ-102', client: 'Pacific Logistics Ltd', department: 'Data Hygiene', budget: 9200, progress: 85, status: 'In Progress', slaScore: '98.1%' },
  { id: 'PRJ-103', client: 'Apex Media Partners', department: 'Marketing', budget: 12800, progress: 92, status: 'On Track', slaScore: '100%' },
  { id: 'PRJ-104', client: 'Summit Health Advisory', department: 'Administrative', budget: 18400, progress: 100, status: 'Completed', slaScore: '99.8%' },
  { id: 'PRJ-105', client: 'Venture Ridge Capital', department: 'Operations', budget: 22000, progress: 74, status: 'In Progress', slaScore: '97.5%' },
];

export const ExcelPreview: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const totalBudget = initialRows.reduce((acc, row) => acc + row.budget, 0);
  const avgProgress = Math.round(initialRows.reduce((acc, row) => acc + row.progress, 0) / initialRows.length);

  const handleExportCSV = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls: Quarter Filter & Export */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-300">Reporting Period:</span>
          {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuarter(q)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                selectedQuarter === q
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {q} Period
            </button>
          ))}
        </div>

        <button
          onClick={handleExportCSV}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloadSuccess ? 'CSV Exported!' : 'Export Sample CSV'}</span>
        </button>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
            Total Tracked Budget ({selectedQuarter})
          </span>
          <p className="text-2xl font-bold font-mono text-white mt-1 tabular-nums">
            ${totalBudget.toLocaleString()}
          </p>
          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" />
            +14.8% vs Preceding Period
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
            Operational Completion Rate
          </span>
          <p className="text-2xl font-bold font-mono text-cyan-400 mt-1 tabular-nums">
            {avgProgress}%
          </p>
          <span className="text-[11px] text-slate-400 font-medium mt-1 block">
            Across 5 tracked enterprise accounts
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
            Average SLA Delivery Score
          </span>
          <p className="text-2xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">
            99.1%
          </p>
          <span className="text-[11px] text-slate-400 font-medium mt-1 block">
            Zero missed deadlines logged
          </span>
        </div>
      </div>

      {/* Interactive Sheet Table */}
      <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/80">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">Client Account</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Budget ($)</th>
                <th className="py-3 px-4">Progress Bar</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">SLA Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {initialRows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 font-mono font-medium text-cyan-400">{row.id}</td>
                  <td className="py-3 px-4 font-semibold text-white">{row.client}</td>
                  <td className="py-3 px-4 text-slate-400">{row.department}</td>
                  <td className="py-3 px-4 font-mono tabular-nums text-slate-200">
                    ${row.budget.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 w-40">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-cyan-400 h-1.5 rounded-full"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                      <span className="font-mono text-[10px] tabular-nums text-slate-400">
                        {row.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${
                        row.status === 'Completed'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : row.status === 'On Track'
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-emerald-400 tabular-nums">
                    {row.slaScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-[11px] text-slate-400 italic">
        *Demonstration workbook model illustrating formula linkage (XLOOKUP, SUMIFS), dynamic progress bars, and structured formatting.
      </p>
    </div>
  );
};
