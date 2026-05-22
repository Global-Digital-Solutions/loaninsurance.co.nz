'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedStats from '@/components/AnimatedStats';
import { faqs } from '@/data/faqs';
import {
  Briefcase,
  Car,
  Home as HomeIcon,
  Shield,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Lock,
  Zap,
  MessageCircle,
  Building2,
  Users,
  ArrowRight,
} from 'lucide-react';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export default function HomePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const loanTypes = [
    {
      icon: Briefcase,
      title: 'Personal Loans',
      description: 'Protect repayments on personal loans for any purpose',
      href: '/types/personal-loan',
    },
    {
      icon: Car,
      title: 'Car Finance',
      description: 'Coverage for vehicle financing and car loans',
      href: '/types/car-finance',
    },
    {
      icon: HomeIcon,
      title: 'Home Loans',
      description: 'Mortgage and home loan repayment protection',
      href: '/types/home-loan',
    },
    {
      icon: Shield,
      title: 'GAP Insurance',
      description: 'Guaranteed asset protection for financed vehicles',
      href: '/types/gap-insurance',
    },
    {
      icon: TrendingUp,
      title: 'Redundancy Cover',
      description: 'Income protection if you lose your job',
      href: '/types/redundancy-cover',
    },
    {
      icon: Building2,
      title: 'Business Loan',
      description: 'Commercial mortgages, equipment finance & key person cover',
      href: '/types/business-loan',
    },
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Get a Quote',
      description: 'Complete our quick 2-minute online form',
    },
    {
      number: '2',
      title: 'Compare Options',
      description: 'Review coverage from multiple NZ insurers',
    },
    {
      number: '3',
      title: 'Get Protected',
      description: 'Start your coverage within 24 hours',
    },
  ];

  const benefits = [
    {
      title: 'Repayment Protection',
      description: 'Monthly loan payments covered if you cannot work',
    },
    {
      title: 'Redundancy Cover',
      description: 'Protection if you lose your job involuntarily',
    },
    {
      title: 'Death & Disability',
      description: 'Benefits for serious health events',
    },
    {
      title: 'Peace of Mind',
      description: 'Financial security for you and your family',
    },
  ];

  const displayedFAQs = (faqs as FAQItem[]).slice(0, 5);

  return (
    <>
      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'LoanInsurance.co.nz',
            url: 'https://loaninsurance.co.nz',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://loaninsurance.co.nz/contact?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayedFAQs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.replace(/<[^>]*>/g, ''),
              },
            })),
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 flex items-center"
          style={{
            backgroundImage:
              'url(/images/hero-finance-charts.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          {/* Gradient Overlay — dark left, lighter right so image shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">

              {/* Left Column — main content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
                  <Shield className="w-4 h-4 text-teal-300" />
                  <span className="text-teal-200 text-sm font-semibold">8 Licensed NZ Providers Compared</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Protect Your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300">
                    Loan Repayments
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed">
                  Compare loan protection insurance providers side-by-side.
                  If you lose your job, suffer an illness, or face unexpected hardship —
                  your repayments stay covered.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5 backdrop-blur-sm border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-sm text-white font-medium">Licensed NZ Brokers</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5 backdrop-blur-sm border border-white/15">
                    <Lock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-sm text-white font-medium">256-bit SSL Secure</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5 backdrop-blur-sm border border-white/15">
                    <Zap className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-sm text-white font-medium">24hr Response</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 rounded-lg px-3 py-2.5 backdrop-blur-sm border border-white/15">
                    <MessageCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-sm text-white font-medium">No Broker Fees</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/compare"
                    className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Compare Providers →
                  </Link>
                  <Link
                    href="/coverage"
                    className="bg-white/15 hover:bg-white/25 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 border border-white/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    What&apos;s Covered
                  </Link>
                </div>
              </div>

              {/* Right Column — top providers card */}
              <div className="hidden lg:flex lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl w-full max-w-[340px]">
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4">Top-Rated NZ Providers</p>
                  <div className="space-y-3">
                    {[
                      { name: 'AIA New Zealand', rating: 4.5, bestFor: 'Mortgage protection + wellness', tag: 'Top Rated' },
                      { name: 'Partners Life', rating: 4.5, bestFor: 'Flexible waiting periods', tag: 'NZ Owned' },
                      { name: 'Fidelity Life', rating: 4.3, bestFor: 'Highest max benefit ($30k/mo)', tag: 'NZ Owned' },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs">#{i + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm">{p.name}</span>
                            <span className="text-xs bg-teal-500/30 text-teal-200 px-1.5 py-0.5 rounded-full">{p.tag}</span>
                          </div>
                          <p className="text-slate-300 text-xs mt-0.5">{p.bestFor}</p>
                        </div>
                        <div className="text-amber-400 font-bold text-sm flex-shrink-0">★ {p.rating}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/compare"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    See All 8 Providers →
                  </Link>
                  <p className="text-center text-slate-400 text-xs mt-3">No broker fees · Get quotes directly</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Personal vs Business Pathway */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Personal or Business Loan?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We cover both. Choose your path below to find the right loan protection for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Path */}
              <div className="relative rounded-2xl border-2 border-teal-500/30 bg-gradient-to-br from-sky-50 to-teal-50 p-8 hover:shadow-xl hover:border-teal-500/60 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 flex items-center justify-center mb-5">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Personal Loan Insurance</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Compare 8 NZ providers side-by-side for personal loans, car finance, home loans, GAP insurance and redundancy cover. Browse direct and get quotes from providers instantly.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Personal & car loans', 'Home loan / mortgage protection', 'Redundancy & disability cover', 'GAP insurance for vehicles'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg"
                >
                  Browse Personal Providers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Business Path */}
              <div className="relative rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-800 to-slate-900 p-8 hover:shadow-xl hover:border-slate-600 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 flex items-center justify-center mb-5">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Business Loan Insurance</h3>
                <p className="text-slate-300 mb-5 leading-relaxed">
                  Specialist broker-matched cover for business debt. Our licensed NZ brokers provide tailored quotes for commercial mortgages, equipment finance, key person risk and more.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Commercial mortgages & overdrafts', 'Equipment & vehicle fleet finance', 'Key person / life cover on debt', 'Sole traders, companies & trusts'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/types/business-loan"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg"
                >
                  Get a Business Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Types Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Insurance for Every Loan Type
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Whether you have a personal loan, car finance, home loan, or
              business loan, we have protection tailored for you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {loanTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Link
                    key={type.href}
                    href={type.href}
                    className="bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200 group"
                  >
                    <Icon className="w-10 h-10 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {type.description}
                    </p>
                    <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <span>→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              How It Works
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Getting protected takes just a few simple steps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, idx) => (
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

                  {idx < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 lg:-right-8 w-8 h-0.5 bg-gradient-to-r from-sky-600 to-teal-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Why Choose Our Coverage
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <CheckCircle2 className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              The Insurance Industry at a Glance
            </h2>
            <p className="text-center text-slate-600 mb-12">
              The strength of the insurance market
            </p>
            <AnimatedStats />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Find answers to common questions about loan protection insurance
            </p>

            <div className="space-y-4">
              {displayedFAQs.map((faq) => (
                <div
                  key={faq.slug}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-200"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(
                        expandedFAQ === faq.slug ? null : faq.slug
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                        expandedFAQ === faq.slug ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === faq.slug && (
                    <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-slate-700 whitespace-pre-wrap">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faqs"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors inline-flex items-center gap-2"
              >
                View all FAQs <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don't Leave Your Loans Unprotected
            </h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
              Get a free quote today and see how affordable loan protection
              insurance can be for your situation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
