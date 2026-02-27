'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeProvider';
import { useI18n, Locale } from '@/lib/i18n';

type A11yKey = 'highContrast' | 'largeText' | 'reducedMotion' | 'dyslexiaFont';

const A11Y_CLASS_MAP: Record<A11yKey, string> = {
  highContrast: 'a11y-high-contrast',
  largeText: 'a11y-large-text',
  reducedMotion: 'a11y-reduced-motion',
  dyslexiaFont: 'a11y-dyslexia-font',
};

function getInitialA11y(): Record<A11yKey, boolean> {
  if (typeof window === 'undefined') {
    return { highContrast: false, largeText: false, reducedMotion: false, dyslexiaFont: false };
  }
  try {
    const saved = localStorage.getItem('ycod-a11y');
    if (saved) return JSON.parse(saved);
  } catch {
    // ignore
  }
  return { highContrast: false, largeText: false, reducedMotion: false, dyslexiaFont: false };
}

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t, locales } = useI18n();
  const [a11y, setA11y] = useState<Record<A11yKey, boolean>>(getInitialA11y);

  // Apply a11y classes to <html>
  const applyA11yClasses = useCallback((settings: Record<A11yKey, boolean>) => {
    const html = document.documentElement;
    (Object.entries(A11Y_CLASS_MAP) as [A11yKey, string][]).forEach(([key, cls]) => {
      if (settings[key]) {
        html.classList.add(cls);
      } else {
        html.classList.remove(cls);
      }
    });
  }, []);

  // On mount, apply saved settings
  useEffect(() => {
    const saved = getInitialA11y();
    setA11y(saved);
    applyA11yClasses(saved);
  }, [applyA11yClasses]);

  const toggleA11y = (key: A11yKey) => {
    setA11y((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem('ycod-a11y', JSON.stringify(next));
      } catch {
        // ignore
      }
      applyA11yClasses(next);
      return next;
    });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const a11yToggles: { key: A11yKey; labelKey: string; icon: string }[] = [
    { key: 'highContrast', labelKey: 'settings.high_contrast', icon: '🔲' },
    { key: 'largeText', labelKey: 'settings.large_text', icon: '🔤' },
    { key: 'reducedMotion', labelKey: 'settings.reduced_motion', icon: '⏸️' },
    { key: 'dyslexiaFont', labelKey: 'settings.dyslexia_font', icon: '📖' },
  ];

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
            className="absolute right-0 top-12 w-64 bg-white dark:bg-ycod-black border-3 border-ycod-black dark:border-white/30 rounded-md shadow-retro p-4 z-50 max-h-[80vh] overflow-y-auto"
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
              {t('settings.language')}
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4">
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

            {/* Accessibility */}
            <p className="font-display font-bold text-xs text-ycod-black/60 dark:text-white/60 uppercase tracking-wider mb-2">
              {t('settings.accessibility')}
            </p>
            <div className="space-y-1.5">
              {a11yToggles.map(({ key, labelKey, icon }) => (
                <button
                  key={key}
                  onClick={() => toggleA11y(key)}
                  className={`w-full flex items-center gap-2 text-xs font-display font-bold py-1.5 px-2 rounded border-2 transition-all ${
                    a11y[key]
                      ? 'bg-ycod-green text-white border-ycod-black dark:border-white/30'
                      : 'bg-transparent text-ycod-black dark:text-white border-ycod-black/20 dark:border-white/20 hover:border-ycod-black/40'
                  }`}
                  aria-pressed={a11y[key]}
                >
                  <span>{icon}</span>
                  <span>{t(labelKey)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
