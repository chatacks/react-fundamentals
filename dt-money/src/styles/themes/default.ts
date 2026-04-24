export const defaultTheme = {
  fontFamily: {
    roboto: '"Roboto", system-ui, sans-serif',
  },

  fontWeight: {
    regular: 400,
    bold: 700
  },

  fontSize: {
    'text-sm': '.875rem',
    'text-base': '1rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '2rem',
  },

  colors: {
    white: '#ffffff',

    'gray-100': '#e1e1e6',
    'gray-300': '#c4c4cc',
    'gray-400': '#8d8d99',
    'gray-500': '#7c7c8a',
    'gray-600': '#323238',
    'gray-700': '#29292e',
    'gray-800': '#202024',
    'gray-900': '#121214',

    'green-300': '#00b37e',
    'green-500': '#00875f',
    'green-700': '#015f43',

    'red-300': '#f75a68',
    'red-500': '#ab222e',
    'red-700': '#7a1921',
  },

  maxWidth: '90rem',

} as const;
