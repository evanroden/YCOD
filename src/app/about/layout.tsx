import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the Youth Coalition for Organ Donation — founded in 2017 by four high school students near Buffalo, NY, now a 3,000+ member movement advocating for opt-out organ donation.',
  openGraph: {
    title: 'About YCOD — Our Story',
    description:
      'Four high school students decided saving lives shouldn\'t be optional. Learn how YCOD grew into a national movement.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Youth Coalition for Organ Donation (YCOD)',
  url: 'https://www.ycod.org',
  logo: 'https://www.ycod.org/images/logo.png',
  description:
    'Youth-led nonprofit advocating for opt-out organ donation legislation in New York State.',
  foundingDate: '2017',
  founders: [
    { '@type': 'Person', name: 'Evan Roden' },
    { '@type': 'Person', name: 'Henry McLaughlin' },
    { '@type': 'Person', name: 'Grace Tapani' },
    { '@type': 'Person', name: 'Sage Sellers' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buffalo',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'Support@YCOD.org',
    telephone: '+1-716-418-4157',
    contactType: 'customer support',
  },
  sameAs: [
    'https://twitter.com/theycod',
    'https://www.linkedin.com/company/ycod',
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {children}
    </>
  );
}
