'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
  Filter,
} from 'lucide-react';

type CategoryFilter = 'all' | 'life-insurer' | 'vehicle-finance' | 'general';

/* ─── Extracts first waiting-period value with its correct unit ─── */
function getMinWait(s: string): string {
  if (/no waiting/i.test(s)) return 'None';
  if (s === 'Selected at application') return 'At application';
  // "14-day" or "30-day" hyphenated style
  const hyphen = s.match(/^(\d+)-day/i);
  if (hyphen) return `${hyphen[1]} days`;
  // First numeric value
  const first = s.match(/^(\d+)/);
  if (!first) return s.split(',')[0].trim();
  const num = first[1];
  if (/\bdays?\b/i.test(s)) return `${num} days`;
  if (/\bweeks?\b/i.test(s)) return `${num} weeks`;
  return num;
}

/* ─── Scroll-triggered fade-in-up ─── */
function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Star rating ─── */
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

/* ─── Provider accordion card ─── */
function ProviderCard({
  provider,
  expanded,
  onToggle,
  index,
}: {
  provider: Provider;
  expanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <AnimatedCard delay={index * 60}>
      <div
        className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden shadow-sm
          ${expanded
            ? 'border-teal-500 shadow-lg shadow-teal-100/60'
            : 'border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-slate-200/80 hover:scale-[1.008]'
          }`}
        style={{ transform: expanded ? undefined : undefined }}
      >
        {/* Coloured top accent strip */}
        <div
          className={`h-1 w-full bg-gradient-to-r from-sky-500 to-teal-400 transition-opacity duration-300 ${
            expanded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Header */}
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
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
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              expanded
                ? 'bg-teal-500 rotate-180'
                : 'bg-slate-100 hover:bg-teal-100'
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 ${expanded ? 'text-white' : 'text-teal-600'}`}
            />
          </div>
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
                href={`/providers/${provider.slug}/`}
                className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-center text-sm inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                View {provider.name} Profile
                <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}

/* ─── Page component ─── */
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
      <section
        className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28"
        style={{
          backgroundImage: 'url(/images/hero-finance-charts.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Compare</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Compare NZ Loan Insurance Providers
            </h1>

            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Compare {providers.length} leading New Zealand loan protection
              insurance providers side-by-side. See coverage, waiting periods,
              benefit limits, and key features — then get a quote directly from
              your preferred provider.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#providers"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md"
              >
                Browse Providers ↓
              </a>
              <Link
                href="/coverage"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-teal-400 text-white hover:text-teal-300 font-semibold py-3 px-6 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                What&apos;s Covered
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#providers"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
            aria-label="Scroll to providers"
          >
            <span className="text-xs font-semibold tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown
              className="w-6 h-6"
              style={{
                animation: 'scrollBounce 1.6s ease-in-out infinite',
              }}
            />
          </a>
        </div>

        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(8px); opacity: 1; }
          }
        `}</style>
      </section>

      {/* Provider Comparison Section */}
      <section
        id="providers"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              NZ Loan Insurance Providers
            </h2>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
              Click any provider to expand full details — coverage limits,
              waiting periods, and key features
            </p>
          </AnimatedCard>

          {/* Filter Tabs */}
          <AnimatedCard delay={80}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { value: 'all' as CategoryFilter, label: 'All Providers' },
                { value: 'life-insurer' as CategoryFilter, label: 'Life Insurers' },
                { value: 'vehicle-finance' as CategoryFilter, label: 'Vehicle Finance' },
                { value: 'general' as CategoryFilter, label: 'General' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filter === tab.value
                      ? 'bg-gradient-to-r from-sky-600 to-teal-500 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-teal-400 hover:text-teal-700'
                  }`}
                >
                  {tab.label}
                  {filter === tab.value && (
                    <span className="ml-1.5 text-xs opacity-80">
                      ({filteredProviders.length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </AnimatedCard>

          {/* Provider Cards */}
          <div className="space-y-4">
            {filteredProviders.map((provider, idx) => (
              <ProviderCard
                key={provider.slug}
                provider={provider}
                expanded={expandedProvider === provider.slug}
                onToggle={() =>
                  setExpandedProvider(
                    expandedProvider === provider.slug ? null : provider.slug
                  )
                }
                index={idx}
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              At-a-Glance Comparison
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Quick comparison of key features across all providers
            </p>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-2xl">
              <table className="w-full bg-slate-800 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-600 to-teal-500 text-white">
                    <th className="px-4 py-3 text-left text-sm font-bold">Provider</th>
                    <th className="px-4 py-3 text-left text-sm font-bold">Max Benefit</th>
                    <th className="px-4 py-3 text-left text-sm font-bold">Min Wait</th>
                    <th className="px-4 py-3 text-left text-sm font-bold">Benefit Period</th>
                    <th className="px-4 py-3 text-left text-sm font-bold">Strength</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">NZ Owned</th>
                    <th className="px-4 py-3 text-center text-sm font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((provider, idx) => (
                    <tr
                      key={provider.slug}
                      className={`border-t border-slate-700 hover:bg-teal-900/30 transition-colors cursor-default ${
                        idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/60'
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span className="font-bold text-white text-sm">
                          {provider.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {provider.maxBenefit.length > 40
                          ? provider.maxBenefit.split(' or ')[0]
                          : provider.maxBenefit}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {getMinWait(provider.waitingPeriods)}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {provider.benefitPeriods.split(',')[0]}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-300">
                        {provider.financialStrength.split(' ')[0]}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {provider.nzOwned ? (
                          <CheckCircle2 className="w-5 h-5 text-teal-400 mx-auto" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-amber-400">
                          {provider.rating.toFixed(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Key Factors to Compare
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Look beyond the price tag when comparing loan insurance policies
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <AnimatedCard key={idx} delay={idx * 70}>
                  <div className="group bg-slate-50 hover:bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center mb-4 shadow-md group-hover:shadow-teal-200/60 transition-shadow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {factor.label}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              How to Choose the Right Policy
            </h2>
          </AnimatedCard>

          <div className="space-y-5">
            {howToChoose.map((item, idx) => (
              <AnimatedCard key={idx} delay={idx * 80}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Common Comparison Questions
            </h2>
          </AnimatedCard>

          <div className="space-y-4">
            {[
              {
                q: 'Why does waiting period matter?',
                a: 'The waiting period is how long you must wait after claiming before benefits begin. In NZ, options range from as short as 2 weeks (Fidelity Life) to 104 weeks. Shorter waiting periods are better but cost more. Choose based on your savings buffer.',
              },
              {
                q: 'Is the cheapest policy always the best?',
                a: "No. A cheaper policy with a longer waiting period and lower coverage may not protect you adequately. Compare the full package — coverage amount, waiting period, benefit period, rehabilitation support, and claims reputation.",
              },
              {
                q: 'Can I switch providers later?',
                a: 'Yes. Most policies allow you to switch providers if you find better terms. However, check for any exclusions that might apply to pre-existing conditions when moving to a new insurer.',
              },
              {
                q: 'Should I choose an NZ-owned insurer?',
                a: "NZ-owned insurers like Partners Life, Fidelity Life, and Autosure understand local conditions well. However, international insurers like AIA and Chubb bring strong financial backing. The best choice depends on your priorities — local expertise vs. global financial strength.",
              },
            ].map((faq, idx) => (
              <AnimatedCard key={idx} delay={idx * 60}>
                <div className="bg-slate-50 hover:bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-700 leading-relaxed pl-9">{faq.a}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">Comparison Disclaimer:</strong> Provider information on this page is editorial, based on publicly available data, and may not reflect current terms, premiums, or product availability. Ratings are our assessment at the time of publishing and are not a guarantee of performance or suitability. LoanInsurance.co.nz is a comparison and referral service — we are not an insurer, broker, or FMA-licensed financial adviser. Always visit providers directly for current policy wording and seek advice from a qualified financial adviser before making any insurance decision.{' '}
              <a href="/disclaimer" className="text-teal-600 hover:text-teal-700 underline">Full disclaimer</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Click through to any provider above to get a personalised quote
            directly. No broker fees, no obligations.
          </p>
          <a
            href="#providers"
            className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Providers ↑
          </a>
        </div>
      </section>
    </main>
  );
}
