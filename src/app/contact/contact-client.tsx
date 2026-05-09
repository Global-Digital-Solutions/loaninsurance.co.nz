'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import {
  CheckCircle2,
  Phone,
  Shield,
  Lock,
  Zap,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';

export function ContactPageClient() {
  const whyChooseUs = [
    { icon: Shield, text: 'ICNZ Registered Broker Network' },
    { icon: CheckCircle2, text: 'No Hidden Broker Fees' },
    { icon: Lock, text: '256-bit SSL Secure' },
    { icon: Zap, text: '24-Hour Quote Response' },
    { icon: BarChart3, text: 'Compare Multiple Insurers' },
    { icon: Settings, text: 'Tailored Coverage Options' },
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Complete the Form',
      description:
        'Tell us about your loan and coverage needs. Takes just 2 minutes.',
    },
    {
      number: '2',
      title: 'We Compare Options',
      description:
        'We search our network of NZ insurers to find your best rates.',
    },
    {
      number: '3',
      title: 'Get Protected',
      description:
        'Receive your personalized quote and activate coverage within 24 hours.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section
        className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Get a Quote</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get Your Free Loan Insurance Quote
              </h1>

              <p className="text-lg text-slate-200 mb-10 leading-relaxed">
                Complete our simple online form and get a personalized quote
                from New Zealand's leading loan insurance providers. No
                obligations, no broker fees.
              </p>

              {/* Phone Contact */}
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Prefer to talk?
                    </p>
                    <a
                      href="tel:+64988595449"
                      className="text-2xl font-bold text-white hover:text-teal-300 transition-colors"
                    >
                      09 885 9549
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-teal-500/30">
                <QuoteForm mode="full" />
              </div>
            </div>
          </div>

          {/* USP Badges - Large, overlaid on hero */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm leading-tight">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>

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

      {/* Dark Stats & Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stats */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                NZ Insurance Industry
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    $3.9B
                  </div>
                  <p className="text-slate-300">NZ Life Insurance Market</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    31+
                  </div>
                  <p className="text-slate-300">Life Insurers in NZ</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    $3.8B
                  </div>
                  <p className="text-slate-300">Claims Paid Annually</p>
                </div>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Questions? We're Here to Help
              </h3>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">
                      Call us
                    </p>
                    <p className="text-2xl font-bold">09 885 9549</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Available Monday - Friday, 9am - 5pm NZST
                </p>
              </div>

              <a
                href="#top"
                className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Complete a Quote Form
                <span>↑</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
