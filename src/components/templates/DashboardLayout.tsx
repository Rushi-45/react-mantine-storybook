import type { ReactNode } from 'react';
import { AppShell, NavLink, Text, Group } from '@mantine/core';
import Avatar from '../atoms/Avatar';

export interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}

export interface DashboardLayoutProps {
  children: ReactNode;
  logo?: string;
  username?: string;
  sidebarItems?: SidebarItem[];
}

const defaultItems: SidebarItem[] = [
  { label: 'Dashboard', icon: '⊞', active: true },
  { label: 'Analytics', icon: '📈' },
  { label: 'Users', icon: '👤' },
  { label: 'Settings', icon: '⚙' },
];

const DashboardLayout = ({
  children,
  logo = 'MyApp',
  username = 'Jane Doe',
  sidebarItems = defaultItems,
}: DashboardLayoutProps) => (
  <AppShell navbar={{ width: 240, breakpoint: 'sm' }} padding="md" mih="100vh">
    <AppShell.Navbar p="md" style={{ display: 'flex', flexDirection: 'column' }}>
      <Text fw={700} size="xl" c="blue" mb="md">
        {logo}
      </Text>

      <div style={{ flex: 1 }}>
        {sidebarItems.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            leftSection={<span>{item.icon}</span>}
            active={item.active}
            onClick={item.onClick}
          />
        ))}
      </div>

      <Group mt="auto" pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
        <Avatar name={username} size="small" />
        <Text size="sm" fw={500} truncate>
          {username}
        </Text>
      </Group>
    </AppShell.Navbar>

    <AppShell.Main bg="gray.0">{children}</AppShell.Main>
  </AppShell>
);

export default DashboardLayout;
