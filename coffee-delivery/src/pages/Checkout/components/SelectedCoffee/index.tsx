import { TrashIcon } from '@phosphor-icons/react';
import type { CoffeeToOrder } from '../../../../context/CoffeesProvider';
import { RemoveButton, SelectedCoffeeCardContainer, Separator } from './styles';
import { InputCoffeeCard } from '../../../../components/InputCoffeeCard';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../context';

type SelectedCoffeeProps = Omit<CoffeeToOrder, | 'badges' | 'description'> ;

export function SelectedCoffee({ id, image, name, price, quantity }: SelectedCoffeeProps) {
  const [value, setValue] = useState<number>(quantity);
  const { handleAddCoffeeToOrder } = useContext(CoffeesContext);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    handleAddCoffeeToOrder({ id, image, name, price, quantity: newValue });
  };

  const decrement = () => {
    const newValue = value > 1 ? value - 1 : 1;
    setValue(newValue);
    handleAddCoffeeToOrder({ id, image, name, price, quantity: newValue });
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value) || 1);
  };

  return (
    <>
      <SelectedCoffeeCardContainer>
        <img src={image} alt="" />
        <div>
          <p>{name}</p>

          <div>
            <InputCoffeeCard
              value={value}
              decrement={decrement}
              increment={increment}
              handleValueChange={handleValueChange}
            />
            <RemoveButton type="button">
              <span>
                <TrashIcon size={16} />
              </span>
              remover
            </RemoveButton>
          </div>
        </div>

        <p>
          R$ {' '} {price}
        </p>


      </SelectedCoffeeCardContainer>
      <Separator />
    </>
  );
}
