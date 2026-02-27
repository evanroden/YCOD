'use client';

import { motion } from 'framer-motion';
import MemphisBackground from '@/components/ui/MemphisBackground';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function MissionStatement() {
  const { t } = useI18n();

  return (
    <MemphisBackground variant="green" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            {t('mission.title')}
          </h2>
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-8">
            {t('mission.quote')}
          </blockquote>
          <p className="font-body text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            {t('mission.description')}
          </p>
        </motion.div>

        <motion.div
          className="ninety-card bg-white/95 max-w-2xl mx-auto"
          style={{ transform: 'rotate(1deg)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-body text-lg italic text-ycod-black mb-3">
            {t('mission.henry_quote')}
          </p>
          <p className="font-display font-bold text-ycod-blue">{t('mission.henry_cite')}</p>
        </motion.div>
      </div>
    </MemphisBackground>
  );
}
