import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Youth Coalition for Organ Donation. Email Support@YCOD.org, call (716) 418-4157, or send us a message.',
  openGraph: {
    title: 'Contact YCOD',
    description:
      'Reach out to the YCOD team — we\'re New Yorkers helping New Yorkers save lives.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
