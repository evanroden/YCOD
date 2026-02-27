import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The YCOD — Youth Coalition for Organ Donation',
    template: '%s | The YCOD — Youth Coalition for Organ Donation',
  },
  description:
    'The Youth Coalition for Organ Donation advocates for opt-out organ donation legislation in New York State. Join 3,000+ supporters saving lives.',
  openGraph: {
    title: 'The YCOD — Youth Coalition for Organ Donation',
    description:
      'Advocating for opt-out organ donation legislation in New York State. Join 3,000+ supporters saving lives.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The YCOD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The YCOD — Youth Coalition for Organ Donation',
    description:
      'Advocating for opt-out organ donation legislation in New York State. Join 3,000+ supporters saving lives.',
  },
  icons: {
    icon: '/images/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-ycod-black bg-white antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
