import { useForm } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { SearchFormContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts/transactions/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = zod.object({
  query: zod.string().min(3),
});

type SearchFormData = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    }
  });
  const fetchTransactions = useContextSelector(TransactionsContext,
    (context) => context.fetchTransactions);

  const handleSearchTransactions = async (data: SearchFormData) => {
    await fetchTransactions(data.query);
  };

  const query = watch('query');
  const noHasAQuery = !query;

  return (
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <Button
        variant="search"
        type="submit"
        aria-label="Buscar transação"
        disabled={noHasAQuery || isSubmitting}
      >
        {isSubmitting ? 'Buscando' : 'Buscar'}
      </Button>
    </SearchFormContainer>
  );
}
