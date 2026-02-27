'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost, CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/blog-types';
import { fadeInUp } from '@/lib/animations';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const rotation = index % 3 === 0 ? -1 : index % 3 === 1 ? 0.8 : -0.5;
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <motion.div variants={fadeInUp}>
      <Link href={`/blog/${post.slug}`} className="block group">
        <div
          className="ninety-card bg-white dark:bg-ycod-black/80 h-full flex flex-col"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* SVG Icon */}
          <div
            className={`${post.heroColor} rounded-md p-4 mb-4 flex items-center justify-center border-2 border-ycod-black dark:border-white/30`}
            style={{ minHeight: '140px' }}
            dangerouslySetInnerHTML={{ __html: post.svgIcon }}
          />

          {/* Category badge */}
          <span
            className={`inline-block ${categoryColor} text-xs font-display font-bold text-ycod-black px-3 py-1 rounded-full border-2 border-ycod-black dark:border-white/30 mb-3 self-start`}
          >
            {CATEGORY_LABELS[post.category]}
          </span>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-2 group-hover:text-ycod-coral transition-colors leading-tight">
            {post.title}
          </h3>

          {/* Date */}
          <p className="font-body text-xs text-ycod-black/50 dark:text-white/50 mb-2">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          {/* Excerpt */}
          <p className="font-body text-sm text-ycod-black/70 dark:text-white/70 flex-1">
            {post.excerpt}
          </p>

          {/* Read more */}
          <p className="font-display font-bold text-ycod-blue text-sm mt-4 group-hover:text-ycod-coral transition-colors">
            Read More &rarr;
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
