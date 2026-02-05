'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variants = {
  primary:
    'bg-brand-green-dark text-white hover:bg-brand-green-mid shadow-card hover:shadow-card-hover',
  secondary: 'bg-brand-green text-white hover:bg-brand-green-light text-brand-green-dark',
  outline:
    'border-2 border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white',
  ghost: 'text-brand-green-dark hover:bg-brand-green-dark/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Botón con micro-interacciones (escala y transición de color).
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-300 gpu ' +
    variants[variant] +
    ' ' +
    sizes[size];

  const content = (
    <motion.span
      className="relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={clsx(base, className)}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      className={clsx(base, className)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
