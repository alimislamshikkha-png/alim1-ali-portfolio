import React, { useState } from 'react';
import { Calendar, Filter, Share2, CheckCircle2, Clock } from 'lucide-react';

interface CalendarPost {
  day: number;
  weekday: string;
  platform: 'LinkedIn' | 'Instagram' | 'X/Twitter' | 'Facebook';
  pillar: 'Educational' | 'Case Study' | 'Industry Insights' | 'Behind-the-Scenes';
  title: string;
  copyPreview: string;
  hashtags: string[];
  visualFormat: string;
  status: 'Scheduled' | 'Approved' | 'Draft';
}

const posts30Days: CalendarPost[] = [
  {
    day: 1,
    weekday: 'Mon',
    platform: 'LinkedIn',
    pillar: 'Industry Insights',
    title: 'Why Delegation is the Highest-ROI Founder Skill',
    copyPreview: 'Most founders hit an operational plateau not because their product lacks traction, but because their calendar is held hostage by routine admin work...',
    hashtags: ['#FounderTips', '#VirtualAssistant', '#Operations', '#Productivity'],
    visualFormat: 'LinkedIn Document Carousel (5 Slides)',
    status: 'Scheduled'
  },
  {
    day: 2,
    weekday: 'Tue',
    platform: 'Instagram',
    pillar: 'Educational',
    title: '3 Excel Formulas Every Business Owner Needs',
    copyPreview: 'Stop manually copying totals between sheets! Here are the 3 essential formulas (XLOOKUP, SUMIFS, and FILTER) that save 4 hours every week...',
    hashtags: ['#ExcelTips', '#GoogleSheets', '#BusinessHacks', '#Productivity'],
    visualFormat: '1080x1080 Infographic Graphic',
    status: 'Scheduled'
  },
  {
    day: 3,
    weekday: 'Wed',
    platform: 'X/Twitter',
    pillar: 'Case Study',
    title: 'Inbox Zero Breakdown Thread',
    copyPreview: 'How we transitioned a 600-unread inbox into a predictable 20-minute daily triage system without dropping a single client follow-up. A 4-step thread 🧵',
    hashtags: ['#Productivity', '#EmailManagement', '#Operations'],
    visualFormat: 'Numbered Thread + Visual Flowchart',
    status: 'Scheduled'
  },
  {
    day: 4,
    weekday: 'Thu',
    platform: 'LinkedIn',
    pillar: 'Educational',
    title: 'The Real Cost of Context Switching',
    copyPreview: 'Research indicates it takes 23 minutes to refocus after answering a random notification. Here is how structured executive buffer blocks protect your deep work...',
    hashtags: ['#DeepWork', '#TimeManagement', '#Leadership'],
    visualFormat: 'Single Quote Graphic + Longform Caption',
    status: 'Scheduled'
  },
  {
    day: 5,
    weekday: 'Fri',
    platform: 'Instagram',
    pillar: 'Behind-the-Scenes',
    title: 'Friday Workspace Reset Routine',
    copyPreview: 'Before closing the laptop for the weekend, here is our 15-minute operational audit: inbox sweep, next week schedule buffer, and priority task mapping...',
    hashtags: ['#VirtualAssistantLife', '#Workspace', '#WeeklyReview'],
    visualFormat: 'Short-Form Reel (15 sec)',
    status: 'Approved'
  },
  {
    day: 8,
    weekday: 'Mon',
    platform: 'LinkedIn',
    pillar: 'Case Study',
    title: 'SOP Documentation in Action',
    copyPreview: 'If only one person in your company knows how to run a process, you do not have a workflow—you have a bottleneck. Here is our 5-part SOP template...',
    hashtags: ['#Operations', '#StandardOperatingProcedures', '#Scale'],
    visualFormat: 'Checklist PDF Carousel',
    status: 'Approved'
  },
  {
    day: 12,
    weekday: 'Fri',
    platform: 'Facebook',
    pillar: 'Industry Insights',
    title: 'Remote Collaboration Best Practices',
    copyPreview: 'Asynchronous updates beat impromptu meetings every single time. Here is how worldwide remote teams stay aligned across 10-hour timezone differences...',
    hashtags: ['#RemoteWork', '#GlobalTeam', '#VirtualAssistant'],
    visualFormat: 'Clean Infographic Card',
    status: 'Approved'
  },
  {
    day: 15,
    weekday: 'Wed',
    platform: 'Instagram',
    pillar: 'Educational',
    title: 'Calendar Hygiene 101',
    copyPreview: 'Never schedule back-to-back client calls without a 10-minute buffer block. Here is why buffer time saves executive stamina...',
    hashtags: ['#CalendarManagement', '#ExecutiveSupport', '#Productivity'],
    visualFormat: 'Carousel Slides (4 Slides)',
    status: 'Draft'
  },
  {
    day: 22,
    weekday: 'Mon',
    platform: 'LinkedIn',
    pillar: 'Educational',
    title: 'Data Hygiene Checklist for Q4',
    copyPreview: 'Clean CRM records generate higher conversions. Here are our 5 steps to deduplicating client spreadsheets and updating bounce emails...',
    hashtags: ['#DataEntry', '#DatabaseHygiene', '#BusinessGrowth'],
    visualFormat: 'Table Infographic',
    status: 'Draft'
  },
  {
    day: 29,
    weekday: 'Wed',
    platform: 'LinkedIn',
    pillar: 'Case Study',
    title: 'Month-End Operational Audit',
    copyPreview: 'Tracking hours vs deliverable velocity: what 30 days of organized remote assistance looks like in tangible metrics...',
    hashtags: ['#MonthlyReview', '#VirtualAssistant', '#Operations'],
    visualFormat: 'Bar Chart Summary Graphic',
    status: 'Draft'
  }
];

export const SocialCalendarPreview: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<CalendarPost>(posts30Days[0]);

  const filteredPosts = posts30Days.filter((p) => {
    return selectedPlatform === 'All' || p.platform === selectedPlatform;
  });

  return (
    <div className="space-y-6">
      {/* Platform Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold text-slate-300">Filter Channel:</span>
          {['All', 'LinkedIn', 'Instagram', 'X/Twitter', 'Facebook'].map((plat) => (
            <button
              key={plat}
              onClick={() => setSelectedPlatform(plat)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                selectedPlatform === plat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {plat}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Showing 30-Day Master Content Schedule
        </span>
      </div>

      {/* 2-Column Split: Calendar Schedule List & Selected Post Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Scheduled Days List (6 cols) */}
        <div className="md:col-span-6 space-y-2 max-h-[420px] overflow-y-auto pr-1">
          {filteredPosts.map((post) => (
            <div
              key={post.day}
              onClick={() => setSelectedPost(post)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedPost.day === post.day
                  ? 'bg-cyan-950/40 border-cyan-500/50 shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex flex-col items-center justify-center font-mono text-xs font-bold text-cyan-400 shrink-0">
                  <span className="text-[10px] text-slate-400">{post.weekday}</span>
                  <span>{post.day}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white line-clamp-1">{post.title}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                    <span className="text-cyan-300 font-medium">{post.platform}</span>
                    <span>·</span>
                    <span>{post.pillar}</span>
                  </div>
                </div>
              </div>

              <span
                className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${
                  post.status === 'Scheduled'
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                    : post.status === 'Approved'
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                }`}
              >
                {post.status}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Selected Post Inspection Card (6 cols) */}
        <div className="md:col-span-6 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                Day {selectedPost.day} · {selectedPost.platform}
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">{selectedPost.title}</h4>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              {selectedPost.pillar}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Draft Post Copy
            </span>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
              {selectedPost.copyPreview}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Curated Hashtag Cluster
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedPost.hashtags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Visual Asset: <strong className="text-slate-200">{selectedPost.visualFormat}</strong></span>
            <span className="text-emerald-400 font-medium">Ready for Scheduler</span>
          </div>
        </div>
      </div>
    </div>
  );
};
