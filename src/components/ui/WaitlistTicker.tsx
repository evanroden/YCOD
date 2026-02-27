'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const INITIAL_WAITLIST = 103000;
const ADDITIONS_PER_DAY = 13;
const DEATHS_PER_DAY = 17;
const TRANSPLANTS_PER_DAY = 30;

export default function WaitlistTicker() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [elapsed, setElapsed] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
      setPulse(true);
      setTimeout(() => setPulse(false), 400);
    }, 6000); // tick every 6 seconds for visible change
    return () => clearInterval(interval);
  }, [isInView]);

  // Simulated changes per tick (6 seconds = 1/14400th of a day)
  const ticksPerDay = 14400;
  const addedTotal = Math.floor((elapsed * ADDITIONS_PER_DAY) / ticksPerDay * 100) / 100;
  const deathsTotal = Math.floor((elapsed * DEATHS_PER_DAY) / ticksPerDay * 100) / 100;
  const transplantTotal = Math.floor((elapsed * TRANSPLANTS_PER_DAY) / ticksPerDay * 100) / 100;
  const netChange = addedTotal - deathsTotal - transplantTotal;
  const currentWaitlist = INITIAL_WAITLIST + Math.round(netChange);

  const minutesOnPage = Math.floor(elapsed * 6 / 60);
  const secondsOnPage = (elapsed * 6) % 60;

  return (
    <div ref={ref} className="py-12 bg-ycod-black">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="ninety-card bg-ycod-black border-ycod-coral"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <p className="font-body text-white/50 text-xs uppercase tracking-widest mb-2">
              National Transplant Waitlist — Simulated Live Counter
            </p>
            <motion.div
              className={`font-display text-5xl md:text-7xl font-bold transition-colors duration-300 ${
                pulse ? 'text-ycod-coral' : 'text-white'
              }`}
            >
              {currentWaitlist.toLocaleString()}
            </motion.div>
            <p className="font-body text-white/60 text-sm mt-2">
              people waiting right now
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-md bg-white/5">
              <div className="font-display text-lg md:text-xl font-bold text-ycod-green">
                +{ADDITIONS_PER_DAY}
              </div>
              <p className="font-body text-white/50 text-xs">added daily</p>
            </div>
            <div className="p-3 rounded-md bg-white/5">
              <div className="font-display text-lg md:text-xl font-bold text-ycod-blue">
                {TRANSPLANTS_PER_DAY}
              </div>
              <p className="font-body text-white/50 text-xs">transplants/day</p>
            </div>
            <div className="p-3 rounded-md bg-white/5">
              <div className="font-display text-lg md:text-xl font-bold text-ycod-coral">
                -{DEATHS_PER_DAY}
              </div>
              <p className="font-body text-white/50 text-xs">die waiting daily</p>
            </div>
          </div>

          {elapsed > 0 && (
            <motion.p
              className="text-center font-body text-white/40 text-xs mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              You&apos;ve been on this page for {minutesOnPage > 0 ? `${minutesOnPage}m ` : ''}{secondsOnPage}s.
              In that time, approximately {(DEATHS_PER_DAY / 24 / 60 * (elapsed * 6 / 60)).toFixed(1)} people
              died waiting for an organ.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
