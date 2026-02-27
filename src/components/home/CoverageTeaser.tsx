'use client';

import { motion } from 'framer-motion';
import RetroButton from '@/components/ui/RetroButton';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const coverage = [
  { name: 'PR Newswire', color: 'bg-ycod-pink' },
  { name: 'Spectrum News', color: 'bg-ycod-blue' },
  { name: 'Local TV', color: 'bg-ycod-yellow' },
  { name: 'TEDx', color: 'bg-ycod-coral' },
  { name: 'Red Cross', color: 'bg-ycod-green' },
];

export default function CoverageTeaser() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-4">
            As Seen In
          </h2>
          <p className="font-body text-lg text-ycod-black/70">
            Our story has been covered by media outlets across the country
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coverage.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeInUp}
              className={`ninety-card ${item.color} px-6 py-3`}
              style={{ transform: `rotate(${[1, -1.5, 2, -0.5, 1.5][i % 5]}deg)` }}
            >
              <span className="font-display font-bold text-ycod-black">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* TEDx Teaser */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="ninety-card bg-ycod-black" style={{ transform: 'rotate(0.5deg)' }}>
            <div className="aspect-video relative rounded overflow-hidden mb-4">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Bq3Swc8q0CY"
                title="TEDx Talk by Evan Roden - Youth Political Engagement and Organ Donation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
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
