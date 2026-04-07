import { Button as MantineButton } from '@mantine/core';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

const variantMap = {
  primary: 'filled',
  secondary: 'light',
  outline: 'outline',
  ghost: 'subtle',
} as const;

const sizeMap = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
} as const;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled,
  onClick,
  type = 'button',
  className,
}: ButtonProps) => (
  <MantineButton
    variant={variantMap[variant]}
    size={sizeMap[size]}
    loading={isLoading}
    disabled={disabled}
    onClick={onClick}
    type={type}
    className={className}
  >
    {children}
  </MantineButton>
);

export default Button;
