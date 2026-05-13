'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADMnq1OKyxf3JvVv';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

const loanTypes = [
  { value: 'personal-loan', label: 'Personal Loan' },
  { value: 'car-finance', label: 'Car Finance' },
  { value: 'home-loan', label: 'Home Loan' },
  { value: 'business-loan', label: 'Business Loan' },
  { value: 'other', label: 'Other' },
];

const loanAmounts = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-50k', label: '$10,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-250k', label: '$100,000 - $250,000' },
  { value: '250k-500k', label: '$250,000 - $500,000' },
  { value: 'over-500k', label: 'Over $500,000' },
];

const trustBadges = [
  { icon: '✓', label: 'ICNZ Registered Brokers' },
  { icon: '✓', label: 'No Broker Fees' },
  { icon: '✓', label: '256-bit SSL Secure' },
  { icon: '✓', label: '24hr Response' },
];

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const fd = new FormData(e.currentTarget);
    const cfToken = fd.get('cf-turnstile-response');
    if (!cfToken) {
      setError('Please wait a moment for the security check to finish, then try again.');
      return;
    }

    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'New Quote Request — LoanInsurance.co.nz',
          cfTurnstileToken: cfToken,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  }

  if (mode === 'compact') {
    return (
      <div className="sticky bottom-0 lg:relative bg-white border-t lg:border-t-0 lg:border lg:rounded-lg lg:shadow-lg">
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-4 sm:px-6 py-4">
          <h3 className="text-white font-bold text-lg">Get Your Free Quote</h3>
          <p className="text-sky-100 text-sm mt-1">In just 2 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input id="fullName" type="text" name="name" required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="John Doe" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input id="email" type="email" name="email" required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="john@example.com" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
            <input id="phone" type="tel" name="phone" required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="09 XXX XXXX" />
          </div>

          <div>
            <label htmlFor="loanType" className="block text-sm font-medium text-slate-700 mb-2">Loan Type</label>
            <select id="loanType" name="loanType" required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option value="">Select loan type...</option>
              {loanTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-slate-700 mb-2">Approximate Loan Amount</label>
            <select id="loanAmount" name="loanAmount" required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option value="">Select amount range...</option>
              {loanAmounts.map((amount) => (
                <option key={amount.value} value={amount.value}>{amount.label}</option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
          )}

          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
          <div className="flex justify-center">
            <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
          </div>

          <button type="submit" disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
          </button>
        </form>

        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 grid grid-cols-2 gap-2">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs">
              <span className="text-teal-600 font-bold">{badge.icon}</span>
              <span className="text-slate-700 font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-6 sm:px-8 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Your Free Quote</h2>
          <p className="text-sky-100 text-lg">Fill out the form below and we&apos;ll respond within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <input id="fullName" type="text" name="name" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                  placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                <input id="email" type="email" name="email" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                  placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
              <input id="phone" type="tel" name="phone" required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                placeholder="09 XXX XXXX" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="loanType" className="block text-sm font-semibold text-slate-900 mb-2">Type of Loan</label>
                <select id="loanType" name="loanType" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base">
                  <option value="">Select loan type...</option>
                  {loanTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-semibold text-slate-900 mb-2">Approximate Loan Amount</label>
                <select id="loanAmount" name="loanAmount" required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base">
                  <option value="">Select amount range...</option>
                  {loanAmounts.map((amount) => (
                    <option key={amount.value} value={amount.value}>{amount.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-slate-900 mb-2">Additional Details (Optional)</label>
              <textarea id="details" name="message" rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base resize-none"
                placeholder="Tell us anything else we should know about your situation..." />
            </div>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
            )}

            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
            <div className="flex justify-center">
              <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
            </div>

            <button type="submit" disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all duration-200 text-lg flex items-center justify-center gap-2">
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
            </button>
          </div>
        </form>

        <div className="bg-slate-50 px-6 sm:px-8 py-8 border-t border-slate-200">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Why choose us</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center">
                <div className="text-2xl text-teal-600 font-bold mb-2">{badge.icon}</div>
                <p className="text-sm font-medium text-slate-700">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
