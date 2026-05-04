import styled from 'styled-components';

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;

  padding: 2rem;

  background-color: var(--slate-800);

  border-radius: .625rem;
  border: 1px solid transparent;

  transition: border 350ms ease, transform 350ms ease;

  &:hover {
    border: 1px solid var(--slate-300);

    cursor: pointer;

    transform: translateY(-2px);
  }
`;

export const PostCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  & h3 {
    font-size: var(--text-xl);
    font-weight: var(--fw-bold);
  }

  & span {
    font-size: var(--text-xs);
    color: var(--slate-300);
  }
`;

export const PostCardContent = styled.div`

`;
