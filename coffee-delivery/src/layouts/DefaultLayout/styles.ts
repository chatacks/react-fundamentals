import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';

export const HeaderContainer = styled(BaseContainer)`
  padding-block: 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &>div {
      display: flex;
      align-items: center;

      gap: .75rem;

      div {
        display: flex;
        align-items: center;

        border-radius: .25rem;
        background-color: var(--purple-100);

        gap: .25rem;

        padding: .5rem;

        svg {
          color: var(--purple-500);
        }

        span {
          font-size: var(--text-sm);
          color: var(--purple-700);
        }
      }

      a {
        background-color: var(--yellow-100);
        border-radius: .25rem;
        color: var(--yellow-700);

        display: inline-block;

        padding: .5rem;

        line-height: 0;
      }
    }
  }
`;
