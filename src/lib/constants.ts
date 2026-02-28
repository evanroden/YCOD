export const BRAND_COLORS = [
  '#F5A0B8', // pink
  '#4A90D9', // blue
  '#F7DC6F', // yellow
  '#F07070', // coral
  '#00C9A7', // green
] as const;

export const STATS = [
  { target: 103000, suffix: '+', label: 'People waiting for transplants', color: 'bg-ycod-pink' },
  { target: 8000, suffix: '', label: 'New Yorkers on the waitlist', color: 'bg-ycod-blue' },
  { target: 17, suffix: '', label: 'People who die waiting each day', color: 'bg-ycod-yellow' },
  { target: 8, suffix: '', label: 'Lives one donor can save', color: 'bg-ycod-coral' },
] as const;

export const TEAM = [
  {
    name: 'Evan Roden',
    role: 'Founder',
    bio: 'Biomedical Engineering graduate from Tulane University, TEDx speaker, and Sustainability Engineer at ENFRA. Evan founded YCOD after a family member needed a kidney transplant.',
    image: '/images/evan-portrait.webp',
    color: 'bg-ycod-pink',
  },
  {
    name: 'Henry McLaughlin',
    role: 'Co-Founder',
    bio: '"I think New Yorkers can put their differences aside and realize saving someone\'s life is really the most important thing you can do."',
    image: '/images/henry-portrait.png',
    color: 'bg-ycod-blue',
  },
  {
    name: 'Grace Tapani',
    role: 'Co-Founder',
    bio: 'One of the four East Aurora High School students who recognized the urgent need for organ donation reform in New York State.',
    image: null,
    color: 'bg-ycod-yellow',
  },
  {
    name: 'Sage Sellers',
    role: 'Co-Founder',
    bio: 'Helped build YCOD from a school club initiative into a multinational movement with over 3,000 members.',
    image: null,
    color: 'bg-ycod-coral',
  },
] as const;

export const PARTNERS = [
  {
    name: 'WaitList Zero',
    description: 'Founded by living kidney donors, devoted to ending the organ transplant waiting list through policy reform and public education.',
    color: 'bg-ycod-pink',
  },
  {
    name: 'ONE8FIFTY',
    description: 'Free texting registration system — text "register" to 57838 to join the organ donor registry instantly.',
    color: 'bg-ycod-blue',
  },
  {
    name: 'Chris Klug Foundation',
    description: 'Founded by Olympic bronze medalist and organ transplant recipient Chris Klug, promoting organ donation and healthy post-transplant lifestyles.',
    color: 'bg-ycod-yellow',
  },
  {
    name: 'American Red Cross, WNY Region',
    description: 'Spanning 27 counties and 3 chapters across Western New York, supporting communities through blood drives, disaster relief, and health programs.',
    color: 'bg-ycod-coral',
  },
  {
    name: 'NY State Council of Churches',
    description: 'Comprised of 8 partner denominations, supporting organ donation advocacy through faith-based communities across New York State.',
    color: 'bg-ycod-green',
  },
] as const;

export const INITIATIVES = [
  {
    title: 'Opt-Out Organ Donation',
    icon: '📋',
    color: 'bg-ycod-pink',
    summary: 'Change the default at the DMV from opt-in to opt-out for organ donation.',
    description: 'Our flagship legislative campaign aims to change New York\'s DMV default from opt-in to opt-out for organ donation registration. This behavioral-economics-driven approach has been proven to dramatically increase donor registration rates in countries like Spain, the UK, Austria, and France. We drafted and proposed Bill A07954 in 2019 with an updated version in 2021.',
  },
  {
    title: 'Nonpartisan Politics',
    icon: '🤝',
    color: 'bg-ycod-blue',
    summary: 'Keeping the message open to everyone regardless of political beliefs.',
    description: 'Organ donation transcends political divides. Our nonpartisan approach ensures that everyone — regardless of political affiliation — can join in supporting life-saving legislation. When it comes to saving lives, we believe New Yorkers can put their differences aside.',
  },
  {
    title: 'Youth Education',
    icon: '🎓',
    color: 'bg-ycod-yellow',
    summary: 'Including the next generation through school curriculum advocacy.',
    description: 'We advocate for organ donation education in school curricula and support youth leadership programs like Donate Life Clubs. By empowering young people with knowledge, we\'re building a generation of informed advocates who understand the importance of organ donation.',
  },
  {
    title: 'Healthier Communities',
    icon: '❤️',
    color: 'bg-ycod-coral',
    summary: 'Encouraging communities to support those in need of transplants.',
    description: 'We work to build healthier communities by encouraging families to have conversations about organ donation. 66% of living organ donors give to a family member — this is deeply personal for everyone. We support community engagement initiatives that bring people together around this life-saving cause.',
  },
  {
    title: 'Informational Campaign',
    icon: '📢',
    color: 'bg-ycod-green',
    summary: 'Public awareness and education about organ donation facts.',
    description: 'Through media campaigns, social media outreach, and partnerships with organizations like ONE8FIFTY, we spread the facts about organ donation. 90% of US adults support organ donation, but only 60% are registered — we\'re closing that gap through education and awareness.',
  },
] as const;

export const FACTS = [
  {
    stat: '17',
    title: 'Lives Lost Every Day',
    description: '17 people die every single day waiting for an organ transplant. That\'s one person every 85 minutes — and every one of them had someone who loved them.',
    icon: '⏰',
    color: 'bg-ycod-coral',
  },
  {
    stat: '103,000+',
    title: 'People on the Waitlist Right Now',
    description: 'Over 103,000 Americans are waiting for a life-saving organ transplant at this very moment. The list grows faster than donors can keep up.',
    icon: '📋',
    color: 'bg-ycod-green',
  },
  {
    stat: '8,000',
    title: 'New Yorkers Waiting',
    description: 'Roughly 8,000 of your neighbors, coworkers, and classmates across New York State are on the transplant waitlist. This is local.',
    icon: '🗽',
    color: 'bg-ycod-blue',
  },
  {
    stat: '8 + 75',
    title: 'One Donor, Many Lives',
    description: 'A single organ donor can save up to 8 lives through transplants — and heal 75 or more people through tissue donation. One decision, dozens of futures.',
    icon: '💪',
    color: 'bg-ycod-pink',
  },
  {
    stat: '90%',
    title: 'The Support-Action Gap',
    description: '90% of US adults say they support organ donation — but only about 60% are actually registered. That 30-point gap costs lives. A simple default change could close it.',
    icon: '🤔',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '~42%',
    title: 'New York\'s Registration Problem',
    description: 'New York has historically ranked near the bottom nationally for donor registration. The rate has been climbing — crossing 50% in late 2024 — but there\'s still a long way to go.',
    icon: '📈',
    color: 'bg-ycod-green',
  },
  {
    stat: '30+',
    title: 'Countries With Opt-Out Systems',
    description: 'Over 30 countries — including Spain, the UK, France, Austria, the Netherlands, Argentina, Chile, and Singapore — already use opt-out organ donation. It\'s not radical. It\'s the global standard.',
    icon: '🌍',
    color: 'bg-ycod-coral',
  },
  {
    stat: '85%',
    title: 'The Kidney Crisis',
    description: '85% of people on the national transplant waitlist need a kidney. Kidneys are by far the most needed organ — and the wait can stretch five years or more.',
    icon: '🫘',
    color: 'bg-ycod-blue',
  },
  {
    stat: '66%',
    title: 'Living Donors Give to Family',
    description: '66% of living organ donors give to a family member. When you register, you\'re not helping a stranger in the abstract — you may be protecting someone you love.',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-ycod-pink',
  },
  {
    stat: '0',
    title: 'Religions That Oppose Donation',
    description: 'Zero. No major world religion — Christian, Jewish, Muslim, Hindu, Buddhist, Sikh, or otherwise — opposes organ donation after death. Faith leaders across the board call it an act of compassion.',
    icon: '🕊️',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '80%+',
    title: 'Youth Are Ready to Act',
    description: 'Young Americans are more civically engaged than any generation in 50 years. Over 80% of Gen Z say they support organ donation — they just need a clear path to register.',
    icon: '🔥',
    color: 'bg-ycod-green',
  },
  {
    stat: '95',
    title: 'Never Too Old to Save a Life',
    description: 'Cecil Lockhart became an organ donor at age 95 — the oldest on record. There is no age limit. If you have a healthy organ, you can be someone\'s miracle.',
    icon: '🎂',
    color: 'bg-ycod-coral',
  },
  {
    stat: '3-5 yrs',
    title: 'Average Kidney Wait Time',
    description: 'The median wait time for a kidney transplant is 3 to 5 years, but it varies dramatically by geography and blood type. Some patients wait 7 to 10 years — or longer — before receiving the call that saves their life.',
    icon: '⌛',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '46.3',
    title: 'Spain\'s Donation Rate',
    description: 'Spain leads the world in organ donation at 46.3 donors per million people. The United States sits at roughly 17 per million. Spain\'s opt-out system, combined with dedicated transplant coordinators in every hospital, is the gold standard.',
    icon: '🇪🇸',
    color: 'bg-ycod-green',
  },
  {
    stat: '6,900+',
    title: 'Living Donors in 2023',
    description: '2023 was a record-breaking year for living organ donation in the United States, with over 6,900 living donors giving the gift of life — proof that more people than ever are stepping up when it matters most.',
    icon: '🌟',
    color: 'bg-ycod-pink',
  },
  {
    stat: '$500B+',
    title: 'Annual Cost of Kidney Disease',
    description: 'Kidney disease costs the US healthcare system over $500 billion annually, including dialysis treatments that can run $90,000 or more per patient per year. Transplants are not just life-saving — they are far more cost-effective than a lifetime of dialysis.',
    icon: '💰',
    color: 'bg-ycod-coral',
  },
  {
    stat: '58%',
    title: 'Registered But Not Enough',
    description: 'About 58% of Americans are registered organ donors — a number that has grown steadily. But that still leaves tens of millions of eligible adults unregistered, and every missing registration is a potential life left unsaved.',
    icon: '📝',
    color: 'bg-ycod-blue',
  },
  {
    stat: '1M+',
    title: 'One Millionth Transplant',
    description: 'In September 2023, the United States reached an extraordinary milestone: one million organ transplants performed since record-keeping began in 1988. A testament to donors, families, surgeons, and the power of saying yes.',
    icon: '🏆',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '36 hrs',
    title: 'Window for Organ Recovery',
    description: 'Time is everything in organ transplantation. Most organs must be transplanted within 4 to 36 hours of recovery. Hearts and lungs last only 4 to 6 hours outside the body, while kidneys can survive up to 36 hours. Every minute counts.',
    icon: '⏱️',
    color: 'bg-ycod-green',
  },
  {
    stat: '2x',
    title: 'Minority Communities Hit Harder',
    description: 'Black, Hispanic, and Native American communities are disproportionately affected by kidney disease and face longer wait times for transplants. Black Americans are nearly twice as likely to develop kidney failure but less likely to receive a transplant. Equity in donation and access is a civil rights issue.',
    icon: '⚖️',
    color: 'bg-ycod-coral',
  },
] as const;

export const QUIZ_QUESTIONS = [
  {
    question: 'How many people are on the national transplant waiting list right now?',
    options: ['About 50,000', 'About 75,000', 'Over 103,000', 'About 200,000'],
    correctIndex: 2,
    explanation: 'Over 103,000 Americans are waiting for a life-saving organ transplant — and the list grows every day.',
  },
  {
    question: 'How many lives can a single organ donor save?',
    options: ['1 life', 'Up to 3 lives', 'Up to 8 lives', 'Up to 15 lives'],
    correctIndex: 2,
    explanation: 'One organ donor can save up to 8 lives through transplants and heal 75+ more through tissue donation. One person, dozens of futures.',
  },
  {
    question: 'What percentage of US adults support organ donation?',
    options: ['About 50%', 'About 70%', 'About 80%', 'About 90%'],
    correctIndex: 3,
    explanation: '90% of Americans support organ donation — but only 60% are registered. That 30-point gap is the problem we\'re solving.',
  },
  {
    question: 'How many countries use an opt-out organ donation system?',
    options: ['4 countries', 'About 15', 'Over 30', 'Over 100'],
    correctIndex: 2,
    explanation: 'Over 30 countries use opt-out donation, including Spain, the UK, France, Austria, the Netherlands, Argentina, Chile, and Singapore. It\'s the global standard.',
  },
  {
    question: 'How many people die each day waiting for an organ transplant?',
    options: ['5 people', '10 people', '17 people', '25 people'],
    correctIndex: 2,
    explanation: '17 people die every single day waiting for a transplant — one person every 85 minutes. Registration saves lives.',
  },
  {
    question: 'What is the most commonly transplanted organ?',
    options: ['Heart', 'Liver', 'Kidney', 'Lung'],
    correctIndex: 2,
    explanation: 'Kidneys are by far the most commonly transplanted organ — they make up about 85% of the national transplant waitlist. The demand for kidneys far outpaces every other organ combined.',
  },
  {
    question: 'Which country has the highest organ donation rate?',
    options: ['United States', 'Spain', 'United Kingdom', 'France'],
    correctIndex: 1,
    explanation: 'Spain leads the world with 46.3 donors per million people, thanks to its opt-out system and dedicated transplant coordinators in every hospital. The US rate is roughly 17 per million.',
  },
  {
    question: 'What is the youngest age requirement to be an organ donor?',
    options: ['Must be 18+', 'Must be 16+', 'Must be 12+', 'There is no minimum age'],
    correctIndex: 3,
    explanation: 'There is no minimum age to be an organ donor. People of all ages can donate, and for minors, parental or guardian consent is required. Even newborns have been organ donors.',
  },
  {
    question: 'How long can a donated kidney survive outside the body?',
    options: ['About 4 hours', 'Up to 24 hours', 'Up to 36 hours', 'Up to 72 hours'],
    correctIndex: 2,
    explanation: 'A donated kidney can survive up to 36 hours outside the body through cold ischemia time — the period when the organ is preserved on ice. Hearts and lungs, by contrast, last only 4 to 6 hours.',
  },
  {
    question: 'What percentage of living organ donors are family members?',
    options: ['25%', '50%', '66%', '90%'],
    correctIndex: 2,
    explanation: 'About 66% of living organ donors give to a family member. Organ donation is deeply personal — most people are motivated to donate by a direct connection to someone they love.',
  },
] as const;

export const TIMELINE_EVENTS = [
  { year: '2017', title: 'YCOD is Founded', description: 'After Evan\'s family member needs a kidney transplant, four East Aurora High School students found the Youth Coalition for Organ Donation.' },
  { year: '2017', title: 'Joined Donate Life Club', description: 'The founders join their school\'s Donate Life Club and discover that New York has one of the lowest donor registration rates in the country at just 37%.' },
  { year: '2018', title: 'Growing the Movement', description: 'YCOD begins building a coalition of young people across New York State, reaching hundreds of supporters.' },
  { year: '2019', title: 'Bill A07954 Drafted', description: 'YCOD drafts and proposes actual legislation — Bill A07954 — to change the DMV default from opt-in to opt-out for organ donation.' },
  { year: '2020', title: 'Partnership Expansion', description: 'Key partnerships formed with WaitList Zero, ONE8FIFTY, Chris Klug Foundation, American Red Cross WNY, and NY State Council of Churches.' },
  { year: '2021', title: 'Red Cross Nomination', description: 'YCOD is nominated for the American Red Cross Real Heroes Education Award. Updated draft legislation is prepared.' },
  { year: '2022', title: 'TEDx Talk', description: 'Evan Roden delivers a TEDx talk on youth political engagement and organ donation, reaching thousands of viewers.' },
  { year: '2023', title: '3,000+ Members', description: 'The movement grows to over 3,000 members from across the United States and around the world.' },
  { year: '2024', title: 'NY Crosses 50%', description: 'A milestone moment: New York State crosses 50% organ donor registration for the first time in October 2024.' },
] as const;

export type NavItem = {
  href: string;
  label: string;
  i18nKey: string;
  children?: readonly { href: string; label: string; i18nKey: string }[];
};

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/about', label: 'About', i18nKey: 'nav.about' },
  { href: '/bill', label: 'The Bill', i18nKey: 'nav.bill' },
  {
    href: '#', label: 'Learn', i18nKey: 'nav.learn',
    children: [
      { href: '/facts', label: 'Facts', i18nKey: 'nav.facts' },
      { href: '/faq', label: 'FAQ', i18nKey: 'nav.faq' },
      { href: '/resources', label: 'Resources', i18nKey: 'nav.resources' },
      { href: '/glossary', label: 'Glossary', i18nKey: 'nav.glossary' },
    ],
  },
  {
    href: '#', label: 'Media', i18nKey: 'nav.media',
    children: [
      { href: '/blog', label: 'News', i18nKey: 'nav.news' },
      { href: '/coverage', label: 'Press', i18nKey: 'nav.coverage' },
      { href: '/tedx', label: 'TEDx', i18nKey: 'nav.tedx' },
    ],
  },
  {
    href: '#', label: 'Get Involved', i18nKey: 'nav.getInvolved',
    children: [
      { href: '/initiatives', label: 'Initiatives', i18nKey: 'nav.initiatives' },
      { href: '/partners', label: 'Partners', i18nKey: 'nav.partners' },
      { href: '/stories', label: 'Stories', i18nKey: 'nav.stories' },
      { href: '/contact', label: 'Contact', i18nKey: 'nav.contact' },
    ],
  },
] as const;

// Flat list for backwards compat (footer, etc.)
export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/facts', label: 'Facts' },
  { href: '/bill', label: 'The Bill' },
  { href: '/blog', label: 'News' },
  { href: '/coverage', label: 'Press' },
  { href: '/tedx', label: 'TEDx' },
  { href: '/partners', label: 'Partners' },
  { href: '/faq', label: 'FAQ' },
  { href: '/resources', label: 'Resources' },
  { href: '/stories', label: 'Stories' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/contact', label: 'Contact' },
] as const;

export const BILL_TEXT = `AN ACT to amend the vehicle and traffic law, in relation to organ and tissue donation

THE PEOPLE OF THE STATE OF NEW YORK, REPRESENTED IN SENATE AND ASSEMBLY, DO ENACT AS FOLLOWS:

Section 1. Subdivision 2 of section 504 of the vehicle and traffic law is amended to read as follows:

2. Application for a license or renewal thereof shall be made in such form as the commissioner shall require, and shall include the following:

(a) Such proof of identity, age and fitness as the commissioner may require;

(b) A question or statement regarding organ and tissue donation worded substantially as follows: "Would you like to be an organ and tissue donor?" Unless an applicant responds that he or she wishes to skip this question, the applicant will be deemed to have consented to organ and tissue donation upon death.

The commissioner shall notify each applicant who is deemed to have consented to organ and tissue donation by mail, at the address provided on the application, that the applicant has been registered as an organ and tissue donor, and that the applicant may opt out of organ and tissue donation at any time by notifying the commissioner in writing.

Section 2. This act shall take effect on the one hundred eightieth day after it shall have become a law.

SAFEGUARDS:
- Applies only to DMV license/renewal applications
- Applicants see a consent question first
- Can skip the question to opt out
- Commissioner sends written notification
- Opt-out available at any time by written notice
- Does not apply to anyone under 18 years of age`;
