'use client';

import { motion } from 'framer-motion';

interface NinetyCardProps {
  children: React.ReactNode;
  color?: string;
  rotation?: number;
  className?: string;
  hover?: boolean;
}

export default function NinetyCard({
  children,
  color = 'bg-white',
  rotation = 0,
  className = '',
  hover = true,
}: NinetyCardProps) {
  return (
    <motion.div
      className={`ninety-card ${color} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={hover ? { rotate: 0, scale: 1.03, boxShadow: '6px 6px 0px #1A1A2E' } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
