import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guidePages } from '@/data/landing-pages';
import QuoteForm from '@/components/QuoteForm';
import { BookOpen, CheckCircle2, AlertCircle, ChevronRight, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePages.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://loaninsurance.co.nz/guides/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://loaninsurance.co.nz/guides/${guide.slug}`,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guidePages.find((g) => g.slug === slug);
  if (!guide) notFound();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.metaDescription,
      image: (guide as unknown as { heroImage: string }).heroImage,
      url: `https://loaninsurance.co.nz/guides/${guide.slug}`,
      mainEntityOfPage: `https://loaninsurance.co.nz/guides/${guide.slug}`,
      author: {
        '@type': 'Person',
        name: guide.author.name,
        jobTitle: guide.author.title,
      },
      publisher: {
        '@type': 'Organization',
        name: 'LoanInsurance.co.nz',
        url: 'https://loaninsurance.co.nz',
      },
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loaninsurance.co.nz' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://loaninsurance.co.nz/guides' },
        { '@type': 'ListItem', position: 3, name: guide.title, item: `https://loaninsurance.co.nz/guides/${guide.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  const otherGuides = guidePages.filter((g) => g.slug !== slug);

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
          backgroundImage: `url(${(guide as unknown as { heroImage: string }).heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides" className="hover:text-teal-400 transition-colors">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-xs font-medium">{guide.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 text-teal-300 text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" />
            Borrower Guide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-3xl">
            {guide.heroHeading}
          </h1>
          <p className="text-slate-300 text-sm mt-4">
            By {guide.author.name}, {guide.author.title} &middot;{' '}
            {new Date(guide.dateModified).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long' })}
          </p>
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
                <p className="text-lg text-gray-700 leading-relaxed">{guide.intro}</p>
              </div>

              {/* Key points summary */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Key Takeaways</h2>
                <ul className="space-y-3">
                  {guide.keyPoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              {guide.sections.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.body.split('\n\n').map((para, j) => {
                      const lines = para.split('\n').filter(Boolean);
                      if (lines.some((l) => l.startsWith('**'))) {
                        return (
                          <div key={j} className="space-y-3">
                            {lines.map((line, k) => {
                              const boldMatch = line.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
                              if (boldMatch) {
                                return (
                                  <div key={k} className="border-l-4 border-blue-200 pl-4">
                                    <p className="text-gray-700 leading-relaxed">
                                      <strong className="text-gray-900">{boldMatch[1]}:</strong>{' '}
                                      {boldMatch[2]}
                                    </p>
                                  </div>
                                );
                              }
                              if (line.startsWith('-')) {
                                return (
                                  <p key={k} className="flex gap-2 text-gray-700">
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
                        const [intro, ...items] = lines;
                        return (
                          <div key={j} className="space-y-2">
                            {intro && !intro.startsWith('-') && (
                              <p className="text-gray-700 leading-relaxed">{intro}</p>
                            )}
                            {items.map((line, k) =>
                              line.startsWith('-') ? (
                                <p key={k} className="flex gap-2 text-gray-700">
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
                        <p key={j} className="text-gray-700 leading-relaxed">
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* FAQs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {guide.faqs.map((faq, i) => (
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

              {/* Author */}
              <p className="text-sm text-gray-500 px-1">
                Written by <strong>{guide.author.name}</strong>, {guide.author.title}.
                Published {new Date(guide.datePublished).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}.
                Last updated {new Date(guide.dateModified).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Get Expert Advice</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Connect with an authorised NZ financial adviser.
                </p>
                <QuoteForm mode="compact" />
              </div>

              {/* Other guides */}
              {otherGuides.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">More Guides</h3>
                  <div className="space-y-2">
                    {otherGuides.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}`}
                        className="flex items-center gap-2 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-700 group-hover:text-blue-700 text-sm font-medium leading-snug">
                          {g.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick links */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Compare Providers', href: '/providers' },
                    { label: 'FAQs', href: '/faqs' },
                    { label: 'Income Protection', href: '/types/income-protection' },
                    { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
                    { label: 'Home Loan Insurance', href: '/types/home-loan' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <p className="text-xs text-gray-500 leading-relaxed">
                  This guide is for informational purposes and does not constitute financial advice.
                  loaninsurance.co.nz connects you with authorised financial advisers regulated
                  under the Financial Markets Conduct Act. We are not a regulated financial advice
                  provider. Contact:{' '}
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
