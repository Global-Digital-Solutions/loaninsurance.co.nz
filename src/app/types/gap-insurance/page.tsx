import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function GapInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'GAP Insurance',
            description: 'Guaranteed Asset Protection insurance covers the financial gap between your car insurance payout and outstanding vehicle loan balance in New Zealand',
            url: 'https://loaninsurance.co.nz/types/gap-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">GAP Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                GAP Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Guaranteed Asset Protection (GAP) insurance covers the financial gap between your car insurance payout and the outstanding amount you still owe on your vehicle loan.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                If your car is written off, your standard car insurance pays the current market value - but you might still owe more to your finance lender. GAP insurance closes that dangerous gap, protecting you from losing money and owing debt on a car you no longer have.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose GAP Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers the shortfall between insurance payout and outstanding loan - simple, affordable financial protection</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Essential for new cars - protects you during the first 3-5 years when depreciation is fastest</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>One-time premium payment - cover entire loan term from $200-400 depending on vehicle value</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Works with all cars and lenders - covers financed new and used vehicles from all sources</span>
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

      {/* What is GAP Insurance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Understanding GAP Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What Does GAP Stand For?</h3>
              <p className="text-slate-700 text-lg mb-6">
                <strong>GAP = Guaranteed Asset Protection</strong>
              </p>
              <p className="text-slate-700 mb-6">
                GAP insurance is a specialized insurance product designed specifically for financed vehicles. It protects you financially if your vehicle is written off (deemed uneconomical to repair) while you're still paying off the finance.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">The Core Problem GAP Solves:</h3>
              <div className="bg-rose-50 border-l-4 border-rose-600 rounded-lg p-6">
                <p className="text-slate-700">
                  When you finance a car, the vehicle depreciates faster than you pay down the loan. If your car is written off, your insurance company pays the current value, but your lender still demands the full outstanding loan balance. You end up owing money on a car you no longer own.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 sm:p-8 border border-teal-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How Depreciation Hits Your Wallet</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Year 1: -20% Depreciation</p>
                  <p className="text-sm text-slate-700">Car Value: $36,000 | Still Owe: $40,000 | GAP: $4,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Year 2: -30% Depreciation</p>
                  <p className="text-sm text-slate-700">Car Value: $30,000 | Still Owe: $35,000 | GAP: $5,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Year 3: -35% Depreciation</p>
                  <p className="text-sm text-slate-700">Car Value: $28,000 | Still Owe: $32,000 | GAP: $4,000</p>
                </div>
              </div>

              <p className="text-sm text-slate-700">
                <strong>GAP insurance covers these gaps during the highest-risk period when you owe more than the car is worth.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works With Examples */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How GAP Insurance Works - Real Examples</h2>

          <div className="space-y-8">
            {/* Example 1: With GAP Insurance */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-teal-300 shadow-lg">
              <h3 className="text-xl font-bold text-teal-600 mb-6">Scenario: Your Car is Written Off (WITH GAP Insurance)</h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-600 text-white text-sm font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Car purchased for $45,000</strong> with 5-year finance at 7% interest
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-600 text-white text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>After 2 years:</strong> Car worth $30,000 but you owe $32,000 to the bank
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white text-sm font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Car accident - written off:</strong> Your car insurance pays $30,000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-teal-600 text-white text-sm font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Gap insurance covers $2,000:</strong> You walk away debt-free, the bank gets paid
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-teal-900">
                  <strong>Result:</strong> You made a bad situation manageable. No surprise debt, no credit impact, fresh start available to purchase another vehicle.
                </p>
              </div>
            </div>

            {/* Example 2: Without GAP Insurance */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-rose-300 shadow-lg">
              <h3 className="text-xl font-bold text-rose-600 mb-6">Scenario: Your Car is Written Off (WITHOUT GAP Insurance)</h3>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white text-sm font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Car purchased for $45,000</strong> with 5-year finance at 7% interest
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>After 2 years:</strong> Car worth $30,000 but you owe $32,000 to the bank
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white text-sm font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Car accident - written off:</strong> Your car insurance pays $30,000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-rose-600 text-white text-sm font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700">
                      <strong>Bank demands $2,000:</strong> You still owe $2,000 on a car you no longer own
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                <p className="text-sm text-rose-900">
                  <strong>Result:</strong> Unexpected $2,000 debt, credit score damage, ongoing monthly payments for a vehicle you can't use. Limited options to purchase replacement car with damaged credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs GAP Insurance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Needs GAP Insurance?</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">New Car Buyers</h3>
                  <p className="text-slate-700">
                    Brand new cars depreciate rapidly - by 20% in year one. If you're buying new and financing, GAP insurance is almost essential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Long Finance Terms (5-7 years)</h3>
                  <p className="text-slate-700">
                    The longer your loan, the greater the chance of being "upside down" (owing more than the car is worth). GAP bridges this gap.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">High-Mileage Drivers</h3>
                  <p className="text-slate-700">
                    High mileage accelerates depreciation. If you drive 20,000+ km annually, GAP coverage protects against faster-than-average value loss.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Minimal Down Payment</h3>
                  <p className="text-slate-700">
                    If you put down less than 20%, you're starting with an upside-down position. GAP insurance becomes even more valuable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sm:p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cost Factors for GAP Insurance</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Vehicle Value</p>
                  <p className="text-sm text-slate-700">$20,000 car: ~$150-200 | $45,000 car: ~$250-350 | $80,000 car: ~$400-500+</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Finance Term</p>
                  <p className="text-sm text-slate-700">3-year term: Lower premium | 5-year term: Higher premium | 7+ year term: Highest premium</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Down Payment</p>
                  <p className="text-sm text-slate-700">20% down: Lower risk | 10% down: Standard premium | 0% down: Higher premium</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-900 mb-2">Cost vs Benefit:</p>
                <p className="text-xs text-yellow-800">
                  Pay $250 once and protect yourself against potential $3,000-5,000 loss? That's smart financial protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">GAP Insurance Doesn't Cover Everything</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 sm:p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What GAP Insurance DOES Cover</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>The gap between insurance payout and outstanding loan balance</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Write-off situations where vehicle is deemed uneconomical to repair</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Total loss claims from accidents, theft, or natural disasters</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Coverage for the full term of your vehicle finance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6 sm:p-8 border border-rose-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What GAP Insurance DOESN'T Cover</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">×</span>
                  <span>Repairable damage or partial loss claims</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">×</span>
                  <span>Mechanical breakdown or wear and tear</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">×</span>
                  <span>Claims before you own the car (financing in progress)</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                  <span className="text-rose-600 font-bold">×</span>
                  <span>Vehicle value decreases from market conditions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-sky-50 to-teal-50 rounded-lg p-6 sm:p-8 border-2 border-sky-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Important Note:</h3>
            <p className="text-slate-700">
              <strong>GAP insurance only triggers when your car is written off.</strong> If your car is repairable, even with major damage, your car insurance company decides the amount to pay for repairs (or total loss), and GAP insurance only covers the gap if they decide it's a write-off.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Don't Risk Owing Thousands on a Written-Off Car</h2>
          <p className="text-lg sm:text-xl text-sky-100 mb-8">
            Get comprehensive GAP insurance from just $200-400 for the full finance term. One simple payment provides complete peace of mind.
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
