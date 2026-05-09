'use client';

import Link from 'next/link';
import AnimatedStats from '@/components/AnimatedStats';
import { CheckCircle2, Users, Zap, Award } from 'lucide-react';

export function AboutPageClient() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description:
        'Your financial security and peace of mind are our top priority. We focus on finding solutions that work for you.',
    },
    {
      icon: Zap,
      title: 'Transparency',
      description:
        'No hidden fees, no confusing terms. We explain everything clearly so you understand exactly what you\'re getting.',
    },
    {
      icon: Award,
      title: 'Expert Support',
      description:
        'Our team has deep expertise in loan insurance. We\'re here to answer your questions and guide your decisions.',
    },
    {
      icon: CheckCircle2,
      title: 'Trust & Integrity',
      description:
        'Our broker network is ICNZ registered and committed to the highest ethical standards in insurance brokerage and customer service.',
    },
  ];

  const howWeWork = [
    {
      number: '1',
      title: 'We Listen',
      description:
        'We take time to understand your loan situation, financial circumstances, and protection needs.',
    },
    {
      number: '2',
      title: 'We Compare',
      description:
        'We access quotes from leading NZ insurers to find you the best coverage at the most competitive rates.',
    },
    {
      number: '3',
      title: 'We Explain',
      description:
        'We break down complex insurance terms and help you understand exactly what you\'re covered for.',
    },
    {
      number: '4',
      title: 'We Support',
      description:
        'Beyond the sale, we\'re here to help with questions, claims support, and policy adjustments.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">About</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Protecting Kiwi Families Since 2020
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              LoanInsurance.co.nz is New Zealand's leading loan protection
              insurance comparison service. We help thousands of Kiwis find
              affordable coverage that protects their financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                To make loan protection insurance accessible, understandable,
                and affordable for every New Zealand family. We believe that
                financial protection shouldn't be complicated or expensive.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                By cutting out unnecessary middlemen and providing transparent
                comparisons, we help you find the right coverage at the right
                price. No broker fees. No hidden costs. Just honest,
                straightforward service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-teal-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                NZ Insurance Industry
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-teal-600">$3.9B</div>
                  <p className="text-slate-700">NZ Life Insurance Market</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">31+</div>
                  <p className="text-slate-700">Life Insurers in NZ</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">$3.8B</div>
                  <p className="text-slate-700">Claims Paid Annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How We Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howWeWork.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-lg border border-slate-200 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-sm">{step.description}</p>
                </div>

                {idx < howWeWork.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-sky-600 to-teal-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            These principles guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ICNZ & Compliance */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Trusted Broker Network
          </h2>

          <div className="bg-white p-8 rounded-lg border border-slate-200 mb-8">
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              LoanInsurance.co.nz connects you with a network of insurance
              brokers and advisers who are registered with the Insurance Council
              of New Zealand (ICNZ) and committed to the highest standards of
              professional conduct and customer service.
            </p>
            <p className="text-slate-600">
              Our broker network complies with all relevant NZ insurance
              regulations and best practice standards to ensure your protection
              and confidence.
            </p>
          </div>

          <Link
            href="https://www.icnz.org.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Learn About ICNZ
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Our Impact
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Helping New Zealand families protect their financial future
          </p>
          <AnimatedStats />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Thousands of Protected Families
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Get a free quote today and see how loan protection insurance can
            give you peace of mind.
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
