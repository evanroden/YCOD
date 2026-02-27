'use client';

import { motion } from 'framer-motion';
import NinetyCard from '@/components/ui/NinetyCard';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { PARTNERS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-pink py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-ycod-black dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Partners
          </motion.h1>
          <motion.p
            className="font-body text-xl text-ycod-black/80 dark:text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We&apos;re proud to work alongside these incredible organizations in the fight
            to save lives through organ donation.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PARTNERS.map((partner, i) => (
              <motion.div key={partner.name} variants={fadeInUp}>
                <NinetyCard
                  color={partner.color}
                  rotation={i % 2 === 0 ? -1.5 : 1.5}
                  className="h-full"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-ycod-black bg-white flex items-center justify-center mb-4">
                    <span className="font-display text-2xl font-bold text-ycod-black">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white mb-3">
                    {partner.name}
                  </h3>
                  <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">
                    {partner.description}
                  </p>
                </NinetyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F7DC6F" />

      {/* CTA */}
      <section className="bg-ycod-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            Interested in supporting our mission? Get in touch.
          </p>
          <RetroButton href="/contact" color="bg-ycod-yellow" className="text-ycod-black">
            Contact Us
          </RetroButton>
        </div>
      </section>
    </>
  );
}
