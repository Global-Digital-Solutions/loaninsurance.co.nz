import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function RedundancyCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Redundancy Insurance',
            description: 'Job loss insurance covering loan and bill payments if made redundant. Protection for up to 12 months of payments in New Zealand',
            url: 'https://loaninsurance.co.nz/types/redundancy-cover',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Redundancy Cover</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Redundancy Cover New Zealand
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Job loss protection insurance that covers your loan payments, mortgages, and bills if you're made redundant. Get up to 12 months of payment protection.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Redundancy can happen to anyone, even valuable employees. If your position is eliminated, redundancy cover ensures your family's financial obligations continue to be met while you transition to new employment.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Redundancy Cover?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>12 months of payment protection - covers loans, mortgages, and bills while you find new work</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable premiums - from just $8-12 per week for comprehensive job loss coverage</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Real job loss protection - not just redundancy, but accidental unemployment events covered</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Designed for NZ employment - understands Kiwi redundancy practices and Employment Relations Authority</span>
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

      {/* What Redundancy Cover Protects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What Redundancy Cover Protects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Loan Payments */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Loan Repayments</h3>
              <p className="text-slate-700 text-sm">
                Personal loans, car finance, hire purchase, and other loan repayments are covered for up to 12 months if made redundant.
              </p>
            </div>

            {/* Mortgage Payments */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mortgage Payments</h3>
              <p className="text-slate-700 text-sm">
                Your home mortgage is covered. Keep your house and avoid default notices while you transition to new employment.
              </p>
            </div>

            {/* Utility Bills */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Utility Bills</h3>
              <p className="text-slate-700 text-sm">
                Electricity, water, gas, and internet bills are covered, ensuring your family's day-to-day needs are met.
              </p>
            </div>

            {/* Insurance Premiums */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Insurance Premiums</h3>
              <p className="text-slate-700 text-sm">
                Home, car, and contents insurance premiums can be included in coverage, protecting your insurance from lapsing.
              </p>
            </div>
          </div>

          <p className="text-center text-slate-700 max-w-3xl mx-auto">
            Coverage is provided as monthly benefit payments up to a maximum amount, ensuring your essential financial obligations are covered during the employment transition period.
          </p>
        </div>
      </section>

      {/* Waiting Periods Explained */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Waiting Periods Explained</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Do Waiting Periods Exist?</h3>
              <p className="text-slate-700 mb-6">
                Insurance companies build waiting periods (also called excess periods) into redundancy cover to prevent fraudulent claims. They ensure you must be without employment for a period before benefits begin.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Typical Waiting Periods:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Policy Start Date to First Claim: 30 Days</p>
                  <p className="text-sm text-slate-700">You can't claim within 30 days of the policy starting - this prevents immediate gaming of the system.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Claim Waiting Period: 14 Days</p>
                  <p className="text-sm text-slate-700">Once redundant, you must typically wait 14 days after job loss before benefits commence.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Maximum Benefit Period: 12 Months</p>
                  <p className="text-sm text-slate-700">Coverage lasts up to 12 months from the claim start date, after which you need ongoing employment.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg p-6 sm:p-8 border border-sky-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What Counts as Job Loss?</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-teal-900 text-center mb-2">✓ COVERED</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Made redundant by employer</li>
                    <li>• Position eliminated in restructuring</li>
                    <li>• Unfair dismissal (after legal resolution)</li>
                    <li>• Fixed-term contract not renewed</li>
                    <li>• Forced early retirement</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-rose-900 text-center mb-2">✗ NOT COVERED</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Voluntary resignation</li>
                    <li>• Dismissal for misconduct</li>
                    <li>• Taking early retirement</li>
                    <li>• Quitting without cause</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-600 bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <strong>Important:</strong> Claims must be supported by documentation from employer confirming the redundancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who's Eligible for Redundancy Cover?</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Permanent Employees</h3>
                  <p className="text-slate-700">
                    Full-time and part-time permanent employees are eligible. You must be employed for at least 12 months at application.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Fixed-Term Contract Workers</h3>
                  <p className="text-slate-700">
                    If on a fixed-term contract with at least 12 months remaining, you're eligible for coverage up to contract end.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Government Employees</h3>
                  <p className="text-slate-700">
                    Public sector employees can be covered, though some agencies have different eligibility requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Age Requirements</h3>
                  <p className="text-slate-700">
                    Typically available between ages 18-65. Some products extend to 70, but with different terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">May NOT Be Eligible If:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Self-employed or contractor (varies by product)</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Employed less than 12 months at application</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Currently unemployed or seeking redundancy</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Limited employment prospects (e.g., notice of restructuring)</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Over age limits for coverage (varies by insurer)</span>
                </li>
              </ul>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-900 mb-2">Pro Tip:</p>
                <p className="text-xs text-yellow-800">
                  Get redundancy cover while employed. Once made redundant, you can't claim benefits under a new policy - you must have been covered at the time of job loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Employed Considerations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Special Considerations for Self-Employed</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Can Self-Employed Get Redundancy Cover?</h3>
              <p className="text-slate-700 mb-6">
                Traditional redundancy cover is designed for employees. However, self-employed individuals can access alternative forms of income protection. Some insurers offer specialized products covering business income loss due to illness or injury.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 my-6">
                <p className="text-slate-700">
                  <strong>Self-employed clients:</strong> If you're self-employed or a contractor, we recommend discussing your specific situation with our team. We may be able to structure payment protection using income protection insurance or alternative covers that suit self-employment situations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Sole Traders</h4>
                <p className="text-sm text-slate-700">
                  May access income protection for illness/injury, but not true redundancy cover. Business interruption insurance might be alternative.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Business Owners</h4>
                <p className="text-sm text-slate-700">
                  Consider key person insurance and income protection for personal loans while managing business through downturn.
                </p>
              </div>
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
              href="/types/home-loan"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-purple-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Home Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Mortgage protection for homeowners up to $500,000 coverage.</p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/gap-insurance"
              className="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-rose-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GAP Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Vehicle shortfall cover if your car is written off.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Protect Yourself Against Job Loss Today</h2>
          <p className="text-lg sm:text-xl text-sky-100 mb-8">
            Get comprehensive redundancy cover starting from just $8-12 per week. No broker fees, quick approval, and coverage starts immediately.
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
