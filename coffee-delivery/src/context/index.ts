import { createContext } from 'react';
import type { CoffeeToOrder } from './CoffeesProvider';

interface CoffeesContextType {
  orderedsCoffee: CoffeeToOrder[];
  handleAddCoffeeToOrder: (coffee: CoffeeToOrder) => void;
}


export const CoffeesContext = createContext({} as CoffeesContextType);
