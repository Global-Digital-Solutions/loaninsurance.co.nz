import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LoanInsurance.co.nz',
  description:
    'Terms and conditions for using LoanInsurance.co.nz. Read our conditions of use, limitations of liability, and your obligations as a visitor.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/terms/' },
};

const sections = [
  { id: 'agreement', label: 'Agreement to Terms' },
  { id: 'service', label: 'Nature of Service' },
  { id: 'use', label: 'Permitted Use' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'accuracy', label: 'Accuracy of Content' },
  { id: 'links', label: 'External Links' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'obligations', label: 'User Obligations' },
  { id: 'brokerage', label: 'Referral Services' },
  { id: 'quotes', label: 'Quotes & Offers' },
  { id: 'governing', label: 'Governing Law' },
  { id: 'modifications', label: 'Modifications' },
  { id: 'contact', label: 'Contact Information' },
];

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Terms &amp; Conditions</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">Terms &amp; Conditions</h1>
              <p className="text-slate-400 text-sm">Last updated: May 2026</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl leading-relaxed">
            Please read these terms carefully before using LoanInsurance.co.nz. By accessing or using this website, you agree to be bound by these terms and conditions.
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
                    Questions? Email{' '}
                    <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700 font-medium">
                      hello@cover4you.co.nz
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-10 max-w-3xl">

              <div id="agreement" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">1. Agreement to Terms</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>By accessing and using LoanInsurance.co.nz (&ldquo;the Site&rdquo;), you accept and agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree to these terms, please do not use this website.</p>
                  <p>These terms apply to all visitors, users, and others who access or use the Site. Cover4You reserves the right to update these terms at any time. Your continued use of the Site after any changes constitutes acceptance of the revised terms.</p>
                </div>
              </div>

              <div id="service" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">2. Nature of Service</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>LoanInsurance.co.nz is a comparison and referral website operated by Cover4You. We provide general information about loan protection insurance products in New Zealand and connect visitors with licensed insurance advisers.</p>
                  <p>We are not an insurer, insurance broker, or financial adviser. We do not provide regulated financial advice. The licensed advisers we connect you with operate independently and are responsible for the advice and products they recommend.</p>
                </div>
              </div>

              <div id="use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">3. Permitted Use</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>You may use this Site for personal, non-commercial purposes only. You may not:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Copy, modify, or distribute any content from this Site without our written permission</li>
                    <li>Use the Site for any commercial purpose without our express consent</li>
                    <li>Attempt to decompile, reverse engineer, or extract source code from any software on the Site</li>
                    <li>Use automated tools to scrape, harvest, or collect data from the Site</li>
                    <li>Transmit any harmful, offensive, or illegal content through the Site</li>
                    <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
                  </ul>
                </div>
              </div>

              <div id="ip" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">4. Intellectual Property</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>All content on this Site — including text, graphics, logos, images, and software — is the property of Cover4You or its content suppliers and is protected by New Zealand and international intellectual property laws.</p>
                  <p>You are granted a limited, non-exclusive, non-transferable licence to access and view the content for personal use only. This does not include the right to download, copy, reproduce, or redistribute content without prior written consent.</p>
                </div>
              </div>

              <div id="accuracy" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">5. Accuracy of Content</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>While we make reasonable efforts to ensure the accuracy of information on this Site, we do not warrant that all content is complete, accurate, or current. Provider information, premiums, and product details may change without notice.</p>
                  <p>The information on this Site is provided on an &ldquo;as is&rdquo; basis. We recommend visiting providers directly for the most current product information, terms, and pricing before making any decision.</p>
                </div>
              </div>

              <div id="links" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">6. External Links</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>This Site may contain links to third-party websites, including insurance providers. These links are provided for your convenience. LoanInsurance.co.nz has not reviewed all third-party sites and is not responsible for their content, privacy practices, or terms of use.</p>
                  <p>Links to third-party sites do not constitute endorsement or recommendation by LoanInsurance.co.nz. Some outbound links may be affiliate links, disclosed as required.</p>
                </div>
              </div>

              <div id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">7. Limitation of Liability</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>To the maximum extent permitted by law, Cover4You and its operators, employees, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Your use of or inability to use this Site</li>
                    <li>Reliance on any information provided on this Site</li>
                    <li>Any insurance product or service obtained through or referred by this Site</li>
                    <li>Any errors, omissions, or inaccuracies in the content</li>
                  </ul>
                  <p>Nothing in these terms excludes or limits liability that cannot be excluded or limited under the Consumer Guarantees Act 1993 or other applicable New Zealand law.</p>
                </div>
              </div>

              <div id="obligations" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">8. User Obligations</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>When using this Site, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Provide accurate, complete, and truthful information in any form or enquiry</li>
                    <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Not engage in any conduct that restricts or inhibits others&apos; use of the Site</li>
                    <li>Comply with all applicable New Zealand laws and regulations</li>
                  </ul>
                </div>
              </div>

              <div id="brokerage" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">9. Referral Services</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>When you submit an enquiry through this Site, you authorise us to share your contact details and enquiry information with licensed NZ insurance advisers in our network. These advisers will contact you directly to discuss your needs.</p>
                  <p>The advisers we refer to are independently licensed and regulated. Any advice, quotation, or product recommendation they provide is subject to their own terms and the relevant product provider&apos;s policy wording.</p>
                </div>
              </div>

              <div id="quotes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">10. Quotes &amp; Offers</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>Any indicative quotes or premium estimates presented on this Site are for guidance only and do not constitute a binding offer. Actual premiums and terms are determined by individual insurers based on their underwriting criteria and are subject to change.</p>
                  <p>LoanInsurance.co.nz does not guarantee that you will receive a quote, be approved for coverage, or receive any specific premium. Approval and pricing are at the sole discretion of the issuing insurer.</p>
                </div>
              </div>

              <div id="governing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">11. Governing Law</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of New Zealand. Any disputes arising from these terms or your use of this Site shall be subject to the exclusive jurisdiction of the courts of New Zealand.</p>
                </div>
              </div>

              <div id="modifications" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">12. Modifications</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>Cover4You reserves the right to modify or replace these terms at any time without prior notice. Changes will be effective immediately upon posting. We recommend reviewing these terms periodically.</p>
                  <p>Your continued use of the Site after any changes are posted constitutes your acceptance of the revised terms.</p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">13. Contact Information</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>If you have any questions about these Terms &amp; Conditions, please contact us:</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 mb-1">LoanInsurance.co.nz — operated by Cover4You</p>
                    <p>Email: <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700">hello@cover4you.co.nz</a></p>
                    <p>Website: <a href="https://www.loaninsurance.co.nz" className="text-teal-600 hover:text-teal-700">www.loaninsurance.co.nz</a></p>
                  </div>
                  <p className="text-sm text-slate-500">These terms were last updated in May 2026 and supersede all previous versions.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
