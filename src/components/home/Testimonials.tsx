'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const TESTIMONIAL_COUNT = 5;
const COLORS = ['bg-ycod-coral', 'bg-ycod-blue', 'bg-ycod-green', 'bg-ycod-pink', 'bg-ycod-yellow'];

export default function Testimonials() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIAL_COUNT);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

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
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            {t('home.testimonials_subtitle')}
          </p>
        </motion.div>

        <div className="relative min-h-[280px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className={`ninety-card ${COLORS[current]}/10 border-l-4 ${COLORS[current].replace('bg-', 'border-')}`}
              style={{ transform: `rotate(${current % 2 === 0 ? -0.5 : 0.5}deg)` }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-body text-lg md:text-xl text-ycod-black/90 dark:text-white/90 italic leading-relaxed mb-4">
                &ldquo;{t(`home.testimonial.${current}.quote`)}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${COLORS[current]}`} />
                <p className="font-display font-bold text-sm text-ycod-black dark:text-white">
                  {t(`home.testimonial.${current}.name`)}
                </p>
                <span className="font-body text-xs text-ycod-black/50 dark:text-white/50">
                  {t(`home.testimonial.${current}.role`)}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-ycod-black dark:border-white flex items-center justify-center hover:bg-ycod-pink/20 transition-colors"
            aria-label={t('home.testimonial_prev')}
          >
            <span className="text-ycod-black dark:text-white">&larr;</span>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: TESTIMONIAL_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full border-2 border-ycod-black transition-colors ${
                  i === current ? COLORS[i] : 'bg-transparent'
                }`}
                aria-label={`${t('home.testimonial_goto')} ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-ycod-black dark:border-white flex items-center justify-center hover:bg-ycod-pink/20 transition-colors"
            aria-label={t('home.testimonial_next')}
          >
            <span className="text-ycod-black dark:text-white">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
