'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeProvider';
import { useI18n, Locale } from '@/lib/i18n';

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t, locales } = useI18n();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border-2 border-ycod-black dark:border-white/60 rounded-md hover:bg-ycod-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Settings"
        aria-expanded={open}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ycod-black dark:text-white">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-12 w-56 bg-white dark:bg-ycod-black border-3 border-ycod-black dark:border-white/30 rounded-md shadow-retro p-4 z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{ borderWidth: '3px' }}
          >
            {/* Theme */}
            <p className="font-display font-bold text-xs text-ycod-black/60 dark:text-white/60 uppercase tracking-wider mb-2">
              {theme === 'light' ? t('theme.light') : theme === 'dark' ? t('theme.dark') : t('theme.system')}
            </p>
            <div className="flex gap-1 mb-4">
              {(['light', 'dark', 'system'] as const).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setTheme(opt)}
                  className={`flex-1 text-xs font-display font-bold py-1.5 px-2 rounded border-2 transition-all ${
                    theme === opt
                      ? 'bg-ycod-blue text-white border-ycod-black dark:border-white/30'
                      : 'bg-transparent text-ycod-black dark:text-white border-ycod-black/20 dark:border-white/20 hover:border-ycod-black/40'
                  }`}
                  aria-pressed={theme === opt}
                >
                  {opt === 'light' ? '☀️' : opt === 'dark' ? '🌙' : '💻'}
                </button>
              ))}
            </div>

            {/* Language */}
            <p className="font-display font-bold text-xs text-ycod-black/60 dark:text-white/60 uppercase tracking-wider mb-2">
              Language
            </p>
            <div className="grid grid-cols-2 gap-1">
              {(Object.entries(locales) as [Locale, string][]).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`text-xs font-display font-bold py-1.5 px-2 rounded border-2 transition-all ${
                    locale === code
                      ? 'bg-ycod-coral text-white border-ycod-black dark:border-white/30'
                      : 'bg-transparent text-ycod-black dark:text-white border-ycod-black/20 dark:border-white/20 hover:border-ycod-black/40'
                  }`}
                  aria-pressed={locale === code}
                >
                  {name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
