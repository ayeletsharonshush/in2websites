export function IngageLogo({ className = "", height = 40 }: { className?: string; height?: number }) {
  const scale = height / 40;
  const w = 260 * scale;

  return (
    <svg
      viewBox="0 0 260 48"
      width={w}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="img-logo"
    >
      <defs>
        <linearGradient id="eye-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="50%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#8ac926" />
        </linearGradient>
        <radialGradient id="iris-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="30%" stopColor="#0d6efd" />
          <stop offset="55%" stopColor="#00b4d8" />
          <stop offset="75%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#0a4a3a" />
        </radialGradient>
      </defs>

      <g transform="translate(0, 4)">
        <path
          d="M30 20 C30 20 18 6 6 20 C18 34 30 20 30 20 Z"
          fill="none"
          stroke="url(#eye-gradient)"
          strokeWidth="2.8"
          strokeLinejoin="round"
          transform="translate(8, 0)"
        />
        <circle cx="26" cy="20" r="7.5" fill="url(#iris-gradient)" />
        <circle cx="26" cy="20" r="2.5" fill="#0a0a1a" />
        <circle cx="24" cy="17.5" r="1.2" fill="white" opacity="0.9" />
      </g>

      <g transform="translate(58, 0)">
        <text
          y="32"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize="28"
          letterSpacing="2"
        >
          <tspan fill="#1a3a4a">I</tspan>
          <tspan fill="#1a3a4a">N</tspan>
          <tspan fill="#1a3a4a">G</tspan>
          <tspan fill="#d63384">A</tspan>
          <tspan fill="#e67e22">G</tspan>
          <tspan fill="#00b4d8">E</tspan>
        </text>

        <text
          y="46"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="400"
          fontSize="10"
          letterSpacing="0.5"
        >
          <tspan fill="#5a6a7a">We turn </tspan>
          <tspan fill="#e67e22" fontStyle="italic">boring</tspan>
          <tspan fill="#5a6a7a"> into </tspan>
          <tspan fill="#5a6a7a">brilliant</tspan>
        </text>
      </g>
    </svg>
  );
}

export function IngageLogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="img-logo-mark"
    >
      <defs>
        <linearGradient id="eye-grad-sm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="50%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#8ac926" />
        </linearGradient>
        <radialGradient id="iris-grad-sm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="30%" stopColor="#0d6efd" />
          <stop offset="55%" stopColor="#00b4d8" />
          <stop offset="75%" stopColor="#2ec4b6" />
          <stop offset="100%" stopColor="#0a4a3a" />
        </radialGradient>
      </defs>
      <path
        d="M32 20 C32 20 18 4 4 20 C18 36 32 20 32 20 Z"
        fill="none"
        stroke="url(#eye-grad-sm)"
        strokeWidth="3"
        strokeLinejoin="round"
        transform="translate(2, 0)"
      />
      <circle cx="20" cy="20" r="8" fill="url(#iris-grad-sm)" />
      <circle cx="20" cy="20" r="3" fill="#0a0a1a" />
      <circle cx="17.5" cy="17" r="1.5" fill="white" opacity="0.9" />
    </svg>
  );
}
