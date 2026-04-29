/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import type { Transaction } from '../../@types/transaction.type';
import { TransactionsContext, type TransactionsContextType } from './TransactionsContext';
import { api } from '../../lib/axios';

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {

    try {
      const response = await api.get('/transactions', {
        params: {
          'description:contains': query
        }
      });

      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const value: TransactionsContextType = {
    transactions,
    fetchTransactions
  };

  return (
    <TransactionsContext value={value}>
      {children}
    </TransactionsContext>
  );
}
