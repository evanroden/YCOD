'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import NinetyCard from '@/components/ui/NinetyCard';
import RetroButton from '@/components/ui/RetroButton';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const coverageItems = [
  {
    outlet: 'PR Newswire',
    description: 'National press release coverage of YCOD\'s mission and legislative campaign.',
    color: 'bg-ycod-pink',
  },
  {
    outlet: 'Spectrum News',
    description: 'Local broadcast coverage highlighting YCOD\'s advocacy for opt-out organ donation in New York.',
    color: 'bg-ycod-blue',
  },
  {
    outlet: 'Local TV News',
    description: 'Television coverage of YCOD\'s work with state legislators and community outreach.',
    color: 'bg-ycod-yellow',
  },
  {
    outlet: 'TEDx',
    description: 'Evan Roden\'s TEDx talk on youth political engagement and organ donation reaching thousands of viewers.',
    color: 'bg-ycod-coral',
  },
  {
    outlet: 'American Red Cross',
    description: 'Nominated for the 2021 Real Heroes Education Award for outstanding contribution to organ donation awareness.',
    color: 'bg-ycod-green',
  },
  {
    outlet: 'Donate Life New York State',
    description: 'Official public statement of support and endorsement of YCOD\'s mission.',
    color: 'bg-ycod-pink',
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

      <section className="py-16 md:py-24 bg-white">
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
