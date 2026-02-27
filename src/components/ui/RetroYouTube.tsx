'use client';

import { useState } from 'react';

interface RetroYouTubeProps {
  videoId: string;
  title: string;
}

export default function RetroYouTube({ videoId, title }: RetroYouTubeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="aspect-video relative rounded-md overflow-hidden">
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
      className="aspect-video relative rounded-md overflow-hidden w-full group cursor-pointer block bg-gradient-to-br from-ycod-black via-ycod-dark-blue to-ycod-black"
      aria-label={`Play: ${title}`}
    >
      {/* Thumbnail via plain img to avoid Next.js external domain issues */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Tinted overlay */}
      <div className="absolute inset-0 bg-ycod-black/40 group-hover:bg-ycod-black/25 transition-colors duration-200" />

      {/* Dashed inner frame */}
      <div className="absolute inset-3 md:inset-4 border-[3px] border-dashed border-white/25 rounded-md pointer-events-none" />

      {/* Retro play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Drop shadow */}
          <div className="absolute top-1.5 left-1.5 w-20 h-20 md:w-24 md:h-24 rounded-lg bg-ycod-black/50" />
          {/* Button face */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-ycod-coral border-[3px] border-ycod-black rounded-lg flex items-center justify-center group-hover:bg-ycod-pink group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-150">
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              className="ml-1.5 md:w-[42px] md:h-[46px]"
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
      <div className="absolute bottom-0 left-0 right-0 bg-ycod-black/85 border-t-[3px] border-ycod-black px-3 py-2.5 md:px-5 md:py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-ycod-coral rounded border-2 border-ycod-black flex items-center justify-center flex-shrink-0">
            <svg width="10" height="12" viewBox="0 0 10 12">
              <polygon points="1,0 10,6 1,12" fill="white" />
            </svg>
          </div>
          <span className="font-display text-xs md:text-sm font-bold text-white truncate">
            {title}
          </span>
        </div>
      </div>
    </button>
  );
}
