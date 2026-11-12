import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { ShieldCheck, Award, Clock, Star, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Client Evaluations & Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Verified Client Standards
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Transparent, honest evaluation standards inspired by Upwork's client verification framework. Zero fabricated ratings or fake testimonials.
            </p>
          </div>

          {/* Ethics Badge */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 max-w-md">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Strict Authenticity Policy</span>
              <span>Reviews will display verified client endorsements upon completed contracts. No invented feedback.</span>
            </div>
          </div>
        </div>

        {/* 3 Upwork-Inspired 3D Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-gradient-to-b from-slate-900/85 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20 relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Subtle 3D background lighting effect */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />

              <div>
                {/* Upwork Status Badge: AWAITING VERIFIED CLIENT FEEDBACK */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 uppercase">
                    {item.statusBadge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {item.verificationStatus}
                  </span>
                </div>

                {/* Rating placeholder (Stars in pending/unrated state) */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex text-slate-700">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-slate-800 stroke-slate-700" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 ml-1">
                    Rating on Completion
                  </span>
                </div>

                {/* Service & Contract Type */}
                <div className="mb-3">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.serviceCategory}
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                    {item.hourlyOrContract}
                  </p>
                </div>

                {/* Feedback Placeholder */}
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/80 mb-5">
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "{item.feedbackText}"
                  </p>
                </div>
              </div>

              {/* Card Footer: Client Info Placeholder & Date */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div>
                  <span className="font-semibold text-slate-300 block text-[11px]">
                    {item.companyName}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {item.country} · International Client
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {item.reviewDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Upwork Profile Integrity Statement */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center max-w-3xl mx-auto text-xs text-slate-400">
          <p>
            Md. Alim Ali operates under an uncompromising ethical code: <strong>never fabricate feedback, ratings, or client quotes</strong>. As upcoming projects with international businesses conclude, real client reviews and Upwork verified contract ratings will be integrated directly into this section.
          </p>
        </div>
      </div>
    </section>
  );
};
