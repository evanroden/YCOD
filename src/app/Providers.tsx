'use client';

import ThemeProvider from '@/lib/ThemeProvider';
import I18nProvider from '@/lib/i18n';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
}
