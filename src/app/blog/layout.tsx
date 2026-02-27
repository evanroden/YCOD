import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'Stories, medical breakthroughs, and policy updates shaping the future of organ donation. Follow YCOD\'s coverage of opt-out legislation progress worldwide.',
  openGraph: {
    title: 'YCOD News & Updates',
    description:
      'Stories, breakthroughs, and policy updates shaping the future of organ donation.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
