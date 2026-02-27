'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-32 text-center px-4">
      <div className="max-w-lg mx-auto">
        <div className="ninety-card bg-ycod-yellow/30 mb-8" style={{ transform: 'rotate(0.5deg)' }}>
          <h1 className="font-display text-4xl font-bold text-ycod-black dark:text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="font-body text-lg text-ycod-black/60 dark:text-white/60">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="retro-btn bg-ycod-blue text-white">
            Try Again
          </button>
          <Link href="/" className="retro-btn bg-ycod-yellow text-ycod-black">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
