import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({children, className, ...props}: ButtonProps) {
  return (
    <button 
      className={`${className} ${styles.button}`}
      {...props}
    >
      {children}
    </button>
  );
}