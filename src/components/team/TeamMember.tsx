'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import NinetyCard from '@/components/ui/NinetyCard';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  color: string;
  index: number;
}

export default function TeamMember({ name, role, bio, image, color, index }: TeamMemberProps) {
  const rotation = index % 2 === 0 ? -2 : 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <NinetyCard color={color} rotation={rotation} className="text-center">
        {image ? (
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-ycod-black">
            <Image
              src={image}
              alt={`Portrait of ${name}`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`w-32 h-32 mx-auto mb-4 rounded-full border-4 border-ycod-black flex items-center justify-center ${color} brightness-90`}>
            <span className="text-4xl font-display font-bold text-ycod-black dark:text-white">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <h3 className="font-display text-xl font-bold text-ycod-black dark:text-white">{name}</h3>
        <p className="font-body text-sm font-semibold text-ycod-black/70 dark:text-white/70 mb-3">{role}</p>
        <p className="font-body text-sm text-ycod-black/80 dark:text-white/80">{bio}</p>
      </NinetyCard>
    </motion.div>
  );
}
