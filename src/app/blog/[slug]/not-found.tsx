import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <section className="py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-ycod-black dark:text-white mb-4">
        Post Not Found
      </h1>
      <p className="font-body text-lg text-ycod-black/60 dark:text-white/60 mb-8">
        The blog post you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/blog"
        className="retro-btn bg-ycod-coral text-white inline-block"
      >
        Back to Blog
      </Link>
    </section>
  );
}
