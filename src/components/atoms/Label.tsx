import type { ReactNode } from 'react';
import { Text } from '@mantine/core';
import type { TextProps } from '@mantine/core';

export interface LabelProps extends TextProps {
  children?: ReactNode;
  htmlFor?: string;
  required?: boolean;
}

const Label = ({ children, required, htmlFor, ...props }: LabelProps) => (
  <Text component="label" htmlFor={htmlFor} size="sm" fw={500} {...props}>
    {children}
    {required && (
      <Text component="span" c="red" ml={4} inherit>
        *
      </Text>
    )}
  </Text>
);

export default Label;
