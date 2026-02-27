'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

interface ResourceCard {
  titleKey: string;
  descKey: string;
  icon: string;
  borderColor: string;
}

const studentCards: ResourceCard[] = [
  {
    titleKey: 'resources.students.club.title',
    descKey: 'resources.students.club.desc',
    icon: '\u{1F4DA}',
    borderColor: 'border-ycod-blue',
  },
  {
    titleKey: 'resources.students.social.title',
    descKey: 'resources.students.social.desc',
    icon: '\u{1F4F1}',
    borderColor: 'border-ycod-pink',
  },
  {
    titleKey: 'resources.students.letter.title',
    descKey: 'resources.students.letter.desc',
    icon: '\u2709\uFE0F',
    borderColor: 'border-ycod-coral',
  },
  {
    titleKey: 'resources.students.drive.title',
    descKey: 'resources.students.drive.desc',
    icon: '\u{1F3AA}',
    borderColor: 'border-ycod-green',
  },
];

const educatorCards: ResourceCard[] = [
  {
    titleKey: 'resources.educators.science.title',
    descKey: 'resources.educators.science.desc',
    icon: '\u{1F52C}',
    borderColor: 'border-ycod-blue',
  },
  {
    titleKey: 'resources.educators.policy.title',
    descKey: 'resources.educators.policy.desc',
    icon: '\u{1F4CA}',
    borderColor: 'border-ycod-yellow',
  },
  {
    titleKey: 'resources.educators.ethics.title',
    descKey: 'resources.educators.ethics.desc',
    icon: '\u{1F4AD}',
    borderColor: 'border-ycod-coral',
  },
  {
    titleKey: 'resources.educators.assembly.title',
    descKey: 'resources.educators.assembly.desc',
    icon: '\u{1F3A4}',
    borderColor: 'border-ycod-green',
  },
];

const healthcareCards: ResourceCard[] = [
  {
    titleKey: 'resources.healthcare.patients.title',
    descKey: 'resources.healthcare.patients.desc',
    icon: '\u{1FA7A}',
    borderColor: 'border-ycod-blue',
  },
  {
    titleKey: 'resources.healthcare.eol.title',
    descKey: 'resources.healthcare.eol.desc',
    icon: '\u{1F91D}',
    borderColor: 'border-ycod-pink',
  },
  {
    titleKey: 'resources.healthcare.referral.title',
    descKey: 'resources.healthcare.referral.desc',
    icon: '\u{1F517}',
    borderColor: 'border-ycod-green',
  },
];

const communityCards: ResourceCard[] = [
  {
    titleKey: 'resources.community.event.title',
    descKey: 'resources.community.event.desc',
    icon: '\u{1F389}',
    borderColor: 'border-ycod-coral',
  },
  {
    titleKey: 'resources.community.faith.title',
    descKey: 'resources.community.faith.desc',
    icon: '\u26EA',
    borderColor: 'border-ycod-yellow',
  },
  {
    titleKey: 'resources.community.partner.title',
    descKey: 'resources.community.partner.desc',
    icon: '\u{1F3E2}',
    borderColor: 'border-ycod-blue',
  },
];

function ResourceCardComponent({
  card,
  index,
  t,
}: {
  card: ResourceCard;
  index: number;
  t: (key: string) => string;
}) {
  const rotations = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.5];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div variants={fadeInUp}>
      <div
        className={`ninety-card bg-white dark:bg-ycod-black/80 border-l-4 ${card.borderColor}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl flex-shrink-0 mt-1" role="img" aria-hidden="true">
            {card.icon}
          </span>
          <div>
            <h3 className="font-display text-lg md:text-xl font-bold text-ycod-black dark:text-white mb-2">
              {t(card.titleKey)}
            </h3>
            <p className="font-body text-sm md:text-base text-ycod-black/70 dark:text-white/70 leading-relaxed">
              {t(card.descKey)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResourcesPage() {
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
            {t('resources.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('resources.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 1: For Students */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
              {t('resources.students.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('resources.students.intro')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {studentCards.map((card, i) => (
              <ResourceCardComponent key={card.titleKey} card={card} index={i} t={t} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Section 2: For Educators */}
      <section className="py-16 md:py-24 bg-ycod-pink/20 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
              {t('resources.educators.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('resources.educators.intro')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educatorCards.map((card, i) => (
              <ResourceCardComponent key={card.titleKey} card={card} index={i} t={t} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* Section 3: For Healthcare Professionals */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
              {t('resources.healthcare.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('resources.healthcare.intro')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {healthcareCards.map((card, i) => (
              <ResourceCardComponent key={card.titleKey} card={card} index={i} t={t} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#00C9A7" />

      {/* Section 4: For Community Leaders */}
      <section className="py-16 md:py-24 bg-ycod-green/10 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
              {t('resources.community.title')}
            </h2>
            <p className="font-body text-lg text-ycod-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t('resources.community.intro')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {communityCards.map((card, i) => (
              <ResourceCardComponent key={card.titleKey} card={card} index={i} t={t} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* Bottom CTA */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {t('resources.cta_title')}
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t('resources.cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black text-lg">
                {t('resources.cta_join')}
              </RetroButton>
              <RetroButton href="/contact" color="bg-white dark:bg-ycod-black transition-colors duration-300" className="text-ycod-black dark:text-white text-lg">
                {t('resources.cta_contact')}
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
