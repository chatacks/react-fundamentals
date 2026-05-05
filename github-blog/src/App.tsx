import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { PostsAndUserProvider } from './context/PostsAndUserProvider';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <PostsAndUserProvider>
        <Router />
      </PostsAndUserProvider>
    </ThemeProvider>
  );
}

