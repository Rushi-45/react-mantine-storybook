import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner from "../../components/atoms/Spinner";

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    size: "medium",
    color: "blue",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["blue", "gray", "white"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "small" },
};

export const Large: Story = {
  args: { size: "large" },
};

export const Gray: Story = {
  args: { color: "gray" },
};

export const WhiteOnDark: Story = {
  args: { color: "white" },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, background: "#228be6", borderRadius: 8, display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
};
