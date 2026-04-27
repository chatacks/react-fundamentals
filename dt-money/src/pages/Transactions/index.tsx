import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { PriceHighlight, TransactionsContainer, TransactionsContent, TransactionsTable } from './styles';

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsContent>
          <TransactionsTable>
            <tbody>
              <tr>
                <td>Desenvolvimento de Site</td>
                <td>
                  <PriceHighlight $variantColor="income">
                    R$ 12.000,00
                  </PriceHighlight>
                </td>
                <td>Venda</td>
                <td>13/04/2026</td>
              </tr>

              <tr>
                <td>Confidencial</td>
                <td>
                  <PriceHighlight $variantColor="outcome">
                    - R$ 200,00
                  </PriceHighlight>
                </td>
                <td>Lazer</td>
                <td>14/04/2026</td>
              </tr>

            </tbody>
          </TransactionsTable>
        </TransactionsContent>
      </TransactionsContainer>
    </>
  );
}
