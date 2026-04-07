import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Navbar from "../../components/organisms/Navbar";

const meta = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    logo: "MyApp",
    ctaLabel: "Get Started",
    onCtaClick: fn(),
    links: [
      { label: "Home", href: "#", active: true },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "About", href: "#" },
    ],
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoLinks: Story = {
  args: { links: [] },
};

export const CustomCta: Story = {
  args: { ctaLabel: "Sign Up Free" },
};
