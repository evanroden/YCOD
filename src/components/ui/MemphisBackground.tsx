'use client';

interface MemphisBackgroundProps {
  variant?: 'green' | 'blue';
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

export default function MemphisBackground({
  variant = 'blue',
  className = '',
  children,
  overlay = true,
}: MemphisBackgroundProps) {
  const bgClass = variant === 'green' ? 'memphis-bg-green' : 'memphis-bg-blue';
  const overlayColor = variant === 'green'
    ? 'bg-emerald-800/60'
    : 'bg-sky-900/30';

  return (
    <div className={`relative ${bgClass} ${className}`}>
      {overlay && (
        <div className={`absolute inset-0 ${overlayColor}`} />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
