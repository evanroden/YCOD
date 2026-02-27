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
  {
    name: 'Donate Life New York State',
    description: 'The official state organization promoting organ and tissue donation. YCOD received their public statement of support and endorsement.',
    color: 'bg-ycod-pink',
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
    description: 'We work to build healthier communities by encouraging families to have conversations about organ donation. 66% of organ donations typically go to family members — this is personal for everyone. We support community engagement initiatives that bring people together around this life-saving cause.',
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
    stat: '~37%→50%',
    title: 'NY Registration Rate Rising',
    description: 'New York was ranked among the lowest states for donor signups. As of October 2024, NY just crossed 50% registration for the first time.',
    icon: '📈',
    color: 'bg-ycod-green',
  },
  {
    stat: '90%',
    title: 'Support vs. Action Gap',
    description: '90% of US adults support organ donation, but only 60% are actually registered. A simple default change could close this gap.',
    icon: '🤔',
    color: 'bg-ycod-pink',
  },
  {
    stat: '8+75',
    title: 'One Donor, Many Lives',
    description: 'A single organ donor can save up to 8 lives through organ transplants and heal 75 or more people through tissue donation.',
    icon: '💪',
    color: 'bg-ycod-blue',
  },
  {
    stat: '0',
    title: 'Religions That Oppose Donation',
    description: 'No major religion in the US or abroad opposes organ donation after death. Every major faith supports this life-saving act.',
    icon: '🕊️',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '4+',
    title: 'Countries With Opt-Out Systems',
    description: 'Spain, the UK, Austria, and France already use opt-out organ donation systems — and they have significantly higher registration rates.',
    icon: '🌍',
    color: 'bg-ycod-coral',
  },
  {
    stat: '17',
    title: 'Lives Lost Daily',
    description: '17 people die every single day waiting for an organ transplant. That\'s one person every 85 minutes.',
    icon: '⏰',
    color: 'bg-ycod-pink',
  },
  {
    stat: '103,000+',
    title: 'National Waitlist',
    description: 'Over 103,000 people are currently on the national transplant waiting list, hoping for a second chance at life.',
    icon: '📋',
    color: 'bg-ycod-green',
  },
  {
    stat: '8,000',
    title: 'New Yorkers Waiting',
    description: 'Approximately 8,000 New Yorkers are waiting for organ transplants right now. These are our neighbors, friends, and family.',
    icon: '🗽',
    color: 'bg-ycod-blue',
  },
  {
    stat: '66%',
    title: 'Donations to Family',
    description: '66% of organ donations typically go to family members. Registering as a donor is one of the most personal gifts you can give.',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-ycod-yellow',
  },
  {
    stat: '95',
    title: 'Never Too Old',
    description: 'You\'re never too old to be an organ donor. One of the oldest organ donors on record was 95 years old.',
    icon: '🎂',
    color: 'bg-ycod-coral',
  },
] as const;

export const QUIZ_QUESTIONS = [
  {
    question: 'How many people are currently on the national transplant waiting list?',
    options: ['About 50,000', 'About 75,000', 'Over 103,000', 'About 200,000'],
    correctIndex: 2,
    explanation: 'Over 103,000 people are currently waiting for a life-saving organ transplant in the United States.',
  },
  {
    question: 'How many lives can a single organ donor save?',
    options: ['1 life', 'Up to 3 lives', 'Up to 8 lives', 'Up to 15 lives'],
    correctIndex: 2,
    explanation: 'One organ donor can save up to 8 lives through organ transplants and heal 75+ more through tissue donation!',
  },
  {
    question: 'What percentage of US adults support organ donation?',
    options: ['About 50%', 'About 70%', 'About 80%', 'About 90%'],
    correctIndex: 3,
    explanation: '90% of US adults support organ donation, but only about 60% are actually registered — that\'s the gap we\'re working to close.',
  },
  {
    question: 'Which of these countries uses an opt-out organ donation system?',
    options: ['Canada', 'Spain', 'Japan', 'Australia'],
    correctIndex: 1,
    explanation: 'Spain uses an opt-out system and has one of the highest organ donation rates in the world. The UK, Austria, and France also use opt-out systems.',
  },
  {
    question: 'How many people die each day waiting for an organ transplant?',
    options: ['5 people', '10 people', '17 people', '25 people'],
    correctIndex: 2,
    explanation: '17 people die every single day waiting for a transplant — that\'s one person every 85 minutes.',
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

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/facts', label: 'Facts' },
  { href: '/tedx', label: 'TEDx' },
  { href: '/partners', label: 'Partners' },
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
