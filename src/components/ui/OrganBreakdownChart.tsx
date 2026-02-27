'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface OrganData {
  organ: string;
  percentage: number;
  count: string;
  color: string;
  icon: string;
}

const ORGAN_DATA: (OrganData & { i18nKey: string })[] = [
  { organ: 'Kidney', i18nKey: 'organ.kidney', percentage: 85, count: '~87,500', color: '#F07070', icon: '🫘' },
  { organ: 'Liver', i18nKey: 'organ.liver', percentage: 10, count: '~10,300', color: '#4A90D9', icon: '🫀' },
  { organ: 'Heart', i18nKey: 'organ.heart', percentage: 3, count: '~3,100', color: '#F5A0B8', icon: '❤️' },
  { organ: 'Lung', i18nKey: 'organ.lung', percentage: 1, count: '~1,000', color: '#00C9A7', icon: '🫁' },
  { organ: 'Other', i18nKey: 'organ.other', percentage: 1, count: '~1,100', color: '#F7DC6F', icon: '🏥' },
];

function DonutSegment({
  percentage,
  offset,
  color,
  delay,
  isInView,
  isHovered,
}: {
  percentage: number;
  offset: number;
  color: string;
  delay: number;
  isInView: boolean;
  isHovered: boolean;
}) {
  const circumference = 2 * Math.PI * 80;
  const strokeLength = (percentage / 100) * circumference;
  const strokeOffset = -(offset / 100) * circumference;

  return (
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      fill="none"
      stroke={color}
      strokeWidth={isHovered ? 32 : 28}
      strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
      strokeDashoffset={strokeOffset}
      strokeLinecap="butt"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ transition: 'stroke-width 0.2s ease' }}
    />
  );
}

export default function OrganBreakdownChart() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  let cumulativeOffset = 0;

  return (
    <motion.div
      ref={ref}
      className="ninety-card bg-white dark:bg-ycod-black/80"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-ycod-black dark:text-white mb-2 text-center">
        {t('organ.title')}
      </h3>
      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 text-center mb-8">
        {t('organ.subtitle')}
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Donut Chart */}
        <div className="relative flex-shrink-0">
          <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
            {ORGAN_DATA.map((item, index) => {
              const segment = (
                <DonutSegment
                  key={item.organ}
                  percentage={item.percentage}
                  offset={cumulativeOffset}
                  color={item.color}
                  delay={index * 0.15}
                  isInView={isInView}
                  isHovered={hoveredIndex === index}
                />
              );
              cumulativeOffset += item.percentage;
              return segment;
            })}
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-bold text-ycod-black">
              {hoveredIndex !== null ? ORGAN_DATA[hoveredIndex].percentage + '%' : '103K+'}
            </span>
            <span className="font-body text-xs text-ycod-black/60 dark:text-white/60">
              {hoveredIndex !== null ? t(ORGAN_DATA[hoveredIndex].i18nKey) : t('organ.waiting')}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2 w-full">
          {ORGAN_DATA.map((item, index) => (
            <motion.div
              key={item.organ}
              className={`flex items-center gap-3 p-2.5 rounded-md cursor-default transition-colors ${
                hoveredIndex === index ? 'bg-gray-100' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div
                className="w-4 h-4 rounded-sm border-2 border-ycod-black flex-shrink-0"
                style={{ background: item.color }}
              />
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <span className="font-display font-bold text-sm text-ycod-black">{t(item.i18nKey)}</span>
                <span className="font-body text-xs text-ycod-black/50 ml-2">{item.count} {t('organ.people')}</span>
              </div>
              <span className="font-display font-bold text-sm" style={{ color: item.color }}>
                {item.percentage}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kidney callout */}
      <div className="mt-6 p-3 bg-ycod-coral/10 border-l-4 border-ycod-coral rounded-r-md">
        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
          {t('organ.callout')}
        </p>
      </div>
    </motion.div>
  );
}
