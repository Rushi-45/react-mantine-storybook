import type { ReactNode } from 'react';
import { Center, Paper, Stack, Title, Text } from '@mantine/core';

export interface AuthLayoutProps {
  children: ReactNode;
  logo?: string;
  title?: string;
  subtitle?: string;
}

const AuthLayout = ({
  children,
  logo = 'MyApp',
  title = 'Welcome back',
  subtitle = 'Sign in to your account to continue',
}: AuthLayoutProps) => (
  <Center mih="100vh" bg="gray.0">
    <Stack w={400} gap="lg" px="md">
      <Stack align="center" gap={4}>
        <Text fw={700} size="xl" c="blue">
          {logo}
        </Text>
        <Title order={2} ta="center">
          {title}
        </Title>
        <Text size="sm" c="dimmed" ta="center">
          {subtitle}
        </Text>
      </Stack>
      <Paper shadow="md" p="xl" radius="lg">
        {children}
      </Paper>
    </Stack>
  </Center>
);

export default AuthLayout;
