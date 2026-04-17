import { ShoppingCartIcon } from '@phosphor-icons/react';
import { InputCoffeeCard } from '../../../../components/InputCoffeeCard';
import { Badge, ButtonCardShopp, CardContainer, CardContent } from './styles';
import type { CoffeeType } from '../../../../data/coffees';

type CoffeeProps = Omit<CoffeeType, 'id'>

export function Coffee({ badges, description, image, name, price }: CoffeeProps) {

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
          <InputCoffeeCard />
          <ButtonCardShopp>
            <ShoppingCartIcon weight="fill" size={22} />
          </ButtonCardShopp>
        </div>
      </div>
    </CardContainer>
  );
}
