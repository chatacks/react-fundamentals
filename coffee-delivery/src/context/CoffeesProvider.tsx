import { useState } from 'react';
import { CoffeesContext } from '.';
import type { CoffeeType } from '../@types/coffees.types';

interface CoffeesProviderProps {
  children: React.ReactNode;
}

export type CoffeeToOrder = Omit<CoffeeType, 'badges' | 'description'> & {
  quantity: number;
}

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [orderedsCoffee, setOrderedsCoffee] = useState<CoffeeToOrder[]>([]);

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

  return (
    <CoffeesContext
      value={{
        orderedsCoffee,
        handleAddCoffeeToOrder
      }}
    >
      {children}
    </CoffeesContext>

  );
}
