import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insuranceTypes } from '@/data/insurance-types';
import QuoteForm from '@/components/QuoteForm';
import { Shield, CheckCircle2, AlertCircle, ArrowRight, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insuranceTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const type = insuranceTypes.find((t) => t.slug === slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    alternates: { canonical: `https://loaninsurance.co.nz/types/${type.slug}` },
    openGraph: {
      title: type.metaTitle,
      description: type.metaDescription,
      url: `https://loaninsurance.co.nz/types/${type.slug}`,
      type: 'website',
    },
  };
}

export default async function InsuranceTypePage({ params }: Props) {
  const { slug } = await params;
  const type = insuranceTypes.find((t) => t.slug === slug);
  if (!type) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: type.title,
    description: type.metaDescription,
    author: {
      '@type': 'Person',
      name: type.author.name,
      jobTitle: type.author.title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Loan Insurance NZ',
      url: 'https://loaninsurance.co.nz',
    },
    datePublished: type.datePublished,
    dateModified: type.dateModified,
    mainEntityOfPage: `https://loaninsurance.co.nz/types/${type.slug}`,
  };

  const otherTypes = insuranceTypes.filter((t) => t.slug !== slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/types/personal-loan" className="hover:text-white transition-colors">Insurance Types</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{type.title}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/60 border border-blue-500/40 rounded-full px-4 py-1.5 text-blue-100 text-sm font-medium mb-5">
              <Shield className="w-4 h-4" />
              {type.category.charAt(0).toUpperCase() + type.category.slice(1)} Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">{type.title}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">{type.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {type.sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <div className="prose prose-gray max-w-none">
                    {section.body.split('\n\n').map((para, j) => {
                      if (para.startsWith('**') && para.includes('**:')) {
                        const parts = para.split('\n').filter(Boolean);
                        return (
                          <div key={j} className="space-y-3 mt-4">
                            {parts.map((line, k) => {
                              const boldMatch = line.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
                              if (boldMatch) {
                                return (
                                  <div key={k}>
                                    <p className="text-gray-700 leading-relaxed">
                                      <strong className="text-gray-900">{boldMatch[1]}:</strong>{' '}
                                      {boldMatch[2]}
                                    </p>
                                  </div>
                                );
                              }
                              if (line.startsWith('-')) {
                                return (
                                  <p key={k} className="text-gray-700 leading-relaxed flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    {line.replace(/^-\s*/, '')}
                                  </p>
                                );
                              }
                              return <p key={k} className="text-gray-700 leading-relaxed">{line}</p>;
                            })}
                          </div>
                        );
                      }
                      if (para.includes('\n-')) {
                        const lines = para.split('\n').filter(Boolean);
                        return (
                          <div key={j} className="space-y-2 mt-3">
                            {lines.map((line, k) =>
                              line.startsWith('-') ? (
                                <p key={k} className="text-gray-700 leading-relaxed flex gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  {line.replace(/^-\s*/, '')}
                                </p>
                              ) : (
                                <p key={k} className="text-gray-700 leading-relaxed">{line}</p>
                              )
                            )}
                          </div>
                        );
                      }
                      return (
                        <p key={j} className="text-gray-700 leading-relaxed mt-3">
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {type.faqs.map((faq, i) => (
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

              {/* Internal links */}
              {type.internalLinks.length > 0 && (
                <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {type.internalLinks.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author */}
              <p className="text-sm text-gray-500 px-1">
                Written by <strong>{type.author.name}</strong>, {type.author.title}.
                Published {new Date(type.datePublished).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}.
                Last updated {new Date(type.dateModified).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Get a Free Quote</h3>
                <p className="text-sm text-gray-500 mb-4">Speak to an adviser about {type.title.toLowerCase()}.</p>
                <QuoteForm mode="compact" />
              </div>

              {/* Other types */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Insurance Types</h3>
                <div className="space-y-2">
                  {otherTypes.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/types/${t.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm">
                        {t.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/"
                  className="mt-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View all types <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <p className="text-xs text-gray-500 leading-relaxed">
                  This information is general in nature and does not constitute financial advice.
                  loaninsurance.co.nz connects you with authorised financial advisers who are
                  regulated under the Financial Markets Conduct Act. We are not a regulated
                  financial advice provider. Contact:{' '}
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
