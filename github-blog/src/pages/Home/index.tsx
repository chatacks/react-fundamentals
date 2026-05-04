import { Profile } from '../../components/Profile';
import { Posts } from './components/Posts';
import { SearchForm } from './components/SearchForm';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <>
      <Profile />

      <HomeContainer>
        <SearchForm />
        <Posts />
      </HomeContainer>
    </>
  );
};
