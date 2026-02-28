'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import NinetyCard from '@/components/ui/NinetyCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function StoriesPage() {
  const { t } = useI18n();

  const stats = [
    { numberKey: 'stories.impact.stat1.number', labelKey: 'stories.impact.stat1.label', color: 'bg-ycod-coral' },
    { numberKey: 'stories.impact.stat2.number', labelKey: 'stories.impact.stat2.label', color: 'bg-ycod-blue' },
    { numberKey: 'stories.impact.stat3.number', labelKey: 'stories.impact.stat3.label', color: 'bg-ycod-green' },
    { numberKey: 'stories.impact.stat4.number', labelKey: 'stories.impact.stat4.label', color: 'bg-ycod-yellow' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-pink py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('stories.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('stories.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('stories.impact.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('stories.impact.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.numberKey} variants={fadeInUp}>
                <NinetyCard color={stat.color} rotation={i % 2 === 0 ? -1 : 1} className="text-center h-full">
                  <p className="font-display text-4xl md:text-5xl font-bold text-ycod-black mb-2">
                    {t(stat.numberKey)}
                  </p>
                  <p className="font-body text-sm text-ycod-black/80">
                    {t(stat.labelKey)}
                  </p>
                </NinetyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Why Stories Matter */}
      <section className="py-16 md:py-24 bg-ycod-blue/5 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-6">
              {t('stories.why.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/80 dark:text-white/80 leading-relaxed">
              {t('stories.why.text')}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#00C9A7" />

      {/* Share Your Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
              {t('stories.share.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 mb-8">
              {t('stories.share.subtitle')}
            </p>
            <RetroButton href="/contact" color="bg-ycod-green" className="text-white text-lg">
              {t('stories.share.button')}
            </RetroButton>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t('stories.cta.title')}
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('stories.cta.subtitle')}
            </p>
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black text-lg">
              {t('stories.cta.button')}
            </RetroButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
