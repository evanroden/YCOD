'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface CountryData {
  country: string;
  rate: number;
  system: 'opt-in' | 'opt-out';
  flag: string;
  color: string;
}

const COUNTRY_DATA: (CountryData & { i18nKey: string })[] = [
  { country: 'Spain', i18nKey: 'chart.country.spain', rate: 90, system: 'opt-out', flag: '🇪🇸', color: '#00C9A7' },
  { country: 'France', i18nKey: 'chart.country.france', rate: 83, system: 'opt-out', flag: '🇫🇷', color: '#00C9A7' },
  { country: 'UK', i18nKey: 'chart.country.uk', rate: 80, system: 'opt-out', flag: '🇬🇧', color: '#00C9A7' },
  { country: 'Austria', i18nKey: 'chart.country.austria', rate: 78, system: 'opt-out', flag: '🇦🇹', color: '#00C9A7' },
  { country: 'Netherlands', i18nKey: 'chart.country.netherlands', rate: 73, system: 'opt-out', flag: '🇳🇱', color: '#00C9A7' },
  { country: 'US Average', i18nKey: 'chart.country.us', rate: 60, system: 'opt-in', flag: '🇺🇸', color: '#F7DC6F' },
  { country: 'New York', i18nKey: 'chart.country.ny', rate: 50, system: 'opt-in', flag: '🗽', color: '#F07070' },
];

export default function CountryComparisonChart() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      className="ninety-card bg-white dark:bg-ycod-black/80"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-ycod-black dark:text-white mb-2 text-center">
        {t('chart.reg_title')}
      </h3>
      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 text-center mb-8">
        {t('chart.reg_subtitle')}
      </p>

      {/* Legend */}
      <div className="flex gap-6 justify-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm border-2 border-ycod-black" style={{ background: '#00C9A7' }} />
          <span className="font-body text-xs text-ycod-black/70 dark:text-white/70">{t('chart.optout_system')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm border-2 border-ycod-black" style={{ background: '#F7DC6F' }} />
          <span className="font-body text-xs text-ycod-black/70 dark:text-white/70">{t('chart.optin_system')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm border-2 border-ycod-black" style={{ background: '#F07070' }} />
          <span className="font-body text-xs text-ycod-black/70 dark:text-white/70">{t('chart.new_york')}</span>
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-3">
        {COUNTRY_DATA.map((item, index) => (
          <div
            key={item.country}
            className="group cursor-default"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg w-8 text-center flex-shrink-0">{item.flag}</span>
              <span className="font-display font-bold text-sm text-ycod-black w-24 flex-shrink-0">
                {t(item.i18nKey)}
              </span>
              <div className="flex-1 relative h-8 bg-gray-100 rounded-md border-2 border-ycod-black overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-r-sm flex items-center justify-end pr-2"
                  style={{ background: item.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.rate}%` } : { width: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <span className="font-display font-bold text-sm text-ycod-black">
                    {item.rate}%
                  </span>
                </motion.div>
              </div>
            </div>
            {/* Tooltip */}
            {hoveredIndex === index && (
              <motion.div
                className="ml-11 mt-1 px-3 py-1.5 bg-ycod-black text-white rounded text-xs font-body"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                {item.system === 'opt-out'
                  ? t('chart.tooltip_optout', { country: t(item.i18nKey) })
                  : item.i18nKey === 'chart.country.ny'
                  ? t('chart.tooltip_ny')
                  : t('chart.tooltip_optin')}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Annotation */}
      <div className="mt-6 p-3 bg-ycod-green/10 border-l-4 border-ycod-green rounded-r-md">
        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
          {t('chart.reg_annotation')}
        </p>
      </div>
    </motion.div>
  );
}
