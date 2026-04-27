import { useContext, } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { PriceHighlight, TransactionsContainer, TransactionsContent, TransactionsTable } from './styles';
import { TransactionsContext } from '../../contexts/transactions/TransactionsContext';

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
                const date = new Date(transaction.createdAt);

                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <PriceHighlight $variantColor={transaction.type}>
                        R$ {transaction.price.toFixed(2)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{date.toLocaleString()}</td>
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
