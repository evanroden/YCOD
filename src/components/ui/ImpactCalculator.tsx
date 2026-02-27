'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const NY_POPULATION = 19_500_000;
const CURRENT_REGISTRATION = 0.50;
const LIVES_PER_DONOR = 8;
const TISSUE_PER_DONOR = 75;
const DONORS_PER_REGISTERED = 0.003; // ~0.3% of registered become actual donors per year

export default function ImpactCalculator() {
  const { t } = useI18n();
  const [registrationRate, setRegistrationRate] = useState(50);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationRate(Number(e.target.value));
  }, []);

  const currentRegistered = Math.round(NY_POPULATION * CURRENT_REGISTRATION);
  const newRegistered = Math.round(NY_POPULATION * (registrationRate / 100));
  const additionalRegistered = Math.max(0, newRegistered - currentRegistered);
  const additionalDonors = Math.round(additionalRegistered * DONORS_PER_REGISTERED);
  const livesSaved = additionalDonors * LIVES_PER_DONOR;
  const tissueHealed = additionalDonors * TISSUE_PER_DONOR;

  const getSliderColor = () => {
    if (registrationRate <= 50) return '#F07070';
    if (registrationRate <= 70) return '#F7DC6F';
    if (registrationRate <= 85) return '#4A90D9';
    return '#00C9A7';
  };

  const getMessage = () => {
    if (registrationRate <= 50) return t('calc.msg_current');
    if (registrationRate <= 60) return t('calc.msg_modest');
    if (registrationRate <= 70) return t('calc.msg_achievable');
    if (registrationRate <= 80) return t('calc.msg_optout');
    if (registrationRate <= 90) return t('calc.msg_spain');
    return t('calc.msg_universal');
  };

  return (
    <section className="py-16 md:py-24 bg-ycod-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {t('calc.title')}
          </h2>
          <p className="font-body text-lg text-white/70">
            {t('calc.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="ninety-card bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-display font-bold text-ycod-black text-sm">{t('calc.rate_label')}</span>
              <motion.span
                className="font-display text-3xl font-bold"
                style={{ color: getSliderColor() }}
                key={registrationRate}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {registrationRate}%
              </motion.span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="37"
                max="99"
                value={registrationRate}
                onChange={handleSliderChange}
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${getSliderColor()} 0%, ${getSliderColor()} ${((registrationRate - 37) / 62) * 100}%, #e5e7eb ${((registrationRate - 37) / 62) * 100}%, #e5e7eb 100%)`,
                }}
                aria-label="New York organ donor registration rate"
                aria-valuemin={37}
                aria-valuemax={99}
                aria-valuenow={registrationRate}
                aria-valuetext={`${registrationRate}% registration rate, ${additionalRegistered.toLocaleString()} new registrations, ${livesSaved.toLocaleString()} lives saved per year`}
              />
              {/* Marker for current 50% */}
              <div
                className="absolute top-5 text-xs font-body text-ycod-black/50"
                style={{ left: `${((50 - 37) / 62) * 100}%`, transform: 'translateX(-50%)' }}
              >
                {t('calc.current_marker')}
              </div>
              {/* Marker for Spain ~90% */}
              <div
                className="absolute top-5 text-xs font-body text-ycod-black/50"
                style={{ left: `${((90 - 37) / 62) * 100}%`, transform: 'translateX(-50%)' }}
              >
                {t('calc.spain_marker')}
              </div>
            </div>
          </div>

          {/* Message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={getMessage()}
              className="font-body text-center text-ycod-black/70 italic mb-8 text-sm"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {getMessage()}
            </motion.p>
          </AnimatePresence>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-live="polite" aria-atomic="true">
            <motion.div
              className="ninety-card bg-ycod-pink/20 text-center"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <motion.div
                className="font-display text-3xl md:text-4xl font-bold text-ycod-coral"
                key={additionalRegistered}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                +{additionalRegistered.toLocaleString()}
              </motion.div>
              <p className="font-body text-sm text-ycod-black/70 mt-1">{t('calc.new_registrations')}</p>
            </motion.div>

            <motion.div
              className="ninety-card bg-ycod-blue/20 text-center"
              style={{ transform: 'rotate(0.5deg)' }}
            >
              <motion.div
                className="font-display text-3xl md:text-4xl font-bold text-ycod-blue"
                key={livesSaved}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {livesSaved.toLocaleString()}
              </motion.div>
              <p className="font-body text-sm text-ycod-black/70 mt-1">{t('calc.lives_saved')}</p>
            </motion.div>

            <motion.div
              className="ninety-card bg-ycod-green/20 text-center"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              <motion.div
                className="font-display text-3xl md:text-4xl font-bold text-ycod-green"
                key={tissueHealed}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {tissueHealed.toLocaleString()}
              </motion.div>
              <p className="font-body text-sm text-ycod-black/70 mt-1">{t('calc.tissue_healed')}</p>
            </motion.div>
          </div>

          {/* Callout */}
          {registrationRate > 50 && (
            <motion.div
              className="mt-6 p-4 bg-ycod-green/10 border-2 border-dashed border-ycod-green rounded-md text-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-body text-sm text-ycod-black/80"
                dangerouslySetInnerHTML={{
                  __html: t('calc.callout', {
                    additional: `<strong>${additionalRegistered.toLocaleString()}</strong>`,
                    lives: `<strong>${livesSaved.toLocaleString()}</strong>`,
                  }),
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
