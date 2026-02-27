'use client';

import { motion } from 'framer-motion';
import InitiativeCard from '@/components/initiatives/InitiativeCard';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((initiative, i) => (
              <InitiativeCard key={initiative.title} {...initiative} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* Opt-Out Explainer */}
      <section className="py-16 md:py-24 bg-ycod-yellow/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-6 text-center">
              How Opt-Out Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ninety-card bg-ycod-coral/20" style={{ transform: 'rotate(-1deg)' }}>
                <h3 className="font-display text-xl font-bold text-ycod-black mb-3">
                  Current System (Opt-In)
                </h3>
                <p className="font-body text-ycod-black/80">
                  When you visit the DMV, you must actively choose to register as an organ donor.
                  Many people never check the box — not because they oppose donation, but because
                  they skip the question or don&apos;t think about it.
                </p>
              </div>
              <div className="ninety-card bg-ycod-green/30" style={{ transform: 'rotate(1deg)' }}>
                <h3 className="font-display text-xl font-bold text-ycod-black mb-3">
                  Proposed System (Opt-Out)
                </h3>
                <p className="font-body text-ycod-black/80">
                  Under our proposed legislation, everyone would be registered as a donor by
                  default, with the option to opt out. You always have the choice — but the
                  default saves lives. Countries using this system see dramatically higher
                  registration rates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <RetroButton href="/bill" color="bg-white" className="text-ycod-black">
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
