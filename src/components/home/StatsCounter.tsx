'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function StatsCounter() {
  return (
    <section className="bg-ycod-green py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className={`ninety-card ${stat.color} text-center`}
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-ycod-black mb-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="font-body font-semibold text-ycod-black/80 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
