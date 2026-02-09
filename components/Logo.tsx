import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", isDark = true }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Autonomis Logo"
    >
      {/* Abstract 'A' / Node Structure - Modern, Sharp, Tech-focused */}
      <path
        d="M16 2L2 26H10.5L16 16.5L21.5 26H30L16 2Z"
        className={isDark ? "fill-white" : "fill-zinc-900"}
      />
      {/* Central 'Core' Accent representing the AI Agent */}
      <path
        d="M16 10L19 15H13L16 10Z"
        className={isDark ? "fill-zinc-950" : "fill-white"}
      />
      {/* Decorative digital accent */}
      <rect
        x="13"
        y="28"
        width="6"
        height="2"
        className="fill-indigo-500"
      />
    </svg>
  );
};