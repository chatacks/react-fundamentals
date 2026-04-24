import type { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr';

export type ButtonVariant =  'search' | 'none';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant;
}

export function Button({
  variant = 'none',
  size = 'medium',
  type='button',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      type={type}
      {...props}
    >
      {variant === 'search' && <MagnifyingGlassIcon size={20}/>}
      {children}
    </StyledButton>
  );
}
