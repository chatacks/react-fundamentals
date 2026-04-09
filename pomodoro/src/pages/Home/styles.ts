import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  & form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }

`;

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;

  border: none;
  border-radius: .5rem;

  gap: .5rem;
  width: 100%;

  transition: background-color 500ms ease;
  cursor: pointer;
`;

export const StartCountdownButton = styled(ButtonBase)`
  background-color: var(--green-500);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: var(--green-700);
  }
`;

export const StopCountdownButton = styled(ButtonBase)`
  background-color: var(--red-500);

  &:hover {
    background-color: var(--red-700);
  }
`;
