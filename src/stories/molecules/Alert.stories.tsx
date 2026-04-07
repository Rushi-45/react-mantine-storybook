import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Alert from "../../components/molecules/Alert";

const meta = {
  title: "Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children: "This is an informational message.",
    variant: "info",
    onDismiss: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Changes saved",
    children: "Your profile has been updated successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Heads up",
    children: "Your subscription expires in 3 days.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Something went wrong",
    children: "Unable to connect. Please try again later.",
  },
};

export const Dismissible: Story = {
  args: {
    title: "New feature available",
    children: "Check out our new dashboard analytics.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480 }}>
      <Alert variant="info">Informational message.</Alert>
      <Alert variant="success">Operation completed successfully.</Alert>
      <Alert variant="warning">This action may have side effects.</Alert>
      <Alert variant="error">An error occurred. Please retry.</Alert>
    </div>
  ),
};
