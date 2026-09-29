import type { Metadata } from 'next';
import { CoveragePageClient } from './coverage-client';

export const metadata: Metadata = {
  title: 'Loan Insurance Coverage Options | LoanInsurance.co.nz',
  description:
    'Explore comprehensive loan protection insurance coverage options. Death cover, terminal illness, disability, redundancy, and more in New Zealand.',
  keywords: ['insurance coverage', 'loan protection', 'coverage options'],
  alternates: { canonical: 'https://www.loaninsurance.co.nz/coverage/' },
  openGraph: {
    title: 'Loan Insurance Coverage Options',
    description: 'Comprehensive coverage for every loan situation.',
    url: 'https://www.loaninsurance.co.nz/coverage/',
    type: 'website',
  },
};

export default function CoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Loan Insurance Coverage Options',
            url: 'https://www.loaninsurance.co.nz/coverage',
            description: 'Explore comprehensive loan protection insurance coverage.',
          }),
        }}
      />
      <CoveragePageClient />
    </>
  );
}
