import type { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
  title: 'Loan Insurance NZ | Protect Your Repayments | LoanInsurance.co.nz',
  description: 'Compare and get loan protection insurance in New Zealand. Income protection, redundancy cover, mortgage protection and more. Free quotes from leading NZ insurers.',
  keywords: ['loan insurance', 'loan protection insurance', 'mortgage protection', 'income protection', 'redundancy cover', 'New Zealand'],
  alternates: { canonical: 'https://loaninsurance.co.nz' },
  openGraph: {
    title: 'Loan Insurance NZ | Protect Your Repayments',
    description: 'Compare loan protection insurance from leading NZ providers. Income protection, redundancy cover, mortgage protection — free quotes in minutes.',
    url: 'https://loaninsurance.co.nz',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
