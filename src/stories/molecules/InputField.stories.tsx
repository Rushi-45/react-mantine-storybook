import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within, expect } from "storybook/test";
import InputField from "../../components/molecules/InputField";

const meta = {
  title: "Molecules/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    onChange: fn(),
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithHelperText: Story = {
  args: { helperText: "We'll never share your email with anyone." },
};

export const WithError: Story = {
  args: {
    errorText: "Please enter a valid email address.",
    defaultValue: "notanemail",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    helperText: "Must be at least 8 characters.",
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "locked@example.com" },
};

export const TypeTest: Story = {
  args: { label: "Name", type: "text", placeholder: "Enter your name" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "Jane Doe");
    await expect(input).toHaveValue("Jane Doe");
  },
};
