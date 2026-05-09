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
              'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
                Protect Your Loan Repayments in New Zealand
              </h1>
              <p className="text-lg sm:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed">
                Get peace of mind with affordable loan protection insurance. If
                you lose your job, suffer an illness, or face unexpected
                hardship, we've got your loan payments covered.
              </p>

              {/* Trust Badges - Overlaid on Hero */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
                  <Shield className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-semibold">ICNZ Registered Brokers</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-semibold">No Broker Fees</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
                  <Lock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-semibold">256-bit SSL Secure</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
                  <Zap className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-semibold">24hr Quote Response</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
                  <MessageCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white font-semibold">Free Consultation</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                  <span>→</span>
                </Link>
                <Link
                  href="/compare"
                  className="bg-white/20 hover:bg-white/30 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-200 border border-white/40 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Compare Providers
                  <span>→</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
              NZ Insurance Industry at a Glance
            </h2>
            <p className="text-center text-slate-600 mb-12">
              The strength of New Zealand's insurance market
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
