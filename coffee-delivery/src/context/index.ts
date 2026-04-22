import { createContext } from 'react';
import type { CoffeeToOrder, NewOrder } from './CoffeesProvider';

interface CoffeesContextType {
  orderedsCoffee: CoffeeToOrder[];
  handleAddCoffeeToOrder: (coffee: CoffeeToOrder) => void;
  totalPriceItems: number;
  deliveryPrice: number;
  totalPrice: number;
  newOrder: (data: NewOrder) => void;
  order: NewOrder,
}


export const CoffeesContext = createContext({} as CoffeesContextType);
