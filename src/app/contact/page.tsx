'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
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
      setError(t('contact.error'));
    } finally {
      setSubmitting(false);
    }
  };

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
            {t('contact.title')}
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-6">
                {t('contact.info_title')}
              </h2>
              <div className="space-y-6">
                <div className="ninety-card bg-ycod-pink" style={{ transform: 'rotate(-1deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black dark:text-white mb-1">{t('contact.email')}</h3>
                  <a
                    href="mailto:Support@YCOD.org"
                    className="font-body text-ycod-black hover:text-ycod-coral transition-colors"
                  >
                    Support@YCOD.org
                  </a>
                </div>
                <div className="ninety-card bg-ycod-blue" style={{ transform: 'rotate(1deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black dark:text-white mb-1">{t('contact.phone')}</h3>
                  <a
                    href="tel:+17164184157"
                    className="font-body text-ycod-black hover:text-white transition-colors"
                  >
                    (716) 418-4157
                  </a>
                </div>
                <div className="ninety-card bg-ycod-yellow" style={{ transform: 'rotate(-0.5deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black dark:text-white mb-1">{t('contact.location')}</h3>
                  <p className="font-body text-ycod-black">{t('contact.location_text')}</p>
                </div>
                <div className="ninety-card bg-ycod-coral" style={{ transform: 'rotate(1.5deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black dark:text-white mb-1">{t('contact.social')}</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://twitter.com/theycod"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body font-semibold text-ycod-black hover:text-white transition-colors"
                    >
                      Twitter/X
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ycod"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body font-semibold text-ycod-black hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="ninety-card bg-ycod-green/10" style={{ transform: 'rotate(0.5deg)' }}>
                    <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-6">
                      {t('contact.form_title')}
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-body font-semibold text-ycod-black mb-1">
                          {t('contact.name_label')}
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block font-body font-semibold text-ycod-black mb-1">
                          {t('contact.email_label')}
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black transition-colors duration-300"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block font-body font-semibold text-ycod-black mb-1">
                          {t('contact.message_label')}
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white dark:bg-ycod-black dark:text-white resize-vertical transition-colors duration-300"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                    </div>
                    {error && (
                      <div className="p-3 bg-ycod-coral/20 border-2 border-ycod-coral rounded-md">
                        <p className="font-body text-sm text-ycod-coral">{error}</p>
                      </div>
                    )}
                    <div className="mt-6">
                      <RetroButton
                        type="submit"
                        color="bg-ycod-coral"
                        className="text-white w-full text-center"
                      >
                        {submitting ? t('contact.submitting') : t('contact.submit')}
                      </RetroButton>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="ninety-card bg-ycod-green/20 text-center py-12">
                  <div className="text-6xl mb-4">📬</div>
                  <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-2">
                    {t('contact.success_title')}
                  </h2>
                  <p className="font-body text-ycod-black/80 dark:text-white/80">
                    {t('contact.success_text')}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
