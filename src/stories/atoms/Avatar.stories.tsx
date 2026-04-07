import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "../../components/atoms/Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Jane Doe",
    size: "medium",
    shape: "circle",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInitials: Story = {};

export const Small: Story = {
  args: { size: "small" },
};

export const Large: Story = {
  args: { size: "large" },
};

export const Square: Story = {
  args: { shape: "square" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar name="Alice Brown" size="small" />
      <Avatar name="Alice Brown" size="medium" />
      <Avatar name="Alice Brown" size="large" />
    </div>
  ),
};
