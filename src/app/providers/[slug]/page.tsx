import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { providers } from '@/data/providers';
import {
  CheckCircle2,
  ExternalLink,
  Star,
  Shield,
  Clock,
  Award,
  ChevronRight,
} from 'lucide-react';
import TrustBanner from '@/components/TrustBanner';

export async function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) return {};
  return {
    title: `${provider.name} Loan Insurance Review NZ | LoanInsurance.co.nz`,
    description: `${provider.description} Compare ${provider.name} loan protection coverage, waiting periods, benefit limits and key features. See if it's right for your situation.`,
    alternates: {
      canonical: `https://www.loaninsurance.co.nz/providers/${provider.slug}/`,
    },
    openGraph: {
      title: `${provider.name} Loan Insurance — NZ Review`,
      description: provider.description,
      url: `https://www.loaninsurance.co.nz/providers/${provider.slug}/`,
      type: 'website',
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
                ? 'text-amber-400 fill-amber-200'
                : 'text-slate-300'
          }`}
        />
      ))}
      <span className="text-lg font-bold text-slate-700 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) notFound();

  const categoryLabel =
    provider.category === 'life-insurer'
      ? 'Life Insurer'
      : provider.category === 'vehicle-finance'
        ? 'Vehicle Finance'
        : 'General Insurance';

  const otherProviders = providers.filter((p) => p.slug !== provider.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: {
              '@type': 'Organization',
              name: provider.name,
              url: provider.website,
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: provider.rating,
              bestRating: 5,
            },
            author: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://www.loaninsurance.co.nz',
            },
            description: provider.description,
          }),
        }}
      />

      <main>
        {/* Hero */}
        <section
          className="relative lg:min-h-[60vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-24"
          style={{
            backgroundImage: 'url(/images/hero-finance-charts.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/75 to-slate-900/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/compare" className="hover:text-teal-400 transition-colors">Compare</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{provider.name}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold bg-teal-500/20 border border-teal-500/40 text-teal-300 px-3 py-1 rounded-full">
                  {categoryLabel}
                </span>
                {provider.nzOwned && (
                  <span className="text-xs font-semibold bg-sky-500/20 border border-sky-500/40 text-sky-300 px-3 py-1 rounded-full">
                    NZ Owned
                  </span>
                )}
                <span className="text-xs font-medium text-slate-400">
                  Est. {provider.established}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {provider.name} Loan Insurance
              </h1>

              <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                {provider.description}
              </p>

              <div className="mb-8">
                <StarRating rating={provider.rating} />
                <p className="text-sm text-slate-400 mt-1">
                  Financial Strength: <span className="text-slate-300 font-medium">{provider.financialStrength}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Visit {provider.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-teal-400 text-white hover:text-teal-300 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Compare All Providers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="bg-slate-800 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Max Benefit</p>
              <p className="text-sm font-bold text-white leading-tight">{provider.maxBenefit}</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Waiting Periods</p>
              <p className="text-sm font-bold text-white leading-tight">{provider.waitingPeriods}</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Benefit Periods</p>
              <p className="text-sm font-bold text-white leading-tight">{provider.benefitPeriods}</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Best For</p>
              <p className="text-sm font-bold text-teal-300 leading-tight">{provider.bestFor}</p>
            </div>
          </div>
        </section>

        {/* Coverage Types + Key Features */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Cover Types */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Cover Types</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {provider.coverTypes.map((type) => (
                    <span
                      key={type}
                      className="text-sm font-medium bg-sky-50 text-sky-800 px-4 py-2 rounded-full border border-sky-200 hover:bg-sky-100 transition-colors"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
                </div>
                <ul className="space-y-3">
                  {provider.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Is It Right For You */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-teal-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-600 to-teal-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Is {provider.name} Right For You?</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Best suited for:</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">{provider.bestFor}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl border border-teal-200 p-6 shadow-sm">
              <p className="text-slate-700 mb-4">
                Ready to explore {provider.name}&apos;s options? Visit their website to see current
                products, get a quote, or speak with one of their advisers. We recommend
                comparing at least two or three providers before making a decision.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Visit {provider.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 border-2 border-teal-500 hover:bg-teal-50 text-teal-700 font-bold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Compare All {providers.length} Providers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Providers */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Also Worth Comparing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProviders.map((p) => (
                <Link
                  key={p.slug}
                  href={`/providers/${p.slug}/`}
                  className="group bg-slate-50 hover:bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{p.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{p.description}</p>
                  <p className="text-sm font-semibold text-teal-600 mt-3 group-hover:text-teal-700">
                    View review →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TrustBanner variant="light" />

        {/* CTA Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure {provider.name} Is Right for You?
            </h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
              Compare all {providers.length} NZ loan insurance providers side-by-side and find the right
              fit for your loan, budget, and circumstances.
            </p>
            <Link
              href="/compare"
              className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Compare All Providers
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
