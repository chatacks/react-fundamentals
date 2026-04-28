import styled, { css } from 'styled-components';
import type { ButtonSize, ButtonVariant } from '.';

interface StyledButtonProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize
}

const sizes = {
  small: css`padding: .5rem 1rem;`,
  medium: css`padding: .75rem 1.25rem;`,
  large: css`padding: 1rem 2rem;`,
} as const;

const variants = {
  search: css`
    color: var(--green-500);

    gap: .75rem;

    padding: .875rem 2rem;

    background-color: transparent;
    border: 2px solid var(--green-300);

    &:not(:disabled):hover {
      background-color: var(--green-300);
      color: var(--white);
    }
  `,
  none: css``,
} as const;

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: var(--fw-bold);

  color: var(--white);
  cursor: pointer;

  border: none;
  border-radius: .375rem;

  background-color: var(--green-500);

  transition: background-color 500ms ease, color 500ms ease;

  ${({ $size = 'medium' }) => sizes[$size]};

  &:not(:disabled):hover {
    background-color: var(--green-300);
  }

  ${({ $variant = 'none' }) => variants[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
