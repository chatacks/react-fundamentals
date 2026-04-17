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

export const HomeContainer = styled(BaseContainer)`
  padding-top: 2rem;

  & div {
    & h2 {
      font: var(--fw-bold) var(--text-3xl) / 1.3 var(--ff-baloo);
      color: var(--gray-800);

      margin-bottom: 3.375rem;
    }
  }
`;
