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

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: .5rem;

  color: var(--gray-100);
  font-size: var(--text-lg);
  font-weight: var(--fw-bold);

`;

const BaseInput = styled.input`
  background-color: transparent;
  border-inline: none;
  border-top: none;

  height: 2.5rem;
  padding-inline: .5rem;

  &:focus {
    box-shadow: none;
    border-color: var(--green-500);
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

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

export const Separator = styled.div`
  padding-inline: 2rem;
  color: var(--green-500);

  width: 4rem;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;
