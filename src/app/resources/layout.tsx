import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Toolkits',
  description:
    'Download toolkits, lesson plans, and advocacy materials for students, educators, healthcare professionals, and community leaders supporting organ donation reform.',
  openGraph: {
    title: 'Organ Donation Resources & Toolkits — YCOD',
    description:
      'Everything you need to advocate for organ donation — toolkits for students, educators, healthcare professionals, and community leaders.',
    url: 'https://www.ycod.org/resources',
  },
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
