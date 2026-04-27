import { useEffect, useState } from 'react';
import type { Transaction } from '../../@types/transaction.type';
import { TransactionsContext, type TransactionsContextType } from './TransactionsContext';

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTransactions();
  }, []);

  const value: TransactionsContextType = {
    transactions,
  };

  return (
    <TransactionsContext value={value}>
      {children}
    </TransactionsContext>
  );
}
