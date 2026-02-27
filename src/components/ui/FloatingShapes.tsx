'use client';

import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', color: '#F5A0B8', size: 40, x: '10%', y: '20%', delay: 0 },
  { type: 'triangle', color: '#4A90D9', size: 35, x: '80%', y: '15%', delay: 1 },
  { type: 'squiggle', color: '#F7DC6F', size: 50, x: '70%', y: '60%', delay: 2 },
  { type: 'circle', color: '#F07070', size: 25, x: '20%', y: '70%', delay: 0.5 },
  { type: 'square', color: '#00C9A7', size: 30, x: '85%', y: '80%', delay: 1.5 },
  { type: 'triangle', color: '#F7DC6F', size: 28, x: '5%', y: '50%', delay: 3 },
  { type: 'squiggle', color: '#F5A0B8', size: 45, x: '50%', y: '10%', delay: 2.5 },
  { type: 'circle', color: '#2E86AB', size: 20, x: '40%', y: '85%', delay: 1.2 },
];

function ShapeSVG({ type, color, size }: { type: string; color: string; size: number }) {
  switch (type) {
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill={color} stroke="#1A1A2E" strokeWidth="2" />
        </svg>
      );
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill={color} stroke="#1A1A2E" strokeWidth="2" />
        </svg>
      );
    case 'square':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40">
          <rect x="4" y="4" width="32" height="32" fill={color} stroke="#1A1A2E" strokeWidth="2" />
        </svg>
      );
    case 'squiggle':
      return (
        <svg width={size} height={size * 0.5} viewBox="0 0 60 30">
          <path
            d="M2 15 Q 10 2, 20 15 T 40 15 T 58 15"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function FloatingShapes({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 10, -15, 0],
            rotate: [0, 5, -3, 7, 0],
            x: [0, 10, -5, 8, 0],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          <ShapeSVG type={shape.type} color={shape.color} size={shape.size} />
        </motion.div>
      ))}
    </div>
  );
}
