export const defaultTheme = {
  fontFamily: {
    nunito: '"Nunito", system-ui, sans-serif',
  },

  fontWeight: {
    regular: 400,
    bold: 700,
  },

  fontSize: {
    'text-xs': '.75rem',
    'text-sm': '.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem'
  },

  colors: {
    white: '#ffffff',

    'blue-500': '#3294F8',

    'slate-50': '#E7EDF4',
    'slate-100': '#C4D4E3',
    'slate-200': '#AFC2D4',
    'slate-300': '#7B96B2',
    'slate-400': '#3A536B',
    'slate-700': '#1C2F41',
    'slate-800': '#112131',
    'slate-900': '#0B1B2B',
    'slate-950': '#071422',
    'slate-975': '#040F1A',
  },

  maxWidth: '90rem',

} as const;
