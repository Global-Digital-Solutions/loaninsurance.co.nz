import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function HomeLoanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Home Loan Insurance',
            description: 'Mortgage protection insurance for homeowners in New Zealand. Coverage up to $500,000 for death, illness, redundancy, and terminal illness.',
            url: 'https://loaninsurance.co.nz/types/home-loan',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Home Loan Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Home Loan Insurance New Zealand
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Protect your mortgage with comprehensive home loan insurance. If you can't work due to illness, lose your job, or pass away, we cover your monthly mortgage payments to keep your family home secure.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Home loans are typically your largest debt. Home loan insurance ensures your family can stay in your home even if tragedy strikes. With coverage available up to $500,000, peace of mind is affordable - sometimes less than $20 per week.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Home Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Protects your family home - keep your house secure even if you can't work or pass away</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage up to $500,000 - suitable for most New Zealand mortgages and investment properties</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable premiums - from as little as $15-20 per week depending on loan amount and covers selected</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Complements life insurance - mortgage protection works alongside your existing life coverage</span>
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

      {/* Mortgage Protection Coverage */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Comprehensive Mortgage Protection Coverage</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Death Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                Up to $500,000 protection. If you pass away, your entire remaining mortgage is paid in full, and your family keeps the home debt-free.
              </p>
            </div>

            {/* Income Protection */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Income Protection</h3>
              <p className="text-slate-700 text-sm">
                If illness or injury prevents you from working, we cover your mortgage payments until you recover or claim settles, protecting your home security.
              </p>
            </div>

            {/* Redundancy Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy Cover</h3>
              <p className="text-slate-700 text-sm">
                Job loss protection for up to 12 months. If you're made redundant, your mortgage payments are covered while you find new employment.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                Terminal illness cover pays out your full remaining mortgage if diagnosed with less than 12 months to live, providing immediate financial relief.
              </p>
            </div>
          </div>

          <p className="text-center text-slate-700 max-w-3xl mx-auto">
            Choose individual covers or combine them for comprehensive mortgage protection. Coverage amounts scale with your outstanding mortgage balance up to $500,000.
          </p>
        </div>
      </section>

      {/* Difference from Life Insurance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Home Loan vs Life Insurance - What's the Difference?</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Home Loan Insurance</h3>
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Pays specific lender/bank directly</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Amount decreases as loan is repaid</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Covers only the mortgage/loan debt</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Monthly payment protection if unemployed</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Lower cost - $15-20/week typical</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Debt elimination focus</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Life Insurance</h3>
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Pays beneficiary/estate directly</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fixed amount for entire term</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Replaces lost income/provides cash</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">No unemployment/redundancy cover</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Higher cost - $30-60/week typical</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Income replacement focus</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-50 to-teal-50 rounded-lg p-6 sm:p-8 border-2 border-sky-200">
            <p className="text-slate-700 mb-4">
              <strong>Important:</strong> Home loan insurance and life insurance are complementary, not competing products. Many Kiwis benefit from having both:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Life Insurance</strong> replaces your income for your family's general living expenses</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Home Loan Insurance</strong> specifically protects your mortgage to keep the family home secure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cover Types for Homeowners */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Flexible Cover Types for Homeowners</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Essential Cover</h3>
                  <p className="text-slate-700">
                    Death cover only. Suitable for homeowners with other income protection. Pays out your full remaining mortgage if you pass away.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Standard Cover</h3>
                  <p className="text-slate-700">
                    Death + income protection (illness/injury) + redundancy. Most popular option. Comprehensive protection for mortgage and employment security.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Cover</h3>
                  <p className="text-slate-700">
                    All covers included - death, illness, redundancy, and terminal illness. Maximum protection for your biggest asset and family security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Coverage Amounts Available</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Standard Coverage Tiers:</p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• $50,000 - $100,000</li>
                    <li>• $100,000 - $250,000</li>
                    <li>• $250,000 - $500,000</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 text-sm mb-4">
                Coverage automatically decreases as your mortgage reduces, keeping your premiums aligned with your remaining debt.
              </p>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-900 mb-2">Quick Quote Tip:</p>
                <p className="text-xs text-yellow-800">Have your current mortgage balance and lender details handy when requesting a quote for fastest processing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Get It */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">When Should You Get Home Loan Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">First-Time Homebuyer</h3>
              </div>
              <p className="text-slate-700">
                Getting a mortgage for the first time? Home loan insurance is ideal when you're stretching financially to buy your first home and can't afford any income disruption.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Employed Individuals</h3>
              </div>
              <p className="text-slate-700">
                Income can be variable. Mortgage insurance protects your home if your business struggles or you face health issues that impact work capacity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Single Income Families</h3>
              </div>
              <p className="text-slate-700">
                One person earning household income? Insurance protects your family home and mortgage if you're the income earner.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Large Mortgages</h3>
              </div>
              <p className="text-slate-700">
                Owing $400,000+? Insurance becomes more critical as the financial impact of losing your home to foreclosure is devastating.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 sm:p-8 border-2 border-teal-300">
            <p className="text-slate-700 text-center">
              <strong>Best time to apply?</strong> When you first get the mortgage. You'll get better premiums and terms as a new borrower, and you'll be covered from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Related Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Explore Other Insurance Types</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/types/personal-loan"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Protection for personal loans, credit cards, and general borrowing.</p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/car-finance"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-teal-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Car Finance Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Protect your vehicle finance loan and cover GAP insurance needs.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Protect Your Home and Family Today</h2>
          <p className="text-lg sm:text-xl text-sky-100 mb-8">
            Get comprehensive home loan insurance starting from $15-20 per week. No broker fees, quick approval, and coverage starts immediately.
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
