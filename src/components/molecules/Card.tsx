import { Card as MantineCard, Text } from '@mantine/core';
import type { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
}

const Card = ({ title, children, footer, variant = 'default' }: CardProps) => {
  const shadow = variant === 'elevated' ? 'lg' : 'xs';
  const withBorder = variant === 'bordered';

  return (
    <MantineCard shadow={shadow} padding="lg" radius="md" withBorder={withBorder}>
      {title && (
        <MantineCard.Section withBorder inheritPadding py="xs" mb="md">
          <Text fw={600}>{title}</Text>
        </MantineCard.Section>
      )}
      {children}
      {footer && (
        <MantineCard.Section withBorder inheritPadding py="xs" mt="md" bg="gray.0">
          {footer}
        </MantineCard.Section>
      )}
    </MantineCard>
  );
};

export default Card;
