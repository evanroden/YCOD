'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import NinetyCard from '@/components/ui/NinetyCard';
import BillImpactViz from '@/components/ui/BillImpactViz';
import LetterGenerator from '@/components/ui/LetterGenerator';
import { BILL_TEXT } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export default function BillPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-dark-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The Bill
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our proposed legislation to change organ donation from opt-in to opt-out at the DMV
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Plain Language Explainer */}
      <section className="py-16 md:py-20 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold text-ycod-black dark:text-white mb-8 text-center">
              What the Bill Does
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <NinetyCard color="bg-ycod-coral/20" rotation={-1}>
                <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-2">
                  The Problem
                </h3>
                <p className="font-body text-ycod-black/80 dark:text-white/80">
                  Currently at the NY DMV, you must actively choose to register as an organ
                  donor. Many people support donation but never check the box — they skip the
                  question, forget, or don&apos;t think about it.
                </p>
              </NinetyCard>
              <NinetyCard color="bg-ycod-green/20" rotation={1}>
                <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-2">
                  The Solution
                </h3>
                <p className="font-body text-ycod-black/80 dark:text-white/80">
                  Our bill changes the default: unless you specifically choose to skip the
                  organ donation question, you&apos;re registered as a donor. You always have
                  the right to opt out — the default just saves more lives.
                </p>
              </NinetyCard>
            </div>

            {/* Key provision */}
            <div className="ninety-card bg-ycod-yellow/30 mb-12" style={{ transform: 'rotate(0deg)' }}>
              <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-3">
                Key Provision
              </h3>
              <blockquote className="font-body text-lg italic text-ycod-black/90 border-l-4 border-ycod-coral pl-4">
                &ldquo;Unless an applicant responds that he or she wishes to skip this question,
                the applicant will be deemed to have consented to organ and tissue donation.&rdquo;
              </blockquote>
            </div>

            {/* Safeguards */}
            <h3 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-4">
              Built-In Safeguards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { label: 'DMV Only', desc: 'Applies only to license and renewal applications' },
                { label: 'Consent Question', desc: 'Applicants see the donation question first' },
                { label: 'Easy Opt-Out', desc: 'Skip the question or write to the commissioner any time' },
                { label: 'Written Notice', desc: 'Commissioner sends mail confirming registration' },
                { label: 'Under-18 Exempt', desc: 'Does not apply to minors' },
                { label: 'Your Choice', desc: 'You can always opt out at any time, no questions asked' },
              ].map((item, i) => (
                <NinetyCard
                  key={item.label}
                  color={['bg-ycod-pink', 'bg-ycod-blue', 'bg-ycod-yellow', 'bg-ycod-coral', 'bg-ycod-green', 'bg-ycod-pink'][i]}
                  rotation={i % 2 === 0 ? -1 : 1}
                >
                  <h4 className="font-display font-bold text-ycod-black">{item.label}</h4>
                  <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">{item.desc}</p>
                </NinetyCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Impact Visualization */}
      <section className="py-16 md:py-24 bg-ycod-blue/5">
        <div className="max-w-4xl mx-auto px-4">
          <BillImpactViz />
        </div>
      </section>

      <SectionDivider color="#00C9A7" />

      {/* Full Bill Text */}
      <section className="py-16 md:py-24 bg-ycod-black/5 dark:bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold text-ycod-black dark:text-white mb-4 text-center">
              2021 Draft Bill Text
            </h2>
            <p className="font-body text-center text-ycod-black/70 dark:text-white/70 mb-8">
              Based on Bill A07954 (2019), updated for the 2021 legislative session.
            </p>
            <div className="ninety-card bg-white dark:bg-ycod-black transition-colors duration-300" style={{ transform: 'rotate(0deg)' }}>
              <pre className="font-body text-sm md:text-base text-ycod-black/90 whitespace-pre-wrap leading-relaxed">
                {BILL_TEXT}
              </pre>
            </div>

            <div className="text-center mt-8">
              <RetroButton
                href="https://nyassembly.gov/leg/?Summary=Y&Text=Y&bn=A07954&default_fld=&leg_video=&term=2019"
                color="bg-ycod-blue"
                className="text-white"
                external
              >
                View Original 2019 Bill on NY Assembly
              </RetroButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Letter Generator */}
      <LetterGenerator />

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-coral py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Support This Legislation
          </h2>
          <p className="font-body text-lg text-white/90 mb-6">
            Contact your representatives and join our movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black">
              Join the Movement
            </RetroButton>
            <RetroButton href="/contact" color="bg-white dark:bg-ycod-black transition-colors duration-300" className="text-ycod-black">
              Contact Us
            </RetroButton>
          </div>
        </div>
      </section>
    </>
  );
}
