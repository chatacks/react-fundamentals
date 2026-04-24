import styled from 'styled-components';
import { contentBase } from '../../styles/mixins';

export const HeaderContainer = styled.header`
  background-color: var(--gray-900);

  width: 100%;
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  ${contentBase}
  padding-inline: 1rem;

  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;

    gap: 1rem;

    & img {
      width: 2.5rem;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    h1 {
      font-weight: var(--fw-bold);
      font-size: var(--text-2xl);
    }
  }
`;
