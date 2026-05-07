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
    display: flex;
    flex-direction: column;

    gap: .5rem;

    hr {
      border: 0;
      height: 0;
      margin-block: .5rem;
    }

    ul, ol {
      list-style: none;
    }
  }

`;
