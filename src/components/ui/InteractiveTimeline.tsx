'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_EVENTS } from '@/lib/constants';
import { useI18n } from '@/lib/i18n';

const TIMELINE_I18N_KEYS = [
  'founded', 'donate_life', 'growing', 'bill_drafted',
  'partnerships', 'red_cross', 'tedx', 'members_3000', 'ny_50',
];

export default function InteractiveTimeline() {
  const { t } = useI18n();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 timeline-line" />

      {TIMELINE_EVENTS.map((event, index) => {
        const isLeft = index % 2 === 0;
        const isExpanded = expandedIndex === index;

        return (
          <motion.div
            key={`${event.year}-${event.title}`}
            className={`relative flex items-start gap-4 mb-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 w-5 h-5 -translate-x-1/2 z-10">
              <motion.button
                className={`w-5 h-5 rounded-full border-3 cursor-pointer transition-colors ${
                  isExpanded
                    ? 'bg-ycod-coral border-ycod-black scale-125'
                    : 'bg-white border-ycod-black hover:bg-ycod-pink'
                }`}
                style={{ borderWidth: '3px' }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`${isExpanded ? t('timeline.click_collapse') : t('timeline.click_expand')} ${t(`timeline.${TIMELINE_I18N_KEYS[index]}.title`)}`}
              />
            </div>

            {/* Content card */}
            <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-4' : 'md:pl-4'} ${!isLeft ? 'md:ml-auto' : ''}`}>
              <motion.div
                className={`ninety-card cursor-pointer transition-colors ${
                  isExpanded ? 'bg-ycod-coral/10' : 'bg-white dark:bg-ycod-black/80 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
                style={{ transform: `rotate(${isLeft ? -0.5 : 0.5}deg)` }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-block px-2 py-0.5 bg-ycod-blue text-white font-display font-bold text-xs rounded border-2 border-ycod-black mb-2">
                  {event.year}
                </span>
                <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-1">
                  {t(`timeline.${TIMELINE_I18N_KEYS[index]}.title`)}
                </h3>
                <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">{t(`timeline.${TIMELINE_I18N_KEYS[index]}.desc`)}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t-2 border-dashed border-ycod-coral/30">
                        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80 italic">
                          {t(`timeline.${TIMELINE_I18N_KEYS[index]}.detail`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="font-body text-xs text-ycod-blue/60 mt-2">
                  {isExpanded ? t('timeline.click_collapse') : t('timeline.click_expand')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
