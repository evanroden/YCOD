'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroButton from './RetroButton';

type SimStep = 'intro' | 'opt-in-form' | 'opt-in-result' | 'opt-out-form' | 'opt-out-result' | 'compare';

export default function DMVSimulator() {
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
            Experience the Difference
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            Walk through both systems yourself. See why defaults matter.
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
                  You&apos;re at the DMV, renewing your license.
                </h3>
                <p className="font-body text-ycod-black/70 dark:text-white/70 mb-8 max-w-md mx-auto">
                  You&apos;ll go through the organ donation question two ways: the current opt-in system
                  and the proposed opt-out system. Watch how the default changes your experience.
                </p>
                <RetroButton
                  color="bg-ycod-blue"
                  className="text-white"
                  onClick={() => setStep('opt-in-form')}
                >
                  Start: Current System (Opt-In)
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
                    CURRENT SYSTEM
                  </span>
                  <span className="font-body text-sm text-ycod-black/60 dark:text-white/60">Opt-In</span>
                </div>

                <div className="p-5 bg-gray-50 rounded-md border-2 border-dashed border-gray-300 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-display font-bold text-ycod-black dark:text-white mb-1">
                        DMV License Application — Section 7
                      </p>
                      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 italic">
                        (After 45 minutes of paperwork, eye tests, and photos...)
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border-2 border-ycod-black">
                    <p className="font-body text-sm text-ycod-black mb-4">
                      <strong>Would you like to register as an organ and tissue donor?</strong>
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
                        ☐ Yes, I want to register as an organ donor
                      </button>
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optInChoice === 'skip'
                            ? 'border-ycod-coral bg-ycod-coral/10 text-ycod-black'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptInChoice('skip')}
                      >
                        ☐ Skip this question
                      </button>
                    </div>
                    <p className="font-body text-xs text-ycod-black/40 mt-3 italic">
                      Most people skip — they&apos;re tired, rushed, and just want their license.
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
                      Submit Application →
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
                    ? 'You registered! You\'re in the minority.'
                    : 'You skipped. So do most people.'}
                </h3>
                <div className="ninety-card bg-gray-50 mb-6 inline-block text-left" style={{ transform: 'rotate(-0.5deg)' }}>
                  <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                    {optInChoice === 'yes' ? (
                      <>
                        Only about <strong>50% of New Yorkers</strong> check &quot;yes.&quot; The rest skip
                        it — not because they oppose donation, but because <strong>the default is
                        &quot;no.&quot;</strong>
                      </>
                    ) : (
                      <>
                        You&apos;re in good company — about <strong>50% of New Yorkers</strong> skip this
                        question. Not because they&apos;re against donation, but because <strong>the
                        default does nothing</strong> and they&apos;re tired of forms.
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <RetroButton
                    color="bg-ycod-blue"
                    className="text-white"
                    onClick={() => setStep('opt-out-form')}
                  >
                    Now Try: Proposed System (Opt-Out) →
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
                    PROPOSED SYSTEM
                  </span>
                  <span className="font-body text-sm text-ycod-black/60 dark:text-white/60">Opt-Out</span>
                </div>

                <div className="p-5 bg-gray-50 rounded-md border-2 border-dashed border-gray-300 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-display font-bold text-ycod-black dark:text-white mb-1">
                        DMV License Application — Section 7
                      </p>
                      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 italic">
                        (Same DMV, same paperwork, same tired applicant...)
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border-2 border-ycod-black">
                    <div className="p-3 bg-ycod-green/10 rounded border border-ycod-green mb-4">
                      <p className="font-body text-sm text-ycod-black">
                        ✅ <strong>You are registered as an organ and tissue donor.</strong>
                      </p>
                      <p className="font-body text-xs text-ycod-black/60 dark:text-white/60 mt-1">
                        You will receive confirmation by mail. You may opt out at any time.
                      </p>
                    </div>
                    <p className="font-body text-sm text-ycod-black mb-3">
                      <strong>Would you like to change this?</strong>
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
                        ☐ Keep my registration (do nothing)
                      </button>
                      <button
                        className={`w-full text-left p-3 rounded border-2 font-body text-sm transition-all ${
                          optOutChoice === 'remove'
                            ? 'border-ycod-coral bg-ycod-coral/10'
                            : 'border-gray-300 hover:border-ycod-blue'
                        }`}
                        onClick={() => setOptOutChoice('remove')}
                      >
                        ☐ Remove me from the donor registry
                      </button>
                    </div>
                    <p className="font-body text-xs text-ycod-black/40 mt-3 italic">
                      Most people do nothing — and that&apos;s the point. The default saves lives.
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
                      Submit Application →
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
                    ? 'You stayed registered. No extra effort required.'
                    : 'Your choice is respected. You opted out.'}
                </h3>
                <div className="ninety-card bg-gray-50 mb-6 inline-block text-left" style={{ transform: 'rotate(0.5deg)' }}>
                  <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                    {optOutChoice === 'keep' ? (
                      <>
                        In opt-out countries, <strong>80–90% of people stay registered</strong> simply because
                        the default is &quot;yes.&quot; No one is forced — but the path of least resistance
                        saves lives.
                      </>
                    ) : (
                      <>
                        Opt-out doesn&apos;t mean forced. <strong>You can always say no.</strong> The difference
                        is that the default helps instead of hurts. People who want to opt out still can — easily.
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <RetroButton
                    color="bg-ycod-coral"
                    className="text-white"
                    onClick={() => setStep('compare')}
                  >
                    See the Comparison →
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
                  Same Person. Same DMV. Different Default.
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="ninety-card bg-ycod-coral/10 text-center" style={{ transform: 'rotate(-1deg)' }}>
                    <div className="text-3xl mb-2">😐</div>
                    <p className="font-display font-bold text-ycod-black text-sm mb-1">Current: Opt-In</p>
                    <div className="font-display text-4xl font-bold text-ycod-coral mb-1">~50%</div>
                    <p className="font-body text-xs text-ycod-black/60 dark:text-white/60">register in NY</p>
                  </div>
                  <div className="ninety-card bg-ycod-green/10 text-center" style={{ transform: 'rotate(1deg)' }}>
                    <div className="text-3xl mb-2">🎉</div>
                    <p className="font-display font-bold text-ycod-black text-sm mb-1">Proposed: Opt-Out</p>
                    <div className="font-display text-4xl font-bold text-ycod-green mb-1">~85%+</div>
                    <p className="font-body text-xs text-ycod-black/60 dark:text-white/60">register in opt-out countries</p>
                  </div>
                </div>

                <div className="p-4 bg-ycod-blue/10 rounded-md border-2 border-ycod-blue text-center mb-6">
                  <p className="font-display font-bold text-ycod-black">
                    That&apos;s millions more potential donors — with zero extra effort from anyone.
                  </p>
                  <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 mt-1">
                    This is what YCOD&apos;s Bill A07954 would do for New York.
                  </p>
                </div>

                <div className="flex gap-3 justify-center flex-wrap">
                  <RetroButton
                    color="bg-ycod-yellow"
                    className="text-ycod-black"
                    onClick={reset}
                  >
                    Try Again
                  </RetroButton>
                  <RetroButton href="/bill" color="bg-ycod-blue" className="text-white">
                    Read the Bill
                  </RetroButton>
                  <RetroButton href="/join" color="bg-ycod-coral" className="text-white">
                    Join the Movement
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
