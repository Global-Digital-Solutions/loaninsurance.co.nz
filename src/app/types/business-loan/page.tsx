import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Building2, TrendingUp, Lock, Users } from 'lucide-react';
import BusinessLoanForm from './business-loan-form';

export const metadata: Metadata = {
  title: 'Business Loan Insurance NZ | Protect Your Business Borrowing',
  description:
    'Protect your business loan repayments with specialist business loan insurance. Cover for commercial mortgages, business lines of credit, equipment finance and more. Get a tailored quote from NZ licensed brokers.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/types/business-loan/' },
  openGraph: {
    title: 'Business Loan Insurance NZ | Protect Your Business Borrowing',
    description: 'Specialist business loan protection for NZ businesses. Get a tailored quote.',
    url: 'https://www.loaninsurance.co.nz/types/business-loan/',
    type: 'website',
  },
};

const coveragePoints = [
  {
    icon: Shield,
    title: 'Business Interruption Cover',
    description: 'Loan repayments continue if your business is forced to pause due to illness, injury or unforeseen events.',
  },
  {
    icon: Building2,
    title: 'Commercial Mortgage Protection',
    description: 'Covers commercial property loan repayments so your premises stay in business hands even during hardship.',
  },
  {
    icon: TrendingUp,
    title: 'Equipment Finance Cover',
    description: 'Protects machinery, vehicle, and equipment loan repayments — keeping operations running.',
  },
  {
    icon: Lock,
    title: 'Key Person / Life Cover',
    description: 'If a key person in the business passes away or becomes critically ill, the policy pays down business debt.',
  },
  {
    icon: Users,
    title: 'Redundancy & Restructure Cover',
    description: 'If the business must restructure and the owner loses income, cover bridges the loan repayment gap.',
  },
  {
    icon: CheckCircle2,
    title: 'Lines of Credit Protection',
    description: 'Revolving business credit facilities and overdrafts can also be protected under specialist policies.',
  },
];

const faqs = [
  {
    q: 'What types of business loans can be covered?',
    a: 'Most commercial loans are eligible — business mortgages, equipment finance, vehicle fleets, overdrafts, revolving credit facilities and term loans. Our brokers will assess your specific borrowing structure.',
  },
  {
    q: 'Is business loan insurance tax deductible in NZ?',
    a: 'In many cases, yes. Premiums on business loan protection insurance may be deductible as a business expense. We recommend speaking with your accountant — our brokers can provide documentation to support your tax position.',
  },
  {
    q: 'How quickly can cover be arranged?',
    a: 'Once we receive your enquiry, our brokers typically respond within one business day. Cover can often be bound within 48–72 hours for straightforward cases.',
  },
  {
    q: 'Do I need to provide financials?',
    a: 'For most business loan policies, insurers will want to understand the loan size and structure. Our brokers will guide you through exactly what is required — we keep it as simple as possible.',
  },
  {
    q: 'Can sole traders apply?',
    a: 'Yes. Sole traders, partnerships, trusts, and companies are all eligible. The right structure of cover will depend on how your business is set up.',
  },
];

export default function BusinessLoanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Loan Insurance NZ',
            description: 'Specialist business loan protection insurance for NZ businesses. Covers commercial mortgages, equipment finance, key person risk and more.',
            provider: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://www.loaninsurance.co.nz',
            },
            areaServed: 'NZ',
            serviceType: 'Business Loan Insurance',
          }),
        }}
      />
      <main>
        {/* Hero */}
        <section
          className="relative lg:min-h-[85vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/types/personal-loan" className="hover:text-teal-400 transition-colors">Insurance Types</Link>
              <span>/</span>
              <span className="text-white font-medium">Business Loan</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left — Content */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/40 text-teal-300 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Business Loan Insurance
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Protect Your Business Loan Repayments
                </h1>

                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  Business loan insurance keeps your repayments on track if illness, injury or unforeseen circumstances affect your ability to service commercial debt. Get a tailored quote from our network of licensed NZ brokers.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Commercial mortgages & overdrafts',
                    'Equipment & vehicle finance',
                    'Key person & life cover linked to debt',
                    'Sole traders, partnerships & companies',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Trust badge */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <p className="text-sm text-slate-300">
                    <span className="text-white font-semibold">Licensed NZ Brokers</span> — your enquiry goes directly to qualified advisers who specialise in business lending protection.
                  </p>
                </div>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">
                <BusinessLoanForm />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                What Business Loan Insurance Covers
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Business lending comes in many forms. Our brokers match you with policies that fit your specific borrowing structure and risk profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coveragePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 bg-white"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why business loan insurance matters */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-teal-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-center">
              Why NZ Businesses Need Loan Protection
            </h2>
            <div className="prose prose-slate prose-lg max-w-none">
              <p>
                New Zealand businesses carry significant debt — from commercial mortgages and equipment leases to operating overdrafts and revolving credit. When the unexpected happens — whether a serious illness, the death of a key person, or a forced business interruption — those loan repayments don't pause.
              </p>
              <p>
                Business loan insurance is designed to bridge that gap. Rather than drawing down savings, selling assets or defaulting on obligations, the policy covers repayments while you focus on recovery or restructuring.
              </p>
              <p>
                For sole traders and small businesses especially, the business owner's personal health is directly linked to the business's ability to service debt. A specialist business loan policy recognises this reality and provides cover tailored to how NZ businesses actually operate.
              </p>
              <p>
                Our licensed broker network works with all major NZ insurers — including Partners Life, AIA, Fidelity Life and Asteron Life — to source cover that fits both your loan structure and your budget.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Business Lending?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Fill in the form above or browse our personal loan insurance providers for consumer cover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote-form"
                className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get a Business Quote ↑
              </a>
              <Link
                href="/compare"
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Browse Personal Providers
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
