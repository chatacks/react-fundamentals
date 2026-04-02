import type { InputHTMLAttributes } from "react";
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
} 

export function Input({className, ...props}: InputProps) {
  return (
    <input
      className={`${className ? className : styles.input}`}
      type="text"
      {...props}
    />
  );
}