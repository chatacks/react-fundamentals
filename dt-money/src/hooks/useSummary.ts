import { useContext } from 'react';
import { TransactionsContext } from '../contexts/transactions/TransactionsContext';

interface IncomeOutcomeAndTotalType {
  income: number;
  outcome: number;
  total: number;
}

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, curr) => {
    if (curr.type === 'income') {
      acc.income += curr.price;
    } else {
      acc.outcome += curr.price;
    }

    return acc;

  }, {
    income: 0,
    outcome: 0,
    total: 0
  } as IncomeOutcomeAndTotalType);

  summary.total = summary.income - summary.outcome;

  return summary;
};

