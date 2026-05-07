import { useState } from 'react';
import { Input, SearchFormContainer } from './styles';
import { useFetchIssue } from '../../../../hooks/useFetchIssue';

export function SearchForm({ items } : { items: number }) {
  const [query, setQuery] = useState('');
  const { fetchIssues } = useFetchIssue();

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>, query: string) => {
    e.preventDefault();

    fetchIssues(query);
    setQuery('');
  };

  return (
    <SearchFormContainer onSubmit={(e) => handleSubmit(e, query)}>
      <div>
        <span>Publicações</span>
        <span>{items > 1 ? `${items} publicações` : `${items} publicação`}</span>
      </div>

      <Input
        value={query}
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleQueryChange}
      />

    </SearchFormContainer>
  );
};
