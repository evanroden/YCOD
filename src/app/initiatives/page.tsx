'use client';

import { motion } from 'framer-motion';
import InitiativeCard from '@/components/initiatives/InitiativeCard';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import DMVSimulator from '@/components/ui/DMVSimulator';
import { INITIATIVES } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function InitiativesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Initiatives
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Five pillars driving change in organ donation policy and awareness across New York State
            and beyond.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Initiatives Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((initiative, i) => (
              <InitiativeCard key={initiative.title} {...initiative} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* DMV Simulator */}
      <DMVSimulator />

      <SectionDivider color="#4A90D9" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Support These Initiatives
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            Read the proposed legislation and join our movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/bill" color="bg-white dark:bg-ycod-black transition-colors duration-300" className="text-ycod-black">
              Read the Bill
            </RetroButton>
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              Join Us
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
