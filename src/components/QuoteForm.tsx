'use client';

import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { providers } from '@/data/providers';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
                ? 'text-amber-400 fill-amber-200'
                : 'text-slate-300'
          }`}
        />
      ))}
      <span className="text-xs font-semibold text-slate-600 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

const topProviders = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 3);

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  if (mode === 'compact') {
    return (
      <div className="sticky top-24 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-4">
          <h3 className="text-white font-bold text-base">Top-Rated NZ Providers</h3>
          <p className="text-sky-100 text-xs mt-0.5">Compare & get a quote directly</p>
        </div>

        <div className="divide-y divide-slate-100">
          {topProviders.map((provider, idx) => (
            <div key={provider.slug} className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {idx === 0 && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                      #1
                    </span>
                  )}
                  <span className="text-sm font-bold text-slate-900">{provider.name}</span>
                  {provider.nzOwned && (
                    <span className="text-xs font-medium bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded-full border border-teal-200">
                      NZ
                    </span>
                  )}
                </div>
              </div>
              <StarRating rating={provider.rating} />
              <p className="text-xs text-slate-600 mt-2 mb-3 leading-relaxed line-clamp-2">
                {provider.bestFor}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {provider.coverTypes.slice(0, 2).map((type) => (
                  <span
                    key={type}
                    className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full border border-sky-100"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <a
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all duration-200"
              >
                Get Quote at {provider.name.split(' ')[0]}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
            <span>All providers are licensed NZ insurers</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            We may receive a referral fee. This does not affect our ratings.
          </p>
        </div>
      </div>
    );
  }

  // Full mode — all providers in a grid
  const sortedProviders = [...providers].sort((a, b) => b.rating - a.rating);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Compare NZ Loan Insurance Providers
        </h2>
        <p className="text-slate-600">
          Get a quote directly from each provider — no broker fees, no middleman.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedProviders.map((provider, idx) => (
          <div
            key={provider.slug}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-500 hover:shadow-md transition-all duration-200 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {idx === 0 && (
                    <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                      Top Rated
                    </span>
                  )}
                  {provider.nzOwned && (
                    <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
                      NZ Owned
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900">{provider.name}</h3>
                <StarRating rating={provider.rating} />
              </div>
              <span className="text-xs text-slate-500 flex-shrink-0">Est. {provider.established}</span>
            </div>

            <p className="text-sm text-slate-600 mb-3 flex-1">{provider.description}</p>

            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                Covers
              </p>
              <div className="flex flex-wrap gap-1">
                {provider.coverTypes.slice(0, 3).map((type) => (
                  <span
                    key={type}
                    className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full border border-sky-100"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500 font-medium mb-0.5">Best For</p>
              <p className="text-xs font-semibold text-slate-800">{provider.bestFor}</p>
            </div>

            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-200 mt-auto"
            >
              Get Quote at {provider.name}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        We may receive a referral fee from providers. Ratings reflect editorial assessment only.
        All providers are licensed to operate in New Zealand.
      </p>
    </div>
  );
}
