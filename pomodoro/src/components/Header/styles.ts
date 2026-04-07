import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }

  & nav {
    display: flex;
    gap: 1.5rem;

    & a {
      position: relative;

      display: flex;
      align-items: center;
      padding-bottom: .5rem;

      &::after {
        content: "";
        position: absolute;
        height: 3px;
        bottom: 0;
        width: 0;
        left: 0;
        background-color: var(--green-500);
        transition: all 500ms ease;
      }

      &:hover::after {
        width: 100%;
      }

      &.active {
        color: var(--green-500);
      }

    }



  }

`;
