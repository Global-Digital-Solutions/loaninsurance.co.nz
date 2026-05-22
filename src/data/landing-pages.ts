export interface LocationPage {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  localStats: Array<{ label: string; value: string }>;
  faqs: Array<{ question: string; answer: string }>;
  datePublished: string;
  dateModified: string;
}

export interface GuidePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroHeading: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  keyPoints: string[];
  faqs: Array<{ question: string; answer: string }>;
  author: { name: string; title: string };
  datePublished: string;
  dateModified: string;
}

export const locationPages: LocationPage[] = [
  {
    slug: 'auckland',
    city: 'Auckland',
    region: 'Auckland',
    metaTitle: 'Loan Insurance Auckland | Protect Your Repayments 2026',
    metaDescription: 'Compare loan insurance options in Auckland. With housing costs at record highs and job market pressures, protect your mortgage and loan repayments. Get a free quote today.',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    heroHeading: 'Loan Insurance for Auckland Borrowers',
    heroSubheading: 'Protect your home loan, personal loan, and car finance repayments against job loss, illness, and redundancy.',
    intro: 'Auckland remains New Zealand\'s most expensive city to live in, with median house prices still well above $1 million in many suburbs. For Aucklanders carrying home loans, personal loans, or car finance, the financial stakes of losing income — even temporarily — are exceptionally high. Loan insurance exists to bridge that gap, ensuring your repayments stay current while you recover, find new work, or stabilise your finances.',
    sections: [
      {
        heading: 'Why Auckland Borrowers Face Higher Risk',
        body: 'Auckland\'s cost structure is uniquely pressured. Housing costs consume a disproportionate share of household income, leaving little buffer when income drops. Public sector restructuring has affected thousands of Auckland-based workers since 2024, with Health NZ alone shedding over 1,100 roles nationally, many in Auckland\'s hospital network. Private sector contractions in finance, retail, and construction have added to employment uncertainty.\n\nWith Auckland\'s unemployment tracking slightly above the national 5.5% rate and mortgage stress indicators rising, more borrowers are exploring loan protection products. The Reserve Bank\'s OCR at 2.25% has brought some mortgage rate relief, but monthly repayments on Auckland properties still represent the dominant household expense for most owner-occupiers.',
      },
      {
        heading: 'Types of Loan Insurance Available in Auckland',
        body: 'Auckland borrowers can access the full range of loan protection products, typically through a registered financial adviser or directly via an insurer. The main options include:\n\n**Mortgage Protection Insurance** covers your home loan repayments if you\'re made redundant, become seriously ill, or are injured and unable to work. Given Auckland mortgage sizes, policies covering $3,000–$6,000 per month in repayments are common.\n\n**Income Protection Insurance** pays a percentage of your salary (typically 75%) for an extended period — up to age 65 in some policies — making it the most comprehensive option for high earners with large loan obligations.\n\n**Redundancy Cover** is a more targeted, lower-cost option that activates specifically when you lose your job involuntarily. Waiting periods of 30–90 days apply.\n\n**Personal Loan and Car Finance Cover** protects specific loan accounts, often arranged at the time of borrowing through a lender or dealer. These tend to be simpler products with lower monthly premiums.',
      },
      {
        heading: 'Key Providers Serving Auckland',
        body: 'Major insurers with a significant Auckland presence include AIA New Zealand, Partners Life, Fidelity Life, Asteron Life (part of Suncorp NZ), and Chubb Life. Each has its own product terms, exclusions, and premium structures. AIA and Partners Life are particularly well regarded for income protection products, while Fidelity Life has strong broker relationships across the Auckland market.\n\nBecause loan insurance is a financial advice product, most Aucklanders access it through an authorised financial adviser or mortgage broker. Working with an adviser means your specific situation — loan size, employment type, health history — is assessed before a recommendation is made.',
      },
      {
        heading: 'What to Look for When Comparing Policies',
        body: 'Auckland borrowers comparing loan insurance should pay close attention to four key areas:\n\n**Waiting periods**: Most policies have a stand-down period of 30–90 days before claims can be made. A longer waiting period typically means a lower premium, but you\'ll need savings to cover that gap.\n\n**Benefit periods**: Some policies pay for 12 months; others for 2 years or until you return to work. For large Auckland mortgages, a 24-month benefit period offers significantly more security.\n\n**Exclusions**: Pre-existing medical conditions, self-employment, and voluntary redundancy are common exclusions. Read policy wording carefully and ask your adviser to clarify anything ambiguous.\n\n**Premium structure**: Some policies have stepped premiums that increase with age; others are level premiums locked in at purchase. For younger Auckland borrowers taking on 30-year mortgages, a level premium policy may offer better long-term value.',
      },
      {
        heading: 'ACC vs Loan Insurance: An Auckland Perspective',
        body: 'A common misconception among Auckland borrowers is that ACC will cover them if they can\'t work. ACC does cover accidents — it pays weekly compensation of up to 80% of your pre-injury income if you\'re injured. However, ACC does not cover illness, redundancy, or mental health conditions not tied to a physical injury.\n\nFor Aucklanders, this distinction matters enormously. If a serious illness like cancer or a cardiac event leaves you unable to work, ACC provides nothing. Your loan repayments become your sole responsibility. Loan insurance and income protection products fill this gap, covering illness-related income loss that ACC explicitly excludes.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$1.05M+' },
      { label: 'Typical mortgage repayment', value: '$3,500–$5,500/mo' },
      { label: 'Regional unemployment', value: '~5.7%' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'Do I need loan insurance if I already have life insurance?',
        answer: 'Life insurance pays a lump sum when you die. It doesn\'t cover ongoing loan repayments if you\'re ill, injured, or made redundant while alive. Loan insurance and income protection products cover those living income disruptions — they serve a different purpose to life cover.',
      },
      {
        question: 'Can I get loan insurance as a contractor or self-employed person in Auckland?',
        answer: 'Yes, but with caveats. Many loan insurance policies exclude self-employed people from redundancy cover (since you can\'t be made redundant from your own business). However, illness and injury cover is generally available. Some specialised products are designed for contractors. An adviser can help identify policies that work for your employment structure.',
      },
      {
        question: 'How much does loan insurance cost in Auckland?',
        answer: 'Premiums depend on your loan size, age, health, and occupation. As a rough guide, redundancy-only cover might cost $20–$50 per month; income protection covering a substantial Auckland mortgage could be $80–$200+ per month. Comparing multiple providers through an adviser typically produces the most competitive outcome.',
      },
      {
        question: 'Is the Kāinga Ora First Home Loan affected if I can\'t make repayments?',
        answer: 'Your Kāinga Ora First Home Loan is a standard mortgage through a participating bank — if you miss repayments, normal lender processes apply regardless of the scheme. Loan insurance ensures you can keep meeting those repayments even if your income drops, protecting your investment and credit record.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'wellington',
    city: 'Wellington',
    region: 'Wellington',
    metaTitle: 'Loan Insurance Wellington | Cover Your Repayments 2026',
    metaDescription: 'Wellington loan insurance options for public servants, contractors, and homeowners. Protect your mortgage and personal loan repayments. Get expert advice today.',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80',
    heroHeading: 'Loan Insurance for Wellington Borrowers',
    heroSubheading: 'Public sector cuts, earthquake risk, and rising living costs make loan protection essential for Wellington homeowners.',
    intro: 'Wellington\'s economy has historically been anchored by the public sector. But significant restructuring since 2024 — with thousands of public service roles disestablished across core agencies — has created income uncertainty for many Wellington households. Add in the region\'s unique earthquake risk and a housing market that has remained expensive relative to incomes, and the case for loan insurance becomes particularly clear for Wellington borrowers.',
    sections: [
      {
        heading: 'Public Sector Restructuring and Wellington\'s Loan Risk',
        body: 'Wellington\'s labour market is unlike any other in New Zealand. Government ministries, Crown entities, and state-owned enterprises employ a significant proportion of the region\'s workforce. Since 2024, public sector headcount reductions have removed thousands of roles across agencies including Health NZ, the Ministry of Education, and numerous other departments.\n\nFor Wellington homeowners on public sector salaries, redundancy is no longer the abstract risk it once seemed. A mortgage on a Wellington home — median prices have ranged from $700,000 to $900,000 in recent years — requires a substantial ongoing income. A single redundancy event can destabilise a household\'s finances within 60–90 days without appropriate protection in place.',
      },
      {
        heading: 'Types of Cover Suited to Wellington Borrowers',
        body: 'Wellington borrowers generally have access to the same national product range as other regions, but certain products suit the Wellington market particularly well:\n\n**Redundancy cover** is highly relevant given the public sector context. Most policies cover involuntary redundancy — exactly what occurs when a role is disestablished. Stand-down periods of 90 days are common, so having three months of savings to bridge is important.\n\n**Income protection insurance** is ideal for Wellington professionals earning higher salaries who want comprehensive cover for illness, injury, and disability — not just redundancy. AIA, Partners Life, and Asteron Life all offer strong income protection products available to Wellington residents.\n\n**Mortgage repayment insurance** is a targeted product that covers your specific monthly mortgage payment rather than a percentage of salary — useful if your primary concern is keeping the family home.',
      },
      {
        heading: 'Earthquake Risk and Loan Protection',
        body: 'Wellington sits on one of New Zealand\'s most active fault systems. While the Earthquake Commission (EQC) covers property damage, it does not cover your inability to work if an earthquake or its aftermath disrupts your employment. A significant seismic event could affect local businesses, government offices, and infrastructure — creating employment disruption that loan insurance would cover (subject to policy terms).\n\nBorrowers should review policy wording for force majeure or civil commotion exclusions, though most income protection and redundancy policies focus on your personal employment status rather than the cause of that status change.',
      },
      {
        heading: 'Wellington\'s Housing Market Context',
        body: 'Wellington\'s housing market has been volatile. Prices peaked, corrected significantly post-2022, then partially recovered. Many Wellington homeowners who bought at or near the peak carry mortgages that represent a high loan-to-value ratio, leaving little equity buffer. In this environment, protecting the ability to service the mortgage is arguably more important than in markets with stronger equity positions.\n\nWith the OCR at 2.25% and fixed mortgage rates trending down, many Wellington borrowers are refixing at lower rates. This is an opportune moment to review insurance — as your repayments become more predictable, locking in protection at current premium levels makes financial sense.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$730,000–$850,000' },
      { label: 'Public sector share of workforce', value: '~30%+' },
      { label: 'Regional unemployment', value: '~5.8%' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'If I\'m made redundant from a government role, does loan insurance cover me?',
        answer: 'Yes — involuntary redundancy (including role disestablishment) is typically a covered event under redundancy protection policies. You\'ll need to meet the waiting period and provide evidence of redundancy such as an official notice. Check your specific policy wording for any exclusions related to how the redundancy arose.',
      },
      {
        question: 'Can I claim on loan insurance if I take a voluntary redundancy package?',
        answer: 'Generally no. Most policies cover involuntary redundancy only. If you accept a voluntary redundancy offer, that is typically treated as a resignation for insurance purposes. Review policy wording carefully before accepting any package if you intend to rely on insurance cover.',
      },
      {
        question: 'Does ACC cover me if I can\'t work after an earthquake?',
        answer: 'ACC only covers physical injuries caused by accidents. If an earthquake injures you and prevents you from working, ACC may apply to the injury component. However, if you can\'t work because your office is destroyed or your employer has folded, that\'s an employment disruption — not covered by ACC. Redundancy or income protection insurance would apply.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'christchurch',
    city: 'Christchurch',
    region: 'Canterbury',
    metaTitle: 'Loan Insurance Christchurch | Protect Your Repayments 2026',
    metaDescription: 'Loan insurance options for Christchurch and Canterbury borrowers. Cover your mortgage, personal loan, and car finance against job loss and illness. Compare providers.',
    heroImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    heroHeading: 'Loan Insurance for Christchurch and Canterbury Borrowers',
    heroSubheading: 'Protect your rebuild-era mortgage and loans as Canterbury\'s economy navigates construction slowdowns and sector shifts.',
    intro: 'Christchurch\'s post-earthquake rebuild created a prolonged construction and economic boom. As that rebuild phase matures, Christchurch\'s economic base is diversifying — but also facing new pressures. Construction activity has slowed, some sectors are retrenching, and Canterbury households still carry substantial mortgages taken on during the rebuild period. Loan insurance provides the financial backstop to ensure that income disruption doesn\'t become a repayment crisis.',
    sections: [
      {
        heading: 'Christchurch\'s Economic Transition and Loan Risk',
        body: 'Canterbury\'s economy emerged from the rebuild years in a stronger position than many expected, but 2024–2026 has brought new challenges. Construction project pipelines have thinned as major rebuild work concluded. Manufacturing and agri-business — major Canterbury employers — face their own cost pressures and export market volatility. Retail consolidation and public sector restructuring have removed roles across the region.\n\nFor Christchurch borrowers, this economic transition means income certainty is lower than it was during peak rebuild activity. Households relying on a single construction or trade income are particularly exposed if work dries up or illness interrupts earnings.',
      },
      {
        heading: 'Mortgage Protection After the Rebuild',
        body: 'Many Christchurch homeowners rebuilt or purchased properties in the 2014–2020 period, locking in mortgages at prices that have since risen significantly. While Canterbury house prices remain more affordable than Auckland, they\'ve risen considerably from post-quake lows. A typical Christchurch mortgage of $500,000–$700,000 requires consistent monthly repayments that would be difficult to maintain without income.\n\nMortgage protection insurance — covering your specific monthly repayment amount — is a practical tool for Christchurch borrowers. Products from AIA, Partners Life, and Fidelity Life are available through Canterbury-based advisers and can be tailored to your specific loan details.',
      },
      {
        heading: 'Tradespeople and Contractors: A Canterbury Focus',
        body: 'Canterbury\'s rebuild created a large cohort of self-employed tradespeople — builders, electricians, plumbers, painters, and fit-out specialists. Many remain self-employed or contracting as the rebuild tapers off. For this group, loan insurance requires careful selection.\n\nRedundancy cover in the traditional sense doesn\'t apply to the self-employed (you can\'t make yourself redundant). However, business interruption insurance and income protection products that cover inability to work due to illness or injury are available and highly relevant. Some niche products also cover loss of business income above a threshold, suited to sole traders and contractors with variable income.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$620,000–$720,000' },
      { label: 'Regional unemployment', value: '~5.3%' },
      { label: 'Key sectors', value: 'Construction, agri-business, health, retail' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'I\'m a self-employed builder in Canterbury — what loan insurance can I get?',
        answer: 'As a self-employed person, traditional redundancy cover typically won\'t apply. However, income protection insurance that covers illness and injury is available to self-employed tradespeople. Some providers offer "own occupation" policies that pay if you can\'t do your specific trade, which is particularly valuable for physically demanding work. An adviser can identify the most suitable products for your situation.',
      },
      {
        question: 'Does earthquake damage affect my loan insurance eligibility?',
        answer: 'Having previously made an EQC claim or having a property with earthquake damage doesn\'t directly affect your eligibility for income-based loan insurance products. These products are underwritten based on your health and employment, not your property\'s history. However, if you\'re asking about property-level cover, that\'s a different type of insurance (home and contents).',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'hamilton',
    city: 'Hamilton',
    region: 'Waikato',
    metaTitle: 'Loan Insurance Hamilton | Waikato Borrower Protection 2026',
    metaDescription: 'Compare loan insurance for Hamilton and Waikato borrowers. Protect your home loan, personal loan, and car finance repayments. Get a free quote from local advisers.',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    heroHeading: 'Loan Insurance for Hamilton and Waikato Borrowers',
    heroSubheading: 'As Hamilton grows, protect your home loan and personal loan repayments from unexpected income disruption.',
    intro: 'Hamilton has been one of New Zealand\'s fastest-growing cities, attracting families priced out of Auckland and businesses expanding regionally. The Waikato region\'s economy is diverse — spanning agri-business, manufacturing, healthcare, education, and a growing tech sector. But with faster growth comes more borrowing, and more exposure to the consequences of income disruption. Loan insurance ensures Hamilton borrowers can maintain repayments when illness, injury, or redundancy strikes.',
    sections: [
      {
        heading: 'Hamilton\'s Growing Mortgage Burden',
        body: 'Hamilton\'s property market has seen dramatic price growth over the past decade. Median house prices that were once a fraction of Auckland\'s have climbed into the $600,000–$750,000 range for typical family homes. First home buyers often stretch to their maximum borrowing capacity, leaving little room for income shocks.\n\nThe city\'s growth has also brought a more complex employment market. Alongside traditional Waikato agri-business and manufacturing jobs, Hamilton now has a substantial cohort of commuters, remote workers, and tech sector employees. Each group has different income risk profiles, and loan insurance products can be tailored accordingly.',
      },
      {
        heading: 'Agri-Business Income and Loan Protection',
        body: 'Waikato\'s farming and agri-business sector creates a unique loan protection context. Farmers and rural business owners often have volatile incomes tied to commodity prices, seasonal cycles, and weather events. While traditional income protection products may be available, self-employed farmers should specifically seek "agreed value" or "indemnity value" policies that account for fluctuating income.\n\nFarm employees and rural workers, on the other hand, are often well-suited to standard income protection products — their employment is regular and their income consistent, making underwriting straightforward.',
      },
      {
        heading: 'Hamilton\'s Healthcare and Education Workforce',
        body: 'Waikato Hospital and the University of Waikato together employ thousands of Hamilton residents. The health sector in particular has seen significant restructuring under Health NZ changes, with roles cut and reorganised across the Waikato DHB successor entity. Healthcare professionals carrying mortgages in Hamilton should assess whether their income protection matches the employment risk they now face.\n\nFor nurses, allied health workers, and hospital support staff affected by Health NZ restructuring, redundancy cover provides a specific safety net for the job-loss scenario — while illness and injury cover addresses the other major risk.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$650,000–$740,000' },
      { label: 'Regional unemployment', value: '~5.4%' },
      { label: 'Key sectors', value: 'Agri-business, health, education, manufacturing' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'Can I get loan insurance if I work in agriculture or farming in Waikato?',
        answer: 'Yes, though farm owners and self-employed rural workers may face some limitations on redundancy cover. Income protection for illness and injury is generally available. Farm employees with stable employment contracts have the widest access to standard loan insurance products. An adviser familiar with rural clients can identify the best fit.',
      },
      {
        question: 'How does loan insurance interact with a KiwiSaver hardship withdrawal?',
        answer: 'They\'re separate — KiwiSaver hardship withdrawals are a one-off access to your retirement savings under specific hardship criteria. Loan insurance is an ongoing monthly benefit that replaces income or covers specific repayments. Using KiwiSaver hardship withdrawals depletes your retirement savings; loan insurance preserves them while covering your repayments.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'tauranga',
    city: 'Tauranga',
    region: 'Bay of Plenty',
    metaTitle: 'Loan Insurance Tauranga | Bay of Plenty Borrower Cover 2026',
    metaDescription: 'Loan insurance for Tauranga and Bay of Plenty borrowers. Protect your home loan and personal loan repayments from job loss, illness, or injury. Compare providers.',
    heroImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80',
    heroHeading: 'Loan Insurance for Tauranga and Bay of Plenty Borrowers',
    heroSubheading: 'Protect your loan repayments in New Zealand\'s fastest-growing region as the property market and living costs continue to rise.',
    intro: 'Tauranga has grown explosively, becoming one of New Zealand\'s most expensive provincial cities. Lifestyle migration from Auckland has driven property prices well above what local incomes alone would sustain, creating a borrowing environment where many households are close to their debt-servicing limits. In this context, loan insurance is not a luxury — it\'s a fundamental component of responsible borrowing in the Bay of Plenty.',
    sections: [
      {
        heading: 'Tauranga\'s Property Market and Loan Exposure',
        body: 'Tauranga\'s property market has been transformed by the migration of Auckland buyers seeking lifestyle and relative affordability. Median house prices in the city have climbed to $800,000–$950,000, with premium suburbs and waterfront locations well above $1 million. For many Tauranga households, mortgage repayments represent 40–50% of take-home pay — a ratio that leaves virtually no buffer for income disruption.\n\nThe port-based economy, kiwifruit and horticultural sector, construction, and tourism all create employment for Tauranga residents. Each sector has different cyclical risks. A poor kiwifruit season, a slump in tourism, or a construction downturn can create significant employment uncertainty for Tauranga workers.',
      },
      {
        heading: 'Seasonal and Horticultural Workers',
        body: 'The Bay of Plenty\'s horticultural sector is one of the most valuable in New Zealand. But many workers in this sector are seasonal, casual, or on short-term contracts. Loan insurance for seasonal workers requires careful thought — many products require you to be in regular, permanent employment.\n\nFor workers moving from seasonal to permanent employment, loan insurance becomes available and highly relevant. For permanent employees in the horticultural sector\'s processing, logistics, and management layers, standard income protection products are appropriate and available.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$830,000–$950,000' },
      { label: 'Regional unemployment', value: '~5.1%' },
      { label: 'Key sectors', value: 'Horticulture, port/logistics, tourism, construction' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'I relocated from Auckland to Tauranga with a large mortgage — what cover do I need?',
        answer: 'Given the size of typical Tauranga mortgages, income protection insurance (covering 75% of salary for illness/injury) combined with redundancy cover provides the most comprehensive protection. If budget is a constraint, at minimum prioritise cover that matches your monthly mortgage repayment amount so the house is protected.',
      },
      {
        question: 'Is loan insurance available for lifestyle block owners in Bay of Plenty?',
        answer: 'Yes — lifestyle block owners who are employed (rather than farming commercially) can access standard loan insurance products. If the lifestyle block generates significant income, specialist rural or business income protection products may be more appropriate. An adviser can assess which category applies to your situation.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'dunedin',
    city: 'Dunedin',
    region: 'Otago',
    metaTitle: 'Loan Insurance Dunedin | Otago Borrower Protection 2026',
    metaDescription: 'Loan insurance for Dunedin and Otago borrowers. Compare mortgage protection, income protection, and redundancy cover from leading NZ providers. Free quote.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
    heroHeading: 'Loan Insurance for Dunedin and Otago Borrowers',
    heroSubheading: 'University city, healthcare hub, and creative economy — protect your income and loans in Dunedin\'s diverse employment market.',
    intro: 'Dunedin\'s economy is anchored by the University of Otago, Dunedin Hospital, and a growing creative and tech sector. The city has been relatively insulated from the worst of New Zealand\'s economic pressures, but the planned rebuild of Dunedin Hospital — one of the largest construction projects in the South Island\'s history — brings both opportunity and risk. For Dunedin borrowers, loan insurance provides protection across all employment scenarios.',
    sections: [
      {
        heading: 'Dunedin\'s Employment Landscape',
        body: 'Dunedin\'s labour market is more diverse than its size might suggest. The University of Otago is the city\'s largest employer, creating stable academic and administrative roles. Dunedin Hospital serves the wider Otago and Southland region, employing thousands of health professionals. A growing screen production industry (New Zealand\'s "Hollywood of the South") and expanding tech sector add further diversity.\n\nHowever, Otago has also experienced the effects of national restructuring. Health NZ changes have affected Dunedin Hospital\'s administrative and support workforce. University budget pressures have led to voluntary departures and some restructuring. Borrowers in these sectors benefit from having loan protection in place before any restructuring announcement.',
      },
      {
        heading: 'Dunedin\'s Property Market: More Affordable, But Still Exposed',
        body: 'Dunedin\'s median house price remains below Auckland, Wellington, and Tauranga — making it more accessible for first home buyers. But "more affordable" doesn\'t mean risk-free. A Dunedin homeowner on a $450,000 mortgage still faces $2,500–$3,000 per month in repayments. If one income in a dual-income household disappears, the impact is immediate and serious.\n\nThe student accommodation and rental property investment market in Dunedin also creates loan obligations for landlords and investors. Rental insurance and loan protection products are available for this cohort, though terms vary by provider.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$520,000–$620,000' },
      { label: 'Regional unemployment', value: '~5.0%' },
      { label: 'Key sectors', value: 'Education, health, creative industries, tech' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'I\'m a university employee in Dunedin — do I need loan insurance?',
        answer: 'University roles can feel secure, but tertiary institutions do restructure, and funding pressures can lead to voluntary redundancy rounds. Illness and injury can affect anyone. If you carry a mortgage or significant personal loans on a university salary, income protection and/or redundancy cover provides the safety net that a seemingly stable employer doesn\'t guarantee.',
      },
      {
        question: 'Is loan insurance worth it on a smaller Dunedin mortgage?',
        answer: 'Even a $400,000 mortgage creates around $2,200–$2,500 per month in repayments. Missing two or three payments can have serious consequences for your credit record and financial stability. At a premium of $30–$80 per month, loan insurance is cost-effective even on smaller Dunedin mortgages. The right answer depends on your savings buffer and income stability.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'palmerston-north',
    city: 'Palmerston North',
    region: 'Manawatū-Whanganui',
    metaTitle: 'Loan Insurance Palmerston North | Manawatū Borrower Cover 2026',
    metaDescription: 'Loan insurance for Palmerston North and Manawatū-Whanganui borrowers. Protect your home loan and personal loan repayments. Compare NZ providers and get a free quote.',
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    heroHeading: 'Loan Insurance for Palmerston North Borrowers',
    heroSubheading: 'Protect your home loan and personal loans in the Manawatū\'s changing employment landscape.',
    intro: 'Palmerston North is the commercial and educational hub of the Manawatū-Whanganui region. Massey University, the New Zealand Army\'s Linton Camp, and a diverse agri-business and food processing sector create employment breadth. However, the region has also experienced the effects of broader New Zealand economic pressures, including public sector restructuring and retail consolidation. For Palmerston North homeowners and borrowers, loan insurance provides essential protection.',
    sections: [
      {
        heading: 'Palmerston North\'s Employment Diversity and Risk',
        body: 'The Manawatū region\'s employment base includes military personnel, academics, food processing workers, agri-business employees, healthcare workers, and retail and logistics staff. This diversity is a strength, but each sector carries its own income risk. Military restructuring, university budget pressures, food manufacturing shifts, and agri-business volatility all create scenarios where income can be disrupted.\n\nPalmerston North\'s median house price has risen significantly in recent years, reflecting both lifestyle migration and local demand growth. A borrower on a $500,000 mortgage faces repayments of $2,800–$3,300 per month — a commitment that requires robust income protection.',
      },
      {
        heading: 'Defence Sector Borrowers',
        body: 'Linton Military Camp makes Palmerston North home to a significant NZDF (New Zealand Defence Force) workforce. Military personnel have relatively secure employment, but are subject to deployment, medically-related discharge, and restructuring events. Loan insurance for defence sector workers should account for the specific conditions of their service — advisers familiar with NZDF employment can help identify appropriate products.\n\nPartners Life, AIA, and Fidelity Life all have products available to NZDF personnel, though some occupational hazard exclusions may apply depending on deployment status and role.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$490,000–$580,000' },
      { label: 'Regional unemployment', value: '~5.6%' },
      { label: 'Key sectors', value: 'Defence, education, food processing, agri-business' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'Can NZDF personnel in Palmerston North get loan insurance?',
        answer: 'Yes, NZDF personnel can generally access loan insurance products. However, policies may include occupational hazard exclusions related to deployment or combat-related injuries. Working with an adviser who understands NZDF employment conditions ensures you select a policy that provides genuine protection rather than one riddled with carve-outs.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'nelson',
    city: 'Nelson',
    region: 'Nelson-Marlborough',
    metaTitle: 'Loan Insurance Nelson | Nelson-Marlborough Borrower Cover 2026',
    metaDescription: 'Loan insurance for Nelson and Marlborough borrowers. Protect your home loan, personal loan, and car finance from income disruption. Compare NZ providers today.',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    heroHeading: 'Loan Insurance for Nelson and Marlborough Borrowers',
    heroSubheading: 'Lifestyle paradise with real financial risk — protect your loans in the top of the South Island.',
    intro: 'Nelson and the Marlborough Sounds attract lifestyle migrants from across New Zealand seeking natural beauty, a warm climate, and a more relaxed pace of life. But the region\'s employment base — heavily weighted toward tourism, viticulture, horticulture, and the marine and fishing sectors — creates income volatility that lifestyle amenity cannot compensate for. Loan insurance helps Nelson-Marlborough borrowers maintain their financial stability when seasonal or cyclical income disruptions occur.',
    sections: [
      {
        heading: 'Nelson-Marlborough\'s Economic Character',
        body: 'The Nelson-Marlborough region is economically distinctive. Marlborough\'s world-famous wine industry, Nelson\'s fishing and aquaculture sector, and both regions\' tourism reliance create income patterns that differ markedly from the stable salary employment common in main urban centres.\n\nFor borrowers in these industries, loan insurance requires careful matching. Seasonal workers and those with variable income may face underwriting challenges for income protection products based on a fixed salary. However, "indemnity value" income protection products that assess your actual income over a lookback period can be appropriate for viticulture managers, aquaculture operators, and others with legitimate but variable earnings.',
      },
      {
        heading: 'Lifestyle Migration and Mortgage Exposure',
        body: 'Nelson has seen significant property price growth driven by lifestyle migrants. Median house prices have climbed to $650,000–$800,000 in many Nelson suburbs. Buyers who moved from Auckland or Wellington often sell their existing home and buy in Nelson, but may be changing employment sectors simultaneously — increasing their income risk at exactly the time they take on new debt.\n\nFor this cohort, establishing loan insurance before or immediately after a move is critical. Some policies have waiting periods before redundancy cover activates, so planning ahead avoids leaving yourself exposed during the settlement and employment transition period.',
      },
    ],
    localStats: [
      { label: 'Median house price', value: '$650,000–$800,000' },
      { label: 'Regional unemployment', value: '~4.9%' },
      { label: 'Key sectors', value: 'Tourism, viticulture, fishing, aquaculture' },
      { label: 'OCR (May 2026)', value: '2.25%' },
    ],
    faqs: [
      {
        question: 'I work in the Marlborough wine industry — can I get income protection?',
        answer: 'Yes, permanent employees in viticulture and wine production can access standard income protection products. Vineyard managers, cellar door staff, and logistics employees with stable employment are generally straightforward to insure. Those on seasonal or casual contracts face more limitations, but some providers will consider year-round regular seasonal employment. An adviser can help assess your specific situation.',
      },
    ],
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
];

export const guidePages: GuidePage[] = [
  {
    slug: 'first-home-buyers-guide',
    title: 'Loan Insurance for First Home Buyers: A Complete NZ Guide',
    metaTitle: 'Loan Insurance for First Home Buyers NZ | Complete Guide 2026',
    metaDescription: 'Everything first home buyers need to know about loan insurance in New Zealand. When to get it, what it costs, and how to choose the right cover for your new mortgage.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    heroHeading: 'First Home Buyer\'s Guide to Loan Insurance',
    intro: 'Buying your first home is one of the most significant financial decisions you\'ll make. With the Kāinga Ora First Home Loan still available and the property market showing renewed activity in 2026, more New Zealanders are making the leap to homeownership. But alongside the excitement of getting the keys, first home buyers face an often-overlooked question: what happens to my mortgage if I lose my income?',
    sections: [
      {
        heading: 'Why Loan Insurance Matters Most for First Home Buyers',
        body: 'First home buyers are statistically the most financially vulnerable group of homeowners. Here\'s why: you\'ve typically used all your savings for the deposit, you\'re at or near your maximum borrowing capacity, you have little equity in the property, and your mortgage repayments represent a high proportion of your income.\n\nThis combination means that a single income disruption — redundancy, a serious illness, or an injury preventing work — can rapidly escalate into missed repayments, default, and potentially forced sale. Unlike homeowners who have had years to build equity and savings buffers, first home buyers operate on thinner margins.\n\nLoan insurance addresses this vulnerability directly. By covering your monthly repayments while you recover or find new work, it prevents a temporary income setback from becoming a permanent financial catastrophe.',
      },
      {
        heading: 'Types of Cover Relevant to First Home Buyers',
        body: 'For first home buyers, the most relevant loan insurance products are:\n\n**Mortgage Protection Insurance**: Covers your specific monthly mortgage repayment if you\'re unable to work due to illness, injury, or redundancy. The most directly relevant product for protecting your home.\n\n**Income Protection Insurance**: Pays up to 75% of your pre-disability income if you\'re unable to work due to illness or injury. More comprehensive than mortgage protection — it covers all your expenses, not just the mortgage — but typically more expensive.\n\n**Redundancy Cover**: A standalone product that specifically covers involuntary job loss. Often has a stand-down period of 90 days and a benefit period of 12 months. Lower cost, more targeted protection.\n\n**Life Insurance**: While not strictly "loan insurance," many first home buyers should also consider life insurance to ensure their partner isn\'t left with a mortgage they can\'t service if the worst happens.',
      },
      {
        heading: 'When to Get Loan Insurance',
        body: 'The best time to take out loan insurance is before you need it — ideally at or before settlement. Insurance companies cannot exclude pre-existing conditions they weren\'t informed of, but they can and will exclude conditions that arise after you apply but before cover commences in some policy structures.\n\nMost importantly, redundancy cover has a stand-down period from inception — typically 90 days. If you purchase cover only after receiving notice of redundancy, that notice itself becomes a pre-existing situation that will likely be excluded. Getting cover in place when you\'re in stable employment and good health is always the right strategy.\n\nFor borrowers using the Kāinga Ora First Home Loan (low-deposit lending through participating banks), loan insurance is not compulsory but is strongly advisable given the low equity position at purchase.',
      },
      {
        heading: 'How Much Does Loan Insurance Cost?',
        body: 'For a first home buyer in their late 20s to mid-30s with a $500,000 mortgage, rough indicative costs are:\n\n- Redundancy cover only: $25–$50 per month\n- Mortgage protection (redundancy + illness/injury): $60–$120 per month\n- Income protection (comprehensive, 75% salary): $80–$200+ per month depending on salary, occupation, and waiting period chosen\n\nPremiums are affected by your age (younger is cheaper), health status, occupation, and the waiting period you choose. Opting for a 90-day waiting period rather than 30-day can reduce premiums by 20–40%.\n\nAs a first home buyer, you\'re typically taking on the largest loan of your life at a time when premiums are at their lowest (due to age). Locking in cover now is often significantly cheaper than waiting.',
      },
      {
        heading: 'What the Kāinga Ora First Home Loan Doesn\'t Cover',
        body: 'The Kāinga Ora First Home Loan is a government-backed low-deposit lending scheme offered through participating banks. It allows eligible buyers to purchase with a 5% deposit rather than the standard 20%. It does not, however, provide any protection against income loss.\n\nIf you miss repayments on a Kāinga Ora First Home Loan, the normal lender processes apply — including arrears notices, credit record damage, and ultimately the possibility of mortgagee sale. The government guarantee is to the bank, not to you. Loan insurance is the mechanism that protects your own position.',
      },
      {
        heading: 'Choosing an Adviser vs. Going Direct',
        body: 'Loan insurance in New Zealand is a financial advice product. Most borrowers access it through a registered financial adviser — often the same adviser who helped arrange their mortgage. Using an adviser has clear advantages: they assess your full financial picture, compare multiple providers, and have a legal obligation under the Financial Markets Conduct Act to recommend what\'s right for you (not what\'s most profitable for them).\n\nSome lenders offer "repayment protection" products directly at the time of loan drawdown. These can be convenient, but they\'re often less comprehensive and more expensive per dollar of cover than policies obtained through a specialist adviser. Shop around before accepting the bank\'s bundled offer.',
      },
    ],
    keyPoints: [
      'First home buyers are most financially vulnerable due to low equity and high debt-to-income ratios',
      'Mortgage protection, income protection, and redundancy cover are the three main products to consider',
      'Get cover before settlement — redundancy stand-down periods mean late coverage leaves a gap',
      'Premiums are lowest when you\'re young and healthy — lock in rates now',
      'Kāinga Ora First Home Loan provides no income protection — that\'s your responsibility',
      'An independent financial adviser can compare multiple providers and find the best value',
    ],
    faqs: [
      {
        question: 'Is loan insurance compulsory for first home buyers in NZ?',
        answer: 'No, it\'s not compulsory. Your lender cannot require you to purchase their specific loan insurance product (this would breach competition rules). However, some form of income protection or mortgage protection is strongly advisable given the financial exposure of first home ownership.',
      },
      {
        question: 'Can I get loan insurance if I\'m a KiwiSaver first home withdrawal buyer?',
        answer: 'Yes — using KiwiSaver for your deposit has no bearing on your eligibility for loan insurance. Your loan insurance eligibility is based on your employment status, health, and loan details.',
      },
      {
        question: 'What if I already have income protection through my employer?',
        answer: 'Group income protection through an employer is often lower value than individual cover — it may pay less, have stricter definitions of disability, and cease when you leave the job. Check the specifics. If it\'s substantial cover, you may need only a gap-filling top-up product. If it\'s minimal, individual cover is worth considering.',
      },
    ],
    author: { name: 'Sarah Mitchell', title: 'Senior Insurance Analyst' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'self-employed-loan-insurance',
    title: 'Loan Insurance for Self-Employed New Zealanders: Your Complete Guide',
    metaTitle: 'Loan Insurance for Self-Employed NZ | Complete Guide 2026',
    metaDescription: 'Self-employed in New Zealand? Standard loan insurance often falls short. Learn which products work for contractors, sole traders, and business owners with mortgages.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
    heroHeading: 'Self-Employed? Here\'s How to Protect Your Loans',
    intro: 'Self-employment and contracting are increasingly common in New Zealand\'s workforce. The flexibility and income potential can be significant, but so is the financial exposure. Without an employer\'s sick leave, redundancy provisions, or group insurance, self-employed New Zealanders carry their loan obligations entirely on their own income resilience. When that income stops — due to illness, injury, or a business downturn — loan repayments don\'t stop with it.',
    sections: [
      {
        heading: 'Why Standard Loan Insurance Often Doesn\'t Fit the Self-Employed',
        body: 'Most loan insurance products are designed with the salaried employee in mind. They define "redundancy" as involuntary job loss from an employer — which, by definition, can\'t apply to someone who is their own employer. They calculate benefits as a percentage of a regular salary, which may not reflect the variable income patterns of a self-employed person. And they may have occupation-specific exclusions that affect tradespeople, professionals in private practice, or those in higher-risk business activities.\n\nThis doesn\'t mean self-employed people can\'t get loan protection — it means they need to look at the right products, structured appropriately for their situation.',
      },
      {
        heading: 'Income Protection: The Core Product for the Self-Employed',
        body: 'Income protection insurance is the primary loan protection product for self-employed New Zealanders. Key features to look for include:\n\n**Agreed value vs. indemnity value**: Agreed value policies pay a fixed monthly benefit regardless of your income at claim time — ideal if your income is variable. Indemnity policies pay based on your actual income before the claim, which can result in lower payments if income had dipped recently.\n\n**Own occupation vs. any occupation definition**: An "own occupation" definition pays if you can\'t do your specific work — critical for specialist tradespeople and professionals. An "any occupation" definition only pays if you can\'t work at all.\n\n**Waiting period choices**: Self-employed people often have some ability to keep earning a reduced amount or draw on business reserves. A longer waiting period (90–180 days) with a correspondingly lower premium can make sense if you have this buffer.\n\n**Benefit period**: For significant loan obligations, choose a benefit period that extends to at least age 65 or the term of your longest loan.',
      },
      {
        heading: 'Business Expenses Cover',
        body: 'A separate but related product for self-employed borrowers is business expenses insurance. This covers fixed business costs — rent, utilities, equipment leases, staff wages — if you\'re unable to work due to illness or injury. It\'s distinct from income protection: while income protection replaces your personal income, business expenses cover keeps your business running so there\'s something to return to.\n\nFor sole traders whose personal and business finances are intertwined, a combination of income protection and business expenses cover provides the most comprehensive protection.',
      },
      {
        heading: 'Proving Income: The Underwriting Challenge',
        body: 'A practical hurdle for self-employed New Zealanders is proving their income for insurance purposes. Unlike a salaried employee who can provide a payslip, self-employed people need to demonstrate income through tax returns, financial accounts, and potentially a letter from their accountant.\n\nInsurers typically look at your average taxable income over two to three years. If your income has been growing, some providers will use a more recent period. If your income is highly variable, some providers will use a smoothed average. Working with an adviser who has experience placing self-employed clients ensures your income evidence is presented in the most favourable way within the insurer\'s underwriting guidelines.',
      },
      {
        heading: 'Contractors: A Special Case',
        body: 'Contractors occupy a middle ground between employment and self-employment. Some contractors — particularly IT contractors, construction subcontractors, and healthcare agency staff — have reasonably predictable income despite not being employees. For these individuals, income protection products can be structured to reflect their actual earning pattern.\n\nImportantly, contractors on a regular contract with one or a small number of clients may find that their income pattern is closer to employment than it appears. An insurer\'s view of "employment" for underwriting purposes may be more inclusive than the legal employment definition. An experienced adviser can navigate these nuances.',
      },
      {
        heading: 'KiwiSaver and Business Interruption as Backup Mechanisms',
        body: 'Self-employed New Zealanders should also review their KiwiSaver settings in the context of loan protection. While KiwiSaver hardship withdrawals require meeting specific IRD criteria and are a last resort (depleting retirement savings), having a KiwiSaver balance provides some emergency backstop.\n\nBusiness interruption insurance is another mechanism — it covers income lost when a business cannot operate due to specified events (fire, flood, supplier failure). While not a substitute for income protection, it addresses a different set of business-level income disruptions that can indirectly affect loan serviceability.',
      },
    ],
    keyPoints: [
      'Standard redundancy cover generally doesn\'t apply to the self-employed',
      'Income protection is the primary product — choose agreed value for variable income',
      'Own occupation definitions are critical for specialist tradespeople and professionals',
      'Business expenses cover complements income protection for business owners',
      'Proving income requires two to three years of tax returns or financial accounts',
      'An adviser experienced with self-employed clients is essential for appropriate cover',
    ],
    faqs: [
      {
        question: 'Can sole traders in NZ get redundancy cover?',
        answer: 'Typically no — redundancy is defined as involuntary loss of employment, and a sole trader cannot be made redundant from their own business. However, some specialist products exist for small business owners that cover business cessation events. Income protection for illness and injury is the main alternative.',
      },
      {
        question: 'I\'ve been self-employed for only 12 months — can I get income protection?',
        answer: 'Insurers vary in their requirements, but most prefer at least two years of self-employment history to assess income. If you\'re newly self-employed, some providers will consider your previous employment income. An adviser can identify insurers most willing to consider limited trading history.',
      },
      {
        question: 'Does the Inland Revenue\'s treatment of my income affect my loan insurance?',
        answer: 'Yes — your declared taxable income is typically what insurers use as the basis for benefit calculation. If you legitimately minimise tax through business deductions, that may reduce the insurable income figure. Some structured income protection arrangements can address this, but it requires careful planning with both your accountant and insurance adviser.',
      },
    ],
    author: { name: 'James Taufa', title: 'NZ Financial Writer' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'redundancy-cover-explained',
    title: 'Redundancy Cover in New Zealand: How It Works and What to Expect',
    metaTitle: 'Redundancy Cover NZ | How It Works, What It Pays 2026',
    metaDescription: 'Everything you need to know about redundancy cover in New Zealand. Stand-down periods, benefit amounts, exclusions, and how to choose the right policy for your situation.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    heroHeading: 'Redundancy Cover: A Complete Explainer',
    intro: 'New Zealand has no government-mandated redundancy insurance. Unlike some overseas jurisdictions, there\'s no automatic financial safety net beyond what your employer\'s redundancy policy provides — and many employers provide only what the law requires (which can be minimal). If you lose your job, the gap between your final pay and your next income must be bridged somehow. Redundancy cover is the insurance product designed specifically to do that.',
    sections: [
      {
        heading: 'What Redundancy Cover Actually Does',
        body: 'Redundancy cover pays a regular monthly benefit — typically matching or supplementing your loan repayment — when you\'ve been involuntarily made redundant from your employment. It\'s not income replacement in the broad sense (that\'s income protection); it\'s targeted protection for a specific life event: losing your job through no fault of your own.\n\nMost standalone redundancy products pay a benefit for up to 12 months. Some bundled products (payment protection insurance that covers multiple events) may extend this. The benefit amount is usually set at either a fixed sum (e.g., your monthly mortgage repayment) or as a percentage of your pre-redundancy income.',
      },
      {
        heading: 'The Stand-Down Period: A Critical Detail',
        body: 'Every redundancy cover policy has a stand-down period — a period from policy inception during which redundancy claims cannot be made. This is typically 90 days, though some policies use 60 days or 180 days.\n\nThe practical implication is significant: if you\'re already aware of a potential redundancy before taking out cover, that situation may be specifically excluded. And if you take out cover today and are made redundant in week 10, you\'ll need to have been in your role continuously since before the policy started to make a valid claim.\n\nGetting redundancy cover when you\'re in stable employment — ideally when you\'ve just started a new job and have good job security — is the most effective approach. Waiting until the wind changes is too late.',
      },
      {
        heading: 'What Counts as Involuntary Redundancy?',
        body: 'Insurers assess redundancy claims carefully. Covered situations typically include:\n- Your role is disestablished as part of an organisational restructure\n- Your employer\'s business closes or goes into liquidation\n- Your employment is terminated for genuine business reasons unrelated to your performance\n\nExcluded situations typically include:\n- Accepting a voluntary redundancy offer (this is treated as resignation)\n- Being dismissed for misconduct or performance reasons\n- Resigning from your role\n- Reaching the end of a fixed-term contract (this is a contract expiry, not redundancy)\n- Your probationary period being ended by the employer\n\nPolicy wording varies between providers, so reading the definitions section carefully is essential.',
      },
      {
        heading: 'The Interaction with Working for Families and MSD',
        body: 'If you\'re made redundant and receive a redundancy insurance benefit, this may affect your eligibility for other government support. Working for Families tax credits, Jobseeker Support from MSD, and accommodation supplements all have income tests that count insurance benefits as income.\n\nThis doesn\'t mean insurance is counterproductive — it means the combination of benefits may be different from what you\'d receive without cover. An insurance benefit that keeps your mortgage repayments current while MSD Jobseeker provides subsistence income is a functional combination, even if there\'s some offset.',
      },
      {
        heading: 'Redundancy Cover vs. Income Protection: Which Do You Need?',
        body: 'Redundancy cover addresses one risk: losing your job involuntarily. Income protection addresses multiple risks: illness, injury, disability, and sometimes redundancy. The choice between them depends on your situation:\n\n**Redundancy cover alone** suits someone who already has good income protection through their employer\'s group scheme (which often covers illness/injury) and primarily wants to address the job-loss risk.\n\n**Income protection alone** suits someone most worried about health-related income disruption — common for those in stable but physically or mentally demanding roles where illness or injury is a realistic risk.\n\n**Both together** provides the most comprehensive protection and is appropriate for anyone with significant loan obligations and limited financial buffers.\n\n**Bundled products** (payment protection insurance covering both events) are available and can be cost-effective, but the terms may be less favourable than standalone specialist policies.',
      },
    ],
    keyPoints: [
      'NZ has no government redundancy insurance — you\'re responsible for your own cover',
      'Stand-down periods of 90 days mean you can\'t cover an anticipated redundancy',
      'Voluntary redundancy acceptance is typically excluded from cover',
      'Benefit periods are usually 12 months — enough to find new employment in most markets',
      'Insurance benefits may affect Working for Families and MSD income assessments',
      'Bundled payment protection covers both redundancy and illness/injury in one policy',
    ],
    faqs: [
      {
        question: 'Does redundancy cover pay from day one of being unemployed?',
        answer: 'No — there\'s both a stand-down period from policy inception (typically 90 days) and a waiting or deferred period from the redundancy event itself (often 30–60 days). You won\'t receive your first payment immediately after losing your job. Planning for this gap with savings is important.',
      },
      {
        question: 'I work on a fixed-term contract — does redundancy cover apply when it ends?',
        answer: 'Generally no. The expiry of a fixed-term contract is a contract event, not a redundancy. Some policies may cover situations where a contract is terminated early for business reasons, but natural expiry is excluded by most providers.',
      },
      {
        question: 'How long does it take to make a redundancy cover claim?',
        answer: 'Claims processes vary by insurer but typically take 2–4 weeks to assess once complete documentation is received. You\'ll need your redundancy notice, employment termination letter, and proof of your loan repayment obligations. Starting the claims process as soon as you receive notice speeds resolution.',
      },
    ],
    author: { name: 'Aroha Ngata', title: 'Consumer Finance Specialist' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'income-protection-vs-loan-insurance',
    title: 'Income Protection vs Loan Insurance in NZ: Which Do You Need?',
    metaTitle: 'Income Protection vs Loan Insurance NZ | 2026 Comparison',
    metaDescription: 'Compare income protection and loan insurance in New Zealand. Understand the differences, costs, and when each product is right for your financial situation.',
    heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80',
    heroHeading: 'Income Protection vs Loan Insurance: The Borrower\'s Guide',
    intro: 'New Zealand borrowers are often confronted with two overlapping protection options: income protection insurance and loan insurance (sometimes called payment protection insurance). Both aim to prevent income disruption from derailing your finances — but they do it differently, cover different risks, and suit different financial profiles. Understanding the distinction is essential to getting the right cover without paying for duplication.',
    sections: [
      {
        heading: 'What Income Protection Covers',
        body: 'Income protection insurance is designed to replace a portion of your income — typically up to 75% of your pre-disability earnings — if illness, injury, or disability prevents you from working. Key characteristics:\n\n- **Pays based on your income**, not your loan size\n- **Covers illness and injury** — the two most common causes of long-term work absence\n- **Benefit periods** can extend to age 65, providing cover for the duration of your working life\n- **Premiums are tax-deductible** for non-residents, but generally not for employees in NZ (unlike in Australia)\n- **Does not typically cover redundancy** unless specifically added as a rider or part of a bundled product\n- **Benefit is not tied to a specific loan** — it replaces general income, which you apply to your expenses as needed',
      },
      {
        heading: 'What Loan Insurance Covers',
        body: 'Loan insurance (also called payment protection insurance or mortgage protection) is designed to cover a specific loan repayment — your mortgage, personal loan, or car finance payment — when a covered event occurs. Key characteristics:\n\n- **Pays a specific loan repayment amount**, not a percentage of income\n- **Covers a wider range of events** in many products: illness, injury, AND redundancy\n- **Shorter benefit periods** — typically 12–24 months rather than to age 65\n- **Lower cost** than comprehensive income protection for the same loan amount\n- **Simpler underwriting** in many cases, particularly for shorter-term payment protection\n- **Tied to a specific loan** — if you pay off the loan, the insurance typically ends or needs to be restructured',
      },
      {
        heading: 'When Income Protection Is the Better Choice',
        body: 'Income protection is generally the better choice when:\n\n**You have high income and multiple financial obligations** — income protection\'s broader benefit replaces income that covers not just your loan but all your living costs, family needs, and other financial commitments.\n\n**You\'re in a profession with significant illness risk** — doctors, nurses, teachers, and other professionals in demanding roles benefit from comprehensive income protection with "own occupation" definitions.\n\n**You have a long loan term** — for a 30-year mortgage, a product that only pays for 12 months may not provide the security you need if a serious illness leaves you unable to work for years. Income protection to age 65 offers far greater long-term security.\n\n**You want premiums to be consistent** — income protection policies with level premiums provide cost certainty, whereas loan insurance premiums may step with age.',
      },
      {
        heading: 'When Loan Insurance Is the Better Choice',
        body: 'Loan insurance is generally the better choice when:\n\n**Budget is constrained** — loan insurance costs significantly less than comprehensive income protection for the same monthly benefit, making it accessible for borrowers who can\'t afford full income replacement cover.\n\n**You need redundancy cover too** — many income protection products don\'t cover redundancy. A bundled payment protection product that covers illness, injury, and redundancy in a single policy provides broader event coverage at lower cost.\n\n**You have a specific short-term loan** — for a five-year car loan, a 24-month payment protection product may be all the insurance you need for that specific obligation.\n\n**Underwriting simplicity matters** — some loan insurance products have simplified health declarations and are faster to obtain, which suits borrowers who need cover quickly.',
      },
      {
        heading: 'Using Both Together: The Comprehensive Approach',
        body: 'Many New Zealand financial advisers recommend a layered approach for borrowers with significant obligations:\n\n1. **Foundation layer**: Comprehensive income protection covering 75% of salary to age 65, with an "own occupation" definition\n2. **Top-up layer**: Redundancy cover addressing the one risk income protection doesn\'t cover\n3. **Life cover**: Ensuring your partner isn\'t left with the mortgage if you die\n\nThis layered approach provides comprehensive protection but comes at a higher total premium. For borrowers who can\'t afford all three, prioritising based on your specific risk profile (health history, industry, savings buffer) and discussing this with an adviser is the right approach.',
      },
    ],
    keyPoints: [
      'Income protection replaces general income; loan insurance covers a specific repayment',
      'Income protection suits high earners with multiple obligations and long loan terms',
      'Loan insurance is more affordable and often includes redundancy cover',
      'Neither product fully duplicates the other — they address different scenarios',
      'A layered approach (both products) offers the most comprehensive protection',
      'An independent adviser can help you find the right balance for your budget',
    ],
    faqs: [
      {
        question: 'Can I claim on both income protection and loan insurance at the same time?',
        answer: 'In principle yes, but insurers apply offset clauses. If your income protection benefit together with other insurance benefits exceeds a threshold of your pre-disability income (usually 75–85%), the insurer may reduce the benefit. Your adviser can structure policies to minimise unnecessary duplication while maximising total benefit.',
      },
      {
        question: 'Are income protection premiums tax deductible in NZ?',
        answer: 'For most NZ employees, income protection premiums are not tax deductible (unlike in Australia). The trade-off is that benefits are also typically received tax-free. Self-employed people may be able to claim premiums as a business expense in some circumstances — your accountant can advise.',
      },
    ],
    author: { name: 'Tom Henderson', title: 'Insurance Adviser Correspondent' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'acc-gaps-and-loan-insurance',
    title: 'ACC Gaps and Loan Insurance: What ACC Doesn\'t Cover in NZ',
    metaTitle: 'ACC Gaps and Loan Insurance NZ | What ACC Doesn\'t Cover 2026',
    metaDescription: 'ACC covers injuries — but not illness, redundancy, or mental health. Learn the ACC gaps that leave NZ borrowers exposed and how loan insurance fills them.',
    heroImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80',
    heroHeading: 'What ACC Doesn\'t Cover — and How Loan Insurance Fills the Gaps',
    intro: 'New Zealand\'s Accident Compensation Corporation (ACC) is a world-leading no-fault accident compensation scheme. It provides weekly earnings compensation, treatment costs, and rehabilitation support when you\'re injured. Many New Zealanders believe — incorrectly — that ACC makes income protection and loan insurance redundant. Understanding exactly what ACC does and doesn\'t cover is essential for any borrower assessing their financial protection needs.',
    sections: [
      {
        heading: 'What ACC Actually Covers',
        body: 'ACC covers personal injury caused by an accident. In practical terms, this means:\n- Sports injuries\n- Motor vehicle accidents (even if you\'re at fault)\n- Workplace accidents\n- Falls, fractures, and other physical trauma\n- Gradual process injuries (like repetitive strain) caused by your work\n- Some mental injury directly caused by a physical injury\n\nWhen you make an ACC claim for a covered injury that prevents you from working, ACC pays weekly compensation of up to 80% of your pre-injury earnings (subject to a maximum cap, which is adjusted annually). This can overlap with and supplement loan insurance for injury-related claims.',
      },
      {
        heading: 'What ACC Explicitly Does NOT Cover',
        body: 'The gaps in ACC coverage are substantial and directly relevant to loan holders:\n\n**Illness**: Cancer, heart disease, diabetes, depression, anxiety, autoimmune conditions, neurological disorders — none of these are covered by ACC unless they result from an accident or work-related exposure. Illness is the leading cause of long-term work absence in New Zealand, and ACC provides nothing.\n\n**Redundancy and job loss**: ACC has no employment protection function. If you lose your job, ACC is irrelevant.\n\n**Mental health conditions not linked to injury**: The mental health epidemic — depression, anxiety, burnout — is one of the most common causes of inability to work. ACC covers psychological injury directly caused by a physical accident, but standalone mental health conditions are excluded.\n\n**Elective surgery complications**: If you\'re unable to work following complications from elective surgery, ACC coverage depends on whether the complication qualifies as a "medical mishap" under specific criteria.\n\n**Illness-related death**: Life insurance, not ACC, addresses this.',
      },
      {
        heading: 'The Illness Gap: Your Biggest Uninsured Risk',
        body: 'Statistics consistently show that illness — not injury — is the primary cause of long-term work absence in New Zealand. Cancer diagnoses, cardiac events, mental health conditions, and autoimmune diseases collectively account for a greater proportion of extended sick leave and disability than accidents.\n\nYet ACC, our national safety net, covers none of these. A 45-year-old homeowner diagnosed with cancer who cannot work for 18 months receives nothing from ACC. Their mortgage repayments, however, continue unchanged.\n\nThis is the single most important gap that loan insurance and income protection fill. For borrowers who believe ACC protects them, understanding that illness is explicitly excluded from the scheme changes the calculus of insurance entirely.',
      },
      {
        heading: 'When ACC and Loan Insurance Work Together',
        body: 'For covered injuries, ACC and loan insurance can operate simultaneously, though offset clauses may apply. ACC pays up to 80% of pre-injury earnings; income protection or loan insurance adds additional cover up to the policy\'s benefit limit.\n\nMany income protection policies have an "ACC offset" clause that reduces the insurance benefit by what ACC pays — ensuring total payments don\'t exceed your income threshold but also meaning you don\'t receive a windfall. The insurance\'s primary value in this scenario is:\n- Covering the gap between ACC\'s 80% and your actual income needs\n- Activating immediately while ACC processes your claim\n- Providing continuing benefit once ACC\'s early-stage rehabilitation support transitions to longer-term support\n- Covering the periods ACC doesn\'t cover (beyond maximum benefit caps)',
      },
      {
        heading: 'Mental Health and Loan Insurance',
        body: 'Mental health conditions — including depression, anxiety, and burnout — are increasingly common causes of work absence. ACC covers psychological conditions only in specific, narrow circumstances (e.g., post-traumatic stress from a covered accident). It does not cover depression arising from workplace stress, relationship breakdown, financial pressure, or other life events.\n\nIncome protection policies vary significantly in their mental health coverage. Some include mental health conditions on the same basis as physical illness; others apply stricter definitions, shorter benefit periods, or specific exclusions for pre-existing mental health history. This is an area where reading policy wording carefully — and disclosing any history fully and accurately — is critical.\n\nFor borrowers who have previously experienced mental health challenges, specialist advice is especially important to find providers with the most inclusive terms for their specific situation.',
      },
    ],
    keyPoints: [
      'ACC covers accidents only — illness, redundancy, and most mental health conditions are excluded',
      'Illness is the leading cause of long-term work absence — ACC provides nothing for this',
      'Cancer, cardiac events, and mental health are the biggest ACC gaps for borrowers',
      'Income protection and loan insurance fill the illness gap that ACC leaves open',
      'When both ACC and insurance apply (injury), offset clauses prevent double-dipping',
      'Mental health cover varies significantly between insurance providers — compare carefully',
    ],
    faqs: [
      {
        question: 'If ACC pays 80% of my income after an injury, do I still need loan insurance?',
        answer: 'ACC\'s 80% covers you for accidents — but 20% of income is still a shortfall on top-of-mortgage repayments. More importantly, ACC doesn\'t cover illness. Most loan insurance and income protection products activate for both injury AND illness, providing broader coverage than ACC alone. For accident injuries, the insurance supplements ACC and covers situations ACC doesn\'t.',
      },
      {
        question: 'Does ACC cover me if I can\'t work due to stress or burnout?',
        answer: 'Generally no. Burnout and work-related stress are not ACC-covered events unless they result from a specific workplace accident (such as witnessing a traumatic event). If stress or mental health prevents you from working, income protection insurance with mental health coverage is the relevant product.',
      },
      {
        question: 'What is the ACC annual earnings cap?',
        answer: 'ACC sets a maximum annual earnings cap for weekly compensation purposes, adjusted each year. As of 2026, this cap limits the earnings base for ACC weekly compensation for high earners. If your income exceeds this cap, the portion above it is not covered by ACC weekly compensation — making income protection insurance particularly important for higher earners.',
      },
    ],
    author: { name: 'Aroha Ngata', title: 'Consumer Finance Specialist' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
  {
    slug: 'compare-loan-insurance-providers',
    title: 'How to Compare Loan Insurance Providers in New Zealand: A 2026 Guide',
    metaTitle: 'Compare Loan Insurance Providers NZ | 2026 Buyer\'s Guide',
    metaDescription: 'Compare AIA, Partners Life, Fidelity Life, Asteron Life, and Chubb Life loan insurance products in New Zealand. Learn what to look for and how to get the best value.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    heroHeading: 'Comparing Loan Insurance Providers: What to Look For in 2026',
    intro: 'New Zealand\'s loan insurance market is served by a relatively small number of major providers, each with distinct product strengths, pricing structures, and underwriting philosophies. Choosing between them requires understanding not just the headline premium but the policy terms, definitions, and claims track record that determine whether your insurance actually pays when you need it most.',
    sections: [
      {
        heading: 'The Major Loan Insurance Providers',
        body: 'The main insurers offering loan protection and income protection products in New Zealand are:\n\n**AIA New Zealand**: One of the largest life and health insurers in NZ, AIA has a strong income protection product range with comprehensive illness and injury definitions. Their Vitality programme links health engagement to premium discounts — relevant for younger, health-conscious borrowers.\n\n**Partners Life**: A New Zealand-founded insurer known for comprehensive policy wording and a strong adviser-focused distribution model. Partners Life is frequently cited by advisers for having some of the most consumer-friendly policy definitions in the market.\n\n**Fidelity Life**: New Zealand-owned and focused on simplicity and accessibility. Fidelity Life has invested in digital distribution and has a solid presence in the broker market. Good value for straightforward income protection needs.\n\n**Asteron Life** (Suncorp NZ): Part of the Suncorp group, Asteron offers a broad product range with strong commission structures for advisers. Products are comprehensive and competitive, particularly for bundled life and income protection packages.\n\n**Chubb Life NZ**: Known for specialised products and competitive underwriting of complex cases. Chubb may be more suitable for higher-income professionals or those with occupation-specific requirements.',
      },
      {
        heading: 'Key Policy Terms to Compare',
        body: 'Beyond provider reputation, compare these specific terms across any policies you\'re considering:\n\n**Definition of disability**: "Own occupation" pays if you can\'t do your specific job; "any occupation" only pays if you can\'t work at all. Own occupation definitions are far more protective and worth the higher premium for specialists.\n\n**Waiting period options**: Typically 30, 60, 90, or 180 days. Longer waiting periods mean lower premiums but a larger self-funded gap. Match your savings buffer to your chosen waiting period.\n\n**Benefit period**: 1 year, 2 years, 5 years, or to age 65. For large mortgages, longer benefit periods provide significantly more security.\n\n**Premium structure**: Level (fixed for policy term) vs. stepped (increases with age). Level premiums start higher but provide certainty; stepped premiums are cheaper initially but grow substantially over time.\n\n**Indexation**: Does the benefit amount increase annually with inflation? Important for long-term income protection policies.\n\n**Exclusions and loadings**: Pre-existing conditions, hazardous activities, and certain occupations may attract exclusions or premium loadings. These must be disclosed in full during underwriting.',
      },
      {
        heading: 'The Role of Financial Advisers in Comparing Providers',
        body: 'Direct comparison of loan insurance products is genuinely complex. Policy documents run to dozens of pages, and the differences that matter most (definitions of disability, exclusion clauses, claim conditions) are buried in fine print. This is why most New Zealanders access loan insurance through a registered financial adviser.\n\nAdviser obligations under the Financial Markets Conduct Act require them to act in your best interest, disclose their commissions, and provide a recommendation that\'s appropriate to your circumstances. A good adviser will:\n- Assess your full financial situation and loan obligations\n- Research multiple providers on your behalf\n- Explain the trade-offs between policy terms\n- Help you understand what you\'re actually buying\n- Assist with the claims process if you need to claim\n\nLoaninsurance.co.nz connects borrowers with advisers who specialise in this area — the comparison and recommendation work is done for you.',
      },
      {
        heading: 'Comparing Claims Track Records',
        body: 'Premium price is one thing; actually paying claims is another. New Zealand\'s Financial Markets Authority (FMA) and the Insurance and Financial Services Ombudsman (IFSO) publish data on complaints and disputes. While this data doesn\'t give a complete claims payment picture, a provider with a track record of disputed claims is worth approaching with caution.\n\nMost major NZ insurers publish their own claims paid statistics — the percentage of claims lodged that were paid. These figures are generally high (90%+) for major providers in the life and income protection space, but the detail of why claims are declined (typically non-disclosure or policy exclusions) is equally important to understand.',
      },
    ],
    keyPoints: [
      'Major NZ providers include AIA, Partners Life, Fidelity Life, Asteron Life, and Chubb Life',
      'Policy definitions (own occupation vs. any occupation) matter more than headline premiums',
      'Waiting periods, benefit periods, and premium structure are key comparison variables',
      'Level premiums provide certainty; stepped premiums are cheaper initially but grow',
      'Financial advisers are legally required to recommend what\'s in your best interest',
      'Claims payment rates and IFSO complaints are useful indicators of provider reliability',
    ],
    faqs: [
      {
        question: 'Can I switch loan insurance providers if I find a better deal?',
        answer: 'Yes, but with care. Switching providers means going through new underwriting, which could result in new exclusions for health conditions that have arisen since your original policy was taken out. Any conditions disclosed in your original policy may be treated as pre-existing by a new insurer. Before switching, understand exactly what you\'d lose and what you\'d gain.',
      },
      {
        question: 'Are there any NZ government comparison tools for loan insurance?',
        answer: 'The FMA\'s website (fma.govt.nz) has general guidance on financial products but doesn\'t provide comparative product data for loan insurance. The IFSO scheme handles insurance disputes. For actual product comparisons, a licensed financial adviser is the most effective route — they have access to multiple provider systems and are legally accountable for their recommendations.',
      },
      {
        question: 'What\'s the difference between a lender\'s bundled repayment protection and a standalone policy?',
        answer: 'Lender-bundled repayment protection (offered by banks at loan drawdown) is often simpler, with fewer features and sometimes higher cost per dollar of cover. Standalone policies from specialist insurers tend to offer better definitions, more flexibility, and more comprehensive terms. Always compare before accepting a lender\'s bundled offering.',
      },
    ],
    author: { name: 'Sarah Mitchell', title: 'Senior Insurance Analyst' },
    datePublished: '2026-05-01',
    dateModified: '2026-05-22',
  },
];
