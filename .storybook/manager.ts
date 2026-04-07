import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'react-mantine-storybook · Rushi Chudasama',
    brandUrl: 'https://github.com/Rushi-45/react-mantine-storybook',
    brandTarget: '_blank',
  }),
});
