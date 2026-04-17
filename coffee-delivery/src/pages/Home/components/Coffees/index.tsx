import type { CoffeeType } from '../../../../data/coffees';
import { Coffee } from '../Coffee';
import { CoffeesContainer } from './styles';

interface CoffeesProps {
  coffees: CoffeeType[]
}

export function Coffees({ coffees }: CoffeesProps) {

  return (
    <CoffeesContainer>
      {coffees.map(coffee => (
        <Coffee
          key={coffee.id}
          image={coffee.image}
          badges={coffee.badges}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
        />
      ))}
    </CoffeesContainer>
  );
}
