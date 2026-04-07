import type { InputHTMLAttributes } from 'react';
import { Input as MantineInput } from '@mantine/core';
import type { InputProps as MantineInputProps } from '@mantine/core';

export interface InputProps
  extends Omit<MantineInputProps & InputHTMLAttributes<HTMLInputElement>, 'size' | 'variant'> {
  variant?: 'default' | 'filled' | 'unstyled';
  inputSize?: 'small' | 'medium' | 'large';
  error?: boolean;
}

const sizeMap = { small: 'sm', medium: 'md', large: 'lg' } as const;
const variantMap = { default: 'default', filled: 'filled', unstyled: 'unstyled' } as const;

const Input = ({
  variant = 'default',
  inputSize = 'medium',
  error,
  ...props
}: InputProps) => (
  <MantineInput
    variant={variantMap[variant]}
    size={sizeMap[inputSize]}
    error={error}
    {...props}
  />
);

export default Input;
