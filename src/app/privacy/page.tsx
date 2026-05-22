import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | LoanInsurance.co.nz',
  description: 'Read the LoanInsurance.co.nz privacy policy. Understand how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Privacy Policy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            LoanInsurance.co.nz ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and favorite sports team, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
          </p>

          <h3>Quote Information</h3>
          <p>
            When you request a loan insurance quote, we collect information about your loan type, loan amount, employment status, and financial situation necessary to provide personalized quotes.
          </p>

          <h3>Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your internet service provider, and your pages you viewed.
          </p>

          <h2>3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Generate a personal profile about you so that future visits to the Site will be personalized as possible</li>
            <li>Increase the efficiency and operation of the Site</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
            <li>Notify you of updates to the Site</li>
            <li>Offer new products, services, and/or recommendations to you</li>
            <li>Fulfill and manage insurance quotes and related requests</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>
            We may share your information with third parties in the following situations:
          </p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with parties who assist us in operating our website and conducting our business</li>
            <li><strong>Insurance Providers:</strong> We share your information with insurance companies to provide you with quotes and coverage</li>
            <li><strong>Marketing Communications:</strong> With your consent, we may share information for marketing purposes</li>
          </ul>

          <h2>5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, perfect security cannot be guaranteed. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>LoanInsurance.co.nz</strong><br />
            Phone: 09 885 9549<br />
            Email: hello@cover4you.co.nz<br />
            Website: https://loaninsurance.co.nz
          </p>

          <h2>7. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on the Site.
          </p>

          <h2>8. New Zealand Privacy Act Compliance</h2>
          <p>
            This Privacy Policy is designed to comply with the Privacy Act 2020 of New Zealand. You have certain rights regarding your personal information, including the right to access, correct, and request deletion of your information, subject to certain exceptions.
          </p>
        </div>
      </section>
    </main>
  );
}
