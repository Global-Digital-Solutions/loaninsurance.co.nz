'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Shield,
  Lock,
  Zap,
  BarChart3,
  Building2,
  Send,
  Loader2,
  Users,
  ArrowRight,
  BadgeCheck,
  Clock,
  Phone,
  FileText,
  Star,
} from 'lucide-react';

const loanTypes = [
  'Personal Loan',
  'Car Finance / GAP Insurance',
  'Home Loan / Mortgage',
  'Redundancy Cover',
  'Commercial Mortgage',
  'Equipment Finance',
  'Business Overdraft / Line of Credit',
  'Other',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const trustPills = [
  { icon: BadgeCheck, text: 'FMA & FSP registered brokers' },
  { icon: Lock, text: '256-bit SSL Secure' },
  { icon: Clock, text: 'Response Within One Business Day' },
  { icon: Shield, text: 'No Broker Fees — Ever' },
  { icon: FileText, text: 'Obligation-Free Enquiry' },
  { icon: Star, text: 'Commercial Lending Specialists' },
];

export function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      _to: 'hello@cover4you.co.nz',
      _subject: 'New Loan Insurance Enquiry — LoanInsurance.co.nz',
      _honey: data.get('_honey') || '',
      name: data.get('name') || '',
      email: data.get('email') || '',
      phone: data.get('phone') || '',
      loanType: data.get('loanType') || '',
      loanAmount: data.get('loanAmount') || '',
      message: data.get('message') || '',
    };

    if (payload._honey) {
      setFormState('success');
      return;
    }

    try {
      const res = await fetch(
        'https://shiny-bush-41cd.darinbutler.workers.dev',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setFormState('success');
        form.reset();
        window.location.href = '/thank-you/';
      } else {
        throw new Error(`Server error: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setFormState('error');
    }
  }

  return (
    <main>
      {/* ── Path Selector — route users before they even reach the form ── */}
      <section className="bg-slate-900 pt-24 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Get a Quote</span>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">Find Your Cover</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              What type of loan do you need protected?
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              Choose below — we&apos;ll point you to the fastest path for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
            {/* Personal path — route to /compare */}
            <Link
              href="/compare"
              className="group relative bg-gradient-to-br from-sky-500/10 to-teal-500/10 border-2 border-teal-500/40 hover:border-teal-400 rounded-2xl p-6 hover:shadow-2xl hover:bg-teal-500/15 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full">
                  ★ Most Popular
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Personal Loan Cover</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                Personal loan, car finance, home loan, redundancy or GAP insurance? Browse 8 licensed NZ providers side-by-side and connect directly — no form required.
              </p>
              <div className="space-y-1.5 mb-5">
                {['Personal & car loans', 'Home loan / mortgage protection', 'Redundancy & GAP cover'].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2 text-teal-300 font-bold group-hover:text-teal-200 transition-colors">
                Browse Personal Providers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Business path — scroll to form */}
            <a
              href="#business-form"
              className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/80 border-2 border-slate-600/50 hover:border-teal-500/60 rounded-2xl p-6 hover:shadow-2xl hover:bg-slate-700/60 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full">
                  Broker Matched
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Business Loan Insurance</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                Commercial mortgage, equipment finance, key person cover or business overdraft? Our licensed brokers tailor quotes for complex business lending needs.
              </p>
              <div className="space-y-1.5 mb-5">
                {['Commercial mortgages & overdrafts', 'Equipment & fleet finance', 'Key person / debt cover'].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2 text-teal-300 font-bold group-hover:text-teal-200 transition-colors">
                Complete the form below <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Business Form Section ────────────────────────────────────── */}
      <section
        id="business-form"
        className="relative pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(/images/hero-professional-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/85" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">

            {/* Left Column — Business copy + trust */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6">
                <Building2 className="w-4 h-4 text-teal-300" />
                <span className="text-teal-200 text-sm font-semibold">Business Loan Insurance Enquiry</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Specialist Cover for<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">
                  Business Lending
                </span>
              </h2>

              <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                Business loan insurance isn&apos;t one-size-fits-all. Whether you&apos;re protecting a commercial mortgage, covering equipment finance, or insuring against key person risk — our licensed brokers build a solution around your actual exposure.
              </p>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Complete the form and a specialist adviser will assess your loan structure, identify the right cover type, and respond with tailored options within one business day. No obligation. No broker fees charged to you.
              </p>

              {/* What happens next */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 mb-8">
                <p className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">What happens next</p>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'You complete the 2-minute form below with your loan details.' },
                    { step: '2', text: 'A licensed NZ broker reviews your enquiry and identifies suitable insurers.' },
                    { step: '3', text: 'You receive tailored coverage options within one business day.' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step}
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email contact */}
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Prefer to email?</span>
                <a href="mailto:hello@cover4you.co.nz" className="text-teal-300 hover:text-teal-200 font-semibold transition-colors">
                  hello@cover4you.co.nz
                </a>
              </div>
            </div>

            {/* Right Column — Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-500/30">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-sky-600 to-teal-500 p-5">
                  <h3 className="text-lg font-bold text-white">Business Loan Insurance Enquiry</h3>
                  <p className="text-sky-100 text-sm mt-1">Licensed broker responds within one business day.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Name */}
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.co.nz"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      placeholder="021 000 0000"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Loan Type */}
                  <div>
                    <label htmlFor="c-loanType" className="block text-sm font-semibold text-slate-700 mb-1">
                      Loan Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="c-loanType"
                      name="loanType"
                      required
                      defaultValue=""
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="" disabled>Select loan type…</option>
                      {loanTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Loan Amount */}
                  <div>
                    <label htmlFor="c-loanAmount" className="block text-sm font-semibold text-slate-700 mb-1">
                      Approximate Loan Amount
                    </label>
                    <select
                      id="c-loanAmount"
                      name="loanAmount"
                      defaultValue=""
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Prefer not to say / Unsure</option>
                      <option value="Under $20,000">Under $20,000</option>
                      <option value="$20,000 – $50,000">$20,000 – $50,000</option>
                      <option value="$50,000 – $150,000">$50,000 – $150,000</option>
                      <option value="$150,000 – $500,000">$150,000 – $500,000</option>
                      <option value="Over $500,000">Over $500,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-semibold text-slate-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us anything else that might help — e.g. type of business, existing cover, urgency…"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Error */}
                  {formState === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 disabled:opacity-70 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get My Quote
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Your details are shared only with licensed NZ insurance brokers.{' '}
                    <a href="/privacy" className="underline hover:text-teal-600">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* ── Trust Pills ────────────────────────────────────────── */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustPills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/15 text-center hover:bg-white/15 hover:border-teal-500/40 transition-all duration-200"
                >
                  <Icon className="w-7 h-7 text-teal-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-xs leading-tight">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dark Stats + Personal Reminder ──────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Stats */}
            <div>
              <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">NZ Insurance Market</p>
              <h3 className="text-3xl font-bold mb-8">The market protecting Kiwi borrowers</h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { stat: '$3.9B', label: 'NZ Life Insurance Market' },
                  { stat: '31+', label: 'Licensed Life Insurers' },
                  { stat: '$3.8B', label: 'Claims Paid Annually' },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-1">{stat}</div>
                    <p className="text-slate-400 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal reminder card */}
            <div className="bg-gradient-to-br from-sky-500/10 to-teal-500/10 border border-teal-500/30 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Looking for personal cover?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                For personal loans, car finance, home loans, redundancy cover and GAP insurance — you don&apos;t need the form. Browse all 8 NZ providers side-by-side and connect directly.
              </p>
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Compare Personal Providers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
