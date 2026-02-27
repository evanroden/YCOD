'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';
import RetroButton from '@/components/ui/RetroButton';
import SettingsPanel from '@/components/ui/SettingsPanel';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`sticky top-[4px] z-50 w-full backdrop-blur-md border-b-4 border-ycod-coral transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-ycod-black/95 shadow-lg' : 'bg-white/90 dark:bg-ycod-black/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="YCOD - Youth Coalition for Organ Donation"
                width={80}
                height={80}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="squiggly-underline font-body font-semibold text-ycod-black dark:text-white hover:text-ycod-coral transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <RetroButton href="/join" color="bg-ycod-coral" className="text-white ml-2">
                Join
              </RetroButton>
              <SettingsPanel />
            </div>

            {/* Mobile: settings + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <SettingsPanel />
              <button
                className="p-2 border-2 border-ycod-black dark:border-white/60 rounded"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-ycod-black dark:text-white">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
