import React, { useState } from 'react';
import { Mail, CheckCircle2, Folder, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';

interface EmailTemplate {
  id: string;
  title: string;
  subject: string;
  body: string;
}

const templates: EmailTemplate[] = [
  {
    id: 't1',
    title: 'Discovery Meeting Confirmation',
    subject: 'Confirmed: Discovery Consultation with Md. Alim Ali [Date & Time]',
    body: `Hi [Client Name],

Thank you for scheduling our discovery consultation. 

Our session is confirmed for [Day, Date] at [Time & Timezone].
Here is our Google Meet video link: [Meeting URL]

To ensure we make the most of our time together, I will review your operational requirements in advance. Please feel free to reply with any specific task lists or software environments you would like us to discuss.

Looking forward to speaking with you.

Best regards,
Md. Alim Ali
Virtual Assistant & Digital Marketing Support Specialist`
  },
  {
    id: 't2',
    title: 'High-Priority Inquiry Triage',
    subject: 'Received: Urgent Task Acknowledgment — Action Plan & ETA',
    body: `Hi [Client Name],

This is to confirm that I have received your request regarding [Task Topic] and flagged it under our #01-URGENT queue.

Current Status:
• Task logged into our tracker
• Initial verification in progress
• Estimated Completion Time: [Time / Timezone]

I will send a follow-up confirmation the moment the deliverables are uploaded to your shared drive.

Best regards,
Md. Alim Ali`
  },
  {
    id: 't3',
    title: 'Schedule Conflict Resolution',
    subject: 'Reschedule Request: Adjusting Our Meeting Time [Original Date]',
    body: `Hi [Client Name],

I hope your week is going well.

Due to an unavoidable scheduling overlap with [Event/Reason], I would like to request shifting our meeting on [Original Date]. 

Would either of the following alternate times work for your calendar?
1. [Option 1: Date & Time in Client Timezone]
2. [Option 2: Date & Time in Client Timezone]

I have placed tentative holds on both slots. Please let me know which works best for you and I will update our calendar invitation immediately.

Best regards,
Md. Alim Ali`
  },
  {
    id: 't4',
    title: 'Monthly Deliverables & Hours Recap',
    subject: 'Weekly Operational Recap & Hours Log — [Date Range]',
    body: `Hi [Client Name],

Here is our weekly operational summary for [Date Range]:

Completed Tasks:
• [Task 1 Description — Time spent: X hrs]
• [Task 2 Description — Time spent: X hrs]
• [Task 3 Description — Time spent: X hrs]

Pending / Next Week Priorities:
• [Priority 1]
• [Priority 2]

Total Hours Logged: [X.X hrs]
Shared Drive Files Updated: [Drive Folder URL]

Please let me know if you would like to adjust any priorities for the upcoming week.

Best regards,
Md. Alim Ali`
  }
];

export const EmailPreview: React.FC = () => {
  const [activeView, setActiveView] = useState<'after' | 'before'>('after');
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (t: EmailTemplate) => {
    navigator.clipboard.writeText(`Subject: ${t.subject}\n\n${t.body}`);
    setCopiedId(t.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Before / After Triage Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div>
          <span className="text-xs font-semibold text-slate-300 block">Workflow Demonstration Mode:</span>
          <span className="text-[11px] text-slate-400">Compare executive inbox chaos vs the organized 4-tier system</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('before')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeView === 'before'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Before: Unorganized (482 Unread)
          </button>
          <button
            onClick={() => setActiveView('after')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeView === 'after'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            After: Zero-Inbox (Organized)
          </button>
        </div>
      </div>

      {activeView === 'before' ? (
        /* Before Triage View */
        <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
          <div className="flex items-center gap-3 text-rose-400">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <h4 className="text-sm font-bold">Unorganized Inbox Symptoms</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Prior to standardizing triage protocols, inboxes suffered from hundreds of unread newsletters, missed client follow-ups, lost billing invoices, and constant cognitive anxiety for leadership.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-rose-400 block mb-1">482 Total Unread</span>
              Buried client proposals and overdue vendor approvals.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-rose-400 block mb-1">Zero Folder Hierarchy</span>
              Receipts mixed with urgent partnership contracts.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
              <span className="font-bold text-rose-400 block mb-1">No Response SLA</span>
              Inbound partner questions left pending over 48 hours.
            </div>
          </div>
        </div>
      ) : (
        /* After Triage: 4-Tier Hierarchy View */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: 4-Tier Color Coded Structure (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
              4-Tier Label Hierarchy
            </span>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono font-bold text-rose-300">#01-URGENT-TODAY</span>
                <p className="text-[11px] text-slate-400 mt-0.5">High-priority client issues requiring same-day action under 2 hours.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono font-bold text-cyan-300">#02-CLIENT-CARE</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Ongoing partner correspondence, meeting notes, and updates.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/30 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono font-bold text-amber-300">#03-ACTION-REQUIRED</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Drafting, research requests, and pending reviews by Alim.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono font-bold text-emerald-300">#04-BILLING-RECEIPTS</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Invoices, payment receipts, bank confirmations, and subscriptions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Standardized Response Templates (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
              Standard Operating Templates
            </span>

            {/* Template Selector */}
            <div className="flex flex-wrap gap-1.5">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl)}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                    selectedTemplate.id === tpl.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                      : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {tpl.title}
                </button>
              ))}
            </div>

            {/* Template Display Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 font-mono text-[11px]">
                  Subject: <strong className="text-slate-200">{selectedTemplate.subject}</strong>
                </span>
                <button
                  onClick={() => handleCopy(selectedTemplate)}
                  className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium px-2 py-1 rounded bg-slate-800/80"
                >
                  {copiedId === selectedTemplate.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="font-sans text-slate-300 text-[11px] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {selectedTemplate.body}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
