'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import NinetyCard from '@/components/ui/NinetyCard';
import RetroButton from '@/components/ui/RetroButton';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

const COVERAGE_ITEMS = [
  { outlet: 'Spectrum News', descKey: 'coverage.desc.spectrum', color: 'bg-ycod-blue' },
  { outlet: 'Radio One / CBC', descKey: 'coverage.desc.radio', color: 'bg-ycod-pink' },
  { outlet: 'MarketWatch', descKey: 'coverage.desc.marketwatch', color: 'bg-ycod-yellow' },
  { outlet: 'Yahoo / Yahoo Finance', descKey: 'coverage.desc.yahoo', color: 'bg-ycod-coral' },
  { outlet: 'Business Insider', descKey: 'coverage.desc.business', color: 'bg-ycod-green' },
  { outlet: 'MSN', descKey: 'coverage.desc.msn', color: 'bg-ycod-blue' },
  { outlet: 'Morningstar', descKey: 'coverage.desc.morningstar', color: 'bg-ycod-pink' },
  { outlet: 'Canadian Insider', descKey: 'coverage.desc.canadian', color: 'bg-ycod-yellow' },
  { outlet: 'TEDx', descKey: 'coverage.desc.tedx', color: 'bg-ycod-coral' },
];

export default function CoveragePage() {
  const { t } = useI18n();

  return (
    <>
      <section className="bg-ycod-yellow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-ycod-black dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('coverage.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-ycod-black/80 dark:text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('coverage.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Logos banner */}
      <section className="py-12 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="ninety-card bg-white p-4 md:p-8" style={{ transform: 'rotate(-0.5deg)' }}>
              <Image
                src="/images/coverage-logos.png"
                alt="Media coverage logos: Spectrum News, Radio One, MarketWatch, Yahoo, Business Insider, Yahoo Finance, Canadian Insider, MSN, Morningstar"
                width={800}
                height={250}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="py-16 md:py-24 bg-ycod-green/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COVERAGE_ITEMS.map((item, i) => (
              <motion.div key={item.outlet} variants={fadeInUp}>
                <NinetyCard color={item.color} rotation={i % 2 === 0 ? -1.5 : 1.5} className="h-full">
                  <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-3">
                    {item.outlet}
                  </h3>
                  <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
                    {t(item.descKey)}
                  </p>
                </NinetyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      <section className="bg-ycod-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('coverage.cta_title')}
          </h2>
          <RetroButton href="/tedx" color="bg-ycod-yellow" className="text-ycod-black">
            {t('coverage.cta_button')}
          </RetroButton>
        </div>
      </section>
    </>
  );
}
