'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import NinetyCard from '@/components/ui/NinetyCard';
import BillImpactViz from '@/components/ui/BillImpactViz';
import ComparisonTable from '@/components/ui/ComparisonTable';
import LetterGenerator from '@/components/ui/LetterGenerator';
import { BILL_TEXT } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function BillPage() {
  const { t } = useI18n();

  const safeguards = [
    { label: t('bill.safeguard_dmv'), desc: t('bill.safeguard_dmv_desc') },
    { label: t('bill.safeguard_question'), desc: t('bill.safeguard_question_desc') },
    { label: t('bill.safeguard_optout'), desc: t('bill.safeguard_optout_desc') },
    { label: t('bill.safeguard_notice'), desc: t('bill.safeguard_notice_desc') },
    { label: t('bill.safeguard_minors'), desc: t('bill.safeguard_minors_desc') },
    { label: t('bill.safeguard_choice'), desc: t('bill.safeguard_choice_desc') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-dark-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('bill.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('bill.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Plain Language Explainer */}
      <section className="py-16 md:py-20 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold text-ycod-black dark:text-white mb-8 text-center">
              {t('bill.what_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <NinetyCard color="bg-ycod-coral/20" rotation={-1}>
                <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-2">
                  {t('bill.problem_title')}
                </h3>
                <p className="font-body text-ycod-black/80 dark:text-white/80">
                  {t('bill.problem_text')}
                </p>
              </NinetyCard>
              <NinetyCard color="bg-ycod-green/20" rotation={1}>
                <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-2">
                  {t('bill.solution_title')}
                </h3>
                <p className="font-body text-ycod-black/80 dark:text-white/80">
                  {t('bill.solution_text')}
                </p>
              </NinetyCard>
            </div>

            {/* Key provision */}
            <div className="ninety-card bg-ycod-yellow/30 mb-12" style={{ transform: 'rotate(0deg)' }}>
              <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-3">
                {t('bill.key_provision')}
              </h3>
              <blockquote className="font-body text-lg italic text-ycod-black/90 border-l-4 border-ycod-coral pl-4">
                &ldquo;{t('bill.key_quote')}&rdquo;
              </blockquote>
            </div>

            {/* Safeguards */}
            <h3 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-4">
              {t('bill.safeguards_title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {safeguards.map((item, i) => (
                <NinetyCard
                  key={item.label}
                  color={['bg-ycod-pink', 'bg-ycod-blue', 'bg-ycod-yellow', 'bg-ycod-coral', 'bg-ycod-green', 'bg-ycod-pink'][i]}
                  rotation={i % 2 === 0 ? -1 : 1}
                >
                  <h4 className="font-display font-bold text-ycod-black">{item.label}</h4>
                  <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">{item.desc}</p>
                </NinetyCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Impact Visualization */}
      <section className="py-16 md:py-24 bg-ycod-blue/5">
        <div className="max-w-4xl mx-auto px-4">
          <BillImpactViz />
        </div>
      </section>

      <SectionDivider color="#F5A0B8" />

      {/* Opt-In vs Opt-Out Comparison */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      <SectionDivider color="#00C9A7" />

      {/* Full Bill Text */}
      <section className="py-16 md:py-24 bg-ycod-black/5 dark:bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold text-ycod-black dark:text-white mb-4 text-center">
              {t('bill.draft_title')}
            </h2>
            <p className="font-body text-center text-ycod-black/70 dark:text-white/70 mb-8">
              {t('bill.draft_note')}
            </p>
            <div className="ninety-card bg-white dark:bg-ycod-black transition-colors duration-300" style={{ transform: 'rotate(0deg)' }}>
              <pre className="font-body text-sm md:text-base text-ycod-black/90 whitespace-pre-wrap leading-relaxed">
                {BILL_TEXT}
              </pre>
            </div>

            <div className="text-center mt-8">
              <RetroButton
                href="https://nyassembly.gov/leg/?Summary=Y&Text=Y&bn=A07954&default_fld=&leg_video=&term=2019"
                color="bg-ycod-blue"
                className="text-white"
                external
              >
                {t('bill.view_original')}
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Letter Generator */}
      <LetterGenerator />

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t('bill.cta_title')}
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            {t('bill.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              {t('cta.join')}
            </RetroButton>
            <RetroButton href="/contact" color="bg-white dark:bg-ycod-black transition-colors duration-300" className="text-ycod-black">
              {t('nav.contact')}
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
