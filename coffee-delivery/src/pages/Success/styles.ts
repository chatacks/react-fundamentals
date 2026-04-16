import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';

export const SuccessContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6.375rem;

  justify-items: center;
  align-items: end;

  padding-top: 5rem;

  &>div {
    padding-block: .75rem;

    &>h2 {
      font: var(--fw-bold) var(--text-3xl) var(--ff-baloo);
      padding-bottom: .25rem;
      color: var(--yellow-700);
    }

    &>p {
      font-size: var(--text-xl);
      color: var(--gray-800);
    }
  }
`;

export const OrderContainer = styled.div`
  position: relative;

  padding: 1px;

  &>div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background: var(--gray-100);
    border-radius: .375rem 2rem;
    padding: 2.5rem;
  }

  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--yellow-500) 0%, var(--purple-500) 100%);
    border-radius: .375rem 2rem;
    z-index: -1;
  }
`;

const OrderContent = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  &>span {
    padding: .5rem;
    border-radius: 50%;

    line-height: 0;
  }

  & div {
    p:first-child {
      color: var(--gray-700);

      & span {
        font-weight: var(--fw-bold);
      }
    }

    p:last-child {
      font-weight: var(--fw-bold);
    }
  }
`;

export const LocalContent = styled(OrderContent)`
  & div {
    & p:last-child {
      font-weight: var(--fw-regular);
    }
  }

  &>span {
    color: var(--white);
    background-color: var(--purple-500);
  }
`;

export const TimeContent = styled(OrderContent)`
  &>span {
    color: var(--white);
    background-color: var(--yellow-500);
  }
`;

export const PaymentContent = styled(OrderContent)`
  &>span {
    color: var(--white);
    background-color: var(--yellow-700);
  }
`;
