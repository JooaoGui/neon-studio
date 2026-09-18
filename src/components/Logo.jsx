export default function Logo({ variant = "dark", showText = true, className = "" }) {
  const mainColor = variant === "light" ? "#FFFFFF" : "#111111";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 40 L100 100 L100 132 L40 72 Z" fill={mainColor} />
        <path d="M100 100 L100 132 L68 132 Z" fill="#FFC72C" />
        <path
          d="M100 40 C132 40 158 58 158 84 C158 103 145 113 126 117 L157 150 L184 150 L138 101 C152 96 163 83 163 65 C163 39 137 18 100 18 L100 40 Z"
          fill={mainColor}
        />
      </svg>
      {showText && (
        <div className="leading-none select-none">
          <div
            className="text-xl font-extrabold tracking-tight"
            style={{ color: mainColor, fontFamily: "'Poppins', sans-serif" }}
          >
            NEON
          </div>
          <div
            className="text-[9px] font-semibold tracking-[0.35em]"
            style={{ color: mainColor, opacity: 0.7, fontFamily: "'Poppins', sans-serif" }}
          >
            STUDIO
          </div>
        </div>
      )}
    </div>
  );
}
