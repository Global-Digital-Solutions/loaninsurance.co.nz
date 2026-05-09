'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { providers, type Provider } from '@/data/providers';
import {
  DollarSign,
  Shield,
  Clock,
  AlertCircle,
  FileCheck,
  Star,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Filter,
} from 'lucide-react';

type CategoryFilter = 'all' | 'life-insurer' | 'vehicle-finance' | 'general';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
                ? 'text-amber-400 fill-amber-200'
                : 'text-slate-300'
          }`}
        />
      ))}
      <span className="text-sm font-semibold text-slate-700 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ProviderCard({
  provider,
  expanded,
  onToggle,
}: {
  provider: Provider;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 hover:border-teal-500 transition-all duration-200 overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-900">
              {provider.name}
            </h3>
            {provider.nzOwned && (
              <span className="text-xs font-semibold bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                NZ Owned
              </span>
            )}
            <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              Est. {provider.established}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-3">{provider.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <StarRating rating={provider.rating} />
            <span className="text-xs text-slate-500">
              Financial Strength: {provider.financialStrength}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-slate-200">
          {/* Key Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Max Benefit
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.maxBenefit}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Waiting Periods
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.waitingPeriods}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Benefit Periods
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.benefitPeriods}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Best For
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.bestFor}
              </p>
            </div>
          </div>

          {/* Cover Types & Features */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Cover Types
              </h4>
              <div className="flex flex-wrap gap-2">
                {provider.coverTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-medium bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {provider.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA row */}
          <div className="px-6 pb-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-center text-sm"
            >
              Get a Quote for {provider.name}
            </Link>
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 hover:border-teal-500 text-slate-700 hover:text-teal-600 font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-center text-sm inline-flex items-center justify-center gap-2"
            >
              Visit Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function ComparePageClient() {
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredProviders =
    filter === 'all'
      ? providers
      : providers.filter((p) => p.category === filter);

  const comparisonFactors = [
    {
      icon: DollarSign,
      label: 'Premium Cost',
      description: 'Monthly or annual insurance costs vary by provider, age, and cover level',
    },
    {
      icon: Shield,
      label: 'Cover Amount',
      description: 'Most providers offer up to 115% of mortgage repayments',
    },
    {
      icon: Clock,
      label: 'Waiting Periods',
      description: 'Ranges from 2 weeks to 104 weeks depending on provider',
    },
    {
      icon: AlertCircle,
      label: 'Exclusions',
      description: 'Pre-existing conditions, hazardous activities, and more',
    },
    {
      icon: FileCheck,
      label: 'Claims Process',
      description: 'How easy it is to claim and how quickly benefits are paid',
    },
    {
      icon: Star,
      label: 'Provider Rating',
      description: 'Customer satisfaction, financial strength, and reputation',
    },
  ];

  const howToChoose = [
    {
      title: 'Price vs. Coverage',
      description:
        "Don't choose based on price alone. The cheapest policy might have higher waiting periods or lower coverage limits. Balance cost with the protection you actually need.",
    },
    {
      title: 'Waiting Period Impact',
      description:
        'Shorter waiting periods mean faster benefit payment but higher premiums. Consider your savings buffer when deciding — most NZ providers offer 4 to 104 week options.',
    },
    {
      title: 'Policy Flexibility',
      description:
        'Look for policies that allow you to adjust coverage or pause payments temporarily. Some providers like Asteron Life let you increase cover up to 10% annually without medical reassessment.',
    },
    {
      title: 'Claims Support',
      description:
        'Choose insurers known for straightforward claims processes. Partners Life and AIA consistently rate well for claims support among NZ advisers.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Compare</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Compare NZ Loan Insurance Providers
              </h1>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Compare {providers.length} leading New Zealand loan protection
                insurance providers side-by-side. See coverage, waiting periods,
                benefit limits, and key features to find the right fit for you.
              </p>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">
                  Our Advantage
                </h3>
                <p className="text-slate-700 mb-4">
                  We work with multiple NZ insurance providers to find you the
                  best loan protection for your situation. Get a free comparison
                  quote and let our advisers do the work.
                </p>
                <p className="text-sm text-slate-600">
                  No broker fees, no hidden costs, completely free.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            NZ Loan Insurance Providers
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            Click on any provider to see full details including coverage,
            waiting periods, and key features
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { value: 'all' as CategoryFilter, label: 'All Providers' },
              {
                value: 'life-insurer' as CategoryFilter,
                label: 'Life Insurers',
              },
              {
                value: 'vehicle-finance' as CategoryFilter,
                label: 'Vehicle Finance',
              },
              { value: 'general' as CategoryFilter, label: 'General' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === tab.value
                    ? 'bg-gradient-to-r from-sky-600 to-teal-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Provider Cards */}
          <div className="space-y-4">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.slug}
                provider={provider}
                expanded={expandedProvider === provider.slug}
                onToggle={() =>
                  setExpandedProvider(
                    expandedProvider === provider.slug ? null : provider.slug
                  )
                }
              />
            ))}
          </div>

          {/* Summary note */}
          <p className="text-center text-sm text-slate-500 mt-8">
            Provider information sourced from official websites and public
            disclosures. Premiums vary by individual circumstances. Last updated
            April 2026.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            At-a-Glance Comparison
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Quick comparison of key features across all providers
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-slate-200 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-600 to-teal-500 text-white">
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Provider
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Max Benefit
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Min Wait
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Benefit Period
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold">
                    Strength
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold">
                    NZ Owned
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {providers.map((provider, idx) => (
                  <tr
                    key={provider.slug}
                    className={`border-t border-slate-200 hover:bg-teal-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className="font-bold text-slate-900 text-sm">
                        {provider.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {provider.maxBenefit.length > 40
                        ? provider.maxBenefit.split(' or ')[0]
                        : provider.maxBenefit}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {provider.waitingPeriods.split(',')[0].replace(/\s*to\s*.*/, '')}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {provider.benefitPeriods.split(',')[0]}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {provider.financialStrength.split(' ')[0]}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {provider.nzOwned ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-slate-900">
                      {provider.rating.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Key Factors to Compare
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Look beyond the price tag when comparing loan insurance policies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {factor.label}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How to Choose the Right Policy
          </h2>

          <div className="space-y-6">
            {howToChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-500 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Common Comparison Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Why does waiting period matter?
              </h4>
              <p className="text-slate-700">
                The waiting period is how long you must wait after claiming
                before benefits begin. In NZ, options range from as short as 2
                weeks (Fidelity Life) to 104 weeks. Shorter waiting periods are
                better but cost more. Choose based on your savings buffer.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Is the cheapest policy always the best?
              </h4>
              <p className="text-slate-700">
                No. A cheaper policy with a longer waiting period and lower
                coverage may not protect you adequately. Compare the full
                package — coverage amount, waiting period, benefit period,
                rehabilitation support, and claims reputation.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Can I switch providers later?
              </h4>
              <p className="text-slate-700">
                Yes. Most policies allow you to switch providers if you find
                better terms. However, check for any exclusions that might apply
                to pre-existing conditions when moving to a new insurer.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Should I choose an NZ-owned insurer?
              </h4>
              <p className="text-slate-700">
                NZ-owned insurers like Partners Life, Fidelity Life, and
                Autosure understand local conditions well. However, international
                insurers like AIA and Chubb bring strong financial backing. The
                best choice depends on your priorities — local expertise vs.
                global financial strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Comparison Today
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Get free quotes from multiple providers and compare side-by-side. No
            broker fees, no obligations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Free Comparison Quotes
          </Link>
        </div>
      </section>
    </main>
  );
}
