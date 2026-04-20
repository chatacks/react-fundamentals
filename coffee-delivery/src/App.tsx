import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { CoffeesProvider } from './context/CoffeesProvider';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesProvider>
        <Router />
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
