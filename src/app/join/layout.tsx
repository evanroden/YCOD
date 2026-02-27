import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Movement',
  description:
    'Join 3,000+ supporters of the Youth Coalition for Organ Donation. Sign up, register as a donor, and contact your representatives to support opt-out legislation.',
  openGraph: {
    title: 'Join YCOD — Be Part of the Movement',
    description:
      'If you\'re a young person (or young at heart), join us in working towards organ donation policy awareness.',
  },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
