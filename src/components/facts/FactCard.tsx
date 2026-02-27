'use client';

import { motion } from 'framer-motion';
import NinetyCard from '@/components/ui/NinetyCard';

interface FactCardProps {
  stat: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

export default function FactCard({
  stat,
  title,
  description,
  icon,
  color,
  index,
}: FactCardProps) {
  const isEven = index % 2 === 0;
  const rotation = isEven ? -2 : 2;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <NinetyCard color={color} rotation={rotation}>
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0" aria-hidden="true">{icon}</span>
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold text-ycod-black mb-1">
              {stat}
            </div>
            <h3 className="font-display text-lg font-bold text-ycod-black mb-2">{title}</h3>
            <p className="font-body text-sm text-ycod-black/80">{description}</p>
          </div>
        </div>
      </NinetyCard>
    </motion.div>
  );
}
