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

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --max-width: ${({ theme }) => theme.maxWidth};

    --ff-sans: ${({ theme }) => theme.fontFamily.nunito};

    --fw-regular: ${({ theme }) => theme.fontWeight.regular};
    --fw-bold: ${({ theme }) => theme.fontWeight.bold};

    --text-xs: ${({ theme }) => theme.fontSize['text-xs']};
    --text-sm: ${({ theme }) => theme.fontSize['text-sm']};
    --text-base: ${({ theme }) => theme.fontSize['text-base']};
    --text-lg: ${({ theme }) => theme.fontSize['text-lg']};
    --text-xl: ${({ theme }) => theme.fontSize['text-xl']};
    --text-2xl: ${({ theme }) => theme.fontSize['text-2xl']};

    --blue-500: ${({ theme }) => theme.colors['blue-500']};

    --slate-50: ${({ theme }) => theme.colors['slate-50']};
    --slate-100: ${({ theme }) => theme.colors['slate-100']};
    --slate-200: ${({ theme }) => theme.colors['slate-200']};
    --slate-300: ${({ theme }) => theme.colors['slate-300']};
    --slate-400: ${({ theme }) => theme.colors['slate-400']};
    --slate-700: ${({ theme }) => theme.colors['slate-700']};
    --slate-800: ${({ theme }) => theme.colors['slate-800']};
    --slate-900: ${({ theme }) => theme.colors['slate-900']};
    --slate-950: ${({ theme }) => theme.colors['slate-950']};
    --slate-975: ${({ theme }) => theme.colors['slate-975']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--blue-500);
  }

  html {
    font-family: var(--ff-sans);
    font-weight: var(--fw-regular);
    font-size: var(--text-base);
    color: var(--slate-200);
    line-height: 1.6;

    scroll-behavior: smooth;
  }

  body {
    background-color: var(--slate-950);
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
    position: relative;

    text-decoration: none;

    display: inline-flex;
    align-items: center;

    gap: .5rem;

    text-transform: uppercase;

    font-size: var(--text-xs);
    font-weight: var(--fw-bold);

    color: var(--blue-500);


    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 0;
      left: 0;
      bottom: 8px;
      background-color: var(--blue-500);
      transition: width 250ms ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
