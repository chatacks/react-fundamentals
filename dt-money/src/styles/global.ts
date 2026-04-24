import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['green-500']};
  }

  :root {
    --max-width: ${({ theme }) => theme.maxWidth};

    --ff-sans: ${({ theme }) => theme.fontFamily.roboto};

    --fw-regular: ${({ theme }) => theme.fontWeight.regular};
    --fw-bold: ${({ theme }) => theme.fontWeight.bold};

    --text-sm: ${({ theme }) => theme.fontSize['text-sm']};
    --text-base: ${({ theme }) => theme.fontSize['text-base']};
    --text-xl: ${({ theme }) => theme.fontSize['text-xl']};
    --text-2xl: ${({ theme }) => theme.fontSize['text-2xl']};
    --text-3xl: ${({ theme }) => theme.fontSize['text-3xl']};

    --white: ${({ theme }) => theme.colors.white};

    --gray-100: ${({ theme }) => theme.colors['gray-100']};
    --gray-300: ${({ theme }) => theme.colors['gray-300']};
    --gray-400: ${({ theme }) => theme.colors['gray-400']};
    --gray-500: ${({ theme }) => theme.colors['gray-500']};
    --gray-600: ${({ theme }) => theme.colors['gray-600']};
    --gray-700: ${({ theme }) => theme.colors['gray-700']};
    --gray-800: ${({ theme }) => theme.colors['gray-800']};
    --gray-900: ${({ theme }) => theme.colors['gray-900']};

    --green-300: ${({ theme }) => theme.colors['green-300']};
    --green-500: ${({ theme }) => theme.colors['green-500']};
    --green-700: ${({ theme }) => theme.colors['green-700']};

    --red-100: ${({ theme }) => theme.colors['red-300']};
    --red-500: ${({ theme }) => theme.colors['red-500']};
    --red-700: ${({ theme }) => theme.colors['red-700']};
  }

  html {
    font-family: var(--ff-sans);
    font-weight: var(--fw-regular);
    font-size: var(--text-base);
    color: var(--gray-100);
    line-height: 1.6;

    scroll-behavior: smooth;
  }

  body {
    background-color: var(--gray-800);
  }

  button,
  input,
  optgroup,
  select,
  text-area,
  a {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  a {
    text-decoration: none;
  }
`;
