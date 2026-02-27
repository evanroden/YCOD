'use client';

import { motion } from 'framer-motion';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

export default function QuickRegister() {
  return (
    <section className="bg-ycod-yellow py-16 md:py-20 border-y-4 border-ycod-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ycod-black mb-4">
            Become a Donor Today
          </h2>
          <p className="font-body text-xl text-ycod-black/80 mb-8">
            It takes 30 seconds. No forms. No waiting.
          </p>

          <div className="ninety-card bg-white max-w-lg mx-auto mb-8 heart-cursor" style={{ transform: 'rotate(-1deg)' }}>
            <p className="font-display text-2xl md:text-3xl font-bold text-ycod-black mb-2">
              Text <span className="text-ycod-coral">REGISTER</span> to
            </p>
            <a
              href="sms:57838?body=register"
              className="font-display text-5xl md:text-6xl font-bold text-ycod-blue hover:text-ycod-coral transition-colors"
            >
              57838
            </a>
            <p className="font-body text-sm text-ycod-black/60 mt-3">
              In partnership with ONE8FIFTY
            </p>
          </div>

          <RetroButton
            href="sms:57838?body=register"
            color="bg-ycod-coral"
            className="text-white text-lg px-10 py-4"
            external
          >
            Send Text Now
          </RetroButton>
        </motion.div>
      </div>
    </section>
  );
}
