'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

interface ActionItem {
  id: string;
  labelKey: string;
  descKey: string;
  icon: string;
  link?: string;
  linkKey?: string;
}

const ACTIONS: ActionItem[] = [
  {
    id: 'register',
    labelKey: 'action.register',
    descKey: 'action.register_desc',
    icon: '❤️',
    link: 'sms:57838?body=register',
    linkKey: 'action.register_link',
  },
  {
    id: 'join',
    labelKey: 'action.join_ycod',
    descKey: 'action.join_desc',
    icon: '✊',
    link: '/join',
    linkKey: 'action.join_link',
  },
  {
    id: 'learn',
    labelKey: 'action.learn',
    descKey: 'action.learn_desc',
    icon: '📊',
    link: '/facts',
    linkKey: 'action.learn_link',
  },
  {
    id: 'talk',
    labelKey: 'action.talk',
    descKey: 'action.talk_desc',
    icon: '💬',
  },
  {
    id: 'share',
    labelKey: 'action.share',
    descKey: 'action.share_desc',
    icon: '📱',
  },
  {
    id: 'write',
    labelKey: 'action.write',
    descKey: 'action.write_desc',
    icon: '✉️',
    link: '/bill',
    linkKey: 'action.write_link',
  },
];

export default function ActionChecklist() {
  const { t } = useI18n();
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
            {t('action.title')}
          </h2>
          <p className="font-body text-lg text-ycod-black/70 dark:text-white/70">
            {t('action.subtitle')}
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display font-bold text-sm text-ycod-black">
              {t('action.progress')}
            </span>
            <span className="font-display font-bold text-sm text-ycod-coral">
              {t('action.completed', { done: String(checked.size), total: String(ACTIONS.length) })}
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
                {t('action.champion_title')}
              </p>
              <p className="font-body text-sm text-ycod-black/70 dark:text-white/70">
                {t('action.champion_text')}
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
                      {t(action.labelKey)}
                    </span>
                  </div>
                  <p className="font-body text-xs text-ycod-black/60 dark:text-white/60 mt-1">{t(action.descKey)}</p>
                  {action.link && action.linkKey && !isChecked && (
                    <a
                      href={action.link}
                      className="font-body text-xs text-ycod-blue hover:text-ycod-coral underline mt-1 inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t(action.linkKey)} →
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
