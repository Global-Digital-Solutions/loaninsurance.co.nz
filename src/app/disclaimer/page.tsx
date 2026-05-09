import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | LoanInsurance.co.nz',
  description:
    'Important disclaimer about LoanInsurance.co.nz services, the role of our broker network, and the nature of information provided on this website.',
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Disclaimer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-slate-300">Important information about our services</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h2>About LoanInsurance.co.nz</h2>
          <p>
            LoanInsurance.co.nz is a lead generation and comparison service. We are not an insurance company, insurance broker, or financial adviser. Our role is to connect consumers with ICNZ-registered insurance brokers and advisers who can provide personalised insurance quotes and advice tailored to individual circumstances.
          </p>

          <h2>Not Financial Advice</h2>
          <p>
            The information provided on this website is general in nature and does not constitute financial advice, insurance advice, or a recommendation to purchase any particular insurance product. The content is provided for informational and educational purposes only.
          </p>
          <p>
            You should always seek independent financial advice from a qualified financial adviser before making any insurance or financial decisions. Your individual circumstances, needs, and objectives should be carefully considered.
          </p>

          <h2>Insurance Products</h2>
          <p>
            All insurance products referenced on this website are issued by licensed insurance companies through our network of ICNZ-registered brokers and advisers. LoanInsurance.co.nz does not issue, underwrite, or guarantee any insurance policy.
          </p>
          <p>
            Insurance product availability, terms, conditions, premiums, and coverage limits are determined by individual insurers and may change without notice. The information presented on this website may not reflect the most current terms and conditions.
          </p>

          <h2>Broker Network</h2>
          <p>
            Our broker network consists of insurance brokers and advisers who are registered with the Insurance Council of New Zealand (ICNZ) and/or hold appropriate licences under New Zealand financial services legislation. LoanInsurance.co.nz is not itself an ICNZ member or registered broker.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we make every effort to ensure the accuracy and currency of information on this website, we do not warrant or guarantee that the information is complete, accurate, or up to date. Industry statistics, provider details, and market data are sourced from publicly available information and may change.
          </p>

          <h2>Provider Comparisons</h2>
          <p>
            Provider comparison information is based on publicly available data and may not include all providers operating in the New Zealand market. Ratings and assessments are editorial in nature and should not be relied upon as the sole basis for choosing an insurance provider.
          </p>

          <h2>No Guarantee</h2>
          <p>
            LoanInsurance.co.nz does not guarantee that you will receive a quote, be approved for coverage, or receive any particular premium rate. Insurance approval and pricing are at the sole discretion of the issuing insurer.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, LoanInsurance.co.nz and its operators shall not be liable for any loss, damage, or expense arising from your use of this website, reliance on information provided, or any insurance product obtained through our service.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this disclaimer, please contact us at{' '}
            <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700">hello@cover4you.co.nz</a>{' '}
            or call{' '}
            <a href="tel:+64988595449" className="text-teal-600 hover:text-teal-700">09 885 9549</a>.
          </p>

          <p className="text-sm text-slate-500 mt-12">Last updated: April 2026</p>
        </div>
      </section>
    </main>
  );
}
