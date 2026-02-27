'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareFactProps {
  text: string;
  stat: string;
}

export default function ShareFact({ text, stat }: ShareFactProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const shareText = `${stat} — ${text} Learn more at ycod.org #OrganDonation #YCOD`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}`;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-xs font-body text-ycod-black/40 hover:text-ycod-blue transition-colors flex items-center gap-1"
        aria-label="Share this fact"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
        </svg>
        Share
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-white border-2 border-ycod-black rounded-md shadow-retro p-2 z-50 min-w-[140px]"
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-ycod-blue/10 text-sm font-body text-ycod-black transition-colors"
              onClick={() => setShowMenu(false)}
            >
              𝕏 Twitter
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-ycod-blue/10 text-sm font-body text-ycod-black transition-colors"
              onClick={() => setShowMenu(false)}
            >
              📘 Facebook
            </a>
            <button
              onClick={() => {
                handleCopy();
                setShowMenu(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-ycod-blue/10 text-sm font-body text-ycod-black transition-colors w-full text-left"
            >
              {copied ? '✅ Copied!' : '📋 Copy Text'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
