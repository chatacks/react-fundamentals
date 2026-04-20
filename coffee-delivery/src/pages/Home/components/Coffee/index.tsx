import { ShoppingCartIcon } from '@phosphor-icons/react';
import { InputCoffeeCard } from '../../../../components/InputCoffeeCard';
import { Badge, ButtonCardShopp, CardContainer, CardContent } from './styles';
import type { CoffeeType } from '../../../../@types/coffees.types';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../context';

type CoffeeProps = CoffeeType;

export function Coffee({ id, badges, description, image, name, price }: CoffeeProps) {
  const { handleAddCoffeeToOrder } = useContext(CoffeesContext);
  const [value, setValue] = useState(1);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value) || 1);
  };

  return (
    <CardContainer>
      <div>
        <img src={image} alt={description} />
      </div>

      <div>
        {badges.map(badge => (<Badge key={badge}>{badge}</Badge>))}
      </div>
      <CardContent>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardContent>

      <div>
        <p>
          R$<span>{price}</span>
        </p>
        <div>
          <InputCoffeeCard
            value={value}
            handleValueChange={handleValueChange}
            decrement={decrement}
            increment={increment}
          />
          <ButtonCardShopp onClick={() => handleAddCoffeeToOrder({ id, image, name, price, quantity: value })}>
            <ShoppingCartIcon weight="fill" size={22} />
          </ButtonCardShopp>
        </div>
      </div>
    </CardContainer>
  );
}
