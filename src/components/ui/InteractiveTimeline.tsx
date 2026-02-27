'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_EVENTS } from '@/lib/constants';
import { useI18n } from '@/lib/i18n';

const EXTENDED_DETAILS: Record<string, string> = {
  'YCOD is Founded': 'What began as a personal cause — Evan\'s family member needed a kidney transplant — became a mission. Four East Aurora High School students decided they wouldn\'t just wait for change. They\'d make it.',
  'Joined Donate Life Club': 'The founders were shocked to discover that New York\'s 37% registration rate was among the lowest in the nation. They realized the problem wasn\'t that people opposed donation — it was that the system made it too easy to say nothing.',
  'Growing the Movement': 'Word spread beyond East Aurora. Students, teachers, and community members across New York State started joining. YCOD went from a school club to a statewide coalition in just one year.',
  'Bill A07954 Drafted': 'Most student groups write letters. YCOD wrote actual legislation. Bill A07954 proposed changing the DMV default from opt-in to opt-out — a simple behavioral change backed by decades of research.',
  'Partnership Expansion': 'YCOD partnered with WaitList Zero, ONE8FIFTY, the Chris Klug Foundation, the American Red Cross WNY, and the NY State Council of Churches — building a coalition that spans healthcare, faith, and sports.',
  'Red Cross Nomination': 'Recognition from the American Red Cross validated what the team already knew: young people can drive real policy change. The nomination brought national attention to YCOD\'s legislative approach.',
  'TEDx Talk': 'Evan took the stage at TEDx to make the case that young people aren\'t apolitical — they\'re more engaged than ever. The talk connected organ donation advocacy to the broader story of youth civic engagement.',
  '3,000+ Members': 'From four students in one school to over 3,000 members spanning multiple countries. YCOD proved that organ donation advocacy resonates across borders, cultures, and generations.',
  'NY Crosses 50%': 'After years of advocacy, New York finally crossed the 50% registration threshold. It\'s progress — but with states like Alaska at 90%+, there\'s still work to do.',
};

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
                aria-label={`${isExpanded ? t('timeline.click_collapse') : t('timeline.click_expand')} ${event.title}`}
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
                  {event.title}
                </h3>
                <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">{event.description}</p>

                <AnimatePresence>
                  {isExpanded && EXTENDED_DETAILS[event.title] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t-2 border-dashed border-ycod-coral/30">
                        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80 italic">
                          {EXTENDED_DETAILS[event.title]}
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
