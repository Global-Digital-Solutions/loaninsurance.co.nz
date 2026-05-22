'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const insuranceTypes = [
  { label: 'Personal Loan', href: '/types/personal-loan' },
  { label: 'Car Finance', href: '/types/car-finance' },
  { label: 'Home Loan', href: '/types/home-loan' },
  { label: 'GAP Insurance', href: '/types/gap-insurance' },
  { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
  { label: 'Business Loan', href: '/types/business-loan' },
  { label: 'Mortgage Protection', href: '/types/mortgage-protection' },
  { label: 'Income Protection', href: '/types/income-protection' },
  { label: 'Payment Protection', href: '/types/payment-protection' },
  { label: 'Critical Illness Cover', href: '/types/critical-illness' },
  { label: 'Total Disability Cover', href: '/types/total-disability' },
  { label: 'Business Interruption', href: '/types/business-interruption' },
];

const locationLinks = [
  { label: 'Auckland', href: '/locations/auckland' },
  { label: 'Wellington', href: '/locations/wellington' },
  { label: 'Christchurch', href: '/locations/christchurch' },
  { label: 'Hamilton', href: '/locations/hamilton' },
  { label: 'Tauranga', href: '/locations/tauranga' },
  { label: 'Dunedin', href: '/locations/dunedin' },
  { label: 'View All', href: '/locations' },
];

const guideLinks = [
  { label: 'First Home Buyers Guide', href: '/guides/first-home-buyers-guide' },
  { label: 'Self-Employed Guide', href: '/guides/self-employed-loan-insurance' },
  { label: 'Redundancy Cover Explained', href: '/guides/redundancy-cover-explained' },
  { label: 'Income Protection vs Loan Insurance', href: '/guides/income-protection-vs-loan-insurance' },
  { label: 'ACC Gaps and Loan Insurance', href: '/guides/acc-gaps-and-loan-insurance' },
  { label: 'Compare Providers', href: '/guides/compare-loan-insurance-providers' },
];

const navLinks = [
  { label: 'Coverage', href: '/coverage' },
  { label: 'Compare', href: '/compare' },
  { label: 'Resources', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typesDropdownOpen, setTypesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Insurance Types Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
                  Insurance Types
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 z-50">
                  <div className="grid grid-cols-2 gap-0.5 px-2">
                    {insuranceTypes.map((type) => (
                      <Link key={type.href} href={type.href} className="block px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors text-sm font-medium">
                        {type.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
                  Locations
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 z-50">
                  {locationLinks.map((loc) => (
                    <Link key={loc.href} href={loc.href} className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
                      {loc.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Guides Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-teal-600 transition-colors flex items-center gap-1">
                  Guides
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 z-50">
                  {guideLinks.map((g) => (
                    <Link key={g.href} href={g.href} className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-700 font-medium hover:text-teal-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link href="/contact" className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-slate-200">
              <div className="pt-4 space-y-1">
                {/* Mobile Insurance Types */}
                <button
                  onClick={() => setTypesDropdownOpen(!typesDropdownOpen)}
                  className="w-full text-left px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  Insurance Types
                  <svg
                    className={`w-4 h-4 transition-transform ${typesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {typesDropdownOpen && (
                  <div className="pl-4 space-y-1 grid grid-cols-2 gap-0.5">
                    {insuranceTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-3 py-2 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {type.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Locations */}
                <button
                  onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                  className="w-full text-left px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  Locations
                  <svg className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {locationsDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {locationLinks.map((loc) => (
                      <Link key={loc.href} href={loc.href} className="block px-4 py-2 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Guides */}
                <button
                  onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
                  className="w-full text-left px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  Guides
                  <svg className={`w-4 h-4 transition-transform ${guidesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {guidesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {guideLinks.map((g) => (
                      <Link key={g.href} href={g.href} className="block px-4 py-2 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {g.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
