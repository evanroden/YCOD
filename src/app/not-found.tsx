'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="py-32 text-center px-4">
      <div className="max-w-lg mx-auto">
        <div className="ninety-card bg-ycod-coral/20 mb-8" style={{ transform: 'rotate(-1deg)' }}>
          <h1 className="font-display text-6xl font-bold text-ycod-coral mb-2">404</h1>
          <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-4">
            {t('notfound.title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/60 dark:text-white/60">
            {t('notfound.text')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="retro-btn bg-ycod-blue text-white">
            {t('error.go_home')}
          </Link>
          <Link href="/blog" className="retro-btn bg-ycod-yellow text-ycod-black">
            {t('notfound.read_blog')}
          </Link>
          <Link href="/join" className="retro-btn bg-ycod-coral text-white">
            {t('notfound.join')}
          </Link>
        </div>
      </div>
    </section>
  );
}
