import styled from 'styled-components';

export const Badge = styled.span`
  background-color: var(--yellow-100);
  color: var(--yellow-700);
  margin-left: .25rem;

  text-transform: uppercase;
  font-size: .625rem;
  font-weight: var(--fw-bold);

  padding: 4px 8px;

  border-radius: 6.25rem;
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
    margin-top: calc(0px - 2rem - 6px);
  }

  &>div:last-child {
    display: flex;
    align-items: center;
    gap: 1.4375rem;

    span {
      margin-left: .1rem;
      font: var(--fw-bold) var(--text-2xl) / 1.3 var(--ff-baloo);
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

