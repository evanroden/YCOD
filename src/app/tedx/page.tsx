'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import RetroYouTube from '@/components/ui/RetroYouTube';
import { fadeInUp } from '@/lib/animations';

export default function TEDxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-black py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            TEDx <span className="text-ycod-coral">Talk</span>
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Youth political engagement and organ donation advocacy
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="ninety-card bg-ycod-black p-3 md:p-4 mb-12" style={{ transform: 'rotate(0.5deg)' }}>
              <RetroYouTube
                videoId="Bq3Swc8q0CY"
                title="TEDx Talk — Evan Roden on Youth Activism & Organ Donation"
              />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <blockquote className="ninety-card bg-ycod-coral/10" style={{ transform: 'rotate(-0.5deg)' }}>
              <p className="font-display text-xl md:text-2xl font-bold text-ycod-black leading-relaxed mb-4">
                &ldquo;Young people are seen as apolitical. That&apos;s not true anymore. Young
                people are far more likely to be generally participatory than older Americans, more
                likely to want to engage further in the political process, and more likely to vote
                than any time in the past fifty years.&rdquo;
              </p>
              <cite className="font-body text-ycod-coral font-semibold not-italic">
                — Evan Roden, TEDx Talk
              </cite>
            </blockquote>
          </motion.div>

          <SectionDivider color="#F5A0B8" />

          {/* Speaker Bio */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0">
              <div className="ninety-card bg-ycod-pink p-2" style={{ transform: 'rotate(2deg)' }}>
                <Image
                  src="/images/evan-portrait.webp"
                  alt="Illustrated portrait of Evan Roden"
                  width={250}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ycod-black mb-4">
                About the Speaker
              </h2>
              <p className="font-body text-lg text-ycod-black/80 mb-4">
                Evan Roden is the founder of The Youth Coalition for Organ Donation. A Biomedical
                Engineering graduate from Tulane University and current Sustainability Engineer at
                ENFRA, Evan has been advocating for organ donation reform since 2017.
              </p>
              <p className="font-body text-lg text-ycod-black/80 mb-6">
                After a family member needed a kidney transplant, Evan co-founded YCOD with three
                classmates at East Aurora High School. The organization has grown to 3,000+ members,
                drafted actual legislation, and earned nominations and endorsements from major
                organizations.
              </p>
              <RetroButton href="/about" color="bg-ycod-blue" className="text-white">
                Learn Our Full Story
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-green py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Inspired? Take Action.
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            Join thousands of young people making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              Join the Movement
            </RetroButton>
            <RetroButton
              href="sms:57838?body=register"
              color="bg-ycod-coral"
              className="text-white heart-cursor"
              external
            >
              Register as a Donor
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
