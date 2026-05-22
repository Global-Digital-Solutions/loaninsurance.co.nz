import type { Metadata } from 'next';
import { ComparePageClient } from './compare-client';

export const metadata: Metadata = {
  title: 'Compare Loan Insurance Providers | LoanInsurance.co.nz',
  description:
    'Compare loan insurance policies from leading NZ providers. See coverage, waiting periods, benefit limits, and key features to find the right cover for your situation.',
  keywords: ['compare loan insurance', 'loan insurance comparison', 'best loan protection'],
  alternates: { canonical: 'https://loaninsurance.co.nz/compare' },
  openGraph: {
    title: 'Compare Loan Insurance Providers',
    description: 'Compare coverage and pricing from 8 leading NZ loan insurance providers side-by-side.',
    url: 'https://loaninsurance.co.nz/compare',
    type: 'website',
  },
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Loan Insurance Provider Comparison',
            description: 'Side-by-side comparison of loan protection insurance providers in New Zealand',
            url: 'https://loaninsurance.co.nz/compare',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://loaninsurance.co.nz' },
                { '@type': 'ListItem', position: 2, name: 'Compare Providers', item: 'https://loaninsurance.co.nz/compare' },
              ],
            },
          }),
        }}
      />
      <ComparePageClient />
    </>
  );
}
