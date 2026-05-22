import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  types: {
    title: 'Insurance Types',
    links: [
      { label: 'Personal Loan', href: '/types/personal-loan' },
      { label: 'Car Finance', href: '/types/car-finance' },
      { label: 'Home Loan', href: '/types/home-loan' },
      { label: 'GAP Insurance', href: '/types/gap-insurance' },
      { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
      { label: 'Business Loan', href: '/types/business-loan' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Coverage Guide', href: '/coverage' },
      { label: 'Compare Providers', href: '/compare' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Column */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-white font-semibold hover:text-teal-300 transition-colors break-all text-sm"
                >
                  hello@cover4you.co.nz
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.types.title}</h3>
            <ul className="space-y-2">
              {footerLinks.types.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.resources.title}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.legal.title}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Important Disclaimer</p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            LoanInsurance.co.nz is a comparison and referral website operated by Cover4You. We are <strong className="text-slate-400">not</strong> an insurance company, insurance broker, or financial adviser. We do not provide regulated financial advice under the Financial Markets Conduct Act 2013 (FMCA). The insurance advisers and brokers we refer enquiries to hold their own FMA licences and operate independently — they are responsible for the advice and products they recommend to you.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            All insurance products referenced on this website are issued by licensed New Zealand insurance companies. Provider information, ratings, and comparisons are editorial in nature, based on publicly available data, and may not reflect current terms, premiums, or availability. You should visit providers directly and seek advice from a qualified, FMA-licensed financial adviser before making any insurance decision.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Information on this website is general in nature and does not take into account your individual financial situation, objectives, or needs. Past performance and industry statistics referenced on this site do not guarantee future outcomes.{' '}
            <a href="/disclaimer" className="text-slate-400 hover:text-teal-400 underline transition-colors">Read our full disclaimer</a> ·{' '}
            <a href="/privacy" className="text-slate-400 hover:text-teal-400 underline transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} LoanInsurance.co.nz. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>Partnered with Licensed NZ Insurance Brokers</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/disclaimer" className="hover:text-teal-300 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
