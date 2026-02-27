'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

interface GlossaryTerm {
  key: string;
  letter: string;
  color: string;
}

const BRAND_COLORS = [
  'border-ycod-coral',
  'border-ycod-blue',
  'border-ycod-green',
  'border-ycod-yellow',
  'border-ycod-pink',
];

const GLOSSARY_TERMS: GlossaryTerm[] = [
  // A
  { key: 'allocation', letter: 'A', color: BRAND_COLORS[0] },
  { key: 'altruistic', letter: 'A', color: BRAND_COLORS[1] },
  // B
  { key: 'brain_death', letter: 'B', color: BRAND_COLORS[2] },
  { key: 'bioethics', letter: 'B', color: BRAND_COLORS[3] },
  // C
  { key: 'cadaveric', letter: 'C', color: BRAND_COLORS[4] },
  { key: 'cold_ischemia', letter: 'C', color: BRAND_COLORS[0] },
  { key: 'crossmatch', letter: 'C', color: BRAND_COLORS[1] },
  // D
  { key: 'deceased_donor', letter: 'D', color: BRAND_COLORS[2] },
  { key: 'dialysis', letter: 'D', color: BRAND_COLORS[3] },
  // H
  { key: 'hla', letter: 'H', color: BRAND_COLORS[4] },
  { key: 'histocompatibility', letter: 'H', color: BRAND_COLORS[0] },
  // I
  { key: 'immunosuppression', letter: 'I', color: BRAND_COLORS[1] },
  { key: 'informed_consent', letter: 'I', color: BRAND_COLORS[2] },
  // K
  { key: 'kidney_paired', letter: 'K', color: BRAND_COLORS[3] },
  // L
  { key: 'living_donor', letter: 'L', color: BRAND_COLORS[4] },
  { key: 'lvad', letter: 'L', color: BRAND_COLORS[0] },
  // O
  { key: 'opt_in', letter: 'O', color: BRAND_COLORS[1] },
  { key: 'opt_out', letter: 'O', color: BRAND_COLORS[2] },
  { key: 'opo', letter: 'O', color: BRAND_COLORS[3] },
  { key: 'optn', letter: 'O', color: BRAND_COLORS[4] },
  // P
  { key: 'presumed_consent', letter: 'P', color: BRAND_COLORS[0] },
  // R
  { key: 'rejection', letter: 'R', color: BRAND_COLORS[1] },
  { key: 'registration', letter: 'R', color: BRAND_COLORS[2] },
  // T
  { key: 'transplant', letter: 'T', color: BRAND_COLORS[3] },
  { key: 'tissue_typing', letter: 'T', color: BRAND_COLORS[4] },
  // U
  { key: 'unos', letter: 'U', color: BRAND_COLORS[0] },
  { key: 'uaga', letter: 'U', color: BRAND_COLORS[1] },
  // W
  { key: 'waitlist', letter: 'W', color: BRAND_COLORS[2] },
  // X
  { key: 'xeno', letter: 'X', color: BRAND_COLORS[3] },
  // Z
  { key: 'zero_mismatch', letter: 'Z', color: BRAND_COLORS[4] },
];

const ALPHABET_LETTERS = ['A', 'B', 'C', 'D', 'H', 'I', 'K', 'L', 'O', 'P', 'R', 'T', 'U', 'W', 'X', 'Z'];

const LETTER_COLORS: Record<string, string> = {
  A: 'bg-ycod-coral',
  B: 'bg-ycod-blue',
  C: 'bg-ycod-green',
  D: 'bg-ycod-yellow',
  H: 'bg-ycod-pink',
  I: 'bg-ycod-coral',
  K: 'bg-ycod-blue',
  L: 'bg-ycod-green',
  O: 'bg-ycod-yellow',
  P: 'bg-ycod-pink',
  R: 'bg-ycod-coral',
  T: 'bg-ycod-blue',
  U: 'bg-ycod-green',
  W: 'bg-ycod-yellow',
  X: 'bg-ycod-pink',
  Z: 'bg-ycod-coral',
};

export default function GlossaryPage() {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter((term) => {
    if (!searchQuery.trim()) return true;
    const termText = t(`glossary.${term.key}.term`).toLowerCase();
    const defText = t(`glossary.${term.key}.def`).toLowerCase();
    const query = searchQuery.toLowerCase();
    return termText.includes(query) || defText.includes(query);
  });

  const groupedTerms = ALPHABET_LETTERS.reduce<Record<string, GlossaryTerm[]>>((acc, letter) => {
    const termsForLetter = filteredTerms.filter((term) => term.letter === letter);
    if (termsForLetter.length > 0) {
      acc[letter] = termsForLetter;
    }
    return acc;
  }, {});

  const activeLetters = Object.keys(groupedTerms);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-yellow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-ycod-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('glossary.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-ycod-black/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('glossary.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* Search and Alphabet Navigation */}
      <section className="bg-white dark:bg-ycod-black transition-colors duration-300 py-8 sticky top-0 z-30 border-b border-ycod-black/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Search Input */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ycod-black/40 dark:text-white/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('glossary.search_placeholder')}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-ycod-black/15 dark:border-white/15 bg-white dark:bg-ycod-black text-ycod-black dark:text-white font-body text-base focus:outline-none focus:border-ycod-blue dark:focus:border-ycod-blue transition-colors duration-200 placeholder:text-ycod-black/40 dark:placeholder:text-white/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-ycod-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-ycod-black/20 dark:hover:bg-white/20 transition-colors duration-200"
                >
                  <svg
                    className="w-3 h-3 text-ycod-black/60 dark:text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>

          {/* Alphabet Navigation */}
          <motion.nav
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            aria-label={t('glossary.alphabet_nav_label')}
          >
            {ALPHABET_LETTERS.map((letter) => {
              const isActive = activeLetters.includes(letter);
              return (
                <button
                  key={letter}
                  onClick={() => isActive && scrollToLetter(letter)}
                  disabled={!isActive}
                  className={`w-9 h-9 rounded-lg font-display font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-ycod-black/10 dark:bg-white/10 text-ycod-black dark:text-white hover:bg-ycod-blue hover:text-white cursor-pointer'
                      : 'bg-ycod-black/5 dark:bg-white/5 text-ycod-black/25 dark:text-white/25 cursor-not-allowed'
                  }`}
                  aria-label={`${t('glossary.scroll_to_letter')} ${letter}`}
                >
                  {letter}
                </button>
              );
            })}
          </motion.nav>

          {/* Result count when searching */}
          {searchQuery.trim() && (
            <motion.p
              className="font-body text-sm text-ycod-black/60 dark:text-white/60 mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {t('glossary.results_count', { count: String(filteredTerms.length) })}
            </motion.p>
          )}
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-12 md:py-16 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          {activeLetters.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-display text-2xl font-bold text-ycod-black/40 dark:text-white/40 mb-2">
                {t('glossary.no_results_title')}
              </p>
              <p className="font-body text-ycod-black/60 dark:text-white/60">
                {t('glossary.no_results_subtitle')}
              </p>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {activeLetters.map((letter) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-48">
                  {/* Letter Header */}
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${LETTER_COLORS[letter]} font-display text-2xl font-bold text-white shadow-retro-sm`}
                    >
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-ycod-black/10 dark:bg-white/10" />
                  </motion.div>

                  {/* Terms for this letter */}
                  <div className="space-y-4">
                    {groupedTerms[letter].map((term, termIndex) => (
                      <motion.div
                        key={term.key}
                        className={`ninety-card bg-white dark:bg-ycod-black border border-ycod-black/10 dark:border-white/10 border-l-4 ${term.color}`}
                        style={{ transform: 'rotate(0deg)' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              delay: termIndex * 0.08,
                              ease: 'easeOut',
                            },
                          },
                        }}
                      >
                        <h3 className="font-display text-lg md:text-xl font-bold text-ycod-black dark:text-white mb-2">
                          {t(`glossary.${term.key}.term`)}
                        </h3>
                        <p className="font-body text-base text-ycod-black/80 dark:text-white/80 leading-relaxed">
                          {t(`glossary.${term.key}.def`)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA Section */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t('glossary.cta_title')}
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('glossary.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton href="/faq" color="bg-ycod-yellow" className="text-ycod-black">
                {t('glossary.cta_faq')}
              </RetroButton>
              <RetroButton href="/facts" color="bg-white" className="text-ycod-black">
                {t('glossary.cta_facts')}
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
