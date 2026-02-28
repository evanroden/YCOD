'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FactCard from '@/components/facts/FactCard';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import CountryComparisonChart from '@/components/ui/CountryComparisonChart';
import OrganBreakdownChart from '@/components/ui/OrganBreakdownChart';
import MythVsFact from '@/components/ui/MythVsFact';
import { FACTS, QUIZ_QUESTIONS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function FactsPage() {
  const { t } = useI18n();
  const [quizState, setQuizState] = useState<{
    currentQ: number;
    score: number;
    answered: number | null;
    finished: boolean;
  }>({ currentQ: 0, score: 0, answered: null, finished: false });

  const handleAnswer = (index: number) => {
    if (quizState.answered !== null) return;
    const correct = index === QUIZ_QUESTIONS[quizState.currentQ].correctIndex;
    setQuizState((prev) => ({
      ...prev,
      answered: index,
      score: correct ? prev.score + 1 : prev.score,
    }));
  };

  const nextQuestion = () => {
    if (quizState.currentQ >= QUIZ_QUESTIONS.length - 1) {
      setQuizState((prev) => ({ ...prev, finished: true }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentQ: prev.currentQ + 1,
        answered: null,
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState({ currentQ: 0, score: 0, answered: null, finished: false });
  };

  const currentQuestion = QUIZ_QUESTIONS[quizState.currentQ];

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-coral py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('facts.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('facts.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Facts Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {FACTS.map((fact, i) => (
            <FactCard
              key={i}
              stat={fact.stat}
              title={t(`fact.${i}.title`)}
              description={t(`fact.${i}.desc`)}
              icon={fact.icon}
              color={fact.color}
              index={i}
            />
          ))}
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Interactive Charts */}
      <section className="py-16 md:py-24 bg-ycod-black/5 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('facts.charts_title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
              {t('facts.charts_subtitle')}
            </p>
          </motion.div>
          <CountryComparisonChart />
          <OrganBreakdownChart />
        </div>
      </section>

      {/* Myths vs Facts */}
      <SectionDivider color="#F07070" />
      <MythVsFact />

      {/* Explore More */}
      <section className="py-12 md:py-16 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/glossary" className="ninety-card bg-ycod-green/20 hover:bg-ycod-green/40 transition-colors group">
              <span className="font-display font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">{t('nav.glossary')}</span>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 mt-1">{t('crosslink.glossary_prompt')}</p>
            </Link>
            <Link href="/resources" className="ninety-card bg-ycod-blue/20 hover:bg-ycod-blue/40 transition-colors group">
              <span className="font-display font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">{t('nav.resources')}</span>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 mt-1">{t('crosslink.resources_prompt')}</p>
            </Link>
            <Link href="/faq" className="ninety-card bg-ycod-yellow/20 hover:bg-ycod-yellow/40 transition-colors group">
              <span className="font-display font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">{t('nav.faq')}</span>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 mt-1">{t('crosslink.faq_prompt')}</p>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* Quiz Section */}
      <section className="py-16 md:py-24 bg-ycod-yellow/20 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-2">
              {t('facts.quiz_title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
              {t('facts.quiz_subtitle')}
            </p>
          </motion.div>

          <div className="ninety-card bg-white dark:bg-ycod-black max-w-2xl mx-auto">
            {!quizState.finished ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display font-bold text-ycod-blue">
                    {t('facts.quiz_question', { current: String(quizState.currentQ + 1), total: String(QUIZ_QUESTIONS.length) })}
                  </span>
                  <span className="font-display font-bold text-ycod-coral">
                    {t('facts.quiz_score', { score: String(quizState.score) })}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-6">
                  {t(`quiz.${quizState.currentQ}.q`)}
                </h3>

                <div className="space-y-3 mb-6">
                  {['a', 'b', 'c', 'd'].map((letter, i) => {
                    const option = t(`quiz.${quizState.currentQ}.${letter}`);
                    let optionClass = 'quiz-option bg-gray-50';
                    if (quizState.answered !== null) {
                      if (i === currentQuestion.correctIndex) {
                        optionClass = 'quiz-option correct';
                      } else if (i === quizState.answered) {
                        optionClass = 'quiz-option incorrect';
                      }
                    }

                    return (
                      <button
                        key={i}
                        className={`${optionClass} w-full text-left`}
                        onClick={() => handleAnswer(i)}
                        disabled={quizState.answered !== null}
                      >
                        <span className="font-display font-bold mr-2">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {quizState.answered !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-body text-sm text-ycod-black/80 mb-4 p-3 bg-ycod-green/20 rounded">
                      {t(`quiz.${quizState.currentQ}.explain`)}
                    </p>
                    <RetroButton
                      color="bg-ycod-blue"
                      className="text-white"
                      onClick={nextQuestion}
                    >
                      {quizState.currentQ >= QUIZ_QUESTIONS.length - 1
                        ? t('facts.quiz_results')
                        : t('facts.quiz_next')}
                    </RetroButton>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="font-display text-6xl font-bold text-ycod-coral mb-4">
                  {quizState.score}/{QUIZ_QUESTIONS.length}
                </div>
                <h3 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-2">
                  {quizState.score >= 4
                    ? t('facts.quiz_excellent')
                    : quizState.score >= 2
                    ? t('facts.quiz_good')
                    : t('facts.quiz_ok')}
                </h3>
                <p className="font-body text-ycod-black/70 dark:text-white/70 mb-6">
                  {t('facts.quiz_share')}
                </p>
                <div className="flex gap-4 justify-center">
                  <RetroButton
                    color="bg-ycod-yellow"
                    className="text-ycod-black"
                    onClick={resetQuiz}
                  >
                    {t('facts.quiz_retry')}
                  </RetroButton>
                  <RetroButton href="/join" color="bg-ycod-coral" className="text-white">
                    {t('cta.join')}
                  </RetroButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
