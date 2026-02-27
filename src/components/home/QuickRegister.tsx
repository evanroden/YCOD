'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

export default function QuickRegister() {
  const [isMobile, setIsMobile] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const check = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
    setIsMobile(check);
  }, []);

  const handleDesktopClick = () => {
    navigator.clipboard.writeText('Send "REGISTER" to 57838').then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    });
  };

  return (
    <section className="bg-ycod-yellow dark:bg-ycod-yellow/90 py-16 md:py-20 border-y-4 border-ycod-black dark:border-white/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/images/favicon.webp"
            alt="YCOD heart-hands icon"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ycod-black mb-4">
            Become a Donor Today
          </h2>
          <p className="font-body text-xl text-ycod-black/80 mb-8">
            It takes 30 seconds. No forms. No waiting.
          </p>

          <div className="ninety-card bg-white dark:bg-ycod-black max-w-lg mx-auto mb-8 heart-cursor" style={{ transform: 'rotate(-1deg)' }}>
            <p className="font-display text-2xl md:text-3xl font-bold text-ycod-black dark:text-white mb-2">
              Text <span className="text-ycod-coral">REGISTER</span> to
            </p>
            <a
              href="sms:57838?body=register"
              className="font-display text-5xl md:text-6xl font-bold text-ycod-blue hover:text-ycod-coral transition-colors"
            >
              57838
            </a>
            <p className="font-body text-sm text-ycod-black/60 dark:text-white/60 mt-3">
              In partnership with ONE8FIFTY
            </p>
          </div>

          {isMobile ? (
            <RetroButton
              href="sms:57838?body=register"
              color="bg-ycod-coral"
              className="text-white text-lg px-10 py-4"
            >
              Send Text Now
            </RetroButton>
          ) : (
            <div className="relative inline-block">
              <RetroButton
                onClick={handleDesktopClick}
                color="bg-ycod-coral"
                className="text-white text-lg px-10 py-4"
              >
                Copy Text Instructions
              </RetroButton>
              <AnimatePresence>
                {showCopied && (
                  <motion.p
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-body text-sm font-bold text-ycod-black dark:text-white whitespace-nowrap"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Copied! Send from your phone.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}

          <p className="font-body text-xs text-ycod-black/50 mt-6">
            Open your phone&apos;s messaging app and text &quot;REGISTER&quot; to 57838
          </p>
        </motion.div>
      </div>
    </section>
  );
}
