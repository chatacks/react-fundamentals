import { createContext } from 'use-context-selector';
import type { Transaction } from '../../@types/transaction.type';
import type { CreateTransactionData } from './TransactionsProvider';

export interface TransactionsContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>,
  createTransaction: (data: CreateTransactionData) => Promise<void>,
};

export const TransactionsContext = createContext({} as TransactionsContextType);
