'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface Metric {
  key: string;
  target: number;
  suffix: string;
  color: string;
}

const METRICS: Metric[] = [
  { key: 'about.impact.members', target: 3000, suffix: '+', color: 'text-ycod-coral' },
  { key: 'about.impact.schools', target: 50, suffix: '+', color: 'text-ycod-blue' },
  { key: 'about.impact.states', target: 12, suffix: '', color: 'text-ycod-green' },
  { key: 'about.impact.countries', target: 5, suffix: '', color: 'text-ycod-yellow' },
  { key: 'about.impact.presentations', target: 200, suffix: '+', color: 'text-ycod-pink' },
  { key: 'about.impact.registered', target: 10000, suffix: '+', color: 'text-ycod-coral' },
];

function AnimatedNumber({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function ImpactMetrics() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-ycod-black" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {t('about.impact.title')}
          </h2>
          <p className="font-body text-lg text-white/70">
            {t('about.impact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.key}
              className="ninety-card bg-white/10 text-center backdrop-blur-sm"
              style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`font-display text-3xl md:text-4xl font-bold ${metric.color}`}>
                <AnimatedNumber target={metric.target} suffix={metric.suffix} isInView={isInView} />
              </div>
              <p className="font-body text-sm text-white/80 mt-2">
                {t(metric.key)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-body text-center text-white/60 text-sm mt-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {t('about.impact.note')}
        </motion.p>
      </div>
    </section>
  );
}
