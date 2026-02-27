'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ActionItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  link?: string;
  linkText?: string;
}

const ACTIONS: ActionItem[] = [
  {
    id: 'register',
    label: 'Register as an organ donor',
    description: 'Text REGISTER to 57838 through our partner ONE8FIFTY.',
    icon: '❤️',
    link: 'sms:57838?body=register',
    linkText: 'Send text now',
  },
  {
    id: 'join',
    label: 'Join YCOD',
    description: 'Add your name to our growing movement of 3,000+ supporters.',
    icon: '✊',
    link: '/join',
    linkText: 'Join here',
  },
  {
    id: 'learn',
    label: 'Learn the facts',
    description: 'Know the numbers so you can share them with others.',
    icon: '📊',
    link: '/facts',
    linkText: 'Read facts',
  },
  {
    id: 'talk',
    label: 'Talk to your family',
    description: 'Have the conversation about organ donation with the people you love.',
    icon: '💬',
  },
  {
    id: 'share',
    label: 'Share on social media',
    description: 'Spread awareness — post a fact or share our website.',
    icon: '📱',
  },
  {
    id: 'write',
    label: 'Write your representative',
    description: 'Use our letter generator to contact your NY Assembly member or senator.',
    icon: '✉️',
    link: '/bill',
    linkText: 'Write a letter',
  },
];

export default function ActionChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ycod-actions');
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {
      // ignore
    }
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('ycod-actions', JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const progress = (checked.size / ACTIONS.length) * 100;

  return (
    <section className="py-16 md:py-24 bg-ycod-pink/10">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ycod-black dark:text-white mb-3">
            How You Can Help
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            Every action makes a difference. Track your impact below.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display font-bold text-sm text-ycod-black">
              Your Progress
            </span>
            <span className="font-display font-bold text-sm text-ycod-coral">
              {checked.size}/{ACTIONS.length} completed
            </span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full border-2 border-ycod-black overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #F07070, #F5A0B8, #F7DC6F, #00C9A7)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Completion message */}
        <AnimatePresence>
          {checked.size === ACTIONS.length && (
            <motion.div
              className="ninety-card bg-ycod-green/20 text-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-4xl mb-2">🎉</div>
              <p className="font-display font-bold text-ycod-black">
                You&apos;re an organ donation champion!
              </p>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                Thank you for taking every step. You&apos;re helping save lives.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Checklist */}
        <div className="space-y-3">
          {ACTIONS.map((action, index) => {
            const isChecked = checked.has(action.id);
            return (
              <motion.div
                key={action.id}
                className={`ninety-card flex items-start gap-4 cursor-pointer transition-colors ${
                  isChecked ? 'bg-ycod-green/10' : 'bg-white'
                }`}
                style={{ transform: `rotate(${index % 2 === 0 ? -0.3 : 0.3}deg)` }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggle(action.id)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(action.id)}
              >
                {/* Checkbox */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-md border-3 flex items-center justify-center transition-colors ${
                  isChecked
                    ? 'bg-ycod-green border-ycod-black'
                    : 'bg-white border-ycod-black'
                }`} style={{ borderWidth: '3px' }}>
                  {isChecked && (
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{action.icon}</span>
                    <span className={`font-display font-bold text-sm ${
                      isChecked ? 'text-ycod-black/50 line-through' : 'text-ycod-black'
                    }`}>
                      {action.label}
                    </span>
                  </div>
                  <p className="font-body text-xs text-ycod-black/60 dark:text-white/60 mt-1">{action.description}</p>
                  {action.link && !isChecked && (
                    <a
                      href={action.link}
                      className="font-body text-xs text-ycod-blue hover:text-ycod-coral underline mt-1 inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {action.linkText} →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
