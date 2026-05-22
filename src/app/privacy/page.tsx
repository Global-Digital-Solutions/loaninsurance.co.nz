import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | LoanInsurance.co.nz',
  description:
    'Read the LoanInsurance.co.nz privacy policy. Understand how we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: 'https://www.loaninsurance.co.nz/privacy/' },
};

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'collection', label: 'Information We Collect' },
  { id: 'use', label: 'How We Use Your Information' },
  { id: 'disclosure', label: 'Disclosure of Information' },
  { id: 'security', label: 'Security' },
  { id: 'cookies', label: 'Cookies & Analytics' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'privacy-act', label: 'Privacy Act 2020' },
  { id: 'updates', label: 'Policy Updates' },
  { id: 'contact', label: 'Contact Us' },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Privacy Policy</span>
          </nav>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-slate-400 text-sm">Last updated: May 2026</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl leading-relaxed">
            LoanInsurance.co.nz is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights under the Privacy Act 2020.
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
                    Privacy questions? Email{' '}
                    <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700 font-medium">
                      hello@cover4you.co.nz
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-10 max-w-3xl">

              <div id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Introduction</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>Cover4You (trading as LoanInsurance.co.nz, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of people who use our website. This Privacy Policy explains how we collect, use, store, and protect your personal information in accordance with the Privacy Act 2020 of New Zealand.</p>
                  <p>By using LoanInsurance.co.nz, you consent to the collection and use of your information as described in this policy. If you do not agree to this policy, please do not use this website.</p>
                </div>
              </div>

              <div id="collection" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Information We Collect</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We collect information in the following ways:</p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Information You Provide</h3>
                      <p className="text-sm">When you submit an enquiry form, we collect your name, email address, phone number, and details about your loan or insurance needs. This information is provided voluntarily.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Technical Data</h3>
                      <p className="text-sm">Our servers automatically collect certain information when you visit, including your IP address, browser type, operating system, referring URLs, and pages viewed. This is used to maintain and improve the website.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Cookies & Analytics</h3>
                      <p className="text-sm">We use cookies and analytics tools to understand how visitors use our website. See the Cookies section below for more detail.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">How We Use Your Information</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>To connect you with licensed NZ insurance advisers who can assist with your enquiry</li>
                    <li>To respond to your enquiries and provide information about our services</li>
                    <li>To improve the content, functionality, and user experience of this website</li>
                    <li>To monitor and analyse usage trends and behaviour on the website</li>
                    <li>To comply with our legal obligations</li>
                  </ul>
                  <p>We do not use your personal information for automated decision-making or profiling that has legal or significant effects on you.</p>
                </div>
              </div>

              <div id="disclosure" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Disclosure of Information</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong>Licensed Insurance Advisers:</strong> When you submit a quote request, your details are shared with one or more licensed NZ insurance advisers in our network who will contact you directly.</li>
                    <li><strong>Service Providers:</strong> We use third-party service providers (e.g. email delivery, analytics) who process data on our behalf. These providers are contractually required to protect your information.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information where required by law, court order, or to protect the rights, property, or safety of our business or others.</li>
                  </ul>
                  <p>We do not sell your personal information to third parties for marketing purposes.</p>
                </div>
              </div>

              <div id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Security</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We implement administrative, technical, and physical safeguards to protect your personal information from unauthorised access, disclosure, alteration, or destruction. All data submitted through our forms is encrypted using 256-bit SSL/TLS technology.</p>
                  <p>While we take reasonable steps to protect your information, no method of internet transmission is completely secure. We cannot guarantee absolute security of data transmitted to or from our website.</p>
                </div>
              </div>

              <div id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Cookies &amp; Analytics</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We use cookies — small text files stored on your device — to improve your experience on this website. Cookies help us understand how visitors use the site, remember your preferences, and serve relevant content.</p>
                  <p>We may use analytics tools such as Google Analytics to track aggregated, anonymised usage data. These tools may set their own cookies. You can opt out of Google Analytics tracking via Google&apos;s opt-out browser add-on.</p>
                  <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of this website.</p>
                </div>
              </div>

              <div id="rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Your Rights</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>Under the Privacy Act 2020, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>Request access to personal information we hold about you</li>
                    <li>Request correction of inaccurate personal information</li>
                    <li>Withdraw consent to the use of your information (where consent is the basis for processing)</li>
                    <li>Lodge a complaint with the Office of the Privacy Commissioner if you believe we have breached your privacy rights</li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700 underline">hello@cover4you.co.nz</a>. We will respond within 20 working days.</p>
                </div>
              </div>

              <div id="privacy-act" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Privacy Act 2020 Compliance</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>This Privacy Policy is designed to comply with New Zealand&apos;s Privacy Act 2020 and the Information Privacy Principles (IPPs) contained therein. We collect personal information only for lawful purposes, take reasonable steps to ensure accuracy, and retain information only for as long as necessary.</p>
                  <p>If you believe we have breached your privacy rights, you may contact the Office of the Privacy Commissioner at <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">privacy.org.nz</a>.</p>
                </div>
              </div>

              <div id="updates" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Policy Updates</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we update this policy, we will revise the &ldquo;Last updated&rdquo; date at the top of this page.</p>
                  <p>We encourage you to review this policy periodically. Your continued use of this website after any change constitutes your acceptance of the updated policy.</p>
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">Contact Us</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>If you have questions or concerns about this Privacy Policy or how we handle your information, please contact us:</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="font-semibold text-slate-900 mb-1">LoanInsurance.co.nz — operated by Cover4You</p>
                    <p>Email: <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700">hello@cover4you.co.nz</a></p>
                    <p>Website: <a href="https://www.loaninsurance.co.nz" className="text-teal-600 hover:text-teal-700">www.loaninsurance.co.nz</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
