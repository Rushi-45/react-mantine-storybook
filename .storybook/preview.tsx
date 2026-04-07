import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '../src/index.css';
import { MantineProvider } from '@mantine/core';
import type { Preview, Decorator } from '@storybook/react-vite';
import theme from '../src/theme';

const withMantine: Decorator = (Story) => (
  <MantineProvider theme={theme}>
    <Story />
  </MantineProvider>
);

const preview: Preview = {
  decorators: [withMantine],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
      config: {
        rules: [
          { id: 'color-contrast', enabled: false },
          { id: 'label-title-only', enabled: false },
        ],
      },
    },
  },
};

export default preview;
