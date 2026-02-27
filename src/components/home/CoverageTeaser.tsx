'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import RetroButton from '@/components/ui/RetroButton';
import RetroYouTube from '@/components/ui/RetroYouTube';
import { fadeInUp } from '@/lib/animations';

export default function CoverageTeaser() {
  return (
    <section className="bg-white dark:bg-ycod-black py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-4">
            As Seen In
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            Our story has been covered by media outlets across the country
          </p>
        </motion.div>

        {/* Media logos */}
        <motion.div
          className="max-w-3xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <a href="/coverage" className="block ninety-card bg-white dark:bg-ycod-black p-4 md:p-8 group" style={{ transform: 'rotate(-0.5deg)' }}>
            <Image
              src="/images/coverage-logos.png"
              alt="Media coverage logos: Spectrum News, Radio One, MarketWatch, Yahoo, Business Insider, Yahoo Finance, Canadian Insider, MSN, Morningstar"
              width={800}
              height={250}
              className="w-full h-auto dark:brightness-90 dark:invert dark:hue-rotate-180"
            />
            <p className="font-display text-sm font-bold text-ycod-blue dark:text-ycod-yellow mt-3 text-center group-hover:text-ycod-coral transition-colors">
              View All Press Coverage &rarr;
            </p>
          </a>
        </motion.div>

        {/* TEDx Teaser */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="ninety-card bg-ycod-black" style={{ transform: 'rotate(0.5deg)' }}>
            <div className="mb-4">
              <RetroYouTube
                videoId="Bq3Swc8q0CY"
                title="TEDx Talk — Evan Roden on Youth Activism & Organ Donation"
              />
            </div>
            <p className="font-body text-white/80 text-sm mb-4">
              Watch our founder Evan Roden&apos;s TEDx talk on youth political engagement
              and organ donation advocacy.
            </p>
            <RetroButton href="/tedx" color="bg-ycod-coral" className="text-white">
              Watch Full Talk
            </RetroButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
