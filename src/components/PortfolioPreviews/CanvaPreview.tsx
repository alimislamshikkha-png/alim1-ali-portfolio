import React, { useState } from 'react';
import { Palette, Check, Layers, Sparkles, Download } from 'lucide-react';

interface GraphicItem {
  id: number;
  title: string;
  format: string;
  dimensions: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  themeColor: string;
  category: string;
}

const graphics: GraphicItem[] = [
  {
    id: 1,
    title: 'Instagram Feed Promotion',
    format: 'Square Post',
    dimensions: '1080 x 1080 px',
    headline: 'Scale Your Operations Without The Overhead',
    subheadline: 'Dedicated Virtual Assistance & Administrative Precision for High-Growth Founders.',
    ctaText: 'Book Discovery Call · Link in Bio',
    themeColor: 'from-cyan-500 to-blue-600',
    category: 'Lead Generation'
  },
  {
    id: 2,
    title: 'LinkedIn Carousel Cover',
    format: 'Portrait Document Slide',
    dimensions: '1080 x 1350 px',
    headline: '5 Workflow Habits of 7-Figure CEOs',
    subheadline: 'How top executives delegate 80% of daily triage to trusted remote partners.',
    ctaText: 'Swipe Left ➔',
    themeColor: 'from-blue-600 to-indigo-700',
    category: 'Thought Leadership'
  },
  {
    id: 3,
    title: 'Live Webinar Announcement',
    format: 'Landscape Banner',
    dimensions: '1200 x 628 px',
    headline: 'Masterclass: Zero-Inbox in 14 Days',
    subheadline: 'Practical email management protocols, filter architectures, and SOP templates.',
    ctaText: 'Register Free · Thursday 2 PM EST',
    themeColor: 'from-indigo-600 to-purple-600',
    category: 'Event Promotion'
  },
  {
    id: 4,
    title: 'Product Spotlight Card',
    format: 'Social Feature Card',
    dimensions: '1080 x 1080 px',
    headline: 'Automated Client Onboarding Hub',
    subheadline: 'Transform new client intakes into effortless, error-free experiences.',
    ctaText: 'Explore System Features',
    themeColor: 'from-emerald-500 to-teal-600',
    category: 'Feature Spotlight'
  },
  {
    id: 5,
    title: 'Quarterly Offer Campaign',
    format: 'Flash Promo Post',
    dimensions: '1080 x 1080 px',
    headline: 'Mid-Quarter Operational Audit',
    subheadline: 'Complimentary 30-minute schedule & spreadsheet review for new partners.',
    ctaText: 'Claim Your Audit · 5 Spots Open',
    themeColor: 'from-amber-500 to-rose-600',
    category: 'Campaign Promotion'
  }
];

export const CanvaPreview: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeGraphic = graphics[selectedIndex];

  return (
    <div className="space-y-6">
      {/* Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {graphics.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setSelectedIndex(idx)}
            className={`px-3 py-2 rounded-xl border whitespace-nowrap transition-all ${
              selectedIndex === idx
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold shadow-sm'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Graphic {idx + 1}: {item.title}
          </button>
        ))}
      </div>

      {/* Main Graphic Canvas Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Visual Graphic Canvas */}
        <div className="md:col-span-7 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl p-6 bg-gradient-to-br bg-slate-950 border border-slate-700/80 shadow-2xl relative overflow-hidden aspect-square flex flex-col justify-between">
            {/* Background geometric accents */}
            <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br ${activeGraphic.themeColor} opacity-20 blur-2xl pointer-events-none`} />
            <div className={`absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-tr ${activeGraphic.themeColor} opacity-20 blur-2xl pointer-events-none`} />

            {/* Top brand header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[11px] font-bold tracking-wider text-slate-300 uppercase">
                {activeGraphic.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                {activeGraphic.dimensions}
              </span>
            </div>

            {/* Middle Content */}
            <div className="relative z-10 py-6 my-auto">
              <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3 tracking-tight">
                {activeGraphic.headline}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
                {activeGraphic.subheadline}
              </p>
            </div>

            {/* Bottom CTA Bar */}
            <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${activeGraphic.themeColor} shadow-md`}>
                {activeGraphic.ctaText}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Design By Md. Alim Ali
              </span>
            </div>
          </div>
        </div>

        {/* Graphic Specifications & Rationale */}
        <div className="md:col-span-5 space-y-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
              Design Specifications
            </span>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Dimensions</span>
              <span className="font-mono text-white">{activeGraphic.dimensions}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Target Format</span>
              <span className="text-white">{activeGraphic.format}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Creation Tool</span>
              <span className="text-white">Canva Pro · Custom Grid Layout</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Color Palette</span>
              <span className="text-cyan-300 font-medium">High-Contrast Accessible</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
              Deliverable Notes
            </span>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Delivered with high-resolution PNG/JPG exports, raw editable Canva team collaboration link, and font/color hex palette guides for seamless brand integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
