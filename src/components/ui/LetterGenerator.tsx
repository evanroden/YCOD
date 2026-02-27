'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LetterGenerator() {
  const [name, setName] = useState('');
  const [zip, setZip] = useState('');
  const [personalStory, setPersonalStory] = useState('');
  const [copied, setCopied] = useState(false);

  const letterText = `Dear [Representative's Name],

My name is ${name || '[Your Name]'}, and I am a constituent from ${zip || '[Your ZIP Code]'} writing to urge your support for opt-out organ donation legislation in New York State.

Right now, over 8,000 New Yorkers are waiting for a life-saving organ transplant. Seventeen people die every single day in the United States waiting for an organ — that's one person every 85 minutes. Despite 90% of Americans supporting organ donation, only about 50% of New Yorkers are registered as donors.

The solution is simple and proven: change the default at the DMV from opt-in to opt-out. Over 30 countries — including Spain, the UK, France, and Austria — already use this system, and they consistently achieve registration rates of 80-90%. No one is forced to donate; anyone can opt out at any time. The only thing that changes is the default.

${personalStory ? personalStory + '\n\n' : ''}This is not a partisan issue. Saving lives transcends political divides. I ask you to support legislation that would implement an opt-out organ donation registration system at the DMV, similar to Bill A07954.

Thank you for your time and your service to our community.

Sincerely,
${name || '[Your Name]'}
${zip || '[Your ZIP Code]'}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = letterText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ycod-blue/10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-3">
            Write Your Representative
          </h2>
          <p className="font-body text-lg text-ycod-black/70">
            We&apos;ll generate a letter for you. Just fill in your details, copy it, and send.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input side */}
          <motion.div
            className="ninety-card bg-white"
            style={{ transform: 'rotate(-0.5deg)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-bold text-ycod-black mb-4">
              Your Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="letter-name" className="block font-body font-semibold text-ycod-black text-sm mb-1">
                  Your Name
                </label>
                <input
                  id="letter-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-3 py-2 border-ycod-black rounded-md font-body bg-white text-sm"
                  style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                />
              </div>
              <div>
                <label htmlFor="letter-zip" className="block font-body font-semibold text-ycod-black text-sm mb-1">
                  Your ZIP Code
                </label>
                <input
                  id="letter-zip"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="14052"
                  maxLength={5}
                  className="w-full px-3 py-2 border-ycod-black rounded-md font-body bg-white text-sm"
                  style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                />
              </div>
              <div>
                <label htmlFor="letter-story" className="block font-body font-semibold text-ycod-black text-sm mb-1">
                  Personal Story <span className="text-ycod-black/40">(optional, but powerful)</span>
                </label>
                <textarea
                  id="letter-story"
                  value={personalStory}
                  onChange={(e) => setPersonalStory(e.target.value)}
                  placeholder="I'm writing because someone close to me needed a transplant..."
                  rows={3}
                  className="w-full px-3 py-2 border-ycod-black rounded-md font-body bg-white text-sm resize-vertical"
                  style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#1A1A2E' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Preview side */}
          <motion.div
            className="ninety-card bg-ycod-yellow/20"
            style={{ transform: 'rotate(0.5deg)' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-lg font-bold text-ycod-black">
                Letter Preview
              </h3>
              <button
                onClick={handleCopy}
                className="retro-btn bg-ycod-coral text-white text-xs px-3 py-1.5"
              >
                {copied ? '✅ Copied!' : '📋 Copy Letter'}
              </button>
            </div>
            <pre className="font-body text-xs text-ycod-black/80 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto bg-white/50 p-3 rounded border border-ycod-black/20">
              {letterText}
            </pre>
          </motion.div>
        </div>

        {/* Action links */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm text-ycod-black/60 mb-4">
            After copying your letter, find your representative and send it:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://nyassembly.gov/mem/search/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-ycod-blue text-white text-sm"
            >
              Find Your Assembly Member
            </a>
            <a
              href="https://www.nysenate.gov/find-my-senator"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-ycod-green text-ycod-black text-sm"
            >
              Find Your Senator
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
