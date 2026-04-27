import { createContext } from 'react';
import type { Transaction } from '../../@types/transaction.type';

export interface TransactionsContextType {
  transactions: Transaction[],
};

export const TransactionsContext = createContext({} as TransactionsContextType);
