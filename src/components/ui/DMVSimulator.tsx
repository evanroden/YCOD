'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroButton from './RetroButton';
import { useI18n } from '@/lib/i18n';

type SimStep = 'intro' | 'opt-in-form' | 'opt-in-result' | 'opt-out-form' | 'opt-out-result' | 'compare';

export default function DMVSimulator() {
  const { t } = useI18n();
  const [step, setStep] = useState<SimStep>('intro');
  const [optInChoice, setOptInChoice] = useState<'yes' | 'no' | 'skip' | null>(null);
  const [optOutChoice, setOptOutChoice] = useState<'keep' | 'remove' | null>(null);

  const reset = () => {
    setStep('intro');
    setOptInChoice(null);
    setOptOutChoice(null);
  };

  return (
    <section className="py-16 md:py-24 bg-ycod-yellow/10">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
            {t('dmv.title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            {t('dmv.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="ninety-card bg-white min-h-[340px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {/* INTRO */}
            {step === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6"
              >
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-3">
                  {t('dmv.at_dmv')}
                </h3>
                <p className="font-body text-ycod-black/70 dark:text-white/70 mb-8 max-w-md mx-auto">
                  {t('dmv.intro_text')}
                </p>
                <RetroButton
                  color="bg-ycod-blue"
                  className="text-white"
                  onClick={() => setStep('opt-in-form')}
                >
                  {t('dmv.start_optin')}
                </RetroButton>
              </motion.div>
            )}

            {/* OPT-IN FORM */}
            {step === 'opt-in-form' && (
              <motion.div
                key="opt-in"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 bg-ycod-coral text-white font-display font-bold text-xs rounded-full border-2 border-ycod-black">
                    {t('dmv.current_system')}
                  </span>
                  <span className="font-body text-sm text-ycod-black/60 dark:text-white/60">{t('dmv.optin_label')}</span>
                </div>

                <div className="p-5 bg-gray-50 rounded-md border-2 border-dashed border-gray-300 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-display font-bold text-ycod-black dark:text-white mb-1">
                        {t('dmv.dmv_section')}
                      </p>
                      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 italic">
                        {t('dmv.after_paperwork')}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border-2 border-ycod-black">
                    <p className="font-body text-sm text-ycod-black mb-4">
                      <strong>{t('dmv.optin_question')}</strong>
                    </p>
                    <div className="space-y-2">
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optInChoice === 'yes'
                            ? 'border-ycod-green bg-ycod-green/10 text-ycod-black'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptInChoice('yes')}
                      >
                        ☐ {t('dmv.optin_yes')}
                      </button>
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optInChoice === 'skip'
                            ? 'border-ycod-coral bg-ycod-coral/10 text-ycod-black'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptInChoice('skip')}
                      >
                        ☐ {t('dmv.optin_skip')}
                      </button>
                    </div>
                    <p className="font-body text-xs text-ycod-black/40 mt-3 italic">
                      {t('dmv.optin_most_skip')}
                    </p>
                  </div>
                </div>

                {optInChoice && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <RetroButton
                      color="bg-ycod-coral"
                      className="text-white"
                      onClick={() => setStep('opt-in-result')}
                    >
                      {t('dmv.submit')}
                    </RetroButton>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* OPT-IN RESULT */}
            {step === 'opt-in-result' && (
              <motion.div
                key="opt-in-result"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="text-center py-4"
              >
                <div className="text-4xl mb-3">
                  {optInChoice === 'yes' ? '✅' : '😐'}
                </div>
                <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-3">
                  {optInChoice === 'yes'
                    ? t('dmv.optin_yes_title')
                    : t('dmv.optin_skip_title')}
                </h3>
                <div className="ninety-card bg-gray-50 mb-6 inline-block text-left" style={{ transform: 'rotate(-0.5deg)' }}>
                  <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                    {optInChoice === 'yes'
                      ? t('dmv.optin_yes_text')
                      : t('dmv.optin_skip_text')}
                  </p>
                </div>
                <div>
                  <RetroButton
                    color="bg-ycod-blue"
                    className="text-white"
                    onClick={() => setStep('opt-out-form')}
                  >
                    {t('dmv.try_optout')}
                  </RetroButton>
                </div>
              </motion.div>
            )}

            {/* OPT-OUT FORM */}
            {step === 'opt-out-form' && (
              <motion.div
                key="opt-out"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 bg-ycod-green text-white font-display font-bold text-xs rounded-full border-2 border-ycod-black">
                    {t('dmv.proposed_system')}
                  </span>
                  <span className="font-body text-sm text-ycod-black/60 dark:text-white/60">{t('dmv.optout_label')}</span>
                </div>

                <div className="p-5 bg-gray-50 rounded-md border-2 border-dashed border-gray-300 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-display font-bold text-ycod-black dark:text-white mb-1">
                        {t('dmv.dmv_section')}
                      </p>
                      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 italic">
                        {t('dmv.same_dmv')}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border-2 border-ycod-black">
                    <div className="p-3 bg-ycod-green/10 rounded border border-ycod-green mb-4">
                      <p className="font-body text-sm text-ycod-black">
                        ✅ <strong>{t('dmv.optout_registered')}</strong>
                      </p>
                      <p className="font-body text-xs text-ycod-black/60 dark:text-white/60 mt-1">
                        {t('dmv.optout_mail')}
                      </p>
                    </div>
                    <p className="font-body text-sm text-ycod-black mb-3">
                      <strong>{t('dmv.optout_change')}</strong>
                    </p>
                    <div className="space-y-2">
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optOutChoice === 'keep'
                            ? 'border-ycod-green bg-ycod-green/10'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptOutChoice('keep')}
                      >
                        ☐ {t('dmv.optout_keep')}
                      </button>
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optOutChoice === 'remove'
                            ? 'border-ycod-coral bg-ycod-coral/10'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptOutChoice('remove')}
                      >
                        ☐ {t('dmv.optout_remove')}
                      </button>
                    </div>
                    <p className="font-body text-xs text-ycod-black/40 mt-3 italic">
                      {t('dmv.optout_default')}
                    </p>
                  </div>
                </div>

                {optOutChoice && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <RetroButton
                      color="bg-ycod-green"
                      className="text-white"
                      onClick={() => setStep('opt-out-result')}
                    >
                      {t('dmv.submit')}
                    </RetroButton>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* OPT-OUT RESULT */}
            {step === 'opt-out-result' && (
              <motion.div
                key="opt-out-result"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="text-center py-4"
              >
                <div className="text-4xl mb-3">
                  {optOutChoice === 'keep' ? '🎉' : '👍'}
                </div>
                <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-3">
                  {optOutChoice === 'keep'
                    ? t('dmv.keep_title')
                    : t('dmv.remove_title')}
                </h3>
                <div className="ninety-card bg-gray-50 mb-6 inline-block text-left" style={{ transform: 'rotate(0.5deg)' }}>
                  <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                    {optOutChoice === 'keep'
                      ? t('dmv.keep_text')
                      : t('dmv.remove_text')}
                  </p>
                </div>
                <div>
                  <RetroButton
                    color="bg-ycod-coral"
                    className="text-white"
                    onClick={() => setStep('compare')}
                  >
                    {t('dmv.see_comparison')}
                  </RetroButton>
                </div>
              </motion.div>
            )}

            {/* COMPARISON */}
            {step === 'compare' && (
              <motion.div
                key="compare"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-6 text-center">
                  {t('dmv.compare_title')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="ninety-card bg-ycod-coral/10 text-center" style={{ transform: 'rotate(-1deg)' }}>
                    <div className="text-3xl mb-2">😐</div>
                    <p className="font-display font-bold text-ycod-black text-sm mb-1">{t('dmv.current_optin')}</p>
                    <div className="font-display text-4xl font-bold text-ycod-coral mb-1">~50%</div>
                    <p className="font-body text-xs text-ycod-black/60 dark:text-white/60">{t('dmv.register_ny')}</p>
                  </div>
                  <div className="ninety-card bg-ycod-green/10 text-center" style={{ transform: 'rotate(1deg)' }}>
                    <div className="text-3xl mb-2">🎉</div>
                    <p className="font-display font-bold text-ycod-black text-sm mb-1">{t('dmv.proposed_optout')}</p>
                    <div className="font-display text-4xl font-bold text-ycod-green mb-1">~85%+</div>
                    <p className="font-body text-xs text-ycod-black/60 dark:text-white/60">{t('dmv.register_optout')}</p>
                  </div>
                </div>

                <div className="p-4 bg-ycod-blue/10 rounded-md border-2 border-ycod-blue text-center mb-6">
                  <p className="font-display font-bold text-ycod-black">
                    {t('dmv.millions_more')}
                  </p>
                  <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 mt-1">
                    {t('dmv.bill_would_do')}
                  </p>
                </div>

                <div className="flex gap-3 justify-center flex-wrap">
                  <RetroButton
                    color="bg-ycod-yellow"
                    className="text-ycod-black"
                    onClick={reset}
                  >
                    {t('dmv.try_again')}
                  </RetroButton>
                  <RetroButton href="/bill" color="bg-ycod-blue" className="text-white">
                    {t('dmv.read_bill')}
                  </RetroButton>
                  <RetroButton href="/join" color="bg-ycod-coral" className="text-white">
                    {t('cta.join')}
                  </RetroButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
