'use client';

import Link from 'next/link';

interface RetroButtonProps {
  children: React.ReactNode;
  href?: string;
  color?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  external?: boolean;
}

export default function RetroButton({
  children,
  href,
  color = 'bg-ycod-yellow',
  onClick,
  type = 'button',
  className = '',
  external = false,
}: RetroButtonProps) {
  const classes = `retro-btn ${color} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
