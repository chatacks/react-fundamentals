import { useContext } from 'react';
import { CoffeesContext } from '../../../../context';
import { SelectedCoffee } from '../SelectedCoffee';

export function SelectedCoffees() {

  const {
    orderedsCoffee,
    totalPriceItems,
    deliveryPrice,
    totalPrice
  } = useContext(CoffeesContext);

  return (
    <>
      {orderedsCoffee.map(order => (
        <SelectedCoffee
          key={order.id}
          id={order.id}
          image={order.image}
          name={order.name}
          price={order.price}
          quantity={order.quantity}
        />
      ))}

      <div className="total">
        <div>
          <p>Total de itens </p>
          <span>R$ {' '} {totalPriceItems.toFixed(2)}</span>
        </div>
        <div>
          <p>Entrega </p>
          <span>R$ {' '} {deliveryPrice.toFixed(2)}</span>
        </div>
        <div>
          <p>Total </p>
          <span>R$ {' '} {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}
