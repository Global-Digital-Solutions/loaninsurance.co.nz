import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, Clock } from 'lucide-react';
import TrustBanner from '@/components/TrustBanner';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: number;
  date: string;
}

export const metadata: Metadata = {
  title: 'Loan Insurance Blog | LoanInsurance.co.nz',
  description:
    'Read expert articles and guides about loan protection insurance in New Zealand. Tips, advice, and insights for borrowers.',
  keywords: ['blog', 'loan insurance', 'financial advice'],
  openGraph: {
    title: 'Loan Insurance Blog',
    description: 'Expert advice and guides for loan protection insurance in NZ.',
    url: 'https://loaninsurance.co.nz/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = blogPosts as BlogPost[];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'LoanInsurance.co.nz Blog',
            url: 'https://loaninsurance.co.nz/blog',
            description:
              'Expert articles and guides about loan protection insurance.',
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
              <Link href="/" className="hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-200 font-medium">Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Loan Insurance Blog
            </h1>
            <p className="text-xl text-slate-300">
              Expert advice, guides, and insights about loan protection insurance
              in New Zealand
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <TrustBanner variant="light" />

        {/* CTA Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Loans?
            </h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
              Get a free quote today and discover how affordable loan protection
              insurance can be for your situation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
