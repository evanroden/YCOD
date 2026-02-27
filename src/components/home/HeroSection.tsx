'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import RetroButton from '@/components/ui/RetroButton';
import MemphisBackground from '@/components/ui/MemphisBackground';

export default function HeroSection() {
  return (
    <MemphisBackground variant="blue" className="min-h-[90vh] flex items-center" overlay={false}>
      <div className="absolute inset-0 bg-ycod-bg-blue/50" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="YCOD - Youth Coalition for Organ Donation"
            width={280}
            height={280}
            className="mx-auto mb-6 md:mb-8 w-48 md:w-72 h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Youth Coalition for{' '}
          <span className="text-ycod-yellow">Organ Donation</span>
        </motion.h1>

        <motion.p
          className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          New Yorkers helping New Yorkers save lives
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <RetroButton href="/join" color="bg-ycod-coral" className="text-white text-lg px-8 py-4">
            Join the Movement
          </RetroButton>
          <RetroButton href="/facts" color="bg-ycod-yellow" className="text-ycod-black text-lg px-8 py-4">
            Learn the Facts
          </RetroButton>
        </motion.div>
      </div>
    </MemphisBackground>
  );
}
