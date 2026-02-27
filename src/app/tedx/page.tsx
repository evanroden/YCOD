'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import RetroYouTube from '@/components/ui/RetroYouTube';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function TEDxPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-black py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('tedx.title')} <span className="text-ycod-coral">{t('tedx.title_colored')}</span>
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('tedx.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="ninety-card bg-ycod-black p-3 md:p-4 mb-12" style={{ transform: 'rotate(0.5deg)' }}>
              <RetroYouTube
                videoId="Bq3Swc8q0CY"
                title="TEDx Talk — Evan Roden on Youth Activism & Organ Donation"
              />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <blockquote className="ninety-card bg-ycod-coral/10" style={{ transform: 'rotate(-0.5deg)' }}>
              <p className="font-display text-xl md:text-2xl font-bold text-ycod-black leading-relaxed mb-4">
                {t('tedx.quote')}
              </p>
              <cite className="font-body text-ycod-coral font-semibold not-italic">
                {t('tedx.quote_cite')}
              </cite>
            </blockquote>
          </motion.div>

          <SectionDivider color="#F5A0B8" />

          {/* Speaker Bio */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <div className="ninety-card bg-ycod-pink p-2" style={{ transform: 'rotate(2deg)' }}>
                <Image
                  src="/images/evan-portrait.webp"
                  alt="Illustrated portrait of Evan Roden"
                  width={250}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white mb-4">
                {t('tedx.speaker_title')}
              </h2>
              <p className="font-body text-lg text-ycod-black/80 dark:text-white/80 mb-4">
                {t('tedx.speaker_bio1')}
              </p>
              <p className="font-body text-lg text-ycod-black/80 dark:text-white/80 mb-6">
                {t('tedx.speaker_bio2')}
              </p>
              <RetroButton href="/about" color="bg-ycod-blue" className="text-white">
                {t('tedx.learn_story')}
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-green py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('tedx.cta_title')}
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            {t('tedx.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              {t('cta.join')}
            </RetroButton>
            <RetroButton
              href="sms:57838?body=register"
              color="bg-ycod-coral"
              className="text-white heart-cursor"
              external
            >
              {t('tedx.register_donor')}
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
