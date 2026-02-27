'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RetroYouTubeProps {
  videoId: string;
  title: string;
}

export default function RetroYouTube({ videoId, title }: RetroYouTubeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className="aspect-video relative rounded overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="aspect-video relative rounded overflow-hidden w-full group cursor-pointer block"
      aria-label={`Play: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
        unoptimized
      />

      {/* Tinted overlay in brand color */}
      <div className="absolute inset-0 bg-ycod-black/30 group-hover:bg-ycod-black/20 transition-colors duration-200" />

      {/* Decorative border overlay */}
      <div className="absolute inset-2 md:inset-3 border-[3px] border-dashed border-white/30 rounded pointer-events-none" />

      {/* Retro play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Shadow */}
          <div className="absolute top-1 left-1 w-20 h-20 md:w-24 md:h-24 rounded-md bg-ycod-black/60" />
          {/* Button */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-ycod-coral border-[3px] border-ycod-black rounded-md flex items-center justify-center group-hover:bg-ycod-pink group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-150">
            {/* Play triangle */}
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              className="ml-1 md:w-[40px] md:h-[44px]"
            >
              <polygon
                points="4,2 34,20 4,38"
                fill="#FFFFFF"
                stroke="#1A1A2E"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom label bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-ycod-black/80 px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
            <polygon points="5,3 19,12 5,21" fill="#F07070" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
          <span className="font-display text-xs md:text-sm font-bold text-white truncate">
            {title}
          </span>
        </div>
      </div>
    </button>
  );
}
