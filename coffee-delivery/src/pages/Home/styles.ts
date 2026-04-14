import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';

export const SectionContainer = styled(BaseContainer)`
  padding-block: 5.75rem;

  &>div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 3.5rem;

    &>div:first-child {
      display: flex;
      flex-direction: column;

      gap: 4.125rem;

      &>div:first-child {
        h1 {
          font: var(--fw-bold) var(--text-5xl)/1.3 var(--ff-baloo);
          color: var(--gray-900);
          margin-bottom: 1rem;
        }

        p {
          font-size: var(--text-xl);
          color: var(--gray-800);
        }
      }

      &>div:last-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem 2.5rem;

        & div {
          display: flex;
          align-items: center;
          gap: .75rem;

          span {
            color: var(--white);
          }
        }

        &>div:nth-child(1) {
          & span {
            display: inline-block;

            background-color: var(--yellow-700);
            line-height: 0;

            padding: .5rem;

            border-radius: 50%;
          }
        }

        &>div:nth-child(2) {
          & span {
            display: inline-block;

            background-color: var(--gray-700);
            line-height: 0;

            padding: .5rem;

            border-radius: 50%;
          }
        }

        &>div:nth-child(3) {
          & span {
            display: inline-block;

            background-color: var(--yellow-500);
            line-height: 0;

            padding: .5rem;

            border-radius: 50%;
          }
        }

        &>div:nth-child(4) {
          & span {
            display: inline-block;

            background-color: var(--purple-500);
            line-height: 0;

            padding: .5rem;

            border-radius: 50%;
          }
        }
      }
    }
  }
`;


export const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const MainContainer = styled(BaseContainer)`
  padding-top: 2rem;

  & div {
    & h2 {
      font: var(--fw-bold) var(--text-3xl) / 1.3 var(--ff-baloo);
      color: var(--gray-800);

      margin-bottom: 3.375rem;
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;
  max-width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--gray-200);
  padding: 1.25rem;

  border-radius: .375rem 2.25rem;

  &>div:first-child {
    position: absolute;
    top: -20px;
    z-index: 1;

    align-self: center;
  }

  &>div:last-child {
    display: flex;
    align-items: center;
    gap: 1.4375rem;

    span {
      margin-left: .1rem;
      font: var(--fw-bold) var(--text-2xl) / 1.3 var(--ff-baloo);
      /* font-size: ; */
    }

    &>div {
      display: flex;
      align-items: center;
      gap: .5rem;
    }
  }
`;

export const ButtonCardShopp = styled.button`
  padding: .5rem;
  color: var(--white);
  background-color: var(--purple-700);

  line-height: 0;

  border: none;
  border-radius: .375rem;

  cursor: pointer;

  transition: background-color 500ms ease;

  &:hover {
    background-color: var(--purple-500);
  }

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: .5rem;

  margin-block: 1rem 2.0625rem;

  & h3 {
    font: var(--fw-bold) var(--text-xl) / 1.3 var(--ff-baloo);
    color: var(--gray-800);
  }

  p {
    text-align: center;
    font-size: var(--text-sm);
    color: var(--gray-600);
  }
`;

export const Badge = styled.span`
  margin-top: 4.5rem;
  background-color: var(--yellow-100);
  color: var(--yellow-700);

  text-transform: uppercase;
  font-size: .625rem;
  font-weight: var(--fw-bold);

  padding: 4px 8px;

  border-radius: 6.25rem;
`;
