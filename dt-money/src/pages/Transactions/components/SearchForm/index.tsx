import { Button } from '../../../../components/Button';
import { SearchFormContainer } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input
        type="text"
        name="transaction"
        placeholder="Busque por transações"
      />

      <Button
        variant="search"
        type="submit"
        aria-label="Buscar transação"
      >
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
