'use client';

import { useState } from 'react';
import { Building2, Send, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const loanTypes = [
  'Commercial Mortgage',
  'Equipment Finance',
  'Vehicle Fleet Finance',
  'Business Overdraft / Line of Credit',
  'Term Loan',
  'Invoice Finance',
  'Other',
];

export default function BusinessLoanForm() {
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
      _cc: 'butlerdarin@gmail.com',
      _subject: 'New Business Loan Insurance Enquiry — LoanInsurance.co.nz',
      _captcha: 'false',
      _honey: data.get('_honey') || '',
      name: data.get('name') || '',
      email: data.get('email') || '',
      phone: data.get('phone') || '',
      company: data.get('company') || '',
      loanType: data.get('loanType') || '',
      loanAmount: data.get('loanAmount') || '',
      message: data.get('message') || '',
    };

    // Honeypot check (client-side)
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
    <div id="quote-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-500/30">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-sky-600 to-teal-500 p-6">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-6 h-6 text-white" />
          <h2 className="text-xl font-bold text-white">Get a Business Loan Insurance Quote</h2>
        </div>
        <p className="text-sky-100 text-sm">
          Our licensed brokers will respond within one business day with tailored options.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="bl-name" className="block text-sm font-semibold text-slate-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="bl-name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="bl-email" className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="bl-email"
              name="email"
              type="email"
              required
              placeholder="jane@yourbusiness.co.nz"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="bl-phone" className="block text-sm font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="bl-phone"
              name="phone"
              type="tel"
              required
              placeholder="021 000 0000"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="bl-company" className="block text-sm font-semibold text-slate-700 mb-1">
              Business / Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="bl-company"
              name="company"
              type="text"
              required
              placeholder="Acme Ltd"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Loan Type */}
        <div>
          <label htmlFor="bl-loanType" className="block text-sm font-semibold text-slate-700 mb-1">
            Type of Business Loan <span className="text-red-500">*</span>
          </label>
          <select
            id="bl-loanType"
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
          <label htmlFor="bl-loanAmount" className="block text-sm font-semibold text-slate-700 mb-1">
            Approximate Loan Amount
          </label>
          <select
            id="bl-loanAmount"
            name="loanAmount"
            defaultValue=""
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">Prefer not to say / Unsure</option>
            <option value="Under $50,000">Under $50,000</option>
            <option value="$50,000 – $150,000">$50,000 – $150,000</option>
            <option value="$150,000 – $500,000">$150,000 – $500,000</option>
            <option value="$500,000 – $1 million">$500,000 – $1 million</option>
            <option value="Over $1 million">Over $1 million</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="bl-message" className="block text-sm font-semibold text-slate-700 mb-1">
            Additional Details
          </label>
          <textarea
            id="bl-message"
            name="message"
            rows={3}
            placeholder="Briefly describe your business and what you'd like to protect…"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Error message */}
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
              Get My Business Quote
            </>
          )}
        </button>

        <p className="text-xs text-slate-500 text-center leading-relaxed">
          By submitting this form you agree to our{' '}
          <a href="/privacy" className="underline hover:text-teal-600">Privacy Policy</a>.
          Your enquiry is forwarded to licensed NZ insurance brokers only. No spam, no third-party marketing.
        </p>
      </form>
    </div>
  );
}
