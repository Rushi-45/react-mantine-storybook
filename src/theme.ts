import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

/**
 * Custom brand color palette (blue-indigo tones).
 * Index 0 = lightest, 9 = darkest.
 */
const brand: MantineColorsTuple = [
  '#eef3ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc1',
  '#5f7cb8',
  '#4c6fb5',
  '#3a5ca0',
  '#2f5091',
  '#234480',
];

const theme = createTheme({
  /** Primary color used across all Mantine components */
  primaryColor: 'brand',

  colors: { brand },

  /** Base font — falls back to system sans-serif */
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", "Fira Code", Menlo, monospace',

  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '2.25rem', lineHeight: '1.2' },
      h2: { fontSize: '1.75rem', lineHeight: '1.3' },
      h3: { fontSize: '1.375rem', lineHeight: '1.4' },
    },
  },

  /** Default border-radius applied to all components unless overridden */
  defaultRadius: 'md',

  /** Consistent spacing scale */
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  /** Component-level default prop overrides */
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
      },
    },
    Avatar: {
      defaultProps: {
        color: 'brand',
      },
    },
  },
});

export default theme;
