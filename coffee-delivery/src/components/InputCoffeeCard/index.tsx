import { useState } from 'react';
import { DecrementButton, IncrementButton, Input, InputGroup, Wrapper } from './styles';

export function InputCoffeeCard() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Wrapper>
      <InputGroup>
        <DecrementButton type="button" onClick={decrement}>
          −
        </DecrementButton>

        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value) || 0)}
        />

        <IncrementButton type="button" onClick={increment}>
          +
        </IncrementButton>
      </InputGroup>
    </Wrapper>
  );
}
