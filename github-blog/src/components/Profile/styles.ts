import styled from 'styled-components';
import { contentBase } from '../../styles/mixins';

export const ProfileContainer = styled.section`
  margin-block: -3.5rem 4.5rem;
`;

export const ProfileContent = styled.div`
 ${contentBase}
  padding: 2rem 2.5rem;

  display: flex;

  gap: 2rem;

  background-color: var(--slate-900);
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.20);
  border-radius: .625rem;

  & img {
    width: 9.25rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    border-radius: .5rem;
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  gap: .5rem;

  &>div:first-child {
    display: flex;
    justify-content: space-between;

    & h2 {
      font-size: var(--text-2xl);
      color: var(--slate-50);
    }
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
`;
