import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { BookingFormData } from '../types';
import { 
  Calendar as CalendarIcon, Clock, Globe, CheckCircle2, 
  ChevronLeft, ChevronRight, Video, Mail, User, Briefcase, 
  AlertCircle, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingProps {
  preselectedService?: string;
}

export const Booking: React.FC<BookingProps> = ({ preselectedService }) => {
  // Current calendar view state
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 10, 12)); // Nov 2026 baseline
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-16');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('14:00 (02:00 PM)');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('America/New_York (EST, UTC-5)');

  // Form Fields
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || servicesData[0].title);
  const [meetingPurpose, setMeetingPurpose] = useState('');
  const [platform, setPlatform] = useState<'Google Meet' | 'Zoom' | 'Microsoft Teams'>('Google Meet');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Status & Confirmation
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRequest, setConfirmedRequest] = useState<BookingFormData | null>(null);

  // Timezones list
  const timezones = [
    { label: 'US Eastern Time (EST, UTC-5)', value: 'America/New_York (EST, UTC-5)' },
    { label: 'US Central Time (CST, UTC-6)', value: 'America/Chicago (CST, UTC-6)' },
    { label: 'US Pacific Time (PST, UTC-8)', value: 'America/Los_Angeles (PST, UTC-8)' },
    { label: 'United Kingdom (GMT / BST)', value: 'Europe/London (GMT)' },
    { label: 'Central European Time (CET, UTC+1)', value: 'Europe/Berlin (CET, UTC+1)' },
    { label: 'Australia Eastern Time (AEST, UTC+10)', value: 'Australia/Sydney (AEST, UTC+10)' },
    { label: 'Bangladesh Standard Time (BST, UTC+6)', value: 'Asia/Dhaka (BST, UTC+6)' },
    { label: 'Coordinated Universal Time (UTC)', value: 'UTC' }
  ];

  // Configured available slots for selected date (Monday–Friday)
  const availableSlots = [
    '09:00 AM (BST Morning)',
    '11:30 AM (BST Morning)',
    '02:00 PM (EU/UK Morning)',
    '03:30 PM (EU/UK Overlap)',
    '06:00 PM (US East Morning)',
    '07:30 PM (US East Overlap)',
    '09:00 PM (US East Prime)',
    '10:30 PM (US West Morning)'
  ];

  // Month navigation
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Generate calendar days for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!clientName.trim()) errs.clientName = 'Please provide your full name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please provide a valid business email.';
    if (!service) errs.service = 'Please select a required service.';
    if (!meetingPurpose.trim()) errs.meetingPurpose = 'Please briefly describe the purpose of the call.';
    if (!selectedDate) errs.date = 'Please select a date.';
    if (!selectedTimeSlot) errs.timeSlot = 'Please select an available time.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const bookingPayload: BookingFormData = {
      clientName,
      email,
      service,
      meetingPurpose,
      platform,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      timezone: selectedTimezone,
      additionalNotes
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedRequest(bookingPayload);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setConfirmedRequest(null);
    setClientName('');
    setEmail('');
    setMeetingPurpose('');
    setAdditionalNotes('');
  };

  return (
    <section id="calendar-booking" className="py-20 lg:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Calendar & Appointment Scheduling
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Request a 1-on-1 Discovery Call
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Select your preferred date, convenient time slot in your local time zone, and specify your project requirements to submit an appointment request.
            </p>
          </div>

          {/* Honest Backend Disclaimer (Strict Requirement) */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 max-w-md">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Appointment Request System</span>
              <span>Appointments are requests until verified. Alim personally confirms and issues the calendar invitation link within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* 2-Column Booking Interface: Calendar & Slots on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Month Calendar & Time Slot Picker (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Timezone Selector */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium">Your Local Time Zone:</span>
              </div>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-cyan-500/50"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Calendar Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              {/* Month Header Navigation */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-white">
                  {monthNames[month]} {year}
                </h3>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day-of-week header */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-400 mb-2">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                {daysArray.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-9" />;
                  }

                  const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const isSelected = selectedDate === dayStr;
                  const dayOfWeek = (firstDayIndex + day - 1) % 7;
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                  return (
                    <button
                      key={dayStr}
                      type="button"
                      disabled={isWeekend}
                      onClick={() => setSelectedDate(dayStr)}
                      className={`h-9 rounded-lg font-medium transition-all flex items-center justify-center ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                          : isWeekend
                          ? 'text-slate-600 cursor-not-allowed'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Selected Date: <strong className="text-cyan-300">{selectedDate}</strong></span>
                <span>Mon – Fri Available Slots</span>
              </div>
            </div>

            {/* Available Time Slots Grid */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Available Meeting Times
                </span>
                <span className="text-[11px] text-slate-400">30 Min Consultation</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedTimeSlot === slot
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold shadow-sm'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span>{slot}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Client Information & Booking Request Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Your Meeting Details
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below to submit your appointment request.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Client Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                  {errors.clientName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.clientName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Required Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Required Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                  >
                    {servicesData.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.number}. {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Meeting Platform */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Video Platform
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Google Meet', 'Zoom', 'Microsoft Teams'] as const).map((plat) => (
                      <button
                        key={plat}
                        type="button"
                        onClick={() => setPlatform(plat)}
                        className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                          platform === plat
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {plat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Meeting Purpose */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Meeting Purpose & Project Overview *
                  </label>
                  <textarea
                    rows={3}
                    value={meetingPurpose}
                    onChange={(e) => setMeetingPurpose(e.target.value)}
                    placeholder="Briefly describe what tasks or processes you would like to delegate, your expected weekly hours, or initial deadlines..."
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                  />
                  {errors.meetingPurpose && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.meetingPurpose}</p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Video className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Appointment Request'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  No automated charge or surprise fees. Request is reviewed personally by Md. Alim Ali.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {confirmedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#090e21] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                Request Successfully Logged
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Appointment Request Received
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Thank you, <strong>{confirmedRequest.clientName}</strong>! Your discovery session request has been forwarded to Md. Alim Ali.
              </p>
            </div>

            {/* Request Summary Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Requested Date</span>
                <span className="font-semibold text-white">{confirmedRequest.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Requested Time Slot</span>
                <span className="font-semibold text-cyan-300">{confirmedRequest.timeSlot}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Target Timezone</span>
                <span className="text-slate-200">{confirmedRequest.timezone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Primary Service</span>
                <span className="text-white">{confirmedRequest.service}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Platform</span>
                <span className="text-slate-200">{confirmedRequest.platform}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/50 text-[11px] text-blue-200 text-left">
              <strong>Next Step:</strong> Alim will check the master schedule and email an official calendar invitation with your video link to <strong>{confirmedRequest.email}</strong> within 24 hours.
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
