import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { LeadGenFormData } from '../types';
import { 
  Mail, Send, CheckCircle2, Copy, Check, MapPin, 
  Globe, MessageSquare, Briefcase, DollarSign, Linkedin,
  ExternalLink, Sparkles, Clock, ShieldCheck, ArrowRight
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<LeadGenFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    websiteUrl: '',
    country: '',
    serviceRequired: preselectedService || servicesData[0].title,
    projectDescription: '',
    estimatedBudget: '$500 – $1,500 / month',
    preferredContactMethod: 'Email'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const budgetOptions = [
    '< $500 (Trial / Single Task)',
    '$500 – $1,500 / month (Part-time Support)',
    '$1,500 – $3,000 / month (Dedicated Remote VA)',
    '$3,000+ / month (Full-Scope Operations)',
    'Hourly / Flexible Consultation (Optional)'
  ];

  const contactMethods: Array<'Email' | 'LinkedIn' | 'WhatsApp / Video Call'> = [
    'Email',
    'LinkedIn',
    'WhatsApp / Video Call'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alimasko12@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.businessEmail.trim() || !/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      errs.businessEmail = 'A valid business email is required.';
    }
    if (!formData.country.trim()) errs.country = 'Country / Timezone is required.';
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project, tasks, or operational requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xnpdnder', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        let message = 'We could not send your inquiry. Please try again.';
        try {
          const result = await response.json();
          if (result?.errors?.length) {
            message = result.errors
              .map((item: { message?: string }) => item.message)
              .filter(Boolean)
              .join(' ');
          }
        } catch {
          // Keep the default message when the response is not JSON.
        }
        throw new Error(message);
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'A network error occurred. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setErrors({});
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      websiteUrl: '',
      country: '',
      serviceRequired: servicesData[0].title,
      projectDescription: '',
      estimatedBudget: '$500 – $1,500 / month',
      preferredContactMethod: 'Email'
    });
  };

  const scrollToLeadForm = () => {
    const formElement = document.getElementById('lead-inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80 overflow-hidden">
      {/* 3D Atmosphere lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Introduction Banner */}
        <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-950 border border-cyan-500/30 shadow-2xl shadow-cyan-950/30 mb-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>International Remote Partnership</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Scale Your Business Operations With Precision.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I partner with founders, executives, and marketing directors worldwide to streamline daily tasks, eliminate administrative chaos, coordinate consistent campaigns, and drive structured operational performance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Work With Me Button */}
              <button
                onClick={scrollToLeadForm}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Exact CONNECT ON LINKEDIN Button */}
              <a
                href="https://www.linkedin.com/in/alim-ali-488a50415"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/70 border border-cyan-500/50 rounded-xl transition-all shadow-md shadow-cyan-950/40 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Direct Verified Details (Left) & 3D Interactive Lead Generation Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="border-b border-slate-800 pb-5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Verified Contact Details
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Md. Alim Ali
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Virtual Assistant & Digital Marketing Support Specialist
                </p>
              </div>

              {/* Verified Business Email with Copy & Direct Action */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 mb-5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Official Business Email</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[10px]">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:alimasko12@gmail.com"
                    className="text-sm font-mono font-bold text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                  >
                    alimasko12@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Geographic & Operating Parameters */}
              <div className="space-y-3.5 text-xs text-slate-300 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Operating Location</span>
                    <span className="text-slate-400">Bangladesh (UTC+6) · Dedicated Remote Office</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Target Market & Service Reach</span>
                    <span className="text-slate-400">Worldwide Remote (United States, UK, EU, Australia, Canada)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Response SLA</span>
                    <span className="text-slate-400">Guaranteed reply within 12–24 hours (business inquiries prioritized)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Professional Security & NDA</span>
                    <span className="text-slate-400">Strict confidentiality agreement signed prior to accessing client systems</span>
                  </div>
                </div>
              </div>

              {/* LinkedIn Quick Connect Card */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href="https://www.linkedin.com/in/alim-ali-488a50415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-2 transition-all block text-center shadow-md shadow-cyan-950/40"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>CONNECT ON LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Lead Generation Form (7 cols) */}
          <div id="lead-inquiry-form" className="lg:col-span-7">
            <div 
              className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative"
              style={{
                boxShadow: '0 20px 50px -10px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(6, 182, 212, 0.25)'
              }}
            >
              {/* Form Title & Subtitle */}
              <div className="mb-7 pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Lead Generation & Client Inquiry System
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Start Your International Project
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Provide your company details and project scope. Receive an organized proposal and onboarding plan.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400/60 text-cyan-300 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20 animate-pulse">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Project Inquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your project request for <strong>{formData.serviceRequired}</strong> has been transmitted directly to Md. Alim Ali (<strong>alimasko12@gmail.com</strong>).
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto text-left text-xs text-slate-400 space-y-1">
                    <div><span className="text-slate-300 font-semibold">Preferred Channel:</span> {formData.preferredContactMethod}</div>
                    <div><span className="text-slate-300 font-semibold">Estimated Budget:</span> {formData.estimatedBudget || 'Flexible'}</div>
                    <div><span className="text-slate-300 font-semibold">Expected Reply:</span> Under 24 hours</div>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                    >
                      Submit Another Project Inquiry
                    </button>
                    <a
                      href="https://www.linkedin.com/in/alim-ali-488a50415"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-cyan-950/70 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 flex items-center gap-2"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>CONNECT ON LINKEDIN</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Portfolio Project Inquiry" />
                  {/* Field 1 & 2: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        1. Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Robert Vance"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        2. Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="e.g. robert@vanceenterprises.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      />
                      {errors.businessEmail && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.businessEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Field 3 & 4: Company Name & Website URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        3. Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Vance Operations Inc."
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        4. Website URL (Optional)
                      </label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="e.g. https://company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      />
                    </div>
                  </div>

                  {/* Field 5 & 6: Country & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        5. Country / Timezone *
                      </label>
                      <input
                        type="text"
                        name="countryTimezone"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. USA (EST), UK (GMT), Australia (AEST)"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      />
                      {errors.country && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.country}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        6. Service Required *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      >
                        {servicesData.map((svc) => (
                          <option key={svc.id} value={svc.title} className="bg-slate-900 text-white">
                            {svc.number}. {svc.title} ({svc.division})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 7: Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1">
                      7. Project Description & Task Requirements *
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Outline your primary pain points, tasks (e.g. email inbox overhaul, Google Sheets KPI dashboard, 30-day social calendar), estimated hours/week, and target start date..."
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 resize-none"
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.projectDescription}</p>
                    )}
                  </div>

                  {/* Field 8 & 9: Estimated Budget (Optional) & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        8. Estimated Budget (Optional)
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      >
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        9. Preferred Contact Method *
                      </label>
                      <select
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
                      >
                        {contactMethods.map((m, idx) => (
                          <option key={idx} value={m} className="bg-slate-900 text-white">
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      aria-live="polite"
                      className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-300"
                    >
                      {submitError}
                    </p>
                  )}

                  {/* Exact CTA Button: START YOUR PROJECT */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>{isSubmitting ? 'TRANSMITTING PROJECT DATA...' : 'START YOUR PROJECT'}</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center text-[11px] text-slate-400">
                    <span>Direct submission to </span>
                    <strong className="text-slate-200">alimasko12@gmail.com</strong>
                    <span> · No automated marketing spam · 100% Confidential</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
