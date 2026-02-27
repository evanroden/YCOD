import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-32 text-center px-4">
      <div className="max-w-lg mx-auto">
        <div className="ninety-card bg-ycod-coral/20 mb-8" style={{ transform: 'rotate(-1deg)' }}>
          <h1 className="font-display text-6xl font-bold text-ycod-coral mb-2">404</h1>
          <h2 className="font-display text-2xl font-bold text-ycod-black dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="font-body text-lg text-ycod-black/60 dark:text-white/60">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="retro-btn bg-ycod-blue text-white">
            Go Home
          </Link>
          <Link href="/blog" className="retro-btn bg-ycod-yellow text-ycod-black">
            Read the Blog
          </Link>
          <Link href="/join" className="retro-btn bg-ycod-coral text-white">
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
}
