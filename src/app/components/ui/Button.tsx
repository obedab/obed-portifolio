import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  textCase?: 'uppercase' | 'lowercase' | 'none';
  href?: string;
  onClick?: () => void;
  startIcon?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  textCase = 'uppercase',
  href,
  onClick,
  startIcon,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold tracking-widest transition-all duration-300 rounded-full border focus:outline-none focus:ring-2 focus:ring-cyan-400/50';
  const caseClasses = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    none: '',
  };

  const variantClasses = {
    primary: 'bg-cyan-500/10 border-cyan-400/20 text-cyan-300 hover:bg-violet-500/20 hover:border-violet-400/30 shadow-lg shadow-cyan-500/10',
    secondary: 'bg-transparent border-transparent text-white/60 hover:bg-violet-500/10 hover:border-violet-400/20 hover:text-violet-100',
    outline: 'border-white/15 text-white hover:bg-violet-500/10 hover:border-violet-400/25',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-3 text-sm font-semibold',
    lg: 'px-6 py-3 text-base',
  };

  const classes = `${baseClasses} ${caseClasses[textCase]} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {startIcon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {startIcon}
      {children}
    </button>
  );
}