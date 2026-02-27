import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Coverage',
  description:
    'YCOD in the news — coverage from Spectrum News, MarketWatch, Yahoo, Business Insider, CBC, and more. See how our youth-driven organ donation movement is making headlines.',
  openGraph: {
    title: 'YCOD Press Coverage',
    description:
      'Our story across local, national, and international media outlets.',
  },
  alternates: {
    canonical: '/coverage',
  },
};

export default function CoverageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
