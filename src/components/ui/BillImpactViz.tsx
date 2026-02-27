'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useI18n } from '@/lib/i18n';

export default function BillImpactViz() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const BEFORE_AFTER = [
    {
      label: t('impact.reg_rate'),
      before: '~50%',
      after: '~85%+',
      beforeWidth: 50,
      afterWidth: 85,
      colorBefore: '#F07070',
      colorAfter: '#00C9A7',
    },
    {
      label: t('impact.annual_donors'),
      before: '~1,600',
      after: '~2,700+',
      beforeWidth: 45,
      afterWidth: 80,
      colorBefore: '#F07070',
      colorAfter: '#00C9A7',
    },
    {
      label: t('impact.lives_saved'),
      before: '~800',
      after: '~2,100+',
      beforeWidth: 30,
      afterWidth: 80,
      colorBefore: '#F07070',
      colorAfter: '#00C9A7',
    },
    {
      label: t('impact.waitlist_reduction'),
      before: t('impact.growing'),
      after: t('impact.shrinking'),
      beforeWidth: 70,
      afterWidth: 30,
      colorBefore: '#F07070',
      colorAfter: '#00C9A7',
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="ninety-card bg-white dark:bg-ycod-black/80"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-ycod-black dark:text-white mb-2 text-center">
        {t('impact.title')}
      </h3>
      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 text-center mb-8">
        {t('impact.subtitle')}
      </p>

      <div className="space-y-6">
        {BEFORE_AFTER.map((item, index) => (
          <div key={index}>
            <p className="font-display font-bold text-sm text-ycod-black mb-2">{item.label}</p>
            <div className="space-y-1.5">
              {/* Before */}
              <div className="flex items-center gap-3">
                <span className="font-body text-xs text-ycod-black/50 w-14 text-right flex-shrink-0">{t('impact.before')}</span>
                <div className="flex-1 h-7 bg-gray-100 rounded border-2 border-ycod-black overflow-hidden relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 flex items-center justify-end pr-2 rounded-r-sm"
                    style={{ background: item.colorBefore }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.beforeWidth}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <span className="font-display font-bold text-xs text-white drop-shadow">{item.before}</span>
                  </motion.div>
                </div>
              </div>
              {/* After */}
              <div className="flex items-center gap-3">
                <span className="font-body text-xs text-ycod-green w-14 text-right flex-shrink-0 font-bold">{t('impact.after')}</span>
                <div className="flex-1 h-7 bg-gray-100 rounded border-2 border-ycod-black overflow-hidden relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 flex items-center justify-end pr-2 rounded-r-sm"
                    style={{ background: item.colorAfter }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.afterWidth}%` } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  >
                    <span className="font-display font-bold text-xs text-white drop-shadow">{item.after}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-ycod-blue/10 border-l-4 border-ycod-blue rounded-r-md">
        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
          {t('impact.note')}
        </p>
      </div>
    </motion.div>
  );
}
