import styled from 'styled-components';
import { contentBase } from '../../../../styles/mixins';

export const PostCardContainer = styled.section`
  margin-block: -3.5rem;
`;

export const PostCardContent = styled.div`
  ${contentBase}

  gap: .5rem;

  padding: 2rem;

  background-color: var(--slate-900);
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.20);
  border-radius: .625rem;

  & a {
    &::after {
      bottom: 0;
    }
  }

  &>div:last-child {
    margin-top: .75rem;

    h2 {
      font-size: var(--text-2xl);
      color: var(--slate-50);
    }

    &>div:last-child {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;

      & div {
        display: flex;
        align-items: center;

        gap: .5rem;

        & svg {
          color: var(--slate-400);
        }
      }
    }
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
