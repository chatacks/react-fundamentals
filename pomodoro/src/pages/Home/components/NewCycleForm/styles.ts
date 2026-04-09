import styled from 'styled-components';

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
