import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Personal Loan Insurance NZ | Protect Your Repayments',
  description:
    'Personal loan insurance protects you against job loss, illness, or death. Get comprehensive coverage for your loan repayments with no broker fees. Quote in 2 minutes.',
  keywords: [
    'personal loan insurance NZ',
    'loan repayment protection',
    'personal loan cover',
    'payment protection insurance',
    'PPI NZ',
  ],
  openGraph: {
    title: 'Personal Loan Insurance NZ | Protect Your Repayments',
    description:
      'Protect your personal loan with comprehensive insurance coverage. Death, terminal illness, disability, redundancy cover available.',
    url: 'https://loaninsurance.co.nz/types/personal-loan',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/types/personal-loan',
  },
};

export default function PersonalLoanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Personal Loan Insurance',
            description: 'Comprehensive insurance protection for personal loan repayments in New Zealand',
            url: 'https://loaninsurance.co.nz/types/personal-loan',
            provider: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://loaninsurance.co.nz',
            },
            areaServed: 'NZ',
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Personal Loan Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Personal Loan Insurance New Zealand
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Protect your personal loan repayments against unexpected life events. Our comprehensive personal loan insurance covers you if you lose your job, become ill, or can no longer work.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Whether you've borrowed $5,000 for a holiday or $50,000 for home improvements, personal loan insurance ensures your family isn't burdened with debt if something happens to you. With coverage up to your outstanding loan balance and no broker fees, peace of mind has never been more affordable.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">ICNZ Registered Broker Network</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">256-bit SSL Encrypted</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees Ever</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">24 Hour Response Time</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Personal Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Monthly premium payments protect your entire loan balance - as low as $5 per week for peace of mind</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage includes redundancy, accident, illness, and death - comprehensive protection for all scenarios</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>No medical exam required for loans under $100,000 - quick, simple approval process</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>NZ-based claims team available during business hours - real people helping real Kiwis</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What's Covered Under Personal Loan Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Death Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                Up to $500,000 protection. If you pass away, we'll pay out your outstanding loan balance in full, protecting your family from debt.
              </p>
            </div>

            {/* Illness & Injury */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness & Injury</h3>
              <p className="text-slate-700 text-sm">
                If you're unable to work due to accident or illness, we cover your loan repayments until you return to work or claim settles.
              </p>
            </div>

            {/* Redundancy Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy Cover</h3>
              <p className="text-slate-700 text-sm">
                Job loss protection. If you're made redundant from employment, we'll cover your monthly loan payments for up to 12 months.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If you're diagnosed with a terminal illness with less than 12 months to live, your loan is paid in full immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Personal Loan Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable Monthly Payments</h3>
                  <p className="text-slate-700">
                    Cover your loan with premiums starting from just $5 per week. Payment scales with your loan balance, ensuring you pay for what you need.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Quick & Easy Application</h3>
                  <p className="text-slate-700">
                    No medical exam for loans under $100,000. Get a quote in 2 minutes and approval within 24 hours. Complete application online.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Coverage Options</h3>
                  <p className="text-slate-700">
                    Choose the covers you need. Stack death, illness, redundancy, and terminal illness protection in any combination that suits your situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Dedicated NZ Claims Team</h3>
                  <p className="text-slate-700">
                    Our New Zealand-based team handles claims Monday-Friday, 9am-5pm. Get personal support and claims processed within 5-10 business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers Up to $500,000</h3>
                  <p className="text-slate-700">
                    Protection scales with your loan. Whether you've borrowed $5,000 or $500,000, we can provide comprehensive insurance coverage for the full amount.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cancel Anytime, No Penalties</h3>
                  <p className="text-slate-700">
                    Your coverage is month-to-month. Cancel whenever you want with no hidden fees, penalties, or long-term contracts to lock you in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Exclusions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">What's Not Covered</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 sm:p-8">
            <p className="text-slate-700 mb-6">
              Personal loan insurance has specific exclusions. Understanding these limitations helps you make an informed decision:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Pre-existing medical conditions (with some waiting periods)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Claims arising from alcohol or drug use</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Voluntary job resignation (redundancy cover only)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Loans taken out in another person's name</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Claims within 30 days of policy start (waiting period)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Self-employed individuals (redundancy cover) unless specifically underwritten</span>
              </li>
            </ul>

            <p className="text-sm text-slate-600 mt-6 pt-6 border-t border-amber-200">
              Full policy terms and conditions are available upon request. We recommend reading these carefully before purchase to understand all coverage details and exclusions.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Personal Loan Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Sole Income Earners</h3>
              </div>
              <p className="text-slate-700">
                If you're the primary income earner and your family depends on your salary, personal loan insurance protects them if you can't work.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Homeowners</h3>
              </div>
              <p className="text-slate-700">
                Already stretched financially with a mortgage? Loan insurance gives you breathing room if redundancy or illness strikes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Contract Workers</h3>
              </div>
              <p className="text-slate-700">
                Without permanent employment, contract workers face higher redundancy risk. Insurance provides essential financial security during between-job periods.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Multiple Loan Holders</h3>
              </div>
              <p className="text-slate-700">
                Managing several loans? Insurance on each covers all your major debts if something happens, preventing financial crisis from compounding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Explore Other Insurance Types</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/types/car-finance"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Car Finance Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Protect your vehicle finance loan and cover GAP insurance needs.</p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/home-loan"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-teal-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Home Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Mortgage protection for homeowners up to $500,000 coverage.</p>
              <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/gap-insurance"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GAP Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Vehicle shortfall cover if your car is written off.</p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/redundancy-cover"
              className="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-rose-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Redundancy Cover</h3>
              <p className="text-slate-700 text-sm mb-4">Job loss protection for loan and bill payments.</p>
              <div className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Protect Your Personal Loan?</h2>
          <p className="text-lg sm:text-xl text-sky-100 mb-8">
            Get a free quote in just 2 minutes. No broker fees, no medical exam for loans under $100,000, and coverage starts immediately.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
