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
  Star,
  Clock,
  BadgeCheck,
  FileText,
  BarChart2,
  ShieldCheck,
  Phone,
  CreditCard,
  Umbrella,
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
      badge: 'Most Popular',
      badgeColor: 'bg-sky-100 text-sky-700',
      gradient: 'from-sky-500 to-blue-600',
      accent: 'border-sky-200 hover:border-sky-400',
    },
    {
      icon: Car,
      title: 'Car Finance',
      description: 'Coverage for vehicle financing and car loans',
      href: '/types/car-finance',
      badge: 'Includes GAP',
      badgeColor: 'bg-amber-100 text-amber-700',
      gradient: 'from-amber-500 to-orange-500',
      accent: 'border-amber-200 hover:border-amber-400',
    },
    {
      icon: HomeIcon,
      title: 'Home Loans',
      description: 'Mortgage and home loan repayment protection',
      href: '/types/home-loan',
      badge: 'Up to $30k/mo',
      badgeColor: 'bg-teal-100 text-teal-700',
      gradient: 'from-teal-500 to-emerald-600',
      accent: 'border-teal-200 hover:border-teal-400',
    },
    {
      icon: Shield,
      title: 'GAP Insurance',
      description: 'Guaranteed asset protection for financed vehicles',
      href: '/types/gap-insurance',
      badge: 'Vehicle specialist',
      badgeColor: 'bg-purple-100 text-purple-700',
      gradient: 'from-purple-500 to-violet-600',
      accent: 'border-purple-200 hover:border-purple-400',
    },
    {
      icon: TrendingUp,
      title: 'Redundancy Cover',
      description: 'Income protection if you lose your job',
      href: '/types/redundancy-cover',
      badge: 'Employer-event cover',
      badgeColor: 'bg-green-100 text-green-700',
      gradient: 'from-green-500 to-teal-500',
      accent: 'border-green-200 hover:border-green-400',
    },
    {
      icon: Building2,
      title: 'Business Loan',
      description: 'Commercial mortgages, equipment finance & key person cover',
      href: '/types/business-loan',
      badge: 'Broker matched',
      badgeColor: 'bg-slate-100 text-slate-700',
      gradient: 'from-slate-600 to-slate-800',
      accent: 'border-slate-300 hover:border-slate-500',
    },
  ];

  const howItWorks = [
    {
      number: '01',
      icon: FileText,
      title: 'Complete Our Quick Quote Form',
      description: 'Fill in a few details — loan type, amount, and the cover you need. Most people are done in under 90 seconds.',
      cta: 'Start here →',
      href: '/contact',
    },
    {
      number: '02',
      icon: BarChart2,
      title: 'Compare NZ Providers',
      description: 'We match your needs across 8 licensed NZ insurers side-by-side — cover types, limits, and waiting periods.',
      cta: 'See providers →',
      href: '/compare',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Get Protected Fast',
      description: 'A licensed NZ adviser contacts you within 24 hours. Coverage can start the same day.',
      cta: 'View coverage →',
      href: '/coverage',
    },
  ];

  const reasons = [
    {
      icon: BadgeCheck,
      title: '8 Licensed NZ Providers',
      description: 'We compare AIA, Partners Life, Fidelity Life, Autosure and more — all regulated by the FMA and RBNZ.',
      gradient: 'from-sky-500 to-teal-500',
      link: '/compare',
      linkLabel: 'Compare providers',
    },
    {
      icon: Clock,
      title: '24-Hour Response',
      description: "Submit your details today and a qualified adviser will be in touch before tomorrow — no waiting weeks for cover.",
      gradient: 'from-teal-500 to-emerald-500',
      link: '/contact',
      linkLabel: 'Get a quote',
    },
    {
      icon: CreditCard,
      title: 'No Broker Fees',
      description: "Our advisers are commission-funded by insurers, so you pay nothing extra to get expert advice on the right cover.",
      gradient: 'from-amber-500 to-orange-500',
      link: '/about',
      linkLabel: 'How we work',
    },
    {
      icon: Umbrella,
      title: 'Cover Tailored to You',
      description: 'Personal loans, mortgages, car finance, redundancy — every policy is matched to your loan type and circumstances.',
      gradient: 'from-purple-500 to-violet-500',
      link: '/coverage',
      linkLabel: 'What\'s covered',
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

        {/* ── Social Proof Strip ─────────────────────────────────────── */}
        <section className="bg-slate-900 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
              {[
                { icon: BadgeCheck, stat: '8', label: 'Licensed NZ Providers' },
                { icon: Star,       stat: '4.5★', label: 'Average Provider Rating' },
                { icon: Clock,      stat: '24hr', label: 'Adviser Response Time' },
                { icon: Shield,     stat: '$0', label: 'Broker Fees Charged' },
              ].map(({ icon: Icon, stat, label }, i) => (
                <div key={i} className="flex items-center gap-3 py-4 px-4 sm:px-6 lg:px-8">
                  <Icon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base leading-tight">{stat}</p>
                    <p className="text-slate-400 text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Personal vs Business Pathway ──────────────────────────── */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">Find Your Cover</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Personal or Business Loan?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We cover both. Choose your path below to find the right loan protection for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Path */}
              <div className="relative rounded-2xl border-2 border-teal-400/50 bg-gradient-to-br from-sky-50 to-teal-50 p-8 hover:shadow-2xl hover:border-teal-500 transition-all duration-300 group">
                {/* Most Popular badge */}
                <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-sky-500 to-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  ★ Most Popular
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Personal Loan Insurance</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Compare 8 NZ providers side-by-side for personal loans, car finance, home loans, GAP insurance and redundancy cover.
                </p>
                <ul className="space-y-2.5 mb-7">
                  {['Personal & car loans', 'Home loan / mortgage protection', 'Redundancy & disability cover', 'GAP insurance for vehicles'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/compare"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg"
                  >
                    Browse Personal Providers <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-teal-400 hover:bg-teal-50 text-teal-700 font-semibold py-3 px-5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* Business Path */}
              <div className="relative rounded-2xl border-2 border-slate-600/40 bg-gradient-to-br from-slate-800 to-slate-900 p-8 hover:shadow-2xl hover:border-teal-500/60 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Business Loan Insurance</h3>
                <p className="text-slate-300 mb-5 leading-relaxed">
                  Specialist broker-matched cover for business debt. Our licensed NZ brokers provide tailored quotes for commercial mortgages, equipment finance, key person risk and more.
                </p>
                <ul className="space-y-2.5 mb-7">
                  {['Commercial mortgages & overdrafts', 'Equipment & vehicle fleet finance', 'Key person / life cover on debt', 'Sole traders, companies & trusts'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/types/business-loan"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg"
                  >
                    Get a Business Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-teal-400 text-slate-300 hover:text-teal-300 font-semibold py-3 px-5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Speak to a Broker
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Insurance Types Grid ───────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">All Loan Types Covered</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Insurance for Every Loan Type
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Whether you have a personal loan, car finance, home loan, or business loan — we have protection tailored for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Link
                    key={type.href}
                    href={type.href}
                    className={`group bg-white p-6 rounded-xl border-2 ${type.accent} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                  >
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${type.badgeColor}`}>
                        {type.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                      {type.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Explore cover <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-2">Simple Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Getting protected takes less than 2 minutes to start
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
              {/* Connector lines (desktop) */}
              <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-teal-500/40 via-sky-400/60 to-teal-500/40 z-0" />

              {howItWorks.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-teal-500/50 hover:shadow-2xl transition-all duration-300 group flex flex-col">
                    {/* Step number */}
                    <div className="text-6xl font-black text-white/5 absolute top-4 right-5 leading-none select-none">
                      {step.number}
                    </div>
                    {/* Icon circle */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{step.description}</p>
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors group-hover:gap-3"
                    >
                      {step.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-200 shadow-xl hover:shadow-teal-500/30 hover:scale-105 text-lg"
              >
                Get a Quote Now <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-slate-500 text-sm mt-3">Takes less than 2 minutes · No broker fees · 24hr response</p>
            </div>
          </div>
        </section>

        {/* ── Why Kiwis Choose Us ───────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-2">Why LoanInsurance.co.nz</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Why Kiwis Choose Us
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We make it easy to find the right loan protection — without the jargon, hidden costs, or delays.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-teal-300 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Gradient top bar */}
                    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${reason.gradient} mb-5`} />
                    <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{reason.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{reason.description}</p>
                    <Link
                      href={reason.link}
                      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors group-hover:gap-2"
                    >
                      {reason.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Compare CTA */}
            <div className="mt-12 bg-gradient-to-r from-sky-50 to-teal-50 border border-teal-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Ready to compare 8 NZ providers?</h3>
                <p className="text-slate-600 text-sm">See cover types, benefit limits, waiting periods and ratings side-by-side — all in one place.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Compare Providers <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-teal-500 hover:bg-teal-50 text-teal-700 font-bold py-3 px-6 rounded-lg transition-all duration-200 whitespace-nowrap"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-teal-400 transition-all duration-200"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(
                        expandedFAQ === faq.slug ? null : faq.slug
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
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
                    <div className="px-6 py-4 border-t border-slate-200 bg-white">
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
              Don&apos;t Leave Your Loans Unprotected
            </h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
              Get a quote today and see how affordable loan protection
              insurance can be for your situation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
