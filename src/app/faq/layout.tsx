import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to 25 common questions about organ donation, opt-out systems, Bill A07954, and YCOD. Learn how you can help save lives through donor registration.',
  openGraph: {
    title: 'FAQ — Organ Donation Questions Answered',
    description:
      'Find answers to common questions about organ donation, opt-out systems, Bill A07954, and how YCOD is saving lives.',
    url: 'https://www.ycod.org/faq',
  },
  alternates: {
    canonical: '/faq',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is organ donation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organ donation is the process of surgically removing an organ or tissue from one person (the donor) and transplanting it into another person (the recipient) who needs a functioning organ to survive or improve their quality of life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an opt-out organ donation system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In an opt-out system (also called "presumed consent"), all adults are automatically registered as organ donors unless they explicitly choose to opt out. This is the opposite of the current opt-in system, where you must actively register to become a donor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does opt-out mean people are forced to donate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Opt-out does NOT mean forced donation. Anyone can choose to opt out at any time, for any reason, with no questions asked. The only difference is that the default setting helps save lives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Bill A07954?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bill A07954 is legislation drafted by YCOD and introduced in the New York State Assembly. It would change the organ donation question at the DMV from opt-in to opt-out, meaning applicants would be registered as donors unless they choose to skip the question.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I register as an organ donor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest way is to text REGISTER to 57838. Through our partnership with ONE8FIFTY, you can join the organ donor registry in about 30 seconds. You can also register at your local DMV or through your state\u0027s online donor registry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an age limit for organ donation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. There is no age limit for organ donation. People of all ages can be donors. The oldest organ donor on record was 95 years old.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my religion support organ donation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. No major world religion opposes organ donation. Christianity, Judaism, Islam, Hinduism, Buddhism, Sikhism, and other faiths all view organ donation as an act of compassion.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many countries use opt-out systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 30 countries use opt-out organ donation, including Spain, France, the United Kingdom, Austria, the Netherlands, Belgium, Argentina, Chile, Singapore, and Colombia.',
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
