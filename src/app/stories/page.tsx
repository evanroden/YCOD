'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

interface Story {
  nameKey: string;
  organKey?: string;
  quoteKey: string;
  messageKey: string;
}

const RECIPIENTS: Story[] = [
  {
    nameKey: 'stories.recipients.1.name',
    organKey: 'stories.recipients.1.organ',
    quoteKey: 'stories.recipients.1.quote',
    messageKey: 'stories.recipients.1.message',
  },
  {
    nameKey: 'stories.recipients.2.name',
    organKey: 'stories.recipients.2.organ',
    quoteKey: 'stories.recipients.2.quote',
    messageKey: 'stories.recipients.2.message',
  },
  {
    nameKey: 'stories.recipients.3.name',
    organKey: 'stories.recipients.3.organ',
    quoteKey: 'stories.recipients.3.quote',
    messageKey: 'stories.recipients.3.message',
  },
];

const DONOR_FAMILIES: Story[] = [
  {
    nameKey: 'stories.donors.1.name',
    quoteKey: 'stories.donors.1.quote',
    messageKey: 'stories.donors.1.message',
  },
  {
    nameKey: 'stories.donors.2.name',
    quoteKey: 'stories.donors.2.quote',
    messageKey: 'stories.donors.2.message',
  },
];

const LIVING_DONORS: Story[] = [
  {
    nameKey: 'stories.living.1.name',
    quoteKey: 'stories.living.1.quote',
    messageKey: 'stories.living.1.message',
  },
  {
    nameKey: 'stories.living.2.name',
    quoteKey: 'stories.living.2.quote',
    messageKey: 'stories.living.2.message',
  },
];

const MEMBERS: Story[] = [
  {
    nameKey: 'stories.members.1.name',
    quoteKey: 'stories.members.1.quote',
    messageKey: 'stories.members.1.message',
  },
  {
    nameKey: 'stories.members.2.name',
    quoteKey: 'stories.members.2.quote',
    messageKey: 'stories.members.2.message',
  },
];

function StoryCard({
  story,
  badgeColor,
  badgeKey,
  index,
  t,
}: {
  story: Story;
  badgeColor: string;
  badgeKey: string;
  index: number;
  t: (key: string) => string;
}) {
  const borderColors: Record<string, string> = {
    'bg-ycod-coral': 'border-ycod-coral',
    'bg-ycod-blue': 'border-ycod-blue',
    'bg-ycod-green': 'border-ycod-green',
    'bg-ycod-yellow': 'border-ycod-yellow',
  };

  return (
    <motion.div
      className={`ninety-card bg-white dark:bg-ycod-black/80 border-t-4 ${borderColors[badgeColor] || 'border-ycod-coral'}`}
      style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
      variants={fadeInUp}
      whileHover={{ rotate: 0, scale: 1.02, boxShadow: '6px 6px 0px #1A1A2E' }}
      transition={{ duration: 0.2 }}
    >
      {/* Badge */}
      <div className="mb-5">
        <span
          className={`${badgeColor} inline-block px-3 py-1 rounded-full font-display text-xs font-bold uppercase tracking-wide ${
            badgeColor === 'bg-ycod-yellow' ? 'text-ycod-black' : 'text-white'
          }`}
        >
          {story.organKey ? t(story.organKey) : t(badgeKey)}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="mb-6">
        <span className="font-display text-4xl text-ycod-coral/40 leading-none select-none" aria-hidden="true">
          &ldquo;
        </span>
        <p className="font-body text-lg md:text-xl italic text-ycod-black/85 dark:text-white/85 leading-relaxed -mt-4 ml-2">
          {t(story.quoteKey)}
        </p>
        <span className="font-display text-4xl text-ycod-coral/40 leading-none select-none float-right -mt-2" aria-hidden="true">
          &rdquo;
        </span>
      </blockquote>

      {/* Name */}
      <div className="clear-both pt-2 border-t border-ycod-black/10 dark:border-white/10">
        <p className="font-display font-bold text-ycod-black dark:text-white mt-3">
          {t(story.nameKey)}
        </p>
        <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 italic mt-1">
          {t(story.messageKey)}
        </p>
      </div>
    </motion.div>
  );
}

export default function StoriesPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-pink py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('stories.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('stories.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 1: Transplant Recipients */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('stories.recipients.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('stories.recipients.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {RECIPIENTS.map((story, i) => (
              <StoryCard
                key={story.nameKey}
                story={story}
                badgeColor="bg-ycod-coral"
                badgeKey="stories.recipients.badge"
                index={i}
                t={t}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pull Quote 1 */}
      <section className="bg-ycod-coral/10 dark:bg-ycod-coral/5 py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-6xl md:text-7xl text-ycod-coral/30 leading-none select-none block" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white leading-snug -mt-6">
              {t('stories.pullquote.1')}
            </p>
            <span className="font-display text-6xl md:text-7xl text-ycod-coral/30 leading-none select-none block text-right -mt-2" aria-hidden="true">
              &rdquo;
            </span>
          </motion.blockquote>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Section 2: Donor Families */}
      <section className="py-16 md:py-24 bg-ycod-blue/5 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('stories.donors.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('stories.donors.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {DONOR_FAMILIES.map((story, i) => (
              <StoryCard
                key={story.nameKey}
                story={story}
                badgeColor="bg-ycod-blue"
                badgeKey="stories.donors.badge"
                index={i}
                t={t}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pull Quote 2 */}
      <section className="bg-ycod-blue/10 dark:bg-ycod-blue/5 py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-6xl md:text-7xl text-ycod-blue/30 leading-none select-none block" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white leading-snug -mt-6">
              {t('stories.pullquote.2')}
            </p>
            <span className="font-display text-6xl md:text-7xl text-ycod-blue/30 leading-none select-none block text-right -mt-2" aria-hidden="true">
              &rdquo;
            </span>
          </motion.blockquote>
        </div>
      </section>

      <SectionDivider color="#00C9A7" />

      {/* Section 3: Living Donors */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('stories.living.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('stories.living.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {LIVING_DONORS.map((story, i) => (
              <StoryCard
                key={story.nameKey}
                story={story}
                badgeColor="bg-ycod-green"
                badgeKey="stories.living.badge"
                index={i}
                t={t}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pull Quote 3 */}
      <section className="bg-ycod-green/10 dark:bg-ycod-green/5 py-12 md:py-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-6xl md:text-7xl text-ycod-green/30 leading-none select-none block" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white leading-snug -mt-6">
              {t('stories.pullquote.3')}
            </p>
            <span className="font-display text-6xl md:text-7xl text-ycod-green/30 leading-none select-none block text-right -mt-2" aria-hidden="true">
              &rdquo;
            </span>
          </motion.blockquote>
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* Section 4: YCOD Members */}
      <section className="py-16 md:py-24 bg-ycod-yellow/10 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
              {t('stories.members.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('stories.members.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {MEMBERS.map((story, i) => (
              <StoryCard
                key={story.nameKey}
                story={story}
                badgeColor="bg-ycod-yellow"
                badgeKey="stories.members.badge"
                index={i}
                t={t}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t('stories.cta.title')}
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('stories.cta.subtitle')}
            </p>
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black text-lg">
              {t('stories.cta.button')}
            </RetroButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
