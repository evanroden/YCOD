import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Initiatives',
  description:
    'Five pillars driving change: opt-out organ donation policy, nonpartisan politics, youth education, healthier communities, and informational campaigns. Try our interactive DMV simulator.',
  openGraph: {
    title: 'YCOD Initiatives',
    description:
      'Five pillars driving change in organ donation policy and awareness across New York State and beyond.',
  },
};

export default function InitiativesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
