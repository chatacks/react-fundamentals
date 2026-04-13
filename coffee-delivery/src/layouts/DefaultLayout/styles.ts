import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  padding-block: 2rem;
  width: min(var(--max-width), calc(100% - 10rem * 2));
  margin-inline: auto;

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
