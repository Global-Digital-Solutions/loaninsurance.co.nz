import Link from 'next/link';

export default function TermsPage() {
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
            <span className="text-slate-200 font-medium">Terms & Conditions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-300">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using LoanInsurance.co.nz, you accept and agree to be bound by and abide by the terms and conditions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) from LoanInsurance.co.nz for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the Site</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on LoanInsurance.co.nz are provided on an 'as is' basis. LoanInsurance.co.nz makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall LoanInsurance.co.nz or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LoanInsurance.co.nz, even if LoanInsurance.co.nz or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on LoanInsurance.co.nz could include technical, typographical, or photographic errors. LoanInsurance.co.nz does not warrant that any of the materials on the Site are accurate, complete, or current. LoanInsurance.co.nz may make changes to the materials contained on the Site at any time without notice.
          </p>

          <h2>6. Links</h2>
          <p>
            LoanInsurance.co.nz has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by LoanInsurance.co.nz of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>7. Modifications</h2>
          <p>
            LoanInsurance.co.nz may revise these terms of service for the Site at any time without notice. By using the Site, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of New Zealand, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>9. Insurance Brokerage Services</h2>
          <p>
            LoanInsurance.co.nz connects you with registered insurance brokers and advisers in New Zealand. When you request a quote through our Site, you authorize us to share your personal information with our broker network and insurance companies to obtain quotes on your behalf. These quotes are provided by licensed insurance companies through our ICNZ-registered broker partners and are subject to their own terms and conditions.
          </p>

          <h2>10. Quotes and Offers</h2>
          <p>
            All quotes provided through LoanInsurance.co.nz are estimates and are subject to the applicant's completion and approval of the final application. Insurance companies reserve the right to modify, decline, or impose additional conditions on any quote based on underwriting requirements.
          </p>

          <h2>11. No Guarantee</h2>
          <p>
            While we endeavor to provide accurate information and obtain the best quotes, LoanInsurance.co.nz does not guarantee specific rates, coverage, or approval for any insurance product. Coverage availability and terms depend on each insurance company's underwriting criteria.
          </p>

          <h2>12. User Obligations</h2>
          <p>
            When using our Site, you agree to:
          </p>
          <ul>
            <li>Provide accurate, complete, and truthful information</li>
            <li>Not impersonate any person or entity or misrepresent your affiliation</li>
            <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p>
            <strong>LoanInsurance.co.nz</strong><br />
            Phone: 09 885 9549<br />
            Email: hello@cover4you.co.nz<br />
            Website: https://loaninsurance.co.nz
          </p>
        </div>
      </section>
    </main>
  );
}
