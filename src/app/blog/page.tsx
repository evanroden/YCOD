'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/lib/blog-posts';
import { BlogCategory, CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/blog-types';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const ALL_CATEGORIES: (BlogCategory | 'all')[] = ['all', 'policy', 'medical', 'awareness', 'opinion'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (activeCategory !== 'all') {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-ycod-coral py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            News &amp; Updates
          </motion.h1>
          <motion.p
            className="font-body text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Stories, breakthroughs, and policy updates shaping the future of organ donation.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-ycod-black border-b-2 border-ycod-black/10 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter by category">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`font-display font-bold text-sm px-4 py-2 rounded-full border-2 border-ycod-black dark:border-white/30 transition-all duration-150 ${
                    activeCategory === cat
                      ? cat === 'all'
                        ? 'bg-ycod-black dark:bg-white text-white dark:text-ycod-black shadow-retro-sm'
                        : `${CATEGORY_COLORS[cat as BlogCategory]} text-ycod-black shadow-retro-sm`
                      : 'bg-white dark:bg-ycod-black text-ycod-black dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {cat === 'all' ? 'All Posts' : CATEGORY_LABELS[cat as BlogCategory]}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-body text-sm px-4 py-2 pl-10 border-2 border-ycod-black dark:border-white/30 rounded-md bg-white dark:bg-ycod-black dark:text-white"
                aria-label="Search blog posts"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ycod-black/40 dark:text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-ycod-yellow/10 dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-display text-2xl font-bold text-ycod-black/40 dark:text-white/40 mb-2">
                No posts found
              </p>
              <p className="font-body text-ycod-black/50 dark:text-white/50">
                Try a different search or category.
              </p>
            </div>
          ) : (
            <>
              <p className="font-body text-sm text-ycod-black/50 dark:text-white/50 mb-8">
                Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
              </p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                key={activeCategory + searchQuery}
              >
                {filteredPosts.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      <SectionDivider color="#4A90D9" />

      {/* CTA */}
      <section className="bg-ycod-blue py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Informed, Save Lives
          </h2>
          <p className="font-body text-lg text-white/80 mb-6">
            Follow the latest developments in organ donation policy and advocacy.
          </p>
        </div>
      </section>
    </>
  );
}
