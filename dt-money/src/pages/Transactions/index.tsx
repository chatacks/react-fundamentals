import { useContext, } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { PriceHighlight, TransactionsContainer, TransactionsContent, TransactionsTable } from './styles';
import { TransactionsContext } from '../../contexts/transactions/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsContent>
          <TransactionsTable>
            <tbody>
              {transactions.map(transaction => {
                const date = dateFormatter
                  .format(new Date(transaction.createdAt));

                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <PriceHighlight $variantColor={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionsTable>
        </TransactionsContent>
      </TransactionsContainer>
    </>
  );
}
