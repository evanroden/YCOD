export default function SectionDivider({ color = '#F5A0B8' }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-10"
      >
        <path
          d="M0 20 Q 50 5, 100 20 T 200 20 T 300 20 T 400 20 T 500 20 T 600 20 T 700 20 T 800 20 T 900 20 T 1000 20 T 1100 20 T 1200 20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M0 28 Q 75 38, 150 28 T 300 28 T 450 28 T 600 28 T 750 28 T 900 28 T 1050 28 T 1200 28"
          fill="none"
          stroke="#F7DC6F"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
