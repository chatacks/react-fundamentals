import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: .75rem;

  & div {
    display: flex;
    justify-content: space-between;

    & span:first-child {
      font-size: var(--text-lg);
      font-weight: var(--fw-bold);
    }

    & span:last-child {
      font-size: var(--text-sm);
      color: var(--slate-300);
    }
  }
`;

export const Input = styled.input`
  border: 1px solid var(--slate-700);
  border-radius: .375rem;

  padding: .75rem 1rem;

  background-color: var(--slate-975);

  &:focus {
    border: 1px solid var(--blue-500);
    box-shadow: none;
  }

  &::placeholder {
    color: var(--slate-400);
  }
`;
