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

  return (
    <div className={`relative ${bgClass} ${className}`}>
      {overlay && (
        <div className="absolute inset-0 bg-black/10" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
