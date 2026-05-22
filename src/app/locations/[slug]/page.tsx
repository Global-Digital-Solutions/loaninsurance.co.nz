import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locationPages } from '@/data/landing-pages';
import QuoteForm from '@/components/QuoteForm';
import { MapPin, Shield, AlertCircle, ChevronRight, TrendingUp } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locationPages.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationPages.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://loaninsurance.co.nz/locations/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://loaninsurance.co.nz/locations/${loc.slug}`,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locationPages.find((l) => l.slug === slug);
  if (!loc) notFound();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://loaninsurance.co.nz/locations/${loc.slug}`,
      publisher: {
        '@type': 'Organization',
        name: 'LoanInsurance.co.nz',
        url: 'https://loaninsurance.co.nz',
      },
      datePublished: loc.datePublished,
      dateModified: loc.dateModified,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loaninsurance.co.nz' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://loaninsurance.co.nz/locations' },
        { '@type': 'ListItem', position: 3, name: loc.city, item: `https://loaninsurance.co.nz/locations/${loc.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  const otherLocations = locationPages.filter((l) => l.slug !== slug).slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 text-white"
        style={{
          backgroundImage: `url(${(loc as unknown as { heroImage: string }).heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/locations" className="hover:text-teal-400 transition-colors">Locations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{loc.city}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 text-teal-300 text-sm font-medium mb-5">
            <MapPin className="w-4 h-4" />
            {loc.city}, {loc.region}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-3xl">
            {loc.heroHeading}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">{loc.heroSubheading}</p>
        </div>
      </section>

      {/* Local stats bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {loc.localStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intro */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700 leading-relaxed">{loc.intro}</p>
                </div>
              </div>

              {/* Sections */}
              {loc.sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <div className="space-y-3">
                    {section.body.split('\n\n').map((para, j) => {
                      const lines = para.split('\n').filter(Boolean);
                      return (
                        <div key={j} className="space-y-2">
                          {lines.map((line, k) => {
                            const boldMatch = line.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
                            if (boldMatch) {
                              return (
                                <p key={k} className="text-gray-700 leading-relaxed">
                                  <strong className="text-gray-900">{boldMatch[1]}:</strong>{' '}
                                  {boldMatch[2]}
                                </p>
                              );
                            }
                            return (
                              <p key={k} className="text-gray-700 leading-relaxed">
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions — {loc.city}
                </h2>
                <div className="space-y-6">
                  {loc.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Get Advice for {loc.city} Borrowers
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Connect with an adviser who understands the {loc.region} market.
                </p>
                <QuoteForm mode="compact" />
              </div>

              {/* Other locations */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Locations</h3>
                <div className="space-y-2">
                  {otherLocations.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm">
                        {l.city}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  <Shield className="w-5 h-5 inline text-blue-600 mr-2" />
                  Insurance Types
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Personal Loan Insurance', href: '/types/personal-loan' },
                    { label: 'Home Loan Insurance', href: '/types/home-loan' },
                    { label: 'Income Protection', href: '/types/income-protection' },
                    { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
                    { label: 'Car Finance Cover', href: '/types/car-finance' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-700">{link.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <p className="text-xs text-gray-500 leading-relaxed">
                  This page provides general information for {loc.city} borrowers. It does not
                  constitute financial advice. loaninsurance.co.nz connects you with authorised
                  financial advisers regulated under the Financial Markets Conduct Act. We are not a
                  regulated financial advice provider. Contact:{' '}
                  <a href="mailto:hello@cover4you.co.nz" className="text-blue-600 hover:underline">
                    hello@cover4you.co.nz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
