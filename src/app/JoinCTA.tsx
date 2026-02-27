'use client';

import { motion } from 'framer-motion';
import MemphisBackground from '@/components/ui/MemphisBackground';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

export default function JoinCTA() {
  return (
    <MemphisBackground variant="blue" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            This Is a Movement of Many
          </h2>
          <p className="font-body text-xl text-white/90 mb-4">
            Over 3,000 members strong and growing. Young people and those young at heart,
            coming together to save lives.
          </p>
          <p className="font-body text-lg text-white/70 mb-8">
            Join us in advocating for opt-out organ donation in New York State.
          </p>
          <RetroButton href="/join" color="bg-ycod-yellow" className="text-ycod-black text-lg px-10 py-4">
            Join the Movement
          </RetroButton>
        </motion.div>
      </div>
    </MemphisBackground>
  );
}
