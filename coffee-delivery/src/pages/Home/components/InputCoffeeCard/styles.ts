import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 4.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 0.3rem;
  height: 2.375rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--purple-500);

  transition: color 500ms ease;

  &:hover {
    background-color: #e5e7eb;
    color: var(--purple-700);
  }

  &:focus {
    outline: none;
  }
`;

export const DecrementButton = styled(Button)`
  border-radius: .375rem 0 0 .375rem;
`;

export const IncrementButton = styled(Button)`
  border-radius: 0 .375rem .375rem 0;
`;

export const Input = styled.input`
  background-color: #f9fafb;
  border-top: 1px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
  border-left: none;
  border-right: none;
  height: 2.375rem;
  text-align: center;
  font-size: var(--text-base);
  width: 100%;
  padding: 0.3rem;

  &:focus {
    outline: none;
  }
`;
