import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';
import { FAQsClient } from '@/components/FAQsClient';
import TrustBanner from '@/components/TrustBanner';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | LoanInsurance.co.nz',
  description:
    'Answers to common questions about loan protection insurance in New Zealand. Find information about coverage, costs, claims, and more.',
  keywords: ['FAQ', 'frequently asked questions', 'loan insurance'],
  openGraph: {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about loan insurance.',
    url: 'https://loaninsurance.co.nz/faqs',
    type: 'website',
  },
};

export default function FAQsPage() {
  const faqItems = faqs as FAQItem[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
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
        <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-200 font-medium">FAQs</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Find answers to common questions about loan protection
                insurance in New Zealand. If you don't see your question here,
                feel free to contact us.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <FAQsClient faqs={faqItems} />
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-teal-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Our team of loan insurance experts is here to help. Contact us for
              personalized advice and a free, no-obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="tel:098859549"
                className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 border border-sky-200 hover:border-sky-300"
              >
                Call Us: 09 885 9549
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <TrustBanner variant="gradient" />
      </main>
    </>
  );
}
