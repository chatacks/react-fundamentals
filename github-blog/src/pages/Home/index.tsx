import { useState } from 'react';
import { Profile } from '../../components/Profile';
import { Posts } from './components/Posts';
import { SearchForm } from './components/SearchForm';
import { HomeContainer } from './styles';

export function Home() {
  const [items, setItems] = useState(0);

  const pickTotalItems = (items: number) => setItems(items);

  return (
    <>
      <Profile />

      <HomeContainer>
        <SearchForm items={items} />
        <Posts onPickTotalItems={pickTotalItems} />
      </HomeContainer>
    </>
  );
};
