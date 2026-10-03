export const site = {
  name: 'Dear You Counseling',
  therapist: 'Sara Antoine',
  credential: 'Registered Clinical Social Work Intern (RCSWI)',
  tagline: 'Culturally sensitive, faith-informed online therapy for young adults and adults across Florida.',
  serviceArea: 'Providing secure online therapy to clients located anywhere in Florida.',
  telehealthNote: 'Sessions are held by secure video for clients located in Florida.',
  supervisionNote:
    'Sara Antoine practices as a pre-licensed Registered Clinical Social Work Intern under the clinical supervision of a Florida Licensed Clinical Social Worker, in accordance with Florida Board requirements.',
  psychologyTodayUrl: 'https://www.psychologytoday.com/us/therapists/sara-antoine-wesley-chapel-fl/1562065',
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Rates & Insurance' },
  { href: '/contact', label: 'Contact' },
]

export const specialties = [
  {
    title: 'Anxiety',
    href: '/anxiety-therapy',
    description:
      'Quiet the racing thoughts and constant worry. Together we build practical tools to help you feel grounded and more at ease in your everyday life.',
  },
  {
    title: 'Depression',
    href: '/depression-therapy',
    description:
      'When everything feels heavy, you do not have to carry it alone. We gently work toward renewed energy, hope, and a sense of meaning.',
  },
  {
    title: 'Trauma',
    href: '/trauma-therapy',
    description:
      'Healing happens at your pace. With trauma-informed care, we create a safe space to process painful experiences and restore a sense of safety.',
  },
  {
    title: 'Life Transitions',
    href: '/life-transitions',
    description:
      'College, new careers, relocation, loss, or becoming a parent. Navigate seasons of change with clarity, resilience, and support.',
  },
  {
    title: 'Relationship Challenges',
    href: '/services#relationship-challenges',
    description:
      'Explore patterns in family, friendships, and romantic relationships so you can communicate openly, set healthy boundaries, and connect more deeply.',
  },
]

export const approaches = [
  {
    title: 'Cognitive Behavioral Therapy',
    short: 'CBT',
    description:
      'Identify and reshape unhelpful thought patterns and behaviors, giving you concrete skills you can use long after our sessions end.',
  },
  {
    title: 'Strengths-Based Therapy',
    short: 'Strengths',
    description:
      'Rather than focusing only on what feels broken, we uncover and build on the resilience, gifts, and wisdom you already carry.',
  },
  {
    title: 'Trauma-Informed Care',
    short: 'Trauma-Informed',
    description:
      'Every session prioritizes safety, trust, choice, and collaboration, honoring how past experiences shape the present.',
  },
]

export const populations = [
  {
    title: 'Young Adults',
    description:
      'Guidance through the milestones of early adulthood, from independence and career choices to relationships and self-discovery.',
  },
  {
    title: 'Adults',
    description:
      'Care for the demands of work, family, faith, and personal growth, wherever you are in your journey.',
  },
]

export const sessionRates = [
  {
    name: 'Initial Consultation',
    duration: '15 minutes',
    price: 'Free',
    description: 'A brief phone or video call to see if we are a good fit and answer any questions.',
  },
  {
    name: 'Intake Assessment',
    duration: '60 minutes',
    price: '$150',
    description: 'Your first full session, where we explore your history, needs, and goals.',
    featured: true,
  },
  {
    name: 'Individual Session',
    duration: '50 minutes',
    price: '$120',
    description: 'Ongoing individual therapy tailored to your unique pace and needs.',
  },
]

export const insurances = ['Aetna', 'Cigna']
