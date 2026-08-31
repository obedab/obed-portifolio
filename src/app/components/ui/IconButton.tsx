import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
}

const iconSizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
};

export default function IconButton({
  children,
  onClick,
  size = 'lg',
  className = '',
  'aria-label': ariaLabel,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${iconSizeClasses[size]} rounded-full border border-white/12 bg-white/5 text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}