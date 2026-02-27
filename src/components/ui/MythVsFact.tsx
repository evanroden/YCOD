'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const MYTH_INDICES = [0, 1, 2, 3, 4, 5];

export default function MythVsFact() {
  const { t } = useI18n();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const revealAll = () => {
    if (allRevealed) {
      setFlippedCards(new Set());
    } else {
      setFlippedCards(new Set(MYTH_INDICES));
    }
    setAllRevealed(!allRevealed);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-ycod-black/80">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
            {t('myth.title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 mb-4">
            {t('myth.subtitle')}
          </p>
          <button
            onClick={revealAll}
            className="font-body text-sm text-ycod-blue hover:text-ycod-coral transition-colors underline"
          >
            {allRevealed ? t('myth.hide_all') : t('myth.reveal_all')}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MYTH_INDICES.map((index) => {
            const isFlipped = flippedCards.has(index);
            const mythText = t(`myth.${index}.myth`);
            const factText = t(`myth.${index}.fact`);
            return (
              <motion.div
                key={index}
                className="cursor-pointer perspective-1000"
                onClick={() => toggleCard(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                role="button"
                aria-expanded={isFlipped}
                aria-label={isFlipped ? factText : `${mythText}. ${t('myth.tap_reveal')}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(index);
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="myth"
                      className="ninety-card bg-ycod-coral/15 min-h-[180px] flex flex-col justify-between"
                      style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-ycod-coral text-white font-display font-bold text-xs rounded border-2 border-ycod-black mb-3">
                          {t('myth.myth_label')}
                        </span>
                        <p className="font-body text-ycod-black/90 font-semibold">
                          &ldquo;{mythText}&rdquo;
                        </p>
                      </div>
                      <p className="font-body text-xs text-ycod-coral/60 mt-3">
                        {t('myth.tap_reveal')}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="fact"
                      className="ninety-card bg-ycod-green/15 min-h-[180px] flex flex-col justify-between"
                      style={{ transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` }}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-ycod-green text-white font-display font-bold text-xs rounded border-2 border-ycod-black mb-3">
                          {t('myth.fact_label')}
                        </span>
                        <p className="font-body text-ycod-black/90">
                          {factText}
                        </p>
                      </div>
                      <p className="font-body text-xs text-ycod-green/60 mt-3">
                        {t('myth.tap_myth')}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
