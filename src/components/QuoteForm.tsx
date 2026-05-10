'use client';

import { useState } from 'react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  if (mode === 'compact') {
    return (
      <div className="sticky bottom-0 lg:relative bg-white border-t lg:border-t-0 lg:border lg:rounded-lg lg:shadow-lg">
        {/* Gradient Header - Compact Mode */}
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-4 sm:px-6 py-4">
          <h3 className="text-white font-bold text-lg">Get Your Free Quote</h3>
          <p className="text-sky-100 text-sm mt-1">In just 2 minutes</p>
        </div>

        {/* Form Content */}
        <form
          action="/api/submit-form"
          method="POST"
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 space-y-4"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_next" value="https://darinbutler.github.io/loaninsurance.co.nz/thank-you/" />
          <input type="hidden" name="_subject" value="New Quote Request - LoanInsurance.co.nz" />
          <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: 'none' }} />

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="09 XXX XXXX"
            />
          </div>

          {/* Loan Type */}
          <div>
            <label htmlFor="loanType" className="block text-sm font-medium text-slate-700 mb-2">
              Loan Type
            </label>
            <select
              id="loanType"
              name="loanType"
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select loan type...</option>
              {loanTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="block text-sm font-medium text-slate-700 mb-2">
              Approximate Loan Amount
            </label>
            <select
              id="loanAmount"
              name="loanAmount"
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select amount range...</option>
              {loanAmounts.map((amount) => (
                <option key={amount.value} value={amount.value}>
                  {amount.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
          </button>
        </form>

        {/* Trust Badges */}
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

  // Full Mode
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-6 sm:px-8 py-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Your Free Quote</h2>
          <p className="text-sky-100 text-lg">Fill out the form below and we'll respond within 24 hours</p>
        </div>

        {/* Form */}
        <form
          action="/api/submit-form"
          method="POST"
          onSubmit={handleSubmit}
          className="p-6 sm:p-8"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_next" value="https://darinbutler.github.io/loaninsurance.co.nz/thank-you/" />
          <input type="hidden" name="_subject" value="New Quote Request - LoanInsurance.co.nz" />
          <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: 'none' }} />

          <div className="space-y-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Row 2: Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                placeholder="09 XXX XXXX"
              />
            </div>

            {/* Row 3: Loan Type & Loan Amount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="loanType" className="block text-sm font-semibold text-slate-900 mb-2">
                  Type of Loan
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                >
                  <option value="">Select loan type...</option>
                  {loanTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-semibold text-slate-900 mb-2">
                  Approximate Loan Amount
                </label>
                <select
                  id="loanAmount"
                  name="loanAmount"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base"
                >
                  <option value="">Select amount range...</option>
                  {loanAmounts.map((amount) => (
                    <option key={amount.value} value={amount.value}>
                      {amount.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Additional Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-slate-900 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="details"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base resize-none"
                placeholder="Tell us anything else we should know about your situation..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-all duration-200 text-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
            </button>
          </div>
        </form>

        {/* Trust Badges Section */}
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
