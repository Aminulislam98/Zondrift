export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-5">
      {/* Apple-style spinner */}
      <div className="relative w-10 h-10">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[3px] h-[9px] bg-black rounded-full left-1/2 top-0 -translate-x-1/2 origin-[50%_20px]"
            style={{
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
              transformOrigin: "50% 20px",
              opacity: (i + 1) / 12,
              animation: `spin 1s linear infinite`,
              animationDelay: `${-(12 - i) / 12}s`,
            }}
          />
        ))}
      </div>

      {/* Brand */}
      <p className="text-[13px] font-medium tracking-[-0.02em] text-black/40">
        Zondrift
      </p>

      <style>{`
        @keyframes spin {
          0%   { opacity: inherit; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
