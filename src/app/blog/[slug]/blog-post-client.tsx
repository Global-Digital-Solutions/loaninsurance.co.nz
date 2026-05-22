'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: number;
}

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

function renderContent(content: string): ReactNode[] {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    if (!trimmed) {
      elements.push(<div key={`empty-${idx}`} className="h-2" />);
      return;
    }

    // H1
    if (trimmed.startsWith('# ')) {
      const text = trimmed.slice(2);
      elements.push(
        <h1
          key={`h1-${idx}`}
          className="text-4xl font-bold text-slate-900 mt-8 mb-4"
        >
          {text}
        </h1>
      );
    }
    // H2
    else if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3);
      elements.push(
        <h2
          key={`h2-${idx}`}
          className="text-2xl font-bold text-slate-900 mt-6 mb-3"
        >
          {text}
        </h2>
      );
    }
    // H3
    else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4);
      elements.push(
        <h3
          key={`h3-${idx}`}
          className="text-xl font-bold text-slate-900 mt-4 mb-2"
        >
          {text}
        </h3>
      );
    }
    // Bullet points
    else if (trimmed.startsWith('- ')) {
      const text = trimmed.slice(2);
      elements.push(
        <li key={`li-${idx}`} className="text-slate-700">
          {text}
        </li>
      );
    }
    // Regular paragraphs (including bold-prefixed)
    else {
      elements.push(
        <p key={`p-${idx}`} className="text-slate-700 leading-relaxed">
          {trimmed}
        </p>
      );
    }
  });

  // Wrap consecutive list items in ul
  const wrapped: ReactNode[] = [];
  let currentList: ReactNode[] = [];

  elements.forEach((element, idx) => {
    if (element && typeof element === 'object' && 'key' in element && String(element.key).startsWith('li-')) {
      currentList.push(element);
    } else {
      if (currentList.length > 0) {
        wrapped.push(
          <ul key={`ul-${idx}`} className="list-disc list-inside space-y-2 mb-4">
            {currentList}
          </ul>
        );
        currentList = [];
      }
      wrapped.push(element);
    }
  });

  if (currentList.length > 0) {
    wrapped.push(
      <ul key={`ul-final`} className="list-disc list-inside space-y-2 mb-4">
        {currentList}
      </ul>
    );
  }

  return wrapped;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  return (
    <main>
      {/* Hero with Image */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden bg-slate-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </section>

      {/* Breadcrumb & Header */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{post.title}</span>
          </div>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <div>
              <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2 space-y-4 prose prose-lg max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <QuoteForm mode="compact" />
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 flex-1">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-100 mt-4">
                      <Clock className="w-4 h-4" />
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Loans?
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Get a quote today and see how affordable loan protection
            insurance can be for your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
