import { createContext } from 'react';
import type { Transaction } from '../../@types/transaction.type';

export interface TransactionsContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>,
};

export const TransactionsContext = createContext({} as TransactionsContextType);
