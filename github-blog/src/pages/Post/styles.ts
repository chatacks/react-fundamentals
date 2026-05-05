import styled from 'styled-components';
import { contentBase } from '../../styles/mixins';

export const PostContainer = styled.main`
  ${contentBase}

  padding-inline: 2rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  &>div:first-child {
    & p+h4 {
      margin-top: 1.2rem;
    }

    & h4 {
      color: var(--blue-500);
      text-decoration: underline;
    }
  }

  &>div:last-child {
    background-color: var(--slate-800);

    border-radius: 2px;

    padding: 1rem;

    .let {
      color: #80ABD6;
    }

    & span {
      color: #6AD445;
    }
  }
`;
