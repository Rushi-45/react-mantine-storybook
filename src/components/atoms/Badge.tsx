import { Badge as MantineBadge } from '@mantine/core';
import type { BadgeProps as MantineBadgeProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface BadgeProps extends Omit<MantineBadgeProps, 'color' | 'size'> {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium';
}

const colorMap = {
  default: 'gray',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  info: 'blue',
} as const;

const sizeMap = { small: 'sm', medium: 'md' } as const;

const Badge = ({ children, variant = 'default', size = 'medium', ...props }: BadgeProps) => (
  <MantineBadge
    color={colorMap[variant]}
    size={sizeMap[size]}
    variant="light"
    {...props}
  >
    {children}
  </MantineBadge>
);

export default Badge;
