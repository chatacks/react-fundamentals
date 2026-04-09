import styled from 'styled-components';

export const CountDownContainer = styled.div`
  font-family: var(--ff-mono);
  font-size: 10rem;

  line-height: 8rem;

  display: flex;
  gap: 1rem;

  & span {
    background-color: #29292e;
    padding: 2rem 1rem;
    border-radius: 0.5rem;
  }
`;

export const Separator = styled.div`
  padding-inline: 2rem;
  color: var(--green-500);

  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;
