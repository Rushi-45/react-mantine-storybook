import { Stack, Title, Text, Group, Button, Container } from '@mantine/core';

export interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection = ({
  headline = 'Build faster with our platform',
  subHeadline = 'Everything you need to launch your product, from design to deployment.',
  primaryCta = 'Get Started',
  secondaryCta = 'Learn More',
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) => (
  <Container
    component="section"
    py={80}
    style={{ background: 'linear-gradient(to bottom, var(--mantine-color-blue-0), white)' }}
    fluid
  >
    <Stack align="center" gap="lg" maw={640} mx="auto" style={{ textAlign: 'center' }}>
      <Title order={1} size="h1">
        {headline}
      </Title>
      <Text size="lg" c="dimmed" maw={480}>
        {subHeadline}
      </Text>
      <Group justify="center">
        <Button size="lg" onClick={onPrimaryClick}>
          {primaryCta}
        </Button>
        <Button size="lg" variant="outline" onClick={onSecondaryClick}>
          {secondaryCta}
        </Button>
      </Group>
    </Stack>
  </Container>
);

export default HeroSection;
