import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  id?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = 'md',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-600',
    gradient: 'bg-gradient-to-b from-white to-neutral-50',
  };

  const paddings = {
    none: '',
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-28 lg:py-32',
  };

  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <div className={cn('container', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

// Composants de titre de section
export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {subtitle && (
        <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
