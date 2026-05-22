import type { Metadata } from 'next';
import { AboutPageClient } from './about-client';

export const metadata: Metadata = {
  title: 'About LoanInsurance.co.nz | Our Mission & Values',
  description:
    'Learn about LoanInsurance.co.nz - New Zealand\'s trusted loan protection insurance comparison service. Our mission, values, and commitment to your financial security.',
  keywords: ['about us', 'loan insurance nz', 'insurance comparison'],
  openGraph: {
    title: 'About LoanInsurance.co.nz',
    description: 'Dedicated to protecting New Zealand families.',
    url: 'https://loaninsurance.co.nz/about',
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
            '@type': 'Organization',
            name: 'LoanInsurance.co.nz',
            url: 'https://loaninsurance.co.nz',
            logo: 'https://loaninsurance.co.nz/logo.png',
            description:
              'Leading loan protection insurance comparison service in New Zealand',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NZ',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@cover4you.co.nz',
              contactType: 'Customer Service',
            },
          }),
        }}
      />
      <AboutPageClient />
    </>
  );
}
