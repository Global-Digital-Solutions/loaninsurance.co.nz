'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Shield,
  Lock,
  Zap,
  BarChart3,
  Settings,
  Building2,
  Send,
  Loader2,
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

export function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const whyChooseUs = [
    { icon: Shield, text: 'ICNZ Registered Broker Network' },
    { icon: CheckCircle2, text: 'No Hidden Broker Fees' },
    { icon: Lock, text: '256-bit SSL Secure' },
    { icon: Zap, text: '24-Hour Quote Response' },
    { icon: BarChart3, text: 'Compare Multiple Insurers' },
    { icon: Settings, text: 'Tailored Coverage Options' },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      _to: 'hello@cover4you.co.nz',
      _cc: 'butlerdarin@gmail.com',
      _subject: 'New Loan Insurance Enquiry — LoanInsurance.co.nz',
      _captcha: 'false',
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
      {/* Hero Section with Background Image */}
      <section
        className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28"
        style={{
          backgroundImage:
            'url(/images/hero-professional-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Get a Quote</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get Your Loan Insurance Quote
              </h1>

              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Personal or business — tell us about your loan and a licensed NZ broker will respond with tailored options. No obligations, no hidden fees.
              </p>

              {/* Email Contact */}
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Any questions?
                    </p>
                    <a
                      href="mailto:hello@cover4you.co.nz"
                      className="text-lg font-bold text-white hover:text-teal-300 transition-colors"
                    >
                      hello@cover4you.co.nz
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Loan callout */}
              <div className="bg-teal-500/20 backdrop-blur-sm p-4 rounded-xl border border-teal-500/40">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-teal-200 font-semibold text-sm mb-1">Business Loan Insurance</p>
                    <p className="text-slate-300 text-sm">
                      For commercial mortgages, equipment finance and business debt, visit our dedicated{' '}
                      <Link href="/types/business-loan" className="text-teal-300 hover:text-teal-200 underline">
                        Business Loan page
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-500/30">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-sky-600 to-teal-500 p-5">
                  <h2 className="text-lg font-bold text-white">Personal Loan Insurance Enquiry</h2>
                  <p className="text-sky-100 text-sm mt-1">We'll respond within one business day with your options.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4">
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
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.co.nz"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
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
                      placeholder="Tell us anything else that might help us find your best options…"
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

          {/* USP Badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm leading-tight">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Complete the Form',
                description: 'Tell us about your loan and coverage needs. Takes just 2 minutes.',
              },
              {
                number: '2',
                title: 'We Compare Options',
                description: 'We search our network of NZ insurers to find your best rates.',
              },
              {
                number: '3',
                title: 'Get Protected',
                description: 'Receive your personalised quote and activate coverage within 24 hours.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-2xl flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>

                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 lg:-right-8 w-8 h-0.5 bg-gradient-to-r from-sky-600 to-teal-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Stats & Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stats */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                NZ Insurance Industry
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    $3.9B
                  </div>
                  <p className="text-slate-300">NZ Life Insurance Market</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    31+
                  </div>
                  <p className="text-slate-300">Life Insurers in NZ</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    $3.8B
                  </div>
                  <p className="text-slate-300">Claims Paid Annually</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Looking for Business Loan Cover?
              </h3>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">
                      Business Lending
                    </p>
                    <p className="text-lg font-bold">Specialist Business Cover</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Commercial mortgages, equipment finance, key person cover and business debt protection — our brokers specialise in business lending.
                </p>
              </div>

              <Link
                href="/types/business-loan"
                className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                Get a Business Loan Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
