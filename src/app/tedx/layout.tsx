import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEDx Talk',
  description:
    'Watch Evan Roden\'s TEDx talk on youth political engagement and organ donation advocacy. Learn how young people are driving legislative change.',
  openGraph: {
    title: 'TEDx Talk — Evan Roden on Youth Activism & Organ Donation',
    description:
      'Youth political engagement and the fight for opt-out organ donation.',
  },
  alternates: {
    canonical: '/tedx',
  },
};

const videoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'TEDx Talk — Evan Roden on Youth Activism & Organ Donation',
  description:
    'Evan Roden discusses youth political engagement and organ donation advocacy at TEDx.',
  thumbnailUrl: 'https://img.youtube.com/vi/Bq3Swc8q0CY/hqdefault.jpg',
  uploadDate: '2022-01-01T00:00:00Z',
  contentUrl: 'https://www.youtube.com/watch?v=Bq3Swc8q0CY',
  embedUrl: 'https://www.youtube-nocookie.com/embed/Bq3Swc8q0CY',
  publisher: {
    '@type': 'Organization',
    name: 'YCOD — Youth Coalition for Organ Donation',
    url: 'https://www.ycod.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ycod.org/images/logo.png',
    },
  },
};

export default function TedxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {children}
    </>
  );
}
