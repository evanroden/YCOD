'use client';

import { motion } from 'framer-motion';
import InitiativeCard from '@/components/initiatives/InitiativeCard';
import Link from 'next/link';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import DMVSimulator from '@/components/ui/DMVSimulator';
import { INITIATIVES } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

const INITIATIVE_I18N_KEYS = ['optout', 'nonpartisan', 'education', 'health', 'info'];

export default function InitiativesPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('initiatives.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('initiatives.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Initiatives Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((initiative, i) => {
              const key = INITIATIVE_I18N_KEYS[i];
              return (
                <InitiativeCard
                  key={i}
                  title={key ? t(`initiative.${key}.title`) : initiative.title}
                  icon={initiative.icon}
                  color={initiative.color}
                  summary={key ? t(`initiative.${key}.summary`) : initiative.summary}
                  description={key ? t(`initiative.${key}.desc`) : initiative.description}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* DMV Simulator */}
      <DMVSimulator />

      <SectionDivider color="#4A90D9" />

      {/* Explore More */}
      <section className="py-12 md:py-16 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/resources" className="ninety-card bg-ycod-blue/20 hover:bg-ycod-blue/40 transition-colors group">
              <span className="font-display font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">{t('nav.resources')}</span>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 mt-1">{t('crosslink.resources_prompt')}</p>
            </Link>
            <Link href="/stories" className="ninety-card bg-ycod-pink/30 hover:bg-ycod-pink/50 transition-colors group">
              <span className="font-display font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">{t('nav.stories')}</span>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 mt-1">{t('crosslink.stories_prompt')}</p>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('initiatives.cta_title')}
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            {t('initiatives.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/bill" color="bg-white dark:bg-ycod-black transition-colors duration-300" className="text-ycod-black">
              {t('initiatives.read_bill')}
            </RetroButton>
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              {t('initiatives.join_us')}
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
