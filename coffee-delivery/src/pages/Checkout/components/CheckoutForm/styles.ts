import styled from 'styled-components';
import { BaseButton, BaseContainer } from '../../../../styles/global';

export const FormContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: center;

  padding-top: 2.5rem;

  gap: 2rem;

  & h3 {
    font: var(--fw-bold) var(--text-lg) / 1.3 var(--ff-baloo);
    color: var(--gray-800);
    margin-bottom: .9375rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  background-color: var(--gray-200);

  padding: 2.5rem;

  border-radius: .375rem;
`;

export const ContainerInputs = styled(Container)`
  gap: 1rem;

  &>div:first-child {
    margin-bottom: 1rem;
  }

  &>div {
    display: flex;
    gap: .5rem;

    &>span {
      color: var(--yellow-700);
    }

    & div {
      & p:first-child {
        color: var(--gray-800);
      }

      & p:last-child {
        font-size: var(--text-sm);
        color: var(--gray-700);
      }
    }
  }

  &>div:last-child {
    & input:last-child {
      flex-basis: 5rem;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    top: 16px;
    right: 12px;

    font-size: var(--text-xs);
    font-style: italic;

    color: var(--gray-600);
  }
`;

interface InputProps {
  $half?: boolean;
  $hasBadge?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 1.5px solid var(--gray-400);
  border-radius: .25rem;

  background-color: var(--gray-300);

  padding: ${(props) => props.$hasBadge ? '.75rem 4rem .75rem .75rem' : '.75rem'};

  width: ${(props) => props.$half ? '16.875rem' : '100%'};

  color: var(--gray-700);

  &::placeholder {
    color: var(--gray-600);
  }

  &:focus {
    outline: none;
    border: 1.5px solid var(--yellow-700);
  }
`;

export const PaymentContainer = styled(Container)`
  margin-top: .75rem;

  &>div {
    display: flex;
    gap: .5rem;

    & span {
      color: var(--purple-500);
    }

    & div {
      & p:first-child {
        color: var(--gray-800);
      }

      & p:last-child {
        font-size: var(--text-sm);
        color: var(--gray-700);
      }
    }
  }

  &>div:last-child {
    display: flex;

    gap: .75rem;

    & input {
      display: none;
    }
  }
`;

export const Label = styled(BaseButton)`
  gap: .75rem;

  padding: 1rem;

  border: 1px solid transparent;

  &:has(input:checked) {
    border: 1px solid var(--purple-500);
    background-color: var(--purple-100);
  }
`;
interface ErrorProps {
  $error?: boolean;
};

export const Error = styled.div<ErrorProps>`
  visibility: ${props => (props.$error ? 'visible' : 'hidden')};;
  color: var(--red-500);
  font-size: var(--text-xs);
`;

export const SelectedCoffeesContainer = styled(Container)`
  border-radius: .375rem 2.75rem;
  gap: 0;

  & .total {
    display: flex;
    flex-direction: column;

    gap: .75rem;

    & div {
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
    }

    &>div:last-child {
      font-weight: var(--fw-bold);
      font-size: var(--text-xl);
      color: var(--gray-800);
    }
  }
`;

export const FinishedButton = styled(BaseButton)`
  padding: .75rem;
  justify-content: center;
  font-weight: var(--fw-bold);

  margin-top: 1.5rem;

  background-color: var(--yellow-500);
  color: var(--white);

  &:hover:not(:disabled) {
    background-color: var(--yellow-700);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
`;

