'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import ActionChecklist from '@/components/ui/ActionChecklist';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function JoinPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || 'Something went wrong.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Could not submit. Please try again or email us at Support@YCOD.org.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-coral py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('join.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('join.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Group image + form */}
      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          {/* Group portrait */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="ninety-card bg-ycod-pink p-3" style={{ transform: 'rotate(-1deg)' }}>
              <Image
                src="/images/team-group.webp"
                alt="The YCOD team - illustrated portrait"
                width={800}
                height={500}
                className="w-full rounded"
              />
            </div>
          </motion.div>

          {/* Notice */}
          <motion.div
            className="ninety-card bg-ycod-yellow/30 max-w-2xl mx-auto mb-10"
            style={{ transform: 'rotate(0.5deg)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="font-body text-ycod-black/80 dark:text-white/80">
              {t('join.note')}
            </p>
          </motion.div>

          {/* Form */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="ninety-card bg-ycod-green/10 max-w-xl mx-auto"
              style={{ transform: 'rotate(-0.5deg)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-6">
                {t('join.form_title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-body font-semibold text-ycod-black mb-1">
                    {t('join.name_label')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                    style={{ borderWidth: '3px' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body font-semibold text-ycod-black mb-1">
                    {t('join.email_label')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                    style={{ borderWidth: '3px' }}
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block font-body font-semibold text-ycod-black mb-1">
                    {t('join.zip_label')}
                  </label>
                  <input
                    id="zip"
                    type="text"
                    required
                    pattern="[0-9]{5}"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full px-4 py-3 border-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                    style={{ borderWidth: '3px' }}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block font-body font-semibold text-ycod-black mb-1">
                    {t('join.address_label')} <span className="text-ycod-black/50">{t('join.address_hint')}</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                    style={{ borderWidth: '3px' }}
                  />
                </div>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-ycod-coral/20 border-2 border-ycod-coral rounded-md">
                  <p className="font-body text-sm text-ycod-coral">{error}</p>
                </div>
              )}
              <div className="mt-6">
                <RetroButton
                  type="submit"
                  color="bg-ycod-coral"
                  className="text-white w-full text-center"
                >
                  {submitting ? t('join.submitting') : t('join.submit')}
                </RetroButton>
              </div>
              <p className="font-body text-xs text-ycod-black/40 mt-3 text-center">
                {t('join.privacy')}
              </p>
            </motion.form>
          ) : (
            <motion.div
              className="ninety-card bg-ycod-green/20 max-w-xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-2">
                {t('join.success_title')}
              </h2>
              <p className="font-body text-ycod-black/80 dark:text-white/80">
                {t('join.success_text')}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* Quick register + political action */}
      <section className="py-16 md:py-20 bg-ycod-yellow border-y-4 border-ycod-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-ycod-black dark:text-white mb-4">
            {t('join.register_title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/80 dark:text-white/80 mb-6">
            {t('join.register_text')}
          </p>
          <RetroButton
            href="sms:57838?body=register"
            color="bg-ycod-coral"
            className="text-white text-lg heart-cursor"
            external
          >
            {t('cta.send_text')}
          </RetroButton>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-4">
            {t('join.reps_title')}
          </h3>
          <p className="font-body text-ycod-black/70 dark:text-white/70 mb-6">
            {t('join.reps_text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RetroButton
              href="https://nyassembly.gov/mem/search/"
              color="bg-ycod-blue"
              className="text-white"
              external
            >
              {t('join.find_assembly')}
            </RetroButton>
            <RetroButton
              href="https://www.nysenate.gov/find-my-senator"
              color="bg-ycod-green"
              className="text-ycod-black"
              external
            >
              {t('join.find_senator')}
            </RetroButton>
          </div>
        </div>
      </section>

      {/* Action Checklist */}
      <ActionChecklist />
    </>
  );
}
