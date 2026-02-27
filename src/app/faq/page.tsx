'use client';

// NOTE: Metadata cannot be exported from a 'use client' component.
// To add page metadata, create a separate layout.tsx in this directory or use generateMetadata:
// export const metadata: Metadata = {
//   title: 'Frequently Asked Questions',
//   description: 'Find answers to common questions about organ donation, opt-out systems, Bill A07954, and YCOD. Learn how you can help save lives.',
// };

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

interface FAQItem {
  qKey: string;
  aKey: string;
}

interface FAQCategory {
  titleKey: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  items: FAQItem[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    titleKey: 'faq.cat1.title',
    color: 'bg-ycod-coral',
    badgeBg: 'bg-ycod-coral/20',
    badgeText: 'text-ycod-coral',
    items: [
      { qKey: 'faq.1.q', aKey: 'faq.1.a' },
      { qKey: 'faq.2.q', aKey: 'faq.2.a' },
      { qKey: 'faq.3.q', aKey: 'faq.3.a' },
      { qKey: 'faq.4.q', aKey: 'faq.4.a' },
      { qKey: 'faq.5.q', aKey: 'faq.5.a' },
    ],
  },
  {
    titleKey: 'faq.cat2.title',
    color: 'bg-ycod-blue',
    badgeBg: 'bg-ycod-blue/20',
    badgeText: 'text-ycod-blue',
    items: [
      { qKey: 'faq.6.q', aKey: 'faq.6.a' },
      { qKey: 'faq.7.q', aKey: 'faq.7.a' },
      { qKey: 'faq.8.q', aKey: 'faq.8.a' },
      { qKey: 'faq.9.q', aKey: 'faq.9.a' },
      { qKey: 'faq.10.q', aKey: 'faq.10.a' },
    ],
  },
  {
    titleKey: 'faq.cat3.title',
    color: 'bg-ycod-green',
    badgeBg: 'bg-ycod-green/20',
    badgeText: 'text-ycod-green',
    items: [
      { qKey: 'faq.11.q', aKey: 'faq.11.a' },
      { qKey: 'faq.12.q', aKey: 'faq.12.a' },
      { qKey: 'faq.13.q', aKey: 'faq.13.a' },
      { qKey: 'faq.14.q', aKey: 'faq.14.a' },
      { qKey: 'faq.15.q', aKey: 'faq.15.a' },
    ],
  },
  {
    titleKey: 'faq.cat4.title',
    color: 'bg-ycod-yellow',
    badgeBg: 'bg-ycod-yellow/20',
    badgeText: 'text-ycod-black',
    items: [
      { qKey: 'faq.16.q', aKey: 'faq.16.a' },
      { qKey: 'faq.17.q', aKey: 'faq.17.a' },
      { qKey: 'faq.18.q', aKey: 'faq.18.a' },
      { qKey: 'faq.19.q', aKey: 'faq.19.a' },
      { qKey: 'faq.20.q', aKey: 'faq.20.a' },
    ],
  },
  {
    titleKey: 'faq.cat5.title',
    color: 'bg-ycod-pink',
    badgeBg: 'bg-ycod-pink/20',
    badgeText: 'text-ycod-coral',
    items: [
      { qKey: 'faq.21.q', aKey: 'faq.21.a' },
      { qKey: 'faq.22.q', aKey: 'faq.22.a' },
      { qKey: 'faq.23.q', aKey: 'faq.23.a' },
      { qKey: 'faq.24.q', aKey: 'faq.24.a' },
      { qKey: 'faq.25.q', aKey: 'faq.25.a' },
    ],
  },
];

const SECTION_BGS = [
  'bg-white dark:bg-ycod-black',
  'bg-ycod-black/5 dark:bg-white/5',
  'bg-white dark:bg-ycod-black',
  'bg-ycod-black/5 dark:bg-white/5',
  'bg-white dark:bg-ycod-black',
];

const DIVIDER_COLORS = ['#F07070', '#4A90D9', '#00C9A7', '#F7DC6F', '#F5A0B8'];

export default function FAQPage() {
  const { t } = useI18n();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const allKeys = FAQ_CATEGORIES.flatMap((cat) => cat.items.map((item) => item.qKey));

  const expandAll = () => {
    setOpenItems(new Set(allKeys));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  const allExpanded = allKeys.length > 0 && allKeys.every((key) => openItems.has(key));

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
            {t('faq.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Expand/Collapse All Control */}
      <section className="bg-white dark:bg-ycod-black transition-colors duration-300 pt-8 pb-0">
        <div className="max-w-4xl mx-auto px-4 flex justify-end">
          <button
            onClick={allExpanded ? collapseAll : expandAll}
            className="font-display text-sm font-bold px-4 py-2 rounded-full border-2 border-ycod-coral text-ycod-coral hover:bg-ycod-coral hover:text-white transition-colors duration-200"
          >
            {allExpanded ? t('faq.collapse_all') : t('faq.expand_all')}
          </button>
        </div>
      </section>

      {/* FAQ Categories */}
      {FAQ_CATEGORIES.map((category, catIndex) => (
        <div key={category.titleKey}>
          {catIndex > 0 && <SectionDivider color={DIVIDER_COLORS[catIndex - 1]} />}

          <section
            className={`py-12 md:py-16 ${SECTION_BGS[catIndex]} transition-colors duration-300`}
          >
            <div className="max-w-4xl mx-auto px-4">
              {/* Category Header */}
              <motion.div
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-display text-xs font-bold uppercase tracking-wider ${category.badgeBg} ${category.badgeText}`}
                  >
                    {t('faq.category_label', { num: String(catIndex + 1) })}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white">
                  {t(category.titleKey)}
                </h2>
              </motion.div>

              {/* Accordion Items */}
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems.has(item.qKey);
                  const globalIndex = catIndex * 5 + itemIndex;

                  return (
                    <motion.div
                      key={item.qKey}
                      className="ninety-card bg-white dark:bg-ycod-black border border-ycod-black/10 dark:border-white/10"
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
                            delay: itemIndex * 0.08,
                            ease: 'easeOut',
                          },
                        },
                      }}
                    >
                      <button
                        onClick={() => toggleItem(item.qKey)}
                        className="w-full flex items-start justify-between gap-4 text-left group"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${globalIndex}`}
                      >
                        <span className="font-display text-base md:text-lg font-bold text-ycod-black dark:text-white group-hover:text-ycod-coral dark:group-hover:text-ycod-coral transition-colors duration-200">
                          {t(item.qKey)}
                        </span>
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full ${category.color} flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="text-white"
                          >
                            <path
                              d="M7 1V13M1 7H13"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${globalIndex}`}
                            role="region"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-ycod-black/10 dark:border-white/10">
                              <p className="font-body text-base text-ycod-black/80 dark:text-white/80 leading-relaxed">
                                {t(item.aKey)}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      ))}

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
              {t('faq.cta_title')}
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('faq.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
                {t('cta.join')}
              </RetroButton>
              <RetroButton href="/bill" color="bg-white" className="text-ycod-black">
                {t('faq.cta_learn_bill')}
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
