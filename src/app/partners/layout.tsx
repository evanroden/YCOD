import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners',
  description:
    'YCOD partners with WaitList Zero, ONE8FIFTY, Chris Klug Foundation, American Red Cross WNY, and NY State Council of Churches to advance organ donation.',
  openGraph: {
    title: 'YCOD Partners',
    description:
      'Organizations fighting alongside us to save lives through organ donation reform.',
  },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
