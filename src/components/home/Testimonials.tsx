'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
            {t('home.testimonials_title')}
          </h2>
        </motion.div>

        <motion.div
          className="ninety-card bg-ycod-green/10 border-l-4 border-ycod-green"
          style={{ transform: 'rotate(-0.5deg)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-body text-lg md:text-xl text-ycod-black/90 dark:text-white/90 italic leading-relaxed mb-4">
            &ldquo;{t('home.testimonial.0.quote')}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-ycod-green" />
            <p className="font-display font-bold text-sm text-ycod-black dark:text-white">
              {t('home.testimonial.0.name')}
            </p>
            <span className="font-body text-xs text-ycod-black/50 dark:text-white/50">
              {t('home.testimonial.0.role')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
