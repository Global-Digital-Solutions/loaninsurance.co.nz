'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import TrustBanner from '@/components/TrustBanner';
import {
  Heart,
  Zap,
  AlertCircle,
  Briefcase,
  Clock,
  TrendingDown,
} from 'lucide-react';

export function CoveragePageClient() {
  const coverageTypes = [
    {
      icon: Heart,
      title: 'Death Cover',
      description:
        'Remaining loan balance cleared if insured person passes away',
    },
    {
      icon: AlertCircle,
      title: 'Terminal Illness',
      description: 'Coverage triggered by diagnosis of terminal condition',
    },
    {
      icon: Zap,
      title: 'Total Disablement',
      description:
        'Benefits if you become unable to work due to disability',
    },
    {
      icon: TrendingDown,
      title: 'Redundancy',
      description: 'Loan repayments covered if you lose your job',
    },
    {
      icon: Clock,
      title: 'Temporary Disability',
      description:
        'Income protection during temporary illness or injury recovery',
    },
    {
      icon: Briefcase,
      title: 'Business Interruption',
      description: 'Coverage for self-employed during business closure',
    },
  ];

  const typicallyIncluded = [
    'Loan repayment protection',
    'Involuntary unemployment coverage',
    'Accidental injury protection',
    'Illness and disability benefits',
    'Death benefit (varies by policy)',
    'Optional terminal illness rider',
  ];

  const commonExclusions = [
    'Pre-existing conditions (unless waived)',
    'Self-inflicted injury',
    'Voluntary redundancy',
    'Substance abuse related claims',
    'Claims within waiting period',
    'High-risk occupations (unless specified)',
  ];

  const coverageGuide = [
    {
      title: 'Assess Your Loan Amount',
      description:
        'Your coverage should match your outstanding loan balance and monthly repayments.',
    },
    {
      title: 'Consider Your Income',
      description:
        'Coverage limits are typically capped at your monthly income for sustainability.',
    },
    {
      title: 'Evaluate Your Risk',
      description:
        'Job security, health status, and savings determine your coverage needs.',
    },
    {
      title: 'Compare Waiting Periods',
      description:
        'Shorter waiting periods cost more but provide faster benefit payment.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Form */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Coverage</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Loan Insurance Coverage Options
              </h1>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Understand exactly what your loan protection insurance covers
                and how it protects you and your family in New Zealand.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <span className="font-bold">Coverage varies by policy.</span> The
                    specific benefits included depend on your chosen insurer and
                    policy type. Get a personalized quote to see exact coverage
                    details.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Common Coverage Types
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Most loan insurance policies include some or all of these coverage options
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-600">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Covered & Exclusions */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Typically Covered */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What's Typically Covered
              </h3>
              <div className="space-y-3">
                {typicallyIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Exclusions */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Common Exclusions
              </h3>
              <div className="space-y-3">
                {commonExclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✕
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Cover Do You Need */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            How Much Cover Do You Need?
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Determining the right coverage level depends on several factors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageGuide.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50 to-teal-50 p-6 rounded-lg border border-slate-200"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold flex items-center justify-center mb-4">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">Pro Tip</h4>
            <p className="text-slate-700">
              A good rule of thumb is to ensure your coverage matches at least 12-24 months
              of your outstanding loan balance. This provides sufficient protection during
              unemployment or recovery periods while remaining affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <TrustBanner variant="light" />

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Find the Right Coverage for You
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Compare coverage options from leading NZ insurers and get
            personalized recommendations based on your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
