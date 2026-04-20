import { DecrementButton, IncrementButton, Input, InputGroup, Wrapper } from './styles';

interface InputCoffeeCardProps {
  value: number;
  handleValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  increment: () => void;
  decrement: () => void;
}

export function InputCoffeeCard({
  value,
  handleValueChange,
  decrement,
  increment
}: InputCoffeeCardProps) {

  return (
    <Wrapper>
      <InputGroup>
        <DecrementButton type="button" onClick={decrement}>
          −
        </DecrementButton>

        <Input
          type="text"
          value={value}
          onChange={handleValueChange}
        />

        <IncrementButton type="button" onClick={increment}>
          +
        </IncrementButton>
      </InputGroup>
    </Wrapper>
  );
}
