import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import HeroSection from "../../components/organisms/HeroSection";

const meta = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    onPrimaryClick: fn(),
    onSecondaryClick: fn(),
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    headline: "Ship your product in days, not months",
    subHeadline:
      "A complete design system for modern web apps. Fully accessible, customizable, and production-ready.",
    primaryCta: "Start Building",
    secondaryCta: "View Docs",
  },
};
