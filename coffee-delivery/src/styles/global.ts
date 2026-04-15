import styled, { createGlobalStyle } from 'styled-components';

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
  }

  :root {
    --max-width: ${({ theme }) => theme.maxWidth};

    --text-xs: ${({ theme }) => theme.fontSize.xs};
    --text-sm: ${({ theme }) => theme.fontSize.sm};
    --text-base: ${({ theme }) => theme.fontSize.base};
    --text-lg: ${({ theme }) => theme.fontSize.lg};
    --text-xl: ${({ theme }) => theme.fontSize.xl};
    --text-2xl: ${({ theme }) => theme.fontSize.xl2};
    --text-3xl: ${({ theme }) => theme.fontSize.xl3};
    --text-5xl: ${({ theme }) => theme.fontSize.xl5};

    --fw-regular: ${({ theme }) => theme.fontWeight.regular};
    --fw-bold: ${({ theme }) => theme.fontWeight.bold};

    --ff-roboto: ${({ theme }) => theme.fontFamily.roboto};
    --ff-baloo: ${({ theme }) => theme.fontFamily.baloo};

    --white: ${({ theme }) => theme.colors.white};

    --gray-100: ${({ theme }) => theme.colors.gray100};
    --gray-200: ${({ theme }) => theme.colors.gray200};
    --gray-300: ${({ theme }) => theme.colors.gray300};
    --gray-400: ${({ theme }) => theme.colors.gray400};
    --gray-500: ${({ theme }) => theme.colors.gray500};
    --gray-600: ${({ theme }) => theme.colors.gray600};
    --gray-700: ${({ theme }) => theme.colors.gray700};
    --gray-800: ${({ theme }) => theme.colors.gray800};
    --gray-900: ${({ theme }) => theme.colors.gray900};

    --yellow-100: ${({ theme }) => theme.colors.yellow100};
    --yellow-500: ${({ theme }) => theme.colors.yellow500};
    --yellow-700: ${({ theme }) => theme.colors.yellow700};

    --purple-100: ${({ theme }) => theme.colors.purple100};
    --purple-500: ${({ theme }) => theme.colors.purple500};
    --purple-700: ${({ theme }) => theme.colors.purple700};
  }

  html {
    font-family: var(--ff-roboto);
    font-size: var(--text-base);
    font-weight: var(--fw-regular);
    color: var(--gray-700);
    line-height: 1.3;

    scroll-behavior: smooth;
  }

  body {
    background-color: var(--gray-100);
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

// utilitários

export const BaseContainer = styled.div`
  width: min(var(--max-width), calc(100% - 10rem * 2));
  margin-inline: auto;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: .375rem;
  border: none;

  background-color: var(--gray-400);
  text-transform: uppercase;
  font-size: var(--text-xs);

  cursor: pointer;

  & span {
    display: flex;
    align-items: center;
    color: var(--purple-500);
  }

  transition: background-color 500ms ease;

  &:hover {
    background-color: var(--gray-500);
  }
`;
