export default function SquiggleBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 12" preserveAspectRatio="none" className="w-full h-3">
        <path
          d="M0 6 Q 20 0, 40 6 T 80 6 T 120 6 T 160 6 T 200 6 T 240 6 T 280 6 T 320 6 T 360 6 T 400 6 T 440 6 T 480 6 T 520 6 T 560 6 T 600 6 T 640 6 T 680 6 T 720 6 T 760 6 T 800 6"
          fill="none"
          stroke="#1A1A2E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
