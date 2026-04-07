import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Card from "../../components/molecules/Card";
import Button from "../../components/Button";
import Badge from "../../components/atoms/Badge";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Card Title",
    children: "This is the card body content. You can place any content here.",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 380 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bordered: Story = {
  args: { variant: "bordered" },
};

export const Elevated: Story = {
  args: { variant: "elevated" },
};

export const WithFooter: Story = {
  args: {
    footer: (
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Button variant="ghost" size="small" onClick={fn()}>Cancel</Button>
        <Button variant="primary" size="small" onClick={fn()}>Confirm</Button>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    title: undefined,
    children: "A card without a title — just content.",
  },
};

export const WithBadge: Story = {
  args: {
    title: undefined,
    children: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>Monthly Revenue</span>
        <Badge variant="success">+12%</Badge>
      </div>
    ),
  },
};
