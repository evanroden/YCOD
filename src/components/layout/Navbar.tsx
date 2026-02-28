'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS } from '@/lib/constants';
import RetroButton from '@/components/ui/RetroButton';
import SettingsPanel from '@/components/ui/SettingsPanel';
import MobileMenu from './MobileMenu';
import { useI18n } from '@/lib/i18n';

export default function Navbar() {
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [openDropdown]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <nav className={`sticky top-[4px] z-50 w-full backdrop-blur-md border-b-4 border-ycod-coral transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-ycod-black/95 shadow-lg' : 'bg-white/90 dark:bg-ycod-black/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Pictorial Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Pictoral Logo.png"
                alt="YCOD - Youth Coalition for Organ Donation"
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.children && handleMouseLeave()}
                >
                  {item.children ? (
                    <button
                      className="squiggly-underline font-body font-semibold text-ycod-black dark:text-white hover:text-ycod-coral transition-colors px-2 py-2 flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === item.label ? null : item.label);
                      }}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {t(item.i18nKey)}
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      >
                        <polyline points="2,4 6,8 10,4" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="squiggly-underline font-body font-semibold text-ycod-black dark:text-white hover:text-ycod-coral transition-colors px-2 py-2"
                    >
                      {t(item.i18nKey)}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 min-w-[180px] bg-white dark:bg-ycod-black border-3 border-ycod-black dark:border-white/30 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.3)] overflow-hidden z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 font-body font-medium text-ycod-black dark:text-white hover:bg-ycod-pink/20 hover:text-ycod-coral transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {t(child.i18nKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <RetroButton href="/join" color="bg-ycod-coral" className="text-white ml-2">
                {t('nav.join')}
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
