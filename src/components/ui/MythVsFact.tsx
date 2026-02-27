'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MythFactPair {
  myth: string;
  fact: string;
  source?: string;
}

const MYTHS: MythFactPair[] = [
  {
    myth: 'Doctors won\'t try as hard to save me if I\'m a registered donor.',
    fact: 'Your medical team\'s only job is to save YOUR life. Organ donation is only considered after all life-saving measures have been exhausted and death is declared by a completely separate team.',
  },
  {
    myth: 'I\'m too old to be an organ donor.',
    fact: 'There is no age limit for organ donation. Cecil Lockhart donated organs at age 95. Medical suitability is determined at the time of death, not by your birthday.',
  },
  {
    myth: 'My religion doesn\'t allow organ donation.',
    fact: 'No major world religion opposes organ donation. Christianity, Judaism, Islam, Hinduism, Buddhism, and Sikhism all support it as an act of compassion and generosity.',
  },
  {
    myth: 'If I donate, my body won\'t be suitable for an open-casket funeral.',
    fact: 'Organ and tissue recovery is performed by skilled surgeons in a sterile operating room. The body is treated with dignity and respect, and an open-casket funeral is absolutely possible.',
  },
  {
    myth: 'Rich or famous people get organs faster.',
    fact: 'The organ allocation system (managed by UNOS) is based on medical urgency, blood type, time on the waitlist, and geographic proximity — not wealth, fame, or social status.',
  },
  {
    myth: 'Organ donation costs money for the donor\'s family.',
    fact: 'There is zero cost to the donor\'s family for organ donation. All medical costs related to donation are covered by the organ procurement organization or the recipient\'s insurance.',
  },
];

export default function MythVsFact() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const revealAll = () => {
    if (allRevealed) {
      setFlippedCards(new Set());
    } else {
      setFlippedCards(new Set(MYTHS.map((_, i) => i)));
    }
    setAllRevealed(!allRevealed);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-3">
            Myths vs. Facts
          </h2>
          <p className="font-body text-lg text-ycod-black/70 mb-4">
            Tap each myth to reveal the truth. How many did you believe?
          </p>
          <button
            onClick={revealAll}
            className="font-body text-sm text-ycod-blue hover:text-ycod-coral transition-colors underline"
          >
            {allRevealed ? 'Hide all answers' : 'Reveal all answers'}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MYTHS.map((item, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <motion.div
                key={index}
                className="cursor-pointer perspective-1000"
                onClick={() => toggleCard(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                role="button"
                aria-label={isFlipped ? 'Show myth' : 'Reveal fact'}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleCard(index)}
              >
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="myth"
                      className="ninety-card bg-ycod-coral/15 min-h-[180px] flex flex-col justify-between"
                      style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-ycod-coral text-white font-display font-bold text-xs rounded border-2 border-ycod-black mb-3">
                          MYTH
                        </span>
                        <p className="font-body text-ycod-black/90 font-semibold">
                          &ldquo;{item.myth}&rdquo;
                        </p>
                      </div>
                      <p className="font-body text-xs text-ycod-coral/60 mt-3">
                        Tap to reveal the truth →
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="fact"
                      className="ninety-card bg-ycod-green/15 min-h-[180px] flex flex-col justify-between"
                      style={{ transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` }}
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 bg-ycod-green text-white font-display font-bold text-xs rounded border-2 border-ycod-black mb-3">
                          FACT
                        </span>
                        <p className="font-body text-ycod-black/90">
                          {item.fact}
                        </p>
                      </div>
                      <p className="font-body text-xs text-ycod-green/60 mt-3">
                        ← Tap to see the myth
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
