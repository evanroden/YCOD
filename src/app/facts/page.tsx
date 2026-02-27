'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FactCard from '@/components/facts/FactCard';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { FACTS, QUIZ_QUESTIONS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function FactsPage() {
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
            Fast Facts
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The numbers that drive our mission. Share these — they save lives.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Facts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {FACTS.map((fact, i) => (
            <FactCard key={fact.title} {...fact} index={i} />
          ))}
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* Quiz Section */}
      <section className="py-16 md:py-24 bg-ycod-yellow/20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-2">
              Did You Know?
            </h2>
            <p className="font-body text-lg text-ycod-black/70">
              Test your organ donation knowledge with our quick quiz!
            </p>
          </motion.div>

          <div className="ninety-card bg-white max-w-2xl mx-auto">
            {!quizState.finished ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display font-bold text-ycod-blue">
                    Question {quizState.currentQ + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="font-display font-bold text-ycod-coral">
                    Score: {quizState.score}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-ycod-black mb-6">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, i) => {
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
                      {currentQuestion.explanation}
                    </p>
                    <RetroButton
                      color="bg-ycod-blue"
                      className="text-white"
                      onClick={nextQuestion}
                    >
                      {quizState.currentQ >= QUIZ_QUESTIONS.length - 1
                        ? 'See Results'
                        : 'Next Question'}
                    </RetroButton>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="font-display text-6xl font-bold text-ycod-coral mb-4">
                  {quizState.score}/{QUIZ_QUESTIONS.length}
                </div>
                <h3 className="font-display text-2xl font-bold text-ycod-black mb-2">
                  {quizState.score >= 4
                    ? 'Amazing! You know your stuff!'
                    : quizState.score >= 2
                    ? 'Good effort! Keep learning!'
                    : 'Now you know more than before!'}
                </h3>
                <p className="font-body text-ycod-black/70 mb-6">
                  Share these facts with friends and family to spread awareness!
                </p>
                <div className="flex gap-4 justify-center">
                  <RetroButton
                    color="bg-ycod-yellow"
                    className="text-ycod-black"
                    onClick={resetQuiz}
                  >
                    Try Again
                  </RetroButton>
                  <RetroButton href="/join" color="bg-ycod-coral" className="text-white">
                    Join the Movement
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
