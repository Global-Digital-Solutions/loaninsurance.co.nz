import type { Metadata } from 'next';
import Link from 'next/link';
import { guidePages } from '@/data/landing-pages';
import { BookOpen, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Insurance Guides | Expert Borrower Resources 2026',
  description: 'In-depth guides on loan insurance for borrowers. Covering first home buyers, self-employed, redundancy cover, ACC gaps, income protection comparisons, and more.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/guides/' },
  openGraph: {
    title: 'Loan Insurance Guides | Expert Borrower Resources 2026',
    description: 'Expert guides helping NZ borrowers understand loan protection insurance — income protection, redundancy cover, ACC gaps, mortgage protection and more.',
    url: 'https://www.loaninsurance.co.nz/guides',
    type: 'website',
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Loan Insurance Guides',
            description: 'Expert guides for New Zealand borrowers on loan protection insurance',
            url: 'https://www.loaninsurance.co.nz/guides',
            publisher: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://www.loaninsurance.co.nz',
            },
          }),
        }}
      />
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-blue-700/60 border border-blue-500/40 rounded-full px-4 py-1.5 text-blue-100 text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" />
            Borrower Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loan Insurance Guides for NZ Borrowers
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert guides to help you understand your options, compare products, and make informed decisions about protecting your loan repayments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidePages.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {guide.title}
                      </h2>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 mt-0.5 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1 mb-3">
                      By {guide.author.name} &middot; {guide.author.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {guide.intro.substring(0, 160)}…
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {guide.keyPoints.slice(0, 2).map((kp, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-700 rounded-full px-3 py-1">
                          {kp.length > 50 ? kp.substring(0, 50) + '…' : kp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Ready to get covered?</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
