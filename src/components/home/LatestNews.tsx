'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';
import RetroButton from '@/components/ui/RetroButton';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroColor: string;
}

const LATEST_POSTS: NewsItem[] = [
  { slug: 'youth-led-advocacy-changing-organ-donation', title: 'How YCOD Is Leading a Youth Movement for Organ Donation Reform', date: '2024-05-01', category: 'opinion', heroColor: 'bg-ycod-blue' },
  { slug: 'national-donate-life-month-april', title: 'National Donate Life Month: Why April Matters for Organ Donation', date: '2024-04-01', category: 'awareness', heroColor: 'bg-ycod-green' },
  { slug: 'living-organ-donation-reaches-new-heights', title: 'Living Organ Donation Reaches Record Highs in the United States', date: '2024-02-15', category: 'medical', heroColor: 'bg-ycod-yellow' },
];

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  fr: 'fr-FR',
};

export default function LatestNews() {
  const { t, locale } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-ycod-black/5 dark:bg-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
            {t('home.news_title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            {t('home.news_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {LATEST_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block ninety-card bg-white dark:bg-ycod-black/80 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <div className={`${post.heroColor} h-2 rounded-t-sm -mt-4 -mx-4 mb-4`} />
                <span className="font-body text-xs text-ycod-black/50 dark:text-white/50">
                  {new Date(post.date).toLocaleDateString(LOCALE_MAP[locale] || 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <h3 className="font-display font-bold text-lg text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors mt-1 mb-2 leading-snug">
                  {t(`home.news.${index}.title`)}
                </h3>
                <p className="font-body text-sm text-ycod-blue group-hover:text-ycod-coral transition-colors">
                  {t('blog.read_more')} &rarr;
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <RetroButton href="/blog" color="bg-ycod-blue" className="text-white">
            {t('home.news_view_all')}
          </RetroButton>
        </div>
      </div>
    </section>
  );
}
