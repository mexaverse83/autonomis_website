import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const baseStyles = "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50";

  if (variant === 'primary') {
    return (
      <button className={`${baseStyles} ${className}`} {...props}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1 text-sm font-medium backdrop-blur-3xl transition-colors ${isDark
            ? 'bg-slate-950 text-white hover:bg-slate-900'
            : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}>
          {children}
        </span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex h-12 items-center justify-center rounded-full border px-8 text-sm font-medium transition-colors ${isDark
            ? 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:bg-zinc-900 hover:text-white'
            : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm'
          } ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button className={`text-sm font-medium transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
      } ${className}`} {...props}>
      {children}
    </button>
  );
};