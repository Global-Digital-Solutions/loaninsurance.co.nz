'use client';

import Link from 'next/link';
import { CheckCircle2, Phone, Clock, Mail } from 'lucide-react';

export default function ThankYouPage() {
  const nextSteps = [
    {
      number: '1',
      title: 'We Review Your Request',
      description: 'Our team carefully reviews your application to understand your needs.',
      icon: Mail,
    },
    {
      number: '2',
      title: 'We Get Quotes',
      description: 'We source quotes from 10+ leading NZ insurance providers for you.',
      icon: Clock,
    },
    {
      number: '3',
      title: 'You Choose & Save',
      description: 'Compare options and choose the best coverage for your situation.',
      icon: CheckCircle2,
    },
  ];

  return (
    <main>
      {/* Success Section */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 flex items-center bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Success Checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We've received your request and our team is getting to work finding you
            the best loan protection insurance quotes.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              What happens next?
            </h2>

            <div className="space-y-6 text-left">
              {nextSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-700">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-700 font-semibold mb-2">
                Typical response time: 24 hours or less
              </p>
              <p className="text-sm text-slate-600">
                We usually email you multiple quote options within one business
                day. Check your email and spam folder to be sure.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-sky-600 to-teal-500 text-white p-8 rounded-lg mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Need to Reach Us?</h3>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-6 h-6" />
                  <span className="font-semibold">Call us</span>
                </div>
                <a
                  href="tel:098859549"
                  className="text-sky-100 hover:text-white transition-colors text-lg font-bold"
                >
                  09 885 9549
                </a>
                <p className="text-sky-100 text-sm mt-2">
                  Monday - Friday, 9am - 5pm NZST
                </p>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6" />
                  <span className="font-semibold">Email us</span>
                </div>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-sky-100 hover:text-white transition-colors font-bold break-all"
                >
                  hello@cover4you.co.nz
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 border-2 border-sky-600 hover:border-sky-700"
            >
              Back to Home
            </Link>
            <Link
              href="/faqs"
              className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read Our FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-4 font-semibold uppercase tracking-wide">
            Why you can trust us
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-teal-600 font-bold text-lg mb-1">ICNZ Registered Brokers</p>
              <p className="text-sm text-slate-600">Our broker network is ICNZ registered</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-teal-600 font-bold text-lg mb-1">No Broker Fees</p>
              <p className="text-sm text-slate-600">Service is completely free</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-teal-600 font-bold text-lg mb-1">24hr Support</p>
              <p className="text-sm text-slate-600">Fast response to all inquiries</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
