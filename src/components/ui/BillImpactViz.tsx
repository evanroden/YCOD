'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BEFORE_AFTER = [
  {
    label: 'Registration Rate',
    before: '~50%',
    after: '~85%+',
    beforeWidth: 50,
    afterWidth: 85,
    colorBefore: '#F07070',
    colorAfter: '#00C9A7',
  },
  {
    label: 'Annual Donors (NY)',
    before: '~1,600',
    after: '~2,700+',
    beforeWidth: 45,
    afterWidth: 80,
    colorBefore: '#F07070',
    colorAfter: '#00C9A7',
  },
  {
    label: 'Lives Saved (NY/year)',
    before: '~800',
    after: '~2,100+',
    beforeWidth: 30,
    afterWidth: 80,
    colorBefore: '#F07070',
    colorAfter: '#00C9A7',
  },
  {
    label: 'Waitlist Reduction',
    before: 'Growing',
    after: 'Shrinking',
    beforeWidth: 70,
    afterWidth: 30,
    colorBefore: '#F07070',
    colorAfter: '#00C9A7',
  },
];

export default function BillImpactViz() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="ninety-card bg-white dark:bg-ycod-black/80"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-ycod-black dark:text-white mb-2 text-center">
        Projected Impact of Bill A07954
      </h3>
      <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 text-center mb-8">
        Based on outcomes from countries that switched to opt-out systems
      </p>

      <div className="space-y-6">
        {BEFORE_AFTER.map((item, index) => (
          <div key={item.label}>
            <p className="font-display font-bold text-sm text-ycod-black mb-2">{item.label}</p>
            <div className="space-y-1.5">
              {/* Before */}
              <div className="flex items-center gap-3">
                <span className="font-body text-xs text-ycod-black/50 w-14 text-right flex-shrink-0">Before</span>
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
                <span className="font-body text-xs text-ycod-green w-14 text-right flex-shrink-0 font-bold">After</span>
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
          <strong>These are conservative estimates</strong> based on real-world data from opt-out countries.
          Spain saw a 40% increase in donation rates within 10 years of switching. A similar shift in New York
          could save over 1,000 additional lives per year.
        </p>
      </div>
    </motion.div>
  );
}
