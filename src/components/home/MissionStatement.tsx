'use client';

import { motion } from 'framer-motion';
import MemphisBackground from '@/components/ui/MemphisBackground';
import { fadeInUp } from '@/lib/animations';

export default function MissionStatement() {
  return (
    <MemphisBackground variant="green" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-8">
            &ldquo;Our mission is to encourage more New Yorkers to become organ donors by passing
            legislation to <span className="text-ycod-yellow">&apos;opt-out&apos;</span> rather
            than &apos;opt-in&apos; at the DMV.&rdquo;
          </blockquote>
          <p className="font-body text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            Right now, when you get your driver&apos;s license at the DMV, you have to actively
            choose to register as an organ donor. We want to flip that default — so everyone is
            registered unless they choose not to be. This simple change, rooted in behavioral
            economics, has already saved thousands of lives in countries like Spain, the UK,
            Austria, and France.
          </p>
        </motion.div>

        <motion.div
          className="ninety-card bg-white/95 max-w-2xl mx-auto"
          style={{ transform: 'rotate(1deg)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-body text-lg italic text-ycod-black mb-3">
            &ldquo;I think New Yorkers can put their differences aside and realize saving
            someone&apos;s life is really the most important thing you can do.&rdquo;
          </p>
          <p className="font-display font-bold text-ycod-blue">— Henry McLaughlin, Co-Founder</p>
        </motion.div>
      </div>
    </MemphisBackground>
  );
}
