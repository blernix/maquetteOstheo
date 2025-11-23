import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    children,
    className,
    disabled,
    ...props
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 btn-hover-lift',
      secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 focus-visible:ring-secondary-400 btn-hover-lift',
      outline: 'border-2 border-primary-500 text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500',
      ghost: 'text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    // Si c'est un lien
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    // Si c'est un bouton
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
