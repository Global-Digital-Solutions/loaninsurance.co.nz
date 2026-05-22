import type { Metadata } from 'next';
import { ContactPageClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Get Your Free Loan Insurance Quote | LoanInsurance.co.nz',
  description:
    'Get a free loan protection insurance quote in just 2 minutes. Complete our simple form and we\'ll respond within 24 hours.',
  keywords: ['free quote', 'loan insurance quote', 'insurance comparison'],
  openGraph: {
    title: 'Get Your Free Loan Insurance Quote',
    description: 'Complete our simple 2-minute form to get your free quote.',
    url: 'https://loaninsurance.co.nz/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Get Your Free Loan Insurance Quote',
            url: 'https://loaninsurance.co.nz/contact',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@cover4you.co.nz',
              contactType: 'Customer Service',
              areaServed: 'NZ',
              availableLanguage: ['en'],
            },
          }),
        }}
      />
      <ContactPageClient />
    </>
  );
}
