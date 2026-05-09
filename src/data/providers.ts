export interface Provider {
  slug: string;
  name: string;
  logo: string;
  category: 'life-insurer' | 'vehicle-finance' | 'general';
  description: string;
  website: string;
  established: string;
  financialStrength: string;
  coverTypes: string[];
  maxBenefit: string;
  waitingPeriods: string;
  benefitPeriods: string;
  keyFeatures: string[];
  bestFor: string;
  rating: number;
  nzOwned: boolean;
}

export const providers: Provider[] = [
  {
    slug: 'aia',
    name: 'AIA New Zealand',
    logo: '/images/providers/aia.svg',
    category: 'life-insurer',
    description:
      'AIA has been providing insurance to New Zealanders since 1981. Their Mortgage, Income or Rent Cover pays a monthly benefit if you cannot work due to illness or injury.',
    website: 'https://www.aia.co.nz',
    established: '1981',
    financialStrength: 'AA- (Very Strong)',
    coverTypes: ['Mortgage repayment', 'Income protection', 'Rent cover', 'Redundancy (optional)'],
    maxBenefit: 'Up to $20,000/month or 115% of mortgage repayments',
    waitingPeriods: '4, 8, 13, 26, 52 or 104 weeks',
    benefitPeriods: '2 years, 5 years, to age 65 or 70',
    keyFeatures: [
      'Up to 115% of mortgage or rent payments',
      'No ACC/WINZ offset on first $7,500',
      'AIA Vitality wellness programme included',
      'Flexible waiting period options',
      'Available through advisers nationwide',
    ],
    bestFor: 'Homeowners wanting comprehensive mortgage protection with wellness benefits',
    rating: 4.5,
    nzOwned: false,
  },
  {
    slug: 'partners-life',
    name: 'Partners Life',
    logo: '/images/providers/partners-life.svg',
    category: 'life-insurer',
    description:
      'Partners Life offers Mortgage Repayment Cover providing a financial safety net if you are disabled due to sickness or injury and unable to meet your mortgage repayments.',
    website: 'https://www.partnerslife.co.nz',
    established: '2011',
    financialStrength: 'A (Strong)',
    coverTypes: ['Mortgage repayment', 'Total disability', 'Partial disability', 'Redundancy (optional)'],
    maxBenefit: 'Up to 115% of mortgage repayments',
    waitingPeriods: '4 to 104 weeks (flexible)',
    benefitPeriods: '2 years, 5 years, or to age 65',
    keyFeatures: [
      'Daily benefit rate (1/30th of monthly sum)',
      'Paid from first night of hospitalisation',
      'Waiting period reduction without health reassessment',
      'Benefits paid monthly in advance',
      'Strong claims support reputation',
    ],
    bestFor: 'Those wanting flexible waiting periods and strong claims support',
    rating: 4.5,
    nzOwned: true,
  },
  {
    slug: 'fidelity-life',
    name: 'Fidelity Life',
    logo: '/images/providers/fidelity-life.svg',
    category: 'life-insurer',
    description:
      "Fidelity Life is NZ's largest locally owned and operated life insurer, established in 1973. They offer Monthly Mortgage Repayment Cover with comprehensive rehabilitation benefits.",
    website: 'https://www.fidelitylife.co.nz',
    established: '1973',
    financialStrength: 'A- (Strong)',
    coverTypes: ['Mortgage repayment', 'Rent cover', 'Rehabilitation benefits'],
    maxBenefit: 'Up to $30,000/month or 115% of mortgage repayments',
    waitingPeriods: '2, 4, 8, 13, 26, 52 or 104 weeks',
    benefitPeriods: '2 years, 5 years, or to age 65',
    keyFeatures: [
      'Highest max benefit ($30,000/month)',
      'Shortest waiting period option (2 weeks)',
      'Rehabilitation and retraining benefits included',
      'Flexible payment frequency options',
      'Over $1.1 billion in claims paid',
    ],
    bestFor: 'Those who value NZ-owned insurers with generous benefit limits',
    rating: 4.3,
    nzOwned: true,
  },
  {
    slug: 'asteron-life',
    name: 'Asteron Life',
    logo: '/images/providers/asteron-life.svg',
    category: 'life-insurer',
    description:
      "Asteron Life's Mortgage & Living Cover provides regular payments if you're unable to work due to sickness or injury, covering up to 115% of your monthly mortgage repayments.",
    website: 'https://www.asteronlife.co.nz',
    established: '1988',
    financialStrength: 'AA- (Very Strong)',
    coverTypes: ['Mortgage repayment', 'Living expenses', 'Specified injury cover'],
    maxBenefit: 'Up to 115% of monthly mortgage repayments',
    waitingPeriods: '30 to 90 days (shorter and longer available)',
    benefitPeriods: '2 years, 5 years, or to age 65',
    keyFeatures: [
      'Annual cover increase up to 10% without medical underwriting',
      '29 specified injuries covered (even if still working)',
      'Mental illness benefit option with premium discount',
      'Rehabilitation and retraining support',
      'Part of Suncorp Group',
    ],
    bestFor: 'Those wanting injury-specific cover and annual increases without reassessment',
    rating: 4.2,
    nzOwned: false,
  },
  {
    slug: 'chubb-life',
    name: 'Chubb Life',
    logo: '/images/providers/chubb-life.svg',
    category: 'life-insurer',
    description:
      'Chubb Life offers Assurance Extra Mortgage Repayment Cover with vocational retraining benefits and strong international financial backing.',
    website: 'https://www.chubb.com/nz-en',
    established: '1996',
    financialStrength: 'A (Excellent)',
    coverTypes: ['Mortgage repayment', 'Vocational retraining', 'Rehabilitation'],
    maxBenefit: 'Up to 115% of mortgage repayments or 45% of gross income',
    waitingPeriods: 'Selected at application',
    benefitPeriods: 'To age 55',
    keyFeatures: [
      'Vocational retraining programme included',
      'Rehabilitation programme support',
      'Waiting period waiver on disability return within 12 months',
      'Backed by global Chubb group',
      'Available through adviser network',
    ],
    bestFor: 'Those who want rehabilitation-focused cover with global insurer backing',
    rating: 4.0,
    nzOwned: false,
  },
  {
    slug: 'autosure',
    name: 'Autosure',
    logo: '/images/providers/autosure.svg',
    category: 'vehicle-finance',
    description:
      'Autosure specialises in vehicle finance protection, combining GAP and payment protection in a single Loan Protection Insurance policy for car loans.',
    website: 'https://autosure.co.nz',
    established: '2002',
    financialStrength: 'Not rated (specialist underwriter)',
    coverTypes: ['Car loan protection', 'GAP insurance', 'Payment protection', 'Redundancy cover'],
    maxBenefit: 'Covers full loan repayments on vehicle finance',
    waitingPeriods: '30-day free look period; redundancy requires 90 days employment',
    benefitPeriods: 'Duration of vehicle loan',
    keyFeatures: [
      'Combined GAP + payment protection in one policy',
      'Covers employed, self-employed, and retired',
      'Insurance excess reimbursement',
      'Transport and replacement vehicle costs',
      '30-day free look period with full refund',
    ],
    bestFor: 'Car buyers wanting combined GAP and loan repayment protection',
    rating: 4.1,
    nzOwned: true,
  },
  {
    slug: 'provident',
    name: 'Provident Insurance',
    logo: '/images/providers/provident.svg',
    category: 'vehicle-finance',
    description:
      'Provident Insurance offers CreditCare Insurance covering regular loan repayments during unexpected events like accidents, illness, hospitalisation, redundancy, or death.',
    website: 'https://www.providentinsurance.co.nz',
    established: '2001',
    financialStrength: 'Not rated (specialist underwriter)',
    coverTypes: ['Death cover', 'Accident & illness', 'Hospitalisation', 'Bankruptcy protection', 'Income disruption'],
    maxBenefit: 'Covers loan repayments (varies by cover option)',
    waitingPeriods: '14-day cooling off period',
    benefitPeriods: 'Duration of loan term',
    keyFeatures: [
      'Three cover option tiers (basic to comprehensive)',
      'Single, joint, or double cover available',
      'Premium can be added to loan balance',
      'Covers personal loans and vehicle finance',
      'Formerly First Insurance Limited policies',
    ],
    bestFor: 'Personal loan and vehicle finance borrowers wanting flexible tier options',
    rating: 3.9,
    nzOwned: true,
  },
  {
    slug: 'aa-life',
    name: 'AA Life Insurance',
    logo: '/images/providers/aa-life.svg',
    category: 'general',
    description:
      'AA Life Insurance offers Life Cover with lump sum payouts up to $1 million, helping cover mortgage repayments, living costs, and leaving a legacy for your family.',
    website: 'https://www.aa.co.nz/insurance/life-insurance/',
    established: '2018',
    financialStrength: 'A+ (Strong)',
    coverTypes: ['Life cover (lump sum)', 'Terminal illness', 'Funeral costs advance'],
    maxBenefit: 'Up to $1,000,000 lump sum payout',
    waitingPeriods: 'No waiting period (lump sum on event)',
    benefitPeriods: 'One-off lump sum payment',
    keyFeatures: [
      'Tax-free lump sum up to $1 million',
      'Up to $15,000 early funeral costs advance',
      'AA Connected Care virtual health service included',
      'Easy online application (ages 16-59)',
      'Trusted AA brand',
    ],
    bestFor: 'Those wanting a simple lump sum to clear their mortgage on death or terminal illness',
    rating: 4.0,
    nzOwned: true,
  },
];
