import type { Metadata } from 'next';
import Link from 'next/link';
import { locationPages } from '@/data/landing-pages';
import { MapPin, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Insurance by Location | City Guides 2026',
  description: 'Find loan insurance information for your city. We cover Auckland, Wellington, Christchurch, Hamilton, Tauranga, Dunedin, Palmerston North, and Nelson.',
  alternates: { canonical: 'https://loaninsurance.co.nz/locations' },
  openGraph: {
    title: 'Loan Insurance by Location | City Guides 2026',
    description: "Local context matters. Find loan insurance information tailored to your city's property market, employment landscape, and economic conditions.",
    url: 'https://loaninsurance.co.nz/locations',
    type: 'website',
  },
};

export default function LocationsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Loan Insurance by Location',
            description: 'Loan insurance information tailored to NZ cities and regions',
            url: 'https://loaninsurance.co.nz/locations',
            publisher: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://loaninsurance.co.nz',
            },
          }),
        }}
      />
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-blue-700/60 border border-blue-500/40 rounded-full px-4 py-1.5 text-blue-100 text-sm font-medium mb-5">
            <MapPin className="w-4 h-4" />
            By Location
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loan Insurance Guides by City
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Local context matters. Find loan insurance information tailored to your city's property market, employment landscape, and economic conditions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationPages.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {loc.city}
                    </h2>
                    <p className="text-sm text-gray-500">{loc.region}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mt-1 transition-colors" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{loc.intro.substring(0, 150)}…</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {loc.localStats.slice(0, 2).map((stat, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 rounded-full px-3 py-1 font-medium">
                      {stat.label}: {stat.value}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Looking for general loan insurance information?</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
