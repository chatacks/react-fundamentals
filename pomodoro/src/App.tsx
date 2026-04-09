import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { CyclesContextProvider } from './contexts/CycleContext/CycleProvider';

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}
