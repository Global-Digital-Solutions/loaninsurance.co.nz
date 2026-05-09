import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Users, Briefcase, Car } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function CarFinancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Car Finance Insurance',
            description: 'Comprehensive insurance protection for car finance loans and vehicle loans in New Zealand',
            url: 'https://loaninsurance.co.nz/types/car-finance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Car Finance Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Car Finance Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Protect your vehicle finance loan against unexpected events. Our comprehensive car finance insurance covers your payments if you lose your job, become ill, or face other difficulties.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Whether you're financing a brand new car worth $60,000 or a reliable vehicle for $20,000, car finance insurance ensures your vehicle isn't repossessed if something happens to you. Combine it with GAP insurance for complete vehicle loan protection.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Car Finance Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Protect your vehicle and your credit - keep your car and avoid repossession if income is disrupted</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Works seamlessly with dealerships - most car finance providers recognize and support our insurance</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Combine with GAP insurance - get complete protection for new car purchases and financed vehicles</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers redundancy, illness, and death - comprehensive protection for all life scenarios</span>
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

      {/* Vehicle Loan Protection Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Vehicle Loan Protection Features</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Payment Protection */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Payment Protection</h3>
              <p className="text-slate-700 text-sm">
                Monthly car finance payments are covered if you lose your job, become ill, or face redundancy. Coverage continues until you return to work.
              </p>
            </div>

            {/* Vehicle Retention */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Keep Your Vehicle</h3>
              <p className="text-slate-700 text-sm">
                If you can't make payments, insurance covers them so your car doesn't get repossessed. Your transport and livelihood remain secure.
              </p>
            </div>

            {/* Death & Terminal Illness */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                If you pass away, the outstanding car finance balance is paid in full. Your family inherits the vehicle with no debt attached.
              </p>
            </div>

            {/* Flexible Coverage */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Flexible Coverage</h3>
              <p className="text-slate-700 text-sm">
                Choose individual covers (redundancy, illness, death) or combine them. Customize your protection based on your situation and finance term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAP Insurance Explanation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What is GAP Insurance and Why You Need It</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-lg text-slate-700 mb-6">
                GAP insurance (Guaranteed Asset Protection) covers the financial gap between your car's insurance payout and the outstanding finance amount if your vehicle is written off.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-World Example:</h3>

              <div className="bg-white rounded-lg p-6 border-l-4 border-teal-600">
                <p className="text-slate-700 mb-4">
                  <strong>You purchase a car for $45,000 with finance over 5 years.</strong>
                </p>
                <p className="text-slate-700 mb-4">
                  After 2 years, it's worth $30,000 but you still owe $32,000.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Your car is written off in an accident.</strong>
                </p>
                <p className="text-slate-700 mb-4">
                  Your car insurance pays $30,000 (current value), but you still owe $2,000 on the finance.
                </p>
                <p className="text-slate-700 font-semibold text-rose-600">
                  <strong>GAP insurance covers that $2,000 shortfall.</strong>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg p-6 sm:p-8 border border-sky-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Benefits of GAP Insurance:</h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Financial Protection:</strong> Eliminates the gap between insurance payout and loan balance
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Peace of Mind:</strong> No surprise debt after your car is written off
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Essential for New Cars:</strong> Especially important in first 3 years when depreciation is fastest
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Affordable Premium:</strong> Usually costs $200-400 for 5-year protection on a $45,000 vehicle
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    <strong>Covers Write-offs Only:</strong> Applies when vehicle is deemed uneconomical to repair
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens If Car Is Written Off */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What Happens If Your Car Is Written Off?</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-6 sm:p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Report to Your Insurance Company</h3>
                  <p className="text-slate-700">
                    Immediately notify your car insurer of the accident or damage. They'll assess the vehicle and determine if it's a write-off or repairable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-6 sm:p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Car Insurance Pays Out</h3>
                  <p className="text-slate-700">
                    Your car insurance pays the current market value of the vehicle (typically 20-30% less than purchase price for newer cars).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-6 sm:p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Finance Company Still Demands Full Amount</h3>
                  <p className="text-slate-700">
                    Your car finance lender (bank or dealer) still expects you to pay the full outstanding loan balance, regardless of insurance payout.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border-2 border-teal-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">GAP Insurance Covers the Shortfall</h3>
                  <p className="text-slate-700">
                    <strong>GAP insurance pays the gap between the insurance payout and the outstanding loan balance, protecting you from debt.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works With Car Dealers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How Car Finance Insurance Works With Dealers</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Cooperation</h3>
                  <p className="text-slate-700">
                    Most dealerships and finance companies recognize our insurance and actively support it. We work with your lender to ensure smooth claims processing.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Seamless Payouts</h3>
                  <p className="text-slate-700">
                    When you claim, we pay directly to your finance company or lender, ensuring your loan is kept current and protecting your credit rating.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Dealer Commissions</h3>
                  <p className="text-slate-700">
                    We sell directly to consumers with no dealer markups. You save money by getting insurance straight from the provider, not through dealership extras.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Dealership & Finance Company Support</h3>

              <p className="text-slate-700 mb-6">
                Many car finance providers now recommend payment protection insurance to their customers. Our insurance works within the finance agreement structure.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Common Finance Companies We Work With:</p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• ASB Finance</li>
                    <li>• BNZ Finance</li>
                    <li>• Westpac Finance</li>
                    <li>• ANZ Finance</li>
                    <li>• Dealer finance arms</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-6 pt-6 border-t border-blue-200">
                If your finance provider isn't listed, contact us - we likely support them or can arrange coverage.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Protect Your Car Finance Today</h2>
          <p className="text-lg sm:text-xl text-sky-100 mb-8">
            Get comprehensive car finance and GAP insurance in one quote. No broker fees, quick approval, and coverage starts immediately.
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
