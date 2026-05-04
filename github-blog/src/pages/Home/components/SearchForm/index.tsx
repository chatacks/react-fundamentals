import { useState } from 'react';
import { Input, SearchFormContainer } from './styles';

export function SearchForm() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>

      <Input
        type="text"
        name="query"
        value={query}
        placeholder="Buscar conteúdo"
        onChange={handleQueryChange}
      />
    </SearchFormContainer>
  );
};
