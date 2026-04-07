import { Group, Text, Anchor, Button } from '@mantine/core';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const Navbar = ({
  logo = 'MyApp',
  links = [],
  ctaLabel = 'Get Started',
  onCtaClick,
}: NavbarProps) => (
  <Group
    component="nav"
    justify="space-between"
    align="center"
    px="xl"
    py="md"
    bg="white"
    style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}
  >
    <Text fw={700} size="xl" c="blue">
      {logo}
    </Text>

    <Group gap="xl" visibleFrom="sm">
      {links.map((link) => (
        <Anchor
          key={link.href}
          href={link.href}
          size="sm"
          fw={500}
          c={link.active ? 'blue' : 'gray.7'}
          underline="never"
        >
          {link.label}
        </Anchor>
      ))}
    </Group>

    <Button size="sm" onClick={onCtaClick}>
      {ctaLabel}
    </Button>
  </Group>
);

export default Navbar;
