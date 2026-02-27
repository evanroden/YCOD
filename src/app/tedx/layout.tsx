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
};

export default function TedxLayout({ children }: { children: React.ReactNode }) {
  return children;
}
