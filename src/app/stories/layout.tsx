import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories of Hope',
  description:
    'Read real stories from transplant recipients, donor families, living donors, and YCOD members. Every story is a testament to the power of organ donation.',
  openGraph: {
    title: 'Stories of Hope — Real Organ Donation Stories',
    description:
      'Real people. Real lives saved. Read stories from transplant recipients, donor families, living donors, and YCOD advocates.',
    url: 'https://www.ycod.org/stories',
  },
  alternates: {
    canonical: '/stories',
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
