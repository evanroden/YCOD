'use client';

import { motion } from 'framer-motion';
import NinetyCard from '@/components/ui/NinetyCard';

interface InitiativeCardProps {
  title: string;
  icon: string;
  color: string;
  summary: string;
  description: string;
  index: number;
}

export default function InitiativeCard({
  title,
  icon,
  color,
  summary,
  description,
  index,
}: InitiativeCardProps) {
  const rotation = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <NinetyCard color={color} rotation={rotation} className="h-full">
        <div className="text-5xl mb-4" aria-hidden="true">{icon}</div>
        <h3 className="font-display text-xl font-bold text-ycod-black mb-2">{title}</h3>
        <p className="font-body font-semibold text-ycod-black/80 mb-4">{summary}</p>
        <p className="font-body text-sm text-ycod-black/70">{description}</p>
      </NinetyCard>
    </motion.div>
  );
}
