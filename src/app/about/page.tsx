import type { Metadata } from 'next';
import { AboutPageClient } from './about-client';

export const metadata: Metadata = {
  title: 'About LoanInsurance.co.nz | Our Mission & Values',
  description:
    "LoanInsurance.co.nz connects New Zealand borrowers with authorised financial advisers for loan protection insurance. Our mission is to make quality advice accessible to every borrower.",
  keywords: ['about us', 'loan insurance nz', 'insurance comparison'],
  alternates: { canonical: 'https://www.loaninsurance.co.nz/about/' },
  openGraph: {
    title: 'About LoanInsurance.co.nz',
    description: 'Connecting New Zealand borrowers with authorised financial advisers for loan protection insurance — income protection, redundancy cover, mortgage protection and more.',
    url: 'https://www.loaninsurance.co.nz/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About LoanInsurance.co.nz',
            url: 'https://www.loaninsurance.co.nz/about',
            publisher: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://www.loaninsurance.co.nz',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@cover4you.co.nz',
                contactType: 'Customer Service',
              },
            },
          }),
        }}
      />
      <AboutPageClient />
    </>
  );
}
