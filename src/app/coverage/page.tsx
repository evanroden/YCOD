'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import NinetyCard from '@/components/ui/NinetyCard';
import RetroButton from '@/components/ui/RetroButton';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const coverageItems = [
  {
    outlet: 'Spectrum News',
    description: 'Local broadcast coverage highlighting YCOD\'s advocacy for opt-out organ donation in New York.',
    color: 'bg-ycod-blue',
  },
  {
    outlet: 'Radio One / CBC',
    description: 'International radio coverage of YCOD\'s youth-driven movement for organ donation legislation.',
    color: 'bg-ycod-pink',
  },
  {
    outlet: 'MarketWatch',
    description: 'Financial news coverage of YCOD\'s advocacy efforts and the economic impact of organ donation policy.',
    color: 'bg-ycod-yellow',
  },
  {
    outlet: 'Yahoo / Yahoo Finance',
    description: 'National coverage across Yahoo\'s news platforms, reaching millions of readers with YCOD\'s mission.',
    color: 'bg-ycod-coral',
  },
  {
    outlet: 'Business Insider',
    description: 'Feature coverage on YCOD\'s innovative approach to organ donation advocacy and youth political engagement.',
    color: 'bg-ycod-green',
  },
  {
    outlet: 'MSN',
    description: 'Syndicated news coverage bringing YCOD\'s story to Microsoft\'s global news platform.',
    color: 'bg-ycod-blue',
  },
  {
    outlet: 'Morningstar',
    description: 'Coverage of YCOD\'s policy-driven approach to improving organ donation outcomes in New York State.',
    color: 'bg-ycod-pink',
  },
  {
    outlet: 'Canadian Insider',
    description: 'International media coverage extending YCOD\'s mission beyond US borders.',
    color: 'bg-ycod-yellow',
  },
  {
    outlet: 'TEDx',
    description: 'Evan Roden\'s TEDx talk on youth political engagement and organ donation reaching thousands of viewers.',
    color: 'bg-ycod-coral',
  },
];

export default function CoveragePage() {
  return (
    <>
      <section className="bg-ycod-yellow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-ycod-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Media Coverage
          </motion.h1>
          <motion.p
            className="font-body text-xl text-ycod-black/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our story has been shared across local, national, and international media.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Logos banner */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="ninety-card bg-white p-4 md:p-8" style={{ transform: 'rotate(-0.5deg)' }}>
              <Image
                src="/images/coverage-logos.png"
                alt="Media coverage logos: Spectrum News, Radio One, MarketWatch, Yahoo, Business Insider, Yahoo Finance, Canadian Insider, MSN, Morningstar"
                width={800}
                height={250}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="py-16 md:py-24 bg-ycod-green/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coverageItems.map((item, i) => (
              <motion.div key={item.outlet} variants={fadeInUp}>
                <NinetyCard color={item.color} rotation={i % 2 === 0 ? -1.5 : 1.5} className="h-full">
                  <h3 className="font-display text-xl font-bold text-ycod-black mb-3">
                    {item.outlet}
                  </h3>
                  <p className="font-body text-sm text-ycod-black/80">
                    {item.description}
                  </p>
                </NinetyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      <section className="bg-ycod-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Watch Our TEDx Talk
          </h2>
          <RetroButton href="/tedx" color="bg-ycod-yellow" className="text-ycod-black">
            Watch Now
          </RetroButton>
        </div>
      </section>
    </>
  );
}
