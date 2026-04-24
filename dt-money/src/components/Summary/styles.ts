import styled, { css } from 'styled-components';
import { contentBase } from '../../styles/mixins';

export const SummaryContainer = styled.section`
  width: 100%;
  margin-top: -5rem;
`;

export const SummaryContent = styled.div`
  ${contentBase}

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;
`;

interface SummaryCardProps {
  $variantColor?: 'gray' | 'green';
}

const variantColors = {
  gray: css`background-color: var(--gray-600);`,
  green: css`background-color: var(--green-700);`
} as const;

export const SummaryCard = styled.div<SummaryCardProps>`

  ${({ $variantColor = 'gray' }) => variantColors[$variantColor]}

  border-radius: .375rem;

  padding: 1.5rem 2rem;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--gray-300);

    margin-bottom: .75rem;
  }

  & strong {
    font-size: var(--text-3xl);
  }
`;
