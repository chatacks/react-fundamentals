import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --text-xs: ${({ theme }) => theme.fontSize.xs};
    --text-sm: ${({ theme }) => theme.fontSize.sm};
    --text-base: ${({ theme }) => theme.fontSize.base};
    --text-lg: ${({ theme }) => theme.fontSize.lg};
    --text-2xl: ${({ theme }) => theme.fontSize.xl};

    --fw-regular: ${({ theme }) => theme.fontWeight.regular};
    --fw-bold: ${({ theme }) => theme.fontWeight.bold};

    --ff-sans: ${({ theme }) => theme.fontFamily.sans};
    --ff-mono: ${({ theme }) => theme.fontFamily.mono};

    --white: ${({ theme }) => theme.colors.white};
    --gray-100: ${({ theme }) => theme.colors.gray100};
    --gray-200: ${({ theme }) => theme.colors.gray200};
    --gray-300: ${({ theme }) => theme.colors.gray300};
    --gray-400: ${({ theme }) => theme.colors.gray400};
    --gray-500: ${({ theme }) => theme.colors.gray500};
    --gray-600: ${({ theme }) => theme.colors.gray600};
    --gray-700: ${({ theme }) => theme.colors.gray700};

    --danger-500: ${({ theme }) => theme.colors.danger500};
    --danger-700: ${({ theme }) => theme.colors.danger700};

    --green-300: ${({ theme }) => theme.colors.green300};
    --green-500: ${({ theme }) => theme.colors.green500};
    --green-700: ${({ theme }) => theme.colors.green700};

    --yellow-500: ${({ theme }) => theme.colors.yellow500};
  }

  html {
    font-family: var(--ff-sans);
    font-size: var(--text-base);
    font-weight: var(--fw-regular);
    color: var(--gray-100);
    line-height: 1.6;

    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.green500};
  }

  body {
    background-color: var(--gray-700);
  }

  button,
  input,
  optgroup,
  select,
  textarea,
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
