import styled from 'styled-components';
import { contentBase } from '../../../../styles/mixins';

export const SearchFormContainer = styled.form`
  ${contentBase}
  display: flex;

  gap: 1rem;

  margin-block: 4rem 1.5rem;

  & input {
    flex: 1;

    background-color: var(--gray-900);

    border: none;
    border-radius: .375rem;

    padding: 1rem;

    &::placeholder {
      color: var(--gray-500);
    }
  }
`;
