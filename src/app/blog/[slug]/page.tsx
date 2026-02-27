'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-posts';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/blog-types';
import SectionDivider from '@/components/ui/SectionDivider';
import RetroButton from '@/components/ui/RetroButton';
import { fadeInUp } from '@/lib/animations';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-ycod-black dark:text-white mb-4">
          Post Not Found
        </h1>
        <p className="font-body text-lg text-ycod-black/60 dark:text-white/60 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <RetroButton href="/blog" color="bg-ycod-coral" className="text-white">
          Back to Blog
        </RetroButton>
      </section>
    );
  }

  const categoryColor = CATEGORY_COLORS[post.category];
  const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Find prev/next posts
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <>
      {/* Hero */}
      <section className={`${post.heroColor} py-16 md:py-20`}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category badge */}
            <span
              className={`inline-block ${categoryColor} text-xs font-display font-bold text-ycod-black px-4 py-1 rounded-full border-2 border-ycod-black mb-4`}
            >
              {CATEGORY_LABELS[post.category]}
            </span>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              {post.title}
            </h1>

            <p className="font-body text-white/80 text-sm">
              {dateFormatted} &middot; YCOD News &amp; Updates
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* SVG Illustration */}
      <section className="py-8 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            className="ninety-card bg-white dark:bg-ycod-black/80 p-6 flex justify-center"
            style={{ transform: 'rotate(-0.5deg)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            dangerouslySetInnerHTML={{ __html: post.svgIcon }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-ycod-black dark:prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-body prose-p:text-ycod-black/80 dark:prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-ycod-black dark:prose-strong:text-white prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-ycod-coral prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-ycod-black/70 dark:prose-blockquote:text-white/70 prose-blockquote:my-6 prose-blockquote:bg-ycod-coral/5 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-md
              prose-a:text-ycod-blue prose-a:font-semibold prose-a:underline hover:prose-a:text-ycod-coral
              prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:font-body prose-li:text-ycod-black/80 dark:prose-li:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Sources */}
      {post.sources.length > 0 && (
        <section className="py-8 bg-ycod-black/5 dark:bg-white/5 transition-colors duration-300">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="font-display text-lg font-bold text-ycod-black dark:text-white mb-4">
              Sources &amp; Further Reading
            </h3>
            <ul className="space-y-2">
              {post.sources.map((source, i) => (
                <li key={i} className="font-body text-sm">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ycod-blue hover:text-ycod-coral underline transition-colors"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <SectionDivider color="#F07070" />

      {/* Prev/Next navigation */}
      <section className="py-12 bg-white dark:bg-ycod-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="ninety-card bg-white dark:bg-ycod-black/80 flex-1 group"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <p className="font-body text-xs text-ycod-black/50 dark:text-white/50 mb-1">&larr; Previous</p>
                <p className="font-display font-bold text-sm text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="ninety-card bg-white dark:bg-ycod-black/80 flex-1 text-right group"
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <p className="font-body text-xs text-ycod-black/50 dark:text-white/50 mb-1">Next &rarr;</p>
                <p className="font-display font-bold text-sm text-ycod-black dark:text-white group-hover:text-ycod-coral transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="bg-ycod-blue py-12 text-center">
        <RetroButton href="/blog" color="bg-ycod-yellow" className="text-ycod-black">
          &larr; All Posts
        </RetroButton>
      </section>
    </>
  );
}
