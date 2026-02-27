'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            Contact Us
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            New Yorkers helping New Yorkers
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-display text-2xl font-bold text-ycod-black mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="ninety-card bg-ycod-pink" style={{ transform: 'rotate(-1deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black mb-1">Email</h3>
                  <a
                    href="mailto:Support@YCOD.org"
                    className="font-body text-ycod-black hover:text-ycod-coral transition-colors"
                  >
                    Support@YCOD.org
                  </a>
                </div>
                <div className="ninety-card bg-ycod-blue" style={{ transform: 'rotate(1deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black mb-1">Phone</h3>
                  <a
                    href="tel:+17164184157"
                    className="font-body text-ycod-black hover:text-white transition-colors"
                  >
                    (716) 418-4157
                  </a>
                </div>
                <div className="ninety-card bg-ycod-yellow" style={{ transform: 'rotate(-0.5deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black mb-1">Location</h3>
                  <p className="font-body text-ycod-black">Buffalo, NY (Western New York)</p>
                </div>
                <div className="ninety-card bg-ycod-coral" style={{ transform: 'rotate(1.5deg)' }}>
                  <h3 className="font-display font-bold text-ycod-black mb-1">Social</h3>
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
                    <h2 className="font-display text-2xl font-bold text-ycod-black mb-6">
                      Send a Message
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-body font-semibold text-ycod-black mb-1">
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block font-body font-semibold text-ycod-black mb-1">
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block font-body font-semibold text-ycod-black mb-1">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border-ycod-black rounded-md font-body bg-white resize-vertical"
                          style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <RetroButton
                        type="submit"
                        color="bg-ycod-coral"
                        className="text-white w-full text-center"
                      >
                        Send Message
                      </RetroButton>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="ninety-card bg-ycod-green/20 text-center py-12">
                  <div className="text-6xl mb-4">📬</div>
                  <h2 className="font-display text-2xl font-bold text-ycod-black mb-2">
                    Message Sent!
                  </h2>
                  <p className="font-body text-ycod-black/80">
                    Thanks for reaching out. We&apos;ll get back to you soon.
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
