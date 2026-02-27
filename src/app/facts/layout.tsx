import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Facts',
  description:
    'The numbers behind the organ donation crisis: 103,000+ people waiting, 17 deaths per day, and why opt-out saves lives. Explore charts, bust myths, and test your knowledge.',
  openGraph: {
    title: 'Organ Donation Fast Facts',
    description:
      'The numbers that drive our mission. Share these — they save lives.',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will doctors not try as hard to save me if I\\u0027m a registered organ donor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your medical team\\u0027s only job is to save YOUR life. Organ donation is only considered after all life-saving measures have been exhausted and death is declared by a completely separate team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am I too old to be an organ donor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no age limit for organ donation. Cecil Lockhart donated organs at age 95. Medical suitability is determined at the time of death, not by your birthday.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my religion oppose organ donation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No major world religion opposes organ donation. Christianity, Judaism, Islam, Hinduism, Buddhism, and Sikhism all support it as an act of compassion and generosity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I still have an open-casket funeral if I donate organs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organ and tissue recovery is performed by skilled surgeons in a sterile operating room. The body is treated with dignity and respect, and an open-casket funeral is absolutely possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do rich or famous people get organs faster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The organ allocation system (managed by UNOS) is based on medical urgency, blood type, time on the waitlist, and geographic proximity \\u2014 not wealth, fame, or social status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does organ donation cost money for the donor\\u0027s family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is zero cost to the donor\\u0027s family for organ donation. All medical costs related to donation are covered by the organ procurement organization or the recipient\\u0027s insurance.',
      },
    },
  ],
};

export default function FactsLayout({ children }: { children: React.ReactNode }) {
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
