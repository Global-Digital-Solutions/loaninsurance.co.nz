import type { Metadata } from 'next';
import { ContactPageClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Get Your Loan Insurance Quote | LoanInsurance.co.nz',
  description:
    "Get a loan protection insurance quote in just 2 minutes. Complete our simple form and an authorised financial adviser will respond within 24 hours.",
  keywords: ['loan insurance quote', 'income protection quote', 'insurance comparison'],
  alternates: { canonical: 'https://loaninsurance.co.nz/contact' },
  openGraph: {
    title: 'Get Your Loan Insurance Quote',
    description: 'Complete our simple 2-minute form and an authorised financial adviser will be in touch within 24 hours.',
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
            name: 'Get Your Loan Insurance Quote',
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
