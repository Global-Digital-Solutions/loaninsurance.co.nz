import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LoanInsurance.co.nz | Loan Protection Insurance",
  description:
    "Protect your loan repayments with affordable loan protection insurance. Personal loans, car finance, mortgages, and more. Free quotes within 24 hours.",
  keywords: [
    "loan insurance",
    "loan protection insurance",
    "payment protection insurance",
    "personal loan insurance",
    "car finance insurance",
    "mortgage insurance",
    "GAP insurance",
    "redundancy cover",
  ],
  authors: [{ name: "LoanInsurance.co.nz" }],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://loaninsurance.co.nz",
    title: "LoanInsurance.co.nz | Loan Protection Insurance",
    description:
      "Protect your loan repayments with affordable loan protection insurance. Personal loans, car finance, mortgages, and more.",
    siteName: "LoanInsurance.co.nz",
  },
    icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },,
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://loaninsurance.co.nz/#organization",
      name: "LoanInsurance.co.nz",
      url: "https://loaninsurance.co.nz",
      logo: "https://loaninsurance.co.nz/favicon.ico",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6498859549",
        contactType: "customer service",
        areaServed: "NZ",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://loaninsurance.co.nz/#website",
      url: "https://loaninsurance.co.nz",
      name: "LoanInsurance.co.nz",
      description: "Loan protection insurance comparison and broker referral service",
      publisher: { "@id": "https://loaninsurance.co.nz/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://loaninsurance.co.nz/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
