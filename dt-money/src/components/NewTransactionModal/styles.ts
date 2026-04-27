import  * as Dialog from '@radix-ui/react-dialog';
import  * as RadioGroup from '@radix-ui/react-radio-group';

import styled, { css } from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;

  width: 100vw;
  height: 100vh;

  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;

  background-color: var(--gray-800);

  border-radius: .375rem;

  padding: 3rem 3rem 2.5rem;

  & form {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    margin-top: 2rem;

    & input {
      background-color: var(--gray-900);

      border: none;
      border-radius: .375rem;

      padding: 1rem;

      &::placeholder {
        color: var(--gray-500);
      }
    }

    &>button {
      margin-top: 1.5rem;
    }
  }
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background-color: transparent;

  border: none;

  line-height: 0;

  cursor: pointer;
  color: var(--gray-500);
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: flex;
  justify-content: center;

  gap: 1rem;

  margin-top: .5rem;
`;

interface TransactionTypeButtonProps {
  $variant?: 'income' | 'outcome'
}

const variants = {
  income: css` & svg { color: var(--green-300); }`,
  outcome: css` & svg { color: var(--red-300); }`,
};

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: var(--gray-700);

  width: 100%;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .5rem;

  border: none;
  border-radius: .375rem;

  cursor: pointer;

  ${({ $variant = 'income' }) => variants[$variant]}

  &[data-state="checked"] {
    color: var(--white);

    & svg {
      color: var(--white);
    }

    ${({ $variant = 'income' }) => $variant === 'income' ?
    css` background-color: var(--green-700);` :
    css` background-color: var(--red-700);`}

  }
`;
