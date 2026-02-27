import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ycod.org'),
  title: {
    default: 'The YCOD — Youth Coalition for Organ Donation',
    template: '%s | YCOD',
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
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'YCOD — Youth Coalition for Organ Donation logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The YCOD — Youth Coalition for Organ Donation',
    description:
      'Advocating for opt-out organ donation legislation in New York State. Join 3,000+ supporters saving lives.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/favicon.webp',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ycod-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-body text-ycod-black dark:text-white bg-white dark:bg-ycod-black antialiased transition-colors duration-300">
        <Providers>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-ycod-coral focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-display focus:font-bold focus:border-2 focus:border-ycod-black"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
