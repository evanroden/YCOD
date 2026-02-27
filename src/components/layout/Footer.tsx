'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-ycod-black text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="absolute top-4 left-8" width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#F5A0B8" />
        </svg>
        <svg className="absolute bottom-8 right-12" width="35" height="35" viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill="#4A90D9" />
        </svg>
        <svg className="absolute top-1/2 left-1/3" width="30" height="30" viewBox="0 0 40 40">
          <rect x="4" y="4" width="32" height="32" fill="#F7DC6F" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <Image
              src="/images/favicon.webp"
              alt="YCOD"
              width={80}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 font-body text-sm">
              Youth Coalition for Organ Donation. New Yorkers helping New Yorkers save lives.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-ycod-yellow mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2 font-body">
              <li><Link href="/about" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/initiatives" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.initiatives')}</Link></li>
              <li><Link href="/facts" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.facts')}</Link></li>
              <li><Link href="/tedx" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.tedx')}</Link></li>
              <li><Link href="/bill" className="text-gray-300 hover:text-ycod-pink transition-colors">The Bill</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.news')}</Link></li>
              <li><Link href="/coverage" className="text-gray-300 hover:text-ycod-pink transition-colors">Press Coverage</Link></li>
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="font-display font-bold text-ycod-green mb-4">{t('footer.get_involved')}</h3>
            <ul className="space-y-2 font-body">
              <li><Link href="/join" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.join')}</Link></li>
              <li><Link href="/partners" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.partners')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-ycod-pink transition-colors">{t('nav.contact')}</Link></li>
              <li>
                <a href="sms:57838?body=register" className="text-ycod-coral hover:text-ycod-pink transition-colors font-semibold heart-cursor">
                  {t('footer.register_donor')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-ycod-coral mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 font-body text-gray-300">
              <li>
                <a href="mailto:Support@YCOD.org" className="hover:text-ycod-pink transition-colors">
                  Support@YCOD.org
                </a>
              </li>
              <li>
                <a href="tel:+17164184157" className="hover:text-ycod-pink transition-colors">
                  (716) 418-4157
                </a>
              </li>
              <li>Buffalo, NY</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitter.com/theycod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ycod-blue transition-colors"
                aria-label="Twitter"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ycod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ycod-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Quick register CTA */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="font-display text-lg text-ycod-yellow mb-2">
            {t('footer.text_register')}
          </p>
          <p className="text-gray-400 font-body text-sm mb-4">
            {t('footer.join_registry')}
          </p>
          <div className="visitor-counter inline-block" aria-hidden="true">
            VISITORS: {String(Math.floor(31337 + Math.random() * 100)).padStart(6, '0')}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 font-body text-sm">
          <p>{t('footer.copyright', { year: new Date().getFullYear().toString() })}</p>
          <p className="mt-1">{t('footer.nonprofit')}</p>
        </div>
      </div>
    </footer>
  );
}
