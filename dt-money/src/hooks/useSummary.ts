import { TransactionsContext } from '../contexts/transactions/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

interface IncomeOutcomeAndTotalType {
  income: number;
  outcome: number;
  total: number;
}

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext,
    (context) =>  context.transactions);

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

