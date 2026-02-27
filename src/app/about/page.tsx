'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TeamMember from '@/components/team/TeamMember';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { TEAM, TIMELINE_EVENTS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-green py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Four high school students who decided that saving lives shouldn&apos;t be optional.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Origin Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-4">
              Our Story
            </h2>
            <p className="font-body text-lg text-ycod-black/70 max-w-2xl mx-auto">
              In 2017, when one of Evan&apos;s family members needed a kidney transplant, four
              students at East Aurora High School near Buffalo, NY decided to take action.
              What started as joining their school&apos;s Donate Life Club became a multinational
              movement.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="timeline-line" />
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {TIMELINE_EVENTS.map((event, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative flex items-center ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 -translate-x-1/2 z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-ycod-black bg-ycod-yellow" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className="ninety-card bg-white"
                      style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                    >
                      <span className="font-display text-sm font-bold text-ycod-coral">
                        {event.year}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ycod-black mb-2">
                        {event.title}
                      </h3>
                      <p className="font-body text-sm text-ycod-black/70">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-ycod-pink/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-4">
              Meet the Team
            </h2>

            {/* Group portrait */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="ninety-card bg-white p-3" style={{ transform: 'rotate(-1deg)' }}>
                <Image
                  src="/images/team-group.webp"
                  alt="The YCOD founding team - illustrated portrait of six team members"
                  width={800}
                  height={500}
                  className="w-full rounded"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <TeamMember key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#F07070" />

      {/* CTA */}
      <section className="bg-ycod-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Story?
          </h2>
          <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black text-lg">
            Join the Movement
          </RetroButton>
        </div>
      </section>
    </>
  );
}
