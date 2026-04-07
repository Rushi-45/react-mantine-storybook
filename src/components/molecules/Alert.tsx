import { Alert as MantineAlert } from '@mantine/core';
import type { AlertProps as MantineAlertProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface AlertProps extends Omit<MantineAlertProps, 'color' | 'onClose'> {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onDismiss?: () => void;
}

const colorMap = {
  info: 'blue',
  success: 'green',
  warning: 'yellow',
  error: 'red',
} as const;

const Alert = ({
  children,
  variant = 'info',
  title,
  onDismiss,
  ...props
}: AlertProps) => (
  <MantineAlert
    color={colorMap[variant]}
    title={title}
    variant="light"
    withCloseButton={!!onDismiss}
    onClose={onDismiss}
    {...props}
  >
    {children}
  </MantineAlert>
);

export default Alert;
