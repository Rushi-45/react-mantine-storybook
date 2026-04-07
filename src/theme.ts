import {
  Select,
  Anchor,
  createTheme,
  Text,
  Tabs,
  Checkbox,
  TextInput,
  MultiSelect,
  Modal,
  Title,
  Stepper,
  NumberInput,
  Switch,
  SegmentedControl,
  Button,
  Textarea,
  Card,
  Tooltip,
  Popover,
} from '@mantine/core'
import type { MantineTheme } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import classes from '@styles/overrides/input.module.css'

const commonStyles = {
  styles: (theme: MantineTheme) => ({
    label: {
      color: theme.colors.gray[7],
      fontWeight: '500',
    },
    input: {
      backgroundColor: 'var(--mantine-color-mclarens-0)',
      color: 'black',
      fontWeight: 'normal',
      borderRadius: '2px',
    },
    pill: {
      backgroundColor: 'var(--mantine-color-mclarens-7)',
      color: 'white',
    },
  }),
}

export const theme = createTheme({
  defaultRadius: 0,
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        c: 'mclarens.8',
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: 'xs',
      },
    }),
    Card: Card.extend({
      defaultProps: {
        radius: 'xs',
      },
    }),
    Checkbox: Checkbox.extend({
      styles: () => ({
        input: {
          '&:checked': {
            backgroundColor: 'var(--mantine-color-mclarens-8)',
          },
        },
      }),
    }),
    DatePickerInput: DatePickerInput.extend({
      ...commonStyles,
    }),
    Input: {
      classNames: classes,
    },
    Modal: Modal.extend({
      defaultProps: {},
      styles: () => ({
        content: {
          padding: '0 25px 25px 25px',
        },
        header: {
          padding: '0 15px 0 15px',
        },
        title: {
          fontWeight: 'bold',
          fontSize: 'var(--mantine-h3-font-size)',
          color: 'black',
        },
      }),
    }),
    MultiSelect: MultiSelect.extend({
      ...commonStyles,
    }),
    NumberInput: NumberInput.extend({
      ...commonStyles,
    }),
    Popover: Popover.extend({
      defaultProps: {
        withArrow: true,
        radius: 'sm',
        arrowSize: 18,
      },
    }),
    Tabs: Tabs.extend({
      defaultProps: {
        c: 'mclarens.9',
        color: 'mclarens.9',
        fw: 'bold',
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'black',
      },
    }),
    Textarea: Textarea.extend({
      ...commonStyles,
    }),
    TextInput: TextInput.extend({
      ...commonStyles,
    }),
    Title: Title.extend({
      defaultProps: {
        c: 'var(--mantine-color-dark-9)',
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        bg: 'var(--mantine-color-mclarens-9)',
        withArrow: true,
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        color: 'mclarens',
      },
    }),
    Select: Select.extend({
      defaultProps: {
        searchable: true,
        autoComplete: 'none',
      },
      ...commonStyles,
    }),
    Stepper: Stepper.extend({
      defaultProps: {
        color: 'mclarens',
      },
    }),
    Switch: Switch.extend({
      ...commonStyles,
    }),
  },
  primaryColor: 'mclarens',
  primaryShade: 6,
  colors: {
    mclarens: [
      '#ebf5ff',
      '#d4e6fa',
      '#a4cbf7',
      '#72aff6',
      '#0095da',
      '#3988f5',
      '#2f81f6',
      '#256edc',
      '#1a62c5',
      '#005bbb',
    ],
  },
})

export default theme
