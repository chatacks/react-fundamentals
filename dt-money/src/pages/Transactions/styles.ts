import styled, { css } from 'styled-components';
import { contentBase } from '../../styles/mixins';

export const TransactionsContainer = styled.main`
  width: 100%;

  margin-block: 1.5rem 2.5rem;
`;

export const TransactionsContent = styled.div`
  ${contentBase}
`;

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 .5rem;

  td {
    background-color: var(--gray-700);
    color: var(--gray-300);

    padding: 1.25rem 2rem;

    &:first-child {
      width: 50%;
      border-top-left-radius: .375rem;
      border-bottom-left-radius: .375rem;
    }

    &:last-child {
      border-top-right-radius: .375rem;
      border-bottom-right-radius: .375rem;
    }
  }
`;

interface PriceHighlightProps {
  $variantColor: 'income' | 'outcome'
}

const variantColors = {
  income: css`color: var(--green-300);`,
  outcome: css`color: var(--red-300);`
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ $variantColor = 'income' }) => variantColors[$variantColor]}
`;
