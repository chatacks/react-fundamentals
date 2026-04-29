/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import type { Transaction } from '../../@types/transaction.type';
import { TransactionsContext, type TransactionsContextType } from './TransactionsContext';
import { api } from '../../lib/axios';
interface TransactionsProviderProps {
  children: React.ReactNode;
}
export interface CreateTransactionData {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    try {
      const response = await api.get('/transactions', {
        params: {
          '_sort': '-createdAt',
          'description:contains': query,
        }
      });

      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTransaction = async (data: CreateTransactionData) => {
    const { description, price, category, type } = data;

    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });


    setTransactions(prevState => [response.data, ...prevState]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const value: TransactionsContextType = {
    transactions,
    fetchTransactions,
    createTransaction
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}
