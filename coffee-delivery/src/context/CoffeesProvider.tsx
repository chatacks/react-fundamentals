import { useState } from 'react';
import { CoffeesContext } from '.';
import type { CoffeeType } from '../@types/coffees.types';
import { parsePrice } from '../pages/Checkout/utils/parsePrice';
import type { NewOrderFormData } from '../pages/Checkout/components/CheckoutForm';

interface CoffeesProviderProps {
  children: React.ReactNode;
}

export type CoffeeToOrder = Omit<CoffeeType, 'badges' | 'description'> & {
  quantity: number;
}

export type NewOrder = Omit<NewOrderFormData, 'cep' | 'additional' | 'neighborhood'>

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [orderedsCoffee, setOrderedsCoffee] = useState<CoffeeToOrder[]>([]);
  const [order, setOrder] = useState<NewOrder>({
    city: '',
    number: '',
    payment: 'credito',
    state: '',
    street: ''
  });

  const handleAddCoffeeToOrder = (coffee: CoffeeToOrder) => {
    setOrderedsCoffee(prevState => {
      const existsCoffeeInOrder = prevState.some(state => state.id === coffee.id);
      if (existsCoffeeInOrder) {
        return prevState.map(state =>
          state.id === coffee.id ? { ...state, quantity: coffee.quantity } : state);
      } else {
        return [...prevState, coffee];
      }
    });
  };

  const newOrder = (data: NewOrder) => {
    setOrder(data);
  };

  const totalPriceItems = orderedsCoffee
    .reduce((acc, curr) => acc + parsePrice(curr.price) * curr.quantity, 0);
  const deliveryPrice = 3.5;
  const totalPrice = totalPriceItems + deliveryPrice;


  return (
    <CoffeesContext
      value={{
        orderedsCoffee,
        handleAddCoffeeToOrder,
        totalPriceItems,
        deliveryPrice,
        totalPrice,
        newOrder,
        order
      }}
    >
      {children}
    </CoffeesContext>

  );
}
