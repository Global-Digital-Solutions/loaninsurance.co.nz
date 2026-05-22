import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | LoanInsurance.co.nz',
  description:
    'Important disclaimer about LoanInsurance.co.nz — we are a comparison and referral service, not a financial adviser or insurer. Read before using this site.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/disclaimer/' },
};

const sections = [
  { id: 'about', label: 'About This Site' },
  { id: 'not-advice', label: 'Not Financial Advice' },
  { id: 'fma', label: 'Regulated Advisers' },
  { id: 'products', label: 'Insurance Products' },
  { id: 'comparisons', label: 'Provider Comparisons' },
  { id: 'accuracy', label: 'Accuracy of Information' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'contact', label: 'Contact Us' },
];

export default function DisclaimerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Disclaimer</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">Disclaimer</h1>
              <p className="text-slate-400 text-sm">Last updated: May 2026</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl leading-relaxed">
            Please read this disclaimer carefully before using LoanInsurance.co.nz. It sets out the nature of our service, the limitations of the information we provide, and your rights and obligations as a visitor.
          </p>
        </div>
      </section>

      {/* Key Alert */}
      <section className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> LoanInsurance.co.nz is a comparison and referral website — not an insurance company, broker, or financial adviser. The licensed advisers we refer you to hold their own FMA licences and operate independently. Any insurance decision should be made in consultation with a qualified, FMA-licensed financial adviser.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <Shield className="w-5 h-5 text-teal-600 mb-2" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Questions about this disclaimer? Email us at{' '}
                    <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700 font-medium">
                      hello@cover4you.co.nz
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-10 max-w-3xl">

              <div id="about" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">About This Site</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>LoanInsurance.co.nz is operated by Cover4You, a comparison and referral service. We are not an insurance company, insurance broker, or financial adviser registered under the Financial Markets Conduct Act 2013 (FMCA).</p>
                  <p>Our role is to present general information about loan protection insurance products available in New Zealand, and to connect consumers and businesses with licensed insurance advisers who can provide personalised advice and quotations.</p>
                  <p>By using this website, you acknowledge and accept the terms of this disclaimer.</p>
                </div>
              </div>

              <div id="not-advice" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Not Financial Advice</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                  <p className="text-amber-800 text-sm font-semibold">The information on this website does not constitute financial advice, insurance advice, or a recommendation to purchase any specific product.</p>
                </div>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>All content is provided for general informational and educational purposes only. It has not been prepared with your specific financial situation, objectives, or needs in mind.</p>
                  <p>You should always consult a qualified, FMA-licensed financial adviser before making any insurance or financial decision. An adviser can assess your specific circumstances, explain the full terms of any policy, and recommend products appropriate to your situation.</p>
                  <p>Nothing on this website should be relied upon as a substitute for professional, personalised financial advice.</p>
                </div>
              </div>

              <div id="fma" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Regulated Advisers</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>The insurance advisers and brokers we refer enquiries to are individually licensed under the Financial Markets Conduct Act 2013 and/or registered with the Insurance Council of New Zealand (ICNZ). They operate independently and are responsible for the advice and quotations they provide.</p>
                  <p>LoanInsurance.co.nz is not itself regulated as a financial advice provider under the FMCA. We do not provide regulated financial advice. The advisers we connect you with hold their own licences and are subject to the duties and obligations of the FMCA in providing advice to you.</p>
                  <p>You can verify an adviser's licence on the Financial Service Providers Register at <a href="https://www.fsp.govt.nz" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">fsp.govt.nz</a>.</p>
                </div>
              </div>

              <div id="products" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Insurance Products</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>All insurance products referenced on this website are issued by licensed insurance companies. LoanInsurance.co.nz does not issue, underwrite, or guarantee any insurance policy.</p>
                  <p>Product availability, terms, conditions, premiums, and coverage limits are determined entirely by individual insurers and may change without notice. The information presented on this website may not reflect the most current product terms, exclusions, or pricing.</p>
                  <p>Cover4You does not guarantee that you will be approved for any insurance product, or that any product will be available at any particular price. All insurance is subject to the insurer's underwriting criteria and policy wording.</p>
                </div>
              </div>

              <div id="comparisons" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Provider Comparisons</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>Provider comparison information on this site is based on publicly available data and editorial research. It may not include all providers operating in the New Zealand market, and information may become outdated.</p>
                  <p>Ratings, scores, and assessments are editorial in nature. They reflect our assessment at the time of publishing and should not be relied upon as the sole or primary basis for choosing an insurance provider.</p>
                  <p>We recommend that you visit each provider's website directly to obtain current information, full policy terms, and up-to-date pricing before making any insurance decision.</p>
                </div>
              </div>

              <div id="accuracy" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Accuracy of Information</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>While we make every reasonable effort to ensure the accuracy and currency of information on this website, we do not warrant or guarantee that all content is complete, accurate, or up to date at any given time.</p>
                  <p>Industry statistics, market data, provider details, and regulatory information are sourced from publicly available information and may change. We update content periodically but cannot guarantee real-time accuracy.</p>
                  <p>If you identify any inaccurate information, please contact us at <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700 underline">hello@cover4you.co.nz</a>.</p>
                </div>
              </div>

              <div id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Limitation of Liability</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>To the maximum extent permitted by New Zealand law, Cover4You (trading as LoanInsurance.co.nz) and its operators, employees, and partners shall not be liable for any loss, damage, or expense of any kind arising from:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Your use of or reliance on information provided on this website</li>
                    <li>Any insurance product or service obtained through or referred by this website</li>
                    <li>Any act or omission of an insurance adviser referred through this service</li>
                    <li>Any inaccuracy, error, or omission in the content of this website</li>
                  </ul>
                  <p>Nothing in this disclaimer limits or excludes any liability that cannot be limited or excluded under applicable New Zealand law, including the Consumer Guarantees Act 1993.</p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Contact Us</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>If you have any questions about this disclaimer, or wish to raise a concern about information on this website, please contact us:</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 mb-1">LoanInsurance.co.nz — operated by Cover4You</p>
                    <p>Email: <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700">hello@cover4you.co.nz</a></p>
                    <p>Website: <a href="https://www.loaninsurance.co.nz" className="text-teal-600 hover:text-teal-700">www.loaninsurance.co.nz</a></p>
                  </div>
                  <p className="text-sm text-slate-500">This disclaimer was last updated in May 2026 and supersedes all previous versions.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
