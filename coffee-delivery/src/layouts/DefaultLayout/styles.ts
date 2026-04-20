import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  padding-block: 2rem;
  z-index: 1;

  width: min(var(--max-width), calc(100% - 10rem * 2));
  margin-inline: auto;

  background-color: var(--gray-100);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &>div {
      display: flex;
      align-items: center;

      gap: .75rem;

      &>div:first-child {
        display: flex;
        align-items: center;

        border-radius: .25rem;
        background-color: var(--purple-100);

        gap: .25rem;

        padding: .5rem;

        & svg {
          color: var(--purple-500);
        }

        & span {
          font-size: var(--text-sm);
          color: var(--purple-700);
        }
      }

      div {
        position: relative;

        a {
          background-color: var(--yellow-100);
          border-radius: .25rem;
          color: var(--yellow-700);

          display: inline-block;

          padding: .5rem;

          line-height: 0;

          span {
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            left: 26px;
            top: -8px;

            font-size: var(--text-xs);
            font-weight: var(--fw-bold);
            height: 1.25rem;
            width: 1.25rem;

            background-color: var(--yellow-700);
            color: var(--white);
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
